package com.pfe.saas.dto.response;

import com.pfe.saas.enums.ConnectionRequestStatus;
import lombok.*;

/**
 * Response DTO for a connection request
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConnectionRequestDTO {
    private Long id;
    private Long senderId;
    private String senderName;
    private String senderProfilePicture;
    private Long receiverId;
    private String receiverName;
    private ConnectionRequestStatus status;
    private String message;
    private String createdAt;
    private String respondedAt;
}
