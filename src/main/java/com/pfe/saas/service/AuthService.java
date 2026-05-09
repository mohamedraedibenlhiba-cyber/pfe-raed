package com.pfe.saas.service;

import com.pfe.saas.dto.request.*;
import com.pfe.saas.dto.*;
import com.pfe.saas.dto.response.JwtResponse;
import com.pfe.saas.entity.*;
import com.pfe.saas.enums.Role;
import com.pfe.saas.repository.*;
import com.pfe.saas.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final CandidateRepository candidateRepository;
    private final EmailService emailService;

    public JwtResponse initializeAdmin() {
        // Delete if exists
        userRepository.findByEmail("admin@saas.com").ifPresent(userRepository::delete);

        // Create new admin
        Admin admin = new Admin();
        admin.setEmail("admin@saas.com");
        admin.setFullName("Administrateur");
        admin.setPassword(passwordEncoder.encode("Admin@1234"));
        admin.setRole(Role.ROLE_ADMIN);
        admin.setActive(true);
        admin.setVerified(true);
        admin.setAdminLevel(3);

        Admin saved = userRepository.save(admin);
        String token = tokenProvider.generateTokenFromEmail(saved.getEmail());
        return new JwtResponse(token, saved.getId(), saved.getEmail(), saved.getFullName(), saved.getRole().name());
    }

    public JwtResponse login(LoginRequest request) {
        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );
        String token = tokenProvider.generateToken(auth);
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return new JwtResponse(token, user.getId(), user.getEmail(), user.getFullName(), user.getRole().name());
    }

    @Transactional
    public JwtResponse registerEnterprise(RegisterEnterpriseRequest req) {
        if (userRepository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Cet email est déjà utilisé");
        }
        Enterprise enterprise = new Enterprise();
        enterprise.setEmail(req.getEmail());
        enterprise.setPassword(passwordEncoder.encode(req.getPassword()));
        enterprise.setFullName(req.getFullName());
        enterprise.setRole(Role.ROLE_ENTERPRISE);
        enterprise.setPhoneNumber(req.getPhoneNumber());
        enterprise.setCity(req.getCity());
        enterprise.setCountry(req.getCountry());
        enterprise.setCompanyName(req.getCompanyName());
        enterprise.setCompanyDescription(req.getCompanyDescription());
        enterprise.setCompanyWebsite(req.getCompanyWebsite());
        enterprise.setCompanySector(req.getCompanySector());
        enterprise.setCompanySize(req.getCompanySize());
        enterprise.setSiretNumber(req.getSiretNumber());
        enterprise.setVerified(true);

        Enterprise saved = enterpriseRepository.save(enterprise);

        // Send welcome email for enterprise
        emailService.sendWelcomeEmailEnterprise(saved.getEmail(), saved.getFullName(), saved.getCompanyName());

        String token = tokenProvider.generateTokenFromEmail(saved.getEmail());
        return new JwtResponse(token, saved.getId(), saved.getEmail(), saved.getFullName(), saved.getRole().name());
    }

    @Transactional
    public JwtResponse registerCandidate(RegisterCandidateRequest req) {
        if (userRepository.existsByEmail(req.getEmail())) {
            throw new RuntimeException("Cet email est déjà utilisé");
        }
        Candidate candidate = new Candidate();
        candidate.setEmail(req.getEmail());
        candidate.setPassword(passwordEncoder.encode(req.getPassword()));
        candidate.setFullName(req.getFullName());
        candidate.setRole(Role.ROLE_CANDIDATE);
        candidate.setHeadline(req.getHeadline());
        candidate.setSummary(req.getSummary());
        candidate.setSkills(req.getSkills());
        candidate.setLinkedinUrl(req.getLinkedinUrl());
        candidate.setGithubUrl(req.getGithubUrl());
        candidate.setYearsExperience(req.getYearsExperience());
        candidate.setPhoneNumber(req.getPhoneNumber());
        candidate.setCity(req.getCity());
        candidate.setCountry(req.getCountry());
        candidate.setVerified(true);

        Candidate saved = candidateRepository.save(candidate);

        // Send welcome email for candidate
        emailService.sendWelcomeEmailCandidate(saved.getEmail(), saved.getFullName());

        String token = tokenProvider.generateTokenFromEmail(saved.getEmail());
        return new JwtResponse(token, saved.getId(), saved.getEmail(), saved.getFullName(), saved.getRole().name());
    }

    @Transactional
    public void changePassword(String email, ChangePasswordRequest request) {
        // Valider que les mots de passe correspondent
        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            throw new RuntimeException("Les mots de passe ne correspondent pas");
        }

        // Vérifier que l'ancien mot de passe est correct
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        if (!passwordEncoder.matches(request.getOldPassword(), user.getPassword())) {
            throw new RuntimeException("L'ancien mot de passe est incorrect");
        }

        // Mettre à jour le mot de passe
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }

    @Transactional
    public void forgotPassword(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Cet email n'existe pas dans notre système"));

        // Générer un token unique
        String resetToken = UUID.randomUUID().toString();

        // Définir l'expiration à 24 heures à partir de maintenant
        LocalDateTime expiryTime = LocalDateTime.now().plusHours(24);

        // Mettre à jour l'utilisateur avec le token
        user.setResetToken(resetToken);
        user.setResetTokenExpiry(expiryTime);
        userRepository.save(user);

        // Envoyer l'email
        emailService.sendPasswordResetEmail(email, user.getFullName(), resetToken);
    }

    @Transactional
    public void resetPassword(String token, String newPassword) {
        // Valider le mot de passe
        if (newPassword == null || newPassword.length() < 6) {
            throw new RuntimeException("Le mot de passe doit contenir au moins 6 caractères");
        }

        // Trouver l'utilisateur par le token
        User user = userRepository.findByResetToken(token)
                .orElseThrow(() -> new RuntimeException("Lien de réinitialisation invalide"));

        // Vérifier que le token n'a pas expiré
        if (user.getResetTokenExpiry() == null || LocalDateTime.now().isAfter(user.getResetTokenExpiry())) {
            throw new RuntimeException("Lien de réinitialisation expiré. Veuillez demander un nouveau lien");
        }

        // Mettre à jour le mot de passe
        user.setPassword(passwordEncoder.encode(newPassword));
        user.setResetToken(null);
        user.setResetTokenExpiry(null);
        userRepository.save(user);
    }

    public boolean validateResetToken(String token) {
        User user = userRepository.findByResetToken(token).orElse(null);

        if (user == null) {
            return false;
        }

        // Vérifier que le token n'a pas expiré
        if (user.getResetTokenExpiry() == null || LocalDateTime.now().isAfter(user.getResetTokenExpiry())) {
            return false;
        }

        return true;
    }
}
