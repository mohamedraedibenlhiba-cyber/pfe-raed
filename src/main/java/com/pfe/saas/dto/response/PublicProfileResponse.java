package com.pfe.saas.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * DTO pour afficher un profil PUBLIC (n'importe quel utilisateur)
 * Contient les infos visibles publiquement + certifications + statistiques posts
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PublicProfileResponse {

    // ─── Infos de base ───────────────────────────────────────────────
    private Long id;
    private String fullName;
    private String email;
    private String role;  // CANDIDATE, ENTERPRISE, ADMIN
    private String profilePicture;
    private String city;
    private String country;
    private String phoneNumber;

    // ─── Infos Candidat ──────────────────────────────────────────────
    private String headline;
    private String summary;
    private String skills;
    private Integer yearsExperience;
    private String education;
    private String languages;
    private String linkedinUrl;
    private String githubUrl;
    private String portfolioUrl;
    private Boolean openToWork;
    private String desiredSalary;

    // ─── Infos Entreprise ────────────────────────────────────────────
    private String companyName;
    private String companyDescription;
    private String companyWebsite;
    private String companySector;
    private String companySize;
    private Boolean premium;

    // ─── Certifications (Candidat) ──────────────────────────────────
    private List<CertificationDTO> certifications;

    // ─── Publications (Posts) ───────────────────────────────────────
    private Long postCount;  // Nombre total de posts
    private List<PostSummaryDTO> recentPosts; // Derniers 3-5 posts

    // ─── Stats de Suivi ──────────────────────────────────────────────
    private Long followersCount;
    private Long followingCount;
}
