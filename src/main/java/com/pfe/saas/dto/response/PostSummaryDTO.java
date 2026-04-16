package com.pfe.saas.dto.response;

import lombok.*;

/**
 * Lightweight DTO for displaying post summaries in profiles
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PostSummaryDTO {
    private Long id;
    private String contentPreview; // First 200 characters
    private String createdAt;
    private long commentCount;
    private long reactionCount;
}
