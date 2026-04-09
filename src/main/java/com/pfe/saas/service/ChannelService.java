package com.pfe.saas.service;

import com.pfe.saas.dto.request.ChannelMessageRequest;
import com.pfe.saas.dto.request.ChannelRequest;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.ChannelMemberRole;
import com.pfe.saas.enums.ReactionType;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.data.domain.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ChannelService {

    private final ChannelRepository channelRepository;
    private final ChannelMemberRepository memberRepository;
    private final ChannelMessageRepository messageRepository;
    private final ChannelMessageReactionRepository reactionRepository;
    private final UserRepository userRepository;

    private User currentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }

    // ── Channels ──────────────────────────────────────────────────────────────

    @Transactional
    public Channel createChannel(ChannelRequest req) {
        User owner = currentUser();
        Channel channel = new Channel();
        channel.setName(req.getName());
        channel.setDescription(req.getDescription());
        channel.setPictureUrl(req.getPictureUrl());
        channel.setPublicChannel(req.isPublicChannel());
        channel.setOwner(owner);
        Channel saved = channelRepository.save(channel);

        // Owner is automatically a member
        ChannelMember ownerMember = new ChannelMember();
        ownerMember.setChannel(saved);
        ownerMember.setUser(owner);
        ownerMember.setRole(ChannelMemberRole.OWNER);
        memberRepository.save(ownerMember);

        return saved;
    }

    @Transactional
    public Channel updateChannel(Long channelId, ChannelRequest req) {
        Channel channel = getChannelOrThrow(channelId);
        requireOwnerOrAdmin(channel);
        channel.setName(req.getName());
        channel.setDescription(req.getDescription());
        channel.setPictureUrl(req.getPictureUrl());
        channel.setPublicChannel(req.isPublicChannel());
        return channelRepository.save(channel);
    }

    @Transactional
    public void deleteChannel(Long channelId) {
        Channel channel = getChannelOrThrow(channelId);
        requireOwner(channel);
        channelRepository.delete(channel);
    }

    public Page<Channel> searchPublicChannels(String query, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        if (query == null || query.isBlank()) {
            return channelRepository.findByPublicChannelTrue(pageable);
        }
        return channelRepository.searchPublic(query, pageable);
    }

    public Page<Channel> getMyChannels(int page, int size) {
        User me = currentUser();
        return channelRepository.findJoinedByUserId(me.getId(), PageRequest.of(page, size));
    }

    public Channel getChannelById(Long channelId) {
        Channel channel = getChannelOrThrow(channelId);
        channel.setMemberCount(memberRepository.countByChannelId(channelId));
        User me = currentUser();
        channel.setMember(memberRepository.existsByChannelIdAndUserId(channelId, me.getId()));
        return channel;
    }

    // ── Membership ────────────────────────────────────────────────────────────

    @Transactional
    public void join(Long channelId) {
        Channel channel = getChannelOrThrow(channelId);
        if (!channel.isPublicChannel()) throw new RuntimeException("Canal privé");
        User me = currentUser();
        if (memberRepository.existsByChannelIdAndUserId(channelId, me.getId())) return;
        ChannelMember member = new ChannelMember();
        member.setChannel(channel);
        member.setUser(me);
        member.setRole(ChannelMemberRole.MEMBER);
        memberRepository.save(member);
    }

    @Transactional
    public void leave(Long channelId) {
        Channel channel = getChannelOrThrow(channelId);
        User me = currentUser();
        if (channel.getOwner().getId().equals(me.getId())) {
            throw new RuntimeException("Le propriétaire ne peut pas quitter son canal");
        }
        memberRepository.deleteByChannelIdAndUserId(channelId, me.getId());
    }

    public List<ChannelMember> getMembers(Long channelId) {
        assertMember(channelId);
        return memberRepository.findByChannelId(channelId);
    }

    // ── Messages ──────────────────────────────────────────────────────────────

    @Transactional
    public ChannelMessage sendMessage(Long channelId, ChannelMessageRequest req) {
        Channel channel = getChannelOrThrow(channelId);
        User me = currentUser();
        if (!memberRepository.existsByChannelIdAndUserId(channelId, me.getId())) {
            throw new RuntimeException("Vous n'êtes pas membre de ce canal");
        }
        ChannelMessage msg = new ChannelMessage();
        msg.setChannel(channel);
        msg.setSender(me);
        msg.setContent(req.getContent());
        msg.setAttachmentUrl(req.getAttachmentUrl());
        if (req.getReplyToId() != null) {
            ChannelMessage replyTo = messageRepository.findById(req.getReplyToId()).orElse(null);
            msg.setReplyTo(replyTo);
        }
        return messageRepository.save(msg);
    }

    @Transactional(readOnly = true)
    public Page<ChannelMessage> getMessages(Long channelId, int page, int size) {
        assertMember(channelId);
        Page<ChannelMessage> messages = messageRepository.findByChannelIdOrderBySentAtAsc(
                channelId, PageRequest.of(page, size));
        messages.getContent().forEach(msg -> {
            if (msg.getReplyTo() != null) {
                Hibernate.initialize(msg.getReplyTo());
            }
            msg.setReactionCount(reactionRepository.countByChannelMessageId(msg.getId()));
        });
        return messages;
    }

    @Transactional
    public void deleteMessage(Long messageId) {
        ChannelMessage msg = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message non trouvé"));
        User me = currentUser();
        if (!msg.getSender().getId().equals(me.getId())) {
            throw new RuntimeException("Accès non autorisé");
        }
        messageRepository.delete(msg);
    }

    // ── Réactions ─────────────────────────────────────────────────────────────

    @Transactional
    public void reactToMessage(Long messageId, ReactionType type) {
        ChannelMessage msg = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message non trouvé"));
        User me = currentUser();
        reactionRepository.findByChannelMessageIdAndUserId(messageId, me.getId())
                .ifPresentOrElse(
                        r -> { r.setType(type); reactionRepository.save(r); },
                        () -> {
                            ChannelMessageReaction r = new ChannelMessageReaction();
                            r.setChannelMessage(msg);
                            r.setUser(me);
                            r.setType(type);
                            reactionRepository.save(r);
                        }
                );
    }

    @Transactional
    public void removeReaction(Long messageId) {
        User me = currentUser();
        reactionRepository.deleteByChannelMessageIdAndUserId(messageId, me.getId());
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private Channel getChannelOrThrow(Long channelId) {
        return channelRepository.findById(channelId)
                .orElseThrow(() -> new RuntimeException("Canal non trouvé"));
    }

    private void requireOwner(Channel channel) {
        User me = currentUser();
        if (!channel.getOwner().getId().equals(me.getId())) {
            throw new RuntimeException("Seul le propriétaire peut effectuer cette action");
        }
    }

    private void requireOwnerOrAdmin(Channel channel) {
        User me = currentUser();
        if (channel.getOwner().getId().equals(me.getId())) return;
        memberRepository.findByChannelIdAndUserId(channel.getId(), me.getId())
                .filter(m -> m.getRole() == ChannelMemberRole.OWNER || m.getRole() == ChannelMemberRole.ADMIN)
                .orElseThrow(() -> new RuntimeException("Droits insuffisants"));
    }

    private void assertMember(Long channelId) {
        User me = currentUser();
        if (!memberRepository.existsByChannelIdAndUserId(channelId, me.getId())) {
            throw new RuntimeException("Vous n'êtes pas membre de ce canal");
        }
    }
}
