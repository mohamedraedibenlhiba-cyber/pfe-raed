package com.pfe.saas.repository;

import com.pfe.saas.entity.ProjectBid;
import com.pfe.saas.enums.BidStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProjectBidRepository extends JpaRepository<ProjectBid, Long> {

    List<ProjectBid> findByProjectId(Long projectId);

    List<ProjectBid> findByFreelancerId(Long freelancerId);

    Optional<ProjectBid> findByProjectIdAndFreelancerId(Long projectId, Long freelancerId);

    boolean existsByProjectIdAndFreelancerId(Long projectId, Long freelancerId);

    long countByProjectId(Long projectId);

    long countByFreelancerIdAndStatus(Long freelancerId, BidStatus status);
}
