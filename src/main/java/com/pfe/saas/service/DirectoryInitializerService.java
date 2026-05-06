package com.pfe.saas.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Slf4j
@Service
public class DirectoryInitializerService {

    public void initializeDirectories() {
        try {
            Path uploadsDir = Paths.get("uploads/attachments/");
            Files.createDirectories(uploadsDir);
            log.info("Répertoire uploads initialisé: {}", uploadsDir.toAbsolutePath());
        } catch (IOException e) {
            log.error("Erreur lors de la création du répertoire uploads", e);
        }
    }
}
