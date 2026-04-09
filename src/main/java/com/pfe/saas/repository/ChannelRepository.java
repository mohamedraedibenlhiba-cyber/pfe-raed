package com.pfe.saas.repository;

import com.pfe.saas.entity.Channel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ChannelRepository extends JpaRepository<Channel, Long> {

    Page<Channel> findByPublicChannelTrue(Pageable pageable);

    @Query("SELECT c FROM Channel c WHERE c.publicChannel = true AND LOWER(c.name) LIKE LOWER(CONCAT('%',:q,'%'))")
    Page<Channel> searchPublic(@Param("q") String query, Pageable pageable);

    Page<Channel> findByOwnerId(Long ownerId, Pageable pageable);

    @Query("SELECT c FROM Channel c JOIN c.members m WHERE m.user.id = :userId")
    Page<Channel> findJoinedByUserId(@Param("userId") Long userId, Pageable pageable);
}
