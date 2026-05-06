package com.pfe.saas.service;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AttachmentData {
    private String fileName;
    private String fileUrl;
    private String fileType;
    private Long fileSize;
}
