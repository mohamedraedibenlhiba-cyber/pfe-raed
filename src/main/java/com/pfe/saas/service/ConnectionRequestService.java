package com.pfe.saas.service;

import com.pfe.saas.dto.request.ConnectionRequestSendRequest;
import com.pfe.saas.dto.response.ConnectionRequestDTO;
import com.pfe.saas.entity.ConnectionRequest;
import com.pfe.saas.entity.Candidate;
import com.pfe.saas.entity.Enterprise;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.ConnectionRequestStatus;
import com.pfe.saas.repository.ConnectionRequestRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

/**
 * Service for managing connection requests between users.
 *
 * Connection Rules:
 * - Candidate ↔ Candidate: No connection request needed (always can message)
 * - Enterprise ↔ Enterprise: No connection request needed (always can message)
 * - Candidate ↔ Enterprise: MUST have ACCEPTED connection request to message
 *
 * When a connection request is accepted:
 * 1. Status is set to ACCEPTED
 * 2. A friendship is created (bidirectional)
 * 3. Both users follow each other (optional, for content discovery)
 * 4. Notifications are sent
 */
@Service
@RequiredArgsConstructor
public class ConnectionRequestService {

    private static final Logger logger = LoggerFactory.getLogger(ConnectionRequestService.class);

    private final ConnectionRequestRepository connectionRequestRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    private final FollowService followService;
    private final FriendshipService friendshipService;

