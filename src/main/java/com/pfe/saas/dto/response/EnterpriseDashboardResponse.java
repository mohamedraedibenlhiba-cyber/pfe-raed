package com.pfe.saas.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EnterpriseDashboardResponse {

    private Long totalOffers;              // Nombre total d'offres créées
    private Long activeOffers;             // Offres publiées
    private Long draftOffers;              // Offres en brouillon
    private Long totalApplications;        // Nombre total de candidatures
    private Long pendingApplications;      // Candidatures en attente
    private Long rejectedApplications;     // Candidatures rejetées
    private Double averageScore;           // Score IA moyen
    private List<OfferStatsDto> offerStats; // Stats par offre

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class OfferStatsDto {
        private Long offerId;
        private String offertitle;
        private Long applicationsCount;
        private Long pendingCount;
        private Long acceptedCount;
        private Long rejectedCount;
        private Double averageScore;
        private CandidateDto topCandidate;  // Meilleur candidat
    }

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    @Builder
    public static class CandidateDto {
        private Long id;
        private String fullName;
        private String email;
        private String skills;
        private Integer yearsExperience;
        private Double aiScore;
    }
}
