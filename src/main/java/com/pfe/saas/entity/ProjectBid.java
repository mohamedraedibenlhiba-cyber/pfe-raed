package com.pfe.saas.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pfe.saas.enums.BidStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "project_bids")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ProjectBid {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id", nullable = false)
    private FreelanceProject project;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "freelancer_id", nullable = false)
    private User freelancer;

    @Column(name = "proposed_amount", nullable = false)
    private Double proposedAmount;

    @Column(name = "proposed_duration_days", nullable = false)
    private Integer proposedDurationDays;

    @Column(name = "cover_letter", columnDefinition = "TEXT")
    private String coverLetter;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BidStatus status = BidStatus.PENDING;

    // Champs de négociation (contre-offre du client)
    @Column(name = "counter_amount")
    private Double counterAmount;

    @Column(name = "counter_duration_days")
    private Integer counterDurationDays;

    @Column(name = "negotiation_note", columnDefinition = "TEXT")
    private String negotiationNote;

    @CreationTimestamp
    @Column(name = "submitted_at", updatable = false)
    private LocalDateTime submittedAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
