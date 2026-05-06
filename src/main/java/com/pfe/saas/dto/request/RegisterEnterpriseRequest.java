package com.pfe.saas.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterEnterpriseRequest {
    @NotBlank @Email
    private String email;
    @NotBlank @Size(min = 8)
    private String password;
    @NotBlank
    private String fullName;
    @NotBlank
    private String companyName;
    private String companyDescription;
    private String companyWebsite;
    private String companySector;
    private String companySize;
    private String siretNumber;
    private String phoneNumber;
    private String city;
    private String country;
}
