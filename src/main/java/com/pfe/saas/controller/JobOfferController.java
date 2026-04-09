package com.pfe.saas.controller;

import com.pfe.saas.dto.request.JobOfferRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.JobOffer;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.ExportService;
import com.pfe.saas.service.JobOfferService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.*;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/offers")
@RequiredArgsConstructor
@Tag(name = "Offres d'emploi", description = "CRUD des offres, publication, lien public")
@SecurityRequirement(name = "bearerAuth")
public class JobOfferController {

    private final JobOfferService jobOfferService;
    private final ExportService exportService;
    private final UserRepository userRepository;

    // ---- Endpoints publics (sans auth) ----
    @GetMapping("/public")
    @Operation(summary = "Recherche publique d'offres (sans authentification)")
    public ResponseEntity<ApiResponse<Page<JobOffer>>> searchPublic(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String location,
            @RequestParam(required = false) String contractType,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(ApiResponse.ok(
                jobOfferService.searchPublicOffers(title, location, contractType, PageRequest.of(page, size))));
    }

    @GetMapping("/public/token/{token}")
    @Operation(summary = "Accéder à une offre via son lien public unique")
    public ResponseEntity<ApiResponse<JobOffer>> getByToken(@PathVariable String token) {
        return ResponseEntity.ok(ApiResponse.ok(jobOfferService.getOfferByPublicToken(token)));
    }

    // ---- Endpoints entreprise ----
    @PostMapping
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Créer une nouvelle offre d'emploi")
    public ResponseEntity<ApiResponse<JobOffer>> create(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody JobOfferRequest request) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Offre créée", jobOfferService.createOffer(enterpriseId, request)));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Modifier une offre existante")
    public ResponseEntity<ApiResponse<JobOffer>> update(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody JobOfferRequest request) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Offre mise à jour",
                jobOfferService.updateOffer(id, enterpriseId, request)));
    }

    @PostMapping("/{id}/publish")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Publier une offre (DRAFT → PUBLISHED)")
    public ResponseEntity<ApiResponse<JobOffer>> publish(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Offre publiée", jobOfferService.publishOffer(id, enterpriseId)));
    }

    @PostMapping("/{id}/close")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Fermer une offre")
    public ResponseEntity<ApiResponse<JobOffer>> close(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Offre fermée", jobOfferService.closeOffer(id, enterpriseId)));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Supprimer une offre")
    public ResponseEntity<ApiResponse<Void>> delete(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        jobOfferService.deleteOffer(id, enterpriseId);
        return ResponseEntity.ok(ApiResponse.ok("Offre supprimée", null));
    }

    @GetMapping("/mine")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Récupérer toutes ses offres")
    public ResponseEntity<ApiResponse<List<JobOffer>>> myOffers(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(jobOfferService.getEnterpriseOffers(enterpriseId)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Détail d'une offre")
    public ResponseEntity<ApiResponse<JobOffer>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(jobOfferService.getOfferById(id)));
    }

    @GetMapping("/{id}/export/excel")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Exporter les candidatures en Excel")
    public ResponseEntity<byte[]> exportExcel(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) throws IOException {
        Long enterpriseId = resolveUserId(userDetails);
        byte[] data = exportService.exportApplicationsToExcel(id, enterpriseId);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=candidatures.xlsx")
                .body(data);
    }

    @GetMapping("/{id}/export/word")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Exporter les candidatures en Word")
    public ResponseEntity<byte[]> exportWord(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) throws IOException {
        Long enterpriseId = resolveUserId(userDetails);
        byte[] data = exportService.exportApplicationsToWord(id, enterpriseId);
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=rapport_candidatures.docx")
                .body(data);
    }

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
