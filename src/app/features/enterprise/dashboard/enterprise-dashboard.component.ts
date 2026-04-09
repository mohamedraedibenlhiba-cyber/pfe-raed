import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { ApplicationService } from '../../../core/services/application.service';
import { JobOffer } from '../../../core/models/models';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-enterprise-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './enterprise-dashboard.component.html',
  styleUrls: ['./enterprise-dashboard.component.scss']
})
export class EnterpriseDashboardComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly offerSvc = inject(JobOfferService);

  loading = true;
  offers: JobOffer[] = [];

  get publishedCount(): number  { return this.offers.filter(o => o.status === 'PUBLISHED').length; }
  get draftCount(): number      { return this.offers.filter(o => o.status === 'DRAFT').length; }
  get closedCount(): number     { return this.offers.filter(o => o.status === 'CLOSED').length; }

  ngOnInit(): void {
    this.offerSvc.getMyOffers().subscribe({
      next: res => { this.offers = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }
}
