package com.pfe.saas.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO pour les résultats de recherche d'utilisateurs
 * Contient les infos minimales pour afficher dans une liste de recherche
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class UserSearchResponse {

    // ─── Infos de base ───────────────────────────────────────────────
    private Long id;
    private String fullName;
    private String email;
    private String role;  // ROLE_CANDIDATE, ROLE_ENTERPRISE
    private String profilePicture;
    private String city;

    // ─── Infos Candidat ──────────────────────────────────────────────
    private String headline;
    private String skills;
    private Boolean openToWork;

    // ─── Infos Entreprise ────────────────────────────────────────────
    private String companyName;
    private String companyDescription;

    // ─── Statut de Messagerie ───────────────────────────────────────
    private Boolean canMessage;  // Peut-on envoyer un message?
    private String connectionStatus;  // NONE, PENDING, ACCEPTED, REJECTED
    private Long requestId;
    private String requestDirection;  // NONE, INCOMING, OUTGOING
}
