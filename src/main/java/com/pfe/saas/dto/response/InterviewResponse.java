package com.pfe.saas.dto.response;

import com.pfe.saas.enums.InterviewStatus;
import com.pfe.saas.enums.InterviewType;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class InterviewResponse {

    private Long id;
    private Long applicationId;

    private CandidateInfo candidate;
    private EnterpriseInfo enterprise;
    private JobOfferInfo jobOffer;

    private LocalDateTime scheduledAt;
    private Integer durationMinutes;
    private InterviewType type;
    private InterviewStatus status;

    private String meetingLink;
    private String location;
    private String enterpriseNotes;
    private String candidateNote;
    private String cancellationReason;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @Data @Builder
    public static class CandidateInfo {
        private Long id;
        private String fullName;
        private String email;
        private String profilePicture;
    }

    @Data @Builder
    public static class EnterpriseInfo {
        private Long id;
        private String companyName;
        private String companyLogo;
    }

    @Data @Builder
    public static class JobOfferInfo {
        private Long id;
        private String title;
        private String location;
    }
}
