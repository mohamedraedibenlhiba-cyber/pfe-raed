package com.pfe.saas.service;

import com.pfe.saas.dto.request.MessageRequest;
import com.pfe.saas.entity.*;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessagingService {

    private final MessageRepository messageRepository;
    private final ConversationRepository conversationRepository;
    private final UserRepository userRepository;
    private final NotificationService notificationService;

    @Transactional
    public Message sendMessage(Long senderId, MessageRequest req) {
        User sender = userRepository.findById(senderId)
                .orElseThrow(() -> new RuntimeException("Expéditeur non trouvé"));
        User recipient = userRepository.findById(req.getRecipientId())
                .orElseThrow(() -> new RuntimeException("Destinataire non trouvé"));

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
}
