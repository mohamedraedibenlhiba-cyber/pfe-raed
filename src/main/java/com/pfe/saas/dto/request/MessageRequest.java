package com.pfe.saas.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class MessageRequest {
    @NotNull
    private Long recipientId;
    @NotBlank
    private String content;
    private String attachmentUrl;
}
