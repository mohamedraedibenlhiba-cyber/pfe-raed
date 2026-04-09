package com.pfe.saas.repository;

import com.pfe.saas.entity.ChannelMessage;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChannelMessageRepository extends JpaRepository<ChannelMessage, Long> {

    Page<ChannelMessage> findByChannelIdOrderBySentAtAsc(Long channelId, Pageable pageable);

    long countByChannelId(Long channelId);
}
