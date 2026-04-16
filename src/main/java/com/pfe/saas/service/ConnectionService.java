package com.pfe.saas.service;

import com.pfe.saas.entity.Candidate;
import com.pfe.saas.entity.Enterprise;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.FollowRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service pour vérifier les connexions/suivis entre utilisateurs.
 * Précondition nécessaire pour envoyer des messages.
 */
@Service
@RequiredArgsConstructor
public class ConnectionService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;

    /**
     * Vérifie si deux utilisateurs sont connectés (follow mutuel).
     *
     * Conditions:
     * - Candidat → Candidat: aucune connexion requise (peuvent se message)
     * - Entreprise → Entreprise: aucune connexion requise (peuvent se message)
     * - Candidat ↔ Entreprise: doivent se follow mutuellement
     */
    @Transactional(readOnly = true)
    public boolean areConnected(Long userId1, Long userId2) {
        if (userId1.equals(userId2)) {
            return false;  // Pas de self-messaging
        }

        User user1 = userRepository.findById(userId1)
                .orElseThrow(() -> new RuntimeException("Utilisateur 1 non trouvé"));
        User user2 = userRepository.findById(userId2)
                .orElseThrow(() -> new RuntimeException("Utilisateur 2 non trouvé"));

        // Candidat ↔ Candidat = toujours connecté
        if (user1 instanceof Candidate && user2 instanceof Candidate) {
            return true;
        }

        // Entreprise ↔ Entreprise = toujours connecté
        if (user1 instanceof Enterprise && user2 instanceof Enterprise) {
            return true;
        }

        // Candidat ↔ Entreprise = doivent se follow mutuellement
        if ((user1 instanceof Candidate && user2 instanceof Enterprise) ||
            (user1 instanceof Enterprise && user2 instanceof Candidate)) {

            boolean user1FollowsUser2 = followRepository.existsByFollowerIdAndFollowingId(userId1, userId2);
            boolean user2FollowsUser1 = followRepository.existsByFollowerIdAndFollowingId(userId2, userId1);

            return user1FollowsUser2 && user2FollowsUser1;
        }

        return false;
    }

    /**
     * Vérifie si deux utilisateurs sont connectés (version allégée pour vérification rapide).
     */
    @Transactional(readOnly = true)
    public void validateConnection(Long userId1, Long userId2, String action) {
        if (!areConnected(userId1, userId2)) {
            throw new RuntimeException(
                "Vous ne pouvez pas " + action + " : pas de connexion établie entre vous"
            );
        }
    }

    /**
     * Description textuelle de la règle de connexion.
     */
    public String getConnectionRuleDescription() {
        return "Règles de messagerie:\n" +
               "• Candidat → Candidat: Toujours possible\n" +
               "• Entreprise → Entreprise: Toujours possible\n" +
               "• Candidat ↔ Entreprise: Mutual follow requis";
    }
}
