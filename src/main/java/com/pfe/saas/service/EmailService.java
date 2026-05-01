package com.pfe.saas.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {
    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    @Value("${app.frontend.reset-password-url}")
    private String resetPasswordUrl;

    public void sendPasswordResetEmail(String email, String fullName, String resetToken) {
        try {
            String resetLink = resetPasswordUrl + "?token=" + resetToken;

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(email);
            helper.setSubject("Réinitialiser votre mot de passe - NeoHire");

            // HTML Content
            String htmlContent = buildEmailContent(fullName, resetLink);

            helper.setText(htmlContent, true);
            mailSender.send(message);

            log.info("Password reset email sent successfully to: {}", email);

        } catch (MessagingException e) {
            log.error("Failed to send password reset email to: {} - Error: {}", email, e.getMessage(), e);
            throw new RuntimeException("Erreur lors de l'envoi de l'email de réinitialisation");
        }
    }

    private String buildEmailContent(String fullName, String resetLink) {
        String userName = fullName != null ? fullName : "Utilisateur";

        return "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                "  <meta charset='UTF-8'>" +
                "  <style>" +
                "    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }" +
                "    .container { max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; padding: 30px; }" +
                "    .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #ff6900; padding-bottom: 20px; }" +
                "    .logo { font-size: 28px; font-weight: 900; color: #ff6900; }" +
                "    .content { background: white; padding: 30px; border-radius: 8px; }" +
                "    .greeting { font-size: 18px; font-weight: 600; color: #000; margin-bottom: 15px; }" +
                "    .message { font-size: 14px; color: #666; line-height: 1.8; margin-bottom: 25px; }" +
                "    .button { display: inline-block; background: linear-gradient(135deg, #ff6900, #fcb900); color: #000; padding: 14px 40px; text-decoration: none; border-radius: 8px; font-weight: 700; margin: 20px 0; }" +
                "    .button:hover { opacity: 0.9; }" +
                "    .warning { background: #fff8f0; border-left: 4px solid #ff6900; padding: 15px; margin: 20px 0; border-radius: 4px; }" +
                "    .warning-title { font-weight: 600; color: #ff6900; margin-bottom: 8px; }" +
                "    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }" +
                "    .expiry { color: #d97706; font-weight: 600; }" +
                "    ul { margin: 0; padding-left: 20px; }" +
                "    li { margin: 5px 0; }" +
                "    code { word-break: break-all; background: #f0f0f0; padding: 8px; border-radius: 4px; display: block; margin-top: 10px; font-size: 12px; }" +
                "  </style>" +
                "</head>" +
                "<body>" +
                "  <div class='container'>" +
                "    <div class='header'>" +
                "      <div class='logo'>NeoHire</div>" +
                "    </div>" +
                "    <div class='content'>" +
                "      <div class='greeting'>Bonjour " + userName + ",</div>" +
                "      <div class='message'>" +
                "        Nous avons reçu une demande de réinitialisation de mot de passe pour votre compte NeoHire. " +
                "        Cliquez sur le bouton ci-dessous pour créer un nouveau mot de passe." +
                "      </div>" +
                "      <center>" +
                "        <a href='" + resetLink + "' class='button'>Réinitialiser mon mot de passe</a>" +
                "      </center>" +
                "      <div class='warning'>" +
                "        <div class='warning-title'>Informations importantes</div>" +
                "        <ul>" +
                "          <li>Ce lien expire dans <span class='expiry'>24 heures</span></li>" +
                "          <li>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email</li>" +
                "          <li>Ne partagez ce lien avec personne</li>" +
                "        </ul>" +
                "      </div>" +
                "      <div class='message' style='margin-top: 20px; font-size: 12px; color: #999;'>" +
                "        Ou copiez ce lien dans votre navigateur:<br>" +
                "        <code>" + resetLink + "</code>" +
                "      </div>" +
                "    </div>" +
                "    <div class='footer'>" +
                "      <p>© 2026 NeoHire - La plateforme IA qui révolutionne le recrutement</p>" +
                "      <p>Si vous avez des questions, contactez notre support.</p>" +
                "    </div>" +
                "  </div>" +
                "</body>" +
                "</html>";
    }
}
