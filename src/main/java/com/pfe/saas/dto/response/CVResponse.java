package com.pfe.saas.dto.response;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CVResponse {

    private Long id;
    private String fileName;
    private String filePath;
    private Long fileSize;
    private String contentType;
    private boolean defaultCv;
    private LocalDateTime uploadedAt;
}
