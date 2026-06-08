import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InterviewService } from '../../../core/services/interview.service';
import { AlertService } from '../../../core/services/alert.service';
import { Interview, InterviewStatus } from '../../../core/models/models';

@Component({
  selector: 'app-enterprise-interviews',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './enterprise-interviews.component.html',
  styleUrls: ['./enterprise-interviews.component.scss']
})
export class EnterpriseInterviewsComponent implements OnInit {
  private readonly interviewSvc = inject(InterviewService);
  private readonly alertSvc = inject(AlertService);

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

  complete(iv: Interview): void {
    this.interviewSvc.complete(iv.id).subscribe({
      next: res => {
        iv.status = res.data.status;
        this.alertSvc.success('Entretien marqué comme complété');
      },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
    });
  }

  cancel(iv: Interview): void {
    this.interviewSvc.cancel(iv.id, 'Annulé par l\'entreprise').subscribe({
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
    return { PROPOSED: 'Proposé', CONFIRMED: 'Confirmé', RESCHEDULED: 'Reprogrammé', CANCELLED: 'Annulé', COMPLETED: 'Complété' }[s] ?? s;
  }

  typeIcon(type: string): string {
    return { VIDEO: 'videocam', IN_PERSON: 'location_on', PHONE: 'phone' }[type] ?? 'event';
  }

  typeLabel(type: string): string {
    return { VIDEO: 'Visioconférence', IN_PERSON: 'Présentiel', PHONE: 'Téléphone' }[type] ?? type;
  }

  canComplete(iv: Interview): boolean {
    return iv.status === 'CONFIRMED' && new Date(iv.scheduledAt) < new Date();
  }

  canCancel(iv: Interview): boolean {
    return iv.status === 'PROPOSED' || iv.status === 'CONFIRMED';
  }

  initials(name: string): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
