import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ApiResponse, Page, UserFriendSummaryDTO } from '../../../core/models/models';
import { FriendshipService } from '../../../core/services/friendship.service';

@Component({
  selector: 'app-public-profile',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatBadgeModule
  ],
  template: `
    <div class="profile-container">
      <div class="profile-header">
        <div class="profile-banner"></div>
        <div class="profile-content">
          <div class="profile-picture">
            <img
              *ngIf="profilePicture"
              [src]="profilePicture"
              alt="Profile Picture"
              class="avatar"
            />
            <div *ngIf="!profilePicture" class="avatar-placeholder">
              {{ getInitial(fullName) }}
            </div>
          </div>
          <div class="profile-info">
            <h1>{{ fullName || 'Profil' }}</h1>
            <p class="role" [ngClass]="'role-' + role?.toLowerCase()" *ngIf="role">
              {{ role === 'ROLE_ENTERPRISE' ? 'Entreprise' : 'Candidat' }}
            </p>
            <p class="location" *ngIf="city">
              <mat-icon>location_on</mat-icon>
              {{ city }}
            </p>
          </div>
        </div>
      </div>

      <!-- Friend Count Badge -->
      <div class="stats-bar">
        <div class="stat">
          <strong>{{ friendsCount }}</strong>
          <span>Amis</span>
        </div>
      </div>

      <!-- Friends List Section -->
      <mat-card class="friends-section">
        <mat-card-header>
          <mat-card-title>
            <mat-icon>people</mat-icon>
            Liste d'Amis
          </mat-card-title>
        </mat-card-header>

        <mat-card-content>
          <div *ngIf="loading" class="loading">
            <mat-spinner></mat-spinner>
          </div>

          <div *ngIf="!loading && friends.length > 0" class="friends-grid">
            <div *ngFor="let friend of friends" class="friend-card">
              <img
                *ngIf="friend.profilePicture"
                [src]="friend.profilePicture"
                alt="{{ friend.fullName }}"
                class="friend-avatar"
              />
              <div *ngIf="!friend.profilePicture" class="friend-avatar-placeholder">
                {{ getInitial(friend.fullName) }}
              </div>
              <h3>{{ friend.fullName }}</h3>
              <p class="friend-role" *ngIf="friend.role">
                {{ friend.role === 'ROLE_ENTERPRISE' ? 'Entreprise' : 'Candidat' }}
              </p>
              <p class="friend-city" *ngIf="friend.city">{{ friend.city }}</p>
              <a [routerLink]="['/profile', friend.id]" mat-raised-button color="primary" class="view-btn">
                Voir le profil
              </a>
            </div>
          </div>

          <div *ngIf="!loading && friends.length === 0" class="no-friends">
            <p>Aucun ami pour le moment</p>
          </div>

          <!-- Paginator -->
          <mat-paginator
            *ngIf="!loading && totalFriends > 0"
            [length]="totalFriends"
            [pageSize]="pageSize"
            [pageSizeOptions]="[5, 10, 20]"
            (page)="onPageChange($event)"
            showFirstLastButtons
          ></mat-paginator>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }

    .profile-header {
      position: relative;
      margin-bottom: 30px;
    }

    .profile-banner {
      height: 250px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 8px;
      margin-bottom: -50px;
    }

    .profile-content {
      display: flex;
      align-items: flex-end;
      gap: 20px;
      padding: 0 20px;
      position: relative;
      z-index: 1;
    }

    .profile-picture {
      flex-shrink: 0;
    }

    .avatar, .avatar-placeholder, .friend-avatar, .friend-avatar-placeholder {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 4px solid white;
      object-fit: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: bold;
      background: #e0e0e0;
    }

    .avatar-placeholder, .friend-avatar-placeholder {
      color: white;
      background: #667eea;
    }

    .profile-info h1 {
      margin: 0;
      font-size: 28px;
      font-weight: 600;
    }

    .profile-info .role {
      margin: 5px 0;
      font-size: 14px;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 4px;
      display: inline-block;
    }

    .role-enterprise {
      background-color: #e3f2fd;
      color: #1976d2;
    }

    .role-candidate {
      background-color: #f3e5f5;
      color: #7b1fa2;
    }

    .profile-info .location {
      margin: 5px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }

    .stats-bar {
      display: flex;
      gap: 40px;
      padding: 20px;
      background: white;
      border-radius: 8px;
      margin-bottom: 30px;
    }

    .stat {
      text-align: center;
    }

    .stat strong {
      display: block;
      font-size: 24px;
      color: #667eea;
      margin-bottom: 5px;
    }

    .stat span {
      color: #999;
      font-size: 14px;
    }

    .friends-section {
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .friends-section mat-card-header {
      border-bottom: 1px solid #eee;
      margin-bottom: 20px;
    }

    .friends-section mat-card-title {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0;
    }

    .friends-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 20px;
    }

    .friend-card {
      border: 1px solid #eee;
      border-radius: 8px;
      padding: 16px;
      text-align: center;
      transition: box-shadow 0.2s;
    }

    .friend-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    .friend-avatar, .friend-avatar-placeholder {
      margin: 0 auto 12px;
    }

    .friend-card h3 {
      margin: 10px 0 5px;
      font-size: 16px;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .friend-role {
      font-size: 12px;
      color: #999;
      margin: 3px 0;
    }

    .friend-city {
      font-size: 12px;
      color: #999;
      margin: 3px 0 10px;
    }

    .view-btn {
      width: 100%;
      margin-top: 10px;
    }

    .no-friends {
      text-align: center;
      padding: 40px 20px;
      color: #999;
    }

    .loading {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
    }

    mat-paginator {
      border-top: 1px solid #eee;
    }
  `]
})
export class PublicProfileComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly friendshipService = inject(FriendshipService);

  fullName: string | null = null;
  role: string | null = null;
  profilePicture: string | null = null;
  city: string | null = null;

  friends: UserFriendSummaryDTO[] = [];
  friendsCount = 0;
  totalFriends = 0;
  loading = false;
  pageSize = 10;
  currentPage = 0;

  ngOnInit(): void {
    // Listen to route parameters and auto-cleanup when component is destroyed
    this.route.paramMap
      .pipe(takeUntilDestroyed())
      .subscribe(params => {
        const userId = params.get('userId');
        this.loadFriends(userId);
      });
  }

  /**
   * Load friends for a given user ID
   * Validates input and handles errors gracefully
   */
  loadFriends(userId: string | null): void {
    // Validate userId
    if (!userId) {
      console.error('[PublicProfile] Invalid userId: null or empty');
      this.friends = [];
      this.loading = false;
      return;
    }

    const userIdNum = parseInt(userId, 10);
    if (isNaN(userIdNum) || userIdNum <= 0) {
      console.error('[PublicProfile] Invalid userId: not a positive number', userId);
      this.friends = [];
      this.loading = false;
      return;
    }

    this.loading = true;

    // Load friends with auto-cleanup when component is destroyed
    this.friendshipService
      .getUserFriends(userIdNum, this.currentPage, this.pageSize)
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (response: ApiResponse<Page<UserFriendSummaryDTO>>) => {
          if (response?.data?.content) {
            this.friends = response.data.content;
            this.totalFriends = response.data.totalElements;
            this.friendsCount = response.data.totalElements;
          } else {
            console.warn('[PublicProfile] Empty response data');
            this.friends = [];
          }
          this.loading = false;
        },
        error: (error) => {
          console.error('[PublicProfile] Error loading friends:', error);
          this.friends = [];
          this.loading = false;
        }
      });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    const userId = this.route.snapshot.paramMap.get('userId');
    this.loadFriends(userId);
  }

  /**
   * Get first character of name for avatar placeholder
   * Safely handles null/undefined/empty strings
   */
  getInitial(name: string | null | undefined): string {
    if (name && name.length > 0) {
      return name.charAt(0).toUpperCase();
    }
    return '?';
  }
}
