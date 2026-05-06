package com.pfe.saas.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "admins")
@DiscriminatorValue("ADMIN")
@PrimaryKeyJoinColumn(name = "user_id")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Admin extends User {

    @Column(name = "admin_level")
    private Integer adminLevel = 1;  // 1=support, 2=manager, 3=superadmin

    @Column(name = "department")
    private String department;
}
