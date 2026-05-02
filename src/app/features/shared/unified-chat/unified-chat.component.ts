import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MessagingService } from '../../../core/services/messaging.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { AlertService } from '../../../core/services/alert.service';
import {
  ApiResponse,
  ConnectionRequest,
  Conversation,
  Message,
  User,
  UserSearchResponse
} from '../../../core/models/models';
import { EmojiPickerComponent } from '../../../shared/components/emoji-picker/emoji-picker.component';
import { ConnectionRequestsModalComponent } from '../connection-requests-modal/connection-requests-modal.component';
import { UserConnectionModalComponent } from '../../../shared/components/user-connection-modal/user-connection-modal.component';

@Component({
  selector: 'app-unified-chat',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDialogModule,
    EmojiPickerComponent
  ],
  templateUrl: './unified-chat.component.html',
  styleUrls: ['./unified-chat.component.scss']
})
export class UnifiedChatComponent implements OnInit {
  readonly auth = inject(AuthService);

  private readonly messagingSvc = inject(MessagingService);
  private readonly connectionSvc = inject(ConnectionRequestService);
  private readonly alertSvc = inject(AlertService);
  private readonly dialog = inject(MatDialog);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  loadingConversations = true;
  loadingMessages = false;
  loadingConnections = false;
  loadingRequests = false;
  searchingUsers = false;
  sendingMessage = false;

  acceptedConnections: User[] = [];
  pendingRequests: ConnectionRequest[] = [];
  conversations: Conversation[] = [];
  selectedConv: Conversation | null = null;
  messages: Message[] = [];
  searchResults: UserSearchResponse[] = [];

  searchQuery = '';
  newMessage = '';

  private searchTimeout: ReturnType<typeof setTimeout> | null = null;
  private requestedConversationId: number | null = null;

  readonly messageSuggestions = [
    'Bonjour, merci pour votre retour.',
    'Pouvez-vous partager plus de details ?',
    'Je suis disponible pour echanger cette semaine.',
    'Merci, je vous recontacte rapidement.'
  ];

  ngOnInit(): void {
    this.bindConversationSelectionFromRoute();
    this.loadSidebarData();
    this.connectionSvc.requestChanges$.subscribe(() => {
      this.loadAcceptedConnections();
      this.loadPendingRequests();
      this.loadConversations();
    });
  }

  get visiblePendingRequests(): ConnectionRequest[] {
    return this.pendingRequests.slice(0, 3);
  }

  private bindConversationSelectionFromRoute(): void {
    this.route.queryParamMap.subscribe(params => {
      const rawConvId = params.get('convId');
      this.requestedConversationId = rawConvId ? Number(rawConvId) : null;
      this.trySelectRequestedConversation();
    });
  }

  private loadSidebarData(): void {
    this.loadConversations();
    this.loadAcceptedConnections();
    this.loadPendingRequests();
  }

  private loadConversations(): void {
    this.loadingConversations = true;
    this.messagingSvc.getConversations().subscribe({
      next: ({ data }) => {
        this.conversations = [...data].sort((a, b) =>
          new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
        );
        this.loadingConversations = false;
        this.trySelectRequestedConversation();
      },
      error: () => {
        this.loadingConversations = false;
      }
    });
  }

  private loadAcceptedConnections(): void {
    this.loadingConnections = true;
    this.connectionSvc.getAcceptedConnections().subscribe({
      next: (res: ApiResponse<User[]>) => {
        this.acceptedConnections = res.data || [];
        this.loadingConnections = false;
      },
      error: () => {
        this.loadingConnections = false;
      }
    });
  }

  private loadPendingRequests(): void {
    this.loadingRequests = true;
    this.connectionSvc.getPendingRequests(0, 6).subscribe({
      next: ({ data }) => {
        this.pendingRequests = data.content;
        this.loadingRequests = false;
      },
      error: () => {
        this.loadingRequests = false;
      }
    });
  }

  onSearchInput(): void {
    const query = this.searchQuery.trim();

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    if (query.length < 2) {
      this.searchingUsers = false;
      this.searchResults = [];
      return;
    }

    this.searchingUsers = true;
    this.searchTimeout = setTimeout(() => {
      this.messagingSvc.searchUsers(query, undefined, 0, 8).subscribe({
        next: ({ data }) => {
          this.searchResults = data.content;
          this.searchingUsers = false;
        },
        error: () => {
          this.searchResults = [];
          this.searchingUsers = false;
        }
      });
    }, 250);
  }

