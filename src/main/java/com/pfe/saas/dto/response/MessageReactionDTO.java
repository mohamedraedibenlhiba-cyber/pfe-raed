package com.pfe.saas.dto.response;

import com.pfe.saas.entity.ReactionType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MessageReactionDTO {
    private Long id;
    private ReactionType reactionType;
    private Long userId;
    private String userName;
    private String userProfilePicture;
    private LocalDateTime createdAt;
}
