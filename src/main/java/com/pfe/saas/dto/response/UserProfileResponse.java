package com.pfe.saas.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserProfileResponse {

    // ── Champs communs (User) ────────────────────────────
    private Long id;
    private String email;
    private String fullName;
    private String phoneNumber;
    private String profilePicture;
    private String city;
    private String country;
    private String role;

    // ── Champs Entreprise ───────────────────────────────
    private String companyName;
    private String companyDescription;
    private String companyLogo;
    private String companyWebsite;
    private String companySector;
    private String companySize;
    private String siretNumber;
    private String enterpriseLinkedinUrl;
    private boolean premium;

    // ── Champs Candidat ────────────────────────────────
    private String headline;
    private String summary;
    private String linkedinUrl;
    private String githubUrl;
    private String portfolioUrl;
    private Integer yearsExperience;
    private String skills;
    private String languages;
    private String education;
    private boolean openToWork;
    private String desiredSalary;
}
