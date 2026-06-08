package com.pfe.saas.service;

import com.pfe.saas.dto.request.InterviewRequest;
import com.pfe.saas.dto.response.InterviewResponse;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.enums.InterviewStatus;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class InterviewService {

    private final InterviewRepository interviewRepository;
    private final ApplicationRepository applicationRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    private final EmailService emailService;

    private static final DateTimeFormatter DATE_FMT =
        DateTimeFormatter.ofPattern("dd/MM/yyyy 'à' HH:mm");

    // ── Enterprise: proposer un entretien ────────────────────────────────────

    @Transactional
    public InterviewResponse proposeInterview(Long enterpriseId, InterviewRequest req) {
        Application application = applicationRepository.findById(req.getApplicationId())
                .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));

        if (!application.getJobOffer().getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        if (interviewRepository.existsByApplicationId(req.getApplicationId())) {
            throw new RuntimeException("Un entretien existe déjà pour cette candidature");
        }

        Enterprise enterprise = enterpriseRepository.findById(enterpriseId)
                .orElseThrow(() -> new RuntimeException("Entreprise non trouvée"));

        Interview interview = new Interview();
        interview.setApplication(application);
        interview.setEnterprise(enterprise);
        interview.setCandidate(application.getCandidate());
        interview.setScheduledAt(req.getScheduledAt());
        interview.setDurationMinutes(req.getDurationMinutes() != null ? req.getDurationMinutes() : 60);
        interview.setType(req.getType());
        interview.setMeetingLink(req.getMeetingLink());
        interview.setLocation(req.getLocation());
        interview.setEnterpriseNotes(req.getEnterpriseNotes());
        interview.setStatus(InterviewStatus.PROPOSED);

        Interview saved = interviewRepository.save(interview);

        // Passer le statut de la candidature en INTERVIEW
        application.setStatus(ApplicationStatus.INTERVIEW);
        applicationRepository.save(application);

        // Notification in-app
        notificationService.createNotification(
            application.getCandidate().getId(),
            "Invitation à un entretien",
            enterprise.getCompanyName() + " vous invite à un entretien le " + req.getScheduledAt().format(DATE_FMT),
            "INTERVIEW_PROPOSED",
            saved.getId()
        );

        // Email au candidat
        try {
            emailService.sendInterviewInvitationEmail(
                application.getCandidate().getEmail(),
                application.getCandidate().getFullName(),
                enterprise.getCompanyName(),
                application.getJobOffer().getTitle(),
                saved.getScheduledAt(),
                saved.getDurationMinutes(),
                saved.getType().name(),
                saved.getMeetingLink(),
                saved.getLocation()
            );
        } catch (Exception e) {
            log.warn("Email entretien non envoyé : {}", e.getMessage());
        }

        return toResponse(saved);
    }

    // ── Candidate: confirmer ─────────────────────────────────────────────────

    @Transactional
    public InterviewResponse confirmInterview(Long interviewId, Long candidateId, String note) {
        Interview interview = getInterviewForCandidate(interviewId, candidateId);

        if (interview.getStatus() != InterviewStatus.PROPOSED) {
            throw new RuntimeException("Cet entretien ne peut plus être confirmé");
        }

        interview.setStatus(InterviewStatus.CONFIRMED);
        if (note != null) interview.setCandidateNote(note);
        Interview saved = interviewRepository.save(interview);

        notificationService.createNotification(
            interview.getEnterprise().getId(),
            "Entretien confirmé",
            interview.getCandidate().getFullName() + " a confirmé l'entretien du " + interview.getScheduledAt().format(DATE_FMT),
            "INTERVIEW_CONFIRMED",
            interviewId
        );

        try {
            emailService.sendInterviewConfirmedEmail(
                interview.getEnterprise().getEmail(),
                interview.getEnterprise().getFullName(),
                interview.getCandidate().getFullName(),
                interview.getApplication().getJobOffer().getTitle(),
                interview.getScheduledAt(),
                note
            );
        } catch (Exception e) {
            log.warn("Email confirmation entretien non envoyé : {}", e.getMessage());
        }

        return toResponse(saved);
    }

    // ── Annuler (candidat ou entreprise) ─────────────────────────────────────

    @Transactional
    public InterviewResponse cancelInterview(Long interviewId, Long userId, String reason) {
        Interview interview = interviewRepository.findById(interviewId)
                .orElseThrow(() -> new RuntimeException("Entretien non trouvé"));

        boolean isCandidateOrEnterprise = interview.getCandidate().getId().equals(userId)
                || interview.getEnterprise().getId().equals(userId);
        if (!isCandidateOrEnterprise) throw new RuntimeException("Accès non autorisé");

        if (interview.getStatus() == InterviewStatus.COMPLETED || interview.getStatus() == InterviewStatus.CANCELLED) {
            throw new RuntimeException("Cet entretien ne peut plus être annulé");
        }

        interview.setStatus(InterviewStatus.CANCELLED);
        interview.setCancellationReason(reason);
        Interview saved = interviewRepository.save(interview);

        Long notifyTarget = interview.getCandidate().getId().equals(userId)
            ? interview.getEnterprise().getId()
            : interview.getCandidate().getId();

        notificationService.createNotification(
            notifyTarget,
            "Entretien annulé",
            "L'entretien du " + interview.getScheduledAt().format(DATE_FMT) + " a été annulé.",
            "INTERVIEW_CANCELLED",
            interviewId
        );

        try {
            emailService.sendInterviewCancelledEmail(
                interview.getCandidate().getId().equals(userId)
                    ? interview.getEnterprise().getEmail() : interview.getCandidate().getEmail(),
                interview.getCandidate().getId().equals(userId)
                    ? interview.getEnterprise().getFullName() : interview.getCandidate().getFullName(),
                interview.getApplication().getJobOffer().getTitle(),
                interview.getScheduledAt(),
                reason
            );
        } catch (Exception e) {
            log.warn("Email annulation entretien non envoyé : {}", e.getMessage());
        }

        return toResponse(saved);
    }

    // ── Marquer comme complété (entreprise) ──────────────────────────────────

    @Transactional
    public InterviewResponse completeInterview(Long interviewId, Long enterpriseId) {
        Interview interview = interviewRepository.findById(interviewId)
                .orElseThrow(() -> new RuntimeException("Entretien non trouvé"));
        if (!interview.getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        interview.setStatus(InterviewStatus.COMPLETED);
        return toResponse(interviewRepository.save(interview));
    }

    // ── Lectures ─────────────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<InterviewResponse> getInterviewsForEnterprise(Long enterpriseId) {
        return interviewRepository.findByEnterpriseIdOrderByScheduledAtDesc(enterpriseId)
                .stream().map(this::toResponse).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public List<InterviewResponse> getInterviewsForCandidate(Long candidateId) {
        return interviewRepository.findByCandidateIdOrderByScheduledAtDesc(candidateId)
                .stream().map(this::toResponse).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public InterviewResponse getByApplication(Long applicationId) {
        return interviewRepository.findByApplicationId(applicationId)
                .map(this::toResponse)
                .orElse(null);
    }

    @Transactional(readOnly = true)
    public InterviewResponse getById(Long id) {
        return toResponse(interviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Entretien non trouvé")));
    }

    // ── Rappels automatiques (24h avant) ─────────────────────────────────────

    @Scheduled(cron = "0 0 8 * * *")
    public void sendDailyReminders() {
        LocalDateTime from = LocalDateTime.now().plusHours(23);
        LocalDateTime to   = LocalDateTime.now().plusHours(25);

        List<Interview> upcoming = interviewRepository.findUpcoming(InterviewStatus.CONFIRMED, from, to);
        log.info("Envoi de {} rappels d'entretien", upcoming.size());

        for (Interview iv : upcoming) {
            try {
                emailService.sendInterviewReminderEmail(
                    iv.getCandidate().getEmail(),
                    iv.getCandidate().getFullName(),
                    iv.getEnterprise().getCompanyName(),
                    iv.getApplication().getJobOffer().getTitle(),
                    iv.getScheduledAt(),
                    iv.getType().name(),
                    iv.getMeetingLink(),
                    iv.getLocation()
                );
                emailService.sendInterviewReminderEmail(
                    iv.getEnterprise().getEmail(),
                    iv.getEnterprise().getFullName(),
                    iv.getCandidate().getFullName(),
                    iv.getApplication().getJobOffer().getTitle(),
                    iv.getScheduledAt(),
                    iv.getType().name(),
                    iv.getMeetingLink(),
                    iv.getLocation()
                );
            } catch (Exception e) {
                log.warn("Rappel entretien {} non envoyé : {}", iv.getId(), e.getMessage());
            }
        }
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private Interview getInterviewForCandidate(Long interviewId, Long candidateId) {
        Interview iv = interviewRepository.findById(interviewId)
                .orElseThrow(() -> new RuntimeException("Entretien non trouvé"));
        if (!iv.getCandidate().getId().equals(candidateId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        return iv;
    }

    private InterviewResponse toResponse(Interview iv) {
        return InterviewResponse.builder()
                .id(iv.getId())
                .applicationId(iv.getApplication().getId())
                .candidate(InterviewResponse.CandidateInfo.builder()
                        .id(iv.getCandidate().getId())
                        .fullName(iv.getCandidate().getFullName())
                        .email(iv.getCandidate().getEmail())
                        .profilePicture(iv.getCandidate().getProfilePicture())
                        .build())
                .enterprise(InterviewResponse.EnterpriseInfo.builder()
                        .id(iv.getEnterprise().getId())
                        .companyName(iv.getEnterprise().getCompanyName())
                        .companyLogo(iv.getEnterprise().getCompanyLogo())
                        .build())
                .jobOffer(InterviewResponse.JobOfferInfo.builder()
                        .id(iv.getApplication().getJobOffer().getId())
                        .title(iv.getApplication().getJobOffer().getTitle())
                        .location(iv.getApplication().getJobOffer().getLocation())
                        .build())
                .scheduledAt(iv.getScheduledAt())
                .durationMinutes(iv.getDurationMinutes())
                .type(iv.getType())
                .status(iv.getStatus())
                .meetingLink(iv.getMeetingLink())
                .location(iv.getLocation())
                .enterpriseNotes(iv.getEnterpriseNotes())
                .candidateNote(iv.getCandidateNote())
                .cancellationReason(iv.getCancellationReason())
                .createdAt(iv.getCreatedAt())
                .updatedAt(iv.getUpdatedAt())
                .build();
    }
}
