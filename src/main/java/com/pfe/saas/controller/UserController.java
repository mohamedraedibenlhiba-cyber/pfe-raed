package com.pfe.saas.controller;

import com.pfe.saas.dto.request.UpdateProfileRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.UserProfileResponse;
import com.pfe.saas.dto.response.PublicProfileResponse;
import com.pfe.saas.dto.response.ConnectionStatusResponse;
import com.pfe.saas.dto.response.UserSearchResponse;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.Role;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "Profil utilisateur et photo de profil")
@SecurityRequirement(name = "bearerAuth")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @GetMapping("/me")
    @Operation(summary = "Obtenir mon profil")
    public ResponseEntity<ApiResponse<UserProfileResponse>> getProfile(
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(ApiResponse.ok(userService.getProfile(userDetails.getUsername())));
    }

    @PutMapping("/me")
    @Operation(summary = "Mettre à jour mon profil")
    public ResponseEntity<ApiResponse<UserProfileResponse>> updateProfile(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody UpdateProfileRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Profil mis à jour", userService.updateProfile(userDetails.getUsername(), req)));
    }

    @PostMapping(value = "/me/profile-picture", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Changer ma photo de profil")
    public ResponseEntity<ApiResponse<UserProfileResponse>> uploadProfilePicture(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(ApiResponse.ok("Photo de profil mise à jour",
                userService.uploadProfilePicture(userDetails.getUsername(), file)));
    }

    @GetMapping("/me/profile-picture/{userId}/{filename}")
    @Operation(summary = "Servir une photo de profil")
    public ResponseEntity<byte[]> serveProfilePicture(
            @PathVariable Long userId,
            @PathVariable String filename) throws IOException {
        byte[] data = userService.serveProfilePicture(userId, filename);
        String contentType = filename.matches("(?i).*\\.(jpg|jpeg)") ? "image/jpeg"
                : filename.matches("(?i).*\\.png") ? "image/png"
                : filename.matches("(?i).*\\.gif") ? "image/gif"
                : "application/octet-stream";
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(data);
    }

    // ✨ ──────────────────────────────────────────────────────────────
    // ✨ NOUVEAUX: Profils PUBLICS et Statut de Connexion
    // ✨ ──────────────────────────────────────────────────────────────

    /**
     * Affiche le profil PUBLIC d'un utilisateur (Candidat ou Entreprise)
     * Endpoint PUBLIC - pas d'authentification requise
     */
    @GetMapping("/{userId}")
    @Operation(summary = "Voir le profil public d'un utilisateur (Candidat ou Entreprise)")
    public ResponseEntity<ApiResponse<PublicProfileResponse>> getPublicProfile(@PathVariable Long userId) {
        return ResponseEntity.ok(ApiResponse.ok(userService.getPublicProfile(userId)));
    }

    /**
     * Récupère le statut de connexion avec un utilisateur
     * (Pour savoir si on peut se envoyer des messages, combien de followers, etc.)
     */
    @GetMapping("/{userId}/connection-status")
    @Operation(summary = "Vérifier le statut de connexion avec un utilisateur")
    public ResponseEntity<ApiResponse<ConnectionStatusResponse>> getConnectionStatus(
            @PathVariable Long userId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long currentUserId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
            userService.getConnectionStatus(userId, currentUserId)
        ));
    }

    // ✨ ──────────────────────────────────────────────────────────────
    // ✨ Recherche utilisateurs
    // ✨ ──────────────────────────────────────────────────────────────

    /**
     * Cherche des utilisateurs par nom, email, skills, companyName
     */
    @GetMapping("/search")
    @Operation(summary = "Chercher des utilisateurs (candidats/entreprises)")
    public ResponseEntity<ApiResponse<Page<UserSearchResponse>>> search(
            @RequestParam(required = false) String q,
            @RequestParam(required = false) String role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long currentUserId = resolveUserId(userDetails);

        List<Role> roles = null;
        if (role != null && !role.isEmpty()) {
            try {
                roles = List.of(Role.valueOf("ROLE_" + role.toUpperCase()));
            } catch (IllegalArgumentException e) {
                return ResponseEntity.badRequest()
                    .body(ApiResponse.error("Rôle invalide. Utilisez CANDIDATE ou ENTERPRISE"));
            }
        }

        return ResponseEntity.ok(ApiResponse.ok(
            userService.searchUsers(q, roles, currentUserId, page, size)
        ));
    }

    // ── Helpers ─────────────────────────────────────────────────────

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
