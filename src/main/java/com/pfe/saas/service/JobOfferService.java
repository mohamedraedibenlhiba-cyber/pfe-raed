package com.pfe.saas.service;

import com.pfe.saas.dto.request.JobOfferRequest;
import com.pfe.saas.entity.Enterprise;
import com.pfe.saas.entity.JobOffer;
import com.pfe.saas.enums.OfferStatus;
import com.pfe.saas.repository.EnterpriseRepository;
import com.pfe.saas.repository.JobOfferRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobOfferService {

    private final JobOfferRepository jobOfferRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final NotificationService notificationService;

    @Transactional
    public JobOffer createOffer(Long enterpriseId, JobOfferRequest req) {
        Enterprise enterprise = enterpriseRepository.findById(enterpriseId)
                .orElseThrow(() -> new RuntimeException("Entreprise non trouvée"));
        JobOffer offer = new JobOffer();
        mapRequestToOffer(req, offer);
        offer.setEnterprise(enterprise);
        offer.setStatus(OfferStatus.DRAFT);
        return jobOfferRepository.save(offer);
    }

    @Transactional
    public JobOffer updateOffer(Long offerId, Long enterpriseId, JobOfferRequest req) {
        JobOffer offer = getOwnedOffer(offerId, enterpriseId);
        mapRequestToOffer(req, offer);
        return jobOfferRepository.save(offer);
    }

    @Transactional
    public JobOffer publishOffer(Long offerId, Long enterpriseId) {
        JobOffer offer = getOwnedOffer(offerId, enterpriseId);
        offer.setStatus(OfferStatus.PUBLISHED);
        return jobOfferRepository.save(offer);
    }

    @Transactional
    public JobOffer closeOffer(Long offerId, Long enterpriseId) {
        JobOffer offer = getOwnedOffer(offerId, enterpriseId);
        offer.setStatus(OfferStatus.CLOSED);
        return jobOfferRepository.save(offer);
    }

    @Transactional
    public void deleteOffer(Long offerId, Long enterpriseId) {
        JobOffer offer = getOwnedOffer(offerId, enterpriseId);
        jobOfferRepository.delete(offer);
    }

    @Transactional(readOnly = true)
    public List<JobOffer> getEnterpriseOffers(Long enterpriseId) {
        return jobOfferRepository.findByEnterpriseId(enterpriseId);
    }

    @Transactional(readOnly = true)
    public Page<JobOffer> searchPublicOffers(String title, String location, String contractType, Pageable pageable) {
        com.pfe.saas.enums.ContractType ct = null;
        if (contractType != null && !contractType.isBlank()) {
            ct = com.pfe.saas.enums.ContractType.valueOf(contractType.toUpperCase());
        }
        return jobOfferRepository.searchPublished(title, location, ct, pageable);
    }

    @Transactional(readOnly = true)
    public JobOffer getOfferByPublicToken(String token) {
        return jobOfferRepository.findByPublicToken(token)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
    }

    @Transactional(readOnly = true)
    public JobOffer getOfferById(Long id) {
        return jobOfferRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
    }

    private JobOffer getOwnedOffer(Long offerId, Long enterpriseId) {
        JobOffer offer = jobOfferRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offre non trouvée"));
        if (!offer.getEnterprise().getId().equals(enterpriseId)) {
            throw new RuntimeException("Accès non autorisé");
        }
        return offer;
    }

    private void mapRequestToOffer(JobOfferRequest req, JobOffer offer) {
        offer.setTitle(req.getTitle());
        offer.setDescription(req.getDescription());
        offer.setRequirements(req.getRequirements());
        offer.setRequiredSkills(req.getRequiredSkills());
        offer.setLocation(req.getLocation());
        offer.setRemote(req.isRemote());
        offer.setContractType(req.getContractType());
        offer.setSalaryMin(req.getSalaryMin());
        offer.setSalaryMax(req.getSalaryMax());
        offer.setExperienceRequired(req.getExperienceRequired());
        offer.setDeadlineDate(req.getDeadlineDate());
        offer.setCustomFormFields(req.getCustomFormFields());
        offer.setBrandColor(req.getBrandColor());
        offer.setBannerImage(req.getBannerImage());
        offer.setTechStack(req.getTechStack());
        offer.setExperienceLevel(req.getExperienceLevel());
        offer.setNumberOfPositions(req.getNumberOfPositions());
        offer.setBenefits(req.getBenefits());
        offer.setInterviewProcess(req.getInterviewProcess());
        offer.setStartDate(req.getStartDate());
    }
}
