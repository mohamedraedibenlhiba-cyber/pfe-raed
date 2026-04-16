package com.pfe.saas.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * DTO enrichi pour afficher un message avec les infos des participants.
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MessageDetailResponse {

    private Long id;
    private String content;
    private String attachmentUrl;
    private boolean read;

    // Expéditeur
    private UserSummaryDto sender;

    // Conversation
    private Long conversationId;
    private UserSummaryDto otherParticipant;  // L'autre participant de la conversation

    private LocalDateTime sentAt;

    /**
     * Résumé d'un utilisateur pour afficher dans les messages.
     */
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class UserSummaryDto {
        private Long id;
        private String fullName;
        private String email;
        private String profilePicture;
        private String role;  // CANDIDATE, ENTERPRISE, ADMIN
    }
}
