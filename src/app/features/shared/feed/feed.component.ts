import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { PostService } from '../../../core/services/post.service';
import { FollowService } from '../../../core/services/follow.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConfigService } from '../../../core/services/config.service';
import { Post, Comment, ReactionType, FilePreview } from '../../../core/models/models';
import { AttachmentUploaderComponent } from '../../../shared/components/attachment-uploader/attachment-uploader.component';
import { MediaViewerComponent } from '../../../shared/components/media-viewer/media-viewer.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule,
    AttachmentUploaderComponent, MediaViewerComponent
  ],
  template: `
<div class="feed-layout">

  <!-- Create post -->
  <div class="card create-post-card">
    <div class="post-author-row">
      <div class="avatar-sm">{{ initials(auth.currentUser?.fullName) }}</div>
      <button class="create-trigger" (click)="showCreateForm = !showCreateForm">
        Partagez quelque chose…
      </button>
    </div>
    @if (showCreateForm) {
      <form [formGroup]="postForm" (ngSubmit)="createPost()" class="post-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Votre publication</mat-label>
          <textarea matInput formControlName="content" rows="4" placeholder="Écrivez votre publication…"></textarea>
        </mat-form-field>
        <div class="upload-section">
          <app-attachment-uploader
            [maxSizeMb]="50"
            [acceptTypes]="'all'"
            (fileSelected)="onFilePreviewSelected($event)">
          </app-attachment-uploader>
          @if(selectedPostAttachment) {
            <div class="attachment-badge">
              <mat-icon>check_circle</mat-icon>
              <span>{{ selectedPostAttachment.file.name }}</span>
              <button mat-icon-button (click)="removePostAttachment()" matTooltip="Retirer">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          }
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>URL Media (optionnel - legacy)</mat-label>
          <input matInput formGroupName="mediaUrl" placeholder="https://…">
        </mat-form-field>
        <div class="form-actions">
          <button mat-button type="button" (click)="showCreateForm=false">Annuler</button>
          <button class="btn-primary" type="submit" [disabled]="postForm.invalid || creating">
            @if(creating){<mat-spinner diameter="18"></mat-spinner>}@else{Publier}
          </button>
        </div>
      </form>
    }
  </div>

  @if(loading){ <div class="center-spinner"><mat-spinner></mat-spinner></div> }

  @for(post of posts; track post.id) {
    <div class="card post-card">
      <div class="post-header">
        <div class="post-header-left">
          <div class="avatar">{{ initials(post.author.fullName) }}</div>
          <div class="post-header-info">
            <span class="author-name">{{ post.author.fullName }}</span>
            <span class="post-time">{{ post.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
          </div>
        </div>
        <div class="post-header-right">
          @if(post.author.id !== auth.currentUser?.id) {
            <button class="follow-btn" [class.followed]="followingMap[post.author.id]"
                    (click)="toggleFollow(post.author.id)">
              {{ followingMap[post.author.id] ? '✓ Abonné' : '+ Suivre' }}
            </button>
          } @else {
            <button class="icon-btn" [matMenuTriggerFor]="postMenu"><mat-icon>more_vert</mat-icon></button>
            <mat-menu #postMenu><button mat-menu-item (click)="deletePost(post)"><mat-icon>delete</mat-icon>Supprimer</button></mat-menu>
          }
        </div>
      </div>
      <p class="post-content">{{ post.content }}</p>
      @if(post.attachmentFileUrl) {
        <app-media-viewer
          [attachmentFileUrl]="post.attachmentFileUrl"
          [attachmentFileType]="post.attachmentFileType || 'IMAGE'"
          [fileName]="post.attachmentFileName || ''"
          [attachmentFileSize]="post.attachmentFileSize || 0">
        </app-media-viewer>
      } @else if(post.mediaUrl) {
        <app-media-viewer
          [attachmentFileUrl]="post.mediaUrl"
          [attachmentFileType]="'IMAGE'"
          [fileName]="'Image'"
          [attachmentFileSize]="0">
        </app-media-viewer>
      }
      <div class="post-counts">
        @if((post.reactionCount||0)>0){<span>👍 {{post.reactionCount}}</span>}
        @if((post.commentCount||0)>0){<span>💬 {{post.commentCount}} commentaire(s)</span>}
      </div>
      <div class="post-actions">
        <button class="action-btn" [class.reacted]="post.userReaction==='LIKE'" (click)="react(post,'LIKE')"><mat-icon>thumb_up</mat-icon>J'aime</button>
        <button class="action-btn" [class.reacted]="post.userReaction==='LOVE'" (click)="react(post,'LOVE')"><mat-icon>favorite</mat-icon>J'adore</button>
        <button class="action-btn" [class.reacted]="post.userReaction==='CELEBRATE'" (click)="react(post,'CELEBRATE')"><mat-icon>celebration</mat-icon>Bravo</button>
        <button class="action-btn" (click)="toggleComments(post)"><mat-icon>chat_bubble_outline</mat-icon>Commenter</button>
      </div>
      @if(openComments[post.id]) {
        <div class="comments-section">
          @for(c of commentsMap[post.id]||[]; track c.id) {
            <div class="comment">
              <div class="avatar-xs">{{ initials(c.author.fullName) }}</div>
              <div class="comment-body">
                <span class="comment-author">{{ c.author.fullName }}</span>
                <p>{{ c.content }}</p>
                @if(c.attachmentFileUrl) {
                  <div class="comment-media-wrapper">
                    <app-media-viewer
                      [attachmentFileUrl]="c.attachmentFileUrl"
                      [attachmentFileType]="c.attachmentFileType || 'IMAGE'"
                      [fileName]="c.attachmentFileName || ''"
                      [attachmentFileSize]="c.attachmentFileSize || 0">
                    </app-media-viewer>
                  </div>
                }
                <button class="reply-btn" (click)="setReply(post.id,c)">Répondre</button>
                @for(r of c.replies||[]; track r.id) {
                  <div class="reply"><div class="avatar-xs">{{ initials(r.author.fullName) }}</div>
                    <div class="comment-body">
                      <span class="comment-author">{{ r.author.fullName }}</span>
                      <p>{{ r.content }}</p>
                      @if(r.attachmentFileUrl) {
                        <div class="comment-media-wrapper">
                          <app-media-viewer
                            [attachmentFileUrl]="r.attachmentFileUrl"
                            [attachmentFileType]="r.attachmentFileType || 'IMAGE'"
                            [fileName]="r.attachmentFileName || ''"
                            [attachmentFileSize]="r.attachmentFileSize || 0">
                          </app-media-viewer>
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          }
          <div class="comment-input-row">
            <div class="avatar-xs">{{ initials(auth.currentUser?.fullName) }}</div>
            <mat-form-field appearance="outline" class="comment-field">
              <mat-label>{{ replyTarget[post.id] ? 'Répondre à '+replyTarget[post.id]!.author.fullName : 'Commenter…' }}</mat-label>
              <input matInput [(ngModel)]="commentText[post.id]" (keyup.enter)="submitComment(post)">
              @if(replyTarget[post.id]){<button matSuffix class="icon-btn-small" (click)="clearReply(post.id)"><mat-icon>close</mat-icon></button>}
            </mat-form-field>
            <button mat-icon-button class="submit-comment-btn" (click)="submitComment(post)" [disabled]="!commentText[post.id]?.trim()">
              <mat-icon>send</mat-icon>
            </button>
          </div>
        </div>
      }
    </div>
  }

  @if(!loading && posts.length===0) {
    <div class="card empty-state">
      <mat-icon>newspaper</mat-icon>
      <p>Votre fil est vide. Suivez des utilisateurs pour voir leurs publications.</p>
    </div>
  }
  @if(!loading && !lastPage && posts.length>0) {
    <div class="load-more"><button class="btn-outline" (click)="loadMore()">Voir plus</button></div>
  }
</div>
  `,
  styles: [`
    :host {
      --orange: #FF8C00;
      --orange-dark: #E67600;
      --orange-light: #FFA333;
      --black: #1A1A1A;
      --black-light: #2C2C2C;
      --white: #FFFFFF;
      --gray-light: #F5F5F5;
      --gray-medium: #E0E0E0;
    }

    .feed-layout {
      max-width: 700px;
      margin: 0 auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background: #f0f2f5;
      min-height: 100vh;
    }

    .card {
      background: var(--white);
      border-radius: 12px;
      padding: 0;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      border: none;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .card:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-2px);
    }

    .post-card {
      background: var(--white);
      overflow: hidden;
      animation: slideIn 0.4s ease;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .create-post-card {
      background: var(--white);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      border: none;
      padding: 20px;
    }

    .post-author-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .create-trigger {
      flex: 1;
      background: var(--gray-light);
      border: 1px solid var(--gray-medium);
      border-radius: 24px;
      padding: 10px 20px;
      text-align: left;
      cursor: pointer;
      color: var(--black-light);
      font-size: 14px;
      transition: all 0.2s;
    }

    .create-trigger:hover {
      background: linear-gradient(135deg, var(--orange-light), var(--orange));
      border-color: var(--orange);
      color: var(--white);
      box-shadow: 0 2px 8px rgba(255, 140, 0, 0.2);
    }

    .post-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 12px;
    }

    .full-width {
      width: 100%;
    }

    .form-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      color: var(--white);
      border: none;
      padding: 10px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 2px 8px rgba(255, 140, 0, 0.2);
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--orange-dark), #D66F00);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(255, 140, 0, 0.3);
    }

    .btn-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .btn-outline {
      background: transparent;
      color: var(--orange);
      border: 2px solid var(--orange);
      padding: 8px 24px;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
    }

    .btn-outline:hover {
      background: var(--orange);
      color: var(--white);
      box-shadow: 0 4px 12px rgba(255, 140, 0, 0.2);
      transform: translateY(-1px);
    }

    .action-btn {
      flex: 1;
      background: transparent;
      border: none;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 13px;
      font-weight: 500;
      color: var(--black-light);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .action-btn:hover {
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange);
      transform: translateY(-1px);
    }

    .action-btn.reacted {
      color: var(--orange);
      background: rgba(255, 140, 0, 0.15);
      font-weight: 700;
    }

    .action-btn.reacted:hover {
      background: rgba(255, 140, 0, 0.2);
      color: var(--orange-dark);
    }

    .post-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 20px;
      border-bottom: 1px solid var(--gray-medium);
    }

    .post-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
    }

    .post-header-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .author-name {
      font-weight: 600;
      font-size: 15px;
      color: var(--black);
    }

    .post-time {
      font-size: 13px;
      color: #65676B;
    }

    .post-header-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .follow-btn {
      background: var(--orange);
      color: var(--white);
      border: none;
      padding: 8px 16px;
      border-radius: 6px;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s;
    }

    .follow-btn:hover {
      background: var(--orange-dark);
      box-shadow: 0 2px 8px rgba(255, 140, 0, 0.2);
    }

    .follow-btn.followed {
      background: transparent;
      color: var(--black-light);
      border: 1px solid var(--gray-medium);
    }

    .follow-btn.followed:hover {
      background: var(--gray-light);
    }

    .post-content {
      padding: 12px 20px;
      font-size: 15px;
      color: var(--black);
      line-height: 1.5;
      margin: 0;
      word-break: break-word;
    }

    app-media-viewer {
      width: 100%;
      display: block;
    }

    .post-media {
      width: 100%;
      display: block;
      background: var(--black);
      max-height: 600px;
      object-fit: cover;
    }

    .media-container {
      width: 100%;
      overflow: hidden;
      background: #000;
    }

    .media-container img,
    .media-container video {
      width: 100%;
      height: auto;
      display: block;
    }

    .video-container {
      aspect-ratio: 16 / 9;
    }

    .audio-container {
      padding: 16px 20px;
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 163, 51, 0.05));
      border-top: 1px solid var(--gray-medium);
    }

    .post-audio {
      width: 100%;
      outline: none;
    }

    .document-preview-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      background: linear-gradient(135deg, #f5f5f5, #e8e8e8);
      border: 1px solid var(--gray-medium);
      border-radius: 0;
      margin: 0;
      margin-top: -1px;
    }

    .document-icon {
      flex-shrink: 0;
    }

    .document-icon mat-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
      color: var(--orange);
    }

    .document-info {
      flex: 1;
      min-width: 0;
    }

    .document-name {
      margin: 0;
      font-weight: 600;
      font-size: 14px;
      color: var(--black);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .document-size {
      font-size: 12px;
      color: #999;
      display: block;
      margin-top: 2px;
    }

    .document-link {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: var(--orange);
      color: var(--white);
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.2s;
    }

    .document-link:hover {
      background: var(--orange-dark);
      transform: scale(1.1);
      box-shadow: 0 2px 8px rgba(255, 140, 0, 0.3);
    }

    .document-link mat-icon {
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .post-counts {
      display: flex;
      gap: 16px;
      padding: 12px 20px;
      font-size: 13px;
      color: #65676B;
      border-bottom: 1px solid var(--gray-medium);
      background: linear-gradient(180deg, #fafafa 0%, transparent 100%);
    }

    .post-counts span {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 500;
    }

    .post-actions {
      display: flex;
      gap: 0;
      padding: 8px 0;
      background: var(--white);
      border-bottom: 1px solid var(--gray-medium);
      transition: all 0.2s ease;
    }

    .post-actions:hover {
      background: #fafafa;
    }

    .comments-section {
      margin-top: 16px;
      border-top: 1px solid var(--gray-medium);
      padding-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .comment, .reply {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .reply {
      margin-left: 40px;
      margin-top: 12px;
      animation: slideIn 0.3s ease;
    }

    .reply .comment-body {
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.05), rgba(255, 163, 51, 0.02));
      border-left: 3px solid var(--orange-light);
      padding-left: 12px;
    }

    .reply .comment-body:hover {
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 163, 51, 0.04));
    }

    .comment-body {
      flex: 1;
      background: var(--gray-light);
      border-radius: 12px;
      padding: 12px 14px;
      font-size: 13px;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .comment-body:hover {
      background: #eeeeee;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    }

    .comment-author {
      font-weight: 700;
      font-size: 13px;
      display: block;
      color: var(--black);
      margin-bottom: 4px;
    }

    .comment-body p {
      margin: 4px 0;
      font-size: 14px;
      color: var(--black-light);
    }

    .comment-media-wrapper {
      margin: 12px 0;
      border-radius: 8px;
      overflow: hidden;
      background: #f9f9f9;
    }

    app-media-viewer {
      width: 100%;
    }

    .reply-btn {
      background: transparent;
      border: none;
      font-size: 12px;
      padding: 4px 8px;
      min-width: unset;
      color: var(--orange);
      cursor: pointer;
      margin-top: 8px;
      font-weight: 600;
      border-radius: 4px;
      transition: all 0.2s ease;
    }

    .reply-btn:hover {
      background: rgba(255, 140, 0, 0.1);
      color: var(--orange-dark);
    }

    .comment-input-row {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      margin-top: 8px;
      padding-top: 12px;
      border-top: 1px solid var(--gray-medium);
    }

    .comment-field {
      flex: 1;
    }

    .avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 16px;
      flex-shrink: 0;
    }

    .avatar-sm {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 13px;
      flex-shrink: 0;
    }

    .avatar-xs {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--orange-light);
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 12px;
      flex-shrink: 0;
    }

    .empty-state {
      text-align: center;
      padding: 48px;
      color: var(--black-light);
    }

    .empty-state mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--orange);
    }

    .load-more {
      text-align: center;
      margin-top: 8px;
      padding: 16px;
    }

    .load-more .btn-outline {
      display: inline-block;
    }

    .icon-btn-small {
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--black-light);
      display: flex;
      align-items: center;
    }

    .icon-btn-small:hover {
      color: var(--orange);
    }

    .icon-btn {
      background: transparent;
      border: none;
      cursor: pointer;
      color: #65676B;
      display: flex;
      align-items: center;
      padding: 8px;
      border-radius: 50%;
      transition: all 0.2s;
    }

    .icon-btn:hover {
      background: var(--gray-light);
      color: var(--black);
    }

    .upload-section {
      margin: 12px 0;
    }

    .attachment-badge {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 16px;
      background: linear-gradient(135deg, rgba(255,140,0,0.1) 0%, rgba(255,163,51,0.05) 100%);
      border-left: 4px solid var(--orange);
      border-radius: 8px;
      margin-top: 12px;
      color: var(--black-light);
      font-size: 14px;
    }

    .attachment-badge mat-icon {
      color: var(--orange);
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .attachment-badge span {
      flex: 1;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .attachment-badge button {
      flex-shrink: 0;
    }

    .attachment-info {
      padding: 12px;
      background-color: #e8f5e9;
      border-radius: 8px;
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .attachment-info p {
      margin: 0;
      color: var(--black-light);
      font-size: 14px;
    }

    .document-preview {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 8px;
      margin-bottom: 16px;
      border: 1px solid var(--gray-medium);
    }

    .document-preview mat-icon {
      color: var(--orange);
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    .document-preview a {
      color: var(--orange);
      text-decoration: none;
      font-weight: 500;
      flex: 1;
    }

    .document-preview a:hover {
      text-decoration: underline;
    }

    .document-preview span {
      color: #999;
      font-size: 12px;
      margin-left: auto;
    }

    .comment-media {
      width: 100%;
      max-width: 250px;
      border-radius: 8px;
      margin: 8px 0;
      border: 1px solid var(--gray-medium);
      display: block;
    }

    .doc-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--orange);
      text-decoration: none;
      font-size: 13px;
      margin: 4px 0;
      font-weight: 500;
      padding: 8px 12px;
      background: rgba(255, 140, 0, 0.05);
      border-radius: 6px;
      transition: all 0.2s;
    }

    .doc-link:hover {
      text-decoration: none;
      background: rgba(255, 140, 0, 0.1);
      color: var(--orange-dark);
    }

    .center-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 40px;
    }

    .submit-comment-btn {
      color: var(--orange);
      transition: all 0.2s;
    }

    .submit-comment-btn:hover:not(:disabled) {
      transform: scale(1.2);
      color: var(--orange-dark);
    }

    .submit-comment-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    /* RESPONSIVE DESIGN */
    @media (max-width: 768px) {
      .feed-layout {
        padding: 12px;
        gap: 12px;
      }

      .post-card,
      .create-post-card {
        border-radius: 8px;
      }

      .post-header {
        padding: 12px 16px;
      }

      .post-content {
        padding: 12px 16px;
        font-size: 14px;
      }

      .post-actions {
        flex-direction: row;
      }

      .action-btn {
        padding: 8px;
        font-size: 12px;
      }

      .avatar {
        width: 40px;
        height: 40px;
        font-size: 14px;
      }

      .avatar-sm {
        width: 32px;
        height: 32px;
        font-size: 12px;
      }

      .reply {
        margin-left: 20px;
      }

      .comment {
        flex-direction: column;
      }

      .comment-media-wrapper {
        max-width: 100%;
      }

      .follow-btn {
        padding: 6px 12px;
        font-size: 12px;
      }
    }

    @media (max-width: 480px) {
      .feed-layout {
        padding: 8px;
        gap: 8px;
      }

      .post-header-left {
        gap: 8px;
      }

      .post-header-info {
        gap: 2px;
      }

      .author-name {
        font-size: 14px;
      }

      .post-time {
        font-size: 12px;
      }

      .post-actions {
        padding: 4px 0;
      }

      .action-btn {
        padding: 6px;
        font-size: 11px;
        gap: 4px;
      }

      .reply {
        margin-left: 12px;
      }

      .comment-input-row {
        gap: 8px;
      }

      .avatar-xs {
        width: 28px;
        height: 28px;
        font-size: 11px;
      }
    }
  `]
})
export class FeedComponent implements OnInit {
  readonly auth  = inject(AuthService);
  private readonly postSvc   = inject(PostService);
  private readonly followSvc = inject(FollowService);
  private readonly alertSvc = inject(AlertService);
  private readonly configSvc = inject(ConfigService);
  private readonly fb        = inject(FormBuilder);

