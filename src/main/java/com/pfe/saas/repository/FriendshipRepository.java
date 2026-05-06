package com.pfe.saas.repository;

import com.pfe.saas.entity.Friendship;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FriendshipRepository extends JpaRepository<Friendship, Long> {

    /**
     * Find friendship between two users (normalized order: min < max)
     */
    Optional<Friendship> findByUser1IdAndUser2Id(Long user1Id, Long user2Id);

    /**
     * Check if friendship exists between two users (bidirectional)
     */
    @Query("SELECT CASE WHEN COUNT(f) > 0 THEN true ELSE false END FROM Friendship f " +
           "WHERE ((f.user1.id = :userId1 AND f.user2.id = :userId2) OR " +
           "(f.user1.id = :userId2 AND f.user2.id = :userId1))")
    boolean existsFriendship(@Param("userId1") Long userId1, @Param("userId2") Long userId2);

    /**
     * Get all friends of a user (paginated)
     * Returns all users that are connected to the given user
     */
    @Query("SELECT f FROM Friendship f " +
           "WHERE (f.user1.id = :userId OR f.user2.id = :userId)")
    Page<Friendship> findFriendshipsByUserId(@Param("userId") Long userId, Pageable pageable);

    /**
     * Get count of friends for a user
     */
    @Query("SELECT COUNT(f) FROM Friendship f " +
           "WHERE f.user1.id = :userId OR f.user2.id = :userId")
    long countFriendsByUserId(@Param("userId") Long userId);

    /**
     * Delete friendship between two users (bidirectional)
     * Must handle (min, max) ordering
     */
    @Query("DELETE FROM Friendship f WHERE " +
           "((f.user1.id = :userId1 AND f.user2.id = :userId2) OR " +
           "(f.user1.id = :userId2 AND f.user2.id = :userId1))")
    void deleteFriendship(@Param("userId1") Long userId1, @Param("userId2") Long userId2);

    /**
     * Find friendship by two users regardless of order
     */
    @Query("SELECT f FROM Friendship f WHERE " +
           "((f.user1.id = :userId1 AND f.user2.id = :userId2) OR " +
           "(f.user1.id = :userId2 AND f.user2.id = :userId1))")
    Optional<Friendship> findBetweenUsers(@Param("userId1") Long userId1, @Param("userId2") Long userId2);
}
