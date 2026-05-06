package com.pfe.saas.dto.request;

import com.pfe.saas.enums.BidStatus;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class ProjectBidRequest {
    @NotNull @Positive
    private Double proposedAmount;
    @NotNull @Positive
    private Integer proposedDurationDays;
    private String coverLetter;
}
