package com.pfe.saas.dto.request;

import com.pfe.saas.enums.ReclamationStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ReclamationResponseRequest {

    @NotNull
    private ReclamationStatus status;

    private String adminResponse;
}
