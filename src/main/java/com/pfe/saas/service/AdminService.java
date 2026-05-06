package com.pfe.saas.service;

import com.pfe.saas.dto.response.AdminDashboardResponse;
import com.pfe.saas.enums.ApplicationStatus;
import com.pfe.saas.enums.OfferStatus;
import com.pfe.saas.enums.ReclamationStatus;
import com.pfe.saas.enums.Role;
import com.pfe.saas.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final JobOfferRepository jobOfferRepository;
    private final ApplicationRepository applicationRepository;
    private final PostRepository postRepository;
    private final MessageRepository messageRepository;
    private final ReclamationRepository reclamationRepository;

    public AdminDashboardResponse getDashboardStats() {
        AdminDashboardResponse stats = new AdminDashboardResponse();
        stats.setTotalUsers(userRepository.count());
        stats.setTotalEnterprises(userRepository.countByRole(Role.ROLE_ENTERPRISE));
        stats.setTotalCandidates(userRepository.countByRole(Role.ROLE_CANDIDATE));
        stats.setTotalJobOffers(jobOfferRepository.count());
        stats.setPublishedOffers(jobOfferRepository.countByStatus(OfferStatus.PUBLISHED));
        stats.setTotalApplications(applicationRepository.count());
        stats.setPendingApplications(applicationRepository.countByStatus(ApplicationStatus.PENDING));
        stats.setAnalyzedApplications(applicationRepository.countByStatus(ApplicationStatus.AI_ANALYZED));
        stats.setTotalPosts(postRepository.count());
        stats.setTotalMessages(messageRepository.count());
        stats.setTotalReclamations(reclamationRepository.count());
        stats.setOpenReclamations(reclamationRepository.countByStatus(ReclamationStatus.OPEN));
        stats.setResolvedReclamations(reclamationRepository.countByStatus(ReclamationStatus.RESOLVED));
        return stats;
    }

    @Transactional
    public void toggleUserActive(Long userId) {
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        user.setActive(!user.isActive());
        userRepository.save(user);
    }

    @Transactional
    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }
}
