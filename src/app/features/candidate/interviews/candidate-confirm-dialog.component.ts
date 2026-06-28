import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Interview } from '../../../core/models/models';

@Component({
  selector: 'app-candidate-confirm-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
  template: `
    <div class="confirm-dialog">
      <div class="dialog-header">
        <div class="confirm-icon">
          <mat-icon>event_available</mat-icon>
        </div>
        <div>
          <h2 mat-dialog-title>Confirmer l'entretien</h2>
          <p class="dialog-sub">{{ data.interview.enterprise.companyName }} — {{ data.interview.jobOffer.title }}</p>
        </div>
        <button mat-icon-button [mat-dialog-close]="undefined" class="close-btn"><mat-icon>close</mat-icon></button>
      </div>

      <mat-dialog-content>
        <div class="interview-summary">
          <div class="summary-row">
            <mat-icon>schedule</mat-icon>
            <span>{{ data.interview.scheduledAt | date:"EEEE dd MMMM yyyy 'à' HH:mm" }}</span>
          </div>
          <div class="summary-row">
            <mat-icon>timer</mat-icon>
            <span>{{ data.interview.durationMinutes }} minutes</span>
          </div>
          <div class="summary-row">
            <mat-icon>{{ typeIcon(data.interview.type) }}</mat-icon>
            <span>{{ typeLabel(data.interview.type) }}</span>
          </div>
          @if (data.interview.meetingLink) {
            <div class="summary-row">
              <mat-icon>link</mat-icon>
              <a [href]="data.interview.meetingLink" target="_blank" rel="noopener" class="meeting-link">{{ data.interview.meetingLink }}</a>
            </div>
          }
          @if (data.interview.location) {
            <div class="summary-row">
              <mat-icon>place</mat-icon>
              <span>{{ data.interview.location }}</span>
            </div>
          }
          @if (data.interview.enterpriseNotes) {
            <div class="enterprise-notes">
              <mat-icon>info_outline</mat-icon>
              <p>{{ data.interview.enterpriseNotes }}</p>
            </div>
          }
        </div>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Message pour l'entreprise (optionnel)</mat-label>
          <textarea matInput [(ngModel)]="note" rows="3" placeholder="Merci pour l'invitation, je confirme ma présence..."></textarea>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="undefined">Annuler</button>
        <button mat-flat-button color="primary" class="confirm-btn" [mat-dialog-close]="note">
          <mat-icon>check_circle</mat-icon>
          Confirmer ma présence
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: [`
    .confirm-dialog { width: 460px; max-width: 100%; }
    .dialog-header {
      display: flex; align-items: center; gap: 12px;
      padding: 20px 20px 0;
      h2 { margin: 0; font-size: 17px; font-weight: 700; }
      .dialog-sub { margin: 2px 0 0; font-size: 13px; color: #64748b; }
      .close-btn { margin-left: auto; color: #94a3b8; }
    }
    .confirm-icon {
      width: 44px; height: 44px; border-radius: 12px;
      background: linear-gradient(135deg, #16a34a, #15803d);
      display: flex; align-items: center; justify-content: center; flex-shrink: 0;
      mat-icon { color: #fff; font-size: 22px; width: 22px; height: 22px; }
    }
    mat-dialog-content { padding: 16px 20px !important; }
    .interview-summary {
      background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;
      padding: 14px; margin-bottom: 16px;
      display: flex; flex-direction: column; gap: 8px;
    }
    .summary-row {
      display: flex; align-items: center; gap: 8px;
      font-size: 0.875rem; color: #374151;
      mat-icon { font-size: 16px; width: 16px; height: 16px; color: #6366f1; flex-shrink: 0; }
    }
    .meeting-link { color: #2563eb; text-decoration: none; word-break: break-all; font-size: 0.8rem; }
    .enterprise-notes {
      display: flex; align-items: flex-start; gap: 6px; margin-top: 6px;
      background: #fffbeb; border-radius: 6px; padding: 8px 10px;
      mat-icon { font-size: 14px; width: 14px; height: 14px; color: #d97706; flex-shrink: 0; margin-top: 2px; }
      p { margin: 0; font-size: 0.8rem; color: #78350f; }
    }
    .full-width { width: 100%; }
    mat-dialog-actions {
      display: flex; justify-content: flex-end; gap: 8px;
      padding: 12px 20px !important; border-top: 1px solid #e2e8f0;
    }
    .confirm-btn {
      background: linear-gradient(135deg, #16a34a, #15803d) !important;
      color: #fff !important; font-weight: 600;
      display: flex; align-items: center; gap: 6px;
    }
  `]
})
export class CandidateConfirmDialogComponent {
  readonly data: { interview: Interview } = inject(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<CandidateConfirmDialogComponent>);
  note = '';

  typeIcon(type: string): string {
    return { VIDEO: 'videocam', IN_PERSON: 'location_on', PHONE: 'phone' }[type] ?? 'event';
  }

  typeLabel(type: string): string {
    return { VIDEO: 'Visioconférence', IN_PERSON: 'Présentiel', PHONE: 'Téléphone' }[type] ?? type;
  }
}