  openRequestsCenter(): void {
    this.dialog.open(ConnectionRequestsModalComponent, {
      width: '820px',
      maxWidth: '95vw'
    });
  }

  openUserModal(userId: number): void {
    this.dialog.open(UserConnectionModalComponent, {
      width: '760px',
      maxWidth: '95vw',
      data: { userId }
    });
  }

  quickAcceptRequest(requestId: number): void {
    this.connectionSvc.acceptRequest(requestId).subscribe({
      next: async () => {
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
        this.loadAcceptedConnections();
        await this.alertSvc.success('Demande acceptee');
      },
      error: async (error) => {
        await this.alertSvc.error('Acceptation impossible', error?.error?.message);
      }
    });
  }

  quickRejectRequest(requestId: number): void {
    this.connectionSvc.rejectRequest(requestId).subscribe({
      next: async () => {
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
        await this.alertSvc.success('Demande refusee');
      },
      error: async (error) => {
        await this.alertSvc.error('Refus impossible', error?.error?.message);
      }
    });
  }

  startConversationWithConnection(user: User): void {
    this.openConversationWithUser(user.id);
  }

  openConversationWithUser(userId: number): void {
    this.messagingSvc.getOrCreateConversation(userId).subscribe({
      next: ({ data }) => {
        this.upsertConversation(data);
        this.selectConversation(data);
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { convId: data.id },
          queryParamsHandling: 'merge'
        });
      },
      error: async (error) => {
        await this.alertSvc.error('Ouverture impossible', error?.error?.message);
      }
    });
  }

  selectConversation(conv: Conversation): void {
    this.selectedConv = conv;
    this.loadingMessages = true;

    this.messagingSvc.getMessages(conv.id).subscribe({
      next: ({ data }) => {
        this.messages = data.content;
        this.loadingMessages = false;
        this.messagingSvc.markRead(conv.id).subscribe();
      },
      error: () => {
        this.loadingMessages = false;
      }
    });
  }

  sendDirectMessage(): void {
    if (!this.newMessage.trim() || !this.selectedConv || this.sendingMessage) {
      return;
    }

    const recipient = this.getOtherParticipant(this.selectedConv);
    this.sendingMessage = true;

    this.messagingSvc.send({
      recipientId: recipient.id,
      content: this.newMessage.trim()
    }).subscribe({
      next: ({ data }) => {
        this.messages = [...this.messages, data];
        this.newMessage = '';
        this.sendingMessage = false;
        this.bumpConversationActivity(this.selectedConv!.id, data.sentAt);
      },
      error: async (error) => {
        this.sendingMessage = false;
        await this.alertSvc.error('Envoi impossible', error?.error?.message);
      }
    });
  }

  useSuggestion(suggestion: string): void {
    this.newMessage = suggestion;
  }

  onEmojiSelected(emoji: string): void {
    this.newMessage += emoji;
  }

  getOtherParticipant(conv: Conversation): User {
    return conv.participant1.id === this.auth.currentUser?.id ? conv.participant2 : conv.participant1;
  }

  getRoleLabel(role: string): string {
    if (role === 'ROLE_CANDIDATE') {
      return 'Candidat';
    }

    if (role === 'ROLE_ENTERPRISE') {
      return 'Entreprise';
    }

    return role;
  }

  getUserSubtitle(user: UserSearchResponse | User): string {
    if ('companyName' in user && user.companyName) {
      return user.companyName;
    }

    if ('headline' in user && user.headline) {
      return user.headline;
    }

    return this.getRoleLabel(user.role);
  }

  initials(name: string): string {
    return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  private trySelectRequestedConversation(): void {
    if (!this.requestedConversationId || !this.conversations.length) {
      return;
    }

    const targetConversation = this.conversations.find(conv => conv.id === this.requestedConversationId);
    if (targetConversation && this.selectedConv?.id !== targetConversation.id) {
      this.selectConversation(targetConversation);
    }
  }

  private upsertConversation(conversation: Conversation): void {
    const existingIndex = this.conversations.findIndex(item => item.id === conversation.id);

    if (existingIndex >= 0) {
      this.conversations[existingIndex] = conversation;
    } else {
      this.conversations = [conversation, ...this.conversations];
    }

    this.conversations = [...this.conversations].sort((a, b) =>
      new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
    );
  }

  private bumpConversationActivity(conversationId: number, sentAt: string): void {
    const updated = this.conversations.map(conversation =>
      conversation.id === conversationId
        ? { ...conversation, lastMessageAt: sentAt }
        : conversation
    );

    this.conversations = updated.sort((a, b) =>
      new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
    );
  }
}
