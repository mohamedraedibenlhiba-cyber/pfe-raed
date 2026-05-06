package com.pfe.saas.service;

import com.pfe.saas.entity.AttachmentType;
import lombok.*;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AttachmentService {

    private static final String UPLOAD_DIR = "uploads/attachments/";

    private static final Map<AttachmentType, Long> MAX_FILE_SIZES = Map.of(
        AttachmentType.IMAGE, 10L * 1024 * 1024,
        AttachmentType.VIDEO, 50L * 1024 * 1024,
        AttachmentType.DOCUMENT, 20L * 1024 * 1024,
        AttachmentType.AUDIO, 10L * 1024 * 1024
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

    public AttachmentData uploadAttachment(MultipartFile file) throws IOException {
        AttachmentType type = detectAttachmentType(file);
        validateFile(file, type);

        Path directory = Paths.get(UPLOAD_DIR);
        Files.createDirectories(directory);

        String originalFileName = file.getOriginalFilename() != null ? file.getOriginalFilename() : "file";
        String newFileName = UUID.randomUUID() + "_" + originalFileName;
        Path filePath = directory.resolve(newFileName);

        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

        return AttachmentData.builder()
                .fileName(originalFileName)
                .fileUrl("/api/posts/attachments/" + newFileName)
                .fileType(type.name())
                .fileSize(file.getSize())
                .build();
    }

    public byte[] serveAttachment(String filename) throws IOException {
        if (filename == null || filename.isEmpty() || filename.contains("..") || filename.contains("/")) {
            throw new IllegalArgumentException("Nom de fichier invalide");
        }

        Path baseDir = Paths.get(UPLOAD_DIR).toAbsolutePath();
        Path filePath = baseDir.resolve(filename).toAbsolutePath();

        if (!filePath.startsWith(baseDir)) {
            throw new IllegalArgumentException("Accès refusé: chemin invalide");
        }

        if (!Files.exists(filePath)) {
            throw new java.io.FileNotFoundException("Fichier non trouvé");
        }

        return Files.readAllBytes(filePath);
    }

    public void deleteAttachment(String fileUrl) {
        try {
            if (fileUrl != null && fileUrl.contains("/")) {
                String filename = fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
                Path filePath = Paths.get(UPLOAD_DIR + filename);
                if (Files.exists(filePath)) {
                    Files.delete(filePath);
                }
            }
        } catch (IOException e) {
            // Log but don't fail
        }
    }

    private AttachmentType detectAttachmentType(MultipartFile file) {
        String contentType = file.getContentType();
        if (contentType == null) contentType = "";
        String lowerContentType = contentType.toLowerCase();

        System.out.println("🔍 File: " + file.getOriginalFilename() + " | ContentType: " + contentType);

        if (lowerContentType.startsWith("image/")) return AttachmentType.IMAGE;
        if (lowerContentType.startsWith("video/")) return AttachmentType.VIDEO;
        if (lowerContentType.startsWith("audio/")) return AttachmentType.AUDIO;
        if (lowerContentType.contains("pdf") || lowerContentType.contains("word") ||
            lowerContentType.contains("excel") || lowerContentType.contains("spreadsheet") ||
            lowerContentType.contains("text") || lowerContentType.contains("document")) {
            System.out.println("✅ Detected as DOCUMENT");
            return AttachmentType.DOCUMENT;
        }

        System.out.println("❌ Unsupported type: " + contentType);
        throw new IllegalArgumentException("Type de fichier non supporté: " + contentType);
    }

    private void validateFile(MultipartFile file, AttachmentType type) {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Le fichier ne peut pas être vide");
        }

        long maxSize = MAX_FILE_SIZES.get(type);
        if (file.getSize() > maxSize) {
            throw new IllegalArgumentException("La taille du fichier dépasse la limite de " + (maxSize / 1024 / 1024) + " MB");
        }

        String contentType = file.getContentType() != null ? file.getContentType() : "";
        List<String> allowedTypes = ALLOWED_MIME_TYPES.get(type);
        if (!allowedTypes.contains(contentType)) {
            throw new IllegalArgumentException("Type MIME non autorisé pour cette catégorie");
        }
    }
}
