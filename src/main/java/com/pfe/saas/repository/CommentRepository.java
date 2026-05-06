package com.pfe.saas.repository;

import com.pfe.saas.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPostIdAndParentCommentIsNullOrderByCreatedAtAsc(Long postId);
    List<Comment> findByParentCommentIdOrderByCreatedAtAsc(Long parentId);
    long countByPostId(Long postId);
    void deleteByPostId(Long postId);
}
