package com.pfe.saas.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;

/**
 * Certification earned by a Candidate.
 * Examples: AWS Solutions Architect, Google Cloud Certified, Microsoft Azure Admin, etc.
 */
@Entity
@Table(name = "certifications")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Certification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "candidate_id", nullable = false)
    private Candidate candidate;

    @Column(nullable = false)
    private String certificationName; // e.g., "AWS Solutions Architect Associate"

    @Column(nullable = false)
    private String issuer; // e.g., "Amazon Web Services", "Google", "Microsoft"

    @Column(nullable = false)
    private LocalDate issueDate; // Date certification was obtained

    @Column(name = "expiry_date")
    private LocalDate expiryDate; // Nullable - some certifications don't expire

    @Column(name = "credential_url")
    private String credentialUrl; // Link to verify (e.g., LinkedIn badge, verification page)

    @Column(name = "credential_id")
    private String credentialId; // Internal ID (e.g., from issuer system)

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    /**
     * Check if this certification has expired
     */
    @Transient
    public boolean isExpired() {
        if (expiryDate == null) return false;
        return LocalDate.now().isAfter(expiryDate);
    }
}
