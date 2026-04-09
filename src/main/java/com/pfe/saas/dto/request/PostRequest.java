package com.pfe.saas.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class PostRequest {
    @NotBlank
    private String content;
    private String mediaUrl;
    private String mediaType;
}
