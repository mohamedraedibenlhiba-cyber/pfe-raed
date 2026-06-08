package com.pfe.saas.service;

import com.pfe.saas.enums.ApplicationStatus;
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

    @Value("${app.frontend.url:http://localhost:4200}")
    private String frontendUrl;

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

    public void sendWelcomeEmailEnterprise(String email, String fullName, String companyName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(email);
            helper.setSubject("Bienvenue sur NeoHire - Plateforme de recrutement IA");

            String htmlContent = buildWelcomeEmailEnterpriseContent(fullName, companyName);
            helper.setText(htmlContent, true);
            mailSender.send(message);

            log.info("Welcome email sent successfully to enterprise: {}", email);

        } catch (MessagingException e) {
            log.error("Failed to send welcome email to: {} - Error: {}", email, e.getMessage(), e);
            throw new RuntimeException("Erreur lors de l'envoi de l'email de bienvenue");
        }
    }

    public void sendWelcomeEmailCandidate(String email, String fullName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(email);
            helper.setSubject("Bienvenue sur NeoHire - Votre plateforme de carrière");

            String htmlContent = buildWelcomeEmailCandidateContent(fullName);
            helper.setText(htmlContent, true);
            mailSender.send(message);

            log.info("Welcome email sent successfully to candidate: {}", email);

        } catch (MessagingException e) {
            log.error("Failed to send welcome email to: {} - Error: {}", email, e.getMessage(), e);
            throw new RuntimeException("Erreur lors de l'envoi de l'email de bienvenue");
        }
    }

    public void sendReclamationResolvedEmail(String email, String fullName, String subject, String adminResponse) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(email);
            helper.setSubject("Votre réclamation a été traitée - NeoHire");

            String htmlContent = buildReclamationResolvedEmailContent(fullName, subject, adminResponse);
            helper.setText(htmlContent, true);
            mailSender.send(message);

            log.info("Reclamation resolved email sent successfully to: {}", email);

        } catch (MessagingException e) {
            log.error("Failed to send reclamation email to: {} - Error: {}", email, e.getMessage(), e);
            throw new RuntimeException("Erreur lors de l'envoi de l'email de réclamation");
        }
    }


    // ══════════════════════════════════════════════════════════════════════════
    //  EMAILS ENTRETIENS
    // ══════════════════════════════════════════════════════════════════════════

    public void sendInterviewInvitationEmail(
            String email, String candidateName, String companyName, String jobTitle,
            java.time.LocalDateTime scheduledAt, Integer durationMinutes,
            String type, String meetingLink, String location) {
        sendHtmlEmail(email,
            "Invitation à un entretien — " + jobTitle + " · NeoHire",
            buildInterviewInvitationHtml(candidateName, companyName, jobTitle, scheduledAt, durationMinutes, type, meetingLink, location));
    }

    public void sendInterviewConfirmedEmail(
            String email, String recipientName, String candidateName,
            String jobTitle, java.time.LocalDateTime scheduledAt, String note) {
        sendHtmlEmail(email,
            candidateName + " a confirmé l'entretien — NeoHire",
            buildInterviewConfirmedHtml(recipientName, candidateName, jobTitle, scheduledAt, note));
    }

    public void sendInterviewCancelledEmail(
            String email, String recipientName, String jobTitle,
            java.time.LocalDateTime scheduledAt, String reason) {
        sendHtmlEmail(email,
            "Entretien annulé — " + jobTitle + " · NeoHire",
            buildInterviewCancelledHtml(recipientName, jobTitle, scheduledAt, reason));
    }

    public void sendInterviewReminderEmail(
            String email, String recipientName, String otherPartyName, String jobTitle,
            java.time.LocalDateTime scheduledAt, String type, String meetingLink, String location) {
        sendHtmlEmail(email,
            "Rappel : entretien demain — " + jobTitle + " · NeoHire",
            buildInterviewReminderHtml(recipientName, otherPartyName, jobTitle, scheduledAt, type, meetingLink, location));
    }

    private void sendHtmlEmail(String to, String subject, String html) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");
            helper.setFrom(fromEmail);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(html, true);
            mailSender.send(message);
        } catch (MessagingException e) {
            log.error("Échec envoi email '{}' à {} : {}", subject, to, e.getMessage());
        }
    }

    private String buildInterviewInvitationHtml(String candidateName, String companyName, String jobTitle,
            java.time.LocalDateTime scheduledAt, Integer durationMinutes, String type, String meetingLink, String location) {
        java.time.format.DateTimeFormatter fmt = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy 'à' HH:mm");
        String typeLabel = switch (type) {
            case "VIDEO" -> "📹 Visioconférence";
            case "PHONE" -> "📞 Téléphone";
            default -> "🏢 Présentiel";
        };
        String locationBlock = (type.equals("VIDEO") && meetingLink != null && !meetingLink.isBlank())
            ? "<a href='" + meetingLink + "' style='display:inline-block;background:linear-gradient(135deg,#f97316,#fcb900);color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;margin:16px 0;'>Rejoindre la réunion</a>"
            : (!type.equals("VIDEO") && location != null ? "<p>📍 Lieu : <strong>" + location + "</strong></p>" : "");

        return emailBase("Invitation à un entretien 📅", """
            <p>Bonjour <strong>""" + candidateName + """
            </strong>,</p>
            <p><strong>""" + companyName + """
            </strong> vous invite à un entretien pour le poste de <strong>""" + jobTitle + """
            </strong>.</p>
            <div style='background:#f8fafc;border-left:4px solid #f97316;padding:16px;border-radius:6px;margin:20px 0;'>
              <p><strong>📅 Date :</strong> """ + scheduledAt.format(fmt) + """
              </p>
              <p><strong>⏱️ Durée :</strong> """ + durationMinutes + """
               minutes</p>
              <p><strong>🎯 Type :</strong> """ + typeLabel + """
              </p>
            </div>
            """ + locationBlock + """
            <p style='color:#64748b;font-size:13px;'>Connectez-vous sur NeoHire pour confirmer ou contacter le recruteur.</p>
            """);
    }

    private String buildInterviewConfirmedHtml(String recipientName, String candidateName,
            String jobTitle, java.time.LocalDateTime scheduledAt, String note) {
        java.time.format.DateTimeFormatter fmt = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy 'à' HH:mm");
        String noteBlock = (note != null && !note.isBlank())
            ? "<div style='background:#f0fdf4;border-left:4px solid #4ade80;padding:12px;border-radius:6px;margin:12px 0;'><strong>Message du candidat :</strong><br>" + note + "</div>"
            : "";
        return emailBase("Entretien confirmé ✅", """
            <p>Bonjour <strong>""" + recipientName + """
            </strong>,</p>
            <p><strong>""" + candidateName + """
            </strong> a confirmé l'entretien prévu le <strong>""" + scheduledAt.format(fmt) + """
            </strong> pour le poste de <strong>""" + jobTitle + """
            </strong>.</p>
            """ + noteBlock + """
            <p style='color:#64748b;font-size:13px;'>Consultez les détails dans votre tableau de bord NeoHire.</p>
            """);
    }

    private String buildInterviewCancelledHtml(String recipientName, String jobTitle,
            java.time.LocalDateTime scheduledAt, String reason) {
        java.time.format.DateTimeFormatter fmt = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy 'à' HH:mm");
        String reasonBlock = (reason != null && !reason.isBlank())
            ? "<div style='background:#fef2f2;border-left:4px solid #f87171;padding:12px;border-radius:6px;margin:12px 0;'><strong>Motif :</strong> " + reason + "</div>"
            : "";
        return emailBase("Entretien annulé ❌", """
            <p>Bonjour <strong>""" + recipientName + """
            </strong>,</p>
            <p>L'entretien du <strong>""" + scheduledAt.format(fmt) + """
            </strong> pour le poste de <strong>""" + jobTitle + """
            </strong> a été annulé.</p>
            """ + reasonBlock + """
            <p style='color:#64748b;font-size:13px;'>Rendez-vous sur NeoHire pour reprogrammer si nécessaire.</p>
            """);
    }

    private String buildInterviewReminderHtml(String recipientName, String otherPartyName, String jobTitle,
            java.time.LocalDateTime scheduledAt, String type, String meetingLink, String location) {
        java.time.format.DateTimeFormatter fmt = java.time.format.DateTimeFormatter.ofPattern("dd/MM/yyyy 'à' HH:mm");
        String typeLabel = switch (type) { case "VIDEO" -> "📹 Visioconférence"; case "PHONE" -> "📞 Téléphone"; default -> "🏢 Présentiel"; };
        String link = (type.equals("VIDEO") && meetingLink != null && !meetingLink.isBlank())
            ? "<a href='" + meetingLink + "' style='display:inline-block;background:linear-gradient(135deg,#f97316,#fcb900);color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;margin:16px 0;'>Rejoindre la réunion</a>"
            : (!type.equals("VIDEO") && location != null ? "<p>📍 Lieu : <strong>" + location + "</strong></p>" : "");
        return emailBase("Rappel entretien demain 🔔", """
            <p>Bonjour <strong>""" + recipientName + """
            </strong>,</p>
            <p>Rappel : votre entretien avec <strong>""" + otherPartyName + """
            </strong> pour le poste de <strong>""" + jobTitle + """
            </strong> a lieu <strong>demain</strong>.</p>
            <div style='background:#f8fafc;border-left:4px solid #f97316;padding:16px;border-radius:6px;margin:20px 0;'>
              <p><strong>📅 Date :</strong> """ + scheduledAt.format(fmt) + """
              </p>
              <p><strong>🎯 Type :</strong> """ + typeLabel + """
              </p>
            </div>
            """ + link + """
            <p style='color:#64748b;font-size:13px;'>Bonne chance ! L'équipe NeoHire.</p>
            """);
    }

    private String emailBase(String title, String bodyContent) {
        return "<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body style='font-family:Segoe UI,sans-serif;color:#333;'>" +
            "<div style='max-width:600px;margin:0 auto;background:#f9f9f9;border-radius:10px;padding:30px;'>" +
            "<div style='text-align:center;border-bottom:3px solid #f97316;padding-bottom:16px;margin-bottom:24px;'>" +
            "<span style='font-size:26px;font-weight:900;color:#f97316;'>NeoHire</span>" +
            "</div>" +
            "<div style='background:#fff;padding:28px;border-radius:8px;'>" +
            "<h2 style='margin:0 0 16px;color:#0f172a;font-size:18px;'>" + title + "</h2>" +
            bodyContent +
            "</div>" +
            "<p style='text-align:center;font-size:11px;color:#94a3b8;margin-top:24px;'>© 2026 NeoHire</p>" +
            "</div></body></html>";
    }

    private String buildVerificationEmailContent(String fullName, String verificationLink) {
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
                "  </style>" +
                "</head>" +
                "<body>" +
                "  <div class='container'>" +
                "    <div class='header'>" +
                "      <div class='logo'>NeoHire</div>" +
                "    </div>" +
                "    <div class='content'>" +
                "      <div class='greeting'>Bienvenue " + userName + " ! 🎉</div>" +
                "      <p>Merci de vous être inscrit sur NeoHire!</p>" +
                "    </div>" +
                "  </div>" +
                "</body>" +
                "</html>";
    }

    private String buildWelcomeEmailEnterpriseContent(String fullName, String companyName) {
        String userName = fullName != null ? fullName : "Entreprise";

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
                "    .greeting { font-size: 20px; font-weight: 600; color: #000; margin-bottom: 20px; }" +
                "    .section { margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 4px solid #ff6900; border-radius: 4px; }" +
                "    .section-title { font-weight: 600; color: #ff6900; margin-bottom: 10px; font-size: 16px; }" +
                "    .message { font-size: 14px; color: #666; line-height: 1.8; }" +
                "    ul { margin: 10px 0; padding-left: 20px; }" +
                "    li { margin: 8px 0; font-size: 14px; }" +
                "    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }" +
                "  </style>" +
                "</head>" +
                "<body>" +
                "  <div class='container'>" +
                "    <div class='header'>" +
                "      <div class='logo'>NeoHire</div>" +
                "    </div>" +
                "    <div class='content'>" +
                "      <div class='greeting'>Bienvenue " + userName + " ! 🎯</div>" +
                "      <div class='message'>" +
                "        Bienvenue sur <strong>NeoHire</strong>, la plateforme IA révolutionnaire pour le recrutement.<br>" +
                "        Nous sommes ravis d'accueillir <strong>" + companyName + "</strong> parmi nos partenaires." +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>📊 Vos avantages en tant qu'Entreprise :</div>" +
                "        <ul>" +
                "          <li><strong>Analyse IA avancée :</strong> Nos algorithmes analysent les candidatures pour vous proposer les meilleurs profils</li>" +
                "          <li><strong>Gestion simplifiée :</strong> Tableaux de bord intuitifs pour gérer vos offres et candidats</li>" +
                "          <li><strong>Pool de talents :</strong> Accédez à une base de plus de 10 000 candidats qualifiés</li>" +
                "          <li><strong>Communication directe :</strong> Système de messagerie intégré avec les candidats</li>" +
                "          <li><strong>Analytics et rapports :</strong> Suivez vos recrutements avec des statistiques détaillées</li>" +
                "        </ul>" +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>🚀 Prochaines étapes :</div>" +
                "        <ul>" +
                "          <li>Complétez votre profil d'entreprise</li>" +
                "          <li>Publiez votre première offre d'emploi</li>" +
                "          <li>Explorez les candidats correspondants</li>" +
                "          <li>Lancez votre campagne de recrutement</li>" +
                "        </ul>" +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>💡 Besoin d'aide ?</div>" +
                "        <div class='message'>" +
                "          Notre équipe de support est disponible pour vous aider. N'hésitez pas à nous contacter via l'interface NeoHire." +
                "        </div>" +
                "      </div>" +
                "    </div>" +
                "    <div class='footer'>" +
                "      <p>© 2026 NeoHire - La plateforme IA qui révolutionne le recrutement</p>" +
                "    </div>" +
                "  </div>" +
                "</body>" +
                "</html>";
    }

    private String buildWelcomeEmailCandidateContent(String fullName) {
        String userName = fullName != null ? fullName : "Candidat";

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
                "    .greeting { font-size: 20px; font-weight: 600; color: #000; margin-bottom: 20px; }" +
                "    .section { margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 4px solid #ff6900; border-radius: 4px; }" +
                "    .section-title { font-weight: 600; color: #ff6900; margin-bottom: 10px; font-size: 16px; }" +
                "    .message { font-size: 14px; color: #666; line-height: 1.8; }" +
                "    ul { margin: 10px 0; padding-left: 20px; }" +
                "    li { margin: 8px 0; font-size: 14px; }" +
                "    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }" +
                "  </style>" +
                "</head>" +
                "<body>" +
                "  <div class='container'>" +
                "    <div class='header'>" +
                "      <div class='logo'>NeoHire</div>" +
                "    </div>" +
                "    <div class='content'>" +
                "      <div class='greeting'>Bienvenue " + userName + " ! 🌟</div>" +
                "      <div class='message'>" +
                "        Bienvenue sur <strong>NeoHire</strong>, votre plateforme de carrière alimentée par l'IA.<br>" +
                "        Nous sommes heureux de vous aider à trouver votre prochaine opportunité professionnelle." +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>💼 Vos avantages en tant que Candidat :</div>" +
                "        <ul>" +
                "          <li><strong>Matching intelligent :</strong> Recevez des offres d'emploi adaptées à votre profil</li>" +
                "          <li><strong>Profil complet :</strong> Mettez en avant vos compétences et votre expérience</li>" +
                "          <li><strong>Application facile :</strong> Postulez aux offres en un clic</li>" +
                "          <li><strong>Suivi en temps réel :</strong> Suivez l'évolution de vos candidatures</li>" +
                "          <li><strong>Réseau professionnel :</strong> Connectez-vous avec d'autres professionnels et entreprises</li>" +
                "          <li><strong>Analyse de candidature :</strong> Recevez des feedbacks alimentés par l'IA</li>" +
                "        </ul>" +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>🎯 Comment commencer :</div>" +
                "        <ul>" +
                "          <li>Complétez votre profil avec vos compétences et expérience</li>" +
                "          <li>Téléchargez votre CV et portfolios</li>" +
                "          <li>Parcourez les offres d'emploi disponibles</li>" +
                "          <li>Commencez à postuler aux positions qui vous intéressent</li>" +
                "        </ul>" +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>📞 Besoin d'aide ?</div>" +
                "        <div class='message'>" +
                "          Consultez notre centre d'aide ou contactez notre support via l'interface NeoHire. Nous sommes là pour vous !" +
                "        </div>" +
                "      </div>" +
                "    </div>" +
                "    <div class='footer'>" +
                "      <p>© 2026 NeoHire - La plateforme IA qui révolutionne le recrutement</p>" +
                "    </div>" +
                "  </div>" +
                "</body>" +
                "</html>";
    }

    private String buildReclamationResolvedEmailContent(String fullName, String subject, String adminResponse) {
        String userName = fullName != null ? fullName : "Utilisateur";

        return "<!DOCTYPE html>" +
                "<html>" +
                "<head>" +
                "  <meta charset='UTF-8'>" +
                "  <style>" +
                "    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }" +
                "    .container { max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; padding: 30px; }" +
                "    .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #4caf50; padding-bottom: 20px; }" +
                "    .logo { font-size: 28px; font-weight: 900; color: #ff6900; }" +
                "    .content { background: white; padding: 30px; border-radius: 8px; }" +
                "    .greeting { font-size: 20px; font-weight: 600; color: #4caf50; margin-bottom: 20px; }" +
                "    .status-badge { background: #e8f5e9; border-left: 4px solid #4caf50; padding: 15px; border-radius: 4px; margin: 20px 0; }" +
                "    .badge-title { font-weight: 600; color: #4caf50; margin-bottom: 5px; }" +
                "    .section { margin: 20px 0; padding: 15px; background: #f5f5f5; border-left: 4px solid #ff6900; border-radius: 4px; }" +
                "    .section-title { font-weight: 600; color: #ff6900; margin-bottom: 10px; }" +
                "    .message { font-size: 14px; color: #666; line-height: 1.8; }" +
                "    .response-box { background: #fff9e6; border-left: 4px solid #ff6900; padding: 15px; margin: 15px 0; border-radius: 4px; }" +
                "    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }" +
                "  </style>" +
                "</head>" +
                "<body>" +
                "  <div class='container'>" +
                "    <div class='header'>" +
                "      <div class='logo'>NeoHire</div>" +
                "    </div>" +
                "    <div class='content'>" +
                "      <div class='greeting'>✅ Votre réclamation a été traitée</div>" +
                "      <div class='message'>" +
                "        Bonjour " + userName + ",<br><br>" +
                "        Nous sommes heureux de vous informer que votre réclamation a été examinée et traitée par notre équipe d'administration." +
                "      </div>" +
                "      <div class='status-badge'>" +
                "        <div class='badge-title'>📋 Sujet de la réclamation :</div>" +
                "        <div style='font-size: 14px; color: #333;'>" + subject + "</div>" +
                "      </div>" +
                "      <div class='response-box'>" +
                "        <div class='section-title'>📝 Réponse de l'administrateur :</div>" +
                "        <div class='message'>" + adminResponse + "</div>" +
                "      </div>" +
                "      <div class='section'>" +
                "        <div class='section-title'>Prochaines étapes :</div>" +
                "        <div class='message'>" +
                "          Si vous avez d'autres questions ou préoccupations, n'hésitez pas à nous contacter via l'interface NeoHire." +
                "        </div>" +
                "      </div>" +
                "    </div>" +
                "    <div class='footer'>" +
                "      <p>© 2026 NeoHire - La plateforme IA qui révolutionne le recrutement</p>" +
                "      <p>Merci de nous aider à améliorer NeoHire</p>" +
                "    </div>" +
                "  </div>" +
                "</body>" +
                "</html>";
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

    public void sendApplicationStatusEmail(String email, String fullName, String jobTitle,
                                           String jobLocation, ApplicationStatus status, String enterpriseName) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            helper.setFrom(fromEmail);
            helper.setTo(email);

            String subject = getApplicationStatusSubject(status);
            helper.setSubject(subject + " - NeoHire");

            String htmlContent = buildApplicationStatusEmailContent(fullName, jobTitle, jobLocation, status, enterpriseName);
            helper.setText(htmlContent, true);

            mailSender.send(message);
            log.info("Application status email sent successfully to: {} for status: {}", email, status.name());
        } catch (MessagingException e) {
            log.error("Failed to send application status email to: {} - Error: {}", email, e.getMessage(), e);
        }
    }

    private String getApplicationStatusSubject(ApplicationStatus status) {
        return switch (status) {
            case PENDING -> "Candidature enregistrée";
            case REVIEWED -> "Candidature examinée";
            case AI_ANALYZED -> "Analyse IA complétée";
            case SHORTLISTED -> "Vous êtes sélectionné !";
            case INTERVIEW -> "Entretien prévu";
            case ACCEPTED -> "Félicitations !";
            case REJECTED -> "Suite à votre candidature";
        };
    }

    private String buildApplicationStatusEmailContent(String fullName, String jobTitle, String jobLocation,
                                                     ApplicationStatus status, String enterpriseName) {
        String userName = fullName != null ? fullName : "Candidat";
        String greeting = getGreetingMessage(status);
        String mainMessage = getMainMessage(status, jobTitle, enterpriseName);
        String actionText = getActionText(status);

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
                "    .title { font-size: 16px; font-weight: 700; color: #ff6900; margin: 20px 0 10px 0; }" +
                "    .message { font-size: 14px; color: #666; line-height: 1.8; margin-bottom: 15px; }" +
                "    .job-info { background: #f5f5f5; padding: 15px; border-radius: 6px; margin: 15px 0; border-left: 4px solid #ff6900; }" +
                "    .job-info-item { margin: 8px 0; font-size: 14px; }" +
                "    .button { display: inline-block; background: linear-gradient(135deg, #ff6900, #fcb900); color: #000; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin: 15px 0; }" +
                "    .button:hover { opacity: 0.9; }" +
                "    .info-box { background: #f9f3e6; border-left: 4px solid #ff6900; padding: 15px; margin: 15px 0; border-radius: 4px; }" +
                "    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #999; border-top: 1px solid #eee; padding-top: 20px; }" +
                "  </style>" +
                "</head>" +
                "<body>" +
                "  <div class='container'>" +
                "    <div class='header'>" +
                "      <div class='logo'>NeoHire</div>" +
                "    </div>" +
                "    <div class='content'>" +
                "      <div class='greeting'>Bonjour " + userName + ",</div>" +
                "      <div class='title'>" + greeting + "</div>" +
                "      <div class='message'>" + mainMessage + "</div>" +
                "      <div class='job-info'>" +
                "        <div class='job-info-item'><strong>Poste :</strong> " + jobTitle + "</div>" +
                "        <div class='job-info-item'><strong>Entreprise :</strong> " + enterpriseName + "</div>" +
                (jobLocation != null && !jobLocation.isEmpty() ?
                "        <div class='job-info-item'><strong>Localisation :</strong> " + jobLocation + "</div>" : "") +
                "      </div>" +
                (getStatusSpecificContent(status, enterpriseName)) +
                "      <center>" +
                "        <a href='" + frontendUrl + "/candidate/applications' class='button'>" + actionText + "</a>" +
                "      </center>" +
                "      <div class='info-box'>" +
                "        <div style='font-weight: 600; margin-bottom: 8px;'>💡 Besoin d'aide ?</div>" +
                "        <div style='font-size: 13px;'>Consultez votre profil candidat et les détails de cette candidature dans votre espace NeoHire.</div>" +
                "      </div>" +
                "    </div>" +
                "    <div class='footer'>" +
                "      <p>© 2026 NeoHire - La plateforme IA qui révolutionne le recrutement</p>" +
                "    </div>" +
                "  </div>" +
                "</body>" +
                "</html>";
    }

    private String getGreetingMessage(ApplicationStatus status) {
        return switch (status) {
            case PENDING -> "Votre candidature a été enregistrée";
            case REVIEWED -> "Votre candidature est en examen";
            case AI_ANALYZED -> "Analyse IA de votre candidature";
            case SHORTLISTED -> "Bonne nouvelle ! Vous êtes sélectionné";
            case INTERVIEW -> "Entretien prévu";
            case ACCEPTED -> "Félicitations ! Vous êtes accepté";
            case REJECTED -> "Merci pour votre intérêt";
        };
    }

    private String getMainMessage(ApplicationStatus status, String jobTitle, String enterpriseName) {
        return switch (status) {
            case PENDING -> "Nous avons bien reçu votre candidature pour le poste de " + jobTitle +
                           " chez " + enterpriseName + ". Nous examinerons votre profil prochainement.";
            case REVIEWED -> "Votre candidature pour le poste de " + jobTitle +
                           " a été examinée par le recruteur de " + enterpriseName +
                           ". Nous vous tenons informé de l'évolution de votre candidature.";
            case AI_ANALYZED -> "L'analyse IA de votre candidature pour le poste de " + jobTitle +
                              " chez " + enterpriseName + " a été complétée. Vous avez montré des compétences pertinentes.";
            case SHORTLISTED -> "Nous sommes heureux de vous informer que vous avez été sélectionné parmi les candidats pour le poste de " + jobTitle +
                              " chez " + enterpriseName + ". Les prochaines étapes vous seront communiquées prochainement.";
            case INTERVIEW -> "Vous êtes convié à un entretien pour le poste de " + jobTitle +
                            " chez " + enterpriseName + ". L'équipe vous contactera pour fixer une date.";
            case ACCEPTED -> "Excellentes nouvelles ! Nous sommes ravi de vous offrir le poste de " + jobTitle +
                           " chez " + enterpriseName + ". Les détails de l'offre suivront très bientôt.";
            case REJECTED -> "Merci de votre intérêt pour le poste de " + jobTitle +
                           " chez " + enterpriseName + ". Malheureusement, nous avons décidé de poursuivre avec d'autres candidats. " +
                           "Nous vous encourageons à postuler pour d'autres opportunités sur notre plateforme.";
        };
    }

    private String getActionText(ApplicationStatus status) {
        return switch (status) {
            case PENDING -> "Consulter ma candidature";
            case REVIEWED -> "Voir les détails";
            case AI_ANALYZED -> "Voir l'analyse";
            case SHORTLISTED -> "Confirmer ma participation";
            case INTERVIEW -> "Voir les détails";
            case ACCEPTED -> "Consulter l'offre";
            case REJECTED -> "Voir d'autres offres";
        };
    }

    private String getStatusSpecificContent(ApplicationStatus status, String enterpriseName) {
        return switch (status) {
            case SHORTLISTED ->
                "<div class='info-box'>" +
                "  <div style='font-weight: 600; margin-bottom: 8px;'>✨ Prochaines étapes</div>" +
                "  <div style='font-size: 13px;'>Préparez-vous pour les prochaines étapes du processus de recrutement. " +
                "  L'équipe de " + enterpriseName + " vous contactera très bientôt.</div>" +
                "</div>";
            case INTERVIEW ->
                "<div class='info-box'>" +
                "  <div style='font-weight: 600; margin-bottom: 8px;'>📞 À bientôt</div>" +
                "  <div style='font-size: 13px;'>Assurez-vous d'être joignable. L'équipe de recrutement vous contactera " +
                "  pour organiser votre entretien.</div>" +
                "</div>";
            case ACCEPTED ->
                "<div class='info-box'>" +
                "  <div style='font-weight: 600; margin-bottom: 8px;'>🎉 Bienvenue</div>" +
                "  <div style='font-size: 13px;'>Nous sommes ravi de vous avoir dans notre équipe. " +
                "  Consultez les détails de votre nouvelle position dans votre espace candidat.</div>" +
                "</div>";
            default -> "";
        };
    }
}
