package com.pfe.saas.dto.request;

import lombok.*;

/**
 * Request DTO for sending a connection request
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ConnectionRequestSendRequest {
    private Long receiverId;        // ID of user to connect with
    private String message;         // Optional message with request
}
