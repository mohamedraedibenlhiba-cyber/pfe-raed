package com.pfe.saas.repository;

import com.pfe.saas.entity.ChannelMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ChannelMemberRepository extends JpaRepository<ChannelMember, Long> {

    boolean existsByChannelIdAndUserId(Long channelId, Long userId);

    Optional<ChannelMember> findByChannelIdAndUserId(Long channelId, Long userId);

    void deleteByChannelIdAndUserId(Long channelId, Long userId);

    List<ChannelMember> findByChannelId(Long channelId);

    long countByChannelId(Long channelId);
}
