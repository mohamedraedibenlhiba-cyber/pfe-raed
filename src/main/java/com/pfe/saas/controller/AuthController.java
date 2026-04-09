package com.pfe.saas.controller;

import com.pfe.saas.dto.request.*;
import com.pfe.saas.dto.response.*;
import com.pfe.saas.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Tag(name = "Authentification", description = "Inscription, connexion et gestion de session")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    @Operation(summary = "Connexion utilisateur (retourne un JWT)")
    public ResponseEntity<ApiResponse<JwtResponse>> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(ApiResponse.ok("Connexion réussie", authService.login(request)));
    }

    @PostMapping("/register/enterprise")
    @Operation(summary = "Inscription d'une entreprise")
    public ResponseEntity<ApiResponse<JwtResponse>> registerEnterprise(
            @Valid @RequestBody RegisterEnterpriseRequest request) {
        return ResponseEntity.ok(ApiResponse.ok("Inscription entreprise réussie",
                authService.registerEnterprise(request)));
    }

    @PostMapping("/register/candidate")
    @Operation(summary = "Inscription d'un candidat")
    public ResponseEntity<ApiResponse<JwtResponse>> registerCandidate(
            @Valid @RequestBody RegisterCandidateRequest request) {
        return ResponseEntity.ok(ApiResponse.ok("Inscription candidat réussie",
                authService.registerCandidate(request)));
    }
}
