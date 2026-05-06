package com.pfe.saas.repository;

import com.pfe.saas.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {

    Page<Message> findByConversationIdOrderBySentAtAsc(Long conversationId, Pageable pageable);

    @Query("SELECT COUNT(m) FROM Message m WHERE m.conversation.id = :convId " +
           "AND m.sender.id != :userId AND m.read = false")
    long countUnreadInConversation(@Param("convId") Long convId, @Param("userId") Long userId);

    @Modifying
    @Query("UPDATE Message m SET m.read = true WHERE m.conversation.id = :convId " +
           "AND m.sender.id != :userId")
    void markAllAsReadInConversation(@Param("convId") Long convId, @Param("userId") Long userId);

    @Query("SELECT COUNT(m) FROM Message m WHERE " +
           "(m.conversation.participant1.id = :userId OR m.conversation.participant2.id = :userId) " +
           "AND m.sender.id != :userId AND m.read = false")
    long countTotalUnread(@Param("userId") Long userId);
}
