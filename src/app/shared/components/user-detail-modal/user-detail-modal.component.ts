import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { User } from '../../../core/models/models';

type UserDetail = User & {
  companyName?: string;
  headline?: string;
  summary?: string;
};

@Component({
  selector: 'app-user-detail-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule
  ],
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h2 mat-dialog-title>Détails de l'utilisateur</h2>
        <button mat-icon-button [mat-dialog-close]="null" class="close-btn">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-dialog-content>
        <div class="user-info-container">
          <!-- Avatar Section -->
          <div class="avatar-section">
            <div class="avatar-large">
              <img *ngIf="user.profilePicture" [src]="user.profilePicture" alt="Profile" />
              <div *ngIf="!user.profilePicture" class="avatar-placeholder">
                {{ initials(user.fullName) }}
              </div>
            </div>
            <div class="user-main-info">
              <h3>{{ user.fullName }}</h3>
              <p class="email">{{ user.email }}</p>
              <span class="chip" [ngClass]="'role-' + roleClass(user.role)">
                {{ roleLabel(user.role) }}
              </span>
            </div>
          </div>

          <mat-divider></mat-divider>

          <!-- Details Grid -->
          <div class="details-grid">
            <!-- Téléphone -->
            <div class="detail-item" *ngIf="user.phoneNumber">
              <mat-icon class="detail-icon">phone</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Téléphone</span>
                <span class="detail-value">{{ user.phoneNumber }}</span>
              </div>
            </div>

            <!-- Localisation -->
            <div class="detail-item" *ngIf="user.city || user.country">
              <mat-icon class="detail-icon">location_on</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Localisation</span>
                <span class="detail-value">{{ user.city }}<span *ngIf="user.city && user.country">, </span>{{ user.country }}</span>
              </div>
            </div>

            <!-- Entreprise -->
            <div class="detail-item" *ngIf="companyName">
              <mat-icon class="detail-icon">business</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Entreprise</span>
                <span class="detail-value">{{ companyName }}</span>
              </div>
            </div>

            <!-- Titre du poste -->
            <div class="detail-item" *ngIf="headline">
              <mat-icon class="detail-icon">work</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Titre du poste</span>
                <span class="detail-value">{{ headline }}</span>
              </div>
            </div>

            <!-- Statut -->
            <div class="detail-item">
              <mat-icon class="detail-icon">{{ user.active ? 'check_circle' : 'cancel' }}</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Statut du compte</span>
                <span class="detail-value" [class.status-active]="user.active" [class.status-inactive]="!user.active">
                  {{ user.active ? 'Actif' : 'Inactif' }}
                </span>
              </div>
            </div>

            <!-- Date d'inscription -->
            <div class="detail-item">
              <mat-icon class="detail-icon">calendar_today</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Inscrit le</span>
                <span class="detail-value">{{ user.createdAt | date:'dd/MM/yyyy à HH:mm' }}</span>
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div class="bio-section" *ngIf="summary">
            <mat-divider></mat-divider>
            <h4>Bio</h4>
            <p class="bio-text">{{ summary }}</p>
          </div>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="null">Fermer</button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .modal-content {
      width: 500px;
      max-height: 90vh;
      overflow-y: auto;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 20px;
      font-weight: 600;
    }

    .close-btn {
      margin-right: -8px;
    }

    mat-dialog-content {
      padding: 20px;
    }

    mat-dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      padding: 15px 20px;
      border-top: 1px solid #eee;
    }

    .user-info-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .avatar-section {
      display: flex;
      gap: 20px;
      align-items: flex-start;
    }

    .avatar-large {
      flex-shrink: 0;
    }

    .avatar-large img,
    .avatar-placeholder {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 3px solid #f5f5f5;
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      font-weight: bold;
      background: #e0e0e0;
    }

    .avatar-placeholder {
      color: white;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .user-main-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .user-main-info h3 {
      margin: 0 0 5px;
      font-size: 18px;
      font-weight: 600;
    }

    .email {
      margin: 0 0 8px;
      color: #666;
      font-size: 13px;
    }

    .chip {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
      width: fit-content;
    }

    .role-admin {
      background-color: #fce4ec;
      color: #c2185b;
    }

    .role-enterprise {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .role-candidate {
      background-color: #f3e5f5;
      color: #7b1fa2;
    }

    .details-grid {
      display: grid;
      gap: 16px;
    }

    .detail-item {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .detail-icon {
      color: #667eea;
      flex-shrink: 0;
      margin-top: 2px;
      font-size: 20px;
      width: 20px;
      height: 20px;
    }

    .detail-content {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .detail-label {
      font-size: 12px;
      color: #999;
      font-weight: 500;
      text-transform: uppercase;
    }

    .detail-value {
      font-size: 14px;
      color: #333;
      font-weight: 500;
    }

    .status-active {
      color: #4caf50;
    }

    .status-inactive {
      color: #f44336;
    }

    .bio-section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .bio-section h4 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    .bio-text {
      margin: 0;
      font-size: 13px;
      color: #666;
      line-height: 1.5;
    }

    @media (max-width: 600px) {
      .modal-content {
        width: 100%;
      }

      .avatar-section {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .user-main-info {
        align-items: center;
      }
    }
  `]
})
export class UserDetailModalComponent {
  readonly user: UserDetail = inject(MAT_DIALOG_DATA);

  get companyName(): string | undefined {
    return this.user.role === 'ROLE_ENTERPRISE' ? this.user.companyName : undefined;
  }

  get headline(): string | undefined {
    return this.user.role === 'ROLE_CANDIDATE' ? this.user.headline : undefined;
  }

  get summary(): string | undefined {
    return this.user.role === 'ROLE_CANDIDATE' ? this.user.summary : undefined;
  }

  initials(name: string): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  roleLabel(role: string): string {
    return { ROLE_ADMIN: 'Admin', ROLE_ENTERPRISE: 'Entreprise', ROLE_CANDIDATE: 'Candidat' }[role] ?? role;
  }

  roleClass(role: string): string {
    return { ROLE_ADMIN: 'admin', ROLE_ENTERPRISE: 'enterprise', ROLE_CANDIDATE: 'candidate' }[role] ?? 'gray';
  }
}
