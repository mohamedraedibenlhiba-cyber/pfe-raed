import { Component, OnInit, inject, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { AlertService } from '../../../core/services/alert.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { ConnectionRequest, Page } from '../../../core/models/models';

/**
 * Modal component for managing connection requests
 * Shows pending requests received and sent requests
 */
@Component({
  selector: 'app-connection-requests-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  template: `
    <div class="modal-header">
      <h2>Demandes de Connexion</h2>
      <button mat-icon-button class="close-btn" (click)="closeModal()">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <mat-tab-group class="requests-tabs">
      <!-- Pending Requests Received -->
      <mat-tab [label]="'En attente (' + pendingRequests.length + ')'">
        <div class="tab-content">
          <div *ngIf="loadingPending" class="loading">
            <mat-spinner diameter="40"></mat-spinner>
          </div>

          <div *ngIf="!loadingPending && pendingRequests.length === 0" class="empty-state">
            <mat-icon>mail_outline</mat-icon>
            <p>Aucune demande de connexion en attente</p>
          </div>

          <mat-card *ngFor="let req of pendingRequests" class="request-card">
            <mat-card-header>
              <div class="requestor-info">
                <img
                  *ngIf="req.senderProfilePicture"
                  [src]="req.senderProfilePicture"
                  alt="avatar"
                  class="avatar"
                />
                <div *ngIf="!req.senderProfilePicture" class="avatar-placeholder">
                  <mat-icon>person</mat-icon>
                </div>
                <div class="info">
                  <h4>{{ req.senderName }}</h4>
                  <p class="date">{{ req.createdAt | date:'short' }}</p>
                </div>
              </div>
            </mat-card-header>

            <mat-card-content *ngIf="req.message">
              <p class="message">{{ req.message }}</p>
            </mat-card-content>

            <mat-card-actions>
              <button
                mat-raised-button
                color="accent"
                (click)="acceptRequest(req.id)"
                [disabled]="processingRequest === req.id"
              >
                <mat-icon>check</mat-icon>
                Accepter
              </button>
              <button
                mat-stroked-button
                color="warn"
                (click)="rejectRequest(req.id)"
                [disabled]="processingRequest === req.id"
              >
                <mat-icon>close</mat-icon>
                Refuser
              </button>
              <a [routerLink]="['/profile', req.senderId]" mat-stroked-button class="view-profile">
                <mat-icon>person</mat-icon>
                Voir le profil
              </a>
            </mat-card-actions>
          </mat-card>
        </div>
      </mat-tab>

      <!-- Sent Requests -->
      <mat-tab [label]="'Envoyées (' + sentRequests.length + ')'">
        <div class="tab-content">
          <div *ngIf="loadingSent" class="loading">
            <mat-spinner diameter="40"></mat-spinner>
          </div>

          <div *ngIf="!loadingSent && sentRequests.length === 0" class="empty-state">
            <mat-icon>send</mat-icon>
            <p>Aucune demande de connexion envoyée</p>
          </div>

          <mat-card *ngFor="let req of sentRequests" class="request-card">
            <mat-card-header>
              <div class="requestor-info">
                <img
                  *ngIf="req.receiverProfilePicture"
                  [src]="req.receiverProfilePicture"
                  alt="avatar"
                  class="avatar"
                />
                <div *ngIf="!req.receiverProfilePicture" class="avatar-placeholder">
                  <mat-icon>person</mat-icon>
                </div>
                <div class="info">
                  <h4>{{ req.receiverName }}</h4>
                  <p class="status" [ngClass]="'status-' + req.status.toLowerCase()">
                    {{ getStatusLabel(req.status) }}
                  </p>
                </div>
              </div>
            </mat-card-header>

            <mat-card-actions>
              <button
                mat-stroked-button
                color="warn"
                *ngIf="req.status === 'PENDING'"
                (click)="cancelRequest(req.id)"
                [disabled]="processingRequest === req.id"
              >
                <mat-icon>cancel</mat-icon>
                Annuler
              </button>
              <a [routerLink]="['/profile', req.receiverId]" mat-stroked-button class="view-profile">
                <mat-icon>person</mat-icon>
                Voir le profil
              </a>
            </mat-card-actions>
          </mat-card>
        </div>
      </mat-tab>
    </mat-tab-group>
  `,
  styles: [`
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.5rem;
      border-bottom: 1px solid #eee;
    }

    .modal-header h2 {
      margin: 0;
    }

    .close-btn {
      color: #666;
    }

    .requests-tabs {
      min-height: 400px;
      max-height: 600px;
    }

    .tab-content {
      padding: 1.5rem;
    }

    .loading {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 300px;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 300px;
      color: #999;
    }

    .empty-state mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .request-card {
      margin-bottom: 1rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .request-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    mat-card-header {
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
    }

    .requestor-info {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }

    .avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    .avatar-placeholder {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #999;
    }

    .info h4 {
      margin: 0 0 0.25rem 0;
    }

    .info p {
      margin: 0;
      font-size: 0.85rem;
      color: #999;
    }

    .status {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      display: inline-block;
      margin-top: 0.25rem;
    }

    .status-pending {
      background: #fff3cd;
      color: #856404;
    }

    .status-accepted {
      background: #d4edda;
      color: #155724;
    }

    .status-rejected {
      background: #f8d7da;
      color: #721c24;
    }

    mat-card-content {
      padding: 1rem 0;
    }

    .message {
      background: #f9f9f9;
      padding: 1rem;
      border-left: 3px solid #1976d2;
      margin: 0;
      color: #555;
      font-size: 0.95rem;
      border-radius: 4px;
    }

    mat-card-actions {
      display: flex;
      gap: 0.75rem;
      flex-wrap: wrap;
      padding: 0.75rem 0;
    }

    .view-profile {
      margin-left: auto;
    }

    ::ng-deep .mat-mdc-tab-labels {
      margin-bottom: 1rem;
    }
  `]
})
export class ConnectionRequestsModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  private connectionRequestService = inject(ConnectionRequestService);
  private alertSvc = inject(AlertService);

  pendingRequests: ConnectionRequest[] = [];
  sentRequests: ConnectionRequest[] = [];
  loadingPending = false;
  loadingSent = false;
  processingRequest: number | null = null;

  ngOnInit(): void {
    this.loadRequests();
  }

  private loadRequests(): void {
    this.loadPendingRequests();
    this.loadSentRequests();
  }

  private loadPendingRequests(): void {
    this.loadingPending = true;
    this.connectionRequestService.getPendingRequests(0, 20).subscribe({
      next: (res) => {
        this.pendingRequests = res.data.content;
        this.loadingPending = false;
      },
      error: (err) => {
        this.loadingPending = false;
        this.snackBar.open('Erreur lors du chargement des demandes', '', { duration: 2000 });
      }
    });
  }

  private loadSentRequests(): void {
    this.loadingSent = true;
    this.connectionRequestService.getSentRequests(0, 20).subscribe({
      next: (res) => {
        this.sentRequests = res.data.content;
        this.loadingSent = false;
      },
      error: (err) => {
        this.loadingSent = false;
        this.snackBar.open('Erreur lors du chargement des demandes envoyées', '', { duration: 2000 });
      }
    });
  }

  acceptRequest(requestId: number): void {
    this.processingRequest = requestId;
    this.connectionRequestService.acceptRequest(requestId).subscribe({
      next: (res) => {
        this.pendingRequests = this.pendingRequests.filter(r => r.id !== requestId);
        this.processingRequest = null;
        this.snackBar.open('Demande acceptée! ✨', '', { duration: 2000 });
      },
      error: (err) => {
        this.processingRequest = null;
        this.snackBar.open('Erreur lors de l\'acceptation', '', { duration: 2000 });
      }
    });
  }

  rejectRequest(requestId: number): void {
    this.processingRequest = requestId;
    this.connectionRequestService.rejectRequest(requestId).subscribe({
      next: (res) => {
        this.pendingRequests = this.pendingRequests.filter(r => r.id !== requestId);
        this.processingRequest = null;
        this.snackBar.open('Demande refusée', '', { duration: 2000 });
      },
      error: (err) => {
        this.processingRequest = null;
        this.snackBar.open('Erreur lors du refus', '', { duration: 2000 });
      }
    });
  }

  cancelRequest(requestId: number): void {
    this.processingRequest = requestId;
    this.connectionRequestService.cancelRequest(requestId).subscribe({
      next: (res) => {
        this.sentRequests = this.sentRequests.filter(r => r.id !== requestId);
        this.processingRequest = null;
        this.snackBar.open('Demande annulée', '', { duration: 2000 });
      },
      error: (err) => {
        this.processingRequest = null;
        this.snackBar.open('Erreur lors de l\'annulation', '', { duration: 2000 });
      }
    });
  }

  getStatusLabel(status: string): string {
    const labels: { [key: string]: string } = {
      'PENDING': 'En attente',
      'ACCEPTED': 'Acceptée',
      'REJECTED': 'Refusée'
    };
    return labels[status] || status;
  }

  closeModal(): void {
    this.close.emit();
  }
}
