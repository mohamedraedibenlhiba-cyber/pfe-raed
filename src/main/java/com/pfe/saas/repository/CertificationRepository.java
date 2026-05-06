package com.pfe.saas.repository;

import com.pfe.saas.entity.Certification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificationRepository extends JpaRepository<Certification, Long> {


    List<Certification> findByCandidateIdOrderByIssueDateDesc(Long candidateId);


    List<Certification> findByCandidateId(Long candidateId);
}
