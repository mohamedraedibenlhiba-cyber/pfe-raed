package com.pfe.saas.dto.request;

import lombok.Data;

import java.util.List;

@Data
public class ChatbotMessageRequest {

    private String message;
    private String userRole;
    private List<ConversationEntry> history;

    @Data
    public static class ConversationEntry {
        private String role;
        private String content;
    }
}
