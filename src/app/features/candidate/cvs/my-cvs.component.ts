import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CvService } from '../../../core/services/cv.service';
import { CV } from '../../../core/models/models';

@Component({
  selector: 'app-my-cvs',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatSnackBarModule, MatTooltipModule],
  templateUrl: './my-cvs.component.html',
  styleUrls: ['./my-cvs.component.scss']
})
export class MyCvsComponent implements OnInit {
  private readonly cvSvc = inject(CvService);
  private readonly snack = inject(MatSnackBar);
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
      this.snack.open('Seuls les fichiers PDF et Word sont acceptés', 'OK', { panelClass: 'error-snack' }); return;
    }
    this.uploading = true;
    this.cvSvc.upload(file).subscribe({
      next: res => { this.cvs.unshift(res.data); this.uploading = false; this.snack.open('CV uploadé avec succès', 'OK', { panelClass: 'success-snack' }); },
      error: err => { this.uploading = false; this.snack.open(err.error?.message || 'Erreur upload', 'OK', { panelClass: 'error-snack' }); }
    });
  }

  setDefault(cv: CV): void {
    this.cvSvc.setDefault(cv.id).subscribe({
      next: () => { this.cvs.forEach(c => c.defaultCv = c.id === cv.id); this.snack.open('CV défini comme CV par défaut', 'OK', { panelClass: 'success-snack' }); },
      error: err => this.snack.open(err.error?.message || 'Erreur', 'OK', { panelClass: 'error-snack' })
    });
  }

  delete(cv: CV): void {
    if (!confirm('Supprimer ce CV ?')) return;
    this.cvSvc.delete(cv.id).subscribe({
      next: () => {
        if (this.viewerObjectUrl) { this.closeViewer(); }
        this.cvs = this.cvs.filter(c => c.id !== cv.id);
        this.snack.open('CV supprimé', 'OK', { panelClass: 'success-snack' });
      },
      error: err => this.snack.open(err.error?.message || 'Erreur', 'OK', { panelClass: 'error-snack' })
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
        this.snack.open('Impossible de charger le CV', 'OK', { panelClass: 'error-snack' });
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
