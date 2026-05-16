import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';

interface AssistantAction {
  label: string;
  route: string;
  icon?: string;
}

interface AssistantMessage {
  role: 'assistant' | 'user';
  text: string;
  actions?: AssistantAction[];
  suggestions?: string[];
  timestamp: Date;
}

@Component({
  selector: 'app-project-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './project-chatbot.component.html',
  styleUrls: ['./project-chatbot.component.scss']
})
export class ProjectChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef<HTMLDivElement>;

  readonly panelOpen = signal(false);

  messages: AssistantMessage[] = [];
  draft = '';
  thinking = false;

  private shouldScrollToBottom = false;
  private lastTopic: string | null = null;

  constructor(
    public readonly auth: AuthService,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.resetConversation();
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  get isEnterprise(): boolean {
    return this.auth.isEnterprise;
  }

  get roleLabel(): string {
    return this.isEnterprise ? 'Entreprise' : 'Candidat';
  }

  get quickPrompts(): string[] {
    return this.isEnterprise
      ? ["Comment publier une offre ?", "Voir les candidatures", "Comment fonctionne l'IA ?", "Section freelance"]
      : ["Comment postuler ?", "Gérer mes CV", "Suivre mes candidatures", "Section freelance"];
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  }

  renderText(text: string): SafeHtml {
    const html = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  autoResize(event: Event): void {
    const ta = event.target as HTMLTextAreaElement;
    ta.style.height = 'auto';
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px';
  }

  togglePanel(): void {
    this.panelOpen.update(v => !v);
    if (this.panelOpen()) this.shouldScrollToBottom = true;
  }

  closePanel(): void {
    this.panelOpen.set(false);
  }

  resetConversation(): void {
    this.draft = '';
    this.thinking = false;
    this.lastTopic = null;
    this.messages = [this.buildWelcomeMessage()];
    this.shouldScrollToBottom = true;
  }

  ask(prompt: string): void {
    this.sendPrompt(prompt);
  }

  handleComposerKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendPrompt();
    }
  }

  sendPrompt(prompt = this.draft): void {
    const text = prompt.trim();
    if (!text || this.thinking) return;

    this.messages = [...this.messages, { role: 'user', text, timestamp: new Date() }];
    this.draft = '';
    this.thinking = true;
    this.shouldScrollToBottom = true;

    const response = this.buildResponse(text);
    const delay = Math.min(400 + response.text.length * 2.5, 1400);

    setTimeout(() => {
      this.messages = [...this.messages, response];
      this.thinking = false;
      this.shouldScrollToBottom = true;
    }, delay);
  }

  openRoute(route: string): void {
    this.router.navigateByUrl(route);
    this.panelOpen.set(false);
  }

  userInitials(): string {
    return this.auth.currentUser?.fullName
      ?.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase() || 'U';
  }

  // ── Private helpers ──────────────────────────────────────────────────────

  private scrollToBottom(): void {
    try {
      const el = this.messagesContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    } catch {}
  }

  private buildWelcomeMessage(): AssistantMessage {
    const firstName = this.auth.currentUser?.fullName?.split(' ')[0] || '';
    const greeting = firstName ? ` **${firstName}**` : '';

    const enterpriseText = `Bonjour${greeting} 👋\n\nJe suis l'assistant **NeoHire**. Je peux vous guider sur :\n• Gestion des offres et candidatures\n• Analyse IA des profils\n• Messagerie et réseau\n• Freelance et réclamations`;
    const candidateText = `Bonjour${greeting} 👋\n\nJe suis l'assistant **NeoHire**. Je peux vous aider sur :\n• Recherche d'offres et candidatures\n• Gestion de vos CV\n• Messagerie et réseau\n• Freelance et réclamations`;

    return {
      role: 'assistant',
      text: this.isEnterprise ? enterpriseText : candidateText,
      suggestions: this.quickPrompts,
      timestamp: new Date()
    };
  }

  private buildResponse(prompt: string): AssistantMessage {
    const p = this.normalize(prompt);

    if (this.matches(p, ['bonjour', 'salut', 'hello', 'bonsoir', 'coucou', 'hi', 'yo'])) {
      return { ...this.buildWelcomeMessage(), text: `Bonjour 😊 Comment puis-je vous aider aujourd'hui ?`, timestamp: new Date() };
    }

    if (this.matches(p, ['merci', 'thanks', 'super', 'parfait', 'nickel', 'top', 'genial', 'c est bon', 'ok merci'])) {
      this.lastTopic = null;
      return { role: 'assistant', text: `Avec plaisir ! N'hésitez pas si vous avez d'autres questions sur NeoHire. 😊`, suggestions: this.quickPrompts, timestamp: new Date() };
    }

    if (this.matches(p, ['au revoir', 'aurevoir', 'bye', 'a bientot', 'ciao', 'a+', 'bonne journee'])) {
      this.lastTopic = null;
      return { role: 'assistant', text: `À bientôt ! Bonne utilisation de **NeoHire**. 👋`, timestamp: new Date() };
    }

    if (this.matches(p, ['plateforme', 'neohire', 'module', 'fonctionnalite', 'presentation', 'que fais', 'que puis', 'aider', 'aide', 'comment utiliser'])) {
      this.lastTopic = 'platform';
      return this.platformAnswer();
    }

    if (this.matches(p, ['ia', 'score', 'analyse', 'intelligence artificielle', 'algorithme', 'matching', 'scoring', 'automatique', 'critere'])) {
      this.lastTopic = 'ai';
      return this.aiAnswer();
    }

    if (this.matches(p, ['messagerie', 'message', 'chat', 'conversation', 'discuter', 'envoyer', 'discussion', 'parler'])) {
      this.lastTopic = 'messaging';
      return this.messagingAnswer();
    }

    if (this.matches(p, ['feed', 'actualite', 'publication', 'post', 'publier', 'partager', 'fil', 'reseau social', 'article'])) {
      this.lastTopic = 'feed';
      return this.feedAnswer();
    }

    if (this.matches(p, ['freelance', 'mission', 'independant', 'encheres', 'bid', 'appel offre', 'appel a projet'])) {
      this.lastTopic = 'freelance';
      return this.freelanceAnswer();
    }

    if (this.matches(p, ['reclamation', 'probleme', 'support', 'incident', 'bug', 'erreur', 'signaler', 'plainte'])) {
      this.lastTopic = 'reclamation';
      return this.reclamationAnswer();
    }

    if (this.matches(p, ['connexion', 'reseau', 'amis', 'contact', 'demande de connexion', 'connecter', 'suivre', 'follower', 'relation', 'follow'])) {
      this.lastTopic = 'connection';
      return this.connectionAnswer();
    }

    if (this.matches(p, ['notification', 'alerte', 'cloche', 'badge', 'avertissement'])) {
      this.lastTopic = 'notifications';
      return this.notificationAnswer();
    }

    if (this.matches(p, ['profil', 'compte', 'parametres', 'photo', 'informations personnelles', 'modifier mon'])) {
      this.lastTopic = 'profile';
      return this.profileAnswer();
    }

    if (this.isEnterprise) {
      if (this.matches(p, ['candidature', 'candidat', 'recrutement', 'applications', 'cv recu', 'tri', 'selectionner', 'dossier'])) {
        this.lastTopic = 'enterprise-applications';
        return this.enterpriseApplicationsAnswer();
      }
      if (this.matches(p, ['offre', 'publier offre', 'annonce', 'poste', 'cree offre', 'nouvelle offre', 'job', 'emploi', 'creer'])) {
        this.lastTopic = 'enterprise-offers';
        return this.enterpriseOffersAnswer();
      }
      if (this.matches(p, ['dashboard', 'tableau de bord', 'statistique', 'stats', 'chiffre', 'apercu'])) {
        this.lastTopic = 'dashboard';
        return this.enterpriseDashboardAnswer();
      }
    } else {
      if (this.matches(p, ['cv', 'resume', 'curriculum', 'telecharger', 'uploader', 'fichier pdf'])) {
        this.lastTopic = 'cv';
        return this.candidateCvAnswer();
      }
      if (this.matches(p, ['candidature', 'postuler', 'emploi', 'offre', 'recherche', 'chercher', 'trouver', 'rechercher'])) {
        this.lastTopic = 'candidate-applications';
        return this.candidateApplicationsAnswer();
      }
      if (this.matches(p, ['certification', 'diplome', 'formation', 'badge'])) {
        this.lastTopic = 'certification';
        return this.certificationAnswer();
      }
      if (this.matches(p, ['dashboard', 'tableau de bord', 'accueil', 'statistique'])) {
        this.lastTopic = 'dashboard';
        return this.candidateDashboardAnswer();
      }
    }

    if (this.lastTopic) return this.contextualFallback(this.lastTopic);
    return this.fallbackAnswer();
  }

  // ── Answer builders ──────────────────────────────────────────────────────

  private platformAnswer(): AssistantMessage {
    if (this.isEnterprise) {
      return {
        role: 'assistant',
        text: 'NeoHire centralise tout votre processus de recrutement :\n\n• **Offres** — Créez et publiez des annonces\n• **Candidatures** — Suivez les dossiers avec scoring IA\n• **Messagerie** — Communiquez directement avec les candidats\n• **Feed** — Publiez vos actualités\n• **Freelance** — Lancez des appels à projets\n• **Réclamations** — Signalez tout incident',
        actions: [
          this.link('Tableau de bord', '/enterprise/dashboard', 'dashboard'),
          this.link('Mes offres', '/enterprise/offers', 'work'),
          this.link('Messagerie', '/enterprise/messages', 'chat')
        ],
        suggestions: ["Publier une offre", "Voir les candidatures", "Comment fonctionne l'IA ?"],
        timestamp: new Date()
      };
    }
    return {
      role: 'assistant',
      text: 'NeoHire vous accompagne tout au long de votre recherche d\'emploi :\n\n• **Offres** — Explorez et postulez aux annonces\n• **Candidatures** — Suivez vos dossiers en temps réel\n• **CV** — Gérez vos fichiers\n• **Messagerie** — Échangez avec les recruteurs\n• **Feed** — Restez visible et actif\n• **Freelance** — Proposez vos services',
      actions: [
        this.link('Chercher des offres', '/candidate/search', 'search'),
        this.link('Mes candidatures', '/candidate/applications', 'assignment'),
        this.link('Mes CV', '/candidate/cvs', 'description')
      ],
      suggestions: ['Comment postuler ?', 'Gérer mes CV', 'Suivre mes candidatures'],
      timestamp: new Date()
    };
  }

  private enterpriseOffersAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Pour créer une offre d\'emploi :\n\n1. Ouvrez **Mes offres** → **Nouvelle offre**\n2. Renseignez : titre, description, compétences requises, tech stack\n3. Choisissez le type de contrat, salaire, localisation\n4. Publiez directement ou enregistrez en brouillon\n\n💡 **Conseil** : des compétences bien listées améliorent le scoring IA des candidatures reçues.',
      actions: [
        this.link('Mes offres', '/enterprise/offers', 'work'),
        this.link('Créer une offre', '/enterprise/offers/new', 'add_circle')
      ],
      suggestions: ["Voir les candidatures", "Comment fonctionne l'IA ?", 'Utiliser la messagerie'],
      timestamp: new Date()
    };
  }

  private enterpriseApplicationsAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Pour consulter et gérer les candidatures :\n\n1. Allez dans **Mes offres** et ouvrez une annonce\n2. Cliquez sur **Candidatures** pour voir les dossiers\n3. Consultez le **score IA** (0–100) pour prioriser\n4. Changez le statut : Accepté, Refusé, En attente\n5. Contactez directement via la **messagerie**\n\n📊 Le score IA analyse : compétences (40%), tech stack (15%), expérience (30%), localisation (10%).',
      actions: [
        this.link('Mes offres', '/enterprise/offers', 'work'),
        this.link('Tableau de bord', '/enterprise/dashboard', 'dashboard')
      ],
      suggestions: ["Comment fonctionne l'IA ?", "Publier une offre", 'Utiliser la messagerie'],
      timestamp: new Date()
    };
  }

  private enterpriseDashboardAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Votre **tableau de bord entreprise** affiche :\n\n• Statistiques de vos offres actives\n• Nombre de candidatures reçues\n• Activité récente et notifications\n• Accès rapide à tous les modules\n\nC\'est votre point de départ pour piloter votre recrutement.',
      actions: [
        this.link('Tableau de bord', '/enterprise/dashboard', 'dashboard'),
        this.link('Mes offres', '/enterprise/offers', 'work')
      ],
      suggestions: ["Voir les candidatures", "Publier une offre", "Comment fonctionne l'IA ?"],
      timestamp: new Date()
    };
  }

  private candidateApplicationsAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Pour postuler à une offre :\n\n1. Ouvrez **Rechercher des offres**\n2. Filtrez par lieu, contrat ou compétences\n3. Ouvrez une annonce et cliquez **Postuler**\n4. Joignez votre CV et envoyez\n5. Suivez l\'avancement dans **Mes candidatures**\n\n💡 Un profil complet et un CV à jour améliorent votre **score IA** auprès des recruteurs.',
      actions: [
        this.link('Rechercher des offres', '/candidate/search', 'search'),
        this.link('Mes candidatures', '/candidate/applications', 'assignment')
      ],
      suggestions: ['Gérer mes CV', "Comment fonctionne l'IA ?", 'Mon profil'],
      timestamp: new Date()
    };
  }

  private candidateCvAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La section **Mes CV** vous permet de :\n\n• Téléverser plusieurs CVs (PDF recommandé)\n• Définir un **CV principal** visible aux recruteurs\n• Supprimer les versions obsolètes\n• Consulter vos fichiers à tout moment\n\n💡 Gardez votre CV à jour et aligné avec les offres que vous ciblez pour un meilleur score IA.',
      actions: [
        this.link('Mes CV', '/candidate/cvs', 'description'),
        this.link('Mon profil', '/candidate/profile', 'person')
      ],
      suggestions: ['Comment postuler ?', 'Suivre mes candidatures', 'Mon profil'],
      timestamp: new Date()
    };
  }

  private candidateDashboardAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Votre **tableau de bord candidat** affiche :\n\n• Résumé de vos candidatures récentes\n• Offres correspondant à votre profil\n• Notifications et messages non lus\n• Accès rapide à toutes les sections',
      actions: [
        this.link('Tableau de bord', '/candidate/dashboard', 'dashboard'),
        this.link('Rechercher des offres', '/candidate/search', 'search')
      ],
      suggestions: ['Comment postuler ?', 'Gérer mes CV', 'Suivre mes candidatures'],
      timestamp: new Date()
    };
  }

  private certificationAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Les **certifications** enrichissent votre profil :\n\n• Ajoutez diplômes, certifications et formations\n• Chaque entrée peut inclure : nom, organisme, date et URL de vérification\n• Visibles sur votre profil public\n\n💡 Des certifications pertinentes renforcent votre dossier de candidature.',
      actions: [
        this.link('Mon profil', '/candidate/profile', 'person'),
        this.link('Mes CV', '/candidate/cvs', 'description')
      ],
      suggestions: ['Comment postuler ?', 'Gérer mes CV', "Comment fonctionne l'IA ?"],
      timestamp: new Date()
    };
  }

  private aiAnswer(): AssistantMessage {
    if (this.isEnterprise) {
      return {
        role: 'assistant',
        text: "L'analyse IA calcule un **score de compatibilité** (0 à 100) pour chaque candidature :\n\n🎯 **Compétences** — 40%\n💻 **Tech stack** — 15%\n📈 **Niveau d'expérience** — 15%\n🗓️ **Années d'expérience** — 15%\n📍 **Localisation** — 10%\n📄 **Type de contrat** — 5%\n\nCe score vous aide à prioriser les dossiers avant revue humaine.",
        actions: [
          this.link('Mes offres', '/enterprise/offers', 'work'),
          this.link('Tableau de bord', '/enterprise/dashboard', 'dashboard')
        ],
        suggestions: ["Voir les candidatures", "Publier une offre", 'Utiliser la messagerie'],
        timestamp: new Date()
      };
    }
    return {
      role: 'assistant',
      text: "L'IA de NeoHire compare votre profil aux offres en analysant :\n\n• Vos **compétences** vs celles requises\n• Votre **niveau et années d'expérience**\n• Votre **localisation** et type de contrat souhaité\n\n💡 Pour optimiser votre score :\n1. Complétez toutes les sections de votre profil\n2. Listez vos compétences avec précision\n3. Maintenez un CV à jour",
      actions: [
        this.link('Mon profil', '/candidate/profile', 'person'),
        this.link('Mes CV', '/candidate/cvs', 'description')
      ],
      suggestions: ['Comment postuler ?', 'Gérer mes CV', 'Suivre mes candidatures'],
      timestamp: new Date()
    };
  }

  private messagingAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La **messagerie NeoHire** vous permet de :\n\n• Envoyer des messages directs avec fichiers joints\n• Réagir aux messages avec des emojis\n• Éditer ou supprimer vos messages\n• Voir les conversations non lues\n\n⚠️ **Important** : Candidats et entreprises doivent accepter mutuellement une **demande de connexion** avant de pouvoir correspondre.',
      actions: [
        this.link('Messagerie', this.baseRoute('messages'), 'chat'),
        this.link('Tableau de bord', this.baseRoute('dashboard'), 'dashboard')
      ],
      suggestions: ["Comment gérer les connexions ?", "Qu'est-ce que le feed ?", 'Section freelance'],
      timestamp: new Date()
    };
  }

  private feedAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Le **feed NeoHire** est le fil d\'actualité professionnel de la plateforme :\n\n• Publiez actualités, projets ou partages\n• Joignez images et fichiers à vos posts\n• Commentez et réagissez aux publications\n• Suivez des utilisateurs pour personnaliser votre fil\n\n💡 Pour les entreprises, c\'est un excellent outil de **marque employeur**.',
      actions: [
        this.link('Actualités', this.baseRoute('feed'), 'dynamic_feed'),
        this.link('Messagerie', this.baseRoute('messages'), 'chat')
      ],
      suggestions: ["Gérer les connexions", 'Section freelance', 'Utiliser la messagerie'],
      timestamp: new Date()
    };
  }

  private freelanceAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La section **Freelance** de NeoHire :\n\n**Publier un projet** :\n• Créez un appel à projet avec budget et délai\n• Recevez des offres (bids) de freelances\n• Négociez directement les termes\n\n**Proposer ses services** :\n• Parcourez les projets disponibles\n• Soumettez une offre avec votre tarif\n• Gérez vos propositions en cours',
      actions: [
        this.link('Section Freelance', this.baseRoute('freelance'), 'work_outline'),
        this.link('Tableau de bord', this.baseRoute('dashboard'), 'dashboard')
      ],
      suggestions: ["Comment fonctionne l'IA ?", 'Utiliser la messagerie', 'Feed actualités'],
      timestamp: new Date()
    };
  }

  private reclamationAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La page **Réclamations** vous permet de :\n\n• Soumettre un signalement ou incident\n• Choisir le type : technique, contenu, autre\n• Suivre l\'état : Ouvert → En cours → Résolu\n• Consulter les réponses de l\'équipe\n\n📋 Décrivez votre problème avec précision pour un traitement plus rapide.',
      actions: [
        this.link('Mes réclamations', this.baseRoute('reclamations'), 'report_problem'),
        this.link('Mon profil', this.baseRoute('profile'), 'person')
      ],
      suggestions: ['Utiliser la messagerie', 'Gérer les connexions', 'Section freelance'],
      timestamp: new Date()
    };
  }

  private connectionAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Le système de **connexions NeoHire** vous permet de :\n\n• Envoyer et accepter des demandes de connexion\n• Suivre des entreprises ou candidats (follow)\n• Accéder à la messagerie une fois connectés\n• Voir les connexions mutuelles sur les profils\n\n💡 Les demandes en attente s\'affichent via l\'icône 🔗 dans la barre supérieure.',
      actions: [
        this.link('Tableau de bord', this.baseRoute('dashboard'), 'dashboard'),
        this.link('Messagerie', this.baseRoute('messages'), 'chat')
      ],
      suggestions: ['Utiliser la messagerie', 'Feed actualités', "Qu'est-ce que NeoHire ?"],
      timestamp: new Date()
    };
  }

  private profileAnswer(): AssistantMessage {
    const enterpriseDetails = '• Informations entreprise : nom, secteur, taille, description\n• Logo et liens (site web, LinkedIn)\n• Offres d\'emploi publiées\n• Projets freelance postés';
    const candidateDetails = '• Compétences, langues, formation, expérience\n• Photo de profil et headline\n• Liens : GitHub, LinkedIn, portfolio\n• Certifications et CVs\n• Statut "Ouvert aux opportunités"';

    return {
      role: 'assistant',
      text: `Votre **profil NeoHire** est votre vitrine :\n\n${this.isEnterprise ? enterpriseDetails : candidateDetails}\n\n💡 Un profil complet améliore votre visibilité et votre score dans les résultats de recherche.`,
      actions: [
        this.link('Mon profil', this.baseRoute('profile'), 'person'),
        this.link('Tableau de bord', this.baseRoute('dashboard'), 'dashboard')
      ],
      suggestions: this.isEnterprise
        ? ["Publier une offre", "Comment fonctionne l'IA ?", 'Utiliser la messagerie']
        : ['Gérer mes CV', 'Comment postuler ?', 'Suivre mes candidatures'],
      timestamp: new Date()
    };
  }

  private notificationAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Les **notifications NeoHire** vous alertent en temps réel pour :\n\n• 💬 Nouveau message reçu\n• 📄 Candidature mise à jour\n• 🤖 Analyse IA terminée\n• ❤️ Réaction sur vos publications\n• 🔗 Demande de connexion reçue\n\nL\'icône 🔔 dans la barre supérieure affiche le compteur non lu.',
      actions: [
        this.link('Tableau de bord', this.baseRoute('dashboard'), 'dashboard'),
        this.link('Messagerie', this.baseRoute('messages'), 'chat')
      ],
      suggestions: ['Gérer les connexions', 'Utiliser la messagerie', "Qu'est-ce que NeoHire ?"],
      timestamp: new Date()
    };
  }

  private contextualFallback(topic: string): AssistantMessage {
    const topicLabels: Record<string, string> = {
      ai: "l'analyse IA", messaging: 'la messagerie', feed: 'le feed',
      freelance: 'le freelance', reclamation: 'les réclamations',
      connection: 'les connexions', profile: 'le profil', cv: 'les CV',
      'enterprise-offers': 'les offres', 'enterprise-applications': 'les candidatures',
      'candidate-applications': 'les candidatures', platform: 'NeoHire',
      notifications: 'les notifications', dashboard: 'le tableau de bord',
      certification: 'les certifications'
    };
    return {
      role: 'assistant',
      text: `Pouvez-vous préciser votre question sur ${topicLabels[topic] || 'ce sujet'} ? Je peux aussi vous orienter vers une autre section.`,
      suggestions: this.quickPrompts,
      timestamp: new Date()
    };
  }

  private fallbackAnswer(): AssistantMessage {
    const enterpriseText = "Je n'ai pas bien compris. Voici ce sur quoi je peux vous aider :\n\n• Publier et gérer des **offres d'emploi**\n• Consulter et analyser les **candidatures**\n• Comprendre l'**analyse IA**\n• **Messagerie**, feed, freelance et réclamations";
    const candidateText = "Je n'ai pas bien compris. Voici ce sur quoi je peux vous aider :\n\n• Rechercher et postuler à des **offres**\n• Gérer vos **CV** et votre profil\n• Comprendre l'**analyse IA**\n• **Messagerie**, feed, freelance et réclamations";
    return {
      role: 'assistant',
      text: this.isEnterprise ? enterpriseText : candidateText,
      actions: [
        this.link('Tableau de bord', this.baseRoute('dashboard'), 'dashboard'),
        this.link('Mon profil', this.baseRoute('profile'), 'person')
      ],
      suggestions: this.quickPrompts,
      timestamp: new Date()
    };
  }

  private baseRoute(segment: string): string {
    return `${this.isEnterprise ? '/enterprise' : '/candidate'}/${segment}`;
  }

  private link(label: string, route: string, icon = 'arrow_forward'): AssistantAction {
    return { label, route, icon };
  }

  private matches(prompt: string, keywords: string[]): boolean {
    return keywords.some(kw => prompt.includes(this.normalize(kw)));
  }

  private normalize(value: string): string {
    return value.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }
}
