package com.pfe.saas.dto.response;

import lombok.*;

import java.time.LocalDate;

/**
 * Response DTO for a certification
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CertificationDTO {
    private Long id;
    private String certificationName;
    private String issuer;
    private LocalDate issueDate;
    private LocalDate expiryDate;
    private String credentialUrl;
    private boolean expired; // Computed field
}
