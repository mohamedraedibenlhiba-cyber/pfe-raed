package com.pfe.saas.controller;

import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.Follow;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.FollowService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/follows")
@RequiredArgsConstructor
@Tag(name = "Follow", description = "Système d'abonnement (suivre/ne plus suivre)")
@SecurityRequirement(name = "bearerAuth")
public class FollowController {

    private final FollowService followService;
    private final UserRepository userRepository;

    @PostMapping("/{userId}")
    @Operation(summary = "Suivre un utilisateur")
    public ResponseEntity<ApiResponse<Void>> follow(@PathVariable Long userId) {
        followService.follow(userId);
        return ResponseEntity.ok(ApiResponse.ok("Abonnement réussi", null));
    }

    @DeleteMapping("/{userId}")
    @Operation(summary = "Ne plus suivre un utilisateur")
    public ResponseEntity<ApiResponse<Void>> unfollow(@PathVariable Long userId) {
        followService.unfollow(userId);
        return ResponseEntity.ok(ApiResponse.ok("Désabonnement réussi", null));
    }

    @GetMapping("/{userId}/status")
    @Operation(summary = "Vérifier si je suis un utilisateur")
    public ResponseEntity<ApiResponse<Map<String, Object>>> status(@PathVariable Long userId) {
        boolean following = followService.isFollowing(userId);
        long followers = followService.countFollowers(userId);
        long following2 = followService.countFollowing(userId);
        return ResponseEntity.ok(ApiResponse.ok(Map.of(
                "isFollowing", following,
                "followersCount", followers,
                "followingCount", following2
        )));
    }

    @GetMapping("/{userId}/followers")
    @Operation(summary = "Liste des abonnés d'un utilisateur")
    public ResponseEntity<ApiResponse<List<Follow>>> getFollowers(@PathVariable Long userId) {
        return ResponseEntity.ok(ApiResponse.ok(followService.getFollowers(userId)));
    }

    @GetMapping("/{userId}/following")
    @Operation(summary = "Liste des abonnements d'un utilisateur")
    public ResponseEntity<ApiResponse<List<Follow>>> getFollowing(@PathVariable Long userId) {
        return ResponseEntity.ok(ApiResponse.ok(followService.getFollowing(userId)));
    }
}
