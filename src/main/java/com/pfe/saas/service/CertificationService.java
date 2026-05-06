package com.pfe.saas.service;

import com.pfe.saas.dto.request.CertificationRequest;
import com.pfe.saas.dto.response.CertificationDTO;
import com.pfe.saas.entity.Candidate;
import com.pfe.saas.entity.Certification;
import com.pfe.saas.repository.CertificationRepository;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Service for managing candidate certifications
 */
@Service
@RequiredArgsConstructor
public class CertificationService {

    private final CertificationRepository certificationRepository;
    private final UserRepository userRepository;

    /**
     * Add a new certification for a candidate
     */
    @Transactional
    public CertificationDTO addCertification(Long candidateId, CertificationRequest req) {
        var user = userRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        if (!(user instanceof Candidate)) {
            throw new RuntimeException("Seuls les candidats peuvent avoir des certifications");
        }

        Candidate candidate = (Candidate) user;

        Certification cert = new Certification();
        cert.setCandidate(candidate);
        cert.setCertificationName(req.getCertificationName());
        cert.setIssuer(req.getIssuer());
        cert.setIssueDate(req.getIssueDate());
        cert.setExpiryDate(req.getExpiryDate());
        cert.setCredentialUrl(req.getCredentialUrl());

        Certification saved = certificationRepository.save(cert);
        return mapToDTO(saved);
    }

    /**
     * Update a certification (only own certifications)
     */
    @Transactional
    public CertificationDTO updateCertification(Long certId, Long candidateId, CertificationRequest req) {
        Certification cert = certificationRepository.findById(certId)
                .orElseThrow(() -> new RuntimeException("Certification non trouvée"));

        // Verify ownership
        if (!cert.getCandidate().getId().equals(candidateId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        cert.setCertificationName(req.getCertificationName());
        cert.setIssuer(req.getIssuer());
        cert.setIssueDate(req.getIssueDate());
        cert.setExpiryDate(req.getExpiryDate());
        cert.setCredentialUrl(req.getCredentialUrl());

        Certification saved = certificationRepository.save(cert);
        return mapToDTO(saved);
    }

    /**
     * Delete a certification (only own certifications)
     */
    @Transactional
    public void deleteCertification(Long certId, Long candidateId) {
        Certification cert = certificationRepository.findById(certId)
                .orElseThrow(() -> new RuntimeException("Certification non trouvée"));

        // Verify ownership
        if (!cert.getCandidate().getId().equals(candidateId)) {
            throw new RuntimeException("Accès non autorisé");
        }

        certificationRepository.delete(cert);
    }

    /**
     * Get all certifications for a candidate (public, no auth required)
     */
    @Transactional(readOnly = true)
    public List<CertificationDTO> getCandidateCertifications(Long candidateId) {
        var user = userRepository.findById(candidateId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        if (!(user instanceof Candidate)) {
            return List.of(); // Not a candidate, no certifications
        }

        return certificationRepository
            .findByCandidateIdOrderByIssueDateDesc(candidateId)
            .stream()
            .map(this::mapToDTO)
            .collect(Collectors.toList());
    }

    /**
     * Get certifications for profile display
     * Returns limited set for embedding in profile response
     */
    @Transactional(readOnly = true)
    public List<CertificationDTO> getCertificationsForProfile(Long candidateId) {
        return getCandidateCertifications(candidateId).stream()
            .limit(5) // Show only 5 most recent on profile
            .collect(Collectors.toList());
    }

    // ── Helper methods ──────────────────────────────────────────

    private CertificationDTO mapToDTO(Certification cert) {
        return CertificationDTO.builder()
            .id(cert.getId())
            .certificationName(cert.getCertificationName())
            .issuer(cert.getIssuer())
            .issueDate(cert.getIssueDate())
            .expiryDate(cert.getExpiryDate())
            .credentialUrl(cert.getCredentialUrl())
            .expired(cert.isExpired())
            .build();
    }
}
