import { Component, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChannelService } from '../../../core/services/channel.service';
import { AuthService } from '../../../core/services/auth.service';
import { Channel, ChannelMessage, ReactionType } from '../../../core/models/models';

@Component({
  selector: 'app-channels',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule, MatTooltipModule
  ],
  template: `
<div class="channels-layout">

  <!-- Sidebar : liste des canaux -->
  <div class="sidebar">
    <div class="sidebar-header">
      <h3>Canaux</h3>
      <button mat-icon-button (click)="showNewChannel=!showNewChannel" matTooltip="Créer un canal">
        <mat-icon>add</mat-icon>
      </button>
    </div>

    <!-- Créer un canal -->
    @if(showNewChannel) {
      <form [formGroup]="channelForm" (ngSubmit)="createChannel()" class="new-channel-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nom du canal</mat-label>
          <input matInput formControlName="name">
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Description (optionnel)</mat-label>
          <input matInput formControlName="description">
        </mat-form-field>
        <label class="public-toggle">
          <input type="checkbox" formControlName="publicChannel"> Canal public
        </label>
        <div class="form-actions">
          <button mat-button type="button" (click)="showNewChannel=false">Annuler</button>
          <button mat-raised-button color="primary" type="submit" [disabled]="channelForm.invalid || creating">Créer</button>
        </div>
      </form>
    }

    <!-- Recherche -->
    <mat-form-field appearance="outline" class="full-width search-field">
      <mat-label>Rechercher</mat-label>
      <input matInput [(ngModel)]="searchQ" (keyup.enter)="searchChannels()">
      <button matSuffix mat-icon-button (click)="searchChannels()"><mat-icon>search</mat-icon></button>
    </mat-form-field>

    <mat-tab-group (selectedIndexChange)="onTabChange($event)">
      <mat-tab label="Mes canaux">
        @for(ch of myChannels; track ch.id) {
          <div class="channel-item" [class.active]="selectedChannel?.id===ch.id" (click)="selectChannel(ch)">
            <div class="ch-avatar">{{ ch.name[0].toUpperCase() }}</div>
            <div class="ch-info">
              <span class="ch-name">{{ ch.name }}</span>
              <span class="ch-members">{{ ch.memberCount }} membres</span>
            </div>
          </div>
        }
        @if(myChannels.length===0 && !loadingChannels) {
          <p class="empty-hint">Vous n'avez rejoint aucun canal.</p>
        }
      </mat-tab>
      <mat-tab label="Explorer">
        @for(ch of publicChannels; track ch.id) {
          <div class="channel-item" [class.active]="selectedChannel?.id===ch.id" (click)="selectChannel(ch)">
            <div class="ch-avatar">{{ ch.name[0].toUpperCase() }}</div>
            <div class="ch-info">
              <span class="ch-name">{{ ch.name }}</span>
              <span class="ch-members">{{ ch.memberCount }} membres</span>
            </div>
            @if(!ch.isMember) {
              <button mat-stroked-button (click)="join(ch,$event)">Rejoindre</button>
            }
          </div>
        }
      </mat-tab>
    </mat-tab-group>
  </div>

  <!-- Chat zone -->
  <div class="chat-zone">
    @if(!selectedChannel) {
      <div class="chat-placeholder">
        <mat-icon>forum</mat-icon>
        <p>Sélectionnez un canal pour commencer à discuter</p>
      </div>
    } @else {
      <!-- Channel header -->
      <div class="chat-header">
        <div class="ch-avatar">{{ selectedChannel.name[0].toUpperCase() }}</div>
        <div>
          <span class="ch-name">{{ selectedChannel.name }}</span>
          <span class="ch-members">{{ selectedChannel.memberCount }} membres</span>
        </div>
        @if(!selectedChannel.isMember) {
          <button mat-raised-button color="primary" (click)="joinSelected()">Rejoindre</button>
        } @else if(selectedChannel.owner.id !== auth.currentUser?.id) {
          <button mat-stroked-button (click)="leaveSelected()">Quitter</button>
        }
      </div>

      <!-- Messages -->
      <div class="messages-container" #msgContainer>
        @if(loadingMessages){<div class="center-spinner"><mat-spinner diameter="32"></mat-spinner></div>}
        @for(msg of messages; track msg.id) {
          <div class="msg" [class.mine]="msg.sender.id===auth.currentUser?.id">
            @if(msg.sender.id!==auth.currentUser?.id) {
              <div class="avatar-xs">{{ initials(msg.sender.fullName) }}</div>
            }
            <div class="msg-bubble" [class.mine]="msg.sender.id===auth.currentUser?.id">
              @if(msg.sender.id!==auth.currentUser?.id) {
                <span class="msg-sender">{{ msg.sender.fullName }}</span>
              }
              @if(msg.replyTo) {
                <div class="reply-preview">↩ {{ msg.replyTo.content | slice:0:60 }}…</div>
              }
              <p>{{ msg.content }}</p>
              <div class="msg-actions">
                <span class="msg-time">{{ msg.sentAt | date:'HH:mm' }}</span>
                <button mat-icon-button class="tiny-btn" [matMenuTriggerFor]="msgMenu" (click)="$event.stopPropagation()">
                  <mat-icon style="font-size:16px">more_horiz</mat-icon>
                </button>
                <mat-menu #msgMenu>
                  <button mat-menu-item (click)="setReplyTo(msg)">↩ Répondre</button>
                  <button mat-menu-item (click)="reactMsg(msg,'LIKE')">👍 J'aime</button>
                  <button mat-menu-item (click)="reactMsg(msg,'LOVE')">❤️ J'adore</button>
                  @if(msg.sender.id===auth.currentUser?.id){
                    <button mat-menu-item (click)="deleteMsg(msg)">🗑 Supprimer</button>
                  }
                </mat-menu>
              </div>
            </div>
          </div>
        }
      </div>

      <!-- Compose -->
      @if(selectedChannel.isMember) {
        <div class="compose">
          @if(replyingTo) {
            <div class="reply-bar">
              ↩ Réponse à <b>{{ replyingTo.sender.fullName }}</b>: {{ replyingTo.content | slice:0:50 }}
              <button mat-icon-button (click)="replyingTo=null"><mat-icon>close</mat-icon></button>
            </div>
          }
          <mat-form-field appearance="outline" class="compose-field">
            <mat-label>Message…</mat-label>
            <input matInput [(ngModel)]="newMsg" (keyup.enter)="sendMessage()">
          </mat-form-field>
          <button mat-fab color="primary" (click)="sendMessage()" [disabled]="!newMsg.trim()||sending">
            <mat-icon>send</mat-icon>
          </button>
        </div>
      } @else {
        <div class="join-prompt">
          <button mat-raised-button color="primary" (click)="joinSelected()">Rejoindre pour participer</button>
        </div>
      }
    }
  </div>
</div>
  `,
  styles: [`
.channels-layout{display:flex;height:calc(100vh - 80px);background:#f8fafc;border-radius:12px;overflow:hidden}
.sidebar{width:300px;background:#fff;border-right:1px solid #e2e8f0;display:flex;flex-direction:column;flex-shrink:0}
.sidebar-header{display:flex;align-items:center;justify-content:space-between;padding:16px;border-bottom:1px solid #e2e8f0}
.sidebar-header h3{margin:0;font-size:16px;font-weight:700;color:#1e293b}
.search-field{margin:8px 12px 0;width:calc(100% - 24px)}
.new-channel-form{padding:12px;border-bottom:1px solid #e2e8f0;display:flex;flex-direction:column;gap:8px}
.public-toggle{display:flex;align-items:center;gap:8px;font-size:14px;cursor:pointer}
.form-actions{display:flex;gap:8px;justify-content:flex-end}
.full-width{width:100%}
.channel-item{display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer;border-bottom:1px solid #f1f5f9;transition:background .15s}
.channel-item:hover,.channel-item.active{background:#f1f5f9}
.ch-avatar{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0}
.ch-info{flex:1;min-width:0}
.ch-name{font-weight:600;font-size:14px;color:#1e293b;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.ch-members{font-size:12px;color:#94a3b8}
.empty-hint{padding:16px;color:#94a3b8;font-size:13px;text-align:center}
.chat-zone{flex:1;display:flex;flex-direction:column;overflow:hidden}
.chat-placeholder{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#94a3b8}
.chat-placeholder mat-icon{font-size:56px;width:56px;height:56px;margin-bottom:12px}
.chat-header{display:flex;align-items:center;gap:12px;padding:14px 20px;background:#fff;border-bottom:1px solid #e2e8f0}
.messages-container{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:8px}
.center-spinner{display:flex;justify-content:center;padding:20px}
.msg{display:flex;gap:8px;align-items:flex-end}
.msg.mine{flex-direction:row-reverse}
.msg-bubble{max-width:72%;background:#f1f5f9;border-radius:12px;padding:8px 12px;position:relative}
.msg-bubble.mine{background:#6366f1;color:#fff}
.msg-sender{font-weight:600;font-size:12px;color:#6366f1;display:block;margin-bottom:4px}
.msg-bubble.mine .msg-sender{color:#c7d2fe}
.msg-bubble p{margin:0;font-size:14px;line-height:1.5;word-break:break-word}
.reply-preview{background:rgba(0,0,0,.08);border-radius:6px;padding:4px 8px;font-size:12px;margin-bottom:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.msg-actions{display:flex;align-items:center;justify-content:flex-end;gap:4px;margin-top:4px}
.msg-time{font-size:11px;opacity:.7}
.tiny-btn{width:24px;height:24px;line-height:24px}
.avatar-xs{width:28px;height:28px;border-radius:50%;background:#e2e8f0;color:#64748b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0}
.compose{padding:12px 16px;background:#fff;border-top:1px solid #e2e8f0;display:flex;align-items:center;gap:8px}
.reply-bar{background:#f1f5f9;border-left:3px solid #6366f1;padding:6px 10px;font-size:13px;display:flex;align-items:center;gap:8px;border-radius:4px;flex:1}
.compose-field{flex:1}
.join-prompt{padding:20px;text-align:center;background:#fff;border-top:1px solid #e2e8f0}
  `]
})
export class ChannelsComponent implements OnInit {
  readonly auth      = inject(AuthService);
  private readonly channelSvc = inject(ChannelService);
  private readonly snack      = inject(MatSnackBar);
  private readonly fb         = inject(FormBuilder);

