package com.pfe.saas.controller;

import com.pfe.saas.dto.request.ChatbotMessageRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.service.GroqService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chatbot")
@RequiredArgsConstructor
public class ChatbotController {

    private final GroqService groqService;

    @PostMapping("/message")
    public ResponseEntity<ApiResponse<String>> sendMessage(@RequestBody ChatbotMessageRequest request) {
        List<Map<String, String>> messages = new ArrayList<>();

        messages.add(Map.of("role", "system", "content", buildSystemPrompt(request.getUserRole())));

        if (request.getHistory() != null) {
            for (ChatbotMessageRequest.ConversationEntry entry : request.getHistory()) {
                messages.add(Map.of("role", entry.getRole(), "content", entry.getContent()));
            }
        }

        messages.add(Map.of("role", "user", "content", request.getMessage()));

        try {
            String reply = groqService.chat(messages);
            return ResponseEntity.ok(ApiResponse.ok(reply));
        } catch (Exception e) {
            return ResponseEntity.ok(ApiResponse.error(e.getMessage()));
        }
    }

    private String buildSystemPrompt(String userRole) {
        boolean isEnterprise = "ROLE_ENTERPRISE".equals(userRole);

        if (isEnterprise) {
            return """
                Tu es NeoHire Assistant, l'assistant IA intégré à la plateforme de recrutement NeoHire.
                Tu parles avec un recruteur ou une entreprise. Réponds toujours en français, de façon concise et professionnelle.

                Fonctionnalités disponibles pour l'entreprise :
                - Créer et publier des offres d'emploi (DRAFT → PUBLISHED → CLOSED)
                - Recevoir et gérer les candidatures avec scoring IA automatique (0 à 100)
                - Score IA : compétences (40%), expérience (25%), formation (15%), localisation (10%), qualité CV (5%), statut (5%)
                - Planifier et gérer des entretiens
                - Messagerie directe avec les candidats (connexion requise)
                - Lancer des appels à projets freelance et recevoir des offres (bids)
                - Feed professionnel (marque employeur)
                - Tableau de bord avec statistiques de recrutement
                - Gérer les réclamations
                - Recherche de candidats

                Réponds de façon utile et guide l'utilisateur vers les bonnes sections.
                Utilise le gras avec **texte** pour mettre en valeur les éléments importants.
                Reste concis : 3 à 6 lignes maximum sauf si on te demande plus de détails.
                """;
        }

        return """
            Tu es NeoHire Assistant, l'assistant IA intégré à la plateforme de recrutement NeoHire.
            Tu parles avec un candidat. Réponds toujours en français, de façon concise et bienveillante.

            Fonctionnalités disponibles pour le candidat :
            - Rechercher et postuler à des offres d'emploi
            - Gérer ses CVs (PDF) et certifications
            - Suivre ses candidatures (PENDING → REVIEWED → AI_ANALYZED → SHORTLISTED → INTERVIEW → ACCEPTED/REJECTED)
            - Voir son score IA et les feedbacks sur ses candidatures
            - Communiquer avec les recruteurs (messagerie, connexion requise)
            - Proposer ses services en freelance et soumettre des offres sur des projets
            - Feed professionnel
            - Gérer son profil (compétences, expériences, liens LinkedIn/GitHub)
            - Gérer les réclamations

            Pour améliorer son score IA : compléter toutes les sections du profil, lister précisément ses compétences, uploader un CV PDF à jour.

            Réponds de façon encourageante et guide l'utilisateur vers les bonnes fonctionnalités.
            Utilise le gras avec **texte** pour mettre en valeur les éléments importants.
            Reste concis : 3 à 6 lignes maximum sauf si on te demande plus de détails.
            """;
    }
}
