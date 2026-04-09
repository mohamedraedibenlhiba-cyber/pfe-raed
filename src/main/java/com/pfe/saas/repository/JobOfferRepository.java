package com.pfe.saas.repository;

import com.pfe.saas.entity.JobOffer;
import com.pfe.saas.enums.ContractType;
import com.pfe.saas.enums.OfferStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface JobOfferRepository extends JpaRepository<JobOffer, Long> {

    List<JobOffer> findByEnterpriseIdAndStatus(Long enterpriseId, OfferStatus status);
    List<JobOffer> findByEnterpriseId(Long enterpriseId);
    Optional<JobOffer> findByPublicToken(String token);

    @Query("SELECT j FROM JobOffer j WHERE j.status = 'PUBLISHED' ORDER BY j.createdAt DESC")
    Page<JobOffer> findAllPublished(Pageable pageable);

    @Query("SELECT j FROM JobOffer j WHERE j.status = 'PUBLISHED' " +
           "AND (:title IS NULL OR LOWER(j.title) LIKE LOWER(CONCAT('%', :title, '%'))) " +
           "AND (:location IS NULL OR LOWER(j.location) LIKE LOWER(CONCAT('%', :location, '%'))) " +
           "AND (:contractType IS NULL OR j.contractType = :contractType)")
    Page<JobOffer> searchPublished(@Param("title") String title,
                                   @Param("location") String location,
                                   @Param("contractType") ContractType contractType,
                                   Pageable pageable);

    long countByEnterpriseId(Long enterpriseId);
    long countByStatus(OfferStatus status);

    @Query("SELECT j FROM JobOffer j WHERE (:status IS NULL OR j.status = :status) ORDER BY j.createdAt DESC")
    Page<JobOffer> adminSearch(@Param("status") OfferStatus status, Pageable pageable);
}
