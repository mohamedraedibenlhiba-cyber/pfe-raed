package com.pfe.saas.repository;

import com.pfe.saas.entity.Enterprise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnterpriseRepository extends JpaRepository<Enterprise, Long> {
    Optional<Enterprise> findByEmail(String email);
    List<Enterprise> findByCompanySectorContainingIgnoreCase(String sector);
    List<Enterprise> findByCompanyNameContainingIgnoreCase(String name);
    boolean existsByEmail(String email);
    boolean existsBySiretNumber(String siret);

    @Query("SELECT e FROM Enterprise e WHERE e.active = true ORDER BY e.createdAt DESC")
    List<Enterprise> findAllActive();
}
