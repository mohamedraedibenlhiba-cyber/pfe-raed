package com.pfe.saas.repository;

import com.pfe.saas.entity.Certification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificationRepository extends JpaRepository<Certification, Long> {

    /**
     * Get all certifications for a candidate, sorted by issue date (newest first)
     */
    List<Certification> findByCandidateIdOrderByIssueDateDesc(Long candidateId);

    /**
     * Get all certifications for a candidate
     */
    List<Certification> findByCandidateId(Long candidateId);
}
