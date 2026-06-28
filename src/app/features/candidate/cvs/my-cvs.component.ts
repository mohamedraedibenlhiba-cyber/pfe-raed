import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from '../../../core/services/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CvService } from '../../../core/services/cv.service';
import { CV } from '../../../core/models/models';

@Component({
  selector: 'app-my-cvs',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './my-cvs.component.html',
  styleUrls: ['./my-cvs.component.scss']
})
export class MyCvsComponent implements OnInit {
  private readonly cvSvc = inject(CvService);
  private readonly alertSvc = inject(AlertService);
  private readonly sanitizer = inject(DomSanitizer);

  loading = true;
  uploading = false;
  cvs: CV[] = [];

  viewerUrl: SafeResourceUrl | null = null;
  viewerName: string = '';
  viewerLoading = false;
  private viewerObjectUrl: string | null = null;

  ngOnInit(): void { this.load(); }

  load(): void {
    this.cvSvc.getMyCvs().subscribe({
      next: res => { this.cvs = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  onFileSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      this.alertSvc.error('Seuls les fichiers PDF et Word sont acceptés'); return;
    }
    this.uploading = true;
    this.cvSvc.upload(file).subscribe({
      next: res => { this.cvs.unshift(res.data); this.uploading = false; this.alertSvc.success('CV uploadé avec succès'); },
      error: err => { this.uploading = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur upload'); }
    });
  }

  setDefault(cv: CV): void {
    this.cvSvc.setDefault(cv.id).subscribe({
      next: () => { this.cvs.forEach(c => c.defaultCv = c.id === cv.id); this.alertSvc.success('CV défini comme CV par défaut'); },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  delete(cv: CV): void {
    if (!confirm('Supprimer ce CV ?')) return;
    this.cvSvc.delete(cv.id).subscribe({
      next: () => {
        if (this.viewerObjectUrl) { this.closeViewer(); }
        this.cvs = this.cvs.filter(c => c.id !== cv.id);
        this.alertSvc.success('CV supprimé');
      },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  viewCV(cv: CV): void {
    this.viewerLoading = true;
    this.viewerName = cv.fileName;
    this.viewerUrl = null;
    this.cvSvc.getContent(cv.id).subscribe({
      next: blob => {
        if (this.viewerObjectUrl) { URL.revokeObjectURL(this.viewerObjectUrl); }
        this.viewerObjectUrl = URL.createObjectURL(blob);
        this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewerObjectUrl);
        this.viewerLoading = false;
      },
      error: () => {
        this.viewerLoading = false;
        this.alertSvc.error('Impossible de charger le CV');
      }
    });
  }

  closeViewer(): void {
    this.viewerUrl = null;
    this.viewerName = '';
    if (this.viewerObjectUrl) {
      URL.revokeObjectURL(this.viewerObjectUrl);
      this.viewerObjectUrl = null;
    }
  }

  fileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' Ko';
    return (bytes / 1048576).toFixed(1) + ' Mo';
  }
}
