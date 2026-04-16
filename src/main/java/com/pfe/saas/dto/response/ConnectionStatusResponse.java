package com.pfe.saas.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * DTO pour afficher le statut de connexion entre deux utilisateurs
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConnectionStatusResponse {

    /**
     * Est-ce que JE suis cet utilisateur?
     * (Je le/la suis)
     */
    private boolean isFollowedByMe;

    /**
     * Est-ce que IL/ELLE me suit?
     * (Il/elle me suit)
     */
    private boolean isFollowingMe;

    /**
     * Peut-on se envoyer des messages?
     * (Basé sur les règles de messagerie sécurisée)
     */
    private boolean canMessage;

    /**
     * Nombre d'abonnés de cet utilisateur
     */
    private long followersCount;

    /**
     * Nombre d'abonnements de cet utilisateur
     */
    private long followingCount;
}
