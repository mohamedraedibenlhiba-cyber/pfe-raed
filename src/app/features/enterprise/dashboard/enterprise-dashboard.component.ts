import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { MessagingService } from '../../../core/services/messaging.service';
import { JobOffer, UserSearchResponse } from '../../../core/models/models';
import { AuthService } from '../../../core/services/auth.service';
import { UserConnectionModalComponent } from '../../../shared/components/user-connection-modal/user-connection-modal.component';

@Component({
  selector: 'app-enterprise-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatDialogModule
  ],
  templateUrl: './enterprise-dashboard.component.html',
  styleUrls: ['./enterprise-dashboard.component.scss']
})
export class EnterpriseDashboardComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly offerSvc = inject(JobOfferService);
  private readonly msgSvc = inject(MessagingService);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);

  loading = true;
  offers: JobOffer[] = [];

  // Search properties
  searchQuery = '';
  searchResults: UserSearchResponse[] = [];
  showSearch = false;
  loadingSearch = false;
  private searchTimeout: any;

  get publishedCount(): number  { return this.offers.filter(o => o.status === 'PUBLISHED').length; }
  get draftCount(): number      { return this.offers.filter(o => o.status === 'DRAFT').length; }
  get closedCount(): number     { return this.offers.filter(o => o.status === 'CLOSED').length; }

  ngOnInit(): void {
    this.offerSvc.getMyOffers().subscribe({
      next: res => { this.offers = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  // ✨ Search methods
  searchUsers(): void {
    this.showSearch = true;

    if (!this.searchQuery.trim()) {
      this.searchResults = [];
      this.showSearch = false;
      return;
    }

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    this.loadingSearch = true;
    this.searchTimeout = setTimeout(() => {
      this.msgSvc.searchUsers(this.searchQuery, 'CANDIDATE', 0, 20).subscribe({
        next: (res) => {
          this.searchResults = res.data.content;
          this.loadingSearch = false;
        },
        error: () => {
          this.loadingSearch = false;
          this.searchResults = [];
        }
      });
    }, 300);
  }

  startConversation(userId: number): void {
    this.msgSvc.getOrCreateConversation(userId).subscribe({
      next: (res) => {
        this.router.navigate(['/enterprise/messages'], { queryParams: { convId: res.data.id } });
        this.clearSearch();
      },
      error: (err) => {
        console.error('Error starting conversation', err);
      }
    });
  }

  viewProfile(userId: number): void {
    this.router.navigate(['/profile', userId]);
  }

  openUserModal(user: UserSearchResponse): void {
    this.dialog.open(UserConnectionModalComponent, {
      width: '760px',
      maxWidth: '95vw',
      data: { userId: user.id }
    });
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.searchResults = [];
    this.showSearch = false;
  }

  initials(name: string): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
