package com.pfe.saas.repository;

import com.pfe.saas.entity.Application;
import com.pfe.saas.enums.ApplicationStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {

    List<Application> findByCandidateId(Long candidateId);
    Page<Application> findByJobOfferId(Long jobOfferId, Pageable pageable);
    Optional<Application> findByCandidateIdAndJobOfferId(Long candidateId, Long jobOfferId);
    boolean existsByCandidateIdAndJobOfferId(Long candidateId, Long jobOfferId);

    List<Application> findByJobOfferIdAndStatus(Long jobOfferId, ApplicationStatus status);

    @Query("SELECT a FROM Application a WHERE a.jobOffer.enterprise.id = :enterpriseId ORDER BY a.appliedAt DESC")
    Page<Application> findByEnterpriseId(@Param("enterpriseId") Long enterpriseId, Pageable pageable);

    @Query("SELECT a FROM Application a WHERE a.jobOffer.id = :offerId ORDER BY a.aiScore DESC")
    List<Application> findByJobOfferIdOrderByScore(@Param("offerId") Long offerId);

    @Query("SELECT a FROM Application a LEFT JOIN FETCH a.candidate LEFT JOIN FETCH a.jobOffer jo LEFT JOIN FETCH jo.enterprise LEFT JOIN FETCH a.cv WHERE a.id = :id")
    Optional<Application> findByIdWithDetails(@Param("id") Long id);

    long countByJobOfferId(Long jobOfferId);
    long countByStatus(ApplicationStatus status);

    @Query("SELECT COUNT(a) FROM Application a WHERE a.jobOffer.enterprise.id = :enterpriseId")
    long countByEnterpriseId(@Param("enterpriseId") Long enterpriseId);
}
