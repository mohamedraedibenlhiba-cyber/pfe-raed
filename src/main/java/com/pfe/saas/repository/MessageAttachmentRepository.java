package com.pfe.saas.repository;

import com.pfe.saas.entity.MessageAttachment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MessageAttachmentRepository extends JpaRepository<MessageAttachment, Long> {

    @Query("SELECT ma FROM MessageAttachment ma WHERE ma.message.id = :messageId")
    List<MessageAttachment> findByMessageId(Long messageId);

    @Query("DELETE FROM MessageAttachment ma WHERE ma.message.id = :messageId")
    void deleteByMessageId(Long messageId);
}
