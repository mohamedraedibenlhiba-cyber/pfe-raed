package com.pfe.saas.service;

import com.pfe.saas.dto.request.ApplicationRequest;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final CandidateRepository candidateRepository;
    private final JobOfferRepository jobOfferRepository;
    private final CVRepository cvRepository;
    private final NotificationService notificationService;
    private final AiAnalysisService aiAnalysisService;

    @Transactional
    public Application apply(Long candidateId, ApplicationRequest req) {
        if (applicationRepository.existsByCandidateIdAndJobOfferId(candidateId, req.getJobOfferId())) {
            throw new RuntimeException("Vous avez déjà postulé à cette offre");
        }
        Candidate candidate = candidateRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Candidat non trouvé"));
        JobOffer jobOffer = jobOfferRepository.findById(req.getJobOfferId())
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));

        Application application = new Application();
        application.setCandidate(candidate);
        application.setJobOffer(jobOffer);
        application.setCoverLetter(req.getCoverLetter());
        application.setCustomFieldsAnswers(req.getCustomFieldsAnswers());
        application.setStatus(ApplicationStatus.PENDING);

        if (req.getCvId() != null) {
            CV cv = cvRepository.findById(req.getCvId())
                    .orElseThrow(() -> new RuntimeException("CV non trouvé"));
            if (!cv.getCandidate().getId().equals(candidateId)) {
                throw new RuntimeException("Ce CV ne vous appartient pas");
            }
            application.setCv(cv);
        }

        Application saved = applicationRepository.save(application);

        // Notifier le recruteur
        notificationService.createNotification(
            jobOffer.getEnterprise().getId(),
            "Nouvelle candidature",
            candidate.getFullName() + " a postulé à " + jobOffer.getTitle(),
            "APPLICATION_RECEIVED",
            saved.getId()
        );

        // Lancer l'analyse IA en arrière-plan
        aiAnalysisService.analyzeApplicationAsync(saved.getId());

        return saved;
    }

    @Transactional(readOnly = true)
    public Page<Application> getApplicationsByOffer(Long jobOfferId, Long enterpriseId, Pageable pageable) {
        JobOffer offer = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        if (!offer.getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        return applicationRepository.findByJobOfferId(jobOfferId, pageable);
    }

    @Transactional(readOnly = true)
    public List<Application> getCandidateApplications(Long candidateId) {
        return applicationRepository.findByCandidateId(candidateId);
    }

    @Transactional(readOnly = true)
    public List<Application> getRankedApplications(Long jobOfferId, Long enterpriseId) {
        JobOffer offer = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        if (!offer.getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        return applicationRepository.findByJobOfferIdOrderByScore(jobOfferId);
    }

    @Transactional
    public Application updateStatus(Long applicationId, Long enterpriseId, ApplicationStatus newStatus) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));
        if (!application.getJobOffer().getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        application.setStatus(newStatus);
        Application saved = applicationRepository.save(application);

        // Notifier le candidat
        notificationService.createNotification(
            application.getCandidate().getId(),
            "Mise à jour de votre candidature",
            "Votre candidature pour " + application.getJobOffer().getTitle() + " est passée à : " + newStatus.name(),
            "APPLICATION_STATUS_CHANGED",
            applicationId
        );

        return saved;
    }

    @Transactional
    public Application addRecruiterNote(Long applicationId, Long enterpriseId, String note, Integer rating) {
        Application application = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));
        if (!application.getJobOffer().getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        application.setRecruiterNotes(note);
        application.setRecruiterRating(rating);
        return applicationRepository.save(application);
    }

    public Application getById(Long id) {
        return applicationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));
    }
}
