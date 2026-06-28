import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../../core/services/auth.service';
import { ChatbotService, ConversationEntry } from '../../../core/services/chatbot.service';

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
  isError?: boolean;
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

  constructor(
    public readonly auth: AuthService,
    private readonly router: Router,
    private readonly sanitizer: DomSanitizer,
    private readonly chatbotService: ChatbotService
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

    const history = this.buildHistory();
    const userRole = this.isEnterprise ? 'ROLE_ENTERPRISE' : 'ROLE_CANDIDATE';

    this.chatbotService.sendMessage(text, userRole, history).subscribe({
      next: (res) => {
        const replyText = res.success && res.data
          ? res.data
          : (res.message || "Je n'ai pas pu générer une réponse. Veuillez réessayer.");

        this.messages = [...this.messages, {
          role: 'assistant',
          text: replyText,
          suggestions: this.quickPrompts,
          timestamp: new Date(),
          isError: !res.success
        }];
        this.thinking = false;
        this.shouldScrollToBottom = true;
      },
      error: () => {
        this.messages = [...this.messages, {
          role: 'assistant',
          text: "⚠️ Le service IA est temporairement indisponible. Veuillez réessayer dans quelques instants.",
          suggestions: this.quickPrompts,
          timestamp: new Date(),
          isError: true
        }];
        this.thinking = false;
        this.shouldScrollToBottom = true;
      }
    });
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

    const enterpriseText = `Bonjour${greeting} 👋\n\nJe suis l'assistant **NeoHire** propulsé par Groq IA. Je peux vous guider sur :\n• Gestion des offres et candidatures\n• Analyse IA des profils\n• Messagerie et réseau\n• Freelance et réclamations`;
    const candidateText = `Bonjour${greeting} 👋\n\nJe suis l'assistant **NeoHire** propulsé par Groq IA. Je peux vous aider sur :\n• Recherche d'offres et candidatures\n• Gestion de vos CV\n• Messagerie et réseau\n• Freelance et réclamations`;

    return {
      role: 'assistant',
      text: this.isEnterprise ? enterpriseText : candidateText,
      suggestions: this.quickPrompts,
      timestamp: new Date()
    };
  }

  private buildHistory(): ConversationEntry[] {
    // Send last 10 messages as context (excluding the welcome message)
    return this.messages
      .slice(1)
      .slice(-10)
      .map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.text
      }));
  }

  private baseRoute(segment: string): string {
    return `${this.isEnterprise ? '/enterprise' : '/candidate'}/${segment}`;
  }
}
