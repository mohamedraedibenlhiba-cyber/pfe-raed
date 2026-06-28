import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FriendshipService } from '../../../core/services/friendship.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@angular/material/card";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/paginator";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/progress-spinner";
const _c0 = a0 => ["/profile", a0];
const _c1 = () => [5, 10, 20];
function PublicProfileComponent_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profilePicture, i0.ɵɵsanitizeUrl);
} }
function PublicProfileComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getInitial(ctx_r0.fullName), " ");
} }
function PublicProfileComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", "role-" + (ctx_r0.role == null ? null : ctx_r0.role.toLowerCase()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.role === "ROLE_ENTERPRISE" ? "Entreprise" : "Candidat", " ");
} }
function PublicProfileComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 20)(1, "mat-icon");
    i0.ɵɵtext(2, "location_on");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.city, " ");
} }
function PublicProfileComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function PublicProfileComponent_div_26_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const friend_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("alt", friend_r2.fullName);
    i0.ɵɵproperty("src", friend_r2.profilePicture, i0.ɵɵsanitizeUrl);
} }
function PublicProfileComponent_div_26_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const friend_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.getInitial(friend_r2.fullName), " ");
} }
function PublicProfileComponent_div_26_div_1_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const friend_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", friend_r2.role === "ROLE_ENTERPRISE" ? "Entreprise" : "Candidat", " ");
} }
function PublicProfileComponent_div_26_div_1_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const friend_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(friend_r2.city);
} }
function PublicProfileComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, PublicProfileComponent_div_26_div_1_img_1_Template, 1, 2, "img", 25)(2, PublicProfileComponent_div_26_div_1_div_2_Template, 2, 1, "div", 26);
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, PublicProfileComponent_div_26_div_1_p_5_Template, 2, 1, "p", 27)(6, PublicProfileComponent_div_26_div_1_p_6_Template, 2, 1, "p", 28);
    i0.ɵɵelementStart(7, "a", 29);
    i0.ɵɵtext(8, " Voir le profil ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const friend_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", friend_r2.profilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !friend_r2.profilePicture);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(friend_r2.fullName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", friend_r2.role);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", friend_r2.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c0, friend_r2.id));
} }
function PublicProfileComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, PublicProfileComponent_div_26_div_1_Template, 9, 8, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.friends);
} }
function PublicProfileComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "p");
    i0.ɵɵtext(2, "Aucun ami pour le moment");
    i0.ɵɵelementEnd()();
} }
function PublicProfileComponent_mat_paginator_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 35);
    i0.ɵɵlistener("page", function PublicProfileComponent_mat_paginator_28_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.onPageChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("length", ctx_r0.totalFriends)("pageSize", ctx_r0.pageSize)("pageSizeOptions", i0.ɵɵpureFunction0(3, _c1));
} }
export class PublicProfileComponent {
    constructor() {
        this.route = inject(ActivatedRoute);
        this.friendshipService = inject(FriendshipService);
        this.fullName = null;
        this.role = null;
        this.profilePicture = null;
        this.city = null;
        this.friends = [];
        this.friendsCount = 0;
        this.totalFriends = 0;
        this.loading = false;
        this.pageSize = 10;
        this.currentPage = 0;
    }
    ngOnInit() {
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
    loadFriends(userId) {
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
            next: (response) => {
                if (response?.data?.content) {
                    this.friends = response.data.content;
                    this.totalFriends = response.data.totalElements;
                    this.friendsCount = response.data.totalElements;
                }
                else {
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
    onPageChange(event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        const userId = this.route.snapshot.paramMap.get('userId');
        this.loadFriends(userId);
    }
    /**
     * Get first character of name for avatar placeholder
     * Safely handles null/undefined/empty strings
     */
    getInitial(name) {
        if (name && name.length > 0) {
            return name.charAt(0).toUpperCase();
        }
        return '?';
    }
    static { this.ɵfac = function PublicProfileComponent_Factory(t) { return new (t || PublicProfileComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublicProfileComponent, selectors: [["app-public-profile"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 29, vars: 10, consts: [[1, "profile-container"], [1, "profile-header"], [1, "profile-banner"], [1, "profile-content"], [1, "profile-picture"], ["alt", "Profile Picture", "class", "avatar", 3, "src", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "profile-info"], ["class", "role", 3, "ngClass", 4, "ngIf"], ["class", "location", 4, "ngIf"], [1, "stats-bar"], [1, "stat"], [1, "friends-section"], ["class", "loading", 4, "ngIf"], ["class", "friends-grid", 4, "ngIf"], ["class", "no-friends", 4, "ngIf"], ["showFirstLastButtons", "", 3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["alt", "Profile Picture", 1, "avatar", 3, "src"], [1, "avatar-placeholder"], [1, "role", 3, "ngClass"], [1, "location"], [1, "loading"], [1, "friends-grid"], ["class", "friend-card", 4, "ngFor", "ngForOf"], [1, "friend-card"], ["class", "friend-avatar", 3, "src", "alt", 4, "ngIf"], ["class", "friend-avatar-placeholder", 4, "ngIf"], ["class", "friend-role", 4, "ngIf"], ["class", "friend-city", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "view-btn", 3, "routerLink"], [1, "friend-avatar", 3, "src", "alt"], [1, "friend-avatar-placeholder"], [1, "friend-role"], [1, "friend-city"], [1, "no-friends"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"]], template: function PublicProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3)(4, "div", 4);
            i0.ɵɵtemplate(5, PublicProfileComponent_img_5_Template, 1, 1, "img", 5)(6, PublicProfileComponent_div_6_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "h1");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(10, PublicProfileComponent_p_10_Template, 2, 2, "p", 8)(11, PublicProfileComponent_p_11_Template, 4, 1, "p", 9);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 10)(13, "div", 11)(14, "strong");
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "Amis");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "mat-card", 12)(19, "mat-card-header")(20, "mat-card-title")(21, "mat-icon");
            i0.ɵɵtext(22, "people");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, " Liste d'Amis ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "mat-card-content");
            i0.ɵɵtemplate(25, PublicProfileComponent_div_25_Template, 2, 0, "div", 13)(26, PublicProfileComponent_div_26_Template, 2, 1, "div", 14)(27, PublicProfileComponent_div_27_Template, 3, 0, "div", 15)(28, PublicProfileComponent_mat_paginator_28_Template, 1, 4, "mat-paginator", 16);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.profilePicture);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.profilePicture);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.fullName || "Profil");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.role);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.city);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.friendsCount);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngIf", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.friends.length > 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.friends.length === 0);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.loading && ctx.totalFriends > 0);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, RouterModule, i2.RouterLink, MatCardModule, i3.MatCard, i3.MatCardContent, i3.MatCardHeader, i3.MatCardTitle, MatButtonModule, i4.MatAnchor, MatTabsModule,
            MatPaginatorModule, i5.MatPaginator, MatIconModule, i6.MatIcon, MatProgressSpinnerModule, i7.MatProgressSpinner, MatBadgeModule], styles: [".profile-container[_ngcontent-%COMP%] {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n\n    .profile-header[_ngcontent-%COMP%] {\n      position: relative;\n      margin-bottom: 30px;\n    }\n\n    .profile-banner[_ngcontent-%COMP%] {\n      height: 250px;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      border-radius: 8px;\n      margin-bottom: -50px;\n    }\n\n    .profile-content[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: flex-end;\n      gap: 20px;\n      padding: 0 20px;\n      position: relative;\n      z-index: 1;\n    }\n\n    .profile-picture[_ngcontent-%COMP%] {\n      flex-shrink: 0;\n    }\n\n    .avatar[_ngcontent-%COMP%], .avatar-placeholder[_ngcontent-%COMP%], .friend-avatar[_ngcontent-%COMP%], .friend-avatar-placeholder[_ngcontent-%COMP%] {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n      border: 4px solid white;\n      object-fit: cover;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 48px;\n      font-weight: bold;\n      background: #e0e0e0;\n    }\n\n    .avatar-placeholder[_ngcontent-%COMP%], .friend-avatar-placeholder[_ngcontent-%COMP%] {\n      color: white;\n      background: #667eea;\n    }\n\n    .profile-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 28px;\n      font-weight: 600;\n    }\n\n    .profile-info[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n      margin: 5px 0;\n      font-size: 14px;\n      font-weight: 500;\n      padding: 4px 8px;\n      border-radius: 4px;\n      display: inline-block;\n    }\n\n    .role-enterprise[_ngcontent-%COMP%] {\n      background-color: #e3f2fd;\n      color: #1976d2;\n    }\n\n    .role-candidate[_ngcontent-%COMP%] {\n      background-color: #f3e5f5;\n      color: #7b1fa2;\n    }\n\n    .profile-info[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n      margin: 5px 0;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      color: #666;\n    }\n\n    .stats-bar[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 40px;\n      padding: 20px;\n      background: white;\n      border-radius: 8px;\n      margin-bottom: 30px;\n    }\n\n    .stat[_ngcontent-%COMP%] {\n      text-align: center;\n    }\n\n    .stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 24px;\n      color: #667eea;\n      margin-bottom: 5px;\n    }\n\n    .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      color: #999;\n      font-size: 14px;\n    }\n\n    .friends-section[_ngcontent-%COMP%] {\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n    .friends-section[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n      border-bottom: 1px solid #eee;\n      margin-bottom: 20px;\n    }\n\n    .friends-section[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      margin: 0;\n    }\n\n    .friends-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 20px;\n      margin-bottom: 20px;\n    }\n\n    .friend-card[_ngcontent-%COMP%] {\n      border: 1px solid #eee;\n      border-radius: 8px;\n      padding: 16px;\n      text-align: center;\n      transition: box-shadow 0.2s;\n    }\n\n    .friend-card[_ngcontent-%COMP%]:hover {\n      box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n    }\n\n    .friend-avatar[_ngcontent-%COMP%], .friend-avatar-placeholder[_ngcontent-%COMP%] {\n      margin: 0 auto 12px;\n    }\n\n    .friend-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 10px 0 5px;\n      font-size: 16px;\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .friend-role[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #999;\n      margin: 3px 0;\n    }\n\n    .friend-city[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #999;\n      margin: 3px 0 10px;\n    }\n\n    .view-btn[_ngcontent-%COMP%] {\n      width: 100%;\n      margin-top: 10px;\n    }\n\n    .no-friends[_ngcontent-%COMP%] {\n      text-align: center;\n      padding: 40px 20px;\n      color: #999;\n    }\n\n    .loading[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      padding: 40px 20px;\n    }\n\n    mat-paginator[_ngcontent-%COMP%] {\n      border-top: 1px solid #eee;\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-public-profile', standalone: true, imports: [
                    CommonModule,
                    RouterModule,
                    MatCardModule,
                    MatButtonModule,
                    MatTabsModule,
                    MatPaginatorModule,
                    MatIconModule,
                    MatProgressSpinnerModule,
                    MatBadgeModule
                ], template: `
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
  `, styles: ["\n    .profile-container {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 20px;\n    }\n\n    .profile-header {\n      position: relative;\n      margin-bottom: 30px;\n    }\n\n    .profile-banner {\n      height: 250px;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n      border-radius: 8px;\n      margin-bottom: -50px;\n    }\n\n    .profile-content {\n      display: flex;\n      align-items: flex-end;\n      gap: 20px;\n      padding: 0 20px;\n      position: relative;\n      z-index: 1;\n    }\n\n    .profile-picture {\n      flex-shrink: 0;\n    }\n\n    .avatar, .avatar-placeholder, .friend-avatar, .friend-avatar-placeholder {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n      border: 4px solid white;\n      object-fit: cover;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 48px;\n      font-weight: bold;\n      background: #e0e0e0;\n    }\n\n    .avatar-placeholder, .friend-avatar-placeholder {\n      color: white;\n      background: #667eea;\n    }\n\n    .profile-info h1 {\n      margin: 0;\n      font-size: 28px;\n      font-weight: 600;\n    }\n\n    .profile-info .role {\n      margin: 5px 0;\n      font-size: 14px;\n      font-weight: 500;\n      padding: 4px 8px;\n      border-radius: 4px;\n      display: inline-block;\n    }\n\n    .role-enterprise {\n      background-color: #e3f2fd;\n      color: #1976d2;\n    }\n\n    .role-candidate {\n      background-color: #f3e5f5;\n      color: #7b1fa2;\n    }\n\n    .profile-info .location {\n      margin: 5px 0;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      color: #666;\n    }\n\n    .stats-bar {\n      display: flex;\n      gap: 40px;\n      padding: 20px;\n      background: white;\n      border-radius: 8px;\n      margin-bottom: 30px;\n    }\n\n    .stat {\n      text-align: center;\n    }\n\n    .stat strong {\n      display: block;\n      font-size: 24px;\n      color: #667eea;\n      margin-bottom: 5px;\n    }\n\n    .stat span {\n      color: #999;\n      font-size: 14px;\n    }\n\n    .friends-section {\n      box-shadow: 0 2px 8px rgba(0,0,0,0.1);\n    }\n\n    .friends-section mat-card-header {\n      border-bottom: 1px solid #eee;\n      margin-bottom: 20px;\n    }\n\n    .friends-section mat-card-title {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      margin: 0;\n    }\n\n    .friends-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n      gap: 20px;\n      margin-bottom: 20px;\n    }\n\n    .friend-card {\n      border: 1px solid #eee;\n      border-radius: 8px;\n      padding: 16px;\n      text-align: center;\n      transition: box-shadow 0.2s;\n    }\n\n    .friend-card:hover {\n      box-shadow: 0 4px 12px rgba(0,0,0,0.1);\n    }\n\n    .friend-avatar, .friend-avatar-placeholder {\n      margin: 0 auto 12px;\n    }\n\n    .friend-card h3 {\n      margin: 10px 0 5px;\n      font-size: 16px;\n      font-weight: 600;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    .friend-role {\n      font-size: 12px;\n      color: #999;\n      margin: 3px 0;\n    }\n\n    .friend-city {\n      font-size: 12px;\n      color: #999;\n      margin: 3px 0 10px;\n    }\n\n    .view-btn {\n      width: 100%;\n      margin-top: 10px;\n    }\n\n    .no-friends {\n      text-align: center;\n      padding: 40px 20px;\n      color: #999;\n    }\n\n    .loading {\n      display: flex;\n      justify-content: center;\n      padding: 40px 20px;\n    }\n\n    mat-paginator {\n      border-top: 1px solid #eee;\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PublicProfileComponent, { className: "PublicProfileComponent", filePath: "app\\features\\shared\\public-profile\\public-profile.component.ts", lineNumber: 309 }); })();
//# sourceMappingURL=public-profile.component.js.map