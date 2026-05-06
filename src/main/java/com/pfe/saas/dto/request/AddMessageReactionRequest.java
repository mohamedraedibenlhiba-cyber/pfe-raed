package com.pfe.saas.dto.request;

import com.pfe.saas.entity.ReactionType;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddMessageReactionRequest {
    @NotNull(message = "Reaction type est requis")
    private ReactionType reactionType;
}
