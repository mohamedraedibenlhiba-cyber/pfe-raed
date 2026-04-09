package com.pfe.saas.dto.request;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ApplicationRequest {
    @NotNull
    private Long jobOfferId;
    private Long cvId;
    private String coverLetter;
    private String customFieldsAnswers;   // JSON
}
