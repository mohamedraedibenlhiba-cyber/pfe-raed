import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConnectionRequest } from '../../../core/models/models';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { AlertService } from '../../../core/services/alert.service';
import { UserConnectionModalComponent } from '../../../shared/components/user-connection-modal/user-connection-modal.component';

@Component({
  selector: 'app-connection-requests-modal',
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  template: `
    <div class="requests-dialog">
      <div class="dialog-header">
        <div>
          <h2>Demandes de connexion</h2>
          <p>Gerez les invitations qui ouvrent l'acces a la messagerie.</p>
        </div>
        <button mat-icon-button (click)="dialogRef.close()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-tab-group animationDuration="0ms" class="request-tabs">
        <mat-tab [label]="'Recues (' + pendingRequests.length + ')'">
          <div class="tab-body">
            @if (loadingPending) {
              <div class="loading-state">
                <mat-spinner diameter="34"></mat-spinner>
              </div>
            } @else if (!pendingRequests.length) {
              <div class="empty-state">
                <mat-icon>mark_email_read</mat-icon>
                <h3>Aucune demande en attente</h3>
                <p>Les nouvelles invitations apparaitront ici.</p>
              </div>
            } @else {
              @for (request of pendingRequests; track request.id) {
                <mat-card class="request-card">
                  <div class="request-head">
                    <div class="avatar">
                      <img *ngIf="request.senderProfilePicture" [src]="request.senderProfilePicture" [alt]="request.senderName" />
                      <div *ngIf="!request.senderProfilePicture" class="avatar-fallback">
                        {{ initials(request.senderName) }}
                      </div>
                    </div>

                    <div class="request-meta">
                      <h3>{{ request.senderName }}</h3>
                      <span class="timestamp">{{ request.createdAt | date:'medium' }}</span>
                    </div>

                    <button mat-stroked-button (click)="openUserDetails(request.senderId)">
                      <mat-icon>visibility</mat-icon>
                      Voir le profil
                    </button>
                  </div>

                  <p class="request-message" *ngIf="request.message">{{ request.message }}</p>

                  <div class="request-actions">
                    <button
                      mat-stroked-button
                      color="warn"
                      (click)="rejectRequest(request.id)"
                      [disabled]="processingRequestId === request.id">
                      <mat-icon>close</mat-icon>
                      Refuser
                    </button>
                    <button
                      mat-raised-button
                      color="primary"
                      (click)="acceptRequest(request.id)"
                      [disabled]="processingRequestId === request.id">
                      <mat-icon>check</mat-icon>
                      Accepter
                    </button>
                  </div>
                </mat-card>
              }
            }
          </div>
        </mat-tab>

        <mat-tab [label]="'Envoyees (' + sentRequests.length + ')'">
          <div class="tab-body">
            @if (loadingSent) {
              <div class="loading-state">
                <mat-spinner diameter="34"></mat-spinner>
              </div>
            } @else if (!sentRequests.length) {
              <div class="empty-state">
                <mat-icon>outgoing_mail</mat-icon>
                <h3>Aucune demande envoyee</h3>
                <p>Vous pouvez lancer une nouvelle relation depuis la recherche utilisateur.</p>
              </div>
            } @else {
              @for (request of sentRequests; track request.id) {
                <mat-card class="request-card">
                  <div class="request-head">
                    <div class="avatar">
                      <img *ngIf="request.receiverProfilePicture" [src]="request.receiverProfilePicture" [alt]="request.receiverName" />
                      <div *ngIf="!request.receiverProfilePicture" class="avatar-fallback">
                        {{ initials(request.receiverName) }}
                      </div>
                    </div>

                    <div class="request-meta">
                      <h3>{{ request.receiverName }}</h3>
                      <span class="status-pill" [ngClass]="request.status.toLowerCase()">
                        {{ getStatusLabel(request.status) }}
                      </span>
                    </div>

                    <button mat-stroked-button (click)="openUserDetails(request.receiverId)">
                      <mat-icon>visibility</mat-icon>
                      Voir le profil
                    </button>
                  </div>

                  <p class="request-message" *ngIf="request.message">{{ request.message }}</p>

                  <div class="request-actions">
                    <button
                      mat-stroked-button
                      color="warn"
                      *ngIf="request.status === 'PENDING'"
                      (click)="cancelRequest(request.id)"
                      [disabled]="processingRequestId === request.id">
                      <mat-icon>cancel</mat-icon>
                      Annuler
                    </button>
                  </div>
                </mat-card>
              }
            }
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .requests-dialog {
      width: min(820px, 95vw);
      max-height: min(760px, 90vh);
      display: flex;
      flex-direction: column;
      background: linear-gradient(180deg, #f7fbff 0%, #ffffff 30%);
    }

    .dialog-header {
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: flex-start;
      padding: 22px 24px 12px;
    }

    .dialog-header h2 {
      margin: 0;
      color: #10233f;
    }

    .dialog-header p {
      margin: 6px 0 0;
      color: #607086;
    }

    .request-tabs {
      flex: 1;
      min-height: 0;
    }

    .tab-body {
      padding: 12px 24px 24px;
      display: flex;
      flex-direction: column;
      gap: 14px;
      max-height: 640px;
      overflow: auto;
    }

    .loading-state,
    .empty-state {
      min-height: 260px;
      display: grid;
      place-items: center;
      text-align: center;
      color: #6b7a90;
    }

    .empty-state mat-icon {
      width: 44px;
      height: 44px;
      font-size: 44px;
      color: #94a3b8;
      margin-bottom: 8px;
    }

    .empty-state h3 {
      margin: 0;
      color: #18314f;
    }

    .empty-state p {
      margin: 6px 0 0;
    }

    .request-card {
      border-radius: 20px;
      border: 1px solid #d8e4f0;
      box-shadow: none;
      padding: 18px;
    }

    .request-head {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .avatar {
      width: 54px;
      height: 54px;
      border-radius: 18px;
      overflow: hidden;
      background: #e6eef8;
      flex-shrink: 0;
    }

    .avatar img,
    .avatar-fallback {
      width: 100%;
      height: 100%;
    }

    .avatar img {
      object-fit: cover;
    }

    .avatar-fallback {
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);
      color: white;
      font-weight: 700;
    }

    .request-meta {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .request-meta h3 {
      margin: 0;
      color: #10233f;
    }

    .timestamp {
      color: #6b7a90;
      font-size: 0.85rem;
    }

    .status-pill {
      align-self: flex-start;
      display: inline-flex;
      align-items: center;
      padding: 5px 10px;
      border-radius: 999px;
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.02em;
      text-transform: uppercase;
      background: #eef2f7;
      color: #516174;
    }

    .status-pill.pending {
      background: #fff4d6;
      color: #9a6700;
    }

    .status-pill.accepted {
      background: #ddf5e5;
      color: #17653a;
    }

    .status-pill.rejected {
      background: #ffe1e1;
      color: #b42318;
    }

    .request-message {
      margin: 16px 0 0;
      padding: 14px 16px;
      border-radius: 14px;
      background: #f8fbff;
      color: #445468;
      line-height: 1.55;
    }

    .request-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 18px;
    }

    @media (max-width: 720px) {
      .dialog-header,
      .tab-body {
        padding-left: 18px;
        padding-right: 18px;
      }

      .request-head {
        flex-wrap: wrap;
      }

      .request-head button,
      .request-actions button {
        width: 100%;
      }
    }
  `]
})
export class ConnectionRequestsModalComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<ConnectionRequestsModalComponent>);
  readonly data = inject(MAT_DIALOG_DATA, { optional: true });

  private readonly connectionSvc = inject(ConnectionRequestService);
  private readonly alertSvc = inject(AlertService);
  private readonly dialog = inject(MatDialog);

  pendingRequests: ConnectionRequest[] = [];
  sentRequests: ConnectionRequest[] = [];
  loadingPending = false;
  loadingSent = false;
  processingRequestId: number | null = null;

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loadPendingRequests();
    this.loadSentRequests();
  }

  private loadPendingRequests(): void {
    this.loadingPending = true;
    this.connectionSvc.getPendingRequests(0, 20).subscribe({
      next: ({ data }) => {
        this.pendingRequests = data.content;
        this.loadingPending = false;
      },
      error: async () => {
        this.loadingPending = false;
        await this.alertSvc.error('Chargement impossible');
      }
    });
  }

  private loadSentRequests(): void {
    this.loadingSent = true;
    this.connectionSvc.getSentRequests(0, 20).subscribe({
      next: ({ data }) => {
        this.sentRequests = data.content;
        this.loadingSent = false;
      },
      error: async () => {
        this.loadingSent = false;
        await this.alertSvc.error('Chargement impossible');
      }
    });
  }

  acceptRequest(requestId: number): void {
    this.processingRequestId = requestId;
    this.connectionSvc.acceptRequest(requestId).subscribe({
      next: async () => {
        this.processingRequestId = null;
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
        await this.alertSvc.success('Demande acceptee');
      },
      error: async (error) => {
        this.processingRequestId = null;
        await this.alertSvc.error('Acceptation impossible', error?.error?.message);
      }
    });
  }

  rejectRequest(requestId: number): void {
    this.processingRequestId = requestId;
    this.connectionSvc.rejectRequest(requestId).subscribe({
      next: async () => {
        this.processingRequestId = null;
        this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
        await this.alertSvc.success('Demande refusee');
      },
      error: async (error) => {
        this.processingRequestId = null;
        await this.alertSvc.error('Refus impossible', error?.error?.message);
      }
    });
  }

  cancelRequest(requestId: number): void {
    this.processingRequestId = requestId;
    this.connectionSvc.cancelRequest(requestId).subscribe({
      next: async () => {
        this.processingRequestId = null;
        this.sentRequests = this.sentRequests.filter(request => request.id !== requestId);
        await this.alertSvc.success('Demande annulee');
      },
      error: async (error) => {
        this.processingRequestId = null;
        await this.alertSvc.error('Annulation impossible', error?.error?.message);
      }
    });
  }

  openUserDetails(userId: number): void {
    this.dialog.open(UserConnectionModalComponent, {
      width: '760px',
      maxWidth: '95vw',
      data: { userId }
    });
  }

  getStatusLabel(status: string): string {
    if (status === 'PENDING') {
      return 'En attente';
    }

    if (status === 'ACCEPTED') {
      return 'Acceptee';
    }

    if (status === 'REJECTED') {
      return 'Refusee';
    }

    return status;
  }

  initials(name: string): string {
    return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
