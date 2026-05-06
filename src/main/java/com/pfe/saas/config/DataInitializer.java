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
        try {
            var existingAdmin = userRepository.findByEmail("admin@saas.com");
            if (existingAdmin.isPresent()) {
                log.info("✓ Admin exists: admin@saas.com");
                return;
            }

            Admin admin = new Admin();
            admin.setEmail("admin@saas.com");
            admin.setFullName("Administrateur");
            admin.setPassword(passwordEncoder.encode("Admin@1234"));
            admin.setRole(Role.ROLE_ADMIN);
            admin.setActive(true);
            admin.setVerified(true);
            admin.setAdminLevel(3);

            Admin saved = userRepository.save(admin);
            log.info("✓ Admin account created successfully: admin@saas.com (ID: {})", saved.getId());
        } catch (Exception e) {
            log.error("✗ Error creating admin account", e);
        }
    }
}
