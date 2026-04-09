package com.pfe.saas.service;

import com.pfe.saas.entity.Application;
import com.pfe.saas.repository.ApplicationRepository;
import com.pfe.saas.repository.JobOfferRepository;
import lombok.RequiredArgsConstructor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.apache.poi.xwpf.usermodel.*;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExportService {

    private final ApplicationRepository applicationRepository;
    private final JobOfferRepository jobOfferRepository;

    /** Export des candidatures d'une offre en Excel */
    public byte[] exportApplicationsToExcel(Long jobOfferId, Long enterpriseId) throws IOException {
        jobOfferRepository.findById(jobOfferId)
                .filter(o -> o.getEnterprise().getId().equals(enterpriseId))
                .orElseThrow(() -> new RuntimeException("Offre non trouvée ou accès non autorisé"));

        List<Application> applications = applicationRepository.findByJobOfferIdOrderByScore(jobOfferId);

        try (Workbook workbook = new XSSFWorkbook()) {
            Sheet sheet = workbook.createSheet("Candidatures");

            // Style en-tête créé UNE FOIS hors boucle
            CellStyle headerStyle = workbook.createCellStyle();
            Font headerFont = workbook.createFont();
            headerFont.setBold(true);
            headerStyle.setFont(headerFont);

            // En-têtes
            Row header = sheet.createRow(0);
            String[] columns = {"ID", "Candidat", "Email", "Score IA", "Statut",
                                 "Résumé IA", "Note recruteur", "Date candidature"};
            for (int i = 0; i < columns.length; i++) {
                Cell cell = header.createCell(i);
                cell.setCellValue(columns[i]);
                cell.setCellStyle(headerStyle);
            }

            // Données
            int rowNum = 1;
            for (Application app : applications) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(app.getId());
                row.createCell(1).setCellValue(app.getCandidate().getFullName());
                row.createCell(2).setCellValue(app.getCandidate().getEmail());
                row.createCell(3).setCellValue(app.getAiScore() != null ? app.getAiScore() : 0);
                row.createCell(4).setCellValue(app.getStatus().name());
                row.createCell(5).setCellValue(app.getAiSummary() != null ? app.getAiSummary() : "");
                row.createCell(6).setCellValue(app.getRecruiterRating() != null ? app.getRecruiterRating() : 0);
                row.createCell(7).setCellValue(app.getAppliedAt().toString());
            }

            for (int i = 0; i < columns.length; i++) sheet.autoSizeColumn(i);

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            workbook.write(out);
            return out.toByteArray();
        }
    }

    /** Export des candidatures en Word */
    public byte[] exportApplicationsToWord(Long jobOfferId, Long enterpriseId) throws IOException {
        jobOfferRepository.findById(jobOfferId)
                .filter(o -> o.getEnterprise().getId().equals(enterpriseId))
                .orElseThrow(() -> new RuntimeException("Offre non trouvée ou accès non autorisé"));
        List<Application> applications = applicationRepository.findByJobOfferIdOrderByScore(jobOfferId);

        try (XWPFDocument document = new XWPFDocument()) {
            XWPFParagraph title = document.createParagraph();
            title.setAlignment(ParagraphAlignment.CENTER);
            XWPFRun titleRun = title.createRun();
            titleRun.setText("Rapport des Candidatures — Analyse IA");
            titleRun.setBold(true);
            titleRun.setFontSize(16);

            for (Application app : applications) {
                document.createParagraph().createRun().addBreak();
                XWPFParagraph para = document.createParagraph();
                XWPFRun run = para.createRun();
                run.setBold(true);
                run.setText(app.getCandidate().getFullName() + " — Score : " +
                            (app.getAiScore() != null ? String.format("%.1f", app.getAiScore()) : "N/A") + "/100");
                run.addBreak();
                run.setText("Email : " + app.getCandidate().getEmail());
                run.addBreak();
                run.setText("Statut : " + app.getStatus().name());
                run.addBreak();
                if (app.getAiSummary() != null) {
                    run.setText("Résumé IA : " + app.getAiSummary());
                    run.addBreak();
                }
                if (app.getAiFeedback() != null) {
                    run.setText("Feedback IA : " + app.getAiFeedback());
                }
            }

            ByteArrayOutputStream out = new ByteArrayOutputStream();
            document.write(out);
            return out.toByteArray();
        }
    }
}
