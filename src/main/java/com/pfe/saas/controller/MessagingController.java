package com.pfe.saas.controller;

import com.pfe.saas.dto.request.AddMessageReactionRequest;
import com.pfe.saas.dto.request.MessageRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.dto.response.MessageDetailDTO;
import com.pfe.saas.entity.*;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.service.ConnectionRequestService;
import com.pfe.saas.service.MessagingService;
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
@RequestMapping("/api/messages")
@RequiredArgsConstructor
@Tag(name = "Messagerie", description = "Conversations et échanges de messages entre utilisateurs")
@SecurityRequirement(name = "bearerAuth")
public class MessagingController {

    private final MessagingService messagingService;
    private final UserRepository userRepository;
    private final ConnectionRequestService connectionRequestService;

    @PostMapping
    @Operation(summary = "Envoyer un message à un utilisateur")
    public ResponseEntity<ApiResponse<Message>> sendMessage(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody MessageRequest request) {
        Long senderId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Message envoyé",
                messagingService.sendMessage(senderId, request)));
    }

    @GetMapping("/connection-rules")
    @Operation(summary = "Afficher les règles de connexion pour la messagerie")
    public ResponseEntity<ApiResponse<Map<String, String>>> getConnectionRules() {
        return ResponseEntity.ok(ApiResponse.ok(
            Map.of("rules",
                "Candidate ↔ Candidate: Toujours autorisé. " +
                "Enterprise ↔ Enterprise: Toujours autorisé. " +
                "Candidate ↔ Enterprise: Connexion acceptée requise.")
        ));
    }

    @GetMapping("/can-message/{recipientId}")
    @Operation(summary = "Vérifier si je peux envoyer un message à cet utilisateur")
    public ResponseEntity<ApiResponse<Map<String, Object>>> canMessage(
            @AuthenticationPrincipal UserDetails userDetails,
            @PathVariable Long recipientId) {
        Long senderId = resolveUserId(userDetails);
        boolean canMessage = connectionRequestService.canMessage(senderId, recipientId);

        return ResponseEntity.ok(ApiResponse.ok(
            Map.of(
                "canMessage", canMessage,
                "reason", canMessage ? "Vous pouvez envoyer un message"
                                     : "Connexion requise (vérifiez les règles)"
            )
        ));
    }

    @GetMapping("/conversations")
    @Operation(summary = "Lister mes conversations")
    public ResponseEntity<ApiResponse<List<Conversation>>> myConversations(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(messagingService.getUserConversations(userId)));
    }

    @GetMapping("/conversations/{convId}/messages")
    @Operation(summary = "Messages d'une conversation (paginés)")
    public ResponseEntity<ApiResponse<Page<Message>>> conversationMessages(
            @PathVariable Long convId,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "30") int size) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
                messagingService.getConversationMessages(convId, userId, page, size)));
    }

    @PostMapping("/conversations/{convId}/read")
    @Operation(summary = "Marquer tous les messages d'une conversation comme lus")
    public ResponseEntity<ApiResponse<Void>> markAsRead(
            @PathVariable Long convId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        messagingService.markConversationAsRead(convId, userId);
        return ResponseEntity.ok(ApiResponse.ok("Messages marqués comme lus", null));
    }

    @GetMapping("/unread/count")
    @Operation(summary = "Nombre total de messages non lus")
    public ResponseEntity<ApiResponse<Map<String, Long>>> unreadCount(
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(Map.of("unread", messagingService.getTotalUnread(userId))));
    }

    @GetMapping("/conversation/{recipientId}")
    @Operation(summary = "Obtenir ou créer une conversation avec un utilisateur")
    public ResponseEntity<ApiResponse<Conversation>> getOrCreateConversation(
            @PathVariable Long recipientId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long senderId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok(
            messagingService.getOrCreateConversation(senderId, recipientId)
        ));
    }

    // ✨ NOUVEAUX ENDPOINTS POUR LES RÉACTIONS ET ÉDITIONS

    @PostMapping("/{messageId}/reactions")
    @Operation(summary = "Ajouter une réaction à un message")
    public ResponseEntity<ApiResponse<Map<String, Object>>> addReaction(
            @PathVariable Long messageId,
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody AddMessageReactionRequest request) {
        Long userId = resolveUserId(userDetails);
        messagingService.addReactionToMessage(messageId, userId, request.getReactionType());
        return ResponseEntity.ok(ApiResponse.ok("Réaction ajoutée", Map.of("reactionType", request.getReactionType())));
    }

    @DeleteMapping("/{messageId}/reactions/{reactionType}")
    @Operation(summary = "Retirer une réaction d'un message")
    public ResponseEntity<ApiResponse<Void>> removeReaction(
            @PathVariable Long messageId,
            @PathVariable String reactionType,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        ReactionType type = ReactionType.valueOf(reactionType.toUpperCase());
        messagingService.removeReactionFromMessage(messageId, userId, type);
        return ResponseEntity.ok(ApiResponse.ok("Réaction retirée", null));
    }

    @GetMapping("/{messageId}/detail")
    @Operation(summary = "Obtenir les détails complets d'un message (avec réactions et attachments)")
    public ResponseEntity<ApiResponse<MessageDetailDTO>> getMessageDetail(
            @PathVariable Long messageId) {
        return ResponseEntity.ok(ApiResponse.ok(messagingService.getMessageWithDetails(messageId)));
    }

    @DeleteMapping("/{messageId}")
    @Operation(summary = "Supprimer son propre message (soft delete)")
    public ResponseEntity<ApiResponse<Void>> deleteMessage(
            @PathVariable Long messageId,
            @AuthenticationPrincipal UserDetails userDetails) {
        Long userId = resolveUserId(userDetails);
        messagingService.deleteMessage(messageId, userId);
        return ResponseEntity.ok(ApiResponse.ok("Message supprimé", null));
    }

    @PutMapping("/{messageId}")
    @Operation(summary = "Éditer son propre message")
    public ResponseEntity<ApiResponse<Message>> updateMessage(
            @PathVariable Long messageId,
            @AuthenticationPrincipal UserDetails userDetails,
            @RequestBody Map<String, String> request) {
        Long userId = resolveUserId(userDetails);
        String newContent = request.get("content");
        if (newContent == null || newContent.isBlank()) {
            throw new IllegalArgumentException("Le contenu du message ne peut pas être vide");
        }
        Message updated = messagingService.updateMessage(messageId, newContent, userId);
        return ResponseEntity.ok(ApiResponse.ok("Message édité", updated));
    }

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}

