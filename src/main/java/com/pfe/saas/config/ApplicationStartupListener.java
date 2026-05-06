package com.pfe.saas.config;

import com.pfe.saas.service.DirectoryInitializerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class ApplicationStartupListener {

    private final DirectoryInitializerService directoryInitializer;

    @EventListener(ApplicationReadyEvent.class)
    public void onApplicationReady() {
        log.info("Application démarrée, initialisation des répertoires...");
        directoryInitializer.initializeDirectories();
    }
}