    /**
     * Send a connection request from sender to receiver
     * Only applicable for Candidate↔Enterprise pairings
     */
    @Transactional
    public ConnectionRequestDTO sendRequest(Long senderId, ConnectionRequestSendRequest req) {
        User sender = userRepository.findById(senderId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        User receiver = userRepository.findById(req.getReceiverId())
                .orElseThrow(() -> new RuntimeException("Destinataire non trouvé"));

        // Prevent self-request
        if (senderId.equals(req.getReceiverId())) {
            throw new RuntimeException("Vous ne pouvez pas envoyer une demande de connexion à vous-même");
        }

        // Check if request already exists
        if (connectionRequestRepository.findBySenderIdAndReceiverId(senderId, req.getReceiverId()).isPresent()) {
            throw new RuntimeException("Une demande de connexion existe déjà avec cet utilisateur");
        }

        ConnectionRequest request = new ConnectionRequest();
        request.setSender(sender);
        request.setReceiver(receiver);
        request.setMessage(req.getMessage());
        request.setStatus(ConnectionRequestStatus.PENDING);

        ConnectionRequest saved = connectionRequestRepository.save(request);

        // Notify receiver
        notificationService.createNotification(
            receiver.getId(),
            "Nouvelle demande de connexion",
            sender.getFullName() + " vous a envoyé une demande de connexion",
            "CONNECTION_REQUEST_RECEIVED",
            saved.getId()
        );

        return mapToDTO(saved);
    }

    /**
     * Accept a connection request
     * Sets status to ACCEPTED, creates mutual friendship and follow
     */
    @Transactional
    public ConnectionRequestDTO acceptRequest(Long requestId, Long receiverId) {
        logger.info("Accepting connection request {} for user {}", requestId, receiverId);

        ConnectionRequest request = connectionRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Demande non trouvée"));

        // Verify receiver owns this request
        if (!request.getReceiver().getId().equals(receiverId)) {
            logger.warn("Unauthorized access attempt: user {} tried to accept request {} owned by {}",
                    receiverId, requestId, request.getReceiver().getId());
            throw new RuntimeException("Accès non autorisé");
        }

        if (!request.getStatus().equals(ConnectionRequestStatus.PENDING)) {
            logger.warn("Invalid request status. Request {} status is {}, expected PENDING",
                    requestId, request.getStatus());
            throw new RuntimeException("Cette demande n'est pas en attente");
        }

        request.setStatus(ConnectionRequestStatus.ACCEPTED);
        request.setRespondedAt(LocalDateTime.now());
        ConnectionRequest saved = connectionRequestRepository.save(request);
        logger.debug("Connection request {} status updated to ACCEPTED", requestId);

        // Add them to friends list (primary action)
        if (!friendshipService.isFriend(request.getSender().getId(), request.getReceiver().getId())) {
            try {
                friendshipService.addFriend(request.getSender().getId(), request.getReceiver().getId());
                logger.info("Friendship created between user {} and {}",
                    request.getSender().getId(), request.getReceiver().getId());
            } catch (RuntimeException e) {
                logger.error("Failed to create friendship between user {} and {}",
                    request.getSender().getId(), request.getReceiver().getId(), e);
                // Don't rethrow - connection is still accepted
                // Friendship will be re-attempted on next request
            }
        } else {
            logger.debug("Friendship already exists between user {} and {}",
                request.getSender().getId(), request.getReceiver().getId());
        }

        // Auto-follow each other (for content discovery after connection)
        try {
            followService.followUser(request.getSender().getId(), request.getReceiver().getId());
            followService.followUser(request.getReceiver().getId(), request.getSender().getId());
            logger.debug("Mutual follow created for users {} and {}",
                request.getSender().getId(), request.getReceiver().getId());
        } catch (Exception e) {
            logger.debug("Follow already exists or error creating follow - continuing", e.getMessage());
            // Silently fail - follows might already exist
        }

        // Notify sender
        try {
            notificationService.createNotification(
                request.getSender().getId(),
                "Demande acceptée",
                request.getReceiver().getFullName() + " a accepté votre demande de connexion",
                "CONNECTION_REQUEST_ACCEPTED",
                saved.getId()
            );
            logger.debug("Notification sent to user {}", request.getSender().getId());
        } catch (Exception e) {
            logger.error("Failed to send notification to user {}", request.getSender().getId(), e);
            // Don't rethrow - notification failure shouldn't block the response
        }

        return mapToDTO(saved);
    }

    /**
     * Reject a connection request
     * Sets status to REJECTED
     */
    @Transactional
    public void rejectRequest(Long requestId, Long receiverId) {
        ConnectionRequest request = connectionRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Demande non trouvée"));

        // Verify receiver owns this request
        if (!request.getReceiver().getId().equals(receiverId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        if (!request.getStatus().equals(ConnectionRequestStatus.PENDING)) {
            throw new RuntimeException("Cette demande n'est pas en attente");
        }

        request.setStatus(ConnectionRequestStatus.REJECTED);
        request.setRespondedAt(LocalDateTime.now());
        connectionRequestRepository.save(request);

        // Notify sender
        notificationService.createNotification(
            request.getSender().getId(),
            "Demande refusée",
            request.getReceiver().getFullName() + " a refusé votre demande de connexion",
            "CONNECTION_REQUEST_REJECTED",
            request.getId()
        );
    }

    /**
     * Cancel a connection request (only sender can cancel)
     */
    @Transactional
    public void cancelRequest(Long requestId, Long senderId) {
        ConnectionRequest request = connectionRequestRepository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Demande non trouvée"));

        // Verify sender owns this request
        if (!request.getSender().getId().equals(senderId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        if (!request.getStatus().equals(ConnectionRequestStatus.PENDING)) {
            throw new RuntimeException("Vous ne pouvez annuler que les demandes en attente");
        }

        connectionRequestRepository.delete(request);
    }

    /**
     * Get pending requests received by user (paginated)
     */
    @Transactional(readOnly = true)
    public Page<ConnectionRequestDTO> getPendingRequests(Long userId, Pageable pageable) {
        return connectionRequestRepository
            .findByReceiverIdAndStatusOrderByCreatedAtDesc(userId, ConnectionRequestStatus.PENDING, pageable)
            .map(this::mapToDTO);
    }

    /**
     * Get sent requests from user (paginated)
     */
    @Transactional(readOnly = true)
    public Page<ConnectionRequestDTO> getSentRequests(Long userId, Pageable pageable) {
        return connectionRequestRepository
            .findBySenderIdAndStatusOrderByCreatedAtDesc(userId, ConnectionRequestStatus.PENDING, pageable)
            .map(this::mapToDTO);
    }

    /**
     * Get request status with a specific user
     * Returns: PENDING, ACCEPTED, REJECTED, or NONE
     */
    @Transactional(readOnly = true)
    public String getRequestStatus(Long userId1, Long userId2) {
        var request = connectionRequestRepository.findBySenderIdAndReceiverId(userId1, userId2);
        if (request.isPresent()) {
            return request.get().getStatus().toString();
        }

        // Check reverse direction
        request = connectionRequestRepository.findBySenderIdAndReceiverId(userId2, userId1);
        if (request.isPresent()) {
            return request.get().getStatus().toString();
        }

        return "NONE";
    }

    /**
     * Check if two users can message each other
     * Applies the connection rules
     */
    @Transactional(readOnly = true)
    public boolean canMessage(Long userId1, Long userId2) {
        if (userId1.equals(userId2)) {
            return false; // No self-messaging
        }

        User user1 = userRepository.findById(userId1)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        User user2 = userRepository.findById(userId2)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        // Candidate ↔ Candidate: Always allowed
        if (user1 instanceof Candidate && user2 instanceof Candidate) {
            return true;
        }

        // Enterprise ↔ Enterprise: Always allowed
        if (user1 instanceof Enterprise && user2 instanceof Enterprise) {
            return true;
        }

        // Candidate ↔ Enterprise: Check for ACCEPTED connection request
        if ((user1 instanceof Candidate && user2 instanceof Enterprise) ||
            (user1 instanceof Enterprise && user2 instanceof Candidate)) {

            // Check both directions
            var request1 = connectionRequestRepository
                .findBySenderIdAndReceiverId(userId1, userId2);
            if (request1.isPresent() && request1.get().getStatus() == ConnectionRequestStatus.ACCEPTED) {
                return true;
            }

            var request2 = connectionRequestRepository
                .findBySenderIdAndReceiverId(userId2, userId1);
            if (request2.isPresent() && request2.get().getStatus() == ConnectionRequestStatus.ACCEPTED) {
                return true;
            }
        }

        return false;
    }

    /**
     * Get count of pending requests for user
     * Useful for notification badge
     */
    @Transactional(readOnly = true)
    public long getPendingRequestCount(Long userId) {
        return connectionRequestRepository.countByReceiverIdAndStatus(
            userId, ConnectionRequestStatus.PENDING);
    }

    /**
     * Get all accepted connections for a user
     * Returns the other participant in each accepted connection
     */
    @Transactional(readOnly = true)
    public java.util.List<User> getAcceptedConnections(Long userId) {
        var requests = connectionRequestRepository.findAcceptedConnectionsByUserId(userId);
        java.util.List<User> connections = new java.util.ArrayList<>();

        for (ConnectionRequest req : requests) {
            if (req.getSender().getId().equals(userId)) {
                connections.add(req.getReceiver());
            } else {
                connections.add(req.getSender());
            }
        }

        return connections;
    }

    // ── Helper methods ──────────────────────────────────────────

    private ConnectionRequestDTO mapToDTO(ConnectionRequest request) {
        return ConnectionRequestDTO.builder()
            .id(request.getId())
            .senderId(request.getSender().getId())
            .senderName(request.getSender().getFullName())
            .senderProfilePicture(request.getSender().getProfilePicture())
            .receiverId(request.getReceiver().getId())
            .receiverName(request.getReceiver().getFullName())
            .receiverProfilePicture(request.getReceiver().getProfilePicture())
            .status(request.getStatus())
            .message(request.getMessage())
            .createdAt(request.getCreatedAt() != null ? request.getCreatedAt().toString() : null)
            .respondedAt(request.getRespondedAt() != null ? request.getRespondedAt().toString() : null)
            .build();
    }
}
