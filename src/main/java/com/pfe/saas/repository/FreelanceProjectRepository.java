package com.pfe.saas.repository;

import com.pfe.saas.entity.FreelanceProject;
import com.pfe.saas.enums.ProjectStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface FreelanceProjectRepository extends JpaRepository<FreelanceProject, Long> {

    Page<FreelanceProject> findByStatus(ProjectStatus status, Pageable pageable);

    Page<FreelanceProject> findByPostedById(Long userId, Pageable pageable);

    @Query("SELECT p FROM FreelanceProject p WHERE p.status = 'OPEN'" +
           " AND (:skills IS NULL OR LOWER(p.requiredSkills) LIKE LOWER(CONCAT('%',:skills,'%')))" +
           " AND (:title IS NULL OR LOWER(p.title) LIKE LOWER(CONCAT('%',:title,'%')))" +
           " ORDER BY p.createdAt DESC")
    Page<FreelanceProject> search(@Param("title") String title,
                                  @Param("skills") String skills,
                                  Pageable pageable);
}
