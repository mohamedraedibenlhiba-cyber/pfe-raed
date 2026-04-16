package com.pfe.saas.dto.response;

import com.pfe.saas.enums.Role;
import lombok.*;

/**
 * Lightweight user summary for friends lists.
 * Used in GET /api/friends endpoints to return friend information.
 */
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class UserFriendSummaryDTO {
    private Long id;
    private String fullName;
    private String email;
    private Role role;
    private String profilePicture;
    private String city;
}
