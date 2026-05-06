package com.pfe.saas.repository;

import com.pfe.saas.entity.ConnectionRequest;
import com.pfe.saas.enums.ConnectionRequestStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ConnectionRequestRepository extends JpaRepository<ConnectionRequest, Long> {

    /**
     * Find a specific request between two users
     */
    Optional<ConnectionRequest> findBySenderIdAndReceiverId(Long senderId, Long receiverId);

    /**
     * Check if request exists with specific status
     */
    boolean existsByStatusAndSenderIdAndReceiverId(ConnectionRequestStatus status, Long senderId, Long receiverId);

    /**
     * Get pending requests received by user (paginated)
     */
    Page<ConnectionRequest> findByReceiverIdAndStatusOrderByCreatedAtDesc(
            Long receiverId, ConnectionRequestStatus status, Pageable pageable);

    /**
     * Get sent requests from user (paginated)
     */
    Page<ConnectionRequest> findBySenderIdAndStatusOrderByCreatedAtDesc(
            Long senderId, ConnectionRequestStatus status, Pageable pageable);

    /**
     * Count pending requests for a user
     */
    long countByReceiverIdAndStatus(Long receiverId, ConnectionRequestStatus status);

    /**
     * Find all requests (pending or accepted) between two users
     * Used to check if there's any active connection
     */
    @Query("SELECT cr FROM ConnectionRequest cr WHERE " +
           "((cr.sender.id = ?1 AND cr.receiver.id = ?2) OR (cr.sender.id = ?2 AND cr.receiver.id = ?1)) " +
           "AND cr.status IN ('PENDING', 'ACCEPTED')")
    Optional<ConnectionRequest> findBetweenUsers(Long userId1, Long userId2);

    /**
     * Get all accepted connections for a user (both directions)
     * Returns ConnectionRequests where status is ACCEPTED
     */
    @Query("SELECT cr FROM ConnectionRequest cr WHERE " +
           "((cr.sender.id = ?1 OR cr.receiver.id = ?1) AND cr.status = 'ACCEPTED') " +
           "ORDER BY cr.respondedAt DESC")
    List<ConnectionRequest> findAcceptedConnectionsByUserId(Long userId);
}
