package com.pfe.saas.controller;

import com.pfe.saas.dto.request.CertificationRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.CertificationDTO;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.CertificationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Endpoints for managing candidate certifications.
 */
@RestController
@RequestMapping("/api/certifications")
@RequiredArgsConstructor
@Tag(name = "Certifications", description = "Gestion des certifications de candidats")
public class CertificationController {

    private final CertificationService certificationService;
    private final UserRepository userRepository;

    /**
     * Add a new certification (Candidate only)
     */
    @PostMapping
    @Operation(summary = "Ajouter une certification")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<ApiResponse<CertificationDTO>> addCertification(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody CertificationRequest req) {
        Long candidateId = resolveUserId(userDetails);
        CertificationDTO result = certificationService.addCertification(candidateId, req);
        return ResponseEntity.ok(ApiResponse.ok("Certification ajoutée", result));
    }

    /**
     * Update an existing certification (own certifications only)
     */
    @PutMapping("/{certId}")
    @Operation(summary = "Mettre à jour une certification")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<ApiResponse<CertificationDTO>> updateCertification(
            @PathVariable Long certId,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody CertificationRequest req) {
        Long candidateId = resolveUserId(userDetails);
        CertificationDTO result = certificationService.updateCertification(certId, candidateId, req);
        return ResponseEntity.ok(ApiResponse.ok("Certification mise à jour", result));
    }

    /**
     * Delete a certification (own certifications only)
     */
    @DeleteMapping("/{certId}")
    @Operation(summary = "Supprimer une certification")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<ApiResponse<Void>> deleteCertification(
            @PathVariable Long certId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long candidateId = resolveUserId(userDetails);
        certificationService.deleteCertification(certId, candidateId);
        return ResponseEntity.ok(ApiResponse.<Void>ok("Certification supprimée", null));
    }

    /**
     * Get all certifications for a candidate (PUBLIC endpoint)
     */
    @GetMapping("/candidate/{candidateId}")
    @Operation(summary = "Obtenir les certifications d'un candidat")
    public ResponseEntity<ApiResponse<List<CertificationDTO>>> getCandidateCertifications(
            @PathVariable Long candidateId) {
        List<CertificationDTO> result = certificationService.getCandidateCertifications(candidateId);
        return ResponseEntity.ok(ApiResponse.ok(result));
    }

    // ── Helpers ─────────────────────────────────────────────────────

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
