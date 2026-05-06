import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertService } from '../../../core/services/alert.service';
import { ApplicationService } from '../../../core/services/application.service';
import { ApplicationDetail, ApplicationDetailCV, ApplicationStatus } from '../../../core/models/models';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';

@Component({
  selector: 'app-enterprise-applications',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, AppSelectComponent, MatTooltipModule, MatTabsModule],
  templateUrl: './enterprise-applications.component.html',
  styleUrls: ['./enterprise-applications.component.scss']
})
export class EnterpriseApplicationsComponent implements OnInit, OnDestroy {
  private readonly appSvc = inject(ApplicationService);
  private readonly route = inject(ActivatedRoute);
  private readonly alertSvc = inject(AlertService);
  private readonly sanitizer = inject(DomSanitizer);

  loading = true;
  offerId!: number;
  ranked: ApplicationDetail[] = [];

  viewerUrl: SafeResourceUrl | null = null;
  viewerName = '';
  viewerLoading = false;
  private viewerObjectUrl: string | null = null;

  statusOptions = [
    { value: 'REVIEWED', label: 'En revue' },
    { value: 'SHORTLISTED', label: 'Selectionne' },
    { value: 'INTERVIEW', label: 'Entretien' },
    { value: 'ACCEPTED', label: 'Accepte' },
    { value: 'REJECTED', label: 'Refuse' },
  ];

  ngOnInit(): void {
    this.offerId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRanked();
  }

  ngOnDestroy(): void {
    this.revokeViewerUrl();
  }

  loadRanked(): void {
    this.loading = true;
    this.appSvc.getRankedWithDetails(this.offerId).subscribe({
      next: res => {
        this.ranked = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  updateStatus(app: ApplicationDetail, status: string): void {
    this.appSvc.updateStatus(app.id, status).subscribe({
      next: res => {
        app.status = res.data.status;
        this.alertSvc.success('Statut mis à jour - Email envoyé au candidat');
      },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
    });
  }

  openCv(app: ApplicationDetail): void {
    const cv = app.cv;
    if (!cv) {
      this.alertSvc.error('Aucun CV joint a cette candidature');
      return;
    }

    this.viewerLoading = true;
    this.viewerName = cv.fileName;
    this.viewerUrl = null;

    this.appSvc.getApplicationCv(app.id).subscribe({
      next: blob => {
        if (!this.canPreviewCv(cv)) {
          this.viewerLoading = false;
          this.downloadBlob(blob, cv.fileName);
          this.alertSvc.success('CV telecharge pour lecture');
          return;
        }

        this.revokeViewerUrl();
        this.viewerObjectUrl = URL.createObjectURL(blob);
        this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewerObjectUrl);
        this.viewerLoading = false;
      },
      error: err => {
        this.viewerLoading = false;
        this.alertSvc.error('Erreur', err.error?.message || 'Impossible de charger le CV');
      }
    });
  }

  downloadCv(app: ApplicationDetail): void {
    const cv = app.cv;
    if (!cv) {
      this.alertSvc.error('Aucun CV joint a cette candidature');
      return;
    }

    this.appSvc.getApplicationCv(app.id).subscribe({
      next: blob => this.downloadBlob(blob, cv.fileName),
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Impossible de telecharger le CV')
    });
  }

  closeViewer(): void {
    this.viewerLoading = false;
    this.viewerName = '';
    this.viewerUrl = null;
    this.revokeViewerUrl();
  }

  canPreviewCv(cv?: ApplicationDetailCV | null): boolean {
    return cv?.contentType === 'application/pdf';
  }

  statusChipClass(status: ApplicationStatus): string {
    const map: Record<ApplicationStatus, string> = {
      PENDING: 'chip-gray',
      REVIEWED: 'chip-info',
      AI_ANALYZED: 'chip-accent',
      SHORTLISTED: 'chip-primary',
      INTERVIEW: 'chip-warning',
      ACCEPTED: 'chip-success',
      REJECTED: 'chip-danger'
    };
    return map[status] ?? 'chip-gray';
  }

  scoreClass(score?: number): string {
    if (score == null) return 'score-na';
    if (score >= 80) return 'score-high';
    if (score >= 50) return 'score-mid';
    return 'score-low';
  }

  initials(name: string | undefined): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  private downloadBlob(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = fileName;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  private revokeViewerUrl(): void {
    if (this.viewerObjectUrl) {
      URL.revokeObjectURL(this.viewerObjectUrl);
      this.viewerObjectUrl = null;
    }
  }
}
