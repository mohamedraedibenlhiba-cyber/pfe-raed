import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/alert.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminService } from '../../../core/services/admin.service';
import { UserDetailModalComponent } from '../../../shared/components/user-detail-modal/user-detail-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/form-field";
import * as i9 from "@angular/material/progress-spinner";
import * as i10 from "@angular/material/tooltip";
const _c0 = () => [10, 20, 50];
function AdminUsersComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "mat-spinner", 8);
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 25);
} }
function AdminUsersComponent_Conditional_14_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26)(1, "div", 27);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.initials(u_r2.fullName));
} }
function AdminUsersComponent_Conditional_14_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "Nom complet");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 26)(1, "div", 28)(2, "span", 29);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_14_td_7_Template_span_click_2_listener() { const u_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openUserDetails(u_r5)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const u_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(u_r5.fullName);
} }
function AdminUsersComponent_Conditional_14_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "E-mail");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26)(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r6.email);
} }
function AdminUsersComponent_Conditional_14_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "R\u00F4le");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r2.roleClass(u_r7.role), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.roleLabel(u_r7.role));
} }
function AdminUsersComponent_Conditional_14_th_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "Ville");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const u_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(u_r8.city || "\u2014");
} }
function AdminUsersComponent_Conditional_14_th_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "Statut");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26)(1, "span")(2, "span", 31);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const u_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("chip ", u_r9.active ? "chip-success" : "chip-danger", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r9.active ? "check_circle" : "cancel");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", u_r9.active ? "Actif" : "Inactif", " ");
} }
function AdminUsersComponent_Conditional_14_th_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "Inscrit le");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 26);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const u_r10 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, u_r10.createdAt, "dd/MM/yyyy"));
} }
function AdminUsersComponent_Conditional_14_th_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 25);
    i0.ɵɵtext(1, "Actions");
    i0.ɵɵelementEnd();
} }
function AdminUsersComponent_Conditional_14_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 26)(1, "div", 32)(2, "button", 33);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_14_td_25_Template_button_click_2_listener() { const u_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggle(u_r12)); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 34);
    i0.ɵɵlistener("click", function AdminUsersComponent_Conditional_14_td_25_Template_button_click_5_listener() { const u_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.delete(u_r12)); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "delete_outline");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const u_r12 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("text-success", !u_r12.active)("text-warning", u_r12.active);
    i0.ɵɵproperty("matTooltip", u_r12.active ? "D\u00E9sactiver le compte" : "Activer le compte");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(u_r12.active ? "toggle_on" : "toggle_off");
} }
function AdminUsersComponent_Conditional_14_tr_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 35);
} }
function AdminUsersComponent_Conditional_14_tr_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 36);
} }
function AdminUsersComponent_Conditional_14_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "span", 37);
    i0.ɵɵtext(2, "people_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 38);
    i0.ɵɵtext(4, "Aucun utilisateur trouv\u00E9");
    i0.ɵɵelementEnd()();
} }
function AdminUsersComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "table", 10);
    i0.ɵɵelementContainerStart(2, 11);
    i0.ɵɵtemplate(3, AdminUsersComponent_Conditional_14_th_3_Template, 1, 0, "th", 12)(4, AdminUsersComponent_Conditional_14_td_4_Template, 3, 1, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(5, 14);
    i0.ɵɵtemplate(6, AdminUsersComponent_Conditional_14_th_6_Template, 2, 0, "th", 12)(7, AdminUsersComponent_Conditional_14_td_7_Template, 4, 1, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(8, 15);
    i0.ɵɵtemplate(9, AdminUsersComponent_Conditional_14_th_9_Template, 2, 0, "th", 12)(10, AdminUsersComponent_Conditional_14_td_10_Template, 3, 1, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 16);
    i0.ɵɵtemplate(12, AdminUsersComponent_Conditional_14_th_12_Template, 2, 0, "th", 12)(13, AdminUsersComponent_Conditional_14_td_13_Template, 3, 4, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(14, 17);
    i0.ɵɵtemplate(15, AdminUsersComponent_Conditional_14_th_15_Template, 2, 0, "th", 12)(16, AdminUsersComponent_Conditional_14_td_16_Template, 2, 1, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(17, 18);
    i0.ɵɵtemplate(18, AdminUsersComponent_Conditional_14_th_18_Template, 2, 0, "th", 12)(19, AdminUsersComponent_Conditional_14_td_19_Template, 5, 5, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(20, 19);
    i0.ɵɵtemplate(21, AdminUsersComponent_Conditional_14_th_21_Template, 2, 0, "th", 12)(22, AdminUsersComponent_Conditional_14_td_22_Template, 3, 4, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(23, 20);
    i0.ɵɵtemplate(24, AdminUsersComponent_Conditional_14_th_24_Template, 2, 0, "th", 12)(25, AdminUsersComponent_Conditional_14_td_25_Template, 8, 6, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(26, AdminUsersComponent_Conditional_14_tr_26_Template, 1, 0, "tr", 21)(27, AdminUsersComponent_Conditional_14_tr_27_Template, 1, 0, "tr", 22);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(28, AdminUsersComponent_Conditional_14_Conditional_28_Template, 5, 0, "div", 23);
    i0.ɵɵelementStart(29, "mat-paginator", 24);
    i0.ɵɵlistener("page", function AdminUsersComponent_Conditional_14_Template_mat_paginator_page_29_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onPage($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r2.filteredUsers);
    i0.ɵɵadvance(25);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r2.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵconditional(28, !ctx_r2.users.length ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("length", ctx_r2.totalElements)("pageSize", ctx_r2.pageSize)("pageSizeOptions", i0.ɵɵpureFunction0(8, _c0));
} }
export class AdminUsersComponent {
    constructor() {
        this.adminSvc = inject(AdminService);
        this.alertSvc = inject(AlertService);
        this.dialog = inject(MatDialog);
        this.displayedColumns = ['avatar', 'name', 'email', 'role', 'city', 'status', 'createdAt', 'actions'];
        this.users = [];
        this.totalElements = 0;
        this.pageSize = 20;
        this.currentPage = 0;
        this.loading = true;
        this.searchValue = '';
    }
    get filteredUsers() {
        if (!this.searchValue)
            return this.users;
        const q = this.searchValue.toLowerCase();
        return this.users.filter(u => u.fullName?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        this.adminSvc.getUsers(this.currentPage, this.pageSize).subscribe({
            next: res => {
                this.users = res.data.content;
                this.totalElements = res.data.totalElements;
                this.loading = false;
            },
            error: () => { this.loading = false; }
        });
    }
    onPage(event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.load();
    }
    toggle(user) {
        this.adminSvc.toggleUserActive(user.id).subscribe({
            next: () => {
                user.active = !user.active;
                this.alertSvc.success(`Compte ${user.active ? 'activé' : 'désactivé'}`);
            },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    delete(user) {
        if (!confirm(`Supprimer définitivement le compte de ${user.fullName} ?`))
            return;
        this.adminSvc.deleteUser(user.id).subscribe({
            next: () => { this.users = this.users.filter(u => u.id !== user.id); this.alertSvc.success('Utilisateur supprimé'); },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    roleLabel(role) {
        return { ROLE_ADMIN: 'Admin', ROLE_ENTERPRISE: 'Entreprise', ROLE_CANDIDATE: 'Candidat' }[role] ?? role;
    }
    roleClass(role) {
        return { ROLE_ADMIN: 'chip-primary', ROLE_ENTERPRISE: 'chip-info', ROLE_CANDIDATE: 'chip-accent' }[role] ?? 'chip-gray';
    }
    initials(name) {
        return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    openUserDetails(user) {
        this.dialog.open(UserDetailModalComponent, {
            data: user,
            width: '500px',
            maxHeight: '90vh',
            disableClose: false
        });
    }
    static { this.ɵfac = function AdminUsersComponent_Factory(t) { return new (t || AdminUsersComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminUsersComponent, selectors: [["app-admin-users"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 3, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Nom, email...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], [1, "card", "table-card"], [1, "loading-center"], ["diameter", "40"], [1, "table-responsive"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "avatar"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "email"], ["matColumnDef", "role"], ["matColumnDef", "city"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "table-row", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "user-avatar-cell"], [1, "user-name-cell"], [1, "name", "clickable-user", 3, "click"], [1, "email-cell"], [1, "material-icons-round", 2, "font-size", "12px"], [1, "actions-cell"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-icon-button", "", "matTooltip", "Supprimer d\u00E9finitivement", 1, "text-danger", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"]], template: function AdminUsersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "h1", 1);
            i0.ɵɵtext(3, "Gestion des utilisateurs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "mat-form-field", 3)(7, "mat-label");
            i0.ɵɵtext(8, "Rechercher");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "input", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_9_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-icon", 5);
            i0.ɵɵtext(11, "search");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 6);
            i0.ɵɵtemplate(13, AdminUsersComponent_Conditional_13_Template, 2, 0, "div", 7)(14, AdminUsersComponent_Conditional_14_Template, 30, 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.totalElements, " utilisateurs enregistr\u00E9s sur la plateforme");
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchValue);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(13, ctx.loading ? 13 : 14);
        } }, dependencies: [CommonModule, i1.DatePipe, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, MatCardModule, MatTableModule, i3.MatTable, i3.MatHeaderCellDef, i3.MatHeaderRowDef, i3.MatColumnDef, i3.MatCellDef, i3.MatRowDef, i3.MatHeaderCell, i3.MatCell, i3.MatHeaderRow, i3.MatRow, MatPaginatorModule, i4.MatPaginator, MatButtonModule, i5.MatIconButton, MatIconModule, i6.MatIcon, MatInputModule, i7.MatInput, i8.MatFormField, i8.MatLabel, i8.MatSuffix, MatFormFieldModule, MatChipsModule, MatMenuModule, MatDialogModule,
            MatProgressSpinnerModule, i9.MatProgressSpinner, MatTooltipModule, i10.MatTooltip, MatSlideToggleModule], styles: [".page-header[_ngcontent-%COMP%] {\n  display: flex; align-items: flex-start; justify-content: space-between;\n  margin-bottom: 24px; gap: 16px; flex-wrap: wrap;\n}\n\n.search-field[_ngcontent-%COMP%] { min-width: 280px; }\n\n.table-card[_ngcontent-%COMP%] { padding: 0; overflow: hidden; }\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 60px; }\n.table-responsive[_ngcontent-%COMP%] { overflow-x: auto; }\n\n.user-avatar-cell[_ngcontent-%COMP%] {\n  width: 36px; height: 36px; border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  color: #fff; font-size: 0.8rem; font-weight: 600;\n  display: flex; align-items: center; justify-content: center;\n}\n\n.user-name-cell[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] { font-weight: 600; color: var(--text-primary); }\n.user-name-cell[_ngcontent-%COMP%]   .clickable-user[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #667eea;\n  transition: all 0.2s ease;\n  text-decoration: none;\n\n  &:hover {\n    color: #5568d3;\n    text-decoration: underline;\n  }\n}\n.email-cell[_ngcontent-%COMP%] { color: var(--text-secondary); font-size: 0.875rem; }\n\n.actions-cell[_ngcontent-%COMP%] { display: flex; gap: 4px; align-items: center; }\n.text-success[_ngcontent-%COMP%] { color: var(--success)!important; }\n.text-warning[_ngcontent-%COMP%] { color: var(--warning)!important; }\n.text-danger[_ngcontent-%COMP%]  { color: var(--danger)!important;  }\n\n.mat-mdc-row.table-row[_ngcontent-%COMP%]:hover { background: #f8faff; }\n\nmat-paginator[_ngcontent-%COMP%] { border-top: 1px solid var(--border-color); }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminUsersComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-users', standalone: true, imports: [
                    CommonModule, FormsModule, MatCardModule, MatTableModule,
                    MatPaginatorModule, MatButtonModule, MatIconModule, MatInputModule,
                    MatFormFieldModule, MatChipsModule, MatMenuModule, MatDialogModule,
                    MatProgressSpinnerModule, MatTooltipModule, MatSlideToggleModule,
                    UserDetailModalComponent
                ], template: "<div class=\"page-header\">\n  <div>\n    <h1 class=\"page-title\">Gestion des utilisateurs</h1>\n    <p class=\"page-subtitle\">{{ totalElements }} utilisateurs enregistr\u00E9s sur la plateforme</p>\n  </div>\n\n  <mat-form-field class=\"search-field\" appearance=\"outline\">\n    <mat-label>Rechercher</mat-label>\n    <input matInput [(ngModel)]=\"searchValue\" placeholder=\"Nom, email...\" />\n    <mat-icon matSuffix>search</mat-icon>\n  </mat-form-field>\n</div>\n\n<div class=\"card table-card\">\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else {\n\n    <div class=\"table-responsive\">\n      <table mat-table [dataSource]=\"filteredUsers\" matSort>\n        <!-- Avatar -->\n        <ng-container matColumnDef=\"avatar\">\n          <th mat-header-cell *matHeaderCellDef></th>\n          <td mat-cell *matCellDef=\"let u\">\n            <div class=\"user-avatar-cell\">{{ initials(u.fullName) }}</div>\n          </td>\n        </ng-container>\n\n        <!-- Name -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef>Nom complet</th>\n          <td mat-cell *matCellDef=\"let u\">\n            <div class=\"user-name-cell\">\n              <span class=\"name clickable-user\" (click)=\"openUserDetails(u)\">{{ u.fullName }}</span>\n            </div>\n          </td>\n        </ng-container>\n\n        <!-- Email -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef>E-mail</th>\n          <td mat-cell *matCellDef=\"let u\"><span class=\"email-cell\">{{ u.email }}</span></td>\n        </ng-container>\n\n        <!-- Role -->\n        <ng-container matColumnDef=\"role\">\n          <th mat-header-cell *matHeaderCellDef>R\u00F4le</th>\n          <td mat-cell *matCellDef=\"let u\">\n            <span class=\"chip {{ roleClass(u.role) }}\">{{ roleLabel(u.role) }}</span>\n          </td>\n        </ng-container>\n\n        <!-- City -->\n        <ng-container matColumnDef=\"city\">\n          <th mat-header-cell *matHeaderCellDef>Ville</th>\n          <td mat-cell *matCellDef=\"let u\">{{ u.city || '\u2014' }}</td>\n        </ng-container>\n\n        <!-- Status -->\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>Statut</th>\n          <td mat-cell *matCellDef=\"let u\">\n            <span class=\"chip {{ u.active ? 'chip-success' : 'chip-danger' }}\">\n              <span class=\"material-icons-round\" style=\"font-size:12px\">{{ u.active ? 'check_circle' : 'cancel' }}</span>\n              {{ u.active ? 'Actif' : 'Inactif' }}\n            </span>\n          </td>\n        </ng-container>\n\n        <!-- Created at -->\n        <ng-container matColumnDef=\"createdAt\">\n          <th mat-header-cell *matHeaderCellDef>Inscrit le</th>\n          <td mat-cell *matCellDef=\"let u\">{{ u.createdAt | date:'dd/MM/yyyy' }}</td>\n        </ng-container>\n\n        <!-- Actions -->\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef>Actions</th>\n          <td mat-cell *matCellDef=\"let u\">\n            <div class=\"actions-cell\">\n              <button mat-icon-button\n                [matTooltip]=\"u.active ? 'D\u00E9sactiver le compte' : 'Activer le compte'\"\n                (click)=\"toggle(u)\"\n                [class.text-success]=\"!u.active\"\n                [class.text-warning]=\"u.active\">\n                <mat-icon>{{ u.active ? 'toggle_on' : 'toggle_off' }}</mat-icon>\n              </button>\n              <button mat-icon-button matTooltip=\"Supprimer d\u00E9finitivement\" class=\"text-danger\" (click)=\"delete(u)\">\n                <mat-icon>delete_outline</mat-icon>\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"table-row\"></tr>\n      </table>\n    </div>\n\n    @if (!users.length) {\n      <div class=\"empty-state\">\n        <span class=\"material-icons-round empty-icon\">people_outline</span>\n        <p class=\"empty-title\">Aucun utilisateur trouv\u00E9</p>\n      </div>\n    }\n\n    <mat-paginator\n      [length]=\"totalElements\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"[10, 20, 50]\"\n      (page)=\"onPage($event)\"\n      showFirstLastButtons>\n    </mat-paginator>\n  }\n</div>\n", styles: [".page-header {\n  display: flex; align-items: flex-start; justify-content: space-between;\n  margin-bottom: 24px; gap: 16px; flex-wrap: wrap;\n}\n\n.search-field { min-width: 280px; }\n\n.table-card { padding: 0; overflow: hidden; }\n.loading-center { display: flex; justify-content: center; padding: 60px; }\n.table-responsive { overflow-x: auto; }\n\n.user-avatar-cell {\n  width: 36px; height: 36px; border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #7c3aed);\n  color: #fff; font-size: 0.8rem; font-weight: 600;\n  display: flex; align-items: center; justify-content: center;\n}\n\n.user-name-cell .name { font-weight: 600; color: var(--text-primary); }\n.user-name-cell .clickable-user {\n  cursor: pointer;\n  color: #667eea;\n  transition: all 0.2s ease;\n  text-decoration: none;\n\n  &:hover {\n    color: #5568d3;\n    text-decoration: underline;\n  }\n}\n.email-cell { color: var(--text-secondary); font-size: 0.875rem; }\n\n.actions-cell { display: flex; gap: 4px; align-items: center; }\n.text-success { color: var(--success)!important; }\n.text-warning { color: var(--warning)!important; }\n.text-danger  { color: var(--danger)!important;  }\n\n.mat-mdc-row.table-row:hover { background: #f8faff; }\n\nmat-paginator { border-top: 1px solid var(--border-color); }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "app\\features\\admin\\users\\admin-users.component.ts", lineNumber: 35 }); })();
//# sourceMappingURL=admin-users.component.js.map