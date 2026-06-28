import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { InterviewService } from '../../../core/services/interview.service';
import { AlertService } from '../../../core/services/alert.service';
import { Interview, InterviewStatus } from '../../../core/models/models';
import { CandidateConfirmDialogComponent } from './candidate-confirm-dialog.component';

@Component({
  selector: 'app-candidate-interviews',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatDialogModule],
  templateUrl: './candidate-interviews.component.html',
  styleUrls: ['./candidate-interviews.component.scss']
})
export class CandidateInterviewsComponent implements OnInit {
  private readonly interviewSvc = inject(InterviewService);
  private readonly alertSvc = inject(AlertService);
  private readonly dialog = inject(MatDialog);

  loading = true;
  interviews: Interview[] = [];

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.interviewSvc.getMyInterviews().subscribe({
      next: res => { this.interviews = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  confirmInterview(iv: Interview): void {
    const ref = this.dialog.open(CandidateConfirmDialogComponent, {
      width: '420px',
      data: { interview: iv }
    });
    ref.afterClosed().subscribe((note: string | null | undefined) => {
      if (note === undefined) return; // dialog cancelled
      this.interviewSvc.confirm(iv.id, note ?? undefined).subscribe({
        next: res => {
          iv.status = res.data.status;
          iv.candidateNote = res.data.candidateNote;
          this.alertSvc.success('Entretien confirmé ! L\'entreprise a été notifiée.');
        },
        error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
      });
    });
  }

  cancel(iv: Interview): void {
    this.interviewSvc.cancel(iv.id, 'Annulé par le candidat').subscribe({
      next: res => {
        iv.status = res.data.status;
        this.alertSvc.success('Entretien annulé');
      },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
    });
  }

  statusChipClass(s: InterviewStatus): string {
    const m: Record<InterviewStatus, string> = {
      PROPOSED: 'chip-warning', CONFIRMED: 'chip-success',
      RESCHEDULED: 'chip-info', CANCELLED: 'chip-danger', COMPLETED: 'chip-gray'
    };
    return m[s] ?? 'chip-gray';
  }

  statusLabel(s: InterviewStatus): string {
    return { PROPOSED: 'Invitation reçue', CONFIRMED: 'Confirmé', RESCHEDULED: 'Reprogrammé', CANCELLED: 'Annulé', COMPLETED: 'Complété' }[s] ?? s;
  }

  typeIcon(type: string): string {
    return { VIDEO: 'videocam', IN_PERSON: 'location_on', PHONE: 'phone' }[type] ?? 'event';
  }

  typeLabel(type: string): string {
    return { VIDEO: 'Visioconférence', IN_PERSON: 'Présentiel', PHONE: 'Téléphone' }[type] ?? type;
  }

  isUpcoming(iv: Interview): boolean {
    return new Date(iv.scheduledAt) > new Date();
  }
}
