package com.pfe.saas.entity;

import com.pfe.saas.enums.ConnectionRequestStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/**
 * Connection Request between two users.
 * Enables professional communication with access control.
 *
 * Rules:
 * - Candidate ↔ Candidate: No connection request needed, can always message
 * - Enterprise ↔ Enterprise: No connection request needed, can always message
 * - Candidate ↔ Enterprise: MUST accept a connection request to enable messaging
 *
 * Workflow:
 * 1. Sender creates request → Status: PENDING
 * 2. Receiver accepts → Status: ACCEPTED, respondedAt is set
 * 3. OR Receiver rejects → Status: REJECTED, respondedAt is set
 */
@Entity
@Table(name = "connection_requests",
       uniqueConstraints = @UniqueConstraint(columnNames = {"sender_id", "receiver_id"}))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class ConnectionRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "receiver_id", nullable = false)
    private User receiver;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ConnectionRequestStatus status = ConnectionRequestStatus.PENDING;

    @Column(columnDefinition = "TEXT")
    private String message; // Optional message from sender

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "responded_at")
    private LocalDateTime respondedAt; // Set when accepted or rejected
}
