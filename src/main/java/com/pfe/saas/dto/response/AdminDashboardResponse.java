package com.pfe.saas.dto.response;

import lombok.Data;

@Data
public class AdminDashboardResponse {
    private long totalUsers;
    private long totalEnterprises;
    private long totalCandidates;
    private long totalJobOffers;
    private long publishedOffers;
    private long totalApplications;
    private long pendingApplications;
    private long analyzedApplications;
    private long totalPosts;
    private long totalMessages;
    // Réclamations
    private long totalReclamations;
    private long openReclamations;
    private long resolvedReclamations;
}