  @ViewChild('msgContainer') msgContainer!: ElementRef;

  myChannels:     Channel[] = [];
  publicChannels: Channel[] = [];
  selectedChannel: Channel | null = null;
  messages: ChannelMessage[] = [];

  loadingChannels = true;
  loadingMessages = false;
  creating  = false;
  sending   = false;
  showNewChannel = false;
  searchQ = '';
  newMsg  = '';
  replyingTo: ChannelMessage | null = null;
  activeTab = 0;

  channelForm = this.fb.group({
    name:          ['', Validators.required],
    description:   [''],
    publicChannel: [true]
  });

  ngOnInit(): void {
    this.loadMyChannels();
    this.loadPublicChannels();
  }

  onTabChange(idx: number): void {
    this.activeTab = idx;
    if (idx === 1 && this.publicChannels.length === 0) this.loadPublicChannels();
  }

  loadMyChannels(): void {
    this.channelSvc.getMyChannels().subscribe({
      next: res => { this.myChannels = res.data.content; this.loadingChannels = false; },
      error: () => { this.loadingChannels = false; }
    });
  }

  loadPublicChannels(): void {
    this.channelSvc.search(this.searchQ || undefined).subscribe({
      next: res => { this.publicChannels = res.data.content; }
    });
  }

  searchChannels(): void { this.loadPublicChannels(); }

