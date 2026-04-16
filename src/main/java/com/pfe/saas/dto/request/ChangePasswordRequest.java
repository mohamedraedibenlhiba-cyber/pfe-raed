package com.pfe.saas.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ChangePasswordRequest {

    @NotBlank(message = "L'ancien mot de passe est requis")
    private String oldPassword;

    @NotBlank(message = "Le nouveau mot de passe est requis")
    @Size(min = 6, max = 100, message = "Le mot de passe doit contenir entre 6 et 100 caractères")
    private String newPassword;

    @NotBlank(message = "La confirmation du mot de passe est requise")
    private String confirmPassword;
}
