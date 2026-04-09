package com.pfe.saas.repository;

import com.pfe.saas.entity.CV;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CVRepository extends JpaRepository<CV, Long> {
    List<CV> findByCandidateId(Long candidateId);
    Optional<CV> findByCandidateIdAndDefaultCvTrue(Long candidateId);
    List<CV> findByCandidateIdAndAnalyzedFalse(Long candidateId);
}
