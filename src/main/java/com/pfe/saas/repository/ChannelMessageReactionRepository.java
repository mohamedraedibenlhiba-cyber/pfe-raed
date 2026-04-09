package com.pfe.saas.repository;

import com.pfe.saas.entity.ChannelMessageReaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ChannelMessageReactionRepository extends JpaRepository<ChannelMessageReaction, Long> {

    Optional<ChannelMessageReaction> findByChannelMessageIdAndUserId(Long messageId, Long userId);

    void deleteByChannelMessageIdAndUserId(Long messageId, Long userId);

    long countByChannelMessageId(Long messageId);
}
