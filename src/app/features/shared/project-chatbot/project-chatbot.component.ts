import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';

interface AssistantAction {
  label: string;
  route: string;
}

interface AssistantMessage {
  role: 'assistant' | 'user';
  text: string;
  actions?: AssistantAction[];
  suggestions?: string[];
}

@Component({
  selector: 'app-project-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './project-chatbot.component.html',
  styleUrls: ['./project-chatbot.component.scss']
})
export class ProjectChatbotComponent implements OnInit {
  readonly panelOpen = signal(false);

  messages: AssistantMessage[] = [];
  draft = '';
  thinking = false;

  constructor(
    public readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.resetConversation();
  }

  get isEnterprise(): boolean {
    return this.auth.isEnterprise;
  }

  get roleLabel(): string {
    return this.isEnterprise ? 'Entreprise' : 'Candidat';
  }

  get quickPrompts(): string[] {
    return this.isEnterprise
      ? [
          'Comment publier une offre ?',
          'Comment voir les candidatures ?',
          'Comment fonctionne l IA ?',
          'Ou trouver les reclamations ?'
        ]
      : [
          'Comment postuler ?',
          'Ou gerer mes CV ?',
          'Comment suivre mes candidatures ?',
          'Que puis-je faire sur NeoHire ?'
        ];
  }

  togglePanel(): void {
    this.panelOpen.update(value => !value);
  }

  closePanel(): void {
    this.panelOpen.set(false);
  }

  resetConversation(): void {
    this.draft = '';
    this.thinking = false;
    this.messages = [this.buildWelcomeMessage()];
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
    const cleanedPrompt = prompt.trim();
    if (!cleanedPrompt || this.thinking) return;

    this.messages = [...this.messages, { role: 'user', text: cleanedPrompt }];
    this.draft = '';
    this.thinking = true;

    const response = this.buildResponse(cleanedPrompt);
    setTimeout(() => {
      this.messages = [...this.messages, response];
      this.thinking = false;
    }, 260);
  }

  openRoute(route: string): void {
    this.router.navigateByUrl(route);
    this.panelOpen.set(false);
  }

  userInitials(): string {
    return this.auth.currentUser?.fullName?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || 'U';
  }

  private buildWelcomeMessage(): AssistantMessage {
    const firstName = this.auth.currentUser?.fullName?.split(' ')[0] || 'NeoHire';

    if (this.isEnterprise) {
      return {
        role: 'assistant',
        text: `Bonjour ${firstName}. Je suis l assistant NeoHire. Je peux vous guider sur les offres, les candidatures, l analyse IA, la messagerie, le feed, le freelance, les reclamations et le fonctionnement general de votre projet.`,
        suggestions: this.quickPrompts
      };
    }

    return {
      role: 'assistant',
      text: `Bonjour ${firstName}. Je suis l assistant NeoHire. Je peux vous aider a chercher des offres, suivre vos candidatures, gerer vos CV, utiliser la messagerie, explorer le freelance et comprendre les services de la plateforme.`,
      suggestions: this.quickPrompts
    };
  }

  private buildResponse(prompt: string): AssistantMessage {
    const normalizedPrompt = this.normalize(prompt);

    if (this.matches(normalizedPrompt, ['plateforme', 'projet', 'neohire', 'module', 'fonctionnalite'])) {
      return this.platformAnswer();
    }

    if (this.matches(normalizedPrompt, ['ia', 'score', 'analyse', 'intelligence artificielle'])) {
      return this.aiAnswer();
    }

    if (this.matches(normalizedPrompt, ['messagerie', 'message', 'chat', 'conversation'])) {
      return this.messagingAnswer();
    }

    if (this.matches(normalizedPrompt, ['feed', 'actualite', 'publication', 'post'])) {
      return this.feedAnswer();
    }

    if (this.matches(normalizedPrompt, ['freelance', 'mission', 'projet freelance'])) {
      return this.freelanceAnswer();
    }

    if (this.matches(normalizedPrompt, ['reclamation', 'probleme', 'support', 'incident'])) {
      return this.reclamationAnswer();
    }

    if (this.matches(normalizedPrompt, ['connexion', 'reseau', 'amis', 'contact'])) {
      return this.connectionAnswer();
    }

    if (this.matches(normalizedPrompt, ['profil', 'compte'])) {
      return this.profileAnswer();
    }

    if (this.isEnterprise && this.matches(normalizedPrompt, ['candidature', 'candidat', 'recrutement', 'applications'])) {
      return this.enterpriseApplicationsAnswer();
    }

    if (this.isEnterprise && this.matches(normalizedPrompt, ['offre', 'publier', 'annonce', 'poste'])) {
      return this.enterpriseOffersAnswer();
    }

    if (!this.isEnterprise && this.matches(normalizedPrompt, ['cv', 'resume', 'curriculum'])) {
      return this.candidateCvAnswer();
    }

    if (!this.isEnterprise && this.matches(normalizedPrompt, ['candidature', 'postuler', 'emploi', 'offre'])) {
      return this.candidateApplicationsAnswer();
    }

    return this.fallbackAnswer();
  }

