package com.pfe.saas.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pfe.saas.dto.request.ApplicationRequest;
import com.pfe.saas.dto.response.EnterpriseDashboardResponse;
import com.pfe.saas.dto.response.ApplicationDetailResponse;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.enums.OfferStatus;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ApplicationService {

    private final ApplicationRepository applicationRepository;
    private final CandidateRepository candidateRepository;
    private final JobOfferRepository jobOfferRepository;
    private final CVRepository cvRepository;
    private final NotificationService notificationService;
    private final AiAnalysisService aiAnalysisService;
    private final EmailService emailService;
    private final ObjectMapper objectMapper;

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

        // Require CV: auto-use default if not provided, else fail
        if (application.getCv() == null) {
            cvRepository.findByCandidateIdAndDefaultCvTrue(candidateId)
                .ifPresent(application::setCv);
            if (application.getCv() == null) {
                throw new RuntimeException("Vous devez avoir un CV par défaut pour postuler à une offre");
            }
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

        // Envoyer l'email au candidat
        try {
            emailService.sendApplicationStatusEmail(
                application.getCandidate().getEmail(),
                application.getCandidate().getFullName(),
                application.getJobOffer().getTitle(),
                application.getJobOffer().getLocation(),
                newStatus,
                application.getJobOffer().getEnterprise().getCompanyName()
            );
        } catch (Exception e) {
            // Email sending failure doesn't block status update
            log.warn("Failed to send email notification for application {}: {}", applicationId, e.getMessage());
        }

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

    @Transactional(readOnly = true)
    public EnterpriseDashboardResponse getEnterpriseDashboard(Long enterpriseId) {
        // Récupérer les offres de l'entreprise
        List<JobOffer> offers = jobOfferRepository.findByEnterpriseId(enterpriseId);

        // Stats globales
        long totalOffers = offers.size();
        long activeOffers = offers.stream().filter(o -> o.getStatus() == OfferStatus.PUBLISHED).count();
        long draftOffers = offers.stream().filter(o -> o.getStatus() == OfferStatus.DRAFT).count();
        long totalApplications = applicationRepository.countByEnterpriseId(enterpriseId);
        long pendingApplications = applicationRepository.countByStatus(ApplicationStatus.PENDING);
        long rejectedApplications = applicationRepository.countByStatus(ApplicationStatus.REJECTED);

        // Stats par offre
        List<EnterpriseDashboardResponse.OfferStatsDto> offerStats = offers.stream()
                .map(offer -> {
                    List<Application> offerApps = applicationRepository.findByJobOfferIdOrderByScore(offer.getId());

                    long pending = offerApps.stream().filter(a -> a.getStatus() == ApplicationStatus.PENDING).count();
                    long accepted = offerApps.stream().filter(a -> a.getStatus() == ApplicationStatus.ACCEPTED).count();
                    long rejected = offerApps.stream().filter(a -> a.getStatus() == ApplicationStatus.REJECTED).count();

                    double avgScore = offerApps.stream()
                            .mapToDouble(a -> a.getAiScore() != null ? a.getAiScore() : 0)
                            .average()
                            .orElse(0);

                    // Meilleur candidat
                    EnterpriseDashboardResponse.CandidateDto topCandidate = offerApps.stream()
                            .max((a1, a2) -> Double.compare(
                                    a1.getAiScore() != null ? a1.getAiScore() : 0,
                                    a2.getAiScore() != null ? a2.getAiScore() : 0
                            ))
                            .map(app -> EnterpriseDashboardResponse.CandidateDto.builder()
                                    .id(app.getCandidate().getId())
                                    .fullName(app.getCandidate().getFullName())
                                    .email(app.getCandidate().getEmail())
                                    .skills(app.getCandidate().getSkills())
                                    .yearsExperience(app.getCandidate().getYearsExperience())
                                    .aiScore(app.getAiScore())
                                    .build())
                            .orElse(null);

                    return EnterpriseDashboardResponse.OfferStatsDto.builder()
                            .offerId(offer.getId())
                            .offertitle(offer.getTitle())
                            .applicationsCount((long) offerApps.size())
                            .pendingCount(pending)
                            .acceptedCount(accepted)
                            .rejectedCount(rejected)
                            .averageScore(avgScore)
                            .topCandidate(topCandidate)
                            .build();
                })
                .collect(Collectors.toList());

        // Score moyen global
        double globalAvgScore = applicationRepository.findByEnterpriseId(enterpriseId, org.springframework.data.domain.PageRequest.of(0, Integer.MAX_VALUE))
                .stream()
                .mapToDouble(a -> a.getAiScore() != null ? a.getAiScore() : 0)
                .average()
                .orElse(0);

        return EnterpriseDashboardResponse.builder()
                .totalOffers(totalOffers)
                .activeOffers(activeOffers)
                .draftOffers(draftOffers)
                .totalApplications(totalApplications)
                .pendingApplications(pendingApplications)
                .rejectedApplications(rejectedApplications)
                .averageScore(globalAvgScore)
                .offerStats(offerStats)
                .build();
    }

    @Transactional(readOnly = true)
    public ApplicationDetailResponse getApplicationDetail(Long applicationId, Long enterpriseId) {
        Application app = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));

        // Vérifier que l'entreprise a bien accès à cette candidature
        if (!app.getJobOffer().getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        return mapApplicationToDetail(app);
    }

    @Transactional(readOnly = true)
    public CV getApplicationCvForEnterprise(Long applicationId, Long enterpriseId) {
        Application app = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Candidature non trouvÃ©e"));

        if (!app.getJobOffer().getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("AccÃ¨s non autorisÃ©");
        }
        if (app.getCv() == null) {
            throw new RuntimeException("Aucun CV joint Ã  cette candidature");
        }

        return app.getCv();
    }

    private ApplicationDetailResponse mapApplicationToDetail(Application app) {
        Candidate candidate = app.getCandidate();
        CV cv = app.getCv();
        JobOffer offer = app.getJobOffer();

        return ApplicationDetailResponse.builder()
                .id(app.getId())
                .applicationId(app.getId())
                .candidate(ApplicationDetailResponse.CandidateProfileDto.builder()
                        .id(candidate.getId())
                        .fullName(candidate.getFullName())
                        .email(candidate.getEmail())
                        .phoneNumber(candidate.getPhoneNumber())
                        .skills(candidate.getSkills())
                        .yearsExperience(candidate.getYearsExperience())
                        .headline(candidate.getHeadline())
                        .summary(candidate.getSummary())
                        .city(candidate.getCity())
                        .country(candidate.getCountry())
                        .linkedinUrl(candidate.getLinkedinUrl())
                        .githubUrl(candidate.getGithubUrl())
                        .profilePicture(candidate.getProfilePicture())
                        .build())
                .cv(cv != null ? ApplicationDetailResponse.CVDto.builder()
                        .id(cv.getId())
                        .fileName(cv.getFileName())
                        .fileUrl("/api/applications/" + app.getId() + "/cv")
                        .fileSize(cv.getFileSize() != null ? cv.getFileSize().toString() : null)
                        .contentType(cv.getContentType())
                        .isDefault(cv.isDefaultCv())
                        .build() : null)
                .jobOffer(ApplicationDetailResponse.JobOfferSummaryDto.builder()
                        .id(offer.getId())
                        .title(offer.getTitle())
                        .description(offer.getDescription())
                        .location(offer.getLocation())
                        .remote(offer.isRemote())
                        .contractType(offer.getContractType() != null ? offer.getContractType().name() : null)
                        .salaryMin(offer.getSalaryMin())
                        .salaryMax(offer.getSalaryMax())
                        .requiredSkills(offer.getRequiredSkills())
                        .experienceLevel(offer.getExperienceLevel() != null ? offer.getExperienceLevel().name() : null)
                        .experienceRequired(offer.getExperienceRequired())
                        .build())
                .coverLetter(app.getCoverLetter())
                .customFieldsAnswers(app.getCustomFieldsAnswers())
                .status(app.getStatus().name())
                .aiScore(app.getAiScore())
                .aiSummary(app.getAiSummary())
                .aiFeedback(app.getAiFeedback())
                .aiCandidateFeedback(app.getAiCandidateFeedback())
                .aiInterviewQuestions(parseQuestions(app.getAiInterviewQuestions()))
                .cvSummary(cv != null ? cv.getAiSummary() : null)
                .recruiterNotes(app.getRecruiterNotes())
                .recruiterRating(app.getRecruiterRating())
                .appliedAt(app.getAppliedAt())
                .updatedAt(app.getUpdatedAt())
                .build();
    }

    @Transactional(readOnly = true)
    public Page<ApplicationDetailResponse> getApplicationsByOfferWithDetails(Long jobOfferId, Long enterpriseId, Pageable pageable) {
        JobOffer offer = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        if (!offer.getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        Page<Application> applications = applicationRepository.findByJobOfferId(jobOfferId, pageable);
        return applications.map(this::mapApplicationToDetail);
    }

    @Transactional(readOnly = true)
    public List<ApplicationDetailResponse> getApplicationsByOfferRankedWithDetails(Long jobOfferId, Long enterpriseId) {
        JobOffer offer = jobOfferRepository.findById(jobOfferId)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        if (!offer.getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        return applicationRepository.findByJobOfferIdOrderByScore(jobOfferId)
                .stream()
                .map(this::mapApplicationToDetail)
                .collect(Collectors.toList());
    }

    @Transactional
    public void triggerAnalysis(Long applicationId, Long enterpriseId) {
        Application app = applicationRepository.findById(applicationId)
                .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));
        if (!app.getJobOffer().getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        aiAnalysisService.analyzeApplicationAsync(applicationId);
    }

    private List<String> parseQuestions(String json) {
        if (json == null || json.isBlank()) return Collections.emptyList();
        try { return objectMapper.readValue(json, new TypeReference<>() {}); }
        catch (Exception e) { return Collections.emptyList(); }
    }
}
