package com.pfe.saas.repository;

import com.pfe.saas.entity.Reclamation;
import com.pfe.saas.enums.ReclamationStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReclamationRepository extends JpaRepository<Reclamation, Long> {

    Page<Reclamation> findAllByOrderByCreatedAtDesc(Pageable pageable);

    Page<Reclamation> findByStatusOrderByCreatedAtDesc(ReclamationStatus status, Pageable pageable);

    List<Reclamation> findByUserId(Long userId);

    long countByStatus(ReclamationStatus status);
}
