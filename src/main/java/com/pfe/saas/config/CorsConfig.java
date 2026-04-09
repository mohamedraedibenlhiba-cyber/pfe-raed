package com.pfe.saas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration();

        // Origines autorisées (adapter selon vos frontends)
        config.setAllowedOrigins(List.of(
            "http://localhost:3000",   // React dev
            "http://localhost:4200",   // Angular dev
            "http://localhost:5173",   // Vite dev
            "https://votre-domaine.com"
        ));

        // Méthodes HTTP autorisées
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));

        // En-têtes autorisés (liste explicite obligatoire avec allowCredentials=true)
        config.setAllowedHeaders(List.of(
            "Authorization", "Content-Type", "Accept",
            "Origin", "X-Requested-With", "Cache-Control"
        ));

        // Autoriser les cookies / credentials
        config.setAllowCredentials(true);

        // Durée de mise en cache du preflight (secondes)
        config.setMaxAge(3600L);

        // En-têtes exposés au client
        config.setExposedHeaders(List.of("Authorization", "Content-Disposition"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);

        return new CorsFilter(source);
    }
}
