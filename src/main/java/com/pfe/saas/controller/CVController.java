package com.pfe.saas.controller;

import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.CVResponse;
import com.pfe.saas.entity.CV;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.CVService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/cvs")
@RequiredArgsConstructor
@Tag(name = "CV", description = "Upload, gestion et analyse IA des CV")
@SecurityRequirement(name = "bearerAuth")
@PreAuthorize("hasRole('CANDIDATE')")
public class CVController {

    private final CVService cvService;
    private final UserRepository userRepository;

    @PostMapping(value = "/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Uploader un CV (PDF ou Word)")
    public ResponseEntity<ApiResponse<CVResponse>> upload(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam("file") MultipartFile file) throws IOException {
        Long candidateId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("CV uploadé avec succès", cvService.uploadCV(candidateId, file)));
    }

    @GetMapping
    @Operation(summary = "Lister mes CV")
    public ResponseEntity<ApiResponse<List<CVResponse>>> myCVs(@AuthenticationPrincipal UserDetails userDetails) {
        Long candidateId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(cvService.getCandidateCVs(candidateId)));
    }

    @PatchMapping("/{id}/default")
    @Operation(summary = "Définir ce CV comme CV par défaut")
    public ResponseEntity<ApiResponse<CVResponse>> setDefault(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long candidateId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("CV par défaut mis à jour", cvService.setDefaultCV(id, candidateId)));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Supprimer un CV")
    public ResponseEntity<ApiResponse<Void>> delete(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long candidateId = resolveUserId(userDetails);
        cvService.deleteCV(id, candidateId);
        return ResponseEntity.ok(ApiResponse.ok("CV supprimé", null));
    }

    @GetMapping("/{id}/view")
    @Operation(summary = "Visualiser un CV inline (PDF/Word)")
    public ResponseEntity<byte[]> viewCV(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) throws IOException {
        Long candidateId = resolveUserId(userDetails);
        CV cv = cvService.getCV(id, candidateId);
        byte[] data = cvService.readCVContent(cv);
        String contentType = cv.getContentType() != null ? cv.getContentType() : "application/octet-stream";
        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header("Content-Disposition", "inline; filename=\"" + cv.getFileName() + "\"")
                .body(data);
    }

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
