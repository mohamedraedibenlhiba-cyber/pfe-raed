package com.pfe.saas.mapper;

import com.pfe.saas.dto.response.CVResponse;
import com.pfe.saas.entity.CV;

public class CVMapper {

    private CVMapper() {}

    public static CVResponse toResponse(CV cv) {
        return CVResponse.builder()
                .id(cv.getId())
                .fileName(cv.getFileName())
                .viewUrl("/api/cvs/" + cv.getId() + "/view")
                .fileSize(cv.getFileSize())
                .contentType(cv.getContentType())
                .defaultCv(cv.isDefaultCv())
                .uploadedAt(cv.getUploadedAt())
                .build();
    }
}
