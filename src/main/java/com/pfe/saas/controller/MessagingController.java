package com.pfe.saas.controller;

import com.pfe.saas.dto.request.MessageRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.*;
import com.pfe.saas.repository.UserRepository;
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

    @PostMapping
    @Operation(summary = "Envoyer un message à un utilisateur")
    public ResponseEntity<ApiResponse<Message>> sendMessage(
            @AuthenticationPrincipal UserDetails userDetails,
            @Valid @RequestBody MessageRequest request) {
        Long senderId = resolveUserId(userDetails);
        return ResponseEntity.ok(ApiResponse.ok("Message envoyé",
                messagingService.sendMessage(senderId, request)));
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

    private Long resolveUserId(UserDetails userDetails) {
        User user = userRepository.findByEmail(userDetails.getUsername())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return user.getId();
    }
}
