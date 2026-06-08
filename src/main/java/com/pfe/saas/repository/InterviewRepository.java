package com.pfe.saas.repository;

import com.pfe.saas.entity.Interview;
import com.pfe.saas.enums.InterviewStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface InterviewRepository extends JpaRepository<Interview, Long> {

    List<Interview> findByCandidateIdOrderByScheduledAtDesc(Long candidateId);

    List<Interview> findByEnterpriseIdOrderByScheduledAtDesc(Long enterpriseId);

    Optional<Interview> findByApplicationId(Long applicationId);

    @Query("SELECT i FROM Interview i WHERE i.status = :status AND i.scheduledAt BETWEEN :from AND :to")
    List<Interview> findUpcoming(
        @Param("status") InterviewStatus status,
        @Param("from") LocalDateTime from,
        @Param("to") LocalDateTime to
    );

    boolean existsByApplicationId(Long applicationId);
}
