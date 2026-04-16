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
import { Post, Comment, ReactionType } from '../../../core/models/models';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule
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
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>URL Media (optionnel)</mat-label>
          <input matInput formControlName="mediaUrl" placeholder="https://…">
        </mat-form-field>
        <div class="form-actions">
          <button mat-button type="button" (click)="showCreateForm=false">Annuler</button>
          <button mat-raised-button color="primary" type="submit" [disabled]="postForm.invalid || creating">
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
        <div class="avatar">{{ initials(post.author.fullName) }}</div>
        <div class="post-meta">
          <span class="author-name">{{ post.author.fullName }}</span>
          <span class="post-time">{{ post.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>
        </div>
        @if(post.author.id !== auth.currentUser?.id) {
          <button mat-stroked-button class="follow-btn" [class.followed]="followingMap[post.author.id]"
                  (click)="toggleFollow(post.author.id)">
            {{ followingMap[post.author.id] ? 'Abonné ✓' : '+ Suivre' }}
          </button>
        } @else {
          <button mat-icon-button [matMenuTriggerFor]="postMenu"><mat-icon>more_vert</mat-icon></button>
          <mat-menu #postMenu><button mat-menu-item (click)="deletePost(post)"><mat-icon>delete</mat-icon>Supprimer</button></mat-menu>
        }
      </div>
      <p class="post-content">{{ post.content }}</p>
      @if(post.mediaUrl){ <img [src]="post.mediaUrl" class="post-media" alt="media" (error)="onImgError($event)"> }
      <div class="post-counts">
        @if((post.reactionCount||0)>0){<span>👍 {{post.reactionCount}}</span>}
        @if((post.commentCount||0)>0){<span>💬 {{post.commentCount}} commentaire(s)</span>}
      </div>
      <div class="post-actions">
        <button mat-button [class.reacted]="post.userReaction==='LIKE'" (click)="react(post,'LIKE')"><mat-icon>thumb_up</mat-icon>J'aime</button>
        <button mat-button [class.reacted]="post.userReaction==='LOVE'" (click)="react(post,'LOVE')"><mat-icon>favorite</mat-icon>J'adore</button>
        <button mat-button [class.reacted]="post.userReaction==='CELEBRATE'" (click)="react(post,'CELEBRATE')"><mat-icon>celebration</mat-icon>Bravo</button>
        <button mat-button (click)="toggleComments(post)"><mat-icon>chat_bubble_outline</mat-icon>Commenter</button>
      </div>
      @if(openComments[post.id]) {
        <div class="comments-section">
          @for(c of commentsMap[post.id]||[]; track c.id) {
            <div class="comment">
              <div class="avatar-xs">{{ initials(c.author.fullName) }}</div>
              <div class="comment-body">
                <span class="comment-author">{{ c.author.fullName }}</span>
                <p>{{ c.content }}</p>
                <button mat-button class="reply-btn" (click)="setReply(post.id,c)">Répondre</button>
                @for(r of c.replies||[]; track r.id) {
                  <div class="reply"><div class="avatar-xs">{{ initials(r.author.fullName) }}</div>
                    <div class="comment-body"><span class="comment-author">{{ r.author.fullName }}</span><p>{{ r.content }}</p></div>
                  </div>}
              </div>
            </div>}
          <div class="comment-input-row">
            <div class="avatar-xs">{{ initials(auth.currentUser?.fullName) }}</div>
            <mat-form-field appearance="outline" class="comment-field">
              <mat-label>{{ replyTarget[post.id] ? 'Répondre à '+replyTarget[post.id]!.author.fullName : 'Commenter…' }}</mat-label>
              <input matInput [(ngModel)]="commentText[post.id]" (keyup.enter)="submitComment(post)">
              @if(replyTarget[post.id]){<button matSuffix mat-icon-button (click)="clearReply(post.id)"><mat-icon>close</mat-icon></button>}
            </mat-form-field>
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
    <div class="load-more"><button mat-stroked-button (click)="loadMore()">Voir plus</button></div>
  }
</div>
  `,
  styles: [`
.feed-layout{max-width:680px;margin:0 auto;padding:16px;display:flex;flex-direction:column;gap:16px}
.card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.post-author-row{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.create-trigger{flex:1;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:24px;padding:10px 20px;text-align:left;cursor:pointer;color:#64748b;font-size:14px}
.create-trigger:hover{background:#e2e8f0}
.post-form{display:flex;flex-direction:column;gap:12px}
.full-width{width:100%}
.form-actions{display:flex;gap:8px;justify-content:flex-end}
.center-spinner{display:flex;justify-content:center;padding:40px}
.post-header{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.post-meta{flex:1;display:flex;flex-direction:column}
.author-name{font-weight:600;font-size:14px;color:#1e293b}
.post-time{font-size:12px;color:#94a3b8}
.follow-btn{margin-left:auto;font-size:13px}
.follow-btn.followed{color:#64748b;border-color:#cbd5e1}
.post-content{color:#334155;line-height:1.6;margin-bottom:12px;white-space:pre-line}
.post-media{width:100%;border-radius:8px;max-height:400px;object-fit:cover;margin-bottom:12px}
.post-counts{display:flex;gap:16px;font-size:12px;color:#64748b;padding:8px 0;border-top:1px solid #f1f5f9;border-bottom:1px solid #f1f5f9;margin-bottom:8px}
.post-actions{display:flex;gap:4px}
.post-actions button{flex:1;font-size:13px}
.post-actions button.reacted{color:#6366f1}
.comments-section{margin-top:12px;border-top:1px solid #f1f5f9;padding-top:12px;display:flex;flex-direction:column;gap:12px}
.comment,.reply{display:flex;gap:8px;align-items:flex-start}
.reply{margin-left:32px;margin-top:8px}
.comment-body{flex:1;background:#f8fafc;border-radius:8px;padding:8px 12px}
.comment-author{font-weight:600;font-size:13px;display:block}
.comment-body p{margin:4px 0;font-size:14px;color:#334155}
.reply-btn{font-size:12px;padding:0;min-width:unset;color:#6366f1}
.comment-input-row{display:flex;align-items:center;gap:8px}
.comment-field{flex:1}
.avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0}
.avatar-sm{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#6366f1,#8b5cf6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:12px;flex-shrink:0}
.avatar-xs{width:28px;height:28px;border-radius:50%;background:#e2e8f0;color:#64748b;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;flex-shrink:0}
.empty-state{text-align:center;padding:48px;color:#94a3b8}
.empty-state mat-icon{font-size:48px;width:48px;height:48px}
.load-more{text-align:center}
  `]
})
export class FeedComponent implements OnInit {
  readonly auth  = inject(AuthService);
  private readonly postSvc   = inject(PostService);
  private readonly followSvc = inject(FollowService);
  private readonly alertSvc = inject(AlertService);
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
        this.posts.unshift(res.data);
        this.postForm.reset(); this.showCreateForm = false; this.creating = false;
        this.alertSvc.success('Publication créée');
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
}
