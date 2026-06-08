package com.pfe.saas.dto.request;

import com.pfe.saas.enums.InterviewType;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InterviewRequest {

    @NotNull(message = "L'ID de la candidature est requis")
    private Long applicationId;

    @NotNull(message = "La date et heure de l'entretien est requise")
    @Future(message = "La date doit être dans le futur")
    private LocalDateTime scheduledAt;

    private Integer durationMinutes = 60;

    private InterviewType type = InterviewType.VIDEO;

    private String meetingLink;

    private String location;

    private String enterpriseNotes;
}
