package com.pfe.saas.repository;

import com.pfe.saas.entity.MessageReaction;
import com.pfe.saas.entity.ReactionType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MessageReactionRepository extends JpaRepository<MessageReaction, Long> {

    @Query("SELECT mr FROM MessageReaction mr WHERE mr.message.id = :messageId")
    List<MessageReaction> findByMessageId(Long messageId);

    @Query("SELECT mr FROM MessageReaction mr WHERE mr.message.id = :messageId AND mr.user.id = :userId")
    List<MessageReaction> findByMessageIdAndUserId(Long messageId, Long userId);

    @Query("SELECT mr FROM MessageReaction mr WHERE mr.message.id = :messageId AND mr.user.id = :userId AND mr.reactionType = :reactionType")
    Optional<MessageReaction> findByMessageIdAndUserIdAndReactionType(Long messageId, Long userId, ReactionType reactionType);

    @Query("DELETE FROM MessageReaction mr WHERE mr.message.id = :messageId")
    void deleteByMessageId(Long messageId);

    @Query("DELETE FROM MessageReaction mr WHERE mr.message.id = :messageId AND mr.user.id = :userId AND mr.reactionType = :reactionType")
    void deleteByMessageIdAndUserIdAndReactionType(Long messageId, Long userId, ReactionType reactionType);

    @Query("SELECT COUNT(mr) FROM MessageReaction mr WHERE mr.message.id = :messageId AND mr.reactionType = :reactionType")
    long countByMessageIdAndReactionType(Long messageId, ReactionType reactionType);
}
