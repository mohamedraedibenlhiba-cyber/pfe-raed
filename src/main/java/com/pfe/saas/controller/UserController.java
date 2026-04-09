package com.pfe.saas.controller;

import com.pfe.saas.dto.request.UpdateProfileRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.UserProfileResponse;
import com.pfe.saas.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "Profil utilisateur et photo de profil")
@SecurityRequirement(name = "bearerAuth")
public class UserController {

    private final UserService userService;

    @GetMapping("/me")
    @Operation(summary = "Obtenir mon profil")
    public ResponseEntity<ApiResponse<UserProfileResponse>> getProfile(
            @AuthenticationPrincipal UserDetails userDetails) {
        return ResponseEntity.ok(ApiResponse.ok(userService.getProfile(userDetails.getUsername())));
    }

    @PutMapping("/me")
    @Operation(summary = "Mettre à jour mon profil")
    public ResponseEntity<ApiResponse<UserProfileResponse>> updateProfile(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody UpdateProfileRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Profil mis à jour", userService.updateProfile(userDetails.getUsername(), req)));
    }

    @PostMapping(value = "/me/profile-picture", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @Operation(summary = "Changer ma photo de profil")
    public ResponseEntity<ApiResponse<UserProfileResponse>> uploadProfilePicture(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam("file") MultipartFile file) throws IOException {
        return ResponseEntity.ok(ApiResponse.ok("Photo de profil mise à jour",
                userService.uploadProfilePicture(userDetails.getUsername(), file)));
    }

    @GetMapping("/me/profile-picture/{userId}/{filename}")
    @Operation(summary = "Servir une photo de profil")
    public ResponseEntity<byte[]> serveProfilePicture(
            @PathVariable Long userId,
            @PathVariable String filename) throws IOException {
        byte[] data = userService.serveProfilePicture(userId, filename);
        String contentType = filename.matches("(?i).*\\.(jpg|jpeg)") ? "image/jpeg"
                : filename.matches("(?i).*\\.png") ? "image/png"
                : filename.matches("(?i).*\\.gif") ? "image/gif"
                : "application/octet-stream";
        return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(data);
    }
}
