import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MessagingService } from '../../../core/services/messaging.service';
import { AuthService } from '../../../core/services/auth.service';
import { Conversation, Message } from '../../../core/models/models';

@Component({
  selector: 'app-messaging',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.scss']
})
export class MessagingComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly msgSvc = inject(MessagingService);

  loading = true;
  conversations: Conversation[] = [];
  selectedConv: Conversation | null = null;
  messages: Message[] = [];
  loadingMessages = false;
  newMessage = '';
  sending = false;

  ngOnInit(): void {
    this.msgSvc.getConversations().subscribe({
      next: res => { this.conversations = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  selectConversation(conv: Conversation): void {
    this.selectedConv = conv;
    this.loadingMessages = true;
    this.msgSvc.getMessages(conv.id).subscribe({
      next: res => { this.messages = res.data.content; this.loadingMessages = false; this.msgSvc.markRead(conv.id).subscribe(); },
      error: () => { this.loadingMessages = false; }
    });
  }

  send(): void {
    if (!this.newMessage.trim() || !this.selectedConv || this.sending) return;
    const other = this.selectedConv.participant1.id === this.auth.currentUser?.id ? this.selectedConv.participant2 : this.selectedConv.participant1;
    this.sending = true;
    this.msgSvc.send({ recipientId: other.id, content: this.newMessage }).subscribe({
      next: res => { this.messages.push(res.data); this.newMessage = ''; this.sending = false; },
      error: () => { this.sending = false; }
    });
  }

  getOtherParticipant(conv: Conversation) {
    return conv.participant1.id === this.auth.currentUser?.id ? conv.participant2 : conv.participant1;
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
}
