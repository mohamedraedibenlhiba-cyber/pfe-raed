package com.pfe.saas.controller;

import com.pfe.saas.dto.request.ApplicationRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.ApplicationDetailResponse;
import com.pfe.saas.dto.response.EnterpriseDashboardResponse;
import com.pfe.saas.entity.Application;
import com.pfe.saas.entity.CV;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.ApplicationService;
import com.pfe.saas.service.CVService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/applications")
@RequiredArgsConstructor
@Tag(name = "Candidatures", description = "Soumission, suivi et analyse IA des candidatures")
@SecurityRequirement(name = "bearerAuth")
public class ApplicationController {

    private final ApplicationService applicationService;
    private final CVService cvService;
    private final UserRepository userRepository;

    @PostMapping
    @PreAuthorize("hasRole('CANDIDATE')")
    @Operation(summary = "Soumettre une candidature")
    public ResponseEntity<ApiResponse<Application>> apply(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody ApplicationRequest request) {
        Long candidateId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Candidature soumise",
                applicationService.apply(candidateId, request)));
    }

    @GetMapping("/my")
    @PreAuthorize("hasRole('CANDIDATE')")
    @Operation(summary = "Mes candidatures")
    public ResponseEntity<ApiResponse<List<Application>>> myApplications(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long candidateId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(applicationService.getCandidateApplications(candidateId)));
    }

    @GetMapping("/offer/{offerId}")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Candidatures reçues pour une offre (paginées)")
    public ResponseEntity<ApiResponse<Page<Application>>> offerApplications(
            @PathVariable Long offerId,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
                applicationService.getApplicationsByOffer(offerId, enterpriseId, PageRequest.of(page, size))));
    }

    @GetMapping("/offer/{offerId}/with-details")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Candidatures avec profil candidat complet (paginées)")
    public ResponseEntity<ApiResponse<Page<ApplicationDetailResponse>>> offerApplicationsWithDetails(
            @PathVariable Long offerId,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
                applicationService.getApplicationsByOfferWithDetails(offerId, enterpriseId, PageRequest.of(page, size))));
    }

    @GetMapping("/offer/{offerId}/ranked/with-details")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Candidatures classées par score IA avec profil complet")
    public ResponseEntity<ApiResponse<List<ApplicationDetailResponse>>> rankedApplicationsWithDetails(
            @PathVariable Long offerId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
                applicationService.getApplicationsByOfferRankedWithDetails(offerId, enterpriseId)));
    }

    @GetMapping("/offer/{offerId}/ranked")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Candidatures classées par score IA")
    public ResponseEntity<ApiResponse<List<Application>>> rankedApplications(
            @PathVariable Long offerId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(applicationService.getRankedApplications(offerId, enterpriseId)));
    }

    @GetMapping("/enterprise/dashboard")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Tableau de bord entreprise - Statistiques complètes")
    public ResponseEntity<ApiResponse<EnterpriseDashboardResponse>> enterpriseDashboard(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
                "Statistiques d'entreprise",
                applicationService.getEnterpriseDashboard(enterpriseId)));
    }

    @GetMapping("/{id}/detail")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Détails complets d'une candidature (avec profil candidat)")
    public ResponseEntity<ApiResponse<ApplicationDetailResponse>> getApplicationWithDetail(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
                applicationService.getApplicationDetail(id, enterpriseId)));
    }

    @GetMapping("/{id}/cv")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Visualiser le CV joint Ã  une candidature")
    public ResponseEntity<byte[]> getApplicationCv(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) throws IOException {
        Long enterpriseId = resolveUserId(userDetails);
        CV cv = applicationService.getApplicationCvForEnterprise(id, enterpriseId);
        byte[] data = cvService.readCVContent(cv);
        String contentType = cv.getContentType() != null ? cv.getContentType() : "application/octet-stream";
        String disposition = MediaType.APPLICATION_PDF_VALUE.equalsIgnoreCase(contentType) ? "inline" : "attachment";

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header("Content-Disposition", disposition + "; filename=\"" + cv.getFileName() + "\"")
                .body(data);
    }

    @PatchMapping("/{id}/status")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Changer le statut d'une candidature")
    public ResponseEntity<ApiResponse<Application>> updateStatus(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody Map<String, String> body) {
        Long enterpriseId = resolveUserId(userDetails);
        ApplicationStatus newStatus = ApplicationStatus.valueOf(body.get("status"));
        return ResponseEntity.ok(ApiResponse.ok("Statut mis à jour",
                applicationService.updateStatus(id, enterpriseId, newStatus)));
    }

    @PatchMapping("/{id}/notes")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Ajouter une note recruteur à une candidature")
    public ResponseEntity<ApiResponse<Application>> addNote(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody Map<String, Object> body) {
        Long enterpriseId = resolveUserId(userDetails);
        String note = (String) body.get("note");
        Integer rating = body.get("rating") != null ? ((Number) body.get("rating")).intValue() : null;
        return ResponseEntity.ok(ApiResponse.ok("Note enregistrée",
                applicationService.addRecruiterNote(id, enterpriseId, note, rating)));
    }

    @PostMapping("/{id}/analyze")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Déclencher l'analyse IA d'une candidature")
    public ResponseEntity<ApiResponse<Void>> analyzeApplication(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveUserId(userDetails);
        applicationService.triggerAnalysis(id, enterpriseId);
        return ResponseEntity.ok(ApiResponse.ok("Analyse lancée en arrière-plan", null));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Détail d'une candidature")
    public ResponseEntity<ApiResponse<Application>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(applicationService.getById(id)));
    }

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
