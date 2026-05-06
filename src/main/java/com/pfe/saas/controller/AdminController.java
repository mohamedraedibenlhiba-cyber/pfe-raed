package com.pfe.saas.controller;

import com.pfe.saas.dto.response.AdminDashboardResponse;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.JobOffer;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.OfferStatus;
import com.pfe.saas.repository.JobOfferRepository;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.AdminService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
@Tag(name = "Administration", description = "Dashboard admin, gestion utilisateurs")
@SecurityRequirement(name = "bearerAuth")
public class AdminController {

    private final AdminService adminService;
    private final UserRepository userRepository;
    private final JobOfferRepository jobOfferRepository;

    @GetMapping("/dashboard")
    @Operation(summary = "Statistiques globales de la plateforme")
    public ResponseEntity<ApiResponse<AdminDashboardResponse>> dashboard() {
        return ResponseEntity.ok(ApiResponse.ok(adminService.getDashboardStats()));
    }

    @GetMapping("/users")
    @Operation(summary = "Liste paginée de tous les utilisateurs")
    public ResponseEntity<ApiResponse<Page<User>>> allUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Page<User> users = userRepository.findAll(PageRequest.of(page, size, Sort.by("createdAt").descending()));
        return ResponseEntity.ok(ApiResponse.ok(users));
    }

    @GetMapping("/users/{id}")
    @Operation(summary = "Détail d'un utilisateur")
    public ResponseEntity<ApiResponse<User>> userById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return ResponseEntity.ok(ApiResponse.ok(user));
    }

    @PatchMapping("/users/{id}/toggle-active")
    @Operation(summary = "Activer / Désactiver un compte utilisateur")
    public ResponseEntity<ApiResponse<Void>> toggleActive(@PathVariable Long id) {
        adminService.toggleUserActive(id);
        return ResponseEntity.ok(ApiResponse.ok("Statut utilisateur mis à jour", null));
    }

    @DeleteMapping("/users/{id}")
    @Operation(summary = "Supprimer un utilisateur (irréversible)")
    public ResponseEntity<ApiResponse<Void>> deleteUser(@PathVariable Long id) {
        adminService.deleteUser(id);
        return ResponseEntity.ok(ApiResponse.ok("Utilisateur supprimé", null));
    }

    @GetMapping("/offers")
    @Operation(summary = "Toutes les offres d'emploi (vue admin)")
    public ResponseEntity<ApiResponse<Page<JobOffer>>> allOffers(
            @RequestParam(required = false) OfferStatus status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Page<JobOffer> offers = jobOfferRepository.adminSearch(
                status, PageRequest.of(page, size, Sort.by("createdAt").descending()));
        return ResponseEntity.ok(ApiResponse.ok(offers));
    }
}
