package com.pfe.saas.service;

import com.pfe.saas.dto.response.CVResponse;
import com.pfe.saas.entity.*;
import com.pfe.saas.mapper.CVMapper;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CVService {

    private final CVRepository cvRepository;
    private final CandidateRepository candidateRepository;

    private static final String UPLOAD_DIR = "uploads/cvs/";

    @Transactional
    public CVResponse uploadCV(Long candidateId, MultipartFile file) throws IOException {
        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Candidat non trouvé"));

        // Sauvegarder le fichier
        Path uploadPath = Paths.get(UPLOAD_DIR + candidateId);
        Files.createDirectories(uploadPath);
        // Sanitisation du nom de fichier pour éviter la traversée de chemin
        String originalFilename = Paths.get(
            file.getOriginalFilename() != null ? file.getOriginalFilename() : "unknown"
        ).getFileName().toString();
        String fileName = UUID.randomUUID() + "_" + originalFilename;
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        CV cv = new CV();
        cv.setFileName(originalFilename);
        cv.setFilePath(filePath.toString());
        cv.setFileSize(file.getSize());
        cv.setContentType(file.getContentType());
        cv.setCandidate(candidate);

        // Premier CV = CV par défaut
        List<CV> existing = cvRepository.findByCandidateId(candidateId);
        if (existing.isEmpty()) {
            cv.setDefaultCv(true);
        }

        CV saved = cvRepository.save(cv);

        return CVMapper.toResponse(saved);
    }

    public List<CVResponse> getCandidateCVs(Long candidateId) {
        return cvRepository.findByCandidateId(candidateId)
                .stream()
                .map(CVMapper::toResponse)
                .toList();
    }

    @Transactional
    public CVResponse setDefaultCV(Long cvId, Long candidateId) {
        // Enlever l'ancien défaut
        cvRepository.findByCandidateIdAndDefaultCvTrue(candidateId)
                .ifPresent(old -> {
                    old.setDefaultCv(false);
                    cvRepository.save(old);
                });
        CV cv = cvRepository.findById(cvId)
                .orElseThrow(() -> new RuntimeException("CV non trouvé"));
        if (!cv.getCandidate().getId().equals(candidateId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        cv.setDefaultCv(true);
        return CVMapper.toResponse(cvRepository.save(cv));
    }

    @Transactional(readOnly = true)
    public CV getCV(Long cvId, Long candidateId) {
        CV cv = cvRepository.findById(cvId)
                .orElseThrow(() -> new RuntimeException("CV non trouvé"));
        if (!cv.getCandidate().getId().equals(candidateId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        return cv;
    }

    @Transactional
    public void deleteCV(Long cvId, Long candidateId) {
        CV cv = cvRepository.findById(cvId)
                .orElseThrow(() -> new RuntimeException("CV non trouvé"));
        if (!cv.getCandidate().getId().equals(candidateId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        try {
            Files.deleteIfExists(Paths.get(cv.getFilePath()));
        } catch (IOException e) {
            // Log l'erreur mais ne bloque pas la suppression en base
        }
        cvRepository.delete(cv);
    }
}
