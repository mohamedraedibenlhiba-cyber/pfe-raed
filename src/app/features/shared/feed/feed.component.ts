import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
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
    MatMenuModule, MatProgressSpinnerModule, MatTooltipModule,
    AttachmentUploaderComponent, MediaViewerComponent
  ],
  template: `
<div class="feed-layout">
  <section class="feed-hero card">
    <div class="hero-copy">
      <span class="hero-eyebrow">Gestion des publications</span>
      <h1>Votre fil social</h1>
      <p>Publiez des actualites, partagez vos pieces jointes et interagissez avec la communaute dans une interface plus claire.</p>
    </div>

    <div class="hero-metrics">
      <div class="metric-pill">
        <strong>{{ posts.length }}</strong>
        <span>publication(s) chargee(s)</span>
      </div>
      <div class="metric-pill accent">
        <strong>{{ showCreateForm ? 'Brouillon' : 'Pret' }}</strong>
        <span>{{ showCreateForm ? 'formulaire ouvert' : 'a publier' }}</span>
      </div>
    </div>
  </section>

  <div class="card create-post-card" [class.expanded]="showCreateForm">
    <div class="post-author-row">
      <div class="avatar-sm">{{ initials(auth.currentUser?.fullName) }}</div>

      <button type="button" class="create-trigger" (click)="showCreateForm = !showCreateForm">
        <span class="trigger-title">Partager une publication</span>
        <span class="trigger-subtitle">Texte, image, video ou document</span>
      </button>

      <button
        type="button"
        class="mini-action-btn"
        (click)="showCreateForm = !showCreateForm"
        [matTooltip]="showCreateForm ? 'Fermer le formulaire' : 'Ouvrir le formulaire'">
        <mat-icon>{{ showCreateForm ? 'expand_less' : 'edit' }}</mat-icon>
      </button>
    </div>

    @if (showCreateForm) {
      <form [formGroup]="postForm" (ngSubmit)="createPost()" class="post-form">
        <div class="form-panel">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Votre publication</mat-label>
            <textarea matInput formControlName="content" rows="4" placeholder="Ecrivez votre message..."></textarea>
          </mat-form-field>

          <div class="upload-section">
            <div class="section-label">
              <mat-icon>attach_file</mat-icon>
              <span>Piece jointe</span>
            </div>

            <app-attachment-uploader
              [maxSizeMb]="50"
              [acceptTypes]="'all'"
              (fileSelected)="onFilePreviewSelected($event)">
            </app-attachment-uploader>

            @if (selectedPostAttachment) {
              <div class="attachment-badge">
                <mat-icon>check_circle</mat-icon>
                <span>{{ selectedPostAttachment.file.name }}</span>
                <button type="button" mat-icon-button (click)="removePostAttachment()" matTooltip="Retirer">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
            }
          </div>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Lien media optionnel</mat-label>
            <input matInput formControlName="mediaUrl" placeholder="https://...">
          </mat-form-field>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-soft" (click)="showCreateForm = false">Annuler</button>
          <button class="btn-primary" type="submit" [disabled]="postForm.invalid || creating">
            @if (creating) {
              <mat-spinner diameter="18"></mat-spinner>
              <span>Publication...</span>
            } @else {
              <mat-icon>send</mat-icon>
              <span>Publier</span>
            }
          </button>
        </div>
      </form>
    }
  </div>

  @if (loading) {
    <div class="center-spinner"><mat-spinner></mat-spinner></div>
  }

  @for (post of posts; track post.id) {
    <article class="card post-card">
      <div class="post-header">
        <div class="post-header-left">
          <div class="avatar">{{ initials(post.author.fullName) }}</div>
          <div class="post-header-info">
            <div class="post-author-line">
              <span class="author-name">{{ post.author.fullName }}</span>
              @if (post.author.id === auth.currentUser?.id) {
                <span class="owner-badge">Vous</span>
              }
            </div>
            <span class="post-time">
              <mat-icon>schedule</mat-icon>
              {{ post.createdAt | date:'dd/MM/yyyy HH:mm' }}
            </span>
          </div>
        </div>

        <div class="post-header-right">
          @if (post.author.id !== auth.currentUser?.id) {
            <button
              type="button"
              class="follow-btn"
              [class.followed]="followingMap[post.author.id]"
              (click)="toggleFollow(post.author.id)">
              <mat-icon>{{ followingMap[post.author.id] ? 'check' : 'person_add' }}</mat-icon>
              <span>{{ followingMap[post.author.id] ? 'Abonne' : 'Suivre' }}</span>
            </button>
          } @else {
            <button type="button" class="icon-btn" [matMenuTriggerFor]="postMenu" matTooltip="Plus d'actions">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #postMenu="matMenu">
              <button mat-menu-item (click)="deletePost(post)">
                <mat-icon>delete</mat-icon>
                <span>Supprimer</span>
              </button>
            </mat-menu>
          }
        </div>
      </div>

      <div class="post-body">
        <p class="post-content">{{ post.content }}</p>
      </div>

      @if (post.attachmentFileUrl) {
        <div class="media-surface">
          <app-media-viewer
            [attachmentFileUrl]="post.attachmentFileUrl"
            [attachmentFileType]="post.attachmentFileType || 'IMAGE'"
            [fileName]="post.attachmentFileName || ''"
            [attachmentFileSize]="post.attachmentFileSize || 0">
          </app-media-viewer>
        </div>
      } @else if (post.mediaUrl) {
        <div class="media-surface">
          <app-media-viewer
            [attachmentFileUrl]="post.mediaUrl"
            [attachmentFileType]="'IMAGE'"
            [fileName]="'Image'"
            [attachmentFileSize]="0">
          </app-media-viewer>
        </div>
      }

      @if ((post.reactionCount || 0) > 0 || (post.commentCount || 0) > 0) {
        <div class="post-counts">
          @if ((post.reactionCount || 0) > 0) {
            <span class="count-pill">
              <mat-icon>thumb_up</mat-icon>
              {{ post.reactionCount }}
            </span>
          }
          @if ((post.commentCount || 0) > 0) {
            <span class="count-pill">
              <mat-icon>chat_bubble_outline</mat-icon>
              {{ post.commentCount }} commentaire(s)
            </span>
          }
        </div>
      }

      <div class="post-actions">
        <button type="button" class="action-btn" [class.reacted]="post.userReaction === 'LIKE'" (click)="react(post, 'LIKE')">
          <mat-icon>thumb_up</mat-icon>
          <span>J'aime</span>
        </button>
        <button type="button" class="action-btn" [class.reacted]="post.userReaction === 'LOVE'" (click)="react(post, 'LOVE')">
          <mat-icon>favorite</mat-icon>
          <span>J'adore</span>
        </button>
        <button type="button" class="action-btn" [class.reacted]="post.userReaction === 'CELEBRATE'" (click)="react(post, 'CELEBRATE')">
          <mat-icon>celebration</mat-icon>
          <span>Bravo</span>
        </button>
        <button type="button" class="action-btn" [class.opened]="openComments[post.id]" (click)="toggleComments(post)">
          <mat-icon>chat_bubble_outline</mat-icon>
          <span>Commenter</span>
        </button>
      </div>

      @if (openComments[post.id]) {
        <div class="comments-section">
          @if (replyTarget[post.id]) {
            <div class="reply-indicator">
              <mat-icon>reply</mat-icon>
              <span>Reponse a {{ replyTarget[post.id]!.author.fullName }}</span>
              <button type="button" class="icon-btn-small" (click)="clearReply(post.id)">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          }

          @for (c of commentsMap[post.id] || []; track c.id) {
            <div class="comment">
              <div class="avatar-xs">{{ initials(c.author.fullName) }}</div>

              <div class="comment-thread">
                <div class="comment-body">
                  <div class="comment-top">
                    <span class="comment-author">{{ c.author.fullName }}</span>
                  </div>
                  <p>{{ c.content }}</p>

                  @if (c.attachmentFileUrl) {
                    <div class="comment-media-wrapper">
                      <app-media-viewer
                        [attachmentFileUrl]="c.attachmentFileUrl"
                        [attachmentFileType]="c.attachmentFileType || 'IMAGE'"
                        [fileName]="c.attachmentFileName || ''"
                        [attachmentFileSize]="c.attachmentFileSize || 0">
                      </app-media-viewer>
                    </div>
                  }

                  <button type="button" class="reply-btn" (click)="setReply(post.id, c)">Repondre</button>
                </div>

                @for (r of c.replies || []; track r.id) {
                  <div class="reply">
                    <div class="avatar-xs">{{ initials(r.author.fullName) }}</div>
                    <div class="comment-body reply-body">
                      <span class="comment-author">{{ r.author.fullName }}</span>
                      <p>{{ r.content }}</p>

                      @if (r.attachmentFileUrl) {
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

          @if ((commentsMap[post.id] || []).length === 0) {
            <div class="comments-empty">
              <mat-icon>forum</mat-icon>
              <p>Aucun commentaire pour le moment. Soyez le premier a reagir.</p>
            </div>
          }

          <div class="comment-input-row">
            <div class="avatar-xs">{{ initials(auth.currentUser?.fullName) }}</div>
            <mat-form-field appearance="outline" class="comment-field">
              <mat-label>{{ replyTarget[post.id] ? 'Votre reponse' : 'Ajouter un commentaire' }}</mat-label>
              <input matInput [(ngModel)]="commentText[post.id]" (keyup.enter)="submitComment(post)">
            </mat-form-field>
            <button type="button" class="submit-comment-btn" (click)="submitComment(post)" [disabled]="!(commentText[post.id] || '').trim()">
              <mat-icon>send</mat-icon>
            </button>
          </div>
        </div>
      }
    </article>
  }

  @if (!loading && posts.length === 0) {
    <div class="card empty-state">
      <mat-icon>newspaper</mat-icon>
      <h3>Aucune publication visible</h3>
      <p>Suivez des utilisateurs ou creez votre premiere publication pour lancer l'activite.</p>
    </div>
  }

  @if (!loading && !lastPage && posts.length > 0) {
    <div class="load-more">
      <button type="button" class="btn-outline" (click)="loadMore()">
        <mat-icon>expand_more</mat-icon>
        <span>Voir plus</span>
      </button>
    </div>
  }
</div>
  `,
  styles: [`
    :host {
      --orange: #ff8c00;
      --orange-dark: #e67600;
      --orange-soft: #fff1df;
      --orange-light: #ffb347;
      --orange-outline: rgba(255, 140, 0, 0.16);
      --black: #1a1a1a;
      --black-light: #4b5563;
      --white: #ffffff;
      --surface: #fffaf4;
      --surface-strong: #fff5e8;
      --gray-light: #f7f4ef;
      --gray-medium: #ebe4d9;
      --border: rgba(26, 26, 26, 0.08);
      --shadow-soft: 0 12px 32px rgba(26, 26, 26, 0.08);
      --shadow-card: 0 22px 40px rgba(26, 26, 26, 0.06);
    }

    .feed-layout {
      max-width: 860px;
      margin: 0 auto;
      padding: 24px 20px 40px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background:
        radial-gradient(circle at top left, rgba(255, 179, 71, 0.18), transparent 24%),
        linear-gradient(180deg, #fffdf9 0%, #fff7ef 100%);
      min-height: 100vh;
    }

    .card {
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid var(--border);
      border-radius: 24px;
      box-shadow: var(--shadow-soft);
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
      backdrop-filter: blur(12px);
    }

    .card:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-card);
      border-color: var(--orange-outline);
    }

    .feed-hero {
      padding: 26px 28px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      background:
        linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.02)),
        #fff;
      overflow: hidden;
      position: relative;
    }

    .feed-hero::after {
      content: '';
      position: absolute;
      top: -48px;
      right: -48px;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 179, 71, 0.24), transparent 68%);
      pointer-events: none;
    }

    .hero-copy {
      position: relative;
      z-index: 1;
      max-width: 540px;
    }

    .hero-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.12);
      color: var(--orange-dark);
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 12px;
    }

    .hero-copy h1 {
      margin: 0 0 10px;
      font-size: clamp(1.8rem, 3vw, 2.3rem);
      line-height: 1.1;
      color: var(--black);
    }

    .hero-copy p {
      margin: 0;
      color: var(--black-light);
      line-height: 1.65;
      font-size: 0.96rem;
    }

    .hero-metrics {
      display: grid;
      gap: 12px;
      min-width: 210px;
      position: relative;
      z-index: 1;
    }

    .metric-pill {
      padding: 16px 18px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(255, 140, 0, 0.08);
      box-shadow: 0 10px 22px rgba(255, 140, 0, 0.08);
    }

    .metric-pill.accent {
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.14), rgba(255, 179, 71, 0.08));
    }

    .metric-pill strong {
      display: block;
      font-size: 1.2rem;
      color: var(--black);
      margin-bottom: 4px;
    }

    .metric-pill span {
      display: block;
      font-size: 0.84rem;
      color: var(--black-light);
    }

    .create-post-card {
      padding: 18px 18px 16px;
      overflow: hidden;
      position: relative;
    }

    .create-post-card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 5px;
      background: linear-gradient(90deg, var(--orange), var(--orange-light));
    }

    .create-post-card.expanded {
      box-shadow: 0 24px 42px rgba(255, 140, 0, 0.12);
    }

    .post-author-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 12px;
      align-items: center;
    }

    .create-trigger {
      width: 100%;
      border: 1px solid var(--gray-medium);
      border-radius: 18px;
      background: linear-gradient(135deg, #fffefc, var(--surface));
      padding: 14px 18px;
      text-align: left;
      cursor: pointer;
      transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
    }

    .create-trigger:hover {
      border-color: rgba(255, 140, 0, 0.25);
      box-shadow: 0 14px 28px rgba(255, 140, 0, 0.08);
      transform: translateY(-1px);
    }

    .trigger-title {
      display: block;
      font-size: 0.96rem;
      font-weight: 700;
      color: var(--black);
      margin-bottom: 3px;
    }

    .trigger-subtitle {
      display: block;
      font-size: 0.84rem;
      color: var(--black-light);
    }

    .mini-action-btn {
      width: 44px;
      height: 44px;
      border-radius: 14px;
      border: 1px solid rgba(255, 140, 0, 0.12);
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease;
    }

    .mini-action-btn:hover {
      transform: translateY(-1px);
      background: rgba(255, 140, 0, 0.14);
    }

    .post-form {
      margin-top: 18px;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .form-panel {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 18px;
      border-radius: 20px;
      background: linear-gradient(180deg, #fff, var(--surface));
      border: 1px solid rgba(255, 140, 0, 0.08);
    }

    .full-width {
      width: 100%;
    }

    .section-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.84rem;
      font-weight: 700;
      color: var(--black);
      margin-bottom: 10px;
    }

    .section-label mat-icon {
      color: var(--orange);
    }

    .upload-section {
      padding: 16px;
      border-radius: 18px;
      background: rgba(255, 140, 0, 0.03);
      border: 1px dashed rgba(255, 140, 0, 0.22);
    }

    .attachment-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      margin-top: 12px;
      border-radius: 14px;
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.14), rgba(255, 179, 71, 0.08));
      border: 1px solid rgba(255, 140, 0, 0.12);
      color: var(--black);
    }

    .attachment-badge mat-icon {
      color: var(--orange);
    }

    .attachment-badge span {
      flex: 1;
      min-width: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      flex-wrap: wrap;
    }

    .btn-primary,
    .btn-soft,
    .btn-outline {
      border: none;
      border-radius: 14px;
      font-weight: 700;
      font-size: 0.92rem;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;
      text-decoration: none;
    }

    .btn-primary {
      min-height: 46px;
      padding: 0 18px;
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      color: var(--white);
      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.24);
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 18px 30px rgba(255, 140, 0, 0.28);
    }

    .btn-primary:disabled {
      opacity: 0.65;
      cursor: not-allowed;
      box-shadow: none;
    }

    .btn-primary mat-spinner {
      --mdc-circular-progress-active-indicator-color: #fff;
    }

    .btn-soft {
      min-height: 46px;
      padding: 0 16px;
      background: #fff;
      color: var(--black-light);
      border: 1px solid var(--gray-medium);
    }

    .btn-soft:hover {
      transform: translateY(-1px);
      background: var(--gray-light);
      color: var(--black);
    }

    .btn-outline {
      min-height: 48px;
      padding: 0 20px;
      background: rgba(255, 255, 255, 0.9);
      color: var(--orange-dark);
      border: 1px solid rgba(255, 140, 0, 0.24);
      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.08);
    }

    .btn-outline:hover {
      transform: translateY(-1px);
      background: rgba(255, 140, 0, 0.08);
    }

    .post-card {
      overflow: hidden;
      animation: slideIn 0.35s ease;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(14px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .post-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 18px 22px 14px;
    }

    .post-header-left {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .post-header-info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      min-width: 0;
    }

    .post-author-line {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .author-name {
      font-weight: 700;
      font-size: 0.98rem;
      color: var(--black);
    }

    .owner-badge {
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.12);
      color: var(--orange-dark);
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .post-time {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.82rem;
      color: #6b7280;
    }

    .post-time mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    .post-header-right {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .follow-btn {
      min-height: 40px;
      padding: 0 14px;
      border-radius: 12px;
      border: 1px solid transparent;
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      color: var(--white);
      font-weight: 700;
      font-size: 0.86rem;
      display: inline-flex;
      align-items: center;
      gap: 7px;
      cursor: pointer;
      box-shadow: 0 10px 18px rgba(255, 140, 0, 0.2);
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
    }

    .follow-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 14px 24px rgba(255, 140, 0, 0.24);
    }

    .follow-btn.followed {
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      border-color: rgba(255, 140, 0, 0.18);
      box-shadow: none;
    }

    .icon-btn {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      border: 1px solid transparent;
      background: transparent;
      color: #6b7280;
      display: inline-grid;
      place-items: center;
      cursor: pointer;
      transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
    }

    .icon-btn:hover {
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      transform: translateY(-1px);
    }

    .post-body {
      padding: 0 22px 8px;
    }

    .post-content {
      margin: 0;
      font-size: 0.97rem;
      line-height: 1.72;
      color: var(--black);
      word-break: break-word;
      white-space: pre-line;
    }

    .media-surface {
      margin: 0 18px 14px;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid var(--border);
      background: #fafafa;
    }

    .post-counts {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      padding: 0 22px 14px;
    }

    .count-pill {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      font-size: 0.82rem;
      font-weight: 700;
    }

    .count-pill mat-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
    }

    .post-actions {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 8px;
      padding: 0 18px 18px;
    }

    .action-btn {
      min-height: 46px;
      padding: 0 10px;
      border: 1px solid rgba(26, 26, 26, 0.08);
      border-radius: 14px;
      background: #fff;
      color: var(--black-light);
      font-weight: 700;
      font-size: 0.84rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }

    .action-btn mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .action-btn:hover {
      transform: translateY(-1px);
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      border-color: rgba(255, 140, 0, 0.18);
      box-shadow: 0 12px 20px rgba(255, 140, 0, 0.08);
    }

    .action-btn.reacted,
    .action-btn.opened {
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.16), rgba(255, 179, 71, 0.08));
      color: var(--orange-dark);
      border-color: rgba(255, 140, 0, 0.22);
    }

    .comments-section {
      padding: 0 18px 18px;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .reply-indicator {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 14px;
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      font-weight: 700;
      align-self: flex-start;
    }

    .reply-indicator mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .comment {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    .comment-thread {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .comment-body {
      background: linear-gradient(180deg, var(--surface), #fff);
      border: 1px solid rgba(255, 140, 0, 0.08);
      border-radius: 18px;
      padding: 14px 16px;
      box-shadow: 0 10px 18px rgba(255, 140, 0, 0.04);
    }

    .comment-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 4px;
    }

    .comment-author {
      display: inline-block;
      font-weight: 700;
      font-size: 0.87rem;
      color: var(--black);
    }

    .comment-body p {
      margin: 0;
      line-height: 1.65;
      color: var(--black-light);
      font-size: 0.9rem;
      white-space: pre-line;
    }

    .comment-media-wrapper {
      margin-top: 12px;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(255, 140, 0, 0.08);
      background: #fff;
    }

    .reply {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin-left: 18px;
    }

    .reply-body {
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.04));
    }

    .reply-btn {
      margin-top: 10px;
      padding: 7px 11px;
      border: none;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.08);
      color: var(--orange-dark);
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      transition: background 0.2s ease, transform 0.2s ease;
    }

    .reply-btn:hover {
      background: rgba(255, 140, 0, 0.14);
      transform: translateY(-1px);
    }

    .comments-empty {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 16px;
      border-radius: 16px;
      background: rgba(255, 140, 0, 0.04);
      color: var(--black-light);
    }

    .comments-empty mat-icon {
      color: var(--orange);
    }

    .comment-input-row {
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 10px;
      align-items: end;
      padding: 14px;
      border-radius: 18px;
      background: linear-gradient(180deg, #fff, var(--surface));
      border: 1px solid rgba(255, 140, 0, 0.08);
    }

    .comment-field {
      width: 100%;
    }

    .submit-comment-btn {
      width: 46px;
      height: 46px;
      border-radius: 14px;
      border: none;
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      color: #fff;
      display: inline-grid;
      place-items: center;
      cursor: pointer;
      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.22);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .submit-comment-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 16px 28px rgba(255, 140, 0, 0.28);
    }

    .submit-comment-btn:disabled {
      opacity: 0.45;
      cursor: not-allowed;
      box-shadow: none;
    }

    .avatar,
    .avatar-sm,
    .avatar-xs {
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      color: #fff;
      flex-shrink: 0;
      background: linear-gradient(135deg, var(--orange), var(--orange-dark));
      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.2);
    }

    .avatar {
      width: 48px;
      height: 48px;
      font-size: 1rem;
    }

    .avatar-sm {
      width: 40px;
      height: 40px;
      font-size: 0.84rem;
    }

    .avatar-xs {
      width: 32px;
      height: 32px;
      font-size: 0.75rem;
      background: linear-gradient(135deg, var(--orange-light), var(--orange));
      box-shadow: none;
    }

    .icon-btn-small {
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--orange-dark);
      display: inline-grid;
      place-items: center;
      cursor: pointer;
    }

    .icon-btn-small:hover {
      background: rgba(255, 140, 0, 0.08);
    }

    .empty-state {
      padding: 42px 32px;
      text-align: center;
    }

    .empty-state mat-icon {
      font-size: 52px;
      width: 52px;
      height: 52px;
      color: var(--orange);
      margin-bottom: 12px;
    }

    .empty-state h3 {
      margin: 0 0 8px;
      font-size: 1.2rem;
      color: var(--black);
    }

    .empty-state p {
      margin: 0;
      color: var(--black-light);
      line-height: 1.6;
    }

    .load-more {
      display: flex;
      justify-content: center;
      padding-top: 2px;
    }

    .center-spinner {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 32px;
    }

    ::ng-deep .feed-layout .mat-mdc-form-field-subscript-wrapper {
      display: none;
    }

    ::ng-deep .feed-layout .mat-mdc-text-field-wrapper {
      border-radius: 18px !important;
      background: #fff !important;
    }

    ::ng-deep .feed-layout .mdc-notched-outline__leading,
    ::ng-deep .feed-layout .mdc-notched-outline__notch,
    ::ng-deep .feed-layout .mdc-notched-outline__trailing {
      border-color: rgba(255, 140, 0, 0.14) !important;
    }

    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,
    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,
    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {
      border-color: var(--orange) !important;
    }

    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {
      color: var(--orange) !important;
    }

    @media (max-width: 900px) {
      .feed-hero {
        flex-direction: column;
      }

      .hero-metrics {
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      }
    }

    @media (max-width: 720px) {
      .feed-layout {
        padding: 16px 12px 32px;
        gap: 16px;
      }

      .feed-hero,
      .create-post-card,
      .post-card {
        border-radius: 20px;
      }

      .post-author-row,
      .comment-input-row {
        grid-template-columns: auto 1fr;
      }

      .mini-action-btn,
      .submit-comment-btn {
        grid-column: 2;
        justify-self: end;
      }

      .post-actions {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .post-header,
      .post-body,
      .post-counts,
      .post-actions,
      .comments-section {
        padding-left: 16px;
        padding-right: 16px;
      }

      .media-surface {
        margin-left: 14px;
        margin-right: 14px;
      }
    }

    @media (max-width: 520px) {
      .hero-copy h1 {
        font-size: 1.6rem;
      }

      .post-header {
        align-items: flex-start;
      }

      .follow-btn {
        padding: 0 12px;
      }

      .follow-btn span {
        display: none;
      }

      .reply {
        margin-left: 8px;
      }

      .comment {
        align-items: stretch;
      }
    }
  `]
})
export class FeedComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly postSvc = inject(PostService);
  private readonly followSvc = inject(FollowService);
  private readonly alertSvc = inject(AlertService);
  private readonly configSvc = inject(ConfigService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  creating = false;
  posts: Post[] = [];
  page = 0;
  lastPage = false;
  showCreateForm = false;

  followingMap: Record<number, boolean> = {};
  openComments: Record<number, boolean> = {};
  commentsMap: Record<number, Comment[]> = {};
  commentText: Record<number, string> = {};
  replyTarget: Record<number, Comment | null> = {};

  selectedPostAttachment: FilePreview | null = null;
  pendingFileToUpload: File | null = null;
  commentAttachmentMap: Record<number, FilePreview | null> = {};

  postForm = this.fb.group({
    content: ['', [Validators.required, Validators.minLength(1)]],
    mediaUrl: ['']
  });

  ngOnInit(): void { this.loadFeed(); }

  loadFeed(): void {
    this.loading = true;
    this.postSvc.getFeed(this.page, 10).subscribe({
      next: res => {
        this.posts.push(...res.data.content);
        this.lastPage = res.data.last;
        this.loading = false;
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
        this.alertSvc.success('Publication creee');

        if (this.pendingFileToUpload && newPost.id) {
          this.postSvc.uploadPostAttachment(newPost.id, this.pendingFileToUpload).subscribe({
            next: () => {
              this.postSvc.getById(newPost.id).subscribe(postRes => {
                const idx = this.posts.findIndex(p => p.id === newPost.id);
                if (idx >= 0) {
                  this.posts[idx] = postRes.data;
                }
              });
              this.alertSvc.success('Fichier uploade');
              this.pendingFileToUpload = null;
              this.removePostAttachment();
              this.creating = false;
            },
            error: err => {
              console.error('Erreur upload:', err);
              this.alertSvc.error("Erreur lors de l'upload du fichier");
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
        this.alertSvc.success('Publication supprimee');
      }
    });
  }

  react(post: Post, type: ReactionType): void {
    if (post.userReaction === type) {
      this.postSvc.removeReaction(post.id).subscribe(() => {
        post.userReaction = undefined;
        post.reactionCount = Math.max(0, (post.reactionCount || 1) - 1);
      });
    } else {
      this.postSvc.react(post.id, type).subscribe(() => {
        if (!post.userReaction) post.reactionCount = (post.reactionCount || 0) + 1;
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
        const target = this.commentsMap[post.id].find(c => c.id === parent.id);
        if (target) {
          if (!target.replies) target.replies = [];
          target.replies.push(res.data);
        }
      } else {
        this.commentsMap[post.id].push(res.data);
        post.commentCount = (post.commentCount || 0) + 1;
      }
      this.commentText[post.id] = '';
      this.replyTarget[post.id] = null;
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
    const ids = [...new Set(this.posts.map(p => p.author.id).filter(id => id !== myId))];
    ids.forEach(id => {
      if (this.followingMap[id] === undefined) {
        this.followSvc.getStatus(id).subscribe(res => { this.followingMap[id] = res.data.isFollowing; });
      }
    });
  }

  onImgError(e: Event): void { (e.target as HTMLImageElement).style.display = 'none'; }

  initials(name?: string | null): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
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
