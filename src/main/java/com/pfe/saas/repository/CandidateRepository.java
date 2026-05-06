package com.pfe.saas.repository;

import com.pfe.saas.entity.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Long> {
    Optional<Candidate> findByEmail(String email);
    boolean existsByEmail(String email);
    List<Candidate> findByOpenToWorkTrue();

    @Query("SELECT c FROM Candidate c WHERE c.skills LIKE %:skill%")
    List<Candidate> findBySkill(String skill);

    @Query("SELECT c FROM Candidate c WHERE c.yearsExperience >= :minExp")
    List<Candidate> findByMinExperience(int minExp);
}