  loading    = true;
  creating   = false;
  posts: Post[] = [];
  page       = 0;
  lastPage   = false;
  showCreateForm = false;

  followingMap: Record<number,boolean> = {};
  openComments: Record<number,boolean> = {};
  commentsMap:  Record<number,Comment[]> = {};
  commentText:  Record<number,string>  = {};
  replyTarget:  Record<number,Comment|null> = {};

  selectedPostAttachment: FilePreview | null = null;
  pendingFileToUpload: File | null = null;
  commentAttachmentMap: Record<number, FilePreview | null> = {};

  postForm = this.fb.group({
    content:  ['', [Validators.required, Validators.minLength(1)]],
    mediaUrl: ['']
  });

  ngOnInit(): void { this.loadFeed(); }

  loadFeed(): void {
    this.loading = true;
    this.postSvc.getFeed(this.page, 10).subscribe({
      next: res => {
        this.posts.push(...res.data.content);
        this.lastPage = res.data.last;
        this.loading  = false;
        this.updateFollowMap();
      },
      error: () => { this.loading = false; }
    });
  }

  loadMore(): void { this.page++; this.loadFeed(); }

  createPost(): void {
    if (this.postForm.invalid) return;
    this.creating = true;
    const { content, mediaUrl } = this.postForm.value;
    this.postSvc.create(content!, mediaUrl || undefined).subscribe({
      next: res => {
        const newPost = res.data;
        this.posts.unshift(newPost);
        this.postForm.reset();
        this.showCreateForm = false;
        this.alertSvc.success('Publication créée');

        // Upload attachment si un fichier est en attente
        if (this.pendingFileToUpload && newPost.id) {
          this.postSvc.uploadPostAttachment(newPost.id, this.pendingFileToUpload).subscribe({
            next: () => {
              // Recharger le post pour avoir l'attachement
              this.postSvc.getById(newPost.id).subscribe(res => {
                const idx = this.posts.findIndex(p => p.id === newPost.id);
                if (idx >= 0) {
                  this.posts[idx] = res.data;
                }
              });
              this.alertSvc.success('Fichier uploadé');
              this.pendingFileToUpload = null;
              this.removePostAttachment();
              this.creating = false;
            },
            error: (err) => {
              console.error('Erreur upload:', err);
              this.alertSvc.error('Erreur lors de l\'upload du fichier');
              this.creating = false;
            }
          });
        } else {
          this.creating = false;
        }
      },
      error: () => { this.creating = false; }
    });
  }

