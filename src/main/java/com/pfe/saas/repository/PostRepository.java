package com.pfe.saas.repository;

import com.pfe.saas.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    // Feed global (admin/fallback)
    @Query("SELECT p FROM Post p ORDER BY p.pinned DESC, p.createdAt DESC")
    Page<Post> findAllOrderByPinnedAndDate(Pageable pageable);

    // Feed personnalisé : posts des utilisateurs suivis + les siens
    @Query("SELECT p FROM Post p WHERE p.author.id IN :userIds ORDER BY p.pinned DESC, p.createdAt DESC")
    Page<Post> findFeedByUserIds(@Param("userIds") List<Long> userIds, Pageable pageable);

    Page<Post> findByAuthorId(Long authorId, Pageable pageable);

    @Query("SELECT p FROM Post p WHERE LOWER(p.content) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    Page<Post> searchByKeyword(@Param("keyword") String keyword, Pageable pageable);

    long countByAuthorId(Long authorId);
}
