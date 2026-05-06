package com.pfe.saas.service;

import com.pfe.saas.dto.request.MessageRequest;
import com.pfe.saas.dto.response.MessageDetailDTO;
import com.pfe.saas.entity.*;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MessagingService {

    private final MessageRepository messageRepository;
    private final ConversationRepository conversationRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;
    private final ConnectionRequestService connectionRequestService;
    private final MessageReactionRepository messageReactionRepository;
    private final MessageAttachmentRepository messageAttachmentRepository;

    @Transactional
    public Message sendMessage(Long senderId, MessageRequest req) {
        User sender = userRepository.findById(senderId)
                .orElseThrow(() -> new RuntimeException("Expéditeur non trouvé"));
        User recipient = userRepository.findById(req.getRecipientId())
                .orElseThrow(() -> new RuntimeException("Destinataire non trouvé"));

        // VÉRIFICATION: Utiliser les règles de connexion appropriées
        if (!connectionRequestService.canMessage(senderId, req.getRecipientId())) {
            throw new IllegalArgumentException(
                "Messagerie interdite: Les candidats et les entreprises doivent d'abord accepter une demande de connexion."
            );
        }

        // Trouver ou créer la conversation
        Conversation conversation = conversationRepository
                .findBetweenUsers(senderId, req.getRecipientId())
                .orElseGet(() -> {
                    Conversation conv = new Conversation();
                    conv.setParticipant1(sender);
                    conv.setParticipant2(recipient);
                    return conversationRepository.save(conv);
                });

        Message message = new Message();
        message.setContent(req.getContent());
        message.setAttachmentUrl(req.getAttachmentUrl());
        message.setSender(sender);
        message.setConversation(conversation);
        Message saved = messageRepository.save(message);

        conversation.setLastMessageAt(LocalDateTime.now());
        conversationRepository.save(conversation);

        // Notifier le destinataire
        notificationService.createNotification(
            req.getRecipientId(),
            "Nouveau message",
            sender.getFullName() + " vous a envoyé un message",
            "MESSAGE_RECEIVED",
            saved.getId()
        );

        return saved;
    }

    @Transactional(readOnly = true)
    public List<Conversation> getUserConversations(Long userId) {
        return conversationRepository.findByUserId(userId);
    }

    @Transactional(readOnly = true)
    public Page<Message> getConversationMessages(Long conversationId, Long userId, int page, int size) {
        // Vérifier que l'utilisateur est bien dans la conversation
        Conversation conv = conversationRepository.findById(conversationId)
                .orElseThrow(() -> new RuntimeException("Conversation non trouvée"));
        if (!conv.getParticipant1().getId().equals(userId) && !conv.getParticipant2().getId().equals(userId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        Pageable pageable = PageRequest.of(page, size, Sort.by("sentAt").ascending());
        return messageRepository.findByConversationIdOrderBySentAtAsc(conversationId, pageable);
    }

    @Transactional
    public void markConversationAsRead(Long conversationId, Long userId) {
        messageRepository.markAllAsReadInConversation(conversationId, userId);
    }

    @Transactional(readOnly = true)
    public long getTotalUnread(Long userId) {
        return messageRepository.countTotalUnread(userId);
    }

    @Transactional
    public Conversation getOrCreateConversation(Long userId1, Long userId2) {
        if (!connectionRequestService.canMessage(userId1, userId2)) {
            throw new IllegalArgumentException(
                "Messagerie interdite: Les candidats et les entreprises doivent d'abord accepter une demande de connexion."
            );
        }

        User user1 = userRepository.findById(userId1)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        User user2 = userRepository.findById(userId2)
                .orElseThrow(() -> new RuntimeException("Destinataire non trouvé"));

        return conversationRepository.findBetweenUsers(userId1, userId2)
                .orElseGet(() -> {
                    Conversation conv = new Conversation();
                    conv.setParticipant1(user1);
                    conv.setParticipant2(user2);
                    return conversationRepository.save(conv);
                });
    }

    // ✨ RÉACTIONS SUR LES MESSAGES
    @Transactional
    public MessageReaction addReactionToMessage(Long messageId, Long userId, ReactionType reactionType) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message non trouvé"));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        // Vérifier si l'utilisateur a déjà réagi avec ce type
        messageReactionRepository.findByMessageIdAndUserIdAndReactionType(messageId, userId, reactionType)
                .ifPresent(existing -> {
                    throw new IllegalArgumentException("Vous avez déjà réagi avec " + reactionType);
                });

        MessageReaction reaction = new MessageReaction();
        reaction.setMessage(message);
        reaction.setUser(user);
        reaction.setReactionType(reactionType);

        return messageReactionRepository.save(reaction);
    }

    @Transactional
    public void removeReactionFromMessage(Long messageId, Long userId, ReactionType reactionType) {
        messageReactionRepository.deleteByMessageIdAndUserIdAndReactionType(messageId, userId, reactionType);
    }

    @Transactional(readOnly = true)
    public List<MessageReaction> getMessageReactions(Long messageId) {
        return messageReactionRepository.findByMessageId(messageId);
    }

    // ✨ DÉTAILS DU MESSAGE (AVEC REACTIONS ET ATTACHMENTS)
    @Transactional(readOnly = true)
    public MessageDetailDTO getMessageWithDetails(Long messageId) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message non trouvé"));

        List<MessageReaction> reactions = messageReactionRepository.findByMessageId(messageId);
        List<MessageAttachment> attachments = messageAttachmentRepository.findByMessageId(messageId);

        return MessageDetailDTO.builder()
                .id(message.getId())
                .content(message.getContent())
                .sender(message.getSender())
                .read(message.isRead())
                .deleted(message.isDeleted())
                .sentAt(message.getSentAt())
                .editedAt(message.getEditedAt())
                .attachments(attachments.stream()
                        .map(a -> com.pfe.saas.dto.response.MessageAttachmentDTO.builder()
                                .id(a.getId())
                                .type(a.getType())
                                .fileName(a.getFileName())
                                .fileUrl(a.getFileUrl())
                                .contentType(a.getContentType())
                                .fileSize(a.getFileSize())
                                .uploadedAt(a.getUploadedAt())
                                .build())
                        .collect(Collectors.toList()))
                .reactions(reactions.stream()
                        .map(r -> com.pfe.saas.dto.response.MessageReactionDTO.builder()
                                .id(r.getId())
                                .reactionType(r.getReactionType())
                                .userId(r.getUser().getId())
                                .userName(r.getUser().getFullName())
                                .userProfilePicture(r.getUser().getProfilePicture())
                                .createdAt(r.getCreatedAt())
                                .build())
                        .collect(Collectors.toList()))
                .build();
    }

    // ✨ SUPPRESSION SOFT DELETE
    @Transactional
    public void deleteMessage(Long messageId, Long userId) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message non trouvé"));

        if (!message.getSender().getId().equals(userId)) {
            throw new IllegalArgumentException("Vous ne pouvez supprimer que vos propres messages");
        }

        message.setDeleted(true);
        messageRepository.save(message);
    }

    // ✨ ÉDITION DU MESSAGE
    @Transactional
    public Message updateMessage(Long messageId, String newContent, Long userId) {
        Message message = messageRepository.findById(messageId)
                .orElseThrow(() -> new RuntimeException("Message non trouvé"));

        if (!message.getSender().getId().equals(userId)) {
            throw new IllegalArgumentException("Vous ne pouvez éditer que vos propres messages");
        }

        if (message.isDeleted()) {
            throw new IllegalArgumentException("Vous ne pouvez pas éditer un message supprimé");
        }

        message.setContent(newContent);
        return messageRepository.save(message);
    }
}

