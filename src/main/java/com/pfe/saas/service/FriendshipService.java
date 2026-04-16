package com.pfe.saas.service;

import com.pfe.saas.dto.response.UserFriendSummaryDTO;
import com.pfe.saas.entity.Friendship;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.FriendshipStatus;
import com.pfe.saas.repository.FriendshipRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Service for managing friendships between users.
 *
 * Key principle: Store friendships as (minId, maxId) to avoid duplicate bidirectional entries.
 * This ensures that a single database row represents a friendship between two users.
 *
 * All operations are idempotent and safely handle edge cases (already friends, etc.)
 */
@Service
@RequiredArgsConstructor
public class FriendshipService {

    private static final Logger logger = LoggerFactory.getLogger(FriendshipService.class);

    private final FriendshipRepository friendshipRepository;
    private final UserRepository userRepository;

    /**
     * Add a friendship between two users.
     * If both users exist and not already friends, creates a bidirectional friendship.
     *
     * @param userId1 First user ID
     * @param userId2 Second user ID
     * @throws IllegalArgumentException if users don't exist or are the same
     * @throws IllegalStateException if already friends
     */
    @Transactional
    public void addFriend(Long userId1, Long userId2) {
        logger.debug("Adding friendship between user {} and {}", userId1, userId2);

        // Validate users are different
        if (userId1.equals(userId2)) {
            logger.warn("Attempted to create self-friendship for user {}", userId1);
            throw new IllegalArgumentException("Un utilisateur ne peut pas être ami avec lui-même");
        }

        // Validate users exist
        User user1 = userRepository.findById(userId1)
                .orElseThrow(() -> {
                    logger.warn("User {} not found when adding friendship", userId1);
                    return new IllegalArgumentException("Utilisateur 1 non trouvé");
                });

        User user2 = userRepository.findById(userId2)
                .orElseThrow(() -> {
                    logger.warn("User {} not found when adding friendship", userId2);
                    return new IllegalArgumentException("Utilisateur 2 non trouvé");
                });

        // Check if already friends
        if (friendshipRepository.existsFriendship(userId1, userId2)) {
            logger.warn("Attempted to create duplicate friendship between user {} and {}", userId1, userId2);
            throw new IllegalStateException("Ces utilisateurs sont déjà amis");
        }

        // Normalize: always store (minId, maxId)
        Long minId = Math.min(userId1, userId2);
        Long maxId = Math.max(userId1, userId2);

        // Create friendship
        Friendship friendship = new Friendship();
        friendship.setUser1(minId.equals(userId1) ? user1 : user2);
        friendship.setUser2(maxId.equals(userId2) ? user2 : user1);
        friendship.setStatus(FriendshipStatus.ACCEPTED);

        friendshipRepository.save(friendship);
        logger.info("Friendship created successfully between user {} and {}", userId1, userId2);
    }

    /**
     * Remove a friendship between two users.
     *
     * @param userId1 First user ID
     * @param userId2 Second user ID
     * @throws IllegalStateException if not friends
     */
    @Transactional
    public void removeFriend(Long userId1, Long userId2) {
        logger.debug("Removing friendship between user {} and {}", userId1, userId2);

        if (!isFriend(userId1, userId2)) {
            logger.warn("Attempted to remove friendship between non-friend users {} and {}", userId1, userId2);
            throw new IllegalStateException("Ces utilisateurs ne sont pas amis");
        }

        friendshipRepository.deleteFriendship(userId1, userId2);
        logger.info("Friendship removed between user {} and {}", userId1, userId2);
    }

    /**
     * Check if two users are friends.
     *
     * @param userId1 First user ID
     * @param userId2 Second user ID
     * @return true if they are friends, false otherwise
     */
    @Transactional(readOnly = true)
    public boolean isFriend(Long userId1, Long userId2) {
        if (userId1.equals(userId2)) {
            return false;  // User can't be friend with themselves
        }
        boolean isFriend = friendshipRepository.existsFriendship(userId1, userId2);
        logger.debug("Friendship check between user {} and {}: {}", userId1, userId2, isFriend);
        return isFriend;
    }

    /**
     * Get all friends of a user (paginated).
     *
     * @param userId User ID
     * @param pageable Pagination info
     * @return Page of friend user summaries
     */
    @Transactional(readOnly = true)
    public Page<UserFriendSummaryDTO> getFriendsForUser(Long userId, Pageable pageable) {
        logger.debug("Fetching friends for user {} (page: {}, size: {})",
            userId, pageable.getPageNumber(), pageable.getPageSize());

        // Verify user exists
        if (!userRepository.existsById(userId)) {
            logger.warn("User {} not found when fetching friends", userId);
            throw new IllegalArgumentException("Utilisateur non trouvé");
        }

        Page<Friendship> friendships = friendshipRepository.findFriendshipsByUserId(userId, pageable);

        return friendships.map(friendship -> {
            // Determine which user is the "friend" and which is the current user
            User friend = friendship.getUser1().getId().equals(userId) ?
                    friendship.getUser2() : friendship.getUser1();

            return UserFriendSummaryDTO.builder()
                    .id(friend.getId())
                    .fullName(friend.getFullName())
                    .email(friend.getEmail())
                    .role(friend.getRole())
                    .profilePicture(friend.getProfilePicture())
                    .city(friend.getCity())
                    .build();
        });
    }

    /**
     * Get count of friends for a user.
     *
     * @param userId User ID
     * @return Number of friends
     */
    @Transactional(readOnly = true)
    public long getFriendsCount(Long userId) {
        logger.debug("Fetching friend count for user {}", userId);
        long count = friendshipRepository.countFriendsByUserId(userId);
        logger.debug("Friend count for user {}: {}", userId, count);
        return count;
    }

    /**
     * Get all friends of a user as a list of User objects.
     * Useful for internal service operations.
     *
     * @param userId User ID
     * @return List of friend users
     */
    @Transactional(readOnly = true)
    public List<User> getFriendsList(Long userId) {
        logger.debug("Fetching friends list for user {}", userId);
        Page<Friendship> friendships = friendshipRepository.findFriendshipsByUserId(userId, Pageable.unpaged());
        List<User> friends = new ArrayList<>();

        for (Friendship friendship : friendships) {
            User friend = friendship.getUser1().getId().equals(userId) ?
                    friendship.getUser2() : friendship.getUser1();
            friends.add(friend);
        }

        logger.debug("Retrieved {} friends for user {}", friends.size(), userId);
        return friends;
    }

    /**
     * Block a user (for future implementation).
     *
     * @param userId1 User blocking
     * @param userId2 User being blocked
     */
    @Transactional
    public void blockUser(Long userId1, Long userId2) {
        logger.warn("blockUser() called but not yet implemented. User {} attempted to block {}",
            userId1, userId2);
        throw new UnsupportedOperationException("Le blocage n'est pas encore implémenté");
    }
}
