import { Component, Input, Output, EventEmitter, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Message, MessageReaction, MessageAttachment, ReactionType } from '../../../core/models/models';
import { ReactionsPickerComponent } from '../reactions-picker/reactions-picker.component';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-message-bubble',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatMenuModule, MatTooltipModule,
    DatePipe, ReactionsPickerComponent, FormsModule
  ],
  template: `
    <div class="message-bubble" [class.own-message]="isOwnMessage">
      <!-- Avatar du sender -->
      <div *ngIf="!isOwnMessage" class="avatar">
        <img *ngIf="message.sender?.profilePicture" [src]="message.sender?.profilePicture" alt="avatar">
        <div *ngIf="!message.sender?.profilePicture" class="avatar-placeholder">
          {{ getInitials(message.sender.fullName || 'User') }}
        </div>
      </div>

      <!-- Contenu du message -->
      <div class="message-content" [class.own]="isOwnMessage">
        <!-- Texte du message -->
        <p *ngIf="message.content" class="message-text">{{ message.content }}</p>

        <!-- Attachments -->
        <div *ngIf="attachments && attachments.length > 0" class="attachments">
          <div *ngFor="let att of attachments" class="attachment">
            <img *ngIf="att.type === 'IMAGE'" [src]="att.fileUrl" alt="image" class="attachment-image">
            <video *ngIf="att.type === 'VIDEO'" [src]="att.fileUrl" controls class="attachment-video"></video>
            <a *ngIf="att.type === 'DOCUMENT' || att.type === 'AUDIO'"
               [href]="att.fileUrl"
               target="_blank"
               class="attachment-link">
              <mat-icon>{{ att.type === 'DOCUMENT' ? 'description' : 'audio_file' }}</mat-icon>
              {{ att.fileName }}
            </a>
          </div>
        </div>

        <!-- Timestamp et édité -->
        <div class="message-meta">
          <span class="timestamp">{{ message.sentAt | date: 'short' }}</span>
          <span *ngIf="message.editedAt" class="edited-badge">modifié</span>
          <span *ngIf="message.deleted" class="deleted-badge">supprimé</span>
        </div>

        <!-- Reactions -->
        <div *ngIf="reactions && reactions.length > 0" class="reactions-display">
          <div *ngFor="let reaction of groupedReactions" class="reaction-group">
            <span class="reaction-emoji">{{ getReactionEmoji(reaction.type) }}</span>
            <span class="reaction-count">{{ reaction.count }}</span>
          </div>
        </div>
      </div>

      <!-- Actions (hover) -->
      <div class="message-actions" *ngIf="isOwnMessage">
        <button mat-icon-button [matMenuTriggerFor]="actionsMenu" matTooltip="Options">
          <mat-icon>more_vert</mat-icon>
        </button>
        <mat-menu #actionsMenu="matMenu">
          <button mat-menu-item (click)="onEdit()">
            <mat-icon>edit</mat-icon>
            <span>Éditer</span>
          </button>
          <button mat-menu-item (click)="onDelete()">
            <mat-icon>delete</mat-icon>
            <span>Supprimer</span>
          </button>
        </mat-menu>
      </div>

      <!-- Reactions picker (visible au hover) -->
      <div class="reactions-picker-wrapper" *ngIf="showReactionPicker">
        <app-reactions-picker
          (reactionSelected)="onReactionSelect($event)">
        </app-reactions-picker>
      </div>
    </div>

    <!-- Formulaire d'édition (si en édition) -->
    <div *ngIf="isEditing" class="edit-form">
      <textarea [(ngModel)]="editingContent"
                class="edit-textarea"
                placeholder="Éditer votre message"></textarea>
      <div class="edit-actions">
        <button (click)="saveEdit()" class="btn-save">Enregistrer</button>
        <button (click)="cancelEdit()" class="btn-cancel">Annuler</button>
      </div>
    </div>
  `,
  styles: [`
    .message-bubble {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
      animation: fadeIn 0.3s ease;

      &.own-message {
        flex-direction: row-reverse;
      }

      &:hover .message-actions {
        opacity: 1;
      }

      &:hover .reactions-picker-wrapper {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .avatar-placeholder {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
    }

    .message-content {
      max-width: 60%;
      padding: 12px 16px;
      border-radius: 16px;
      background-color: #f0f0f0;
      position: relative;

      &.own {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-bottom-right-radius: 4px;
      }

      .message-text {
        margin: 0;
        word-break: break-word;
      }
    }

    .attachments {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 8px;

      .attachment {
        border-radius: 8px;
        overflow: hidden;

        img.attachment-image {
          max-width: 100%;
          max-height: 300px;
          border-radius: 8px;
        }

        video.attachment-video {
          max-width: 100%;
          max-height: 300px;
          border-radius: 8px;
        }

        .attachment-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          color: inherit;
          text-decoration: none;

          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
          }
        }
      }
    }

    .message-meta {
      font-size: 12px;
      color: #999;
      margin-top: 4px;
      display: flex;
      gap: 8px;

      .edited-badge, .deleted-badge {
        font-style: italic;
        opacity: 0.7;
      }
    }

    .reactions-display {
      display: flex;
      gap: 4px;
      margin-top: 8px;
      flex-wrap: wrap;

      .reaction-group {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 2px 6px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        font-size: 12px;

        .reaction-emoji {
          font-size: 14px;
        }

        .reaction-count {
          opacity: 0.8;
        }
      }
    }

    .message-actions {
      opacity: 0;
      transition: opacity 0.2s;
    }

    .reactions-picker-wrapper {
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s;
      position: absolute;
      bottom: -50px;
      left: 0;
    }

    .edit-form {
      margin: 12px 0;
      padding: 12px;
      background-color: #fafafa;
      border-radius: 8px;

      .edit-textarea {
        width: 100%;
        min-height: 60px;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: inherit;
        resize: vertical;
      }

      .edit-actions {
        display: flex;
        gap: 8px;
        margin-top: 8px;

        button {
          padding: 6px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;

          &.btn-save {
            background-color: #667eea;
            color: white;

            &:hover {
              background-color: #764ba2;
            }
          }

          &.btn-cancel {
            background-color: #f0f0f0;
            color: #333;

            &:hover {
              background-color: #e0e0e0;
            }
          }
        }
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class MessageBubbleComponent implements OnInit {
  @Input() message!: Message;
  @Input() attachments: MessageAttachment[] = [];
  @Input() reactions: MessageReaction[] = [];
  @Output() reactionAdded = new EventEmitter<ReactionType>();
  @Output() reactionRemoved = new EventEmitter<ReactionType>();
  @Output() messageEdited = new EventEmitter<string>();
  @Output() messageDeleted = new EventEmitter<void>();

  private authService = inject(AuthService);

  isOwnMessage = false;
  isEditing = false;
  editingContent = '';
  showReactionPicker = false;

  ngOnInit(): void {
    const currentUserId = this.authService.currentUser?.id;
    this.isOwnMessage = this.message.sender.id === currentUserId;
  }

  getInitials(name?: string): string {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  }

  getReactionEmoji(reactionType: ReactionType): string {
    const emojis: { [key in ReactionType]: string } = {
      'LIKE': '👍',
      'LOVE': '❤️',
      'CELEBRATE': '🎉',
      'SUPPORT': '🙌',
      'INSIGHTFUL': '💡'
    };
    return emojis[reactionType];
  }

  get groupedReactions() {
    const grouped: { type: ReactionType; count: number }[] = [];
    const types = new Set<ReactionType>();

    this.reactions.forEach(r => types.add(r.reactionType));
    types.forEach(type => {
      const count = this.reactions.filter(r => r.reactionType === type).length;
      grouped.push({ type, count });
    });

    return grouped;
  }

  onReactionSelect(type: ReactionType): void {
    this.reactionAdded.emit(type);
  }

  onEdit(): void {
    this.isEditing = true;
    this.editingContent = this.message.content;
  }

  saveEdit(): void {
    if (this.editingContent.trim()) {
      this.messageEdited.emit(this.editingContent);
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  onDelete(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      this.messageDeleted.emit();
    }
  }
}
