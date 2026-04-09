import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { AppSelectComponent, SelectOption } from '../../../shared/components/app-select/app-select.component';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { CvService } from '../../../core/services/cv.service';
import { ApplicationService } from '../../../core/services/application.service';
import { AuthService } from '../../../core/services/auth.service';
import { ContractType, CV, JobOffer } from '../../../core/models/models';

@Component({
  selector: 'app-job-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent, MatProgressSpinnerModule, MatSnackBarModule, MatDialogModule, MatPaginatorModule],
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {
  private readonly offerSvc = inject(JobOfferService);
  private readonly appSvc   = inject(ApplicationService);
  private readonly cvSvc    = inject(CvService);
  private readonly snack    = inject(MatSnackBar);

  loading = false;
  offers: JobOffer[] = [];
  totalElements = 0;
  currentPage = 0;
  pageSize = 10;

  // Filters
  titleFilter = '';
  locationFilter = '';
  contractFilter = '';

  selectedOffer: JobOffer | null = null;
  myCvs: CV[] = [];
  applyLoading = false;
  selectedCvId?: number;
  coverLetter = '';

  contractTypes: ContractType[] = ['CDI', 'CDD', 'STAGE', 'FREELANCE', 'ALTERNANCE', 'TEMPS_PARTIEL'];
  contractTypeOpts = [
    { value: '', label: 'Tous' },
    ...this.contractTypes.map(c => ({ value: c, label: c }))
  ];

  get cvOpts() {
    return [
      { value: undefined, label: '— Aucun CV —' },
      ...this.myCvs.map(cv => ({ value: cv.id, label: cv.fileName + (cv.defaultCv ? ' (par défaut)' : '') }))
    ];
  }

  ngOnInit(): void {
    this.search();
    this.cvSvc.getMyCvs().subscribe(res => this.myCvs = res.data);
  }

  search(): void {
    this.loading = true;
    this.offerSvc.searchPublic(this.titleFilter, this.locationFilter, this.contractFilter, this.currentPage, this.pageSize).subscribe({
      next: res => { this.offers = res.data.content; this.totalElements = res.data.totalElements; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  onPage(event: PageEvent): void { this.currentPage = event.pageIndex; this.search(); }

  openApply(offer: JobOffer): void {
    this.selectedOffer = offer;
    this.selectedCvId = this.myCvs.find(cv => cv.defaultCv)?.id;
    this.coverLetter = '';
  }

  submitApply(): void {
    if (!this.selectedOffer) return;
    this.applyLoading = true;
    this.appSvc.apply({ jobOfferId: this.selectedOffer.id, cvId: this.selectedCvId, coverLetter: this.coverLetter }).subscribe({
      next: () => { this.applyLoading = false; this.selectedOffer = null; this.snack.open('Candidature envoyée !', 'OK', { panelClass: 'success-snack' }); },
      error: err => { this.applyLoading = false; this.snack.open(err.error?.message || 'Erreur', 'OK', { panelClass: 'error-snack' }); }
    });
  }
}
