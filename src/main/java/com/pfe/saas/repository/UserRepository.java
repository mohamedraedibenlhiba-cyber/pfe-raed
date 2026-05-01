package com.pfe.saas.repository;

import com.pfe.saas.entity.User;
import com.pfe.saas.enums.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    Optional<User> findByResetToken(String resetToken);
    List<User> findByRole(Role role);
    List<User> findByActiveTrue();
    long countByRole(Role role);

    // ✨ Search users by name, email, skills, company
    @Query("SELECT DISTINCT u FROM User u " +
           "WHERE (:query IS NULL OR " +
           "  LOWER(u.fullName) LIKE LOWER(CONCAT('%',:query,'%')) OR " +
           "  LOWER(u.email) LIKE LOWER(CONCAT('%',:query,'%')) OR " +
           "  (TYPE(u) = Candidate AND LOWER(TREAT(u AS Candidate).skills) LIKE LOWER(CONCAT('%',:query,'%'))) OR " +
           "  (TYPE(u) = Enterprise AND LOWER(TREAT(u AS Enterprise).companyName) LIKE LOWER(CONCAT('%',:query,'%'))))" +
           " AND (:roles IS NULL OR u.role IN :roles)" +
           " AND u.id != :excludeUserId" +
           " ORDER BY u.createdAt DESC")
    Page<User> search(@Param("query") String query,
                      @Param("roles") List<Role> roles,
                      @Param("excludeUserId") Long excludeUserId,
                      Pageable pageable);
}
