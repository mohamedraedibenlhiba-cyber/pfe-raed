package com.pfe.saas.controller;

import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.UserFriendSummaryDTO;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.FriendshipService;
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

/**
 * Endpoints for managing friendships between users.
 *
 * Friendships are created when a connection request is ACCEPTED.
 * This controller provides endpoints to list, check, and remove friendships.
 *
 * NOTE: Route order matters in Spring!
 * - Specific routes (/count, /{id}/status) must come BEFORE parameterized routes (/{id})
 * - Otherwise, /count will be matched as /{id} with userId="count"
 */
@RestController
@RequestMapping("/api/friends")
@RequiredArgsConstructor
@Tag(name = "Friendships", description = "Gestion de la liste d'amis")
@SecurityRequirement(name = "bearerAuth")
public class FriendshipController {

    private final FriendshipService friendshipService;
    private final UserRepository userRepository;

    /**
     * Get friends of the current authenticated user (paginated)
     */
    @GetMapping
    @Operation(summary = "Obtenir la liste d'amis de l'utilisateur actuel")
    public ResponseEntity<ApiResponse<Page<UserFriendSummaryDTO>>> getFriends(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        // Validation
        if (page < 0) page = 0;
        if (size < 1) size = 10;
        if (size > 100) size = 100;  // Maximum de 100 éléments par page

        Long userId = resolveUserId(userDetails);
        Pageable pageable = PageRequest.of(page, size);
        Page<UserFriendSummaryDTO> friends = friendshipService.getFriendsForUser(userId, pageable);
        return ResponseEntity.ok(ApiResponse.ok(friends));
    }

    /**
     * Get count of friends for current user (useful for UI badges)
     * ⚠️ MUST come BEFORE @GetMapping("/{userId}") to avoid route collision
     */
    @GetMapping("/count")
    @Operation(summary = "Obtenir le nombre d'amis de l'utilisateur actuel")
    public ResponseEntity<ApiResponse<Long>> getFriendsCount(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        long count = friendshipService.getFriendsCount(userId);
        return ResponseEntity.ok(ApiResponse.ok(count));
    }

    /**
     * Check if two users are friends
     * ⚠️ MUST come BEFORE @GetMapping("/{userId}") to avoid route collision
     */
    @GetMapping("/{userId}/status")
    @Operation(summary = "Vérifier si deux utilisateurs sont amis")
    public ResponseEntity<ApiResponse<Boolean>> checkFriendshipStatus(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long currentUserId = resolveUserId(userDetails);
        boolean isFriend = friendshipService.isFriend(currentUserId, userId);
        return ResponseEntity.ok(ApiResponse.ok(isFriend));
    }

    /**
     * Get friends of a specific user (public endpoint - no auth required for reading)
     * ⚠️ This GENERIC route comes LAST, after all specific routes
     */
    @GetMapping("/{userId}")
    @Operation(summary = "Obtenir la liste d'amis d'un utilisateur spécifique")
    public ResponseEntity<ApiResponse<Page<UserFriendSummaryDTO>>> getUserFriends(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        // Validation
        if (page < 0) page = 0;
        if (size < 1) size = 10;
        if (size > 100) size = 100;

        Pageable pageable = PageRequest.of(page, size);
        Page<UserFriendSummaryDTO> friends = friendshipService.getFriendsForUser(userId, pageable);
        return ResponseEntity.ok(ApiResponse.ok(friends));
    }

    /**
     * Remove a friend from current user's friends list
     */
    @DeleteMapping("/{userId}")
    @Operation(summary = "Supprimer un ami")
    public ResponseEntity<ApiResponse<Void>> removeFriend(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long currentUserId = resolveUserId(userDetails);
        friendshipService.removeFriend(currentUserId, userId);
        return ResponseEntity.ok(ApiResponse.<Void>ok("Ami supprimé", null));
    }

    // ── Helpers ─────────────────────────────────────────────────────

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
