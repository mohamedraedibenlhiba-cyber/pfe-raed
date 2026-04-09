package com.pfe.saas.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.*;
import io.swagger.v3.oas.models.security.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("SaaS Recrutement IA — API")
                .description("""
                    Plateforme SAAS de gestion d'offres d'emploi enrichie par intelligence artificielle.

                    **3 types d'utilisateurs :**
                    - `ROLE_ADMIN` — Dashboard & gestion globale
                    - `ROLE_ENTERPRISE` — Création d'offres, suivi candidatures
                    - `ROLE_CANDIDATE` — Candidature, CV, messagerie

                    **Authentification :** JWT Bearer Token
                    """)
                .version("1.0.0")
                .contact(new Contact()
                    .name("PFE Team")
                    .email("contact@pfe-saas.com"))
                .license(new License().name("MIT")))
            // Schéma de sécurité JWT
            .addSecurityItem(new SecurityRequirement().addList("bearerAuth"))
            .components(new Components()
                .addSecuritySchemes("bearerAuth",
                    new SecurityScheme()
                        .name("bearerAuth")
                        .type(SecurityScheme.Type.HTTP)
                        .scheme("bearer")
                        .bearerFormat("JWT")
                        .description("Insérer le token JWT obtenu lors du login : Bearer <token>")));
    }
}
