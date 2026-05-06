package com.pfe.saas.dto.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ApplicationDetailResponse {

    private Long id;
    private Long applicationId;

    // Candidat complet
    private CandidateProfileDto candidate;

    // CV
    private CVDto cv;

    // Offre d'emploi
    private JobOfferSummaryDto jobOffer;

    // Détails de la candidature
    private String coverLetter;
    private String customFieldsAnswers;
    private String status;

    // Analyse IA
    private Double aiScore;
    private String aiSummary;
    private String aiFeedback;

    // Notes recruteur
    private String recruiterNotes;
    private Integer recruiterRating;

    private LocalDateTime appliedAt;
    private LocalDateTime updatedAt;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CandidateProfileDto {
        private Long id;
        private String fullName;
        private String email;
        private String phoneNumber;
        private String skills;
        private Integer yearsExperience;
        private String headline;
        private String summary;
        private String city;
        private String country;
        private String linkedinUrl;
        private String githubUrl;
        private String profilePicture;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CVDto {
        private Long id;
        private String fileName;
        private String fileUrl;
        private String fileSize;
        private String contentType;
        private Boolean isDefault;
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class JobOfferSummaryDto {
        private Long id;
        private String title;
        private String description;
        private String location;
        private Boolean remote;
        private String contractType;
        private Double salaryMin;
        private Double salaryMax;
        private String requiredSkills;
        private String experienceLevel;
        private Integer experienceRequired;
    }
}
