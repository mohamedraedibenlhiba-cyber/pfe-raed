package com.pfe.saas.dto.response;

import com.pfe.saas.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MessageDetailDTO {
    private Long id;
    private String content;
    private User sender;
    private boolean read;
    private boolean deleted;
    private LocalDateTime sentAt;
    private LocalDateTime editedAt;
    private List<MessageAttachmentDTO> attachments;
    private List<MessageReactionDTO> reactions;
}
