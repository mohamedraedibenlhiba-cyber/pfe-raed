package com.pfe.saas.dto.request;

import com.pfe.saas.enums.BidStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class BidNegotiationRequest {
    @NotNull
    private BidStatus status;
    private Double counterAmount;
    private Integer counterDurationDays;
    private String negotiationNote;
}
