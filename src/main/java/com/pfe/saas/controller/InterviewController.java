package com.pfe.saas.controller;

import com.pfe.saas.dto.request.InterviewRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.InterviewResponse;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.InterviewService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/interviews")
@RequiredArgsConstructor
@Tag(name = "Entretiens", description = "Planification et gestion des entretiens")
@SecurityRequirement(name = "bearerAuth")
public class InterviewController {

    private final InterviewService interviewService;
    private final UserRepository userRepository;

    @PostMapping
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Proposer un entretien (Entreprise)")
    public ResponseEntity<ApiResponse<InterviewResponse>> propose(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody InterviewRequest req) {
        Long enterpriseId = resolveId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
            "Entretien proposé avec succès",
            interviewService.proposeInterview(enterpriseId, req)
        ));
    }

    @PutMapping("/{id}/confirm")
    @PreAuthorize("hasRole('CANDIDATE')")
    @Operation(summary = "Confirmer un entretien (Candidat)")
    public ResponseEntity<ApiResponse<InterviewResponse>> confirm(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody(required = false) Map<String, String> body) {
        Long candidateId = resolveId(userDetails);
        String note = body != null ? body.get("note") : null;
        return ResponseEntity.ok(ApiResponse.ok(
            "Entretien confirmé",
            interviewService.confirmInterview(id, candidateId, note)
        ));
    }

    @PutMapping("/{id}/cancel")
    @Operation(summary = "Annuler un entretien (Candidat ou Entreprise)")
    public ResponseEntity<ApiResponse<InterviewResponse>> cancel(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody(required = false) Map<String, String> body) {
        Long userId = resolveId(userDetails);
        String reason = body != null ? body.get("reason") : null;
        return ResponseEntity.ok(ApiResponse.ok(
            "Entretien annulé",
            interviewService.cancelInterview(id, userId, reason)
        ));
    }

    @PutMapping("/{id}/complete")
    @PreAuthorize("hasRole('ENTERPRISE')")
    @Operation(summary = "Marquer l'entretien comme complété (Entreprise)")
    public ResponseEntity<ApiResponse<InterviewResponse>> complete(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long enterpriseId = resolveId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
            "Entretien marqué comme complété",
            interviewService.completeInterview(id, enterpriseId)
        ));
    }

    @GetMapping("/mine")
    @Operation(summary = "Mes entretiens (Candidat ou Entreprise)")
    public ResponseEntity<ApiResponse<List<InterviewResponse>>> mine(
            @AuthenticationPrincipal UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        List<InterviewResponse> list = switch (user.getRole().name()) {
            case "ROLE_ENTERPRISE" -> interviewService.getInterviewsForEnterprise(user.getId());
            case "ROLE_CANDIDATE"  -> interviewService.getInterviewsForCandidate(user.getId());
            default -> List.of();
        };
        return ResponseEntity.ok(ApiResponse.ok(list));
    }

    @GetMapping("/application/{applicationId}")
    @Operation(summary = "Entretien lié à une candidature")
    public ResponseEntity<ApiResponse<InterviewResponse>> byApplication(
            @PathVariable Long applicationId) {
        return ResponseEntity.ok(ApiResponse.ok(interviewService.getByApplication(applicationId)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Détail d'un entretien")
    public ResponseEntity<ApiResponse<InterviewResponse>> getById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(interviewService.getById(id)));
    }

    private Long resolveId(UserDetails userDetails) {
        return userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"))
                .getId();
    }
}
