import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { AlertService } from '../../../core/services/alert.service';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { ReclamationService } from '../../../core/services/reclamation.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/paginator";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/form-field";
import * as i8 from "@angular/material/input";
import * as i9 from "@angular/material/progress-spinner";
import * as i10 from "@angular/material/tooltip";
import * as i11 from "@angular/material/divider";
const _forTrack0 = ($index, $item) => $item.value;
const _c0 = () => [10, 15, 30];
function AdminReclamationsComponent_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function AdminReclamationsComponent_For_18_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.switchTab(tab_r2.value)); });
    i0.ɵɵelementStart(1, "span", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 17);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.activeTab === tab_r2.value);
    i0.ɵɵattribute("aria-selected", ctx_r2.activeTab === tab_r2.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tab_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tab_r2.label);
} }
function AdminReclamationsComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelement(1, "mat-spinner", 18);
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36)(1, "span", 37);
    i0.ɵɵtext(2, "#");
    i0.ɵɵelementEnd()();
} }
function AdminReclamationsComponent_Conditional_22_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 38)(1, "span", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", r_r5.id, "");
} }
function AdminReclamationsComponent_Conditional_22_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1, "Utilisateur");
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 38)(1, "div", 40)(2, "div", 41);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 42)(5, "p", 43);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 44);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.initials(r_r6.user == null ? null : r_r6.user.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r6.user == null ? null : r_r6.user.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r6.user == null ? null : r_r6.user.email);
} }
function AdminReclamationsComponent_Conditional_22_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1, "Type");
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 38)(1, "span", 45);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-type", r_r7.type);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.typeLabel(r_r7.type));
} }
function AdminReclamationsComponent_Conditional_22_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1, "Sujet");
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 38)(1, "span", 46);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r8 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("matTooltip", r_r8.description);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(r_r8.subject);
} }
function AdminReclamationsComponent_Conditional_22_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1, "Statut");
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 38)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r2.statusChipClass(r_r9.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(r_r9.status));
} }
function AdminReclamationsComponent_Conditional_22_th_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1, "Creee le");
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_td_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 38)(1, "span", 47);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 1, r_r10.createdAt, "dd/MM/yyyy HH:mm"));
} }
function AdminReclamationsComponent_Conditional_22_th_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1, "Action");
    i0.ɵɵelementEnd();
} }
function AdminReclamationsComponent_Conditional_22_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 38)(1, "button", 48);
    i0.ɵɵlistener("click", function AdminReclamationsComponent_Conditional_22_td_27_Template_button_click_1_listener() { const r_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openDetail(r_r12)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "open_in_new");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Traiter ");
    i0.ɵɵelementEnd()();
} }
function AdminReclamationsComponent_Conditional_22_tr_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 49);
} }
function AdminReclamationsComponent_Conditional_22_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 50);
    i0.ɵɵlistener("click", function AdminReclamationsComponent_Conditional_22_tr_29_Template_tr_click_0_listener() { const row_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openDetail(row_r14)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected-row", (ctx_r2.selectedReclamation == null ? null : ctx_r2.selectedReclamation.id) === row_r14.id);
} }
function AdminReclamationsComponent_Conditional_22_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "span", 51);
    i0.ɵɵtext(2, "check_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 52);
    i0.ɵɵtext(4, "Aucune reclamation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 53);
    i0.ɵɵtext(6, "Toutes les reclamations de cette categorie ont ete traitees");
    i0.ɵɵelementEnd()();
} }
function AdminReclamationsComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "h3");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 20);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 21)(6, "table", 22);
    i0.ɵɵelementContainerStart(7, 23);
    i0.ɵɵtemplate(8, AdminReclamationsComponent_Conditional_22_th_8_Template, 3, 0, "th", 24)(9, AdminReclamationsComponent_Conditional_22_td_9_Template, 3, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(10, 26);
    i0.ɵɵtemplate(11, AdminReclamationsComponent_Conditional_22_th_11_Template, 2, 0, "th", 24)(12, AdminReclamationsComponent_Conditional_22_td_12_Template, 9, 3, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 27);
    i0.ɵɵtemplate(14, AdminReclamationsComponent_Conditional_22_th_14_Template, 2, 0, "th", 24)(15, AdminReclamationsComponent_Conditional_22_td_15_Template, 3, 2, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 28);
    i0.ɵɵtemplate(17, AdminReclamationsComponent_Conditional_22_th_17_Template, 2, 0, "th", 24)(18, AdminReclamationsComponent_Conditional_22_td_18_Template, 3, 2, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(19, 29);
    i0.ɵɵtemplate(20, AdminReclamationsComponent_Conditional_22_th_20_Template, 2, 0, "th", 24)(21, AdminReclamationsComponent_Conditional_22_td_21_Template, 3, 4, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(22, 30);
    i0.ɵɵtemplate(23, AdminReclamationsComponent_Conditional_22_th_23_Template, 2, 0, "th", 24)(24, AdminReclamationsComponent_Conditional_22_td_24_Template, 4, 4, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(25, 31);
    i0.ɵɵtemplate(26, AdminReclamationsComponent_Conditional_22_th_26_Template, 2, 0, "th", 24)(27, AdminReclamationsComponent_Conditional_22_td_27_Template, 5, 0, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(28, AdminReclamationsComponent_Conditional_22_tr_28_Template, 1, 0, "tr", 32)(29, AdminReclamationsComponent_Conditional_22_tr_29_Template, 1, 2, "tr", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(30, AdminReclamationsComponent_Conditional_22_Conditional_30_Template, 7, 0, "div", 34);
    i0.ɵɵelementStart(31, "mat-paginator", 35);
    i0.ɵɵlistener("page", function AdminReclamationsComponent_Conditional_22_Template_mat_paginator_page_31_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onPage($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Reclamations ", ctx_r2.activeTab !== "ALL" ? "- " + ctx_r2.activeTab : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r2.reclamations.length, " resultat(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("dataSource", ctx_r2.reclamations);
    i0.ɵɵadvance(22);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r2.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵconditional(30, !ctx_r2.reclamations.length ? 30 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("length", ctx_r2.totalElements)("pageSize", ctx_r2.pageSize)("pageSizeOptions", i0.ɵɵpureFunction0(10, _c0));
} }
function AdminReclamationsComponent_Conditional_23_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 65)(1, "div", 73)(2, "span", 74);
    i0.ɵɵtext(3, "history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 61);
    i0.ɵɵtext(5, "Reponse precedente");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p", 75);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.selectedReclamation.adminResponse);
} }
function AdminReclamationsComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14)(1, "div", 54)(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 55);
    i0.ɵɵlistener("click", function AdminReclamationsComponent_Conditional_23_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closePanel()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 56)(8, "div", 57);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 58);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelement(17, "mat-divider");
    i0.ɵɵelementStart(18, "div", 59)(19, "div", 60)(20, "span", 61);
    i0.ɵɵtext(21, "Type de reclamation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 62);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 60)(25, "span", 61);
    i0.ɵɵtext(26, "Sujet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 62);
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 60)(30, "span", 61);
    i0.ɵɵtext(31, "Statut actuel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 60)(35, "span", 61);
    i0.ɵɵtext(36, "Soumis le");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span", 62);
    i0.ɵɵtext(38);
    i0.ɵɵpipe(39, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 63)(41, "p", 61);
    i0.ɵɵtext(42, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "p", 64);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(45, AdminReclamationsComponent_Conditional_23_Conditional_45_Template, 8, 1, "div", 65);
    i0.ɵɵelement(46, "mat-divider");
    i0.ɵɵelementStart(47, "form", 66);
    i0.ɵɵlistener("ngSubmit", function AdminReclamationsComponent_Conditional_23_Template_form_ngSubmit_47_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submitResponse()); });
    i0.ɵɵelementStart(48, "p", 67);
    i0.ɵɵtext(49, "Repondre a la reclamation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(50, "app-select", 68);
    i0.ɵɵelementStart(51, "mat-form-field", 69)(52, "mat-label");
    i0.ɵɵtext(53, "Votre reponse");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(54, "textarea", 70);
    i0.ɵɵelementStart(55, "mat-icon", 71);
    i0.ɵɵtext(56, "message");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "button", 72)(58, "mat-icon");
    i0.ɵɵtext(59, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(60, " Envoyer la reponse ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Reclamation #", ctx_r2.selectedReclamation.id, "");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.initials(ctx_r2.selectedReclamation.user.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.selectedReclamation.user.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedReclamation.user.email);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedReclamation.user.role);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r2.typeLabel(ctx_r2.selectedReclamation.type));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.selectedReclamation.subject);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r2.statusChipClass(ctx_r2.selectedReclamation.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(ctx_r2.selectedReclamation.status));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(39, 17, ctx_r2.selectedReclamation.createdAt, "dd/MM/yyyy HH:mm"));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.selectedReclamation.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(45, ctx_r2.selectedReclamation.adminResponse ? 45 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formGroup", ctx_r2.responseForm);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r2.statusOptions);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", ctx_r2.responseForm.invalid);
} }
export class AdminReclamationsComponent {
    constructor() {
        this.reclamSvc = inject(ReclamationService);
        this.alertSvc = inject(AlertService);
        this.fb = inject(FormBuilder);
        this.displayedColumns = ['id', 'user', 'type', 'subject', 'status', 'createdAt', 'actions'];
        this.reclamations = [];
        this.totalElements = 0;
        this.pageSize = 15;
        this.currentPage = 0;
        this.loading = true;
        this.activeTab = 'ALL';
        this.selectedReclamation = null;
        this.panelOpen = false;
        this.responseForm = this.fb.group({
            status: ['IN_PROGRESS', Validators.required],
            adminResponse: ['']
        });
        this.statusOptions = [
            { value: 'IN_PROGRESS', label: 'En cours' },
            { value: 'RESOLVED', label: 'Resolue' },
            { value: 'CLOSED', label: 'Fermee' },
            { value: 'REJECTED', label: 'Rejetee' },
        ];
        this.tabs = [
            { label: 'Toutes', value: 'ALL', icon: 'list' },
            { label: 'Ouvertes', value: 'OPEN', icon: 'report_problem' },
            { label: 'En cours', value: 'IN_PROGRESS', icon: 'pending' },
            { label: 'Resolues', value: 'RESOLVED', icon: 'check_circle' },
            { label: 'Fermees', value: 'CLOSED', icon: 'lock' },
        ];
    }
    ngOnInit() { this.load(); }
    load() {
        this.loading = true;
        const obs = this.activeTab === 'ALL'
            ? this.reclamSvc.getAll(this.currentPage, this.pageSize)
            : this.reclamSvc.getByStatus(this.activeTab, this.currentPage, this.pageSize);
        obs.subscribe({
            next: res => {
                this.reclamations = res.data.content;
                this.totalElements = res.data.totalElements;
                this.loading = false;
            },
            error: () => { this.loading = false; }
        });
    }
    switchTab(value) {
        this.activeTab = value;
        this.currentPage = 0;
        this.load();
    }
    onPage(event) {
        this.currentPage = event.pageIndex;
        this.pageSize = event.pageSize;
        this.load();
    }
    openDetail(r) {
        this.selectedReclamation = r;
        this.responseForm.patchValue({ status: r.status, adminResponse: r.adminResponse ?? '' });
        this.panelOpen = true;
    }
    closePanel() {
        this.panelOpen = false;
        this.selectedReclamation = null;
    }
    submitResponse() {
        if (this.responseForm.invalid || !this.selectedReclamation)
            return;
        const { status, adminResponse } = this.responseForm.value;
        this.reclamSvc.respond(this.selectedReclamation.id, {
            status: status,
            adminResponse: adminResponse ?? ''
        }).subscribe({
            next: res => {
                const idx = this.reclamations.findIndex(r => r.id === res.data.id);
                if (idx !== -1)
                    this.reclamations[idx] = res.data;
                this.alertSvc.success('Reclamation mise a jour');
                this.closePanel();
            },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    statusChipClass(status) {
        const map = {
            OPEN: 'chip-danger',
            IN_PROGRESS: 'chip-warning',
            RESOLVED: 'chip-success',
            CLOSED: 'chip-gray',
            REJECTED: 'chip-gray'
        };
        return map[status] ?? 'chip-gray';
    }
    statusLabel(status) {
        const map = {
            OPEN: 'Ouvert',
            IN_PROGRESS: 'En cours',
            RESOLVED: 'Resolue',
            CLOSED: 'Fermee',
            REJECTED: 'Rejetee'
        };
        return map[status] ?? status;
    }
    typeLabel(type) {
        const map = {
            TECHNICAL_ISSUE: 'Probleme technique',
            ACCOUNT_PROBLEM: 'Compte',
            PAYMENT_ISSUE: 'Paiement',
            ABUSIVE_CONTENT: 'Contenu abusif',
            OFFER_FRAUD: 'Fraude offre',
            OTHER: 'Autre'
        };
        return map[type] ?? type;
    }
    initials(name) {
        return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    static { this.ɵfac = function AdminReclamationsComponent_Factory(t) { return new (t || AdminReclamationsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminReclamationsComponent, selectors: [["app-admin-reclamations"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 24, vars: 5, consts: [[1, "admin-reclamations-wrapper"], [1, "page-header-admin"], [1, "page-title"], [1, "page-subtitle"], [1, "header-stats"], [1, "stat-box"], [1, "material-icons-round", "stat-icon"], [1, "stat-label"], [1, "stat-count"], [1, "tabs-bar-modern"], [1, "tab-btn-modern", 3, "active"], [1, "reclamation-layout-modern"], [1, "card", "table-card-modern"], [1, "loading-center"], [1, "detail-panel-modern", "card"], [1, "tab-btn-modern", 3, "click"], [1, "material-icons-round", "tab-icon"], [1, "tab-label"], ["diameter", "40"], [1, "table-header-modern"], [1, "table-count"], [1, "table-responsive-modern"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "user"], ["matColumnDef", "type"], ["matColumnDef", "subject"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "table-row-modern", 3, "selected-row", "click", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state-admin"], ["showFirstLastButtons", "", 1, "paginator-modern", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [1, "col-header"], ["mat-cell", ""], [1, "id-cell-modern"], [1, "user-cell-modern"], [1, "user-avatar-modern"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "type-badge"], [1, "subject-cell-modern", 3, "matTooltip"], [1, "date-cell"], ["mat-flat-button", "", 1, "btn-handle-modern", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row-modern", 3, "click"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "panel-header-modern"], ["mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "detail-user-modern"], [1, "user-avatar-lg"], [1, "chip", "chip-info"], [1, "detail-section-modern"], [1, "detail-row-modern"], [1, "detail-label"], [1, "detail-value"], [1, "description-box-modern"], [1, "description-text-modern"], [1, "previous-response-modern"], ["novalidate", "", 1, "response-form-modern", 3, "ngSubmit", "formGroup"], [1, "section-title-modern"], ["label", "Nouveau statut", "formControlName", "status", 3, "options"], [1, "full-width"], ["matInput", "", "formControlName", "adminResponse", "rows", "4", "placeholder", "Saisissez votre reponse..."], ["matPrefix", ""], ["mat-flat-button", "", "type", "submit", 1, "btn-primary-modern", "w-full", 3, "disabled"], [1, "response-header"], [1, "material-icons-round"], [1, "response-text"]], template: function AdminReclamationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Traitement des reclamations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Traitez et repondez aux reclamations utilisateurs en temps reel");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "div", 5)(9, "span", 6);
            i0.ɵɵtext(10, "report_problem");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div")(12, "span", 7);
            i0.ɵɵtext(13, "Total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 8);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(16, "div", 9);
            i0.ɵɵrepeaterCreate(17, AdminReclamationsComponent_For_18_Template, 5, 5, "button", 10, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 11)(20, "div", 12);
            i0.ɵɵtemplate(21, AdminReclamationsComponent_Conditional_21_Template, 2, 0, "div", 13)(22, AdminReclamationsComponent_Conditional_22_Template, 32, 11);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(23, AdminReclamationsComponent_Conditional_23_Template, 61, 20, "div", 14);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵtextInterpolate(ctx.totalElements);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.tabs);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("with-panel", ctx.panelOpen);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(21, ctx.loading ? 21 : 22);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(23, ctx.panelOpen && ctx.selectedReclamation ? 23 : -1);
        } }, dependencies: [CommonModule, i1.DatePipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, MatCardModule, MatTableModule, i3.MatTable, i3.MatHeaderCellDef, i3.MatHeaderRowDef, i3.MatColumnDef, i3.MatCellDef, i3.MatRowDef, i3.MatHeaderCell, i3.MatCell, i3.MatHeaderRow, i3.MatRow, MatPaginatorModule, i4.MatPaginator, MatButtonModule, i5.MatButton, i5.MatIconButton, MatIconModule, i6.MatIcon, MatFormFieldModule, i7.MatFormField, i7.MatLabel, i7.MatPrefix, MatInputModule, i8.MatInput, AppSelectComponent,
            MatProgressSpinnerModule, i9.MatProgressSpinner, MatTooltipModule, i10.MatTooltip, MatDividerModule, i11.MatDivider], styles: [".admin-reclamations-wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.page-header-admin[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 32px;\n\n  h1 {\n    font-size: 2rem;\n    font-weight: 900;\n    margin: 0 0 6px 0;\n    color: #000;\n  }\n\n  .page-subtitle {\n    font-size: 0.95rem;\n    color: #666;\n    margin: 0;\n    font-weight: 500;\n  }\n\n  .header-stats {\n    display: flex;\n    gap: 16px;\n\n    .stat-box {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      background: linear-gradient(135deg, #fff8f0, #fffbf0);\n      border: 1px solid rgba(255, 105, 0, 0.1);\n      border-radius: 12px;\n      padding: 16px 20px;\n      min-width: 140px;\n\n      .stat-icon {\n        font-size: 28px;\n        color: #ff6900;\n      }\n\n      .stat-label {\n        font-size: 0.8rem;\n        color: #666;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.05em;\n        display: block;\n        margin-bottom: 2px;\n      }\n\n      .stat-count {\n        font-size: 1.5rem;\n        font-weight: 900;\n        color: #ff6900;\n      }\n    }\n  }\n\n  @media (max-width: 1024px) {\n    flex-direction: column;\n    align-items: flex-start;\n\n    .header-stats {\n      width: 100%;\n    }\n  }\n}\n\n.tabs-bar-modern[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 24px;\n  background: linear-gradient(135deg, #fafafa, #f5f5f5);\n  border: 1px solid #eee;\n  border-radius: 14px;\n  padding: 8px;\n  width: fit-content;\n  flex-wrap: wrap;\n}\n\n.tab-btn-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #666;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n  .tab-icon {\n    font-size: 18px;\n  }\n\n  &:hover {\n    background: rgba(255, 105, 0, 0.05);\n    color: #ff6900;\n  }\n\n  &.active {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    color: #000;\n    font-weight: 700;\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.2);\n    border-color: #ff6900;\n  }\n}\n\n.reclamation-layout-modern[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n\n  &.with-panel {\n    @media (min-width: 1024px) {\n      grid-template-columns: 1fr 420px;\n    }\n  }\n}\n\n.table-card-modern[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid #eee;\n\n  .loading-center {\n    display: flex;\n    justify-content: center;\n    padding: 80px 20px;\n  }\n\n  .table-header-modern {\n    padding: 24px 28px;\n    border-bottom: 1px solid #eee;\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 800;\n      margin: 0 0 4px 0;\n      color: #000;\n    }\n\n    .table-count {\n      font-size: 0.85rem;\n      color: #999;\n      margin: 0;\n      font-weight: 500;\n    }\n  }\n}\n\n.table-responsive-modern[_ngcontent-%COMP%] {\n  overflow-x: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n}\n\n.id-cell-modern[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #ff6900;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n\n.user-cell-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 180px;\n}\n\n.user-avatar-modern[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #ff6900, #fcb900);\n  color: #000;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(255, 105, 0, 0.2);\n}\n\n.user-info[_ngcontent-%COMP%] {\n  .user-name {\n    font-weight: 700;\n    font-size: 0.85rem;\n    margin: 0;\n    color: #000;\n  }\n\n  .user-email {\n    font-size: 0.75rem;\n    color: #999;\n    margin: 2px 0 0 0;\n  }\n}\n\n.type-badge[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-block;\n  background: #f0f0f0;\n  color: #333;\n\n  &[data-type='TECHNICAL_ISSUE'] {\n    background: #e0f2fe;\n    color: #0284c7;\n  }\n\n  &[data-type='ACCOUNT_PROBLEM'] {\n    background: #fce7f3;\n    color: #be185d;\n  }\n\n  &[data-type='PAYMENT_ISSUE'] {\n    background: #fee2e2;\n    color: #dc2626;\n  }\n\n  &[data-type='ABUSIVE_CONTENT'] {\n    background: #fef3c7;\n    color: #d97706;\n  }\n\n  &[data-type='OFFER_FRAUD'] {\n    background: #dbeafe;\n    color: #1e40af;\n  }\n}\n\n.subject-cell-modern[_ngcontent-%COMP%] {\n  font-weight: 600;\n  cursor: help;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 250px;\n  display: block;\n  text-overflow: ellipsis;\n  color: #333;\n}\n\n.date-cell[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  font-weight: 500;\n}\n\n.chip[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-block;\n\n  &.chip-danger {\n    background: #fee2e2;\n    color: #dc2626;\n  }\n\n  &.chip-warning {\n    background: #fef3c7;\n    color: #d97706;\n  }\n\n  &.chip-success {\n    background: #dcfce7;\n    color: #16a34a;\n  }\n\n  &.chip-gray {\n    background: #f3f4f6;\n    color: #6b7280;\n  }\n\n  &.chip-info {\n    background: #e0f2fe;\n    color: #0284c7;\n  }\n}\n\n.btn-handle-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 105, 0, 0.1), rgba(252, 185, 0, 0.1)) !important;\n  color: #ff6900 !important;\n  font-size: 0.8rem !important;\n  height: 36px !important;\n  padding: 0 14px !important;\n  border-radius: 8px !important;\n  font-weight: 700 !important;\n  transition: all 0.2s ease !important;\n  border: 1px solid rgba(255, 105, 0, 0.2) !important;\n\n  &:hover {\n    background: linear-gradient(135deg, rgba(255, 105, 0, 0.15), rgba(252, 185, 0, 0.15)) !important;\n    box-shadow: 0 4px 12px rgba(255, 105, 0, 0.15) !important;\n  }\n}\n\n.mat-mdc-row.table-row-modern[_ngcontent-%COMP%] {\n  &:hover {\n    background: linear-gradient(90deg, rgba(255, 105, 0, 0.03), transparent);\n    cursor: pointer;\n  }\n\n  &.selected-row {\n    background: linear-gradient(90deg, rgba(255, 105, 0, 0.08), transparent) !important;\n    border-left: 3px solid #ff6900;\n  }\n}\n\n.empty-state-admin[_ngcontent-%COMP%] {\n  padding: 60px 40px;\n  text-align: center;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border-top: 1px solid #eee;\n\n  .empty-icon {\n    font-size: 64px;\n    color: #ff6900;\n    opacity: 0.5;\n    margin-bottom: 16px;\n    display: block;\n  }\n\n  .empty-title {\n    font-size: 1.2rem;\n    font-weight: 800;\n    margin: 0 0 8px 0;\n    color: #000;\n  }\n\n  .empty-desc {\n    font-size: 0.9rem;\n    color: #666;\n    margin: 0;\n  }\n}\n\n.paginator-modern[_ngcontent-%COMP%] {\n  border-top: 1px solid #eee;\n  background: linear-gradient(135deg, #fafafa, #f5f5f5);\n}\n\n.detail-panel-modern[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: fit-content;\n  position: sticky;\n  top: 92px;\n  border: 1px solid #eee;\n  background: #fff;\n}\n\n.panel-header-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n\n  h3 {\n    font-size: 1.1rem;\n    font-weight: 800;\n    margin: 0;\n    color: #000;\n  }\n}\n\n.detail-user-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border-radius: 10px;\n  margin: 0 16px;\n\n  .user-avatar-lg {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    color: #000;\n    font-size: 1rem;\n    font-weight: 800;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    box-shadow: 0 4px 12px rgba(255, 105, 0, 0.2);\n  }\n\n  strong {\n    font-size: 0.95rem;\n    color: #000;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  p {\n    font-size: 0.8rem;\n    color: #666;\n    margin: 0;\n  }\n}\n\n.detail-section-modern[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 0 16px;\n}\n\n.detail-row-modern[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #999;\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #000;\n  font-weight: 600;\n}\n\n.description-box-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f9f9f9, #f5f5f5);\n  border-radius: 10px;\n  padding: 16px;\n  margin: 0 16px;\n\n  .description-text-modern {\n    font-size: 0.9rem;\n    line-height: 1.6;\n    margin: 8px 0 0;\n    color: #333;\n  }\n}\n\n.previous-response-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fef9e7, #fffbf0);\n  border: 1px solid rgba(255, 180, 0, 0.3);\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin: 0 16px;\n\n  .response-header {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 8px;\n\n    .material-icons-round {\n      color: #d97706;\n      font-size: 18px;\n    }\n  }\n\n  .response-text {\n    font-size: 0.9rem;\n    color: #92400e;\n    line-height: 1.6;\n    margin: 0;\n  }\n}\n\n.response-form-modern[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 0 16px;\n\n  .section-title-modern {\n    font-size: 0.9rem;\n    font-weight: 700;\n    margin: 8px 0 4px 0;\n    color: #000;\n  }\n\n  mat-form-field {\n    width: 100%;\n  }\n}\n\n.btn-primary-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 44px !important;\n  border-radius: 10px !important;\n}\n\n.w-full[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n  {\n  .admin-reclamations-wrapper {\n    .mat-mdc-header-cell {\n      background: linear-gradient(135deg, #fafafa, #f5f5f5) !important;\n      border-bottom: 2px solid #eee !important;\n      font-weight: 700;\n      color: #333 !important;\n      font-size: 0.8rem !important;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    .mat-mdc-cell {\n      border-bottom: 1px solid #f0f0f0;\n      padding: 12px 16px !important;\n      font-size: 0.875rem;\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminReclamationsComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-reclamations', standalone: true, imports: [
                    CommonModule, ReactiveFormsModule,
                    MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule,
                    MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent,
                    MatProgressSpinnerModule, MatTooltipModule, MatDividerModule
                ], template: "<div class=\"admin-reclamations-wrapper\">\n  <div class=\"page-header-admin\">\n    <div>\n      <h1 class=\"page-title\">Traitement des reclamations</h1>\n      <p class=\"page-subtitle\">Traitez et repondez aux reclamations utilisateurs en temps reel</p>\n    </div>\n    <div class=\"header-stats\">\n      <div class=\"stat-box\">\n        <span class=\"material-icons-round stat-icon\">report_problem</span>\n        <div>\n          <span class=\"stat-label\">Total</span>\n          <span class=\"stat-count\">{{ totalElements }}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"tabs-bar-modern\">\n    @for (tab of tabs; track tab.value) {\n      <button\n        class=\"tab-btn-modern\"\n        [class.active]=\"activeTab === tab.value\"\n        (click)=\"switchTab(tab.value)\"\n        [attr.aria-selected]=\"activeTab === tab.value\">\n        <span class=\"material-icons-round tab-icon\">{{ tab.icon }}</span>\n        <span class=\"tab-label\">{{ tab.label }}</span>\n      </button>\n    }\n  </div>\n\n  <div class=\"reclamation-layout-modern\" [class.with-panel]=\"panelOpen\">\n    <div class=\"card table-card-modern\">\n      @if (loading) {\n        <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n      } @else {\n        <div class=\"table-header-modern\">\n          <h3>Reclamations {{ activeTab !== 'ALL' ? '- ' + activeTab : '' }}</h3>\n          <p class=\"table-count\">{{ reclamations.length }} resultat(s)</p>\n        </div>\n\n        <div class=\"table-responsive-modern\">\n          <table mat-table [dataSource]=\"reclamations\">\n            <ng-container matColumnDef=\"id\">\n              <th mat-header-cell *matHeaderCellDef>\n                <span class=\"col-header\">#</span>\n              </th>\n              <td mat-cell *matCellDef=\"let r\">\n                <span class=\"id-cell-modern\">#{{ r.id }}</span>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"user\">\n              <th mat-header-cell *matHeaderCellDef>Utilisateur</th>\n              <td mat-cell *matCellDef=\"let r\">\n                <div class=\"user-cell-modern\">\n                  <div class=\"user-avatar-modern\">{{ initials(r.user?.fullName) }}</div>\n                  <div class=\"user-info\">\n                    <p class=\"user-name\">{{ r.user?.fullName }}</p>\n                    <p class=\"user-email\">{{ r.user?.email }}</p>\n                  </div>\n                </div>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"type\">\n              <th mat-header-cell *matHeaderCellDef>Type</th>\n              <td mat-cell *matCellDef=\"let r\">\n                <span class=\"type-badge\" [attr.data-type]=\"r.type\">{{ typeLabel(r.type) }}</span>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"subject\">\n              <th mat-header-cell *matHeaderCellDef>Sujet</th>\n              <td mat-cell *matCellDef=\"let r\">\n                <span class=\"subject-cell-modern\" [matTooltip]=\"r.description\">{{ r.subject }}</span>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef>Statut</th>\n              <td mat-cell *matCellDef=\"let r\">\n                <span class=\"chip {{ statusChipClass(r.status) }}\">{{ statusLabel(r.status) }}</span>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"createdAt\">\n              <th mat-header-cell *matHeaderCellDef>Creee le</th>\n              <td mat-cell *matCellDef=\"let r\">\n                <span class=\"date-cell\">{{ r.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"actions\">\n              <th mat-header-cell *matHeaderCellDef>Action</th>\n              <td mat-cell *matCellDef=\"let r\">\n                <button mat-flat-button class=\"btn-handle-modern\" (click)=\"openDetail(r)\">\n                  <mat-icon>open_in_new</mat-icon>\n                  Traiter\n                </button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n            <tr\n              mat-row\n              *matRowDef=\"let row; columns: displayedColumns;\"\n              class=\"table-row-modern\"\n              [class.selected-row]=\"selectedReclamation?.id === row.id\"\n              (click)=\"openDetail(row)\">\n            </tr>\n          </table>\n        </div>\n\n        @if (!reclamations.length) {\n          <div class=\"empty-state-admin\">\n            <span class=\"material-icons-round empty-icon\">check_circle_outline</span>\n            <p class=\"empty-title\">Aucune reclamation</p>\n            <p class=\"empty-desc\">Toutes les reclamations de cette categorie ont ete traitees</p>\n          </div>\n        }\n\n        <mat-paginator\n          [length]=\"totalElements\"\n          [pageSize]=\"pageSize\"\n          [pageSizeOptions]=\"[10, 15, 30]\"\n          (page)=\"onPage($event)\"\n          showFirstLastButtons\n          class=\"paginator-modern\">\n        </mat-paginator>\n      }\n    </div>\n\n    @if (panelOpen && selectedReclamation) {\n      <div class=\"detail-panel-modern card\">\n        <div class=\"panel-header-modern\">\n          <h3>Reclamation #{{ selectedReclamation.id }}</h3>\n          <button mat-icon-button (click)=\"closePanel()\" class=\"close-btn\">\n            <mat-icon>close</mat-icon>\n          </button>\n        </div>\n\n        <div class=\"detail-user-modern\">\n          <div class=\"user-avatar-lg\">{{ initials(selectedReclamation.user.fullName) }}</div>\n          <div>\n            <strong>{{ selectedReclamation.user.fullName }}</strong>\n            <p>{{ selectedReclamation.user.email }}</p>\n            <span class=\"chip chip-info\">{{ selectedReclamation.user.role }}</span>\n          </div>\n        </div>\n\n        <mat-divider />\n\n        <div class=\"detail-section-modern\">\n          <div class=\"detail-row-modern\">\n            <span class=\"detail-label\">Type de reclamation</span>\n            <span class=\"detail-value\">{{ typeLabel(selectedReclamation.type) }}</span>\n          </div>\n          <div class=\"detail-row-modern\">\n            <span class=\"detail-label\">Sujet</span>\n            <span class=\"detail-value\">{{ selectedReclamation.subject }}</span>\n          </div>\n          <div class=\"detail-row-modern\">\n            <span class=\"detail-label\">Statut actuel</span>\n            <span class=\"chip {{ statusChipClass(selectedReclamation.status) }}\">{{ statusLabel(selectedReclamation.status) }}</span>\n          </div>\n          <div class=\"detail-row-modern\">\n            <span class=\"detail-label\">Soumis le</span>\n            <span class=\"detail-value\">{{ selectedReclamation.createdAt | date:'dd/MM/yyyy HH:mm' }}</span>\n          </div>\n        </div>\n\n        <div class=\"description-box-modern\">\n          <p class=\"detail-label\">Description</p>\n          <p class=\"description-text-modern\">{{ selectedReclamation.description }}</p>\n        </div>\n\n        @if (selectedReclamation.adminResponse) {\n          <div class=\"previous-response-modern\">\n            <div class=\"response-header\">\n              <span class=\"material-icons-round\">history</span>\n              <p class=\"detail-label\">Reponse precedente</p>\n            </div>\n            <p class=\"response-text\">{{ selectedReclamation.adminResponse }}</p>\n          </div>\n        }\n\n        <mat-divider />\n\n        <form [formGroup]=\"responseForm\" (ngSubmit)=\"submitResponse()\" novalidate class=\"response-form-modern\">\n          <p class=\"section-title-modern\">Repondre a la reclamation</p>\n\n          <app-select label=\"Nouveau statut\" [options]=\"statusOptions\" formControlName=\"status\"></app-select>\n\n          <mat-form-field class=\"full-width\">\n            <mat-label>Votre reponse</mat-label>\n            <textarea matInput formControlName=\"adminResponse\" rows=\"4\" placeholder=\"Saisissez votre reponse...\"></textarea>\n            <mat-icon matPrefix>message</mat-icon>\n          </mat-form-field>\n\n          <button mat-flat-button type=\"submit\" class=\"btn-primary-modern w-full\" [disabled]=\"responseForm.invalid\">\n            <mat-icon>send</mat-icon>\n            Envoyer la reponse\n          </button>\n        </form>\n      </div>\n    }\n  </div>\n</div>\n", styles: [".admin-reclamations-wrapper {\n  padding: 0;\n}\n\n.page-header-admin {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 32px;\n\n  h1 {\n    font-size: 2rem;\n    font-weight: 900;\n    margin: 0 0 6px 0;\n    color: #000;\n  }\n\n  .page-subtitle {\n    font-size: 0.95rem;\n    color: #666;\n    margin: 0;\n    font-weight: 500;\n  }\n\n  .header-stats {\n    display: flex;\n    gap: 16px;\n\n    .stat-box {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      background: linear-gradient(135deg, #fff8f0, #fffbf0);\n      border: 1px solid rgba(255, 105, 0, 0.1);\n      border-radius: 12px;\n      padding: 16px 20px;\n      min-width: 140px;\n\n      .stat-icon {\n        font-size: 28px;\n        color: #ff6900;\n      }\n\n      .stat-label {\n        font-size: 0.8rem;\n        color: #666;\n        font-weight: 600;\n        text-transform: uppercase;\n        letter-spacing: 0.05em;\n        display: block;\n        margin-bottom: 2px;\n      }\n\n      .stat-count {\n        font-size: 1.5rem;\n        font-weight: 900;\n        color: #ff6900;\n      }\n    }\n  }\n\n  @media (max-width: 1024px) {\n    flex-direction: column;\n    align-items: flex-start;\n\n    .header-stats {\n      width: 100%;\n    }\n  }\n}\n\n.tabs-bar-modern {\n  display: flex;\n  gap: 6px;\n  margin-bottom: 24px;\n  background: linear-gradient(135deg, #fafafa, #f5f5f5);\n  border: 1px solid #eee;\n  border-radius: 14px;\n  padding: 8px;\n  width: fit-content;\n  flex-wrap: wrap;\n}\n\n.tab-btn-modern {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 18px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #666;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n  .tab-icon {\n    font-size: 18px;\n  }\n\n  &:hover {\n    background: rgba(255, 105, 0, 0.05);\n    color: #ff6900;\n  }\n\n  &.active {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    color: #000;\n    font-weight: 700;\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.2);\n    border-color: #ff6900;\n  }\n}\n\n.reclamation-layout-modern {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 24px;\n\n  &.with-panel {\n    @media (min-width: 1024px) {\n      grid-template-columns: 1fr 420px;\n    }\n  }\n}\n\n.table-card-modern {\n  padding: 0;\n  overflow: hidden;\n  border: 1px solid #eee;\n\n  .loading-center {\n    display: flex;\n    justify-content: center;\n    padding: 80px 20px;\n  }\n\n  .table-header-modern {\n    padding: 24px 28px;\n    border-bottom: 1px solid #eee;\n\n    h3 {\n      font-size: 1.1rem;\n      font-weight: 800;\n      margin: 0 0 4px 0;\n      color: #000;\n    }\n\n    .table-count {\n      font-size: 0.85rem;\n      color: #999;\n      margin: 0;\n      font-weight: 500;\n    }\n  }\n}\n\n.table-responsive-modern {\n  overflow-x: auto;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n  }\n}\n\n.id-cell-modern {\n  font-size: 0.8rem;\n  color: #ff6900;\n  font-weight: 700;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\n\n.user-cell-modern {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 180px;\n}\n\n.user-avatar-modern {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #ff6900, #fcb900);\n  color: #000;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 2px 8px rgba(255, 105, 0, 0.2);\n}\n\n.user-info {\n  .user-name {\n    font-weight: 700;\n    font-size: 0.85rem;\n    margin: 0;\n    color: #000;\n  }\n\n  .user-email {\n    font-size: 0.75rem;\n    color: #999;\n    margin: 2px 0 0 0;\n  }\n}\n\n.type-badge {\n  font-size: 0.75rem;\n  font-weight: 700;\n  padding: 6px 12px;\n  border-radius: 8px;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-block;\n  background: #f0f0f0;\n  color: #333;\n\n  &[data-type='TECHNICAL_ISSUE'] {\n    background: #e0f2fe;\n    color: #0284c7;\n  }\n\n  &[data-type='ACCOUNT_PROBLEM'] {\n    background: #fce7f3;\n    color: #be185d;\n  }\n\n  &[data-type='PAYMENT_ISSUE'] {\n    background: #fee2e2;\n    color: #dc2626;\n  }\n\n  &[data-type='ABUSIVE_CONTENT'] {\n    background: #fef3c7;\n    color: #d97706;\n  }\n\n  &[data-type='OFFER_FRAUD'] {\n    background: #dbeafe;\n    color: #1e40af;\n  }\n}\n\n.subject-cell-modern {\n  font-weight: 600;\n  cursor: help;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 250px;\n  display: block;\n  text-overflow: ellipsis;\n  color: #333;\n}\n\n.date-cell {\n  font-size: 0.85rem;\n  color: #666;\n  font-weight: 500;\n}\n\n.chip {\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  display: inline-block;\n\n  &.chip-danger {\n    background: #fee2e2;\n    color: #dc2626;\n  }\n\n  &.chip-warning {\n    background: #fef3c7;\n    color: #d97706;\n  }\n\n  &.chip-success {\n    background: #dcfce7;\n    color: #16a34a;\n  }\n\n  &.chip-gray {\n    background: #f3f4f6;\n    color: #6b7280;\n  }\n\n  &.chip-info {\n    background: #e0f2fe;\n    color: #0284c7;\n  }\n}\n\n.btn-handle-modern {\n  background: linear-gradient(135deg, rgba(255, 105, 0, 0.1), rgba(252, 185, 0, 0.1)) !important;\n  color: #ff6900 !important;\n  font-size: 0.8rem !important;\n  height: 36px !important;\n  padding: 0 14px !important;\n  border-radius: 8px !important;\n  font-weight: 700 !important;\n  transition: all 0.2s ease !important;\n  border: 1px solid rgba(255, 105, 0, 0.2) !important;\n\n  &:hover {\n    background: linear-gradient(135deg, rgba(255, 105, 0, 0.15), rgba(252, 185, 0, 0.15)) !important;\n    box-shadow: 0 4px 12px rgba(255, 105, 0, 0.15) !important;\n  }\n}\n\n.mat-mdc-row.table-row-modern {\n  &:hover {\n    background: linear-gradient(90deg, rgba(255, 105, 0, 0.03), transparent);\n    cursor: pointer;\n  }\n\n  &.selected-row {\n    background: linear-gradient(90deg, rgba(255, 105, 0, 0.08), transparent) !important;\n    border-left: 3px solid #ff6900;\n  }\n}\n\n.empty-state-admin {\n  padding: 60px 40px;\n  text-align: center;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border-top: 1px solid #eee;\n\n  .empty-icon {\n    font-size: 64px;\n    color: #ff6900;\n    opacity: 0.5;\n    margin-bottom: 16px;\n    display: block;\n  }\n\n  .empty-title {\n    font-size: 1.2rem;\n    font-weight: 800;\n    margin: 0 0 8px 0;\n    color: #000;\n  }\n\n  .empty-desc {\n    font-size: 0.9rem;\n    color: #666;\n    margin: 0;\n  }\n}\n\n.paginator-modern {\n  border-top: 1px solid #eee;\n  background: linear-gradient(135deg, #fafafa, #f5f5f5);\n}\n\n.detail-panel-modern {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: fit-content;\n  position: sticky;\n  top: 92px;\n  border: 1px solid #eee;\n  background: #fff;\n}\n\n.panel-header-modern {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px;\n  border-bottom: 1px solid #eee;\n\n  h3 {\n    font-size: 1.1rem;\n    font-weight: 800;\n    margin: 0;\n    color: #000;\n  }\n}\n\n.detail-user-modern {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px 20px;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border-radius: 10px;\n  margin: 0 16px;\n\n  .user-avatar-lg {\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    color: #000;\n    font-size: 1rem;\n    font-weight: 800;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    box-shadow: 0 4px 12px rgba(255, 105, 0, 0.2);\n  }\n\n  strong {\n    font-size: 0.95rem;\n    color: #000;\n    display: block;\n    margin-bottom: 2px;\n  }\n\n  p {\n    font-size: 0.8rem;\n    color: #666;\n    margin: 0;\n  }\n}\n\n.detail-section-modern {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 0 16px;\n}\n\n.detail-row-modern {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 0;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.detail-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #999;\n}\n\n.detail-value {\n  font-size: 0.9rem;\n  color: #000;\n  font-weight: 600;\n}\n\n.description-box-modern {\n  background: linear-gradient(135deg, #f9f9f9, #f5f5f5);\n  border-radius: 10px;\n  padding: 16px;\n  margin: 0 16px;\n\n  .description-text-modern {\n    font-size: 0.9rem;\n    line-height: 1.6;\n    margin: 8px 0 0;\n    color: #333;\n  }\n}\n\n.previous-response-modern {\n  background: linear-gradient(135deg, #fef9e7, #fffbf0);\n  border: 1px solid rgba(255, 180, 0, 0.3);\n  border-radius: 10px;\n  padding: 14px 16px;\n  margin: 0 16px;\n\n  .response-header {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    margin-bottom: 8px;\n\n    .material-icons-round {\n      color: #d97706;\n      font-size: 18px;\n    }\n  }\n\n  .response-text {\n    font-size: 0.9rem;\n    color: #92400e;\n    line-height: 1.6;\n    margin: 0;\n  }\n}\n\n.response-form-modern {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 0 16px;\n\n  .section-title-modern {\n    font-size: 0.9rem;\n    font-weight: 700;\n    margin: 8px 0 4px 0;\n    color: #000;\n  }\n\n  mat-form-field {\n    width: 100%;\n  }\n}\n\n.btn-primary-modern {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 44px !important;\n  border-radius: 10px !important;\n}\n\n.w-full {\n  width: 100% !important;\n}\n\n::ng-deep {\n  .admin-reclamations-wrapper {\n    .mat-mdc-header-cell {\n      background: linear-gradient(135deg, #fafafa, #f5f5f5) !important;\n      border-bottom: 2px solid #eee !important;\n      font-weight: 700;\n      color: #333 !important;\n      font-size: 0.8rem !important;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    .mat-mdc-cell {\n      border-bottom: 1px solid #f0f0f0;\n      padding: 12px 16px !important;\n      font-size: 0.875rem;\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminReclamationsComponent, { className: "AdminReclamationsComponent", filePath: "app\\features\\admin\\reclamations\\admin-reclamations.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=admin-reclamations.component.js.map