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
import java.util.stream.Collectors;

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
     * Calcule un score intelligent basé sur :
     * - Matching des compétences requises (40%)
     * - Matching du tech stack (15%)
     * - Matching du niveau d'expérience (15%)
     * - Matching des années d'expérience (15%)
     * - Localisation (10%)
     * - Type de contrat + Candidat ouvert au travail (5%)
     */
    private double computeAiScore(Application application) {
        Candidate candidate = application.getCandidate();
        JobOffer offer = application.getJobOffer();

        double scores = 0;
        double totalWeight = 0;

        // 1️⃣ SKILLS MATCHING (40%) - Le plus important
        double skillScore = computeSkillScore(candidate, offer);
        scores += skillScore * 0.40;
        totalWeight += 0.40;

        // 2️⃣ TECH STACK MATCHING (15%)
        double techScore = computeTechStackScore(candidate, offer);
        scores += techScore * 0.15;
        totalWeight += 0.15;

        // 3️⃣ EXPERIENCE LEVEL MATCHING (15%)
        double expLevelScore = computeExperienceLevelScore(candidate, offer);
        scores += expLevelScore * 0.15;
        totalWeight += 0.15;

        // 4️⃣ YEARS OF EXPERIENCE (15%)
        double yearsScore = computeYearsExperienceScore(candidate, offer);
        scores += yearsScore * 0.15;
        totalWeight += 0.15;

        // 5️⃣ LOCATION MATCHING (10%)
        double locationScore = computeLocationScore(candidate, offer);
        scores += locationScore * 0.10;
        totalWeight += 0.10;

        // 6️⃣ CONTRACT TYPE + OPENNESS (5%)
        double contractScore = computeContractScore(candidate, offer);
        scores += contractScore * 0.05;
        totalWeight += 0.05;

        double finalScore = totalWeight > 0 ? scores / totalWeight : 50.0;
        return Math.min(100, Math.max(0, finalScore));
    }

    private double computeSkillScore(Candidate candidate, JobOffer offer) {
        if (offer.getRequiredSkills() == null || candidate.getSkills() == null) {
            return 50.0;
        }

        List<String> requiredFull = Arrays.asList(offer.getRequiredSkills().toLowerCase().split("[,;\\s]+"));
        List<String> candidateSkillsFull = Arrays.asList(candidate.getSkills().toLowerCase().split("[,;\\s]+"));

        // Filtrer les compétences vides
        final List<String> required = requiredFull.stream().filter(s -> !s.trim().isEmpty()).collect(Collectors.toList());
        final List<String> candidateSkills = candidateSkillsFull.stream().filter(s -> !s.trim().isEmpty()).collect(Collectors.toList());

        if (required.isEmpty()) return 50.0;

        long matches = required.stream()
                .filter(skill -> candidateSkills.stream()
                        .anyMatch(cs -> cs.trim().equalsIgnoreCase(skill.trim()) || cs.trim().contains(skill.trim())))
                .count();

        return (matches * 100.0) / required.size();
    }

    private double computeTechStackScore(Candidate candidate, JobOffer offer) {
        if (offer.getTechStack() == null || candidate.getSkills() == null) {
            return 50.0;
        }

        List<String> techRequiredFull = Arrays.asList(offer.getTechStack().toLowerCase().split("[,;\\s]+"));
        List<String> candidateSkillsFull = Arrays.asList(candidate.getSkills().toLowerCase().split("[,;\\s]+"));

        final List<String> techRequired = techRequiredFull.stream().filter(s -> !s.trim().isEmpty()).collect(Collectors.toList());
        final List<String> candidateSkills = candidateSkillsFull.stream().filter(s -> !s.trim().isEmpty()).collect(Collectors.toList());

        if (techRequired.isEmpty()) return 50.0;

        long matches = techRequired.stream()
                .filter(tech -> candidateSkills.stream()
                        .anyMatch(cs -> cs.trim().equalsIgnoreCase(tech.trim()) || cs.trim().contains(tech.trim())))
                .count();

        return (matches * 100.0) / techRequired.size();
    }

    private double computeExperienceLevelScore(Candidate candidate, JobOffer offer) {
        if (offer.getExperienceLevel() == null) {
            return 50.0;
        }

        // Mapper les années d'expérience au niveau
        Integer yearsExp = candidate.getYearsExperience() != null ? candidate.getYearsExperience() : 0;
        String candidateLevel = mapYearsToLevel(yearsExp);

        // Score parfait si niveaux correspondent
        if (candidateLevel.equalsIgnoreCase(offer.getExperienceLevel().name())) {
            return 100.0;
        }

        // Bonus si le candidat est surqualifié (mais sous-qualifié = mauvais)
        if (isHigherLevel(candidateLevel, offer.getExperienceLevel().name())) {
            return 85.0; // Peut faire le job mais peut s'ennuyer
        }

        // Pénalité si sous-qualifié
        if (isLowerLevel(candidateLevel, offer.getExperienceLevel().name())) {
            return 40.0; // Risque plus élevé
        }

        return 50.0;
    }

    private double computeYearsExperienceScore(Candidate candidate, JobOffer offer) {
        if (offer.getExperienceRequired() == null || candidate.getYearsExperience() == null) {
            return 50.0;
        }

        int required = offer.getExperienceRequired();
        int actual = candidate.getYearsExperience();

        if (actual >= required) {
            // Score parfait si bien correspondu, bonus si surqualifié
            return Math.min(100.0, 80.0 + (actual - required) * 2);
        } else {
            // Sous-qualifié : pénalité progressive
            int gap = required - actual;
            return Math.max(20.0, 80.0 - (gap * 15));
        }
    }

    private double computeLocationScore(Candidate candidate, JobOffer offer) {
        if (offer.isRemote()) {
            return 100.0; // Pas important si remote
        }

        if (candidate.getCity() == null || offer.getLocation() == null) {
            return 50.0;
        }

        // Même ville = score parfait
        if (candidate.getCity().equalsIgnoreCase(offer.getLocation())) {
            return 100.0;
        }

        // Localisation différente mais possible
        return 60.0;
    }

    private double computeContractScore(Candidate candidate, JobOffer offer) {
        if (!candidate.isOpenToWork()) {
            return 30.0; // Fort pénalité si pas ouvert au travail
        }

        // Pas assez d'infos ? Score neutre
        if (offer.getContractType() == null) {
            return 50.0;
        }

        return 90.0; // Candidate est ouvert, c'est positif
    }

    private String mapYearsToLevel(Integer years) {
        if (years == null) return "JUNIOR";
        if (years < 2) return "JUNIOR";
        if (years < 5) return "MID";
        if (years < 8) return "SENIOR";
        return "LEAD";
    }

    private boolean isHigherLevel(String actual, String required) {
        int actualRank = levelRank(actual);
        int requiredRank = levelRank(required);
        return actualRank > requiredRank;
    }

    private boolean isLowerLevel(String actual, String required) {
        int actualRank = levelRank(actual);
        int requiredRank = levelRank(required);
        return actualRank < requiredRank;
    }

    private int levelRank(String level) {
        return switch (level) {
            case "JUNIOR" -> 1;
            case "MID" -> 2;
            case "SENIOR" -> 3;
            case "LEAD" -> 4;
            default -> 0;
        };
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
        Candidate candidate = application.getCandidate();
        JobOffer offer = application.getJobOffer();

        if (score >= 85) {
            return "🎯 Profil EXCELLENT - Très forte adéquation. Compétences techniques et expérience alignées. À entrevue immédiatement.";
        }
        if (score >= 75) {
            return "✅ Profil TRÈS BON - Bonne adéquation globale. Quelques compétences manquent mais acquisition rapide probable.";
        }
        if (score >= 65) {
            return "👍 Profil BON - Adéquation acceptable. Candidat capable de s'adapter et d'apprendre rapidement.";
        }
        if (score >= 50) {
            return "⚠️ Profil MOYEN - Adéquation partielle. Pourrait bénéficier de formation complémentaire sur certains domaines.";
        }
        if (score >= 30) {
            return "⛔ Profil FAIBLE - Adéquation limitée. Important écart entre compétences requises et actuelles.";
        }
        return "❌ Profil NE CORRESPOND PAS - Écart significatif avec les exigences du poste.";
    }
}
