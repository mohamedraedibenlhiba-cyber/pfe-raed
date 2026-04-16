import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { JobOffer } from '../../../core/models/models';

@Component({
  selector: 'app-enterprise-offers',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatTooltipModule],
  templateUrl: './enterprise-offers.component.html',
  styleUrls: ['./enterprise-offers.component.scss']
})
export class EnterpriseOffersComponent implements OnInit {
  private readonly offerSvc = inject(JobOfferService);
  private readonly alertSvc = inject(AlertService);

  loading = true;
  offers: JobOffer[] = [];
  filter: 'ALL' | 'DRAFT' | 'PUBLISHED' | 'CLOSED' = 'ALL';
  activeMenuId: number | null = null;

  get filtered(): JobOffer[] {
    return this.filter === 'ALL' ? this.offers : this.offers.filter(o => o.status === this.filter);
  }

  countByStatus(status: string): number {
    return status === 'ALL' ? this.offers.length : this.offers.filter(o => o.status === status).length;
  }

  ngOnInit(): void {
    this.offerSvc.getMyOffers().subscribe({
      next: res => { this.offers = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  publish(offer: JobOffer): void {
    this.offerSvc.publish(offer.id).subscribe({
      next: res => { Object.assign(offer, res.data); this.alertSvc.success('Offre publiée avec succès'); },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  close(offer: JobOffer): void {
    if (!confirm('Clôturer cette offre ?')) return;
    this.offerSvc.close(offer.id).subscribe({
      next: res => { Object.assign(offer, res.data); this.alertSvc.success('Offre clôturée'); },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  delete(offer: JobOffer): void {
    if (!confirm(`Supprimer l'offre "${offer.title}" ?`)) return;
    this.offerSvc.delete(offer.id).subscribe({
      next: () => { this.offers = this.offers.filter(o => o.id !== offer.id); this.alertSvc.success('Offre supprimée'); },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  exportExcel(offer: JobOffer): void {
    this.offerSvc.exportExcel(offer.id).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url; a.download = `candidatures_${offer.id}.xlsx`;
      a.click(); URL.revokeObjectURL(url);
    });
  }

  statusClass(status: string): string {
    return { PUBLISHED: 'chip-success', DRAFT: 'chip-warning', CLOSED: 'chip-gray', ARCHIVED: 'chip-gray' }[status] ?? 'chip-gray';
  }

  statusLabel(status: string): string {
    return { PUBLISHED: 'Publiée', DRAFT: 'Brouillon', CLOSED: 'Clôturée', ARCHIVED: 'Archivée' }[status] ?? status;
  }

  toggleMenu(offerId: number): void {
    this.activeMenuId = this.activeMenuId === offerId ? null : offerId;
  }
}
