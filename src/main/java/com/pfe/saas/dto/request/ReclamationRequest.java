package com.pfe.saas.dto.request;

import com.pfe.saas.enums.ReclamationType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReclamationRequest {

    @NotNull(message = "Le type est obligatoire")
    private ReclamationType type;

    @NotBlank(message = "Le sujet est obligatoire")
    private String subject;

    @NotBlank(message = "La description est obligatoire")
    private String description;

    private Long referenceId;
    private String referenceType;
}
