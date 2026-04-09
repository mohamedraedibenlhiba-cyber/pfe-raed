package com.pfe.saas.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.time.LocalDate;

@Data
public class FreelanceProjectRequest {
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    private String requiredSkills;
    private Double budgetMin;
    private Double budgetMax;
    private Integer durationDays;
    private LocalDate deadlineDate;
}
