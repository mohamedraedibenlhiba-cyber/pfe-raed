package com.pfe.saas.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterCandidateRequest {
    @NotBlank @Email
    private String email;
    @NotBlank @Size(min = 8)
    private String password;
    @NotBlank
    private String fullName;
    private String headline;
    private String summary;
    private String skills;
    private String linkedinUrl;
    private String githubUrl;
    private Integer yearsExperience;
    private String phoneNumber;
    private String city;
    private String country;
}
