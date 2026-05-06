package com.pfe.saas.dto.request;

import lombok.*;

import java.time.LocalDate;

/**
 * Request DTO for creating/updating a certification
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CertificationRequest {
    private String certificationName; // Required: e.g., "AWS Solutions Architect"
    private String issuer;            // Required: e.g., "Amazon Web Services"
    private LocalDate issueDate;      // Required: when certification was obtained
    private LocalDate expiryDate;     // Optional: when it expires (null = no expiry)
    private String credentialUrl;     // Optional: link to verify credential
}
