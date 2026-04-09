package com.pfe.saas.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ChannelMessageRequest {
    @NotBlank
    private String content;
    private String attachmentUrl;
    private Long replyToId;
}
