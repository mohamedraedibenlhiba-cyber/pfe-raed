package com.pfe.saas.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pfe.saas.enums.ContractType;
import com.pfe.saas.enums.ExperienceLevel;
import com.pfe.saas.enums.OfferStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "job_offers")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class JobOffer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(columnDefinition = "TEXT")
    private String requirements;

    @Column(name = "required_skills")
    private String requiredSkills;      // CSV compétences pour scoring IA

    @Column(name = "tech_stack")
    private String techStack;           // CSV technologies utilisées

    private String location;

    @Column(name = "is_remote")
    private boolean remote = false;

    @Enumerated(EnumType.STRING)
    private ContractType contractType;

    @Column(name = "salary_min")
    private Double salaryMin;

    @Column(name = "salary_max")
    private Double salaryMax;

    @Column(name = "experience_required")
    private Integer experienceRequired;

    @Enumerated(EnumType.STRING)
    @Column(name = "experience_level")
    private ExperienceLevel experienceLevel;    // JUNIOR, MID, SENIOR, LEAD

    @Column(name = "number_of_positions")
    private Integer numberOfPositions = 1;

    @Column(columnDefinition = "TEXT")
    private String benefits;                    // Avantages offerts

    @Column(name = "interview_process", columnDefinition = "TEXT")
    private String interviewProcess;            // Processus de recrutement

    @Column(name = "start_date")
    private LocalDate startDate;

    @Enumerated(EnumType.STRING)
    private OfferStatus status = OfferStatus.DRAFT;

    @Column(name = "public_token", unique = true)
    private String publicToken;

    @Column(name = "deadline_date")
    private LocalDate deadlineDate;

    @Column(name = "custom_form_fields", columnDefinition = "TEXT")
    private String customFormFields;

    @Column(name = "brand_color")
    private String brandColor;

    @Column(name = "banner_image")
    private String bannerImage;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "enterprise_id", nullable = false)
    private Enterprise enterprise;

    @JsonIgnore
    @OneToMany(mappedBy = "jobOffer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Application> applications = new ArrayList<>();

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    private void generatePublicToken() {
        if (this.publicToken == null) {
            this.publicToken = UUID.randomUUID().toString();
        }
    }
}
