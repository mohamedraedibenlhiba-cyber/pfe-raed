package com.pfe.saas.service;

import com.pfe.saas.dto.request.BidNegotiationRequest;
import com.pfe.saas.dto.request.FreelanceProjectRequest;
import com.pfe.saas.dto.request.ProjectBidRequest;
import com.pfe.saas.entity.FreelanceProject;
import com.pfe.saas.entity.ProjectBid;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.BidStatus;
import com.pfe.saas.enums.ProjectStatus;
import com.pfe.saas.repository.FreelanceProjectRepository;
import com.pfe.saas.repository.ProjectBidRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FreelanceService {

    private final FreelanceProjectRepository projectRepository;
    private final ProjectBidRepository bidRepository;
    private final UserRepository userRepository;

    private User currentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }

    // ── Projects ──────────────────────────────────────────────────────────────

    @Transactional
    public FreelanceProject createProject(FreelanceProjectRequest req) {
        User me = currentUser();
        FreelanceProject project = new FreelanceProject();
        project.setTitle(req.getTitle());
        project.setDescription(req.getDescription());
        project.setRequiredSkills(req.getRequiredSkills());
        project.setBudgetMin(req.getBudgetMin());
        project.setBudgetMax(req.getBudgetMax());
        project.setDurationDays(req.getDurationDays());
        project.setDeadlineDate(req.getDeadlineDate());
        project.setPostedBy(me);
        return projectRepository.save(project);
    }

    @Transactional
    public FreelanceProject updateProject(Long id, FreelanceProjectRequest req) {
        FreelanceProject project = getOwnedProject(id);
        project.setTitle(req.getTitle());
        project.setDescription(req.getDescription());
        project.setRequiredSkills(req.getRequiredSkills());
        project.setBudgetMin(req.getBudgetMin());
        project.setBudgetMax(req.getBudgetMax());
        project.setDurationDays(req.getDurationDays());
        project.setDeadlineDate(req.getDeadlineDate());
        return projectRepository.save(project);
    }

    @Transactional
    public void deleteProject(Long id) {
        FreelanceProject project = getOwnedProject(id);
        projectRepository.delete(project);
    }

    public FreelanceProject getProjectById(Long id) {
        FreelanceProject project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet non trouvé"));
        project.setBidCount(bidRepository.countByProjectId(id));
        return project;
    }

    public Page<FreelanceProject> search(String title, String skills, int page, int size) {
        return projectRepository.search(title, skills, PageRequest.of(page, size));
    }

    public Page<FreelanceProject> getMyProjects(int page, int size) {
        User me = currentUser();
        Page<FreelanceProject> projects = projectRepository.findByPostedById(me.getId(), PageRequest.of(page, size));
        projects.forEach(p -> p.setBidCount(bidRepository.countByProjectId(p.getId())));
        return projects;
    }

    // ── Bids ──────────────────────────────────────────────────────────────────

    @Transactional
    public ProjectBid submitBid(Long projectId, ProjectBidRequest req) {
        User me = currentUser();
        FreelanceProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Projet non trouvé"));
        if (project.getStatus() != ProjectStatus.OPEN) {
            throw new RuntimeException("Ce projet n'accepte plus de candidatures");
        }
        if (bidRepository.existsByProjectIdAndFreelancerId(projectId, me.getId())) {
            throw new RuntimeException("Vous avez déjà soumis une offre pour ce projet");
        }
        ProjectBid bid = new ProjectBid();
        bid.setProject(project);
        bid.setFreelancer(me);
        bid.setProposedAmount(req.getProposedAmount());
        bid.setProposedDurationDays(req.getProposedDurationDays());
        bid.setCoverLetter(req.getCoverLetter());
        return bidRepository.save(bid);
    }

    @Transactional
    public ProjectBid updateBid(Long bidId, ProjectBidRequest req) {
        ProjectBid bid = getOwnedBid(bidId);
        if (bid.getStatus() != BidStatus.PENDING && bid.getStatus() != BidStatus.NEGOTIATING) {
            throw new RuntimeException("Cette offre ne peut plus être modifiée");
        }
        bid.setProposedAmount(req.getProposedAmount());
        bid.setProposedDurationDays(req.getProposedDurationDays());
        bid.setCoverLetter(req.getCoverLetter());
        return bidRepository.save(bid);
    }

    @Transactional
    public ProjectBid negotiate(Long bidId, BidNegotiationRequest req) {
        // Client responds to a bid (counter-offer or accept/reject)
        ProjectBid bid = bidRepository.findById(bidId)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        User me = currentUser();
        if (!bid.getProject().getPostedBy().getId().equals(me.getId())) {
            throw new RuntimeException("Accès non autorisé");
        }
        bid.setStatus(req.getStatus());
        if (req.getCounterAmount() != null) bid.setCounterAmount(req.getCounterAmount());
        if (req.getCounterDurationDays() != null) bid.setCounterDurationDays(req.getCounterDurationDays());
        if (req.getNegotiationNote() != null) bid.setNegotiationNote(req.getNegotiationNote());

        // If accepted, mark project as IN_PROGRESS
        if (req.getStatus() == BidStatus.ACCEPTED) {
            bid.getProject().setStatus(ProjectStatus.IN_PROGRESS);
            projectRepository.save(bid.getProject());
        }
        return bidRepository.save(bid);
    }

    @Transactional
    public void withdrawBid(Long bidId) {
        ProjectBid bid = getOwnedBid(bidId);
        bid.setStatus(BidStatus.WITHDRAWN);
        bidRepository.save(bid);
    }

    public List<ProjectBid> getProjectBids(Long projectId) {
        // Only project owner can see all bids
        FreelanceProject project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Projet non trouvé"));
        User me = currentUser();
        if (!project.getPostedBy().getId().equals(me.getId())) {
            throw new RuntimeException("Accès non autorisé");
        }
        return bidRepository.findByProjectId(projectId);
    }

    public List<ProjectBid> getMyBids() {
        return bidRepository.findByFreelancerId(currentUser().getId());
    }

    // ── Helpers ───────────────────────────────────────────────────────────────

    private FreelanceProject getOwnedProject(Long id) {
        FreelanceProject project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet non trouvé"));
        User me = currentUser();
        if (!project.getPostedBy().getId().equals(me.getId())) {
            throw new RuntimeException("Accès non autorisé");
        }
        return project;
    }

    private ProjectBid getOwnedBid(Long id) {
        ProjectBid bid = bidRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        User me = currentUser();
        if (!bid.getFreelancer().getId().equals(me.getId())) {
            throw new RuntimeException("Accès non autorisé");
        }
        return bid;
    }
}
