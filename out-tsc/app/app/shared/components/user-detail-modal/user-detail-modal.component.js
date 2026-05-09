import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/dialog";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/divider";
function UserDetailModalComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 21);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.user.profilePicture, i0.ɵɵsanitizeUrl);
} }
function UserDetailModalComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.initials(ctx_r0.user.fullName), " ");
} }
function UserDetailModalComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "mat-icon", 15);
    i0.ɵɵtext(2, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "span", 17);
    i0.ɵɵtext(5, "T\u00E9l\u00E9phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.user.phoneNumber);
} }
function UserDetailModalComponent_div_23_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ", ");
    i0.ɵɵelementEnd();
} }
function UserDetailModalComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "mat-icon", 15);
    i0.ɵɵtext(2, "location_on");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "span", 17);
    i0.ɵɵtext(5, "Localisation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 18);
    i0.ɵɵtext(7);
    i0.ɵɵtemplate(8, UserDetailModalComponent_div_23_span_8_Template, 2, 0, "span", 23);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.user.city);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.user.city && ctx_r0.user.country);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.user.country);
} }
function UserDetailModalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "mat-icon", 15);
    i0.ɵɵtext(2, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "span", 17);
    i0.ɵɵtext(5, "Entreprise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.companyName);
} }
function UserDetailModalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "mat-icon", 15);
    i0.ɵɵtext(2, "work");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 16)(4, "span", 17);
    i0.ɵɵtext(5, "Titre du poste");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 18);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.headline);
} }
function UserDetailModalComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelement(1, "mat-divider");
    i0.ɵɵelementStart(2, "h4");
    i0.ɵɵtext(3, "Bio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 25);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.summary);
} }
export class UserDetailModalComponent {
    constructor() {
        this.user = inject(MAT_DIALOG_DATA);
    }
    get companyName() {
        return this.user.role === 'ROLE_ENTERPRISE' ? this.user.companyName : undefined;
    }
    get headline() {
        return this.user.role === 'ROLE_CANDIDATE' ? this.user.headline : undefined;
    }
    get summary() {
        return this.user.role === 'ROLE_CANDIDATE' ? this.user.summary : undefined;
    }
    initials(name) {
        return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    roleLabel(role) {
        return { ROLE_ADMIN: 'Admin', ROLE_ENTERPRISE: 'Entreprise', ROLE_CANDIDATE: 'Candidat' }[role] ?? role;
    }
    roleClass(role) {
        return { ROLE_ADMIN: 'admin', ROLE_ENTERPRISE: 'enterprise', ROLE_CANDIDATE: 'candidate' }[role] ?? 'gray';
    }
    static { this.ɵfac = function UserDetailModalComponent_Factory(t) { return new (t || UserDetailModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserDetailModalComponent, selectors: [["app-user-detail-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 47, vars: 23, consts: [[1, "modal-content"], [1, "modal-header"], ["mat-dialog-title", ""], ["mat-icon-button", "", 1, "close-btn", 3, "mat-dialog-close"], [1, "user-info-container"], [1, "avatar-section"], [1, "avatar-large"], ["alt", "Profile", 3, "src", 4, "ngIf"], ["class", "avatar-placeholder", 4, "ngIf"], [1, "user-main-info"], [1, "email"], [1, "chip", 3, "ngClass"], [1, "details-grid"], ["class", "detail-item", 4, "ngIf"], [1, "detail-item"], [1, "detail-icon"], [1, "detail-content"], [1, "detail-label"], [1, "detail-value"], ["class", "bio-section", 4, "ngIf"], ["mat-button", "", 3, "mat-dialog-close"], ["alt", "Profile", 3, "src"], [1, "avatar-placeholder"], [4, "ngIf"], [1, "bio-section"], [1, "bio-text"]], template: function UserDetailModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵtext(3, "D\u00E9tails de l'utilisateur");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3)(5, "mat-icon");
            i0.ɵɵtext(6, "close");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(7, "mat-dialog-content")(8, "div", 4)(9, "div", 5)(10, "div", 6);
            i0.ɵɵtemplate(11, UserDetailModalComponent_img_11_Template, 1, 1, "img", 7)(12, UserDetailModalComponent_div_12_Template, 2, 1, "div", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "div", 9)(14, "h3");
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p", 10);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span", 11);
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(20, "mat-divider");
            i0.ɵɵelementStart(21, "div", 12);
            i0.ɵɵtemplate(22, UserDetailModalComponent_div_22_Template, 8, 1, "div", 13)(23, UserDetailModalComponent_div_23_Template, 10, 3, "div", 13)(24, UserDetailModalComponent_div_24_Template, 8, 1, "div", 13)(25, UserDetailModalComponent_div_25_Template, 8, 1, "div", 13);
            i0.ɵɵelementStart(26, "div", 14)(27, "mat-icon", 15);
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 16)(30, "span", 17);
            i0.ɵɵtext(31, "Statut du compte");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "span", 18);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "div", 14)(35, "mat-icon", 15);
            i0.ɵɵtext(36, "calendar_today");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 16)(38, "span", 17);
            i0.ɵɵtext(39, "Inscrit le");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "span", 18);
            i0.ɵɵtext(41);
            i0.ɵɵpipe(42, "date");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(43, UserDetailModalComponent_div_43_Template, 6, 1, "div", 19);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(44, "mat-dialog-actions")(45, "button", 20);
            i0.ɵɵtext(46, "Fermer");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("mat-dialog-close", null);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", ctx.user.profilePicture);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.user.profilePicture);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.user.fullName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.user.email);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngClass", "role-" + ctx.roleClass(ctx.user.role));
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.roleLabel(ctx.user.role), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.user.phoneNumber);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.user.city || ctx.user.country);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.companyName);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.headline);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.user.active ? "check_circle" : "cancel");
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("status-active", ctx.user.active)("status-inactive", !ctx.user.active);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.user.active ? "Actif" : "Inactif", " ");
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(42, 20, ctx.user.createdAt, "dd/MM/yyyy \u00E0 HH:mm"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.summary);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("mat-dialog-close", null);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, i1.DatePipe, MatDialogModule, i2.MatDialogClose, i2.MatDialogTitle, i2.MatDialogActions, i2.MatDialogContent, MatCardModule,
            MatButtonModule, i3.MatButton, i3.MatIconButton, MatIconModule, i4.MatIcon, MatDividerModule, i5.MatDivider, MatChipsModule], styles: [".modal-content[_ngcontent-%COMP%] {\n      width: 500px;\n      max-height: 90vh;\n      overflow-y: auto;\n    }\n\n    .modal-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n    }\n\n    .modal-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 600;\n    }\n\n    .close-btn[_ngcontent-%COMP%] {\n      margin-right: -8px;\n    }\n\n    mat-dialog-content[_ngcontent-%COMP%] {\n      padding: 20px;\n    }\n\n    mat-dialog-actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      padding: 15px 20px;\n      border-top: 1px solid #eee;\n    }\n\n    .user-info-container[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n    }\n\n    .avatar-section[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 20px;\n      align-items: flex-start;\n    }\n\n    .avatar-large[_ngcontent-%COMP%] {\n      flex-shrink: 0;\n    }\n\n    .avatar-large[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .avatar-placeholder[_ngcontent-%COMP%] {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      border: 3px solid #f5f5f5;\n      object-fit: cover;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 40px;\n      font-weight: bold;\n      background: #e0e0e0;\n    }\n\n    .avatar-placeholder[_ngcontent-%COMP%] {\n      color: white;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    }\n\n    .user-main-info[_ngcontent-%COMP%] {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    .user-main-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0 0 5px;\n      font-size: 18px;\n      font-weight: 600;\n    }\n\n    .email[_ngcontent-%COMP%] {\n      margin: 0 0 8px;\n      color: #666;\n      font-size: 13px;\n    }\n\n    .chip[_ngcontent-%COMP%] {\n      display: inline-block;\n      padding: 4px 8px;\n      border-radius: 4px;\n      font-size: 12px;\n      font-weight: 500;\n      width: fit-content;\n    }\n\n    .role-admin[_ngcontent-%COMP%] {\n      background-color: #fce4ec;\n      color: #c2185b;\n    }\n\n    .role-enterprise[_ngcontent-%COMP%] {\n      background-color: #e3f2fd;\n      color: #1976d2;\n    }\n\n    .role-candidate[_ngcontent-%COMP%] {\n      background-color: #f3e5f5;\n      color: #7b1fa2;\n    }\n\n    .details-grid[_ngcontent-%COMP%] {\n      display: grid;\n      gap: 16px;\n    }\n\n    .detail-item[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 12px;\n      align-items: flex-start;\n    }\n\n    .detail-icon[_ngcontent-%COMP%] {\n      color: #667eea;\n      flex-shrink: 0;\n      margin-top: 2px;\n      font-size: 20px;\n      width: 20px;\n      height: 20px;\n    }\n\n    .detail-content[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 3px;\n    }\n\n    .detail-label[_ngcontent-%COMP%] {\n      font-size: 12px;\n      color: #999;\n      font-weight: 500;\n      text-transform: uppercase;\n    }\n\n    .detail-value[_ngcontent-%COMP%] {\n      font-size: 14px;\n      color: #333;\n      font-weight: 500;\n    }\n\n    .status-active[_ngcontent-%COMP%] {\n      color: #4caf50;\n    }\n\n    .status-inactive[_ngcontent-%COMP%] {\n      color: #f44336;\n    }\n\n    .bio-section[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n\n    .bio-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 14px;\n      font-weight: 600;\n      color: #333;\n    }\n\n    .bio-text[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 13px;\n      color: #666;\n      line-height: 1.5;\n    }\n\n    @media (max-width: 600px) {\n      .modal-content[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      .avatar-section[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n      }\n\n      .user-main-info[_ngcontent-%COMP%] {\n        align-items: center;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserDetailModalComponent, [{
        type: Component,
        args: [{ selector: 'app-user-detail-modal', standalone: true, imports: [
                    CommonModule,
                    MatDialogModule,
                    MatCardModule,
                    MatButtonModule,
                    MatIconModule,
                    MatDividerModule,
                    MatChipsModule
                ], template: `
    <div class="modal-content">
      <div class="modal-header">
        <h2 mat-dialog-title>Détails de l'utilisateur</h2>
        <button mat-icon-button [mat-dialog-close]="null" class="close-btn">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-dialog-content>
        <div class="user-info-container">
          <!-- Avatar Section -->
          <div class="avatar-section">
            <div class="avatar-large">
              <img *ngIf="user.profilePicture" [src]="user.profilePicture" alt="Profile" />
              <div *ngIf="!user.profilePicture" class="avatar-placeholder">
                {{ initials(user.fullName) }}
              </div>
            </div>
            <div class="user-main-info">
              <h3>{{ user.fullName }}</h3>
              <p class="email">{{ user.email }}</p>
              <span class="chip" [ngClass]="'role-' + roleClass(user.role)">
                {{ roleLabel(user.role) }}
              </span>
            </div>
          </div>

          <mat-divider></mat-divider>

          <!-- Details Grid -->
          <div class="details-grid">
            <!-- Téléphone -->
            <div class="detail-item" *ngIf="user.phoneNumber">
              <mat-icon class="detail-icon">phone</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Téléphone</span>
                <span class="detail-value">{{ user.phoneNumber }}</span>
              </div>
            </div>

            <!-- Localisation -->
            <div class="detail-item" *ngIf="user.city || user.country">
              <mat-icon class="detail-icon">location_on</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Localisation</span>
                <span class="detail-value">{{ user.city }}<span *ngIf="user.city && user.country">, </span>{{ user.country }}</span>
              </div>
            </div>

            <!-- Entreprise -->
            <div class="detail-item" *ngIf="companyName">
              <mat-icon class="detail-icon">business</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Entreprise</span>
                <span class="detail-value">{{ companyName }}</span>
              </div>
            </div>

            <!-- Titre du poste -->
            <div class="detail-item" *ngIf="headline">
              <mat-icon class="detail-icon">work</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Titre du poste</span>
                <span class="detail-value">{{ headline }}</span>
              </div>
            </div>

            <!-- Statut -->
            <div class="detail-item">
              <mat-icon class="detail-icon">{{ user.active ? 'check_circle' : 'cancel' }}</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Statut du compte</span>
                <span class="detail-value" [class.status-active]="user.active" [class.status-inactive]="!user.active">
                  {{ user.active ? 'Actif' : 'Inactif' }}
                </span>
              </div>
            </div>

            <!-- Date d'inscription -->
            <div class="detail-item">
              <mat-icon class="detail-icon">calendar_today</mat-icon>
              <div class="detail-content">
                <span class="detail-label">Inscrit le</span>
                <span class="detail-value">{{ user.createdAt | date:'dd/MM/yyyy à HH:mm' }}</span>
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div class="bio-section" *ngIf="summary">
            <mat-divider></mat-divider>
            <h4>Bio</h4>
            <p class="bio-text">{{ summary }}</p>
          </div>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="null">Fermer</button>
      </mat-dialog-actions>
    </div>
  `, styles: ["\n    .modal-content {\n      width: 500px;\n      max-height: 90vh;\n      overflow-y: auto;\n    }\n\n    .modal-header {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 20px;\n    }\n\n    .modal-header h2 {\n      margin: 0;\n      font-size: 20px;\n      font-weight: 600;\n    }\n\n    .close-btn {\n      margin-right: -8px;\n    }\n\n    mat-dialog-content {\n      padding: 20px;\n    }\n\n    mat-dialog-actions {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      padding: 15px 20px;\n      border-top: 1px solid #eee;\n    }\n\n    .user-info-container {\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n    }\n\n    .avatar-section {\n      display: flex;\n      gap: 20px;\n      align-items: flex-start;\n    }\n\n    .avatar-large {\n      flex-shrink: 0;\n    }\n\n    .avatar-large img,\n    .avatar-placeholder {\n      width: 100px;\n      height: 100px;\n      border-radius: 50%;\n      border: 3px solid #f5f5f5;\n      object-fit: cover;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 40px;\n      font-weight: bold;\n      background: #e0e0e0;\n    }\n\n    .avatar-placeholder {\n      color: white;\n      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n    }\n\n    .user-main-info {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n    }\n\n    .user-main-info h3 {\n      margin: 0 0 5px;\n      font-size: 18px;\n      font-weight: 600;\n    }\n\n    .email {\n      margin: 0 0 8px;\n      color: #666;\n      font-size: 13px;\n    }\n\n    .chip {\n      display: inline-block;\n      padding: 4px 8px;\n      border-radius: 4px;\n      font-size: 12px;\n      font-weight: 500;\n      width: fit-content;\n    }\n\n    .role-admin {\n      background-color: #fce4ec;\n      color: #c2185b;\n    }\n\n    .role-enterprise {\n      background-color: #e3f2fd;\n      color: #1976d2;\n    }\n\n    .role-candidate {\n      background-color: #f3e5f5;\n      color: #7b1fa2;\n    }\n\n    .details-grid {\n      display: grid;\n      gap: 16px;\n    }\n\n    .detail-item {\n      display: flex;\n      gap: 12px;\n      align-items: flex-start;\n    }\n\n    .detail-icon {\n      color: #667eea;\n      flex-shrink: 0;\n      margin-top: 2px;\n      font-size: 20px;\n      width: 20px;\n      height: 20px;\n    }\n\n    .detail-content {\n      display: flex;\n      flex-direction: column;\n      gap: 3px;\n    }\n\n    .detail-label {\n      font-size: 12px;\n      color: #999;\n      font-weight: 500;\n      text-transform: uppercase;\n    }\n\n    .detail-value {\n      font-size: 14px;\n      color: #333;\n      font-weight: 500;\n    }\n\n    .status-active {\n      color: #4caf50;\n    }\n\n    .status-inactive {\n      color: #f44336;\n    }\n\n    .bio-section {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n\n    .bio-section h4 {\n      margin: 0;\n      font-size: 14px;\n      font-weight: 600;\n      color: #333;\n    }\n\n    .bio-text {\n      margin: 0;\n      font-size: 13px;\n      color: #666;\n      line-height: 1.5;\n    }\n\n    @media (max-width: 600px) {\n      .modal-content {\n        width: 100%;\n      }\n\n      .avatar-section {\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n      }\n\n      .user-main-info {\n        align-items: center;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserDetailModalComponent, { className: "UserDetailModalComponent", filePath: "app\\shared\\components\\user-detail-modal\\user-detail-modal.component.ts", lineNumber: 331 }); })();
//# sourceMappingURL=user-detail-modal.component.js.map