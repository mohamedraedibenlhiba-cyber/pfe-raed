package com.pfe.saas.repository;

import com.pfe.saas.entity.Reaction;
import com.pfe.saas.enums.ReactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReactionRepository extends JpaRepository<Reaction, Long> {
    Optional<Reaction> findByUserIdAndPostId(Long userId, Long postId);
    long countByPostId(Long postId);
    long countByPostIdAndType(Long postId, ReactionType type);
    void deleteByUserIdAndPostId(Long userId, Long postId);

    @Query("SELECT r.type, COUNT(r) FROM Reaction r WHERE r.post.id = :postId GROUP BY r.type")
    List<Object[]> countByTypeForPost(@Param("postId") Long postId);
}
