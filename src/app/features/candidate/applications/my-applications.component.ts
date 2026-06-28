import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApplicationService } from '../../../core/services/application.service';
import { Application, ApplicationStatus } from '../../../core/models/models';

@Component({
  selector: 'app-my-applications',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit {
  private readonly appSvc = inject(ApplicationService);

  loading = true;
  applications: Application[] = [];

  ngOnInit(): void {
    this.appSvc.getMyApplications().subscribe({
      next: res => { this.applications = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  statusChipClass(s: ApplicationStatus): string {
    return { PENDING: 'chip-gray', REVIEWED: 'chip-info', AI_ANALYZED: 'chip-accent', SHORTLISTED: 'chip-primary', INTERVIEW: 'chip-warning', ACCEPTED: 'chip-success', REJECTED: 'chip-danger' }[s] ?? 'chip-gray';
  }

  statusLabel(s: ApplicationStatus): string {
    return { PENDING: 'En attente', REVIEWED: 'Examinée', AI_ANALYZED: 'Analysée IA', SHORTLISTED: 'Sélectionné', INTERVIEW: 'Entretien', ACCEPTED: 'Accepté', REJECTED: 'Refusé' }[s] ?? s;
  }
}
