package com.pfe.saas.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfReader;
import com.itextpdf.kernel.pdf.canvas.parser.PdfTextExtractor;
import com.pfe.saas.entity.Application;
import com.pfe.saas.entity.CV;
import com.pfe.saas.entity.Candidate;
import com.pfe.saas.entity.JobOffer;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.repository.ApplicationRepository;
import com.pfe.saas.repository.CVRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class AiAnalysisService {

    private final ApplicationRepository applicationRepository;
    private final CVRepository cvRepository;
    private final NotificationService notificationService;
    private final ObjectMapper objectMapper;
    private final GroqService groqService;

    // ── Dictionnaire de compétences techniques ────────────────────────────────

    private static final List<String> TECH_SKILLS = List.of(
        "java", "spring", "spring boot", "hibernate", "jpa", "maven", "gradle", "junit", "tomcat",
        "python", "django", "flask", "fastapi", "pandas", "numpy", "scikit", "pytorch", "tensorflow",
        "javascript", "typescript", "node", "nodejs", "express", "react", "angular", "vue", "next.js",
        "php", "laravel", "symfony", "wordpress",
        "c#", ".net", "asp.net", "xamarin",
        "c++", "rust", "go", "golang", "scala", "kotlin", "swift",
        "mysql", "postgresql", "mongodb", "redis", "oracle", "sql server", "sqlite", "elasticsearch",
        "docker", "kubernetes", "k8s", "jenkins", "gitlab ci", "github actions", "ansible", "terraform",
        "aws", "azure", "gcp", "firebase", "heroku",
        "linux", "bash", "shell", "powershell",
        "html", "css", "sass", "scss", "bootstrap", "tailwind", "material",
        "graphql", "rest", "soap", "microservices", "kafka", "rabbitmq", "grpc",
        "machine learning", "deep learning", "nlp", "computer vision", "data science",
        "git", "svn", "agile", "scrum", "kanban", "jira", "confluence",
        "android", "ios", "react native", "flutter",
        "xml", "json", "yaml", "openapi", "swagger",
        "selenium", "cypress", "jest", "mockito", "postman"
    );

    private static final List<String> EDU_DOCTORAL = List.of("phd", "doctorat", "doctorate", "thèse", "these", "dr.");
    private static final List<String> EDU_MASTER    = List.of("master", "m2", "m1", "mastère", "mastere", "mba", "bac+5", "bac + 5", "ingénieur", "ingenieur", "grande école", "grande ecole");
    private static final List<String> EDU_LICENCE   = List.of("licence", "bachelor", "bac+3", "bac + 3", "l3", "l2", "l1", "deug");
    private static final List<String> EDU_BTS_DUT   = List.of("bts", "dut", "bac+2", "bac + 2", "iut");

    // ── Point d'entrée principal ──────────────────────────────────────────────

    @Async
    public void analyzeApplicationAsync(Long applicationId) {
        try {
            Application application = applicationRepository.findById(applicationId)
                    .orElseThrow(() -> new RuntimeException("Candidature non trouvée : " + applicationId));

            log.info("Début analyse Groq — candidature {} — candidat : {}", applicationId,
                    application.getCandidate().getFullName());

            // 1. Extraire et analyser le CV localement (pour enrichir le prompt)
            CvAnalysis cvAnalysis = extractAndAnalyzeCv(application);
            log.info("CV analysé — {} compétences détectées, {} mots",
                    cvAnalysis.cvOnlySkills().size(), cvAnalysis.wordCount());

            // 2. Persister les données extraites du CV (non-bloquant)
            if (application.getCv() != null && cvAnalysis.hasContent()) {
                try {
                    persistCvAnalysis(application.getCv(), cvAnalysis, application);
                    log.info("CV summary sauvegardé pour cv_id={}", application.getCv().getId());
                } catch (Exception cvEx) {
                    log.warn("Persistance CV ignorée pour candidature {} : {}", applicationId, cvEx.getMessage());
                }
            }

            // 3. Appeler Groq pour le scoring et les feedbacks
            GroqAnalysisResult groqResult = callGroqForAnalysis(application, cvAnalysis);

            double score;
            String recruiterFeedback;
            String candidateFeedback;
            List<String> questions;

            if (groqResult != null) {
                score = groqResult.globalScore();
                recruiterFeedback = groqResult.recruiterFeedback();
                candidateFeedback = groqResult.candidateFeedback();
                questions = groqResult.interviewQuestions();
                log.info("Analyse Groq réussie — score {}/100 — niveau {}", String.format("%.0f", score), groqResult.level());
            } else {
                // Fallback : scoring local si Groq échoue
                log.warn("Groq indisponible pour candidature {} — fallback scoring local", applicationId);
                score = computeScoreFallback(application, cvAnalysis);
                recruiterFeedback = buildRecruiterFeedbackFallback(application, cvAnalysis, score);
                candidateFeedback = buildCandidateFeedbackFallback(application, cvAnalysis, score);
                questions = buildInterviewQuestionsFallback(application, cvAnalysis);
            }

            // 4. Résumé du candidat (généré localement)
            String summary = buildSummary(application, cvAnalysis);

            // 5. Persister les résultats
            application.setStatus(ApplicationStatus.AI_ANALYZED);
            application.setAiScore(score);
            application.setAiSummary(summary);
            application.setAiFeedback(recruiterFeedback);
            application.setAiCandidateFeedback(candidateFeedback);
            application.setAiInterviewQuestions(serializeList(questions));
            applicationRepository.save(application);

            log.info("Analyse candidature {} terminée — score {}/100", applicationId, String.format("%.0f", score));

            // 6. Notification in-app
            try {
                notificationService.createNotification(
                    application.getJobOffer().getEnterprise().getId(),
                    "Analyse IA terminée",
                    "Analyse de " + application.getCandidate().getFullName()
                        + " — Score : " + String.format("%.0f", score) + "/100",
                    "AI_ANALYSIS_DONE",
                    applicationId
                );
            } catch (Exception notifEx) {
                log.warn("Notification non envoyée pour candidature {} : {}", applicationId, notifEx.getMessage());
            }

        } catch (Exception e) {
            log.error("Erreur analyse candidature {} : {}", applicationId, e.getMessage(), e);
            // Filet de sécurité : même en cas d'erreur totale, sauvegarder un score minimal
            // pour que le poll frontend ne tourne pas indéfiniment
            try {
                Application failedApp = applicationRepository.findById(applicationId).orElse(null);
                if (failedApp != null && failedApp.getAiScore() == null) {
                    failedApp.setStatus(ApplicationStatus.AI_ANALYZED);
                    failedApp.setAiScore(0.0);
                    failedApp.setAiFeedback("Analyse IA temporairement indisponible. Veuillez relancer l'analyse.");
                    failedApp.setAiCandidateFeedback("Votre candidature a bien été enregistrée.");
                    failedApp.setAiInterviewQuestions("[]");
                    applicationRepository.save(failedApp);
                    log.warn("Filet de sécurité activé pour candidature {} — score 0 sauvegardé", applicationId);
                }
            } catch (Exception safetyEx) {
                log.error("Filet de sécurité échoué pour candidature {} : {}", applicationId, safetyEx.getMessage());
            }
        }
    }

    // ── Appel Groq + parsing ──────────────────────────────────────────────────

    private GroqAnalysisResult callGroqForAnalysis(Application application, CvAnalysis cvAnalysis) {
        try {
            String prompt = buildAnalysisPrompt(application, cvAnalysis);

            String systemPrompt = """
                Tu es un expert RH spécialisé en recrutement IT.
                Analyse la candidature décrite et retourne UNIQUEMENT un objet JSON valide, sans texte avant ni après.
                Respecte scrupuleusement la structure JSON demandée.
                """;

            String response = groqService.chatWithSystem(systemPrompt, prompt);
            log.debug("Réponse Groq brute reçue ({} caractères)", response.length());

            return parseGroqResponse(response);

        } catch (Exception e) {
            log.error("Erreur appel Groq pour analyse : {}", e.getMessage());
            return null;
        }
    }

    private String buildAnalysisPrompt(Application application, CvAnalysis cvAnalysis) {
        Candidate c = application.getCandidate();
        JobOffer o = application.getJobOffer();

        String cvText = cvAnalysis.hasContent()
            ? (cvAnalysis.rawText().length() > 3000 ? cvAnalysis.rawText().substring(0, 3000) + "..." : cvAnalysis.rawText())
            : "(Aucun contenu CV extrait)";

        String requiredYears = o.getExperienceRequired() != null ? o.getExperienceRequired() + " an(s)" : "Non précisé";
        String candidateYears = cvAnalysis.experienceYears() > 0 ? cvAnalysis.experienceYears() + " an(s)"
            : (c.getYearsExperience() != null ? c.getYearsExperience() + " an(s)" : "Non précisé");

        return String.format("""
            === OFFRE D'EMPLOI ===
            Titre: %s
            Compétences requises: %s
            Stack technique: %s
            Années d'expérience requises: %s
            Localisation: %s
            Télétravail: %s
            Type de contrat: %s

            === PROFIL DU CANDIDAT ===
            Nom: %s
            Compétences déclarées: %s
            Années d'expérience: %s
            Formation détectée: %s
            Ville: %s
            Titre professionnel: %s
            Compétences détectées dans le CV: %s

            === EXTRAIT DU CV ===
            %s

            === INSTRUCTIONS ===
            Évalue cette candidature selon les 6 critères et retourne UNIQUEMENT ce JSON :
            {
              "globalScore": <entier 0-100>,
              "skillsScore": <entier 0-100, correspondance compétences requises vs profil et CV, poids 40%%>,
              "techScore": <entier 0-100, maîtrise stack technique de l'offre, poids 15%%>,
              "expLevelScore": <entier 0-100, adéquation niveau Junior/Mid/Senior, poids 15%%>,
              "expYearsScore": <entier 0-100, années d'expérience candidat vs requis, poids 15%%>,
              "locationScore": <entier 0-100, compatibilité géographique, poids 10%%>,
              "contractScore": <entier 0-100, compatibilité type de contrat, poids 5%%>,
              "level": "<EXCELLENT si globalScore>=80 | BON si >=65 | MOYEN si >=50 | FAIBLE si <50>",
              "recruiterFeedback": "<2-3 phrases professionnelles en français : points forts, alertes, recommandation>",
              "candidateFeedback": "<2-3 conseils bienveillants en français pour améliorer son profil>",
              "interviewQuestions": ["<question 1>", "<question 2>", "<question 3>", "<question 4>", "<question 5>"]
            }

            globalScore = round(skillsScore*0.40 + techScore*0.15 + expLevelScore*0.15 + expYearsScore*0.15 + locationScore*0.10 + contractScore*0.05)
            """,
            nvl(o.getTitle()),
            nvl(o.getRequiredSkills()),
            nvl(o.getTechStack()),
            requiredYears,
            nvl(o.getLocation()),
            o.isRemote() ? "Oui" : "Non",
            o.getContractType() != null ? o.getContractType().toString() : "Non précisé",
            c.getFullName(),
            nvl(c.getSkills()),
            candidateYears,
            cvAnalysis.educationLevel(),
            nvl(c.getCity()),
            nvl(c.getHeadline()),
            cvAnalysis.cvOnlySkills().stream().limit(10).collect(Collectors.joining(", ")),
            cvText
        );
    }

    private GroqAnalysisResult parseGroqResponse(String response) {
        try {
            String json = extractJsonFromText(response);
            JsonNode node = objectMapper.readTree(json);

            double skillsScore   = clamp(node.path("skillsScore").asDouble(50));
            double techScore     = clamp(node.path("techScore").asDouble(50));
            double expLevelScore = clamp(node.path("expLevelScore").asDouble(50));
            double expYearsScore = clamp(node.path("expYearsScore").asDouble(50));
            double locationScore = clamp(node.path("locationScore").asDouble(80));
            double contractScore = clamp(node.path("contractScore").asDouble(80));

            // Recalculate global score from sub-scores (more reliable than trusting AI's calculation)
            double computedGlobal = Math.round(
                skillsScore * 0.40 + techScore * 0.15 + expLevelScore * 0.15 +
                expYearsScore * 0.15 + locationScore * 0.10 + contractScore * 0.05
            );

            // Use AI global if it's in a reasonable range, else use computed
            double aiGlobal = node.path("globalScore").asDouble(-1);
            double finalScore = (aiGlobal >= 0 && aiGlobal <= 100) ? aiGlobal : computedGlobal;

            String level = node.path("level").asText("");
            if (level.isBlank()) {
                level = finalScore >= 80 ? "EXCELLENT" : finalScore >= 65 ? "BON" : finalScore >= 50 ? "MOYEN" : "FAIBLE";
            }

            String recruiterFeedback = node.path("recruiterFeedback").asText("Analyse effectuée par Groq IA.");
            String candidateFeedback = node.path("candidateFeedback").asText("Continuez à enrichir votre profil.");

            List<String> questions = new ArrayList<>();
            JsonNode qArray = node.path("interviewQuestions");
            if (qArray.isArray()) {
                for (JsonNode q : qArray) questions.add(q.asText());
            }
            if (questions.isEmpty()) {
                questions = List.of(
                    "Décrivez le projet le plus complexe sur lequel vous avez travaillé.",
                    "Comment gérez-vous les priorités sous pression ?",
                    "Quelle est votre approche pour apprendre une nouvelle technologie ?",
                    "Donnez un exemple concret d'un problème technique difficile résolu.",
                    "Pourquoi souhaitez-vous rejoindre notre entreprise ?"
                );
            }

            return new GroqAnalysisResult(clamp(finalScore), level, recruiterFeedback, candidateFeedback, questions);

        } catch (Exception e) {
            log.error("Erreur parsing réponse Groq : {}", e.getMessage());
            return null;
        }
    }

    private String extractJsonFromText(String text) {
        int start = text.indexOf('{');
        int end = text.lastIndexOf('}');
        if (start >= 0 && end > start) {
            return text.substring(start, end + 1);
        }
        return text;
    }

    private double clamp(double val) {
        return Math.min(100, Math.max(0, val));
    }

    // ── Extraction et analyse du CV ──────────────────────────────────────────

    private CvAnalysis extractAndAnalyzeCv(Application application) {
        CV cv = application.getCv();
        if (cv == null || cv.getFilePath() == null) {
            log.debug("Pas de CV joint à la candidature {}", application.getId());
            return CvAnalysis.empty();
        }

        String rawText = "";
        try {
            rawText = extractTextFromFile(cv.getFilePath(), cv.getContentType());
            log.debug("CV extrait : {} caractères", rawText.length());
        } catch (Exception e) {
            log.warn("Impossible d'extraire le texte du CV {} : {}", cv.getFilePath(), e.getMessage());
            return CvAnalysis.empty();
        }

        return analyzeCvText(rawText, application);
    }

    private String extractTextFromFile(String filePath, String contentType) throws Exception {
        if (!Files.exists(Paths.get(filePath))) {
            throw new IllegalArgumentException("Fichier introuvable : " + filePath);
        }
        if (contentType != null && contentType.contains("pdf")) return extractFromPdf(filePath);
        if (contentType != null && (contentType.contains("word") || contentType.contains("docx") || contentType.contains("openxml"))) return extractFromDocx(filePath);
        try { return extractFromPdf(filePath); } catch (Exception ignored) {}
        try { return extractFromDocx(filePath); } catch (Exception ignored) {}
        return "";
    }

    private String extractFromPdf(String filePath) throws Exception {
        StringBuilder sb = new StringBuilder();
        try (PdfReader reader = new PdfReader(filePath); PdfDocument pdf = new PdfDocument(reader)) {
            for (int i = 1; i <= pdf.getNumberOfPages(); i++) {
                sb.append(PdfTextExtractor.getTextFromPage(pdf.getPage(i))).append("\n");
            }
        }
        return sb.toString().trim();
    }

    private String extractFromDocx(String filePath) throws Exception {
        try (XWPFDocument doc = new XWPFDocument(new FileInputStream(filePath))) {
            return doc.getParagraphs().stream()
                    .map(p -> p.getText()).filter(t -> !t.isBlank())
                    .collect(Collectors.joining("\n"));
        }
    }

    // ── Analyse locale du CV (pour enrichir le prompt Groq) ──────────────────

    private CvAnalysis analyzeCvText(String cvText, Application application) {
        String lower = cvText.toLowerCase();

        List<String> cvSkills = TECH_SKILLS.stream()
                .filter(skill -> lower.contains(skill.toLowerCase()))
                .collect(Collectors.toList());

        List<String> profileSkills = parseSkillsFromText(nvl(application.getCandidate().getSkills()));
        Set<String> allSkills = new LinkedHashSet<>();
        allSkills.addAll(profileSkills);
        allSkills.addAll(cvSkills);

        String educationLevel = detectEducationLevel(lower);
        int cvYears = detectExperienceYears(cvText);
        int finalYears = cvYears > 0 ? cvYears
            : (application.getCandidate().getYearsExperience() != null ? application.getCandidate().getYearsExperience() : 0);

        boolean hasLinkedin = lower.contains("linkedin");
        boolean hasGithub   = lower.contains("github") || lower.contains("gitlab");
        String experienceSummary = extractExperienceSummary(cvText);

        return new CvAnalysis(cvText, new ArrayList<>(allSkills), cvSkills, educationLevel,
            experienceSummary, finalYears, hasLinkedin, hasGithub, countWords(cvText));
    }

    private List<String> parseSkillsFromText(String skillsStr) {
        if (skillsStr == null || skillsStr.isBlank()) return List.of();
        return Arrays.stream(skillsStr.split("[,;\\n]+"))
                .map(String::trim).filter(s -> !s.isEmpty())
                .map(String::toLowerCase).collect(Collectors.toList());
    }

    private String detectEducationLevel(String lowerText) {
        if (EDU_DOCTORAL.stream().anyMatch(lowerText::contains)) return "Doctorat / PhD";
        if (EDU_MASTER.stream().anyMatch(lowerText::contains))   return "Bac+5 / Master / Ingénieur";
        if (EDU_LICENCE.stream().anyMatch(lowerText::contains))  return "Bac+3 / Licence / Bachelor";
        if (EDU_BTS_DUT.stream().anyMatch(lowerText::contains))  return "Bac+2 / BTS / DUT";
        return "Non déterminé";
    }

    private int detectExperienceYears(String text) {
        Pattern p1 = Pattern.compile("(\\d{1,2})\\s*(?:ans?|years?)\\s*(?:d[' ]expérience|d[' ]experience|of experience)?", Pattern.CASE_INSENSITIVE);
        Matcher m1 = p1.matcher(text);
        int max = 0;
        while (m1.find()) {
            int val = Integer.parseInt(m1.group(1));
            if (val > 0 && val <= 40) max = Math.max(max, val);
        }
        if (max > 0) return max;

        Pattern yearPattern = Pattern.compile("\\b(20(?:0[0-9]|1[0-9]|2[0-4]))\\b");
        Matcher ym = yearPattern.matcher(text);
        Set<Integer> years = new HashSet<>();
        while (ym.find()) years.add(Integer.parseInt(ym.group(1)));
        if (years.size() >= 2) return Math.max(0, 2025 - Collections.min(years));
        return 0;
    }

    private String extractExperienceSummary(String cvText) {
        if (cvText.isBlank()) return "";
        return Arrays.stream(cvText.split("\n"))
                .map(String::trim).filter(l -> l.length() > 15)
                .limit(5).collect(Collectors.joining(" | "));
    }

    private int countWords(String text) {
        if (text == null || text.isBlank()) return 0;
        return text.trim().split("\\s+").length;
    }

    // ── Persistance des données extraites dans le CV ──────────────────────────

    private void persistCvAnalysis(CV cv, CvAnalysis analysis, Application application) {
        cv.setExtractedText(analysis.rawText().length() > 5000
                ? analysis.rawText().substring(0, 5000) : analysis.rawText());
        cv.setExtractedSkills(String.join(", ", analysis.cvOnlySkills()));
        cv.setExtractedEducation(analysis.educationLevel());
        cv.setExtractedExperience(analysis.experienceSummary());
        cv.setAiSummary(buildCvSummary(cv, analysis, application));
        cv.setAnalyzed(true);
        cvRepository.save(cv);
    }

    private String buildCvSummary(CV cv, CvAnalysis analysis, Application application) {
        JobOffer offer = application.getJobOffer();
        String requiredRaw = nvl(offer.getRequiredSkills()) + " " + nvl(offer.getTechStack());
        List<String> requiredSkills = Arrays.stream(requiredRaw.toLowerCase().split("[,;\\s]+"))
                .filter(s -> !s.isBlank() && s.length() > 1).distinct().collect(Collectors.toList());

        List<String> matchedSkills = requiredSkills.stream()
                .filter(req -> analysis.allSkills().stream()
                        .anyMatch(sk -> sk.toLowerCase().contains(req) || req.contains(sk.toLowerCase())))
                .map(s -> s.substring(0, 1).toUpperCase() + s.substring(1)).collect(Collectors.toList());

        List<String> extraSkills = analysis.cvOnlySkills().stream()
                .filter(sk -> requiredSkills.stream().noneMatch(req -> sk.toLowerCase().contains(req) || req.contains(sk.toLowerCase())))
                .limit(6).map(s -> s.substring(0, 1).toUpperCase() + s.substring(1)).collect(Collectors.toList());

        int matchPct = requiredSkills.isEmpty() ? 0 : (int) Math.round(matchedSkills.size() * 100.0 / requiredSkills.size());

        StringBuilder sb = new StringBuilder();
        sb.append("Poste ciblé : ").append(offer.getTitle()).append("\n");
        if (!matchedSkills.isEmpty()) {
            sb.append("Compétences compatibles (").append(matchedSkills.size()).append("/")
              .append(requiredSkills.isEmpty() ? "?" : requiredSkills.size()).append(") : ")
              .append(String.join(", ", matchedSkills)).append("\n");
        }
        if (!extraSkills.isEmpty()) sb.append("Autres compétences : ").append(String.join(", ", extraSkills)).append("\n");
        if (!analysis.educationLevel().equals("Non déterminé")) sb.append("Formation : ").append(analysis.educationLevel()).append("\n");
        if (analysis.experienceYears() > 0) sb.append("Expérience estimée : ").append(analysis.experienceYears()).append(" an(s)\n");
        if (analysis.hasLinkedin()) sb.append("Profil LinkedIn mentionné\n");
        if (analysis.hasGithub())   sb.append("Profil GitHub/GitLab mentionné\n");
        if (!requiredSkills.isEmpty()) sb.append("Compatibilité avec l'offre : ").append(matchPct).append("%");
        return sb.toString().trim();
    }

    // ── Résumé du candidat ────────────────────────────────────────────────────

    private String buildSummary(Application application, CvAnalysis cvAnalysis) {
        Candidate c = application.getCandidate();
        StringBuilder sb = new StringBuilder();
        sb.append(c.getFullName());
        if (c.getHeadline() != null && !c.getHeadline().isBlank()) sb.append(", ").append(c.getHeadline());
        if (cvAnalysis.experienceYears() > 0) sb.append(" — ").append(cvAnalysis.experienceYears()).append(" an(s) d'expérience");
        else if (c.getYearsExperience() != null) sb.append(" — ").append(c.getYearsExperience()).append(" an(s) d'expérience");
        if (!cvAnalysis.educationLevel().equals("Non déterminé")) sb.append(". Formation : ").append(cvAnalysis.educationLevel());
        if (!cvAnalysis.allSkills().isEmpty()) {
            String topSkills = cvAnalysis.allSkills().stream().limit(6)
                    .map(s -> s.substring(0, 1).toUpperCase() + s.substring(1)).collect(Collectors.joining(", "));
            sb.append(". Compétences clés : ").append(topSkills).append(".");
        }
        if (application.getCv() != null && cvAnalysis.hasContent()) {
            sb.append(" CV analysé par Groq IA (").append(cvAnalysis.wordCount()).append(" mots).");
        }
        return sb.toString();
    }

    // ── Fallback scoring local (si Groq indisponible) ─────────────────────────

    private double computeScoreFallback(Application application, CvAnalysis cvAnalysis) {
        Candidate c = application.getCandidate();
        JobOffer  o = application.getJobOffer();
        double score = 0;

        // 40% skills
        String requiredRaw = nvl(o.getRequiredSkills()) + " " + nvl(o.getTechStack());
        if (!requiredRaw.isBlank()) {
            String[] required = requiredRaw.toLowerCase().split("[,;\\s]+");
            List<String> allCandidateSkills = cvAnalysis.allSkills().stream().map(String::toLowerCase).collect(Collectors.toList());
            long matches = Arrays.stream(required).filter(s -> !s.isBlank() && s.length() > 1)
                    .filter(s -> allCandidateSkills.stream().anyMatch(cs -> cs.contains(s) || s.contains(cs))).count();
            long total = Arrays.stream(required).filter(s -> !s.isBlank() && s.length() > 1).count();
            score += (total == 0 ? 50 : (matches * 100.0 / total)) * 0.40;
        } else {
            score += 50 * 0.40;
        }

        // 15% tech stack (inclus dans skills above — use 15% separately)
        score += 50 * 0.15; // neutral fallback

        // 15% experience level
        if (o.getExperienceRequired() != null) {
            int req = o.getExperienceRequired();
            int cand = cvAnalysis.experienceYears() > 0 ? cvAnalysis.experienceYears()
                : (c.getYearsExperience() != null ? c.getYearsExperience() : 0);
            int gap = cand - req;
            score += (gap >= 0 ? Math.min(100, 75 + gap * 3) : Math.max(10, 75 + gap * 15)) * 0.15;
        } else {
            score += 60 * 0.15;
        }

        // 15% experience years
        score += 60 * 0.15;

        // 10% location
        if (!o.isRemote() && o.getLocation() != null && c.getCity() != null) {
            score += (c.getCity().equalsIgnoreCase(o.getLocation()) ? 100 : 55) * 0.10;
        } else {
            score += 100 * 0.10;
        }

        // 5% contract type
        score += 80 * 0.05;

        return Math.min(100, Math.max(0, Math.round(score)));
    }

    private String buildRecruiterFeedbackFallback(Application application, CvAnalysis cvAnalysis, double score) {
        String note = score >= 80 ? "Profil EXCELLENT ✅" : score >= 65 ? "Profil TRÈS BON 👍"
            : score >= 50 ? "Profil CORRECT ⚠️" : "Profil INSUFFISANT ❌";
        return note + " — Score " + String.format("%.0f", score) + "/100. " +
               (cvAnalysis.hasContent() ? cvAnalysis.cvOnlySkills().size() + " compétences détectées." : "CV non lisible.");
    }

    private String buildCandidateFeedbackFallback(Application application, CvAnalysis cvAnalysis, double score) {
        StringBuilder sb = new StringBuilder();
        if (score >= 80) sb.append("Votre profil correspond très bien à ce poste ! ");
        else if (score >= 60) sb.append("Votre profil est intéressant pour ce poste. ");
        else sb.append("Votre candidature a bien été reçue. ");
        if (!cvAnalysis.hasGithub()) sb.append("Ajoutez un lien GitHub pour valoriser votre profil technique. ");
        if (!cvAnalysis.hasLinkedin()) sb.append("Un profil LinkedIn complet renforce votre crédibilité.");
        return sb.toString().trim();
    }

    private List<String> buildInterviewQuestionsFallback(Application application, CvAnalysis cvAnalysis) {
        return List.of(
            "Décrivez le projet le plus complexe sur lequel vous avez travaillé.",
            "Comment gérez-vous les priorités lorsque plusieurs tâches urgentes arrivent simultanément ?",
            "Quelle est votre approche pour apprendre une nouvelle technologie rapidement ?",
            "Donnez un exemple concret d'un problème technique difficile que vous avez résolu.",
            "Pourquoi souhaitez-vous rejoindre notre entreprise ?"
        );
    }

    // ── Utilitaires ───────────────────────────────────────────────────────────

    private String serializeList(List<String> list) {
        try { return objectMapper.writeValueAsString(list); }
        catch (Exception e) { return "[]"; }
    }

    private String nvl(String value) {
        return value != null ? value : "";
    }

    // ── Records internes ──────────────────────────────────────────────────────

    record CvAnalysis(
        String rawText,
        List<String> allSkills,
        List<String> cvOnlySkills,
        String educationLevel,
        String experienceSummary,
        int experienceYears,
        boolean hasLinkedin,
        boolean hasGithub,
        int wordCount
    ) {
        static CvAnalysis empty() {
            return new CvAnalysis("", List.of(), List.of(), "Non déterminé", "", 0, false, false, 0);
        }
        boolean hasContent() { return wordCount > 20; }
    }

    record GroqAnalysisResult(
        double globalScore,
        String level,
        String recruiterFeedback,
        String candidateFeedback,
        List<String> interviewQuestions
    ) {}
}