  deletePost(post: Post): void {
    this.postSvc.delete(post.id).subscribe({
      next: () => {
        this.posts = this.posts.filter(p => p.id !== post.id);
        this.alertSvc.success('Supprimée');
      }
    });
  }

  react(post: Post, type: ReactionType): void {
    if (post.userReaction === type) {
      this.postSvc.removeReaction(post.id).subscribe(() => {
        post.userReaction = undefined; post.reactionCount = Math.max(0,(post.reactionCount||1)-1);
      });
    } else {
      this.postSvc.react(post.id, type).subscribe(() => {
        if (!post.userReaction) post.reactionCount = (post.reactionCount||0)+1;
        post.userReaction = type;
      });
    }
  }

  toggleComments(post: Post): void {
    this.openComments[post.id] = !this.openComments[post.id];
    if (this.openComments[post.id] && !this.commentsMap[post.id]) {
      this.postSvc.getComments(post.id).subscribe(res => { this.commentsMap[post.id] = res.data; });
    }
  }

  setReply(postId: number, c: Comment): void { this.replyTarget[postId] = c; }
  clearReply(postId: number): void { this.replyTarget[postId] = null; }

  submitComment(post: Post): void {
    const text = this.commentText[post.id]?.trim();
    if (!text) return;
    const parent = this.replyTarget[post.id];
    this.postSvc.addComment(post.id, text, parent?.id).subscribe(res => {
      if (!this.commentsMap[post.id]) this.commentsMap[post.id] = [];
      if (parent) {
        const p = this.commentsMap[post.id].find(c => c.id === parent.id);
        if (p) { if(!p.replies) p.replies=[]; p.replies.push(res.data); }
      } else {
        this.commentsMap[post.id].push(res.data);
        post.commentCount = (post.commentCount||0)+1;
      }
      this.commentText[post.id] = ''; this.replyTarget[post.id] = null;
    });
  }

