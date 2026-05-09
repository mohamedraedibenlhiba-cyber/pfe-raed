import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
import * as i1 from "../../../core/services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/tooltip";
const _forTrack0 = ($index, $item) => $item.route;
function ProjectChatbotComponent_Conditional_1_For_20_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function ProjectChatbotComponent_Conditional_1_For_20_Conditional_6_For_2_Template_button_click_0_listener() { const action_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openRoute(action_r4.route)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const action_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", action_r4.label, " ");
} }
function ProjectChatbotComponent_Conditional_1_For_20_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵrepeaterCreate(1, ProjectChatbotComponent_Conditional_1_For_20_Conditional_6_For_2_Template, 2, 1, "button", 24, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(message_r5.actions);
} }
function ProjectChatbotComponent_Conditional_1_For_20_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function ProjectChatbotComponent_Conditional_1_For_20_Conditional_7_For_2_Template_button_click_0_listener() { const suggestion_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.ask(suggestion_r7)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggestion_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", suggestion_r7, " ");
} }
function ProjectChatbotComponent_Conditional_1_For_20_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵrepeaterCreate(1, ProjectChatbotComponent_Conditional_1_For_20_Conditional_7_For_2_Template, 2, 1, "button", 26, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(message_r5.suggestions);
} }
function ProjectChatbotComponent_Conditional_1_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 21)(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ProjectChatbotComponent_Conditional_1_For_20_Conditional_6_Template, 3, 0, "div", 22)(7, ProjectChatbotComponent_Conditional_1_For_20_Conditional_7_Template, 3, 0, "div", 23);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("user-row", message_r5.role === "user");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", message_r5.role === "assistant" ? "N" : ctx_r1.userInitials(), " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("user-bubble", message_r5.role === "user");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(message_r5.text);
    i0.ɵɵadvance();
    i0.ɵɵconditional(6, (message_r5.actions == null ? null : message_r5.actions.length) ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(7, (message_r5.suggestions == null ? null : message_r5.suggestions.length) && message_r5.role === "assistant" ? 7 : -1);
} }
function ProjectChatbotComponent_Conditional_1_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 20);
    i0.ɵɵtext(2, "N");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 28);
    i0.ɵɵelement(4, "span")(5, "span")(6, "span");
    i0.ɵɵelementEnd()();
} }
function ProjectChatbotComponent_Conditional_1_For_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ProjectChatbotComponent_Conditional_1_For_24_Template_button_click_0_listener() { const prompt_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.ask(prompt_r9)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const prompt_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", prompt_r9, " ");
} }
function ProjectChatbotComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1)(1, "header", 5)(2, "div")(3, "p", 6);
    i0.ɵɵtext(4, "Assistant projet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 7)(8, "button", 8);
    i0.ɵɵlistener("click", function ProjectChatbotComponent_Conditional_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetConversation()); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "refresh");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 9);
    i0.ɵɵlistener("click", function ProjectChatbotComponent_Conditional_1_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePanel()); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "close");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(14, "div", 10);
    i0.ɵɵelement(15, "span", 11);
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17, "Reponses guidees sur les modules et les parcours de votre plateforme.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 12);
    i0.ɵɵrepeaterCreate(19, ProjectChatbotComponent_Conditional_1_For_20_Template, 8, 8, "div", 13, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵtemplate(21, ProjectChatbotComponent_Conditional_1_Conditional_21_Template, 7, 0, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 15);
    i0.ɵɵrepeaterCreate(23, ProjectChatbotComponent_Conditional_1_For_24_Template, 2, 1, "button", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "form", 17);
    i0.ɵɵlistener("ngSubmit", function ProjectChatbotComponent_Conditional_1_Template_form_ngSubmit_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendPrompt()); });
    i0.ɵɵelementStart(26, "textarea", 18);
    i0.ɵɵtwoWayListener("ngModelChange", function ProjectChatbotComponent_Conditional_1_Template_textarea_ngModelChange_26_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.draft, $event) || (ctx_r1.draft = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown", function ProjectChatbotComponent_Conditional_1_Template_textarea_keydown_26_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleComposerKeydown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "button", 19)(28, "mat-icon");
    i0.ɵɵtext(29, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " Envoyer ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("NeoHire ", ctx_r1.roleLabel, "");
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r1.messages);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(21, ctx_r1.thinking ? 21 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.quickPrompts);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.draft);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.draft.trim() || ctx_r1.thinking);
} }
export class ProjectChatbotComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.panelOpen = signal(false);
        this.messages = [];
        this.draft = '';
        this.thinking = false;
    }
    ngOnInit() {
        this.resetConversation();
    }
    get isEnterprise() {
        return this.auth.isEnterprise;
    }
    get roleLabel() {
        return this.isEnterprise ? 'Entreprise' : 'Candidat';
    }
    get quickPrompts() {
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
    togglePanel() {
        this.panelOpen.update(value => !value);
    }
    closePanel() {
        this.panelOpen.set(false);
    }
    resetConversation() {
        this.draft = '';
        this.thinking = false;
        this.messages = [this.buildWelcomeMessage()];
    }
    ask(prompt) {
        this.sendPrompt(prompt);
    }
    handleComposerKeydown(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            this.sendPrompt();
        }
    }
    sendPrompt(prompt = this.draft) {
        const cleanedPrompt = prompt.trim();
        if (!cleanedPrompt || this.thinking)
            return;
        this.messages = [...this.messages, { role: 'user', text: cleanedPrompt }];
        this.draft = '';
        this.thinking = true;
        const response = this.buildResponse(cleanedPrompt);
        setTimeout(() => {
            this.messages = [...this.messages, response];
            this.thinking = false;
        }, 260);
    }
    openRoute(route) {
        this.router.navigateByUrl(route);
        this.panelOpen.set(false);
    }
    userInitials() {
        return this.auth.currentUser?.fullName?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || 'U';
    }
    buildWelcomeMessage() {
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
    buildResponse(prompt) {
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
    platformAnswer() {
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
    enterpriseOffersAnswer() {
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
    enterpriseApplicationsAnswer() {
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
    candidateApplicationsAnswer() {
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
    candidateCvAnswer() {
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
    aiAnswer() {
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
    messagingAnswer() {
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
    feedAnswer() {
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
    freelanceAnswer() {
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
    reclamationAnswer() {
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
    connectionAnswer() {
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
    profileAnswer() {
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
    fallbackAnswer() {
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
    baseRoute(segment) {
        return `${this.isEnterprise ? '/enterprise' : '/candidate'}/${segment}`;
    }
    link(label, route) {
        return { label, route };
    }
    matches(prompt, keywords) {
        return keywords.some(keyword => prompt.includes(this.normalize(keyword)));
    }
    normalize(value) {
        return value
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }
    static { this.ɵfac = function ProjectChatbotComponent_Factory(t) { return new (t || ProjectChatbotComponent)(i0.ɵɵdirectiveInject(i1.AuthService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProjectChatbotComponent, selectors: [["app-project-chatbot"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [[1, "assistant-widget"], [1, "assistant-panel"], ["type", "button", 1, "assistant-trigger", 3, "click"], [1, "material-icons-round"], [1, "trigger-copy"], [1, "assistant-header"], [1, "assistant-kicker"], [1, "assistant-header-actions"], ["mat-icon-button", "", "type", "button", "matTooltip", "Reinitialiser", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Fermer", 3, "click"], [1, "assistant-intro"], [1, "status-dot"], [1, "assistant-messages"], [1, "message-row", 3, "user-row"], [1, "message-row"], [1, "starter-prompts"], ["type", "button", 1, "starter-chip"], [1, "assistant-composer", 3, "ngSubmit"], ["name", "assistantPrompt", "rows", "2", "placeholder", "Posez une question sur NeoHire...", 3, "ngModelChange", "keydown", "ngModel"], ["mat-flat-button", "", "type", "submit", 1, "send-btn", 3, "disabled"], [1, "message-avatar"], [1, "message-bubble"], [1, "message-actions"], [1, "message-suggestions"], ["type", "button", 1, "chip-action"], ["type", "button", 1, "chip-action", 3, "click"], ["type", "button", 1, "chip-suggestion"], ["type", "button", 1, "chip-suggestion", 3, "click"], [1, "message-bubble", "typing-bubble"], ["type", "button", 1, "starter-chip", 3, "click"]], template: function ProjectChatbotComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ProjectChatbotComponent_Conditional_1_Template, 31, 4, "section", 1);
            i0.ɵɵelementStart(2, "button", 2);
            i0.ɵɵlistener("click", function ProjectChatbotComponent_Template_button_click_2_listener() { return ctx.togglePanel(); });
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵtext(4, "smart_toy");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 4);
            i0.ɵɵtext(6, "Assistant NeoHire");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(1, ctx.panelOpen() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.panelOpen());
        } }, dependencies: [CommonModule, FormsModule, i3.ɵNgNoValidate, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgControlStatusGroup, i3.NgModel, i3.NgForm, MatButtonModule, i4.MatButton, i4.MatIconButton, MatIconModule, i5.MatIcon, MatTooltipModule, i6.MatTooltip], styles: [".assistant-widget[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1080;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 14px;\n}\n\n.assistant-trigger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  border: 0;\n  border-radius: 999px;\n  padding: 14px 18px;\n  background: linear-gradient(135deg, #f97316, #fcb900);\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 18px 36px rgba(249, 115, 22, 0.32);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n\n  .material-icons-round {\n    font-size: 20px;\n  }\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 22px 42px rgba(249, 115, 22, 0.38);\n  }\n\n  &.active {\n    background: linear-gradient(135deg, #ea580c, #f59e0b);\n  }\n}\n\n.assistant-panel[_ngcontent-%COMP%] {\n  width: min(390px, calc(100vw - 28px));\n  max-height: min(76vh, 720px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 28px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background:\n    radial-gradient(circle at top right, rgba(252, 185, 0, 0.18), transparent 30%),\n    linear-gradient(180deg, #ffffff, #fff9f4);\n  box-shadow: 0 28px 56px rgba(15, 23, 42, 0.18);\n}\n\n.assistant-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 18px 18px 14px;\n}\n\n.assistant-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  color: #c2410c;\n  font-size: 0.76rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.assistant-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-primary);\n  font-size: 1.1rem;\n}\n\n.assistant-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.assistant-intro[_ngcontent-%COMP%] {\n  margin: 0 18px 12px;\n  padding: 12px 14px;\n  border-radius: 18px;\n  background: rgba(252, 185, 0, 0.12);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  p {\n    margin: 0;\n    color: #92400e;\n    font-size: 0.88rem;\n    line-height: 1.5;\n  }\n}\n\n.status-dot[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00d084;\n  box-shadow: 0 0 0 6px rgba(0, 208, 132, 0.12);\n  flex-shrink: 0;\n}\n\n.assistant-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 0 18px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.message-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.user-row[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n\n.message-avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f97316, #fcb900);\n  color: #fff;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: calc(100% - 44px);\n  padding: 14px;\n  border-radius: 18px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 23, 42, 0.06);\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n\n  p {\n    margin: 0;\n    color: var(--text-primary);\n    line-height: 1.6;\n    font-size: 0.92rem;\n    white-space: pre-line;\n  }\n}\n\n.user-bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(249, 115, 22, 0.94), rgba(252, 185, 0, 0.92));\n\n  p {\n    color: #fff;\n  }\n}\n\n.message-actions[_ngcontent-%COMP%], .message-suggestions[_ngcontent-%COMP%], .starter-prompts[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.message-actions[_ngcontent-%COMP%], .message-suggestions[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n\n.chip-action[_ngcontent-%COMP%], .chip-suggestion[_ngcontent-%COMP%], .starter-chip[_ngcontent-%COMP%] {\n  border: 0;\n  cursor: pointer;\n  border-radius: 999px;\n  padding: 8px 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;\n}\n\n.chip-action[_ngcontent-%COMP%] {\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n\n  &:hover {\n    transform: translateY(-1px);\n    background: rgba(249, 115, 22, 0.18);\n  }\n}\n\n.chip-suggestion[_ngcontent-%COMP%], .starter-chip[_ngcontent-%COMP%] {\n  background: rgba(15, 23, 42, 0.05);\n  color: var(--text-primary);\n\n  &:hover {\n    transform: translateY(-1px);\n    background: rgba(252, 185, 0, 0.18);\n    color: #92400e;\n  }\n}\n\n.starter-prompts[_ngcontent-%COMP%] {\n  padding: 8px 18px 0;\n}\n\n.assistant-composer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  padding: 16px 18px 18px;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: rgba(255, 255, 255, 0.88);\n\n  textarea {\n    resize: none;\n    min-height: 72px;\n    border-radius: 18px;\n    border: 1px solid rgba(15, 23, 42, 0.08);\n    background: #fff;\n    padding: 12px 14px;\n    font: inherit;\n    color: var(--text-primary);\n    outline: none;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n\n    &:focus {\n      border-color: rgba(249, 115, 22, 0.4);\n      box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.12);\n    }\n  }\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  align-self: stretch;\n  border-radius: 18px !important;\n  padding-inline: 18px !important;\n  background: linear-gradient(135deg, #f97316, #fcb900) !important;\n  color: #fff !important;\n}\n\n.typing-bubble[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 48px;\n\n  span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: rgba(148, 163, 184, 0.9);\n    animation: _ngcontent-%COMP%_typingPulse 1.1s infinite ease-in-out;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.15s;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 0.3s;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_typingPulse {\n  0%,\n  80%,\n  100% {\n    transform: scale(0.8);\n    opacity: 0.6;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@media (max-width: 768px) {\n  .assistant-widget[_ngcontent-%COMP%] {\n    right: 14px;\n    bottom: 14px;\n    left: 14px;\n    align-items: stretch;\n  }\n\n  .assistant-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: min(72vh, 680px);\n  }\n\n  .assistant-trigger[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .assistant-composer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectChatbotComponent, [{
        type: Component,
        args: [{ selector: 'app-project-chatbot', standalone: true, imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatTooltipModule], template: "<div class=\"assistant-widget\">\n  @if (panelOpen()) {\n    <section class=\"assistant-panel\">\n      <header class=\"assistant-header\">\n        <div>\n          <p class=\"assistant-kicker\">Assistant projet</p>\n          <h3>NeoHire {{ roleLabel }}</h3>\n        </div>\n\n        <div class=\"assistant-header-actions\">\n          <button mat-icon-button type=\"button\" (click)=\"resetConversation()\" matTooltip=\"Reinitialiser\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n          <button mat-icon-button type=\"button\" (click)=\"closePanel()\" matTooltip=\"Fermer\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n      </header>\n\n      <div class=\"assistant-intro\">\n        <span class=\"status-dot\"></span>\n        <p>Reponses guidees sur les modules et les parcours de votre plateforme.</p>\n      </div>\n\n      <div class=\"assistant-messages\">\n        @for (message of messages; track $index) {\n          <div class=\"message-row\" [class.user-row]=\"message.role === 'user'\">\n            <div class=\"message-avatar\">\n              {{ message.role === 'assistant' ? 'N' : userInitials() }}\n            </div>\n\n            <div class=\"message-bubble\" [class.user-bubble]=\"message.role === 'user'\">\n              <p>{{ message.text }}</p>\n\n              @if (message.actions?.length) {\n                <div class=\"message-actions\">\n                  @for (action of message.actions; track action.route) {\n                    <button type=\"button\" class=\"chip-action\" (click)=\"openRoute(action.route)\">\n                      {{ action.label }}\n                    </button>\n                  }\n                </div>\n              }\n\n              @if (message.suggestions?.length && message.role === 'assistant') {\n                <div class=\"message-suggestions\">\n                  @for (suggestion of message.suggestions; track suggestion) {\n                    <button type=\"button\" class=\"chip-suggestion\" (click)=\"ask(suggestion)\">\n                      {{ suggestion }}\n                    </button>\n                  }\n                </div>\n              }\n            </div>\n          </div>\n        }\n\n        @if (thinking) {\n          <div class=\"message-row\">\n            <div class=\"message-avatar\">N</div>\n            <div class=\"message-bubble typing-bubble\">\n              <span></span>\n              <span></span>\n              <span></span>\n            </div>\n          </div>\n        }\n      </div>\n\n      <div class=\"starter-prompts\">\n        @for (prompt of quickPrompts; track prompt) {\n          <button type=\"button\" class=\"starter-chip\" (click)=\"ask(prompt)\">\n            {{ prompt }}\n          </button>\n        }\n      </div>\n\n      <form class=\"assistant-composer\" (ngSubmit)=\"sendPrompt()\">\n        <textarea\n          [(ngModel)]=\"draft\"\n          name=\"assistantPrompt\"\n          rows=\"2\"\n          placeholder=\"Posez une question sur NeoHire...\"\n          (keydown)=\"handleComposerKeydown($event)\"></textarea>\n\n        <button mat-flat-button type=\"submit\" class=\"send-btn\" [disabled]=\"!draft.trim() || thinking\">\n          <mat-icon>send</mat-icon>\n          Envoyer\n        </button>\n      </form>\n    </section>\n  }\n\n  <button type=\"button\" class=\"assistant-trigger\" [class.active]=\"panelOpen()\" (click)=\"togglePanel()\">\n    <span class=\"material-icons-round\">smart_toy</span>\n    <span class=\"trigger-copy\">Assistant NeoHire</span>\n  </button>\n</div>\n", styles: [".assistant-widget {\n  position: fixed;\n  right: 24px;\n  bottom: 24px;\n  z-index: 1080;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 14px;\n}\n\n.assistant-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  border: 0;\n  border-radius: 999px;\n  padding: 14px 18px;\n  background: linear-gradient(135deg, #f97316, #fcb900);\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n  box-shadow: 0 18px 36px rgba(249, 115, 22, 0.32);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n\n  .material-icons-round {\n    font-size: 20px;\n  }\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 22px 42px rgba(249, 115, 22, 0.38);\n  }\n\n  &.active {\n    background: linear-gradient(135deg, #ea580c, #f59e0b);\n  }\n}\n\n.assistant-panel {\n  width: min(390px, calc(100vw - 28px));\n  max-height: min(76vh, 720px);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  border-radius: 28px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background:\n    radial-gradient(circle at top right, rgba(252, 185, 0, 0.18), transparent 30%),\n    linear-gradient(180deg, #ffffff, #fff9f4);\n  box-shadow: 0 28px 56px rgba(15, 23, 42, 0.18);\n}\n\n.assistant-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 18px 18px 14px;\n}\n\n.assistant-kicker {\n  margin: 0 0 6px;\n  color: #c2410c;\n  font-size: 0.76rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.assistant-header h3 {\n  margin: 0;\n  color: var(--text-primary);\n  font-size: 1.1rem;\n}\n\n.assistant-header-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.assistant-intro {\n  margin: 0 18px 12px;\n  padding: 12px 14px;\n  border-radius: 18px;\n  background: rgba(252, 185, 0, 0.12);\n  display: flex;\n  align-items: center;\n  gap: 10px;\n\n  p {\n    margin: 0;\n    color: #92400e;\n    font-size: 0.88rem;\n    line-height: 1.5;\n  }\n}\n\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #00d084;\n  box-shadow: 0 0 0 6px rgba(0, 208, 132, 0.12);\n  flex-shrink: 0;\n}\n\n.assistant-messages {\n  flex: 1;\n  overflow: auto;\n  padding: 0 18px 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n\n.message-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n}\n\n.user-row {\n  flex-direction: row-reverse;\n}\n\n.message-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f97316, #fcb900);\n  color: #fff;\n  font-size: 0.82rem;\n  font-weight: 700;\n}\n\n.message-bubble {\n  max-width: calc(100% - 44px);\n  padding: 14px;\n  border-radius: 18px;\n  background: #ffffff;\n  border: 1px solid rgba(15, 23, 42, 0.06);\n  box-shadow: 0 10px 22px rgba(15, 23, 42, 0.06);\n\n  p {\n    margin: 0;\n    color: var(--text-primary);\n    line-height: 1.6;\n    font-size: 0.92rem;\n    white-space: pre-line;\n  }\n}\n\n.user-bubble {\n  background: linear-gradient(135deg, rgba(249, 115, 22, 0.94), rgba(252, 185, 0, 0.92));\n\n  p {\n    color: #fff;\n  }\n}\n\n.message-actions,\n.message-suggestions,\n.starter-prompts {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.message-actions,\n.message-suggestions {\n  margin-top: 12px;\n}\n\n.chip-action,\n.chip-suggestion,\n.starter-chip {\n  border: 0;\n  cursor: pointer;\n  border-radius: 999px;\n  padding: 8px 12px;\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;\n}\n\n.chip-action {\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n\n  &:hover {\n    transform: translateY(-1px);\n    background: rgba(249, 115, 22, 0.18);\n  }\n}\n\n.chip-suggestion,\n.starter-chip {\n  background: rgba(15, 23, 42, 0.05);\n  color: var(--text-primary);\n\n  &:hover {\n    transform: translateY(-1px);\n    background: rgba(252, 185, 0, 0.18);\n    color: #92400e;\n  }\n}\n\n.starter-prompts {\n  padding: 8px 18px 0;\n}\n\n.assistant-composer {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 12px;\n  padding: 16px 18px 18px;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: rgba(255, 255, 255, 0.88);\n\n  textarea {\n    resize: none;\n    min-height: 72px;\n    border-radius: 18px;\n    border: 1px solid rgba(15, 23, 42, 0.08);\n    background: #fff;\n    padding: 12px 14px;\n    font: inherit;\n    color: var(--text-primary);\n    outline: none;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n\n    &:focus {\n      border-color: rgba(249, 115, 22, 0.4);\n      box-shadow: 0 0 0 4px rgba(249, 115, 22, 0.12);\n    }\n  }\n}\n\n.send-btn {\n  align-self: stretch;\n  border-radius: 18px !important;\n  padding-inline: 18px !important;\n  background: linear-gradient(135deg, #f97316, #fcb900) !important;\n  color: #fff !important;\n}\n\n.typing-bubble {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-height: 48px;\n\n  span {\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background: rgba(148, 163, 184, 0.9);\n    animation: typingPulse 1.1s infinite ease-in-out;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 0.15s;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 0.3s;\n  }\n}\n\n@keyframes typingPulse {\n  0%,\n  80%,\n  100% {\n    transform: scale(0.8);\n    opacity: 0.6;\n  }\n  40% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@media (max-width: 768px) {\n  .assistant-widget {\n    right: 14px;\n    bottom: 14px;\n    left: 14px;\n    align-items: stretch;\n  }\n\n  .assistant-panel {\n    width: 100%;\n    max-height: min(72vh, 680px);\n  }\n\n  .assistant-trigger {\n    justify-content: center;\n  }\n\n  .assistant-composer {\n    grid-template-columns: 1fr;\n  }\n}\n"] }]
    }], () => [{ type: i1.AuthService }, { type: i2.Router }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProjectChatbotComponent, { className: "ProjectChatbotComponent", filePath: "app\\features\\shared\\project-chatbot\\project-chatbot.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=project-chatbot.component.js.map