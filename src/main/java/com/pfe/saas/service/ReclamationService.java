package com.pfe.saas.service;

import com.pfe.saas.dto.request.ReclamationRequest;
import com.pfe.saas.dto.request.ReclamationResponseRequest;
import com.pfe.saas.entity.Reclamation;
import com.pfe.saas.entity.User;
import com.pfe.saas.enums.ReclamationStatus;
import com.pfe.saas.repository.ReclamationRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReclamationService {

    private final ReclamationRepository reclamationRepository;
    private final UserRepository userRepository;

    private User currentUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }

    @Transactional
    public Reclamation create(ReclamationRequest req) {
        User user = currentUser();
        Reclamation r = Reclamation.builder()
                .user(user)
                .type(req.getType())
                .subject(req.getSubject())
                .description(req.getDescription())
                .status(ReclamationStatus.OPEN)
                .referenceId(req.getReferenceId())
                .referenceType(req.getReferenceType())
                .build();
        return reclamationRepository.save(r);
    }

    public List<Reclamation> getMyReclamations() {
        return reclamationRepository.findByUserId(currentUser().getId());
    }

    public Page<Reclamation> getAll(int page, int size) {
        return reclamationRepository.findAllByOrderByCreatedAtDesc(
                PageRequest.of(page, size));
    }

    public Page<Reclamation> getByStatus(ReclamationStatus status, int page, int size) {
        return reclamationRepository.findByStatusOrderByCreatedAtDesc(
                status, PageRequest.of(page, size));
    }

    public Reclamation getById(Long id) {
        return reclamationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Réclamation non trouvée"));
    }

    @Transactional
    public Reclamation respond(Long id, ReclamationResponseRequest req) {
        User admin = currentUser();
        Reclamation r = getById(id);
        r.setStatus(req.getStatus());
        r.setAdminResponse(req.getAdminResponse());
        r.setHandledByAdmin(admin);
        if (req.getStatus() == ReclamationStatus.RESOLVED || req.getStatus() == ReclamationStatus.CLOSED) {
            r.setResolvedAt(LocalDateTime.now());
        }
        return reclamationRepository.save(r);
    }

    public long countByStatus(ReclamationStatus status) {
        return reclamationRepository.countByStatus(status);
    }
}
