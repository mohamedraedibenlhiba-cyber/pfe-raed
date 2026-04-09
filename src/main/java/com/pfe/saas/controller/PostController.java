package com.pfe.saas.controller;

import com.pfe.saas.dto.request.CommentRequest;
import com.pfe.saas.dto.request.PostRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ReactionType;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.PostService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/posts")
@RequiredArgsConstructor
@Tag(name = "Actualités", description = "Publications, commentaires et réactions — fil d'actualité")
@SecurityRequirement(name = "bearerAuth")
public class PostController {

    private final PostService postService;
    private final UserRepository userRepository;

    @GetMapping("/feed")
    @Operation(summary = "Fil d'actualité personnalisé (posts des utilisateurs suivis)")
    public ResponseEntity<ApiResponse<Page<Post>>> feed(
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(postService.getFeed(userId, page, size)));
    }

    @GetMapping("/user/{userId}")
    @Operation(summary = "Publications d'un utilisateur donné")
    public ResponseEntity<ApiResponse<Page<Post>>> userPosts(
            @PathVariable Long userId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(ApiResponse.ok(postService.getUserPosts(userId, page, size)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Détail d'une publication")
    public ResponseEntity<ApiResponse<Post>> getPost(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(postService.getPostById(id)));
    }

    @PostMapping
    @Operation(summary = "Créer une publication")
    public ResponseEntity<ApiResponse<Post>> create(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody PostRequest request) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Publication créée", postService.createPost(userId, request)));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Modifier une publication")
    public ResponseEntity<ApiResponse<Post>> update(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody PostRequest request) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Publication mise à jour", postService.updatePost(id, userId, request)));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Supprimer une publication")
    public ResponseEntity<ApiResponse<Void>> delete(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        postService.deletePost(id, userId);
        return ResponseEntity.ok(ApiResponse.ok("Publication supprimée", null));
    }

    // ---- Commentaires ----
    @PostMapping("/comments")
    @Operation(summary = "Commenter une publication (ou répondre à un commentaire)")
    public ResponseEntity<ApiResponse<Comment>> comment(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody CommentRequest request) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Commentaire ajouté", postService.addComment(userId, request)));
    }

    @GetMapping("/{id}/comments")
    @Operation(summary = "Commentaires d'une publication")
    public ResponseEntity<ApiResponse<List<Comment>>> getComments(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(postService.getPostComments(id)));
    }

    @DeleteMapping("/comments/{commentId}")
    @Operation(summary = "Supprimer un commentaire")
    public ResponseEntity<ApiResponse<Void>> deleteComment(
            @PathVariable Long commentId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        postService.deleteComment(commentId, userId);
        return ResponseEntity.ok(ApiResponse.ok("Commentaire supprimé", null));
    }

    // ---- Réactions ----
    @PostMapping("/{id}/react")
    @Operation(summary = "Réagir à une publication (LIKE, LOVE, CELEBRATE, etc.)")
    public ResponseEntity<ApiResponse<Void>> react(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody Map<String, String> body) {
        Long userId = resolveUserId(userDetails);
        ReactionType type = ReactionType.valueOf(body.getOrDefault("type", "LIKE").toUpperCase());
        postService.react(userId, id, type);
        return ResponseEntity.ok(ApiResponse.ok("Réaction enregistrée", null));
    }

    @DeleteMapping("/{id}/react")
    @Operation(summary = "Retirer sa réaction")
    public ResponseEntity<ApiResponse<Void>> removeReaction(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        postService.removeReaction(userId, id);
        return ResponseEntity.ok(ApiResponse.ok("Réaction retirée", null));
    }

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
