package com.pfe.saas.dto.request;

import com.pfe.saas.enums.ContractType;
import com.pfe.saas.enums.ExperienceLevel;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
public class JobOfferRequest {
    @NotBlank
    private String title;
    @NotBlank
    private String description;
    private String requirements;
    private String requiredSkills;
    private String techStack;
    private String location;
    private boolean remote;
    private ContractType contractType;
    private Double salaryMin;
    private Double salaryMax;
    private Integer experienceRequired;
    private ExperienceLevel experienceLevel;
    private Integer numberOfPositions;
    private String benefits;
    private String interviewProcess;
    private LocalDate startDate;
    private LocalDate deadlineDate;
    private String customFormFields;
    private String brandColor;
    private String bannerImage;
}