  toggleFollow(userId: number): void {
    if (this.followingMap[userId]) {
      this.followSvc.unfollow(userId).subscribe(() => { this.followingMap[userId] = false; });
    } else {
      this.followSvc.follow(userId).subscribe(() => { this.followingMap[userId] = true; });
    }
  }

  private updateFollowMap(): void {
    const myId = this.auth.currentUser?.id;
    const ids  = [...new Set(this.posts.map(p => p.author.id).filter(id => id !== myId))];
    ids.forEach(id => {
      if (this.followingMap[id] === undefined) {
        this.followSvc.getStatus(id).subscribe(res => { this.followingMap[id] = res.data.isFollowing; });
      }
    });
  }

  onImgError(e: Event): void { (e.target as HTMLImageElement).style.display='none'; }
  initials(name?: string|null): string {
    return name?.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()||'?';
  }

  getMediaUrl(url: string): string {
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const API_URL = 'http://localhost:8080';
    return `${API_URL}${url.startsWith('/') ? '' : '/'}${url}`;
  }

  onMediaLoad(e: Event): void {
    (e.target as HTMLImageElement).style.display = 'block';
  }

  onFilePreviewSelected(filePreview: FilePreview): void {
    this.selectedPostAttachment = filePreview;
    this.pendingFileToUpload = filePreview.file;
  }

  removePostAttachment(): void {
    this.selectedPostAttachment = null;
    this.pendingFileToUpload = null;
  }
}