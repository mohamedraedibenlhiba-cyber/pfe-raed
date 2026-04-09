package com.pfe.saas.controller;

import com.pfe.saas.dto.request.ChannelMessageRequest;
import com.pfe.saas.dto.request.ChannelRequest;
import com.pfe.saas.dto.response.ApiResponse;
import com.pfe.saas.entity.Channel;
import com.pfe.saas.entity.ChannelMember;
import com.pfe.saas.entity.ChannelMessage;
import com.pfe.saas.enums.ReactionType;
import com.pfe.saas.service.ChannelService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/channels")
@RequiredArgsConstructor
@Tag(name = "Canaux", description = "Messagerie type Telegram — créer et rejoindre des canaux")
@SecurityRequirement(name = "bearerAuth")
public class ChannelController {

    private final ChannelService channelService;

    // ── Canal CRUD ────────────────────────────────────────────────────────────

    @PostMapping
    @Operation(summary = "Créer un canal")
    public ResponseEntity<ApiResponse<Channel>> create(@Valid @RequestBody ChannelRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Canal créé", channelService.createChannel(req)));
    }

    @PutMapping("/{id}")
    @Operation(summary = "Modifier un canal")
    public ResponseEntity<ApiResponse<Channel>> update(@PathVariable Long id,
                                                        @Valid @RequestBody ChannelRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Canal mis à jour", channelService.updateChannel(id, req)));
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Supprimer un canal")
    public ResponseEntity<ApiResponse<Void>> delete(@PathVariable Long id) {
        channelService.deleteChannel(id);
        return ResponseEntity.ok(ApiResponse.ok("Canal supprimé", null));
    }

    @GetMapping
    @Operation(summary = "Rechercher des canaux publics")
    public ResponseEntity<ApiResponse<Page<Channel>>> search(
            @RequestParam(required = false) String q,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(ApiResponse.ok(channelService.searchPublicChannels(q, page, size)));
    }

    @GetMapping("/mine")
    @Operation(summary = "Mes canaux (rejoints)")
    public ResponseEntity<ApiResponse<Page<Channel>>> mine(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size) {
        return ResponseEntity.ok(ApiResponse.ok(channelService.getMyChannels(page, size)));
    }

    @GetMapping("/{id}")
    @Operation(summary = "Détail d'un canal")
    public ResponseEntity<ApiResponse<Channel>> getOne(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(channelService.getChannelById(id)));
    }

    // ── Adhésion ──────────────────────────────────────────────────────────────

    @PostMapping("/{id}/join")
    @Operation(summary = "Rejoindre un canal")
    public ResponseEntity<ApiResponse<Void>> join(@PathVariable Long id) {
        channelService.join(id);
        return ResponseEntity.ok(ApiResponse.ok("Vous avez rejoint le canal", null));
    }

    @PostMapping("/{id}/leave")
    @Operation(summary = "Quitter un canal")
    public ResponseEntity<ApiResponse<Void>> leave(@PathVariable Long id) {
        channelService.leave(id);
        return ResponseEntity.ok(ApiResponse.ok("Vous avez quitté le canal", null));
    }

    @GetMapping("/{id}/members")
    @Operation(summary = "Membres d'un canal")
    public ResponseEntity<ApiResponse<List<ChannelMember>>> members(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.ok(channelService.getMembers(id)));
    }

    // ── Messages ──────────────────────────────────────────────────────────────

    @PostMapping("/{id}/messages")
    @Operation(summary = "Envoyer un message dans un canal")
    public ResponseEntity<ApiResponse<ChannelMessage>> send(@PathVariable Long id,
                                                             @Valid @RequestBody ChannelMessageRequest req) {
        return ResponseEntity.ok(ApiResponse.ok("Message envoyé", channelService.sendMessage(id, req)));
    }

    @GetMapping("/{id}/messages")
    @Operation(summary = "Messages d'un canal (paginés)")
    public ResponseEntity<ApiResponse<Page<ChannelMessage>>> messages(
            @PathVariable Long id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "50") int size) {
        return ResponseEntity.ok(ApiResponse.ok(channelService.getMessages(id, page, size)));
    }

    @DeleteMapping("/messages/{messageId}")
    @Operation(summary = "Supprimer un message")
    public ResponseEntity<ApiResponse<Void>> deleteMessage(@PathVariable Long messageId) {
        channelService.deleteMessage(messageId);
        return ResponseEntity.ok(ApiResponse.ok("Message supprimé", null));
    }

    // ── Réactions ─────────────────────────────────────────────────────────────

    @PostMapping("/messages/{messageId}/react")
    @Operation(summary = "Réagir à un message")
    public ResponseEntity<ApiResponse<Void>> react(@PathVariable Long messageId,
                                                    @RequestBody Map<String, String> body) {
        ReactionType type = ReactionType.valueOf(body.getOrDefault("type", "LIKE").toUpperCase());
        channelService.reactToMessage(messageId, type);
        return ResponseEntity.ok(ApiResponse.ok("Réaction enregistrée", null));
    }

    @DeleteMapping("/messages/{messageId}/react")
    @Operation(summary = "Retirer sa réaction")
    public ResponseEntity<ApiResponse<Void>> removeReaction(@PathVariable Long messageId) {
        channelService.removeReaction(messageId);
        return ResponseEntity.ok(ApiResponse.ok("Réaction retirée", null));
    }
}