  createChannel(): void {
    if (this.channelForm.invalid) return;
    this.creating = true;
    this.channelSvc.create(this.channelForm.value as any).subscribe({
      next: res => {
        this.myChannels.unshift({ ...res.data, isMember: true, memberCount: 1 });
        this.channelForm.reset({ publicChannel: true });
        this.showNewChannel = false; this.creating = false;
        this.snack.open('Canal créé', 'OK', { duration: 2000 });
      },
      error: () => { this.creating = false; }
    });
  }

  selectChannel(ch: Channel): void {
    this.selectedChannel = ch;
    this.messages = [];
    this.loadMessages(ch.id);
  }

  loadMessages(channelId: number): void {
    this.loadingMessages = true;
    this.channelSvc.getMessages(channelId).subscribe({
      next: res => {
        this.messages = res.data.content;
        this.loadingMessages = false;
        this.scrollToBottom();
      },
      error: () => { this.loadingMessages = false; }
    });
  }

  sendMessage(): void {
    if (!this.newMsg.trim() || !this.selectedChannel || this.sending) return;
    this.sending = true;
    const req = { content: this.newMsg, replyToId: this.replyingTo?.id };
    this.channelSvc.sendMessage(this.selectedChannel.id, req).subscribe({
      next: res => {
        this.messages.push(res.data);
        this.newMsg = ''; this.replyingTo = null; this.sending = false;
        this.scrollToBottom();
      },
      error: () => { this.sending = false; }
    });
  }

  deleteMsg(msg: ChannelMessage): void {
    this.channelSvc.deleteMessage(msg.id).subscribe(() => {
      this.messages = this.messages.filter(m => m.id !== msg.id);
    });
  }

  reactMsg(msg: ChannelMessage, type: string): void {
    this.channelSvc.react(msg.id, type).subscribe(() => {
      msg.reactionCount = (msg.reactionCount || 0) + 1;
    });
  }

  setReplyTo(msg: ChannelMessage): void { this.replyingTo = msg; }

  join(ch: Channel, e: Event): void {
    e.stopPropagation();
    this.channelSvc.join(ch.id).subscribe(() => {
      ch.isMember = true;
      ch.memberCount = (ch.memberCount || 0) + 1;
      if (!this.myChannels.find(c => c.id === ch.id)) this.myChannels.push(ch);
      this.snack.open('Vous avez rejoint ' + ch.name, 'OK', { duration: 2000 });
    });
  }

  joinSelected(): void {
    if (!this.selectedChannel) return;
    this.channelSvc.join(this.selectedChannel.id).subscribe(() => {
      this.selectedChannel!.isMember = true;
      this.selectedChannel!.memberCount = (this.selectedChannel!.memberCount || 0) + 1;
      this.loadMessages(this.selectedChannel!.id);
      this.snack.open('Vous avez rejoint le canal', 'OK', { duration: 2000 });
    });
  }

  leaveSelected(): void {
    if (!this.selectedChannel) return;
    this.channelSvc.leave(this.selectedChannel.id).subscribe(() => {
      this.myChannels = this.myChannels.filter(c => c.id !== this.selectedChannel!.id);
      this.selectedChannel!.isMember = false;
      this.messages = [];
      this.snack.open('Vous avez quitté le canal', 'OK', { duration: 2000 });
    });
  }

  initials(name?: string | null): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  private scrollToBottom(): void {
    setTimeout(() => {
      const el = this.msgContainer?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    }, 60);
  }
}
