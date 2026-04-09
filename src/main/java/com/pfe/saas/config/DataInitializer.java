package com.pfe.saas.config;

import com.pfe.saas.entity.Admin;
import com.pfe.saas.enums.Role;
import com.pfe.saas.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements ApplicationRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(ApplicationArguments args) {
        if (userRepository.findByEmail("admin@saas.com").isEmpty()) {
            Admin admin = new Admin();
            admin.setEmail("admin@saas.com");
            admin.setFullName("Administrateur");
            admin.setPassword(passwordEncoder.encode("Admin@1234"));
            admin.setRole(Role.ROLE_ADMIN);
            admin.setActive(true);
            admin.setVerified(true);
            admin.setAdminLevel(3);
            userRepository.save(admin);
            log.info("Compte admin créé — identifiants: admin@saas.com / Admin@1234");
        }
    }
}
