package com.pfe.saas.dto.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ChannelRequest {
    @NotBlank
    private String name;
    private String description;
    private String pictureUrl;
    private boolean publicChannel = true;
}
