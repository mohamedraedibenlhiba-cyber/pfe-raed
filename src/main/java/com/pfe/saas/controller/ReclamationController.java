package com.pfe.saas.controller;

import com.pfe.saas.dto.request.ReclamationRequest;
import com.pfe.saas.dto.request.ReclamationResponseRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.Reclamation;
import com.pfe.saas.enums.ReclamationStatus;
import com.pfe.saas.service.ReclamationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reclamations")
@RequiredArgsConstructor
@Tag(name = "Réclamations", description = "Gestion des réclamations utilisateurs")
@SecurityRequirement(name = "bearerAuth")
public class ReclamationController {

    private final ReclamationService reclamationService;

    // ── User endpoints ────────────────────────────────────────────────────────

    @PostMapping
    @Operation(summary = "Soumettre une réclamation")
    public ResponseEntity<ApiResponse<Reclamation>> submit(@Valid @RequestBody ReclamationRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Réclamation soumise", reclamationService.create(req)));
    }

    @GetMapping("/my")
    @Operation(summary = "Mes réclamations")
    public ResponseEntity<ApiResponse<List<Reclamation>>> my() {
        return ResponseEntity.ok(ApiResponse.ok(reclamationService.getMyReclamations()));
    }

    // ── Admin endpoints ───────────────────────────────────────────────────────

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Liste de toutes les réclamations (admin)")
    public ResponseEntity<ApiResponse<Page<Reclamation>>> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size) {
        return ResponseEntity.ok(ApiResponse.ok(reclamationService.getAll(page, size)));
    }

    @GetMapping("/status/{status}")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Réclamations par statut (admin)")
    public ResponseEntity<ApiResponse<Page<Reclamation>>> getByStatus(
            @PathVariable ReclamationStatus status,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "15") int size) {
        return ResponseEntity.ok(ApiResponse.ok(reclamationService.getByStatus(status, page, size)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Détail d'une réclamation")
    public ResponseEntity<ApiResponse<Reclamation>> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(reclamationService.getById(id)));
    }

    @PatchMapping("/{id}/respond")
    @PreAuthorize("hasRole('ADMIN')")
    @Operation(summary = "Répondre à une réclamation (admin)")
    public ResponseEntity<ApiResponse<Reclamation>> respond(
            @PathVariable Long id,
            @Valid @RequestBody ReclamationResponseRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Réclamation mise à jour", reclamationService.respond(id, req)));
    }
}
