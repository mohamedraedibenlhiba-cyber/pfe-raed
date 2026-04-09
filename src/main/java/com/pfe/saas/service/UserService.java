package com.pfe.saas.service;

import com.pfe.saas.dto.request.UpdateProfileRequest;
import com.pfe.saas.dto.response.UserProfileResponse;
import com.pfe.saas.entity.Candidate;
import com.pfe.saas.entity.Enterprise;
import com.pfe.saas.entity.User;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    private static final String PROFILE_UPLOAD_DIR = "uploads/profiles/";

    @Transactional(readOnly = true)
    public UserProfileResponse getProfile(String email) {
        User user = findByEmail(email);
        return toResponse(user);
    }

    @Transactional
    public UserProfileResponse updateProfile(String email, UpdateProfileRequest req) {
        User user = findByEmail(email);

        if (req.getFullName() != null)    user.setFullName(req.getFullName());
        if (req.getPhoneNumber() != null) user.setPhoneNumber(req.getPhoneNumber());
        if (req.getCity() != null)        user.setCity(req.getCity());
        if (req.getCountry() != null)     user.setCountry(req.getCountry());

        if (user instanceof Enterprise ent) {
            if (req.getCompanyName() != null)        ent.setCompanyName(req.getCompanyName());
            if (req.getCompanyDescription() != null) ent.setCompanyDescription(req.getCompanyDescription());
            if (req.getCompanyWebsite() != null)     ent.setCompanyWebsite(req.getCompanyWebsite());
            if (req.getCompanySector() != null)      ent.setCompanySector(req.getCompanySector());
            if (req.getCompanySize() != null)        ent.setCompanySize(req.getCompanySize());
            if (req.getSiretNumber() != null)        ent.setSiretNumber(req.getSiretNumber());
            if (req.getEnterpriseLinkedinUrl() != null) ent.setLinkedinUrl(req.getEnterpriseLinkedinUrl());
        }

        if (user instanceof Candidate cand) {
            if (req.getHeadline() != null)        cand.setHeadline(req.getHeadline());
            if (req.getSummary() != null)         cand.setSummary(req.getSummary());
            if (req.getLinkedinUrl() != null)     cand.setLinkedinUrl(req.getLinkedinUrl());
            if (req.getGithubUrl() != null)       cand.setGithubUrl(req.getGithubUrl());
            if (req.getPortfolioUrl() != null)    cand.setPortfolioUrl(req.getPortfolioUrl());
            if (req.getYearsExperience() != null) cand.setYearsExperience(req.getYearsExperience());
            if (req.getSkills() != null)          cand.setSkills(req.getSkills());
            if (req.getLanguages() != null)       cand.setLanguages(req.getLanguages());
            if (req.getEducation() != null)       cand.setEducation(req.getEducation());
            if (req.getOpenToWork() != null)      cand.setOpenToWork(req.getOpenToWork());
            if (req.getDesiredSalary() != null)   cand.setDesiredSalary(req.getDesiredSalary());
        }

        return toResponse(userRepository.save(user));
    }

    @Transactional
    public UserProfileResponse uploadProfilePicture(String email, MultipartFile file) throws IOException {
        User user = findByEmail(email);

        Path dir = Paths.get(PROFILE_UPLOAD_DIR + user.getId());
        Files.createDirectories(dir);

        String ext = "";
        String originalName = file.getOriginalFilename();
        if (originalName != null && originalName.contains(".")) {
            ext = originalName.substring(originalName.lastIndexOf('.'));
        }
        String filename = UUID.randomUUID() + ext;
        Path dest = dir.resolve(filename);
        Files.copy(file.getInputStream(), dest, StandardCopyOption.REPLACE_EXISTING);

        user.setProfilePicture("/api/users/me/profile-picture/" + user.getId() + "/" + filename);
        return toResponse(userRepository.save(user));
    }

    @Transactional(readOnly = true)
    public byte[] serveProfilePicture(Long userId, String filename) throws IOException {
        Path path = Paths.get(PROFILE_UPLOAD_DIR + userId + "/" + filename);
        return Files.readAllBytes(path);
    }

    // ── Private helpers ─────────────────────────────────────────────

    private User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }

    private UserProfileResponse toResponse(User user) {
        UserProfileResponse.UserProfileResponseBuilder b = UserProfileResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .fullName(user.getFullName())
                .phoneNumber(user.getPhoneNumber())
                .profilePicture(user.getProfilePicture())
                .city(user.getCity())
                .country(user.getCountry())
                .role(user.getRole().name());

        if (user instanceof Enterprise ent) {
            b.companyName(ent.getCompanyName())
             .companyDescription(ent.getCompanyDescription())
             .companyLogo(ent.getCompanyLogo())
             .companyWebsite(ent.getCompanyWebsite())
             .companySector(ent.getCompanySector())
             .companySize(ent.getCompanySize())
             .siretNumber(ent.getSiretNumber())
             .enterpriseLinkedinUrl(ent.getLinkedinUrl())
             .premium(ent.isPremium());
        }

        if (user instanceof Candidate cand) {
            b.headline(cand.getHeadline())
             .summary(cand.getSummary())
             .linkedinUrl(cand.getLinkedinUrl())
             .githubUrl(cand.getGithubUrl())
             .portfolioUrl(cand.getPortfolioUrl())
             .yearsExperience(cand.getYearsExperience())
             .skills(cand.getSkills())
             .languages(cand.getLanguages())
             .education(cand.getEducation())
             .openToWork(cand.isOpenToWork())
             .desiredSalary(cand.getDesiredSalary());
        }

        return b.build();
    }
}
