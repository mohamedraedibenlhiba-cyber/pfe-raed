package com.pfe.saas.service;

import com.pfe.saas.dto.request.CommentRequest;
import com.pfe.saas.dto.request.PostRequest;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ReactionType;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final ReactionRepository reactionRepository;
    private final UserRepository userRepository;
    private final FollowRepository followRepository;
    private final NotificationService notificationService;

    @Transactional
    public Post createPost(Long authorId, PostRequest req) {
        User author = userRepository.findById(authorId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        Post post = new Post();
        post.setContent(req.getContent());
        post.setMediaUrl(req.getMediaUrl());
        post.setMediaType(req.getMediaType());
        post.setAuthor(author);
        return postRepository.save(post);
    }

    @Transactional
    public Post updatePost(Long postId, Long authorId, PostRequest req) {
        Post post = getOwnedPost(postId, authorId);
        post.setContent(req.getContent());
        post.setMediaUrl(req.getMediaUrl());
        post.setMediaType(req.getMediaType());
        return postRepository.save(post);
    }

    @Transactional
    public void deletePost(Long postId, Long authorId) {
        Post post = getOwnedPost(postId, authorId);
        postRepository.delete(post);
    }

    /**
     * Feed personnalisé : posts des utilisateurs suivis + les siens.
     * Si l'utilisateur ne suit personne, renvoie tous les posts (mode découverte).
     */
    @Transactional(readOnly = true)
    public Page<Post> getFeed(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        List<Long> followingIds = followRepository.findFollowingIdsByFollowerId(userId);
        Page<Post> result;
        if (followingIds.isEmpty()) {
            result = postRepository.findAllOrderByPinnedAndDate(pageable);
        } else {
            List<Long> feedIds = new ArrayList<>(followingIds);
            feedIds.add(userId);
            result = postRepository.findFeedByUserIds(feedIds, pageable);
        }
        result.getContent().forEach(this::populateCounts);
        return result;
    }

    @Transactional(readOnly = true)
    public Page<Post> getUserPosts(Long userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.by("createdAt").descending());
        Page<Post> result = postRepository.findByAuthorId(userId, pageable);
        result.getContent().forEach(this::populateCounts);
        return result;
    }

    @Transactional(readOnly = true)
    public Post getPostById(Long postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Publication non trouvée"));
        populateCounts(post);
        return post;
    }

    private void populateCounts(Post post) {
        post.setCommentCount(commentRepository.countByPostId(post.getId()));
        post.setReactionCount(reactionRepository.countByPostId(post.getId()));
    }

    // --- Commentaires ---
    @Transactional
    public Comment addComment(Long authorId, CommentRequest req) {
        User author = userRepository.findById(authorId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        Post post = postRepository.findById(req.getPostId())
                .orElseThrow(() -> new RuntimeException("Publication non trouvée"));
        Comment comment = new Comment();
        comment.setContent(req.getContent());
        comment.setAuthor(author);
        comment.setPost(post);
        if (req.getParentCommentId() != null) {
            Comment parent = commentRepository.findById(req.getParentCommentId())
                    .orElseThrow(() -> new RuntimeException("Commentaire parent non trouvé"));
            comment.setParentComment(parent);
        }
        Comment saved = commentRepository.save(comment);
        if (!post.getAuthor().getId().equals(authorId)) {
            notificationService.createNotification(
                post.getAuthor().getId(),
                "Nouveau commentaire",
                author.getFullName() + " a commenté votre publication",
                "POST_COMMENTED",
                post.getId()
            );
        }
        return saved;
    }

    @Transactional(readOnly = true)
    public List<Comment> getPostComments(Long postId) {
        return commentRepository.findByPostIdAndParentCommentIsNullOrderByCreatedAtAsc(postId);
    }

    @Transactional
    public void deleteComment(Long commentId, Long authorId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new RuntimeException("Commentaire non trouvé"));
        if (!comment.getAuthor().getId().equals(authorId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        commentRepository.delete(comment);
    }

    // --- Réactions ---
    @Transactional
    public void react(Long userId, Long postId, ReactionType type) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Publication non trouvée"));

        reactionRepository.findByUserIdAndPostId(userId, postId).ifPresentOrElse(
            existing -> {
                existing.setType(type);
                reactionRepository.save(existing);
            },
            () -> {
                Reaction reaction = new Reaction();
                reaction.setUser(user);
                reaction.setPost(post);
                reaction.setType(type);
                reactionRepository.save(reaction);
                if (!post.getAuthor().getId().equals(userId)) {
                    notificationService.createNotification(
                        post.getAuthor().getId(),
                        "Réaction sur votre publication",
                        user.getFullName() + " a réagi à votre publication",
                        "POST_REACTED",
                        post.getId()
                    );
                }
            }
        );
    }

    @Transactional
    public void removeReaction(Long userId, Long postId) {
        reactionRepository.deleteByUserIdAndPostId(userId, postId);
    }

    private Post getOwnedPost(Long postId, Long authorId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new RuntimeException("Publication non trouvée"));
        if (!post.getAuthor().getId().equals(authorId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        return post;
    }
}
