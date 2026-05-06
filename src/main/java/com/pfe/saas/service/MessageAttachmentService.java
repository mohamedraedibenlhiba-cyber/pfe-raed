package com.pfe.saas.service;

import com.pfe.saas.entity.AttachmentType;
import com.pfe.saas.entity.Message;
import com.pfe.saas.entity.MessageAttachment;
import com.pfe.saas.repository.MessageAttachmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class MessageAttachmentService {

    private final MessageAttachmentRepository messageAttachmentRepository;
    private static final String UPLOAD_DIR = "uploads/messages/";

    // Limites de fichiers
    private static final Map<AttachmentType, Long> MAX_FILE_SIZES = Map.of(
        AttachmentType.IMAGE, 10L * 1024 * 1024,    // 10 MB
        AttachmentType.VIDEO, 50L * 1024 * 1024,    // 50 MB
        AttachmentType.DOCUMENT, 20L * 1024 * 1024, // 20 MB
        AttachmentType.AUDIO, 10L * 1024 * 1024     // 10 MB
    );

    private static final Map<AttachmentType, List<String>> ALLOWED_MIME_TYPES = Map.of(
        AttachmentType.IMAGE, List.of("image/jpeg", "image/png", "image/gif", "image/webp"),
        AttachmentType.VIDEO, List.of("video/mp4", "video/webm", "video/quicktime"),
        AttachmentType.DOCUMENT, List.of("application/pdf", "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "text/plain"),
        AttachmentType.AUDIO, List.of("audio/mpeg", "audio/wav", "audio/m4a")
    );

    @Transactional
    public MessageAttachment uploadAttachment(MultipartFile file, Message message, AttachmentType type) throws IOException {
        // Validation
        validateFile(file, type);

        // Créer le répertoire
        String uploadPath = UPLOAD_DIR + message.getSender().getId() + "/" + message.getConversation().getId() + "/";
        Path directory = Paths.get(uploadPath);
        Files.createDirectories(directory);

        // Générer le nouveau nom de fichier
        String originalFileName = file.getOriginalFilename() != null ? file.getOriginalFilename() : "file";
        String newFileName = UUID.randomUUID() + "_" + originalFileName;
        Path filePath = directory.resolve(newFileName);

        // Copier le fichier
        Files.copy(file.getInputStream(), filePath, java.nio.file.StandardCopyOption.REPLACE_EXISTING);

        // Créer l'entité
        MessageAttachment attachment = new MessageAttachment();
        attachment.setType(type);
        attachment.setFileName(originalFileName);
        attachment.setFileUrl("/api/messages/attachments/" + message.getSender().getId() + "/"
                            + message.getConversation().getId() + "/" + newFileName);
        attachment.setContentType(file.getContentType() != null ? file.getContentType() : "application/octet-stream");
        attachment.setFileSize(file.getSize());
        attachment.setMessage(message);

        return messageAttachmentRepository.save(attachment);
    }

    @Transactional(readOnly = true)
    public List<MessageAttachment> getMessageAttachments(Long messageId) {
        return messageAttachmentRepository.findByMessageId(messageId);
    }

    @Transactional
    public void deleteAttachment(Long attachmentId) {
        messageAttachmentRepository.deleteById(attachmentId);
    }

    private void validateFile(MultipartFile file, AttachmentType type) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Le fichier ne peut pas être vide");
        }

        // Vérifier la taille
        long maxSize = MAX_FILE_SIZES.get(type);
        if (file.getSize() > maxSize) {
            throw new IllegalArgumentException("La taille du fichier dépasse la limite de " + (maxSize / 1024 / 1024) + " MB");
        }

        // Vérifier le type MIME
        String contentType = file.getContentType() != null ? file.getContentType() : "";
        List<String> allowedTypes = ALLOWED_MIME_TYPES.get(type);
        if (!allowedTypes.contains(contentType)) {
            throw new IllegalArgumentException("Type de fichier non autorisé: " + contentType);
        }
    }
}
