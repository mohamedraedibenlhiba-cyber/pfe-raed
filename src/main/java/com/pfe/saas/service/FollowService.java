package com.pfe.saas.service;

import com.pfe.saas.entity.Follow;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.FollowRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FollowService {

    private final FollowRepository followRepository;
    private final UserRepository userRepository;

    private User currentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }

    @Transactional
    public void follow(Long targetUserId) {
        User me = currentUser();
        if (me.getId().equals(targetUserId)) throw new RuntimeException("Impossible de se suivre soi-même");
        if (followRepository.existsByFollowerIdAndFollowingId(me.getId(), targetUserId)) return;
        User target = userRepository.findById(targetUserId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        Follow follow = new Follow();
        follow.setFollower(me);
        follow.setFollowing(target);
        followRepository.save(follow);
    }

    @Transactional
    public void unfollow(Long targetUserId) {
        User me = currentUser();
        followRepository.deleteByFollowerIdAndFollowingId(me.getId(), targetUserId);
    }

    public boolean isFollowing(Long targetUserId) {
        User me = currentUser();
        return followRepository.existsByFollowerIdAndFollowingId(me.getId(), targetUserId);
    }

    public List<Follow> getFollowers(Long userId) {
        return followRepository.findByFollowingId(userId);
    }

    public List<Follow> getFollowing(Long userId) {
        return followRepository.findByFollowerId(userId);
    }

    public List<Long> getFollowingIds(Long userId) {
        return followRepository.findFollowingIdsByFollowerId(userId);
    }

    public long countFollowers(Long userId) {
        return followRepository.countByFollowingId(userId);
    }

    public long countFollowing(Long userId) {
        return followRepository.countByFollowerId(userId);
    }

    @Transactional
    public void followUser(Long followerId, Long followingId) {
        if (followerId.equals(followingId)) return;
        if (followRepository.existsByFollowerIdAndFollowingId(followerId, followingId)) return;
        User follower = userRepository.findById(followerId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        User following = userRepository.findById(followingId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        Follow follow = new Follow();
        follow.setFollower(follower);
        follow.setFollowing(following);
        followRepository.save(follow);
    }
}