  private platformAnswer(): AssistantMessage {
    if (this.isEnterprise) {
      return {
        role: 'assistant',
        text: 'NeoHire centralise le recrutement, les offres, les candidatures, la messagerie, les publications, les projets freelance, les reclamations et la gestion du profil entreprise. Votre tableau de bord sert de point de pilotage pour retrouver rapidement ces modules.',
        actions: [
          this.link('Tableau de bord', '/enterprise/dashboard'),
          this.link('Mes offres', '/enterprise/offers'),
          this.link('Messagerie', '/enterprise/messages')
        ],
        suggestions: ['Comment publier une offre ?', 'Comment voir les candidatures ?', 'Comment fonctionne l IA ?']
      };
    }

    return {
      role: 'assistant',
      text: 'NeoHire vous permet de chercher des offres, postuler, suivre vos candidatures, gerer vos CV, discuter avec d autres utilisateurs, publier dans le feed, participer au freelance et envoyer des reclamations si besoin.',
      actions: [
        this.link('Chercher des offres', '/candidate/search'),
        this.link('Mes candidatures', '/candidate/applications'),
        this.link('Mes CV', '/candidate/cvs')
      ],
      suggestions: ['Comment postuler ?', 'Ou gerer mes CV ?', 'Comment suivre mes candidatures ?']
    };
  }

