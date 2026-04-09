package com.pfe.saas.service;

import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.repository.ApplicationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

/**
 * Service d'analyse IA — simule un pipeline LLM.
 * Dans un vrai projet, remplacer les placeholders par des appels
 * à OpenAI / HuggingFace / LangChain4j.
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class AiAnalysisService {

    private final ApplicationRepository applicationRepository;
    private final NotificationService notificationService;

    @Async
    @Transactional
    public void analyzeApplicationAsync(Long applicationId) {
        try {
            Application application = applicationRepository.findById(applicationId)
                    .orElseThrow(() -> new RuntimeException("Candidature non trouvée"));

            application.setStatus(ApplicationStatus.AI_ANALYZED);

            // --- Scoring IA ---
            double score = computeAiScore(application);
            application.setAiScore(score);

            // --- Résumé IA ---
            String summary = generateAiSummary(application);
            application.setAiSummary(summary);

            // --- Feedback IA ---
            String feedback = generateAiFeedback(application, score);
            application.setAiFeedback(feedback);

            applicationRepository.save(application);

            // Notifier le recruteur que l'analyse est terminée
            notificationService.createNotification(
                application.getJobOffer().getEnterprise().getId(),
                "Analyse IA terminée",
                "L'analyse IA de la candidature de " + application.getCandidate().getFullName() + " est prête.",
                "AI_ANALYSIS_DONE",
                applicationId
            );

            log.info("Analyse IA terminée pour la candidature {}", applicationId);
        } catch (Exception e) {
            log.error("Erreur lors de l'analyse IA de la candidature {} : {}", applicationId, e.getMessage());
        }
    }

    /**
     * Calcule un score basé sur l'adéquation compétences / expérience.
     * Remplacer par un appel LLM réel.
     */
    private double computeAiScore(Application application) {
        Candidate candidate = application.getCandidate();
        JobOffer offer = application.getJobOffer();

        if (offer.getRequiredSkills() == null || candidate.getSkills() == null) {
            return 50.0;
        }

        List<String> required = Arrays.asList(offer.getRequiredSkills().toLowerCase().split("[,;]"));
        List<String> candidateSkills = Arrays.asList(candidate.getSkills().toLowerCase().split("[,;]"));

        long matches = required.stream()
                .filter(skill -> candidateSkills.stream().anyMatch(cs -> cs.trim().contains(skill.trim())))
                .count();

        double skillScore = required.isEmpty() ? 50 : (matches * 100.0 / required.size());

        // Bonus expérience
        double expBonus = 0;
        if (offer.getExperienceRequired() != null && candidate.getYearsExperience() != null) {
            expBonus = candidate.getYearsExperience() >= offer.getExperienceRequired() ? 10 : -5;
        }

        return Math.min(100, Math.max(0, skillScore + expBonus));
    }

    /** Génère un résumé automatique — remplacer par appel OpenAI GPT-4 */
    private String generateAiSummary(Application application) {
        return String.format(
            "Candidat : %s | Compétences : %s | Expérience : %d ans | Score d'adéquation : %.1f%%",
            application.getCandidate().getFullName(),
            application.getCandidate().getSkills(),
            application.getCandidate().getYearsExperience() != null ? application.getCandidate().getYearsExperience() : 0,
            application.getAiScore()
        );
    }

    /** Génère un feedback — remplacer par appel LLM */
    private String generateAiFeedback(Application application, double score) {
        if (score >= 80) return "Profil très adapté au poste. Compétences techniques fortement alignées.";
        if (score >= 60) return "Profil globalement adapté. Quelques lacunes sur certaines compétences requises.";
        if (score >= 40) return "Profil partiellement adapté. Formation complémentaire recommandée.";
        return "Profil peu correspondant aux exigences du poste.";
    }
}
