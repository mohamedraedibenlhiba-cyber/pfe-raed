import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  ConnectionStatusResponse,
  PublicProfileResponse
} from '../../../core/models/models';
import { UserService } from '../../../core/services/user.service';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { MessagingService } from '../../../core/services/messaging.service';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';

export interface UserConnectionModalData {
  userId: number;
}

@Component({
  selector: 'app-user-connection-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  template: `
    <div class="profile-dialog">
      <button mat-icon-button class="close-btn" (click)="dialogRef.close()">
        <mat-icon>close</mat-icon>
      </button>

      @if (loading) {
        <div class="loading-state">
          <mat-spinner diameter="42"></mat-spinner>
          <p>Chargement du profil...</p>
        </div>
      } @else if (profile) {
        <div class="hero">
          <div class="avatar-wrap">
            <img *ngIf="profile.profilePicture" [src]="profile.profilePicture" [alt]="profile.fullName" />
            <div *ngIf="!profile.profilePicture" class="avatar-fallback">
              {{ initials(profile.fullName) }}
            </div>
          </div>

          <div class="hero-copy">
            <div class="hero-topline">
              <span class="role-pill">{{ getRoleLabel(profile.role) }}</span>
              <span class="state-pill" [ngClass]="statusClass">
                {{ getRelationshipLabel() }}
              </span>
            </div>
            <h2>{{ profile.fullName }}</h2>
            <p class="subtitle">{{ getPrimarySubtitle() }}</p>
            <p class="meta" *ngIf="profile.city || profile.country">
              <mat-icon>location_on</mat-icon>
              {{ getLocationLabel() }}
            </p>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <strong>{{ profile.followersCount }}</strong>
            <span>Followers</span>
          </div>
          <div class="stat-card">
            <strong>{{ profile.followingCount }}</strong>
            <span>Abonnements</span>
          </div>
          <div class="stat-card">
            <strong>{{ profile.postCount || 0 }}</strong>
            <span>Publications</span>
          </div>
        </div>

        <div class="content-grid">
          <section class="content-card">
            <h3>Presentation</h3>
            <p *ngIf="getSummaryText(); else noSummary" class="summary">
              {{ getSummaryText() }}
            </p>
            <ng-template #noSummary>
              <p class="muted">Aucune presentation detaillee pour le moment.</p>
            </ng-template>
          </section>

          <section class="content-card">
            <h3>Informations utiles</h3>
            <div class="detail-list">
              <div class="detail-row" *ngIf="profile.phoneNumber">
                <span class="label">Telephone</span>
                <span>{{ profile.phoneNumber }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.yearsExperience">
                <span class="label">Experience</span>
                <span>{{ profile.yearsExperience }} ans</span>
              </div>
              <div class="detail-row" *ngIf="profile.companySector">
                <span class="label">Secteur</span>
                <span>{{ profile.companySector }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.companySize">
                <span class="label">Taille</span>
                <span>{{ profile.companySize }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.skills">
                <span class="label">Competences</span>
                <span>{{ profile.skills }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.companyWebsite">
                <span class="label">Site web</span>
                <a [href]="profile.companyWebsite" target="_blank" rel="noreferrer">
                  {{ profile.companyWebsite }}
                </a>
              </div>
            </div>
          </section>
        </div>

        <div class="request-note" *ngIf="isCrossRole && !relationship.canMessage">
          <mat-icon>shield</mat-icon>
          <span>Une demande acceptee est necessaire avant d'ouvrir la messagerie.</span>
        </div>

        <div class="message-box" *ngIf="canSendRequest">
          <mat-form-field appearance="outline" class="message-field">
            <mat-label>Ajouter un message a votre demande</mat-label>
            <textarea
              matInput
              rows="3"
              maxlength="280"
              [(ngModel)]="requestMessage"
              placeholder="Bonjour, je souhaite entrer en contact avec vous..."
            ></textarea>
          </mat-form-field>
        </div>

        <div class="actions">
          <button mat-button (click)="dialogRef.close()" [disabled]="processing">
            Fermer
          </button>

          @if (relationship.canMessage) {
            <button mat-raised-button color="primary" (click)="openConversation()" [disabled]="processing">
              <mat-icon>chat</mat-icon>
              Envoyer un message
            </button>
          } @else if (canAcceptRequest) {
            <button mat-stroked-button color="warn" (click)="rejectRequest()" [disabled]="processing">
              <mat-icon>close</mat-icon>
              Refuser
            </button>
            <button mat-raised-button color="primary" (click)="acceptRequest()" [disabled]="processing">
              <mat-icon>check</mat-icon>
              Accepter
            </button>
          } @else if (isOutgoingPending) {
            <button mat-stroked-button color="warn" (click)="cancelRequest()" [disabled]="processing || !relationship.requestId">
              <mat-icon>cancel</mat-icon>
              Annuler la demande
            </button>
            <button mat-raised-button color="primary" disabled>
              <mat-icon>schedule</mat-icon>
              Demande envoyee
            </button>
          } @else if (canSendRequest) {
            <button mat-raised-button color="primary" (click)="sendRequest()" [disabled]="processing">
              <mat-icon>person_add</mat-icon>
              Envoyer la demande
            </button>
          } @else {
            <button mat-raised-button color="primary" disabled>
              <mat-icon>info</mat-icon>
              {{ getRelationshipLabel() }}
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .profile-dialog {
      position: relative;
      padding: 24px;
      background: linear-gradient(180deg, #f7fbff 0%, #ffffff 38%);
      color: #10233f;
      max-width: 760px;
    }

    .close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      color: #6b7a90;
    }

    .loading-state {
      min-height: 320px;
      display: grid;
      place-items: center;
      gap: 12px;
      color: #607086;
    }

    .hero {
      display: flex;
      gap: 20px;
      align-items: center;
      padding: 8px 8px 24px;
    }

    .avatar-wrap {
      width: 104px;
      height: 104px;
      border-radius: 28px;
      overflow: hidden;
      background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);
      box-shadow: 0 18px 40px rgba(15, 94, 198, 0.18);
      flex-shrink: 0;
    }

    .avatar-wrap img,
    .avatar-fallback {
      width: 100%;
      height: 100%;
    }

    .avatar-wrap img {
      object-fit: cover;
    }

    .avatar-fallback {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    .hero-copy {
      min-width: 0;
      flex: 1;
    }

    .hero-topline {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 12px;
    }

    .role-pill,
    .state-pill {
      display: inline-flex;
      align-items: center;
      padding: 6px 12px;
      border-radius: 999px;
      font-size: 0.78rem;
      font-weight: 700;
      letter-spacing: 0.02em;
    }

    .role-pill {
      background: #e9f3ff;
      color: #0f5ec6;
    }

    .state-pill {
      background: #edf2f7;
      color: #4a5a70;
    }

    .state-pill.pending {
      background: #fff4d6;
      color: #9a6700;
    }

    .state-pill.accepted {
      background: #ddf5e5;
      color: #17653a;
    }

    .state-pill.rejected {
      background: #ffe1e1;
      color: #b42318;
    }

    .state-pill.none {
      background: #edf2f7;
      color: #516174;
    }

    .hero h2 {
      margin: 0;
      font-size: 1.9rem;
      line-height: 1.1;
      letter-spacing: -0.02em;
    }

    .subtitle,
    .meta {
      margin: 8px 0 0;
      color: #5f7085;
    }

    .meta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .meta mat-icon {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }

    .stats-row {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 12px;
      margin-bottom: 18px;
    }

    .stat-card {
      background: #fff;
      border: 1px solid #d8e4f0;
      border-radius: 18px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .stat-card strong {
      font-size: 1.2rem;
      color: #10233f;
    }

    .stat-card span {
      color: #6b7a90;
      font-size: 0.88rem;
    }

    .content-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
    }

    .content-card {
      background: #fff;
      border: 1px solid #d8e4f0;
      border-radius: 18px;
      padding: 18px;
    }

    .content-card h3 {
      margin: 0 0 12px;
      font-size: 1rem;
      color: #18314f;
    }

    .summary,
    .muted {
      margin: 0;
      line-height: 1.6;
      color: #4c5d72;
    }

    .muted {
      color: #7b8a9d;
    }

    .detail-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .detail-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-bottom: 10px;
      border-bottom: 1px solid #edf2f7;
    }

    .detail-row:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .detail-row .label {
      font-size: 0.78rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #6b7a90;
      font-weight: 700;
    }

    .detail-row a {
      color: #0f5ec6;
      text-decoration: none;
      word-break: break-word;
    }

    .request-note {
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 14px;
      border-radius: 14px;
      background: #eef5ff;
      color: #29578b;
    }

    .message-box {
      margin-top: 18px;
    }

    .message-field {
      width: 100%;
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      flex-wrap: wrap;
      margin-top: 22px;
    }

    @media (max-width: 720px) {
      .profile-dialog {
        padding: 18px;
      }

      .hero {
        flex-direction: column;
        align-items: flex-start;
      }

      .stats-row,
      .content-grid {
        grid-template-columns: 1fr;
      }

      .actions {
        justify-content: stretch;
      }

      .actions button {
        width: 100%;
      }
    }
  `]
})
export class UserConnectionModalComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<UserConnectionModalComponent>);
  readonly data = inject<UserConnectionModalData>(MAT_DIALOG_DATA);

  private readonly userSvc = inject(UserService);
  private readonly connectionSvc = inject(ConnectionRequestService);
  private readonly messagingSvc = inject(MessagingService);
  private readonly alertSvc = inject(AlertService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  loading = true;
  processing = false;
  requestMessage = '';
  profile: PublicProfileResponse | null = null;
  relationship: ConnectionStatusResponse = {
    isFollowedByMe: false,
    isFollowingMe: false,
    canMessage: false,
    connectionRequestStatus: 'NONE',
    requestDirection: 'NONE',
    followersCount: 0,
    followingCount: 0
  };

  ngOnInit(): void {
    this.refreshData();
  }

  get isCrossRole(): boolean {
    return !!this.profile && this.profile.role !== this.auth.currentUser?.role;
  }

  get canSendRequest(): boolean {
    return this.isCrossRole && this.relationship.connectionRequestStatus === 'NONE' && !this.relationship.canMessage;
  }

  get canAcceptRequest(): boolean {
    return this.relationship.connectionRequestStatus === 'PENDING' && this.relationship.requestDirection === 'INCOMING';
  }

  get isOutgoingPending(): boolean {
    return this.relationship.connectionRequestStatus === 'PENDING' && this.relationship.requestDirection === 'OUTGOING';
  }

  get statusClass(): string {
    return this.relationship.connectionRequestStatus.toLowerCase();
  }

  private refreshData(): void {
    this.loading = true;
    forkJoin({
      profile: this.userSvc.getPublicProfile(this.data.userId),
      relationship: this.userSvc.getConnectionStatus(this.data.userId)
    }).subscribe({
      next: ({ profile, relationship }) => {
        this.profile = profile.data;
        this.relationship = relationship.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.alertSvc.error('Impossible de charger ce profil');
        this.dialogRef.close();
      }
    });
  }

  sendRequest(): void {
    if (this.processing) {
      return;
    }

    this.processing = true;
    this.connectionSvc.sendRequest(this.data.userId, this.requestMessage.trim() || undefined).subscribe({
      next: async () => {
        this.processing = false;
        await this.alertSvc.success('Demande envoyee');
        this.requestMessage = '';
        this.refreshData();
      },
      error: async (error) => {
        this.processing = false;
        await this.alertSvc.error('Envoi impossible', error?.error?.message);
      }
    });
  }

  acceptRequest(): void {
    if (!this.relationship.requestId || this.processing) {
      return;
    }

    this.processing = true;
    this.connectionSvc.acceptRequest(this.relationship.requestId).subscribe({
      next: async () => {
        this.processing = false;
        await this.alertSvc.success('Demande acceptee');
        this.refreshData();
      },
      error: async (error) => {
        this.processing = false;
        await this.alertSvc.error('Acceptation impossible', error?.error?.message);
      }
    });
  }

  rejectRequest(): void {
    if (!this.relationship.requestId || this.processing) {
      return;
    }

    this.processing = true;
    this.connectionSvc.rejectRequest(this.relationship.requestId).subscribe({
      next: async () => {
        this.processing = false;
        await this.alertSvc.success('Demande refusee');
        this.refreshData();
      },
      error: async (error) => {
        this.processing = false;
        await this.alertSvc.error('Refus impossible', error?.error?.message);
      }
    });
  }

  cancelRequest(): void {
    if (!this.relationship.requestId || this.processing) {
      return;
    }

    this.processing = true;
    this.connectionSvc.cancelRequest(this.relationship.requestId).subscribe({
      next: async () => {
        this.processing = false;
        await this.alertSvc.success('Demande annulee');
        this.refreshData();
      },
      error: async (error) => {
        this.processing = false;
        await this.alertSvc.error('Annulation impossible', error?.error?.message);
      }
    });
  }

  openConversation(): void {
    if (this.processing) {
      return;
    }

    this.processing = true;
    this.messagingSvc.getOrCreateConversation(this.data.userId).subscribe({
      next: ({ data }) => {
        this.processing = false;
        this.router.navigate([this.auth.isEnterprise ? '/enterprise/messages' : '/candidate/messages'], {
          queryParams: { convId: data.id }
        });
        this.dialogRef.close();
      },
      error: async (error) => {
        this.processing = false;
        await this.alertSvc.error('Messagerie indisponible', error?.error?.message);
      }
    });
  }

  getRoleLabel(role: string): string {
    return role === 'ROLE_ENTERPRISE' ? 'Entreprise' : role === 'ROLE_CANDIDATE' ? 'Candidat' : role;
  }

  getPrimarySubtitle(): string {
    if (!this.profile) {
      return '';
    }

    if (this.profile.role === 'ROLE_ENTERPRISE') {
      return this.profile.companyName || 'Entreprise';
    }

    return this.profile.headline || 'Profil professionnel';
  }

  getSummaryText(): string {
    if (!this.profile) {
      return '';
    }

    return this.profile.summary || this.profile.companyDescription || '';
  }

  getLocationLabel(): string {
    if (!this.profile) {
      return '';
    }

    return [this.profile.city, this.profile.country].filter(part => !!part).join(', ');
  }

  getRelationshipLabel(): string {
    if (this.relationship.canMessage) {
      return 'Messagerie active';
    }

    switch (this.relationship.connectionRequestStatus) {
      case 'PENDING':
        return this.relationship.requestDirection === 'INCOMING' ? 'Invitation recue' : 'Invitation envoyee';
      case 'ACCEPTED':
        return 'Connexion acceptee';
      case 'REJECTED':
        return 'Invitation refusee';
      default:
        return this.isCrossRole ? 'Aucune connexion' : 'Contact direct';
    }
  }

  initials(name: string): string {
    return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
