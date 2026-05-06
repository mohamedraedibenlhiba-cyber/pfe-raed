package com.pfe.saas.service;

import com.pfe.saas.dto.request.UpdateProfileRequest;
import com.pfe.saas.dto.response.UserProfileResponse;
import com.pfe.saas.dto.response.PublicProfileResponse;
import com.pfe.saas.dto.response.ConnectionStatusResponse;
import com.pfe.saas.dto.response.PostSummaryDTO;
import com.pfe.saas.dto.response.UserSearchResponse;
import com.pfe.saas.entity.Candidate;
import com.pfe.saas.entity.ConnectionRequest;
import com.pfe.saas.entity.Enterprise;
import com.pfe.saas.entity.User;
import com.pfe.saas.entity.Post;
import com.pfe.saas.enums.Role;
import com.pfe.saas.repository.ConnectionRequestRepository;
import com.pfe.saas.repository.UserRepository;
import com.pfe.saas.repository.FollowRepository;
import com.pfe.saas.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final FollowRepository followRepository;  // ✨ NOUVEAU
    private final ConnectionRequestRepository connectionRequestRepository;
    private final ConnectionRequestService connectionRequestService;
    private final CertificationService certificationService;  // ✨ NEW
    private final PostRepository postRepository;  // ✨ NEW

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
        // Validation: éviter la traversée de répertoires (path traversal)
        if (filename == null || filename.isEmpty() || filename.contains("..") || filename.contains("/")) {
            throw new IllegalArgumentException("Nom de fichier invalide");
        }

        Path baseDir = Paths.get(PROFILE_UPLOAD_DIR + userId).toAbsolutePath();
        Path filePath = baseDir.resolve(filename).toAbsolutePath();

        // Vérifier que le fichier est bien dans le répertoire autorisé
        if (!filePath.startsWith(baseDir)) {
            throw new IllegalArgumentException("Accès refusé: chemin invalide");
        }

        // Vérifier que le fichier existe
        if (!Files.exists(filePath)) {
            throw new FileNotFoundException("Image de profil non trouvée");
        }

        return Files.readAllBytes(filePath);
    }

    // ✨ ──────────────────────────────────────────────────────────────
    // ✨ NOUVEAUX: Profil PUBLIC et Statut de Connexion
    // ✨ ──────────────────────────────────────────────────────────────

    /**
     * Récupère le profil PUBLIC d'un utilisateur
     * (Visible à n'importe qui, sans authentification)
     */
    @Transactional(readOnly = true)
    public PublicProfileResponse getPublicProfile(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        // Récupérer les stats de suivi
        long followersCount = followRepository.countByFollowingId(userId);
        long followingCount = followRepository.countByFollowerId(userId);

        return mapToPublicProfile(user, followersCount, followingCount);
    }

    /**
     * Récupère le statut de connexion entre deux utilisateurs
     * (Utilisé pour afficher les boutons "Suivre", "Envoyer message", etc.)
     */
    @Transactional(readOnly = true)
    public ConnectionStatusResponse getConnectionStatus(Long userId, Long currentUserId) {
        RelationshipState relationship = resolveRelationshipState(currentUserId, userId);
        User otherUser = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        // Vérifiez les deux sens du follow
        boolean isFollowedByMe = followRepository.existsByFollowerIdAndFollowingId(currentUserId, userId);
        boolean isFollowingMe = followRepository.existsByFollowerIdAndFollowingId(userId, currentUserId);

        // Vérifiez si on peut se envoyer des messages
        boolean canMessage = connectionRequestService.canMessage(currentUserId, userId);

        // Stats
        long followersCount = followRepository.countByFollowingId(userId);
        long followingCount = followRepository.countByFollowerId(userId);

        return ConnectionStatusResponse.builder()
                .isFollowedByMe(isFollowedByMe)
                .isFollowingMe(isFollowingMe)
                .canMessage(canMessage)
                .connectionRequestStatus(relationship.connectionStatus)
                .requestId(relationship.requestId)
                .requestDirection(relationship.requestDirection)
                .followersCount(followersCount)
                .followingCount(followingCount)
                .build();
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

    // ✨ ──────────────────────────────────────────────────────────────
    // ✨ Mapper pour Profil PUBLIC
    // ✨ ──────────────────────────────────────────────────────────────

    private PublicProfileResponse mapToPublicProfile(User user, long followersCount, long followingCount) {
        PublicProfileResponse.PublicProfileResponseBuilder b = PublicProfileResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .role(user.getRole().name())
                .profilePicture(user.getProfilePicture())
                .city(user.getCity())
                .country(user.getCountry())
                .phoneNumber(user.getPhoneNumber())
                .followersCount(followersCount)
                .followingCount(followingCount);

        // Infos spécifiques Candidat
        if (user instanceof Candidate cand) {
            b.headline(cand.getHeadline())
             .summary(cand.getSummary())
             .skills(cand.getSkills())
             .yearsExperience(cand.getYearsExperience())
             .education(cand.getEducation())
             .languages(cand.getLanguages())
             .linkedinUrl(cand.getLinkedinUrl())
             .githubUrl(cand.getGithubUrl())
             .portfolioUrl(cand.getPortfolioUrl())
             .openToWork(cand.isOpenToWork())
             .desiredSalary(cand.getDesiredSalary())
             // ✨ Add certifications for candidates
             .certifications(certificationService.getCertificationsForProfile(user.getId()));
        }

        // Infos spécifiques Entreprise
        if (user instanceof Enterprise ent) {
            b.companyName(ent.getCompanyName())
             .companyDescription(ent.getCompanyDescription())
             .companyWebsite(ent.getCompanyWebsite())
             .companySector(ent.getCompanySector())
             .companySize(ent.getCompanySize())
             .premium(ent.isPremium());
        }

        // ✨ Add posts stats for all users
        List<Post> userPosts = postRepository.findByAuthorId(
            user.getId(), PageRequest.of(0, 5)).getContent();
        long postCount = postRepository.countByAuthorId(user.getId());

        List<PostSummaryDTO> postSummaries = userPosts.stream()
                .map(post -> PostSummaryDTO.builder()
                        .id(post.getId())
                        .contentPreview(post.getContent().length() > 200
                                ? post.getContent().substring(0, 200) + "..."
                                : post.getContent())
                        .createdAt(post.getCreatedAt().toString())
                        .commentCount(post.getCommentCount())
                        .reactionCount(post.getReactionCount())
                        .build())
                .collect(Collectors.toList());

        b.postCount(postCount)
         .recentPosts(postSummaries.isEmpty() ? null : postSummaries);

        return b.build();
    }

    // ✨ ──────────────────────────────────────────────────────────────
    // ✨ Recherche d'utilisateurs
    // ✨ ──────────────────────────────────────────────────────────────

    /**
     * Cherche des utilisateurs avec filtres et pagination
     */
    @Transactional(readOnly = true)
    public Page<UserSearchResponse> searchUsers(String query, List<Role> roles, Long currentUserId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<User> users = userRepository.search(query, roles, currentUserId, pageable);

        List<UserSearchResponse> responses = users.stream()
                .map(user -> mapToSearchResponse(user, currentUserId))
                .collect(Collectors.toList());

        return new PageImpl<>(responses, pageable, users.getTotalElements());
    }

    /**
     * Convertit un User en UserSearchResponse avec statut de connexion
     */
    private UserSearchResponse mapToSearchResponse(User user, Long currentUserId) {
        RelationshipState relationship = resolveRelationshipState(currentUserId, user.getId());
        boolean canMessage = connectionRequestService.canMessage(currentUserId, user.getId());

        UserSearchResponse.UserSearchResponseBuilder b = UserSearchResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .role(user.getRole().name())
                .profilePicture(user.getProfilePicture())
                .city(user.getCity())
                .canMessage(canMessage)
                .connectionStatus(relationship.connectionStatus)
                .requestId(relationship.requestId)
                .requestDirection(relationship.requestDirection);

        // Infos Candidat
        if (user instanceof Candidate cand) {
            b.headline(cand.getHeadline())
             .skills(cand.getSkills())
             .openToWork(cand.isOpenToWork());
        }

        // Infos Entreprise
        if (user instanceof Enterprise ent) {
            b.companyName(ent.getCompanyName())
             .companyDescription(ent.getCompanyDescription());
        }

        return b.build();
    }

    private RelationshipState resolveRelationshipState(Long currentUserId, Long otherUserId) {
        return connectionRequestRepository
                .findBySenderIdAndReceiverId(currentUserId, otherUserId)
                .map(RelationshipState::outgoing)
                .or(() -> connectionRequestRepository
                        .findBySenderIdAndReceiverId(otherUserId, currentUserId)
                        .map(RelationshipState::incoming))
                .orElseGet(RelationshipState::none);
    }

    private static final class RelationshipState {
        private final String connectionStatus;
        private final Long requestId;
        private final String requestDirection;

        private RelationshipState(String connectionStatus, Long requestId, String requestDirection) {
            this.connectionStatus = connectionStatus;
            this.requestId = requestId;
            this.requestDirection = requestDirection;
        }

        private static RelationshipState outgoing(ConnectionRequest request) {
            return new RelationshipState(request.getStatus().name(), request.getId(), "OUTGOING");
        }

        private static RelationshipState incoming(ConnectionRequest request) {
            return new RelationshipState(request.getStatus().name(), request.getId(), "INCOMING");
        }

        private static RelationshipState none() {
            return new RelationshipState("NONE", null, "NONE");
        }
    }
}
