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
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { AlertService } from '../../../core/services/alert.service';
import { ApplicationService } from '../../../core/services/application.service';
import { ApplicationDetail, ApplicationDetailCV, ApplicationStatus } from '../../../core/models/models';
import { InterviewDialogComponent } from '../interview-dialog/interview-dialog.component';

@Component({
  selector: 'app-enterprise-applications',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule, MatTabsModule, MatDialogModule, MatMenuModule],
  templateUrl: './enterprise-applications.component.html',
  styleUrls: ['./enterprise-applications.component.scss']
})
export class EnterpriseApplicationsComponent implements OnInit, OnDestroy {
  private readonly appSvc = inject(ApplicationService);
  private readonly route = inject(ActivatedRoute);
  private readonly alertSvc = inject(AlertService);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly dialog = inject(MatDialog);

  loading = true;
  offerId!: number;
  ranked: ApplicationDetail[] = [];

  viewerUrl: SafeResourceUrl | null = null;
  viewerName = '';
  viewerLoading = false;
  private viewerObjectUrl: string | null = null;

  statusOptions = [
    { value: 'REVIEWED',    label: 'En revue',    icon: 'visibility',    dot: 'dot-blue'   },
    { value: 'SHORTLISTED', label: 'Sélectionné', icon: 'star',          dot: 'dot-indigo' },
    { value: 'INTERVIEW',   label: 'Entretien',   icon: 'event',         dot: 'dot-orange' },
    { value: 'ACCEPTED',    label: 'Accepté',     icon: 'check_circle',  dot: 'dot-green'  },
    { value: 'REJECTED',    label: 'Refusé',      icon: 'cancel',        dot: 'dot-red'    },
  ];

  statusDotClass(status: ApplicationStatus | string): string {
    const map: Record<string, string> = {
      PENDING:     'dot-gray',
      REVIEWED:    'dot-blue',
      AI_ANALYZED: 'dot-purple',
      SHORTLISTED: 'dot-indigo',
      INTERVIEW:   'dot-orange',
      ACCEPTED:    'dot-green',
      REJECTED:    'dot-red',
    };
    return map[status] ?? 'dot-gray';
  }

  ngOnInit(): void {
    this.offerId = +this.route.snapshot.paramMap.get('id')!;
    this.loadRanked();
  }

  ngOnDestroy(): void {
    this.revokeViewerUrl();
    this.pollingTimers.forEach(t => clearTimeout(t));
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
          return;
        }
        this.revokeViewerUrl();
        this.viewerObjectUrl = URL.createObjectURL(blob);
        this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewerObjectUrl);
        this.viewerLoading = false;
      },
      error: err => {
        this.viewerLoading = false;
        this.parseBlobError(err).then(msg =>
          this.alertSvc.error('Impossible de charger le CV', msg)
        );
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
      error: err => {
        this.parseBlobError(err).then(msg =>
          this.alertSvc.error('Impossible de télécharger le CV', msg)
        );
      }
    });
  }

  private async parseBlobError(err: any): Promise<string> {
    if (err.error instanceof Blob) {
      try {
        const text = await err.error.text();
        const json = JSON.parse(text);
        return json.message || `Erreur ${err.status}`;
      } catch {
        return `Erreur ${err.status}`;
      }
    }
    return err.error?.message || `Erreur ${err.status}`;
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

  statusLabel(status: ApplicationStatus): string {
    const labels: Record<ApplicationStatus, string> = {
      PENDING: 'En attente',
      REVIEWED: 'En revue',
      AI_ANALYZED: 'Analysé',
      SHORTLISTED: 'Sélectionné',
      INTERVIEW: 'Entretien',
      ACCEPTED: 'Accepté',
      REJECTED: 'Refusé'
    };
    return labels[status] ?? status;
  }

  scoreClass(score?: number | null): string {
    if (score == null) return 'score-na';
    if (score >= 80) return 'score-high';
    if (score >= 50) return 'score-mid';
    return 'score-low';
  }

  scoreLevel(score?: number | null): string {
    if (score == null) return '';
    if (score >= 80) return 'EXCELLENT';
    if (score >= 65) return 'BON';
    if (score >= 50) return 'MOYEN';
    return 'FAIBLE';
  }

  scoreLevelClass(score?: number | null): string {
    if (score == null) return '';
    if (score >= 80) return 'level-excellent';
    if (score >= 65) return 'level-bon';
    if (score >= 50) return 'level-moyen';
    return 'level-faible';
  }

  initials(name: string | undefined): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  analyzingIds = new Set<number>();
  private pollingTimers = new Map<number, ReturnType<typeof setTimeout>>();

  analyzeApplication(app: ApplicationDetail): void {
    this.cancelPolling(app.id);
    this.analyzingIds.add(app.id);
    this.appSvc.triggerAnalysis(app.id).subscribe({
      next: () => this.pollForResult(app, 0),
      error: err => {
        this.analyzingIds.delete(app.id);
        this.alertSvc.error('Erreur', err.error?.message || 'Impossible de lancer l\'analyse');
      }
    });
  }

  private pollForResult(app: ApplicationDetail, attempts: number): void {
    // Adaptatif : rapide au début, plus lent après 5 tentatives
    const delay = attempts < 5 ? 8000 : 15000;
    const maxAttempts = 13; // ~5×8s + 8×15s = 160s max

    const timer = setTimeout(() => {
      this.pollingTimers.delete(app.id);
      if (!this.analyzingIds.has(app.id)) return;

      this.appSvc.getRankedWithDetails(this.offerId).subscribe({
        next: res => {
          const updated = res.data.find(a => a.id === app.id);
          if (updated?.aiScore != null) {
            this.analyzingIds.delete(app.id);
            this.ranked = res.data;
            const score = Math.round(updated.aiScore);
            if (score > 0) {
              this.alertSvc.success('Analyse terminée — Score : ' + score + '/100');
            } else {
              this.alertSvc.info('Analyse terminée', 'Score indisponible — le service IA était temporairement inaccessible.');
            }
          } else if (attempts + 1 < maxAttempts) {
            this.pollForResult(app, attempts + 1);
          } else {
            this.analyzingIds.delete(app.id);
            this.ranked = res.data;
            this.alertSvc.error('Analyse non disponible', 'L\'analyse IA n\'a pas répondu dans les délais. Vérifiez les logs du serveur et réessayez.');
          }
        },
        error: () => {
          this.analyzingIds.delete(app.id);
        }
      });
    }, delay);

    this.pollingTimers.set(app.id, timer);
  }

  private cancelPolling(id: number): void {
    const timer = this.pollingTimers.get(id);
    if (timer != null) {
      clearTimeout(timer);
      this.pollingTimers.delete(id);
    }
  }

  refreshApplication(app: ApplicationDetail): void {
    this.loadRanked();
  }

  openInterviewDialog(app: ApplicationDetail): void {
    const ref = this.dialog.open(InterviewDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      disableClose: false,
      data: {
        applicationId: app.id,
        candidateName: app.candidate?.fullName ?? 'Candidat',
        jobTitle: app.jobOffer?.title ?? 'Poste'
      }
    });
    ref.afterClosed().subscribe(result => {
      if (result) {
        app.status = 'INTERVIEW';
      }
    });
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
