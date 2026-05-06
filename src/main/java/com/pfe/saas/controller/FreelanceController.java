package com.pfe.saas.controller;

import com.pfe.saas.dto.request.BidNegotiationRequest;
import com.pfe.saas.dto.request.FreelanceProjectRequest;
import com.pfe.saas.dto.request.ProjectBidRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.FreelanceProject;
import com.pfe.saas.entity.ProjectBid;
import com.pfe.saas.service.FreelanceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/freelance")
@RequiredArgsConstructor
@Tag(name = "Freelance", description = "Espace freelance — projets et négociation")
@SecurityRequirement(name = "bearerAuth")
public class FreelanceController {

    private final FreelanceService freelanceService;

    // ── Projets ───────────────────────────────────────────────────────────────

    @PostMapping("/projects")
    @Operation(summary = "Publier un projet freelance")
    public ResponseEntity<ApiResponse<FreelanceProject>> create(@Valid @RequestBody FreelanceProjectRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Projet publié", freelanceService.createProject(req)));
    }

    @PutMapping("/projects/{id}")
    @Operation(summary = "Modifier un projet")
    public ResponseEntity<ApiResponse<FreelanceProject>> update(@PathVariable Long id,
                                                                 @Valid @RequestBody FreelanceProjectRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Projet mis à jour", freelanceService.updateProject(id, req)));
    }

    @DeleteMapping("/projects/{id}")
    @Operation(summary = "Supprimer un projet")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        freelanceService.deleteProject(id);
        return ResponseEntity.ok(ApiResponse.ok("Projet supprimé", null));
    }

    @GetMapping("/projects")
    @Operation(summary = "Rechercher des projets ouverts")
    public ResponseEntity<ApiResponse<Page<FreelanceProject>>> search(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String skills,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size) {
        return ResponseEntity.ok(ApiResponse.ok(freelanceService.search(title, skills, page, size)));
    }

    @GetMapping("/projects/{id}")
    @Operation(summary = "Détail d'un projet")
    public ResponseEntity<ApiResponse<FreelanceProject>> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(freelanceService.getProjectById(id)));
    }

    @GetMapping("/projects/mine")
    @Operation(summary = "Mes projets publiés")
    public ResponseEntity<ApiResponse<Page<FreelanceProject>>> mine(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size) {
        return ResponseEntity.ok(ApiResponse.ok(freelanceService.getMyProjects(page, size)));
    }

    // ── Offres (bids) ─────────────────────────────────────────────────────────

    @PostMapping("/projects/{id}/bids")
    @Operation(summary = "Soumettre une offre pour un projet")
    public ResponseEntity<ApiResponse<ProjectBid>> bid(@PathVariable Long id,
                                                        @Valid @RequestBody ProjectBidRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Offre soumise", freelanceService.submitBid(id, req)));
    }

    @PutMapping("/bids/{id}")
    @Operation(summary = "Modifier mon offre")
    public ResponseEntity<ApiResponse<ProjectBid>> updateBid(@PathVariable Long id,
                                                              @Valid @RequestBody ProjectBidRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Offre mise à jour", freelanceService.updateBid(id, req)));
    }

    @PostMapping("/bids/{id}/withdraw")
    @Operation(summary = "Retirer mon offre")
    public ResponseEntity<ApiResponse<Void>> withdraw(@PathVariable Long id) {
        freelanceService.withdrawBid(id);
        return ResponseEntity.ok(ApiResponse.ok("Offre retirée", null));
    }

    @PatchMapping("/bids/{id}/negotiate")
    @Operation(summary = "Négocier / accepter / rejeter une offre (client)")
    public ResponseEntity<ApiResponse<ProjectBid>> negotiate(@PathVariable Long id,
                                                              @Valid @RequestBody BidNegotiationRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Offre mise à jour", freelanceService.negotiate(id, req)));
    }

    @GetMapping("/projects/{id}/bids")
    @Operation(summary = "Offres reçues pour un projet (propriétaire)")
    public ResponseEntity<ApiResponse<List<ProjectBid>>> projectBids(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(freelanceService.getProjectBids(id)));
    }

    @GetMapping("/bids/mine")
    @Operation(summary = "Mes offres soumises")
    public ResponseEntity<ApiResponse<List<ProjectBid>>> myBids() {
        return ResponseEntity.ok(ApiResponse.ok(freelanceService.getMyBids()));
    }
}