  private enterpriseOffersAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Pour publier une offre, ouvrez la section Mes offres puis creez une nouvelle annonce. Vous pouvez renseigner le titre, la description, la localisation, le type de contrat, les competences, le tech stack et ensuite publier lorsque tout est pret.',
      actions: [
        this.link('Mes offres', '/enterprise/offers'),
        this.link('Nouvelle offre', '/enterprise/offers/new')
      ],
      suggestions: ['Comment voir les candidatures ?', 'Comment fonctionne l IA ?', 'Ou trouver la messagerie ?']
    };
  }

  private enterpriseApplicationsAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Le suivi des candidatures se fait a partir de chaque offre. Depuis Mes offres, ouvrez une offre puis sa page de candidatures. Le projet inclut aussi une analyse IA pour aider a prioriser les profils selon les competences, le tech stack, l experience et la localisation.',
      actions: [
        this.link('Voir mes offres', '/enterprise/offers'),
        this.link('Retour tableau de bord', '/enterprise/dashboard')
      ],
      suggestions: ['Comment publier une offre ?', 'Comment fonctionne l IA ?', 'Comment utiliser la messagerie ?']
    };
  }

  private candidateApplicationsAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Pour postuler, ouvrez Rechercher offres, selectionnez une annonce puis envoyez votre candidature avec un CV a jour. Pour suivre l avancement ensuite, utilisez la page Mes candidatures ou vous retrouverez vos envois et les statuts associes.',
      actions: [
        this.link('Rechercher des offres', '/candidate/search'),
        this.link('Mes candidatures', '/candidate/applications')
      ],
      suggestions: ['Ou gerer mes CV ?', 'Comment fonctionne l IA ?', 'Que puis-je faire sur NeoHire ?']
    };
  }

  private candidateCvAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La page Mes CV vous permet de televerser, consulter, supprimer et definir votre CV principal. Garder un profil et un CV complets aide aussi la lecture cote recruteur et rend votre candidature plus claire.',
      actions: [
        this.link('Mes CV', '/candidate/cvs'),
        this.link('Mon profil', '/candidate/profile')
      ],
      suggestions: ['Comment postuler ?', 'Comment suivre mes candidatures ?', 'Comment utiliser la messagerie ?']
    };
  }

  private aiAnswer(): AssistantMessage {
    if (this.isEnterprise) {
      return {
        role: 'assistant',
        text: 'Dans NeoHire, l analyse IA sert a aider le tri des candidatures. Le score prend en compte les competences, le tech stack, le niveau d experience, les annees d experience, la localisation et l adequation au contrat. Cela permet d avoir une premiere priorisation avant revue humaine.',
        actions: [
          this.link('Tableau de bord', '/enterprise/dashboard'),
          this.link('Mes offres', '/enterprise/offers')
        ],
        suggestions: ['Comment voir les candidatures ?', 'Comment publier une offre ?', 'Que puis-je faire sur NeoHire ?']
      };
    }

    return {
      role: 'assistant',
      text: 'L analyse IA de NeoHire aide surtout le recruteur a lire plus vite les candidatures. Pour renforcer votre dossier, gardez vos competences, votre experience, votre localisation et votre CV bien alignes avec les offres que vous ciblez.',
      actions: [
        this.link('Mes CV', '/candidate/cvs'),
        this.link('Mon profil', '/candidate/profile')
      ],
      suggestions: ['Comment postuler ?', 'Comment suivre mes candidatures ?', 'Que puis-je faire sur NeoHire ?']
    };
  }

  private messagingAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La messagerie NeoHire vous permet de suivre vos conversations et vos messages non lus. Selon les regles de connexion de la plateforme, certaines discussions demandent une relation ou une autorisation prealable.',
      actions: [
        this.link('Messagerie', this.baseRoute('messages')),
        this.link('Tableau de bord', this.baseRoute('dashboard'))
      ],
      suggestions: ['Comment gerer les connexions ?', 'Ou trouver les reclamations ?', 'Que puis-je faire sur NeoHire ?']
    };
  }

  private feedAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Le feed NeoHire sert a publier des actualites et a suivre celles de votre reseau. C est la partie la plus sociale du projet, utile pour la visibilite, la marque employeur et les echanges rapides.',
      actions: [
        this.link('Actualites', this.baseRoute('feed')),
        this.link('Messagerie', this.baseRoute('messages'))
      ],
      suggestions: ['Comment gerer les connexions ?', 'Comment utiliser le freelance ?', 'Que puis-je faire sur NeoHire ?']
    };
  }

  private freelanceAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'La section Freelance permet de publier ou explorer des projets hors recrutement classique. Elle sert a ouvrir des collaborations plus souples entre entreprises et talents sur la meme plateforme NeoHire.',
      actions: [
        this.link('Section Freelance', this.baseRoute('freelance')),
        this.link('Tableau de bord', this.baseRoute('dashboard'))
      ],
      suggestions: ['Comment fonctionne l IA ?', 'Comment utiliser la messagerie ?', 'Ou trouver les reclamations ?']
    };
  }

  private reclamationAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Si vous rencontrez un probleme sur la plateforme, la page Reclamations centralise vos demandes. Vous pouvez y declarer un incident, suivre son etat et consulter les reponses apporte es par l equipe de traitement.',
      actions: [
        this.link('Mes reclamations', this.baseRoute('reclamations')),
        this.link('Mon profil', this.baseRoute('profile'))
      ],
      suggestions: ['Comment utiliser la messagerie ?', 'Comment gerer les connexions ?', 'Que puis-je faire sur NeoHire ?']
    };
  }

  private connectionAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'NeoHire dispose aussi d un systeme de connexions entre utilisateurs. Les demandes en attente sont accessibles depuis l icone de connexion dans la barre du haut, ce qui facilite ensuite les interactions et certaines actions de messagerie.',
      actions: [
        this.link('Tableau de bord', this.baseRoute('dashboard')),
        this.link('Messagerie', this.baseRoute('messages'))
      ],
      suggestions: ['Comment utiliser la messagerie ?', 'Comment publier dans le feed ?', 'Que puis-je faire sur NeoHire ?']
    };
  }

  private profileAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: 'Votre profil reste la vitrine principale de votre presence sur NeoHire. Plus il est complet, plus la lecture du compte est claire pour les autres utilisateurs et pour les modules de recrutement de la plateforme.',
      actions: [
        this.link('Mon profil', this.baseRoute('profile')),
        this.link('Tableau de bord', this.baseRoute('dashboard'))
      ],
      suggestions: this.isEnterprise
        ? ['Comment publier une offre ?', 'Comment fonctionne l IA ?', 'Comment utiliser la messagerie ?']
        : ['Ou gerer mes CV ?', 'Comment postuler ?', 'Comment suivre mes candidatures ?']
    };
  }

  private fallbackAnswer(): AssistantMessage {
    return {
      role: 'assistant',
      text: this.isEnterprise
        ? 'Je peux vous aider sur les offres, les candidatures, l analyse IA, la messagerie, les publications, le freelance, les connexions et les reclamations de NeoHire.'
        : 'Je peux vous aider sur la recherche d offres, les candidatures, les CV, la messagerie, le feed, le freelance, les connexions et les reclamations de NeoHire.',
      actions: [
        this.link('Tableau de bord', this.baseRoute('dashboard')),
        this.link('Mon profil', this.baseRoute('profile'))
      ],
      suggestions: this.quickPrompts
    };
  }

  private baseRoute(segment: string): string {
    return `${this.isEnterprise ? '/enterprise' : '/candidate'}/${segment}`;
  }

  private link(label: string, route: string): AssistantAction {
    return { label, route };
  }

  private matches(prompt: string, keywords: string[]): boolean {
    return keywords.some(keyword => prompt.includes(this.normalize(keyword)));
  }

  private normalize(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  }
}
