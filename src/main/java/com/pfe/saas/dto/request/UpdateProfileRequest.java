package com.pfe.saas.dto.request;

import lombok.Data;

@Data
public class UpdateProfileRequest {
    private String fullName;
    private String phoneNumber;
    private String city;
    private String country;

    // Entreprise
    private String companyName;
    private String companyDescription;
    private String companyWebsite;
    private String companySector;
    private String companySize;
    private String siretNumber;
    private String enterpriseLinkedinUrl;

    // Candidat
    private String headline;
    private String summary;
    private String linkedinUrl;
    private String githubUrl;
    private String portfolioUrl;
    private Integer yearsExperience;
    private String skills;
    private String languages;
    private String education;
    private Boolean openToWork;
    private String desiredSalary;
}
