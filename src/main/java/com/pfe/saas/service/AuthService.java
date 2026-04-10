package com.pfe.saas.service;

import com.pfe.saas.dto.request.*;
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

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final EnterpriseRepository enterpriseRepository;
    private final CandidateRepository candidateRepository;

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
        Enterprise saved = enterpriseRepository.save(enterprise);
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
        Candidate saved = candidateRepository.save(candidate);
        String token = tokenProvider.generateTokenFromEmail(saved.getEmail());
        return new JwtResponse(token, saved.getId(), saved.getEmail(), saved.getFullName(), saved.getRole().name());
    }
}
