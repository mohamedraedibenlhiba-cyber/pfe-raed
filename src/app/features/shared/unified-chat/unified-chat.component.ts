import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';

import { MessagingService } from '../../../core/services/messaging.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { AlertService } from '../../../core/services/alert.service';
import { Conversation, Message, ReactionType, User, ApiResponse } from '../../../core/models/models';

@Component({
  selector: 'app-unified-chat',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule, MatTabsModule,
    MatTooltipModule, MatBadgeModule, MatDividerModule, MatChipsModule
  ],
  templateUrl: './unified-chat.component.html',
  styleUrls: ['./unified-chat.component.scss']
})
export class UnifiedChatComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly msgSvc = inject(MessagingService);
  private readonly connectionSvc = inject(ConnectionRequestService);
  private readonly fb = inject(FormBuilder);
  private readonly alertSvc = inject(AlertService);

  // Tabs & UI State
  activeTab: 'messages' = 'messages';
  loading = true;
  searchQuery = '';

  // Connections (for messaging)
  acceptedConnections: User[] = [];
  loadingConnections = false;

  // Messages (Direct)
  conversations: Conversation[] = [];
  selectedConv: Conversation | null = null;
  messages: Message[] = [];
  loadingMessages = false;
  newMessage = '';
  sendingMessage = false;

  // Quick message suggestions
  messageSuggestions = [
    '👋 Bonjour, comment ça va?',
    '✅ Merci pour ton intérêt!',
    '📞 Parlons en détails',
    '💼 À bientôt',
    '🎯 Prêt à discuter?',
    '✨ Excellente idée!',
    '📅 Quand peux-tu?'
  ];

  ngOnInit(): void {
    this.loadInitialData();
    this.loadAcceptedConnections();
  }

  private loadInitialData(): void {
    // Load conversations for messages tab
    this.msgSvc.getConversations().subscribe({
      next: (res) => {
        this.conversations = res.data;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private loadAcceptedConnections(): void {
    this.loadingConnections = true;
    this.connectionSvc.getAcceptedConnections().subscribe({
      next: (res: ApiResponse<User[]>) => {
        this.acceptedConnections = res.data || [];
        this.loadingConnections = false;
      },
      error: () => { this.loadingConnections = false; }
    });
  }

  // ===== MESSAGES TAB =====

  selectConversation(conv: Conversation): void {
    this.selectedConv = conv;
    this.loadingMessages = true;
    this.msgSvc.getMessages(conv.id).subscribe({
      next: (res) => {
        this.messages = res.data.content;
        this.loadingMessages = false;
        this.msgSvc.markRead(conv.id).subscribe();
      },
      error: () => { this.loadingMessages = false; }
    });
  }

  sendDirectMessage(): void {
    if (!this.newMessage.trim() || !this.selectedConv || this.sendingMessage) return;
    const other = this.selectedConv.participant1.id === this.auth.currentUser?.id
      ? this.selectedConv.participant2
      : this.selectedConv.participant1;

    this.sendingMessage = true;
    this.msgSvc.send({ recipientId: other.id, content: this.newMessage }).subscribe({
      next: (res) => {
        this.messages.push(res.data);
        this.newMessage = '';
        this.sendingMessage = false;
      },
      error: () => { this.sendingMessage = false; }
    });
  }

  /**
   * Use a suggested message - insert into text field
   */
  useSuggestion(suggestion: string): void {
    this.newMessage = suggestion;
  }

  /**
   * Start conversation with an accepted connection
   */
  startConversationWithConnection(user: User): void {
    // Check if conversation already exists
    const existing = this.conversations.find(c =>
      (c.participant1.id === user.id || c.participant2.id === user.id)
    );

    if (existing) {
      this.selectConversation(existing);
    } else {
      // Create a pseudo-conversation for new contact
      const currentUserAsUser: User = {
        id: this.auth.currentUser?.id!,
        email: this.auth.currentUser?.email!,
        fullName: this.auth.currentUser?.fullName!,
        role: this.auth.currentUser?.role!,
        active: true,
        verified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const conv: Conversation = {
        id: 0, // Temporary ID
        participant1: currentUserAsUser,
        participant2: user,
        lastMessageAt: new Date().toISOString(),
        messages: []
      };
      this.selectConversation(conv);
    }
  }

  getOtherParticipant(conv: Conversation) {
    return conv.participant1.id === this.auth.currentUser?.id ? conv.participant2 : conv.participant1;
  }

  // ===== UTILITIES =====

  onTabChange(index: number): void {
    // Single tab: messages
  }

  initials(name: string): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  getRoleLabel(role: string): string {
    switch (role) {
      case 'ROLE_CANDIDATE':
        return 'Candidat';
      case 'ROLE_ENTERPRISE':
        return 'Entreprise';
      default:
        return role;
    }
  }

  filterChats(): void {
    // Simple client-side filtering can be added here
  }
}
