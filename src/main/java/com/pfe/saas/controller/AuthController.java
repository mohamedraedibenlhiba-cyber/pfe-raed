package com.pfe.saas.controller;

import com.pfe.saas.dto.request.*;
import com.pfe.saas.dto.*;
import com.pfe.saas.dto.response.*;
import com.pfe.saas.service.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
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

    @PostMapping("/init-admin")
    @Operation(summary = "Initialize admin account (temporary fix)")
    public ResponseEntity<ApiResponse<JwtResponse>> initAdmin() {
        return ResponseEntity.ok(ApiResponse.ok("Admin account initialized",
                authService.initializeAdmin()));
    }

    @PostMapping("/change-password")
    @Operation(summary = "Changer le mot de passe de l'utilisateur connecté")
    public ResponseEntity<ApiResponse<String>> changePassword(
            @Valid @RequestBody ChangePasswordRequest request,
            Authentication authentication) {
        authService.changePassword(authentication.getName(), request);
        return ResponseEntity.ok(ApiResponse.ok("Mot de passe modifié avec succès", ""));
    }

    @PostMapping("/forgot-password")
    @Operation(summary = "Demander la réinitialisation du mot de passe (envoie un email)")
    public ResponseEntity<ApiResponse<String>> forgotPassword(
            @Valid @RequestBody ForgotPasswordRequest request) {
        authService.forgotPassword(request.getEmail());
        return ResponseEntity.ok(ApiResponse.ok("Email de réinitialisation envoyé. Vérifiez votre boîte de réception.", ""));
    }

    @PostMapping("/reset-password")
    @Operation(summary = "Réinitialiser le mot de passe avec le token reçu par email")
    public ResponseEntity<ApiResponse<String>> resetPassword(
            @Valid @RequestBody ResetPasswordRequest request) {
        authService.resetPassword(request.getToken(), request.getNewPassword());
        return ResponseEntity.ok(ApiResponse.ok("Mot de passe réinitialisé avec succès", ""));
    }

    @GetMapping("/validate-reset-token/{token}")
    @Operation(summary = "Valider si un token de réinitialisation est valide et non expiré")
    public ResponseEntity<ApiResponse<String>> validateResetToken(@PathVariable String token) {
        boolean isValid = authService.validateResetToken(token);
        if (!isValid) {
            return ResponseEntity.badRequest().body(ApiResponse.error("Token invalide ou expiré"));
        }
        return ResponseEntity.ok(ApiResponse.ok("Token valide", ""));
    }
}

