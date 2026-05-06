package com.pfe.saas.controller;

import com.pfe.saas.dto.request.ConnectionRequestSendRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.ConnectionRequestDTO;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.ConnectionRequestService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Endpoints for managing connection requests between users.
 *
 * Primary use case: Candidate↔Enterprise need to accept connection before messaging.
 * Candidate↔Candidate and Enterprise↔Enterprise can always message without requests.
 */
@RestController
@RequestMapping("/api/connection-requests")
@RequiredArgsConstructor
@Tag(name = "Connection Requests", description = "Gestion des demandes de connexion entre utilisateurs")
@SecurityRequirement(name = "bearerAuth")
public class ConnectionRequestController {

    private final ConnectionRequestService connectionRequestService;
    private final UserRepository userRepository;

    /**
     * Send a connection request to another user
     */
    @PostMapping
    @Operation(summary = "Envoyer une demande de connexion")
    public ResponseEntity<ApiResponse<ConnectionRequestDTO>> sendRequest(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody ConnectionRequestSendRequest req) {
        Long senderId = resolveUserId(userDetails);
        ConnectionRequestDTO result = connectionRequestService.sendRequest(senderId, req);
        return ResponseEntity.ok(ApiResponse.ok("Demande envoyée", result));
    }

    /**
     * Accept a pending connection request
     */
    @PutMapping("/{requestId}/accept")
    @Operation(summary = "Accepter une demande de connexion")
    public ResponseEntity<ApiResponse<ConnectionRequestDTO>> acceptRequest(
            @PathVariable Long requestId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long receiverId = resolveUserId(userDetails);
        ConnectionRequestDTO result = connectionRequestService.acceptRequest(requestId, receiverId);
        return ResponseEntity.ok(ApiResponse.ok("Demande acceptée", result));
    }

    /**
     * Reject a pending connection request
     */
    @PutMapping("/{requestId}/reject")
    @Operation(summary = "Refuser une demande de connexion")
    public ResponseEntity<ApiResponse<Void>> rejectRequest(
            @PathVariable Long requestId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long receiverId = resolveUserId(userDetails);
        connectionRequestService.rejectRequest(requestId, receiverId);
        return ResponseEntity.ok(ApiResponse.<Void>ok("Demande refusée", null));
    }

    /**
     * Cancel a sent connection request (only pending requests)
     */
    @DeleteMapping("/{requestId}")
    @Operation(summary = "Annuler une demande de connexion envoyée")
    public ResponseEntity<ApiResponse<Void>> cancelRequest(
            @PathVariable Long requestId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long senderId = resolveUserId(userDetails);
        connectionRequestService.cancelRequest(requestId, senderId);
        return ResponseEntity.ok(ApiResponse.<Void>ok("Demande annulée", null));
    }

    /**
     * Get pending connection requests received by current user
     */
    @GetMapping("/pending")
    @Operation(summary = "Obtenir les demandes de connexion en attente")
    public ResponseEntity<ApiResponse<Page<ConnectionRequestDTO>>> getPendingRequests(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Long userId = resolveUserId(userDetails);
        Pageable pageable = PageRequest.of(page, size);
        Page<ConnectionRequestDTO> result = connectionRequestService.getPendingRequests(userId, pageable);
        return ResponseEntity.ok(ApiResponse.ok(result));
    }

    /**
     * Get sent connection requests from current user
     */
    @GetMapping("/sent")
    @Operation(summary = "Obtenir les demandes de connexion envoyées")
    public ResponseEntity<ApiResponse<Page<ConnectionRequestDTO>>> getSentRequests(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Long userId = resolveUserId(userDetails);
        Pageable pageable = PageRequest.of(page, size);
        Page<ConnectionRequestDTO> result = connectionRequestService.getSentRequests(userId, pageable);
        return ResponseEntity.ok(ApiResponse.ok(result));
    }

    /**
     * Get connection status with a specific user
     * Response: PENDING, ACCEPTED, REJECTED, or NONE
     */
    @GetMapping("/{userId}/status")
    @Operation(summary = "Vérifier le statut de la demande avec un utilisateur")
    public ResponseEntity<ApiResponse<String>> getRequestStatus(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long currentUserId = resolveUserId(userDetails);
        String status = connectionRequestService.getRequestStatus(currentUserId, userId);
        return ResponseEntity.ok(ApiResponse.ok(status));
    }

    /**
     * Get count of pending requests (for notification badge)
     */
    @GetMapping("/pending/count")
    @Operation(summary = "Obtenir le nombre de demandes en attente")
    public ResponseEntity<ApiResponse<Long>> getPendingCount(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        long count = connectionRequestService.getPendingRequestCount(userId);
        return ResponseEntity.ok(ApiResponse.ok(count));
    }

    /**
     * Get all accepted connections for current user
     */
    @GetMapping("/accepted")
    @Operation(summary = "Obtenir toutes les connexions acceptées")
    public ResponseEntity<ApiResponse<List<User>>> getAcceptedConnections(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        List<User> connections = connectionRequestService.getAcceptedConnections(userId);
        return ResponseEntity.ok(ApiResponse.ok(connections));
    }

    // ── Helpers ─────────────────────────────────────────────────────

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
