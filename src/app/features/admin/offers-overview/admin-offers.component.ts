import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatChipsModule } from '@angular/material/chips';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { AdminService } from '../../../core/services/admin.service';
import { JobOffer, OfferStatus } from '../../../core/models/models';

@Component({
  selector: 'app-admin-offers',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatTooltipModule, MatChipsModule, AppSelectComponent
  ],
  templateUrl: './admin-offers.component.html',
  styleUrls: ['./admin-offers.component.scss']
})
export class AdminOffersComponent implements OnInit {
  private readonly adminSvc = inject(AdminService);

  displayedColumns = ['title', 'enterprise', 'status', 'contractType', 'location', 'level', 'createdAt'];
  offers: JobOffer[] = [];
  totalElements = 0;
  pageSize = 20;
  currentPage = 0;
  loading = true;
  searchValue = '';
  statusFilter = '';

  selectedOffer: JobOffer | null = null;

  statusOpts = [
    { value: '',           label: 'Tous les statuts' },
    { value: 'DRAFT',      label: 'Brouillon' },
    { value: 'PUBLISHED',  label: 'Publiée' },
    { value: 'CLOSED',     label: 'Fermée' },
    { value: 'ARCHIVED',   label: 'Archivée' },
  ];

  get filteredOffers(): JobOffer[] {
    if (!this.searchValue) return this.offers;
    const q = this.searchValue.toLowerCase();
    return this.offers.filter(o =>
      o.title?.toLowerCase().includes(q) ||
      o.enterprise?.companyName?.toLowerCase().includes(q)
    );
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.adminSvc.getOffers(this.statusFilter || undefined, this.currentPage, this.pageSize).subscribe({
      next: res => {
        this.offers = res.data.content;
        this.totalElements = res.data.totalElements;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onPage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }

  onStatusChange(): void {
    this.currentPage = 0;
    this.load();
  }

  statusLabel(status: OfferStatus): string {
    return {
      DRAFT: 'Brouillon', PUBLISHED: 'Publiée',
      CLOSED: 'Fermée',   ARCHIVED: 'Archivée'
    }[status] ?? status;
  }

  statusClass(status: OfferStatus): string {
    return {
      DRAFT: 'chip-gray', PUBLISHED: 'chip-success',
      CLOSED: 'chip-warning', ARCHIVED: 'chip-danger'
    }[status] ?? 'chip-gray';
  }

  contractLabel(c: string): string {
    return { CDI: 'CDI', CDD: 'CDD', STAGE: 'Stage', FREELANCE: 'Freelance',
      ALTERNANCE: 'Alternance', TEMPS_PARTIEL: 'Temps partiel' }[c] ?? c;
  }

  viewDetail(offer: JobOffer): void {
    this.selectedOffer = offer === this.selectedOffer ? null : offer;
  }
}
