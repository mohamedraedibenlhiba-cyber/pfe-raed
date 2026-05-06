package com.pfe.saas.entity;

import com.pfe.saas.enums.FriendshipStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

/**
 * Bidirectional friendship relationship between two users.
 *
 * Constraint: user1_id < user2_id to avoid duplicate relationships and simplify bidirectional queries.
 * Example: Friendship between user A (id=5) and user B (id=10) is stored as:
 *   user1_id = 5, user2_id = 10  (NOT both directions)
 *
 * Status: ACCEPTED (default) or BLOCKED (for future feature)
 */
@Entity
@Table(name = "friendships",
       uniqueConstraints = @UniqueConstraint(columnNames = {"user1_id", "user2_id"}))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Friendship {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user1_id", nullable = false)
    private User user1;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user2_id", nullable = false)
    private User user2;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FriendshipStatus status = FriendshipStatus.ACCEPTED;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;
}
