import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { ApplicationService } from '../../../core/services/application.service';
import { Application, ApplicationStatus } from '../../../core/models/models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enterprise-applications',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatSnackBarModule, AppSelectComponent, MatTooltipModule, MatTabsModule],
  templateUrl: './enterprise-applications.component.html',
  styleUrls: ['./enterprise-applications.component.scss']
})
export class EnterpriseApplicationsComponent implements OnInit {
  private readonly appSvc  = inject(ApplicationService);
  private readonly route   = inject(ActivatedRoute);
  private readonly snack   = inject(MatSnackBar);

  loading = true;
  offerId!: number;
  applications: Application[] = [];
  ranked: Application[] = [];
  viewMode: 'list' | 'ranked' = 'ranked';

  statusOptions = [
    { value: 'REVIEWED',     label: 'En revue' },
    { value: 'SHORTLISTED',  label: 'Sélectionné' },
    { value: 'INTERVIEW',    label: 'Entretien' },
    { value: 'ACCEPTED',     label: 'Accepté' },
    { value: 'REJECTED',     label: 'Refusé' },
  ];

  ngOnInit(): void {
    this.offerId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRanked();
  }

  loadRanked(): void {
    this.loading = true;
    this.appSvc.getRanked(this.offerId).subscribe({
      next: res => { this.ranked = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  updateStatus(app: Application, status: string): void {
    this.appSvc.updateStatus(app.id, status).subscribe({
      next: res => { app.status = res.data.status; this.snack.open('Statut mis à jour', 'OK', { panelClass: 'success-snack' }); },
      error: err => this.snack.open(err.error?.message || 'Erreur', 'OK', { panelClass: 'error-snack' })
    });
  }

  statusChipClass(status: ApplicationStatus): string {
    const map: Record<ApplicationStatus, string> = {
      PENDING: 'chip-gray', REVIEWED: 'chip-info', AI_ANALYZED: 'chip-accent',
      SHORTLISTED: 'chip-primary', INTERVIEW: 'chip-warning',
      ACCEPTED: 'chip-success', REJECTED: 'chip-danger'
    };
    return map[status] ?? 'chip-gray';
  }

  scoreClass(score?: number): string {
    if (!score) return 'score-na';
    if (score >= 80) return 'score-high';
    if (score >= 50) return 'score-mid';
    return 'score-low';
  }

  initials(name: string | undefined): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
