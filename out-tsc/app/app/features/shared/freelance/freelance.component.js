import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertService } from '../../../core/services/alert.service';
import { FreelanceService } from '../../../core/services/freelance.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/progress-spinner";
import * as i8 from "@angular/material/tabs";
import * as i9 from "@angular/material/tooltip";
const _forTrack0 = ($index, $item) => $item.id;
function FreelanceComponent_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function FreelanceComponent_For_50_Conditional_11_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sk_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sk_r4);
} }
function FreelanceComponent_For_50_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵrepeaterCreate(1, FreelanceComponent_For_50_Conditional_11_For_2_Template, 2, 1, "span", 41, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.skillsOf(p_r2.requiredSkills, 4));
} }
function FreelanceComponent_For_50_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38)(1, "mat-icon");
    i0.ɵɵtext(2, "event");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 1, p_r2.deadlineDate, "dd/MM/yyyy"), " ");
} }
function FreelanceComponent_For_50_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 31);
    i0.ɵɵlistener("click", function FreelanceComponent_For_50_Template_article_click_0_listener() { const p_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectProject(p_r2)); });
    i0.ɵɵelementStart(1, "div", 32)(2, "span", 33);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 34);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 35);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, FreelanceComponent_For_50_Conditional_11_Template, 3, 0, "div", 36);
    i0.ɵɵelementStart(12, "div", 37)(13, "span", 38)(14, "mat-icon");
    i0.ɵɵtext(15, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 38)(19, "mat-icon");
    i0.ɵɵtext(20, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(22, FreelanceComponent_For_50_Conditional_22_Template, 5, 4, "span", 38);
    i0.ɵɵelementStart(23, "span", 38)(24, "mat-icon");
    i0.ɵɵtext(25, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 39)(28, "span", 40);
    i0.ɵɵtext(29, " Voir le projet ");
    i0.ɵɵelementStart(30, "mat-icon");
    i0.ɵɵtext(31, "arrow_forward");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.statusClass(p_r2.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(p_r2.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r2.bidCount || 0, " offre(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind3(10, 12, p_r2.description, 0, 140), "", p_r2.description.length > 140 ? "..." : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(11, ctx_r2.skillsOf(p_r2.requiredSkills, 4).length ? 11 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(17, 16, p_r2.budgetMin || 0), " - ", p_r2.budgetMax || "?", " EUR ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", p_r2.durationDays || "?", " jours ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(22, p_r2.deadlineDate ? 22 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", p_r2.postedBy.fullName, " ");
} }
function FreelanceComponent_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "mat-icon");
    i0.ɵɵtext(2, "work_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Aucun projet disponible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Essayez un autre filtre ou revenez plus tard pour decouvrir de nouvelles missions.");
    i0.ɵɵelementEnd()();
} }
function FreelanceComponent_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "button", 42);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_52_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.loadMore()); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "expand_more");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Voir plus");
    i0.ɵɵelementEnd()()();
} }
function FreelanceComponent_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function FreelanceComponent_For_57_Conditional_12_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 52);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bid_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(bid_r7.negotiationNote);
} }
function FreelanceComponent_For_57_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 49)(1, "div", 51)(2, "mat-icon");
    i0.ɵɵtext(3, "swap_horiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Contre-offre recue");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, FreelanceComponent_For_57_Conditional_12_Conditional_9_Template, 2, 1, "p", 52);
    i0.ɵɵelementStart(10, "div", 53)(11, "button", 27);
    i0.ɵɵlistener("click", function FreelanceComponent_For_57_Conditional_12_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r6); const bid_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.acceptCounter(bid_r7)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Accepter");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "button", 54);
    i0.ɵɵlistener("click", function FreelanceComponent_For_57_Conditional_12_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r6); const bid_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.declineCounter(bid_r7)); });
    i0.ɵɵelementStart(17, "mat-icon");
    i0.ɵɵtext(18, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Decliner");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const bid_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(8, 3, bid_r7.counterAmount), " EUR pour ", bid_r7.counterDurationDays, " jours");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(9, bid_r7.negotiationNote ? 9 : -1);
} }
function FreelanceComponent_For_57_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "button", 54);
    i0.ɵɵlistener("click", function FreelanceComponent_For_57_Conditional_13_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const bid_r7 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.withdrawBid(bid_r7)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "undo");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Retirer mon offre");
    i0.ɵɵelementEnd()()();
} }
function FreelanceComponent_For_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 24)(1, "div", 43)(2, "div", 44)(3, "span", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 46);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 47);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p", 48);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, FreelanceComponent_For_57_Conditional_12_Template, 21, 5, "div", 49)(13, FreelanceComponent_For_57_Conditional_13_Template, 6, 0, "div", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bid_r7 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngClass", ctx_r2.bidStatusClass(bid_r7.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.bidStatusLabel(bid_r7.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(7, 7, bid_r7.proposedAmount), " EUR");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", bid_r7.proposedDurationDays, " jours");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(bid_r7.coverLetter || "Aucune lettre de motivation ajoutee pour cette offre.");
    i0.ɵɵadvance();
    i0.ɵɵconditional(12, bid_r7.status === "NEGOTIATING" && bid_r7.counterAmount ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, bid_r7.status === "PENDING" || bid_r7.status === "NEGOTIATING" ? 13 : -1);
} }
function FreelanceComponent_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "mat-icon");
    i0.ɵɵtext(2, "gavel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Aucune offre envoyee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Parcourez les projets disponibles et soumettez votre premiere proposition.");
    i0.ɵɵelementEnd()();
} }
function FreelanceComponent_Conditional_71_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 71);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Enregistrement...");
    i0.ɵɵelementEnd();
} }
function FreelanceComponent_Conditional_71_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "save");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.editingProject ? "Mettre a jour" : "Publier");
} }
function FreelanceComponent_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 55);
    i0.ɵɵlistener("ngSubmit", function FreelanceComponent_Conditional_71_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.createProject()); });
    i0.ɵɵelementStart(1, "div", 56)(2, "div")(3, "span", 57);
    i0.ɵɵtext(4, "Edition");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 58)(8, "mat-form-field", 59)(9, "mat-label");
    i0.ɵɵtext(10, "Titre *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-form-field", 59)(13, "mat-label");
    i0.ɵɵtext(14, "Description *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "textarea", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-form-field", 59)(17, "mat-label");
    i0.ɵɵtext(18, "Competences requises");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "mat-form-field", 63)(21, "mat-label");
    i0.ɵɵtext(22, "Duree (jours)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "input", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-form-field", 63)(25, "mat-label");
    i0.ɵɵtext(26, "Date limite");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-form-field", 63)(29, "mat-label");
    i0.ɵɵtext(30, "Budget min (EUR)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "mat-form-field", 63)(33, "mat-label");
    i0.ɵɵtext(34, "Budget max (EUR)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(35, "input", 67);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 68)(37, "button", 69);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_71_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelProjectForm()); });
    i0.ɵɵtext(38, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "button", 70);
    i0.ɵɵtemplate(40, FreelanceComponent_Conditional_71_Conditional_40_Template, 3, 0)(41, FreelanceComponent_Conditional_71_Conditional_41_Template, 4, 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r2.projectForm);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.editingProject ? "Modifier le projet" : "Nouveau projet freelance");
    i0.ɵɵadvance(33);
    i0.ɵɵproperty("disabled", ctx_r2.projectForm.invalid || ctx_r2.creatingProject);
    i0.ɵɵadvance();
    i0.ɵɵconditional(40, ctx_r2.creatingProject ? 40 : 41);
} }
function FreelanceComponent_Conditional_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function FreelanceComponent_For_75_Conditional_11_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sk_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sk_r11);
} }
function FreelanceComponent_For_75_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵrepeaterCreate(1, FreelanceComponent_For_75_Conditional_11_For_2_Template, 2, 1, "span", 41, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.skillsOf(p_r12.requiredSkills, 5));
} }
function FreelanceComponent_For_75_Conditional_35_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 77)(1, "mat-icon");
    i0.ɵɵtext(2, "inbox");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Aucune offre recue pour ce projet.");
    i0.ɵɵelementEnd()();
} }
function FreelanceComponent_For_75_Conditional_35_For_3_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 82);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bid_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind3(2, 2, bid_r13.coverLetter, 0, 180), "", bid_r13.coverLetter.length > 180 ? "..." : "", "");
} }
function FreelanceComponent_For_75_Conditional_35_For_3_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 83)(1, "button", 27);
    i0.ɵɵlistener("click", function FreelanceComponent_For_75_Conditional_35_For_3_Conditional_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const bid_r13 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.acceptBid(bid_r13)); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Accepter");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 54);
    i0.ɵɵlistener("click", function FreelanceComponent_For_75_Conditional_35_For_3_Conditional_14_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r14); const bid_r13 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.rejectBid(bid_r13)); });
    i0.ɵɵelementStart(7, "mat-icon");
    i0.ɵɵtext(8, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Rejeter");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 69);
    i0.ɵɵlistener("click", function FreelanceComponent_For_75_Conditional_35_For_3_Conditional_14_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r14); const bid_r13 = i0.ɵɵnextContext().$implicit; const p_r12 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.openNegotiateDialog(bid_r13, p_r12.id)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "swap_horiz");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Negocier");
    i0.ɵɵelementEnd()()();
} }
function FreelanceComponent_For_75_Conditional_35_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78)(1, "div", 79)(2, "div", 80)(3, "div", 81);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "number");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "span", 45);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, FreelanceComponent_For_75_Conditional_35_For_3_Conditional_13_Template, 3, 6, "p", 82)(14, FreelanceComponent_For_75_Conditional_35_For_3_Conditional_14_Template, 16, 0, "div", 83);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const bid_r13 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.initials(bid_r13.freelancer.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(bid_r13.freelancer.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(10, 8, bid_r13.proposedAmount), " EUR / ", bid_r13.proposedDurationDays, " jours");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.bidStatusClass(bid_r13.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.bidStatusLabel(bid_r13.status));
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, bid_r13.coverLetter ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(14, bid_r13.status === "PENDING" ? 14 : -1);
} }
function FreelanceComponent_For_75_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵtemplate(1, FreelanceComponent_For_75_Conditional_35_Conditional_1_Template, 5, 0, "div", 77);
    i0.ɵɵrepeaterCreate(2, FreelanceComponent_For_75_Conditional_35_For_3_Template, 15, 10, "div", 78, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx_r2.selectedProjectBids[p_r12.id].length === 0 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.selectedProjectBids[p_r12.id]);
} }
function FreelanceComponent_For_75_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 29)(1, "div", 32)(2, "span", 33);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 34);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 35);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "slice");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, FreelanceComponent_For_75_Conditional_11_Template, 3, 0, "div", 36);
    i0.ɵɵelementStart(12, "div", 37)(13, "span", 38)(14, "mat-icon");
    i0.ɵɵtext(15, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span", 38)(19, "mat-icon");
    i0.ɵɵtext(20, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 72)(23, "div", 73)(24, "button", 74);
    i0.ɵɵlistener("click", function FreelanceComponent_For_75_Template_button_click_24_listener() { const p_r12 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.editProject(p_r12)); });
    i0.ɵɵelementStart(25, "mat-icon");
    i0.ɵɵtext(26, "edit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 75);
    i0.ɵɵlistener("click", function FreelanceComponent_For_75_Template_button_click_27_listener() { const p_r12 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.deleteProject(p_r12)); });
    i0.ɵɵelementStart(28, "mat-icon");
    i0.ɵɵtext(29, "delete");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "button", 42);
    i0.ɵɵlistener("click", function FreelanceComponent_For_75_Template_button_click_30_listener() { const p_r12 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.viewBids(p_r12)); });
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(35, FreelanceComponent_For_75_Conditional_35_Template, 4, 1, "div", 76);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const p_r12 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngClass", ctx_r2.statusClass(p_r12.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(p_r12.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", p_r12.bidCount || 0, " offre(s) recue(s)");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(p_r12.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind3(10, 13, p_r12.description, 0, 120), "", p_r12.description.length > 120 ? "..." : "", "");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(11, ctx_r2.skillsOf(p_r12.requiredSkills, 5).length ? 11 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(17, 17, p_r12.budgetMin || 0), " - ", p_r12.budgetMax || "?", " EUR ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", p_r12.durationDays || "?", " jours ");
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r2.selectedProjectBids[p_r12.id] ? "expand_less" : "visibility");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedProjectBids[p_r12.id] ? "Masquer les offres" : "Voir les offres");
    i0.ɵɵadvance();
    i0.ɵɵconditional(35, ctx_r2.selectedProjectBids[p_r12.id] ? 35 : -1);
} }
function FreelanceComponent_Conditional_76_Conditional_15_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sk_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sk_r16);
} }
function FreelanceComponent_Conditional_76_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88);
    i0.ɵɵrepeaterCreate(1, FreelanceComponent_Conditional_76_Conditional_15_For_2_Template, 2, 1, "span", 41, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.skillsOf(ctx_r2.selectedProject.requiredSkills));
} }
function FreelanceComponent_Conditional_76_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 38)(1, "mat-icon");
    i0.ɵɵtext(2, "event");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 1, ctx_r2.selectedProject.deadlineDate, "dd/MM/yyyy"), " ");
} }
function FreelanceComponent_Conditional_76_Conditional_31_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 92);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_76_Conditional_31_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.showBidForm = true); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Soumettre une offre");
    i0.ɵɵelementEnd()();
} }
function FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 71);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Envoi...");
    i0.ɵɵelementEnd();
} }
function FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "bolt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Soumettre");
    i0.ɵɵelementEnd();
} }
function FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 93);
    i0.ɵɵlistener("ngSubmit", function FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.submitBid()); });
    i0.ɵɵelementStart(1, "h4");
    i0.ɵɵtext(2, "Mon offre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 58)(4, "mat-form-field", 63)(5, "mat-label");
    i0.ɵɵtext(6, "Montant propose (EUR) *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 63)(9, "mat-label");
    i0.ɵɵtext(10, "Duree proposee (jours) *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-form-field", 59)(13, "mat-label");
    i0.ɵɵtext(14, "Lettre de motivation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "textarea", 96);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 68)(17, "button", 69);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r18); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.showBidForm = false); });
    i0.ɵɵtext(18, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "button", 70);
    i0.ɵɵtemplate(20, FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Conditional_20_Template, 3, 0)(21, FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Conditional_21_Template, 4, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r2.bidForm);
    i0.ɵɵadvance(19);
    i0.ɵɵproperty("disabled", ctx_r2.bidForm.invalid || ctx_r2.submittingBid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(20, ctx_r2.submittingBid ? 20 : 21);
} }
function FreelanceComponent_Conditional_76_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 90)(1, "h4");
    i0.ɵɵtext(2, "Proposer votre offre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Envoyez une proposition claire avec votre montant, votre delai et un court message de motivation.");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(5, FreelanceComponent_Conditional_76_Conditional_31_Conditional_5_Template, 5, 0, "button", 91)(6, FreelanceComponent_Conditional_76_Conditional_31_Conditional_6_Template, 22, 3);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(5, !ctx_r2.showBidForm ? 5 : 6);
} }
function FreelanceComponent_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_76_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeProject()); });
    i0.ɵɵelementStart(1, "div", 85);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_76_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r15); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 86);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_76_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r15); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeProject()); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 87)(6, "div")(7, "span", 57);
    i0.ɵɵtext(8, "Projet selectionne");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "span", 33);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, FreelanceComponent_Conditional_76_Conditional_15_Template, 3, 0, "div", 88);
    i0.ɵɵelementStart(16, "div", 89)(17, "span", 38)(18, "mat-icon");
    i0.ɵɵtext(19, "payments");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 38)(23, "mat-icon");
    i0.ɵɵtext(24, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, FreelanceComponent_Conditional_76_Conditional_26_Template, 5, 4, "span", 38);
    i0.ɵɵelementStart(27, "span", 38)(28, "mat-icon");
    i0.ɵɵtext(29, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(31, FreelanceComponent_Conditional_76_Conditional_31_Template, 7, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r2.selectedProject.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.selectedProject.description);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r2.statusClass(ctx_r2.selectedProject.status));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(ctx_r2.selectedProject.status));
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, ctx_r2.skillsOf(ctx_r2.selectedProject.requiredSkills).length ? 15 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(21, 11, ctx_r2.selectedProject.budgetMin || 0), " - ", ctx_r2.selectedProject.budgetMax || "?", " EUR ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.selectedProject.durationDays || "?", " jours ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(26, ctx_r2.selectedProject.deadlineDate ? 26 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.selectedProject.postedBy.fullName, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(31, ctx_r2.selectedProject.postedBy.id !== (ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.id) && ctx_r2.selectedProject.status === "OPEN" ? 31 : -1);
} }
function FreelanceComponent_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_77_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelNegotiate()); });
    i0.ɵɵelementStart(1, "div", 97);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_77_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r19); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 86);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_77_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelNegotiate()); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 98)(6, "div")(7, "span", 57);
    i0.ɵɵtext(8, "Negociation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h3");
    i0.ɵɵtext(10, "Envoyer une contre-offre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Ajustez le montant, la duree et ajoutez une note claire pour cadrer la suite.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "form", 99);
    i0.ɵɵlistener("ngSubmit", function FreelanceComponent_Conditional_77_Template_form_ngSubmit_13_listener() { i0.ɵɵrestoreView(_r19); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sendCounterOffer()); });
    i0.ɵɵelementStart(14, "div", 58)(15, "mat-form-field", 63)(16, "mat-label");
    i0.ɵɵtext(17, "Contre-montant (EUR)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 100);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "mat-form-field", 63)(20, "mat-label");
    i0.ɵɵtext(21, "Contre-duree (jours)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(22, "input", 101);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "mat-form-field", 59)(24, "mat-label");
    i0.ɵɵtext(25, "Note de negociation");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "textarea", 102);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div", 68)(28, "button", 69);
    i0.ɵɵlistener("click", function FreelanceComponent_Conditional_77_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r19); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.cancelNegotiate()); });
    i0.ɵɵtext(29, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 103)(31, "mat-icon");
    i0.ɵɵtext(32, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34, "Envoyer");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("formGroup", ctx_r2.negotiateForm);
} }
export class FreelanceComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.freelanceSvc = inject(FreelanceService);
        this.alertSvc = inject(AlertService);
        this.fb = inject(FormBuilder);
        this.activeTab = 0;
        this.projects = [];
        this.myProjects = [];
        this.myBids = [];
        this.selectedProjectBids = {};
        this.loadingProjects = true;
        this.loadingMyProjects = false;
        this.loadingBids = false;
        this.creatingProject = false;
        this.submittingBid = false;
        this.filterTitle = '';
        this.filterSkills = '';
        this.page = 0;
        this.lastPage = false;
        this.showProjectForm = false;
        this.showBidForm = false;
        this.editingProject = null;
        this.selectedProject = null;
        this.negotiatingBid = null;
        this.negotiatingProjectId = null;
        this.projectForm = this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            requiredSkills: [''],
            durationDays: [null],
            budgetMin: [null],
            budgetMax: [null],
            deadlineDate: ['']
        });
        this.bidForm = this.fb.group({
            proposedAmount: [null, [Validators.required, Validators.min(1)]],
            proposedDurationDays: [null, [Validators.required, Validators.min(1)]],
            coverLetter: ['']
        });
        this.negotiateForm = this.fb.group({
            counterAmount: [null],
            counterDurationDays: [null],
            negotiationNote: ['']
        });
    }
    ngOnInit() {
        this.loadProjects();
    }
    onTabChange(idx) {
        this.activeTab = idx;
        if (idx === 1 && this.myBids.length === 0)
            this.loadMyBids();
        if (idx === 2 && this.myProjects.length === 0)
            this.loadMyProjects();
    }
    search() {
        this.page = 0;
        this.projects = [];
        this.loadProjects();
    }
    loadMore() {
        this.page++;
        this.loadProjects();
    }
    loadProjects() {
        this.loadingProjects = true;
        this.freelanceSvc.search(this.filterTitle || undefined, this.filterSkills || undefined, this.page).subscribe({
            next: res => {
                this.projects.push(...res.data.content);
                this.lastPage = res.data.last;
                this.loadingProjects = false;
            },
            error: () => { this.loadingProjects = false; }
        });
    }
    loadMyBids() {
        this.loadingBids = true;
        this.freelanceSvc.getMyBids().subscribe({
            next: res => {
                this.myBids = res.data;
                this.loadingBids = false;
            },
            error: () => { this.loadingBids = false; }
        });
    }
    loadMyProjects() {
        this.loadingMyProjects = true;
        this.freelanceSvc.getMyProjects().subscribe({
            next: res => {
                this.myProjects = res.data.content;
                this.loadingMyProjects = false;
            },
            error: () => { this.loadingMyProjects = false; }
        });
    }
    toggleProjectForm() {
        if (this.showProjectForm && !this.editingProject) {
            this.cancelProjectForm();
            return;
        }
        this.showProjectForm = true;
        this.editingProject = null;
        this.projectForm.reset({
            title: '',
            description: '',
            requiredSkills: '',
            durationDays: null,
            budgetMin: null,
            budgetMax: null,
            deadlineDate: ''
        });
    }
    createProject() {
        if (this.projectForm.invalid)
            return;
        this.creatingProject = true;
        const req = { ...this.projectForm.value };
        const obs = this.editingProject
            ? this.freelanceSvc.updateProject(this.editingProject.id, req)
            : this.freelanceSvc.createProject(req);
        obs.subscribe({
            next: res => {
                if (this.editingProject) {
                    const i = this.myProjects.findIndex(p => p.id === this.editingProject.id);
                    if (i >= 0)
                        this.myProjects[i] = res.data;
                }
                else {
                    this.myProjects.unshift(res.data);
                }
                this.cancelProjectForm();
                this.creatingProject = false;
                this.alertSvc.success(this.editingProject ? 'Projet mis a jour' : 'Projet publie');
            },
            error: () => { this.creatingProject = false; }
        });
    }
    editProject(p) {
        this.editingProject = p;
        this.showProjectForm = true;
        this.projectForm.patchValue({
            title: p.title,
            description: p.description,
            requiredSkills: p.requiredSkills,
            durationDays: p.durationDays ?? null,
            budgetMin: p.budgetMin ?? null,
            budgetMax: p.budgetMax ?? null,
            deadlineDate: p.deadlineDate ?? ''
        });
    }
    cancelProjectForm() {
        this.showProjectForm = false;
        this.editingProject = null;
        this.projectForm.reset({
            title: '',
            description: '',
            requiredSkills: '',
            durationDays: null,
            budgetMin: null,
            budgetMax: null,
            deadlineDate: ''
        });
    }
    deleteProject(p) {
        this.freelanceSvc.deleteProject(p.id).subscribe(() => {
            this.myProjects = this.myProjects.filter(pr => pr.id !== p.id);
            this.alertSvc.success('Projet supprime');
        });
    }
    viewBids(p) {
        if (this.selectedProjectBids[p.id]) {
            delete this.selectedProjectBids[p.id];
            return;
        }
        this.freelanceSvc.getProjectBids(p.id).subscribe(res => { this.selectedProjectBids[p.id] = res.data; });
    }
    selectProject(p) {
        this.selectedProject = p;
        this.showBidForm = false;
    }
    closeProject() {
        this.selectedProject = null;
        this.showBidForm = false;
    }
    submitBid() {
        if (this.bidForm.invalid || !this.selectedProject)
            return;
        this.submittingBid = true;
        this.freelanceSvc.submitBid(this.selectedProject.id, this.bidForm.value).subscribe({
            next: res => {
                this.myBids.unshift(res.data);
                this.showBidForm = false;
                this.submittingBid = false;
                this.alertSvc.success('Offre soumise avec succes');
                this.closeProject();
                if (this.activeTab !== 1)
                    this.activeTab = 1;
            },
            error: err => {
                this.submittingBid = false;
                this.alertSvc.error('Erreur', err.error?.message || 'Erreur');
            }
        });
    }
    withdrawBid(bid) {
        this.freelanceSvc.withdrawBid(bid.id).subscribe(() => {
            bid.status = 'WITHDRAWN';
            this.alertSvc.success('Offre retiree');
        });
    }
    acceptBid(bid) {
        this.freelanceSvc.negotiate(bid.id, { status: 'ACCEPTED' }).subscribe(res => {
            bid.status = res.data.status;
            this.alertSvc.success('Offre acceptee');
        });
    }
    rejectBid(bid) {
        this.freelanceSvc.negotiate(bid.id, { status: 'REJECTED' }).subscribe(res => {
            bid.status = res.data.status;
        });
    }
    openNegotiateDialog(bid, projectId) {
        this.negotiatingBid = bid;
        this.negotiatingProjectId = projectId;
    }
    cancelNegotiate() {
        this.negotiatingBid = null;
        this.negotiatingProjectId = null;
        this.negotiateForm.reset();
    }
    sendCounterOffer() {
        if (!this.negotiatingBid || this.negotiatingProjectId === null)
            return;
        const req = { status: 'NEGOTIATING', ...this.negotiateForm.value };
        this.freelanceSvc.negotiate(this.negotiatingBid.id, req).subscribe(res => {
            this.negotiatingBid.status = res.data.status;
            const bids = this.selectedProjectBids[this.negotiatingProjectId];
            if (bids) {
                const i = bids.findIndex(b => b.id === res.data.id);
                if (i >= 0)
                    bids[i] = res.data;
            }
            this.cancelNegotiate();
            this.alertSvc.success('Contre-offre envoyee');
        });
    }
    acceptCounter(bid) {
        this.freelanceSvc.negotiate(bid.id, { status: 'ACCEPTED' }).subscribe(res => {
            bid.status = res.data.status;
            this.alertSvc.success('Contre-offre acceptee');
        });
    }
    declineCounter(bid) {
        this.freelanceSvc.negotiate(bid.id, { status: 'REJECTED' }).subscribe(() => { bid.status = 'REJECTED'; });
    }
    skillsOf(raw, limit) {
        const items = (raw || '')
            .split(',')
            .map(skill => skill.trim())
            .filter(Boolean);
        return typeof limit === 'number' ? items.slice(0, limit) : items;
    }
    initials(name) {
        return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    statusLabel(status) {
        return {
            OPEN: 'Ouvert',
            IN_PROGRESS: 'En cours',
            COMPLETED: 'Termine',
            CANCELLED: 'Annule'
        }[status] ?? status;
    }
    bidStatusLabel(status) {
        return {
            PENDING: 'En attente',
            ACCEPTED: 'Acceptee',
            REJECTED: 'Rejetee',
            NEGOTIATING: 'Negociation',
            WITHDRAWN: 'Retiree'
        }[status] ?? status;
    }
    statusClass(s) {
        return {
            'status-open': s === 'OPEN',
            'status-in_progress': s === 'IN_PROGRESS',
            'status-completed': s === 'COMPLETED',
            'status-cancelled': s === 'CANCELLED'
        };
    }
    bidStatusClass(s) {
        return {
            'bid-pending': s === 'PENDING',
            'bid-accepted': s === 'ACCEPTED',
            'bid-rejected': s === 'REJECTED',
            'bid-negotiating': s === 'NEGOTIATING',
            'bid-withdrawn': s === 'WITHDRAWN'
        };
    }
    static { this.ɵfac = function FreelanceComponent_Factory(t) { return new (t || FreelanceComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FreelanceComponent, selectors: [["app-freelance"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 78, vars: 17, consts: [[1, "page-wrapper"], [1, "hero-card"], [1, "hero-copy"], [1, "hero-eyebrow"], [1, "page-title"], [1, "page-subtitle"], [1, "hero-stats"], [1, "stat-pill"], [1, "stat-pill", "accent"], [1, "freelance-tabs", 3, "selectedIndexChange", "selectedIndex"], ["label", "Explorer"], [1, "surface-card", "filter-panel"], [1, "panel-copy"], [1, "filters-row"], ["appearance", "outline", 1, "filter-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "btn-primary", "btn-search", 3, "click"], [1, "center-spinner"], [1, "projects-grid"], [1, "project-card", "clickable-card"], [1, "surface-card", "empty-state"], [1, "load-more"], ["label", "Mes offres"], [1, "stack-list"], [1, "surface-card", "bid-card"], ["label", "Mes projets"], [1, "my-projects-header"], ["type", "button", 1, "btn-primary", 3, "click"], [1, "surface-card", "project-form", 3, "formGroup"], [1, "surface-card", "project-card", "my-project"], [1, "detail-overlay"], [1, "project-card", "clickable-card", 3, "click"], [1, "project-card-top"], [1, "project-status-chip", 3, "ngClass"], [1, "mini-counter"], [1, "project-desc"], [1, "skills-row"], [1, "project-meta-grid"], [1, "meta-chip"], [1, "project-footer"], [1, "project-cta"], [1, "skill-chip"], ["type", "button", 1, "btn-outline", 3, "click"], [1, "bid-header"], [1, "bid-header-left"], [1, "bid-status", 3, "ngClass"], [1, "bid-amount-pill"], [1, "bid-duration"], [1, "bid-text"], [1, "counter-offer"], [1, "bid-footer"], [1, "counter-header"], [1, "counter-note"], [1, "button-row"], ["type", "button", 1, "btn-danger-outline", 3, "click"], [1, "surface-card", "project-form", 3, "ngSubmit", "formGroup"], [1, "form-head"], [1, "section-eyebrow"], [1, "form-grid"], ["appearance", "outline", 1, "full-width", "form-span-2"], ["matInput", "", "formControlName", "title"], ["matInput", "", "formControlName", "description", "rows", "5"], ["matInput", "", "formControlName", "requiredSkills", "placeholder", "Angular, Java, UX, SQL"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "number", "formControlName", "durationDays"], ["matInput", "", "type", "date", "formControlName", "deadlineDate"], ["matInput", "", "type", "number", "formControlName", "budgetMin"], ["matInput", "", "type", "number", "formControlName", "budgetMax"], [1, "form-actions"], ["type", "button", 1, "btn-soft", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["diameter", "18"], [1, "project-actions-row"], [1, "inline-actions"], ["type", "button", "matTooltip", "Modifier", 1, "icon-action", 3, "click"], ["type", "button", "matTooltip", "Supprimer", 1, "icon-action", "danger", 3, "click"], [1, "bids-list"], [1, "empty-inline"], [1, "bid-item"], [1, "bid-item-main"], [1, "bid-user"], [1, "user-badge"], [1, "bid-note"], [1, "button-row", "compact"], [1, "detail-overlay", 3, "click"], [1, "detail-panel", 3, "click"], ["type", "button", "mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "detail-header"], [1, "skills-row", "detail-skills"], [1, "detail-meta-grid"], [1, "detail-callout"], ["type", "button", 1, "btn-primary", "detail-action"], ["type", "button", 1, "btn-primary", "detail-action", 3, "click"], [1, "surface-card", "bid-form", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "number", "formControlName", "proposedAmount"], ["matInput", "", "type", "number", "formControlName", "proposedDurationDays"], ["matInput", "", "formControlName", "coverLetter", "rows", "4"], [1, "detail-panel", "compact-panel", 3, "click"], [1, "detail-header", "compact"], [1, "surface-card", "bid-form", "no-shadow", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "number", "formControlName", "counterAmount"], ["matInput", "", "type", "number", "formControlName", "counterDurationDays"], ["matInput", "", "formControlName", "negotiationNote", "rows", "3"], ["type", "submit", 1, "btn-primary"]], template: function FreelanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Projets freelance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1", 4);
            i0.ɵɵtext(6, "Espace Freelance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, "Trouvez des projets, soumettez vos offres et gerez vos negociations dans une interface plus claire et plus moderne.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "div", 7)(11, "strong");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14, "projets explores");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 8)(16, "strong");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span");
            i0.ɵɵtext(19, "offres envoyees");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "div", 7)(21, "strong");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24, "projets publies");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(25, "mat-tab-group", 9);
            i0.ɵɵlistener("selectedIndexChange", function FreelanceComponent_Template_mat_tab_group_selectedIndexChange_25_listener($event) { return ctx.onTabChange($event); });
            i0.ɵɵelementStart(26, "mat-tab", 10)(27, "div", 11)(28, "div", 12)(29, "h3");
            i0.ɵɵtext(30, "Recherche de projets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "p");
            i0.ɵɵtext(32, "Filtrez rapidement les projets par titre et competences pour trouver les missions les plus pertinentes.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div", 13)(34, "mat-form-field", 14)(35, "mat-label");
            i0.ɵɵtext(36, "Titre du projet");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function FreelanceComponent_Template_input_ngModelChange_37_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filterTitle, $event) || (ctx.filterTitle = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function FreelanceComponent_Template_input_keyup_enter_37_listener() { return ctx.search(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "mat-form-field", 14)(39, "mat-label");
            i0.ɵɵtext(40, "Competences");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "input", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function FreelanceComponent_Template_input_ngModelChange_41_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.filterSkills, $event) || (ctx.filterSkills = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function FreelanceComponent_Template_input_keyup_enter_41_listener() { return ctx.search(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(42, "button", 16);
            i0.ɵɵlistener("click", function FreelanceComponent_Template_button_click_42_listener() { return ctx.search(); });
            i0.ɵɵelementStart(43, "mat-icon");
            i0.ɵɵtext(44, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "span");
            i0.ɵɵtext(46, "Rechercher");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(47, FreelanceComponent_Conditional_47_Template, 2, 0, "div", 17);
            i0.ɵɵelementStart(48, "div", 18);
            i0.ɵɵrepeaterCreate(49, FreelanceComponent_For_50_Template, 32, 18, "article", 19, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(51, FreelanceComponent_Conditional_51_Template, 7, 0, "div", 20)(52, FreelanceComponent_Conditional_52_Template, 6, 0, "div", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "mat-tab", 22);
            i0.ɵɵtemplate(54, FreelanceComponent_Conditional_54_Template, 2, 0, "div", 17);
            i0.ɵɵelementStart(55, "div", 23);
            i0.ɵɵrepeaterCreate(56, FreelanceComponent_For_57_Template, 14, 9, "article", 24, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(58, FreelanceComponent_Conditional_58_Template, 7, 0, "div", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "mat-tab", 25)(60, "div", 26)(61, "div")(62, "h3");
            i0.ɵɵtext(63, "Gestion de mes projets");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "p");
            i0.ɵɵtext(65, "Publiez une mission, suivez les offres recues et negociez depuis le meme espace.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(66, "button", 27);
            i0.ɵɵlistener("click", function FreelanceComponent_Template_button_click_66_listener() { return ctx.toggleProjectForm(); });
            i0.ɵɵelementStart(67, "mat-icon");
            i0.ɵɵtext(68);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "span");
            i0.ɵɵtext(70);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(71, FreelanceComponent_Conditional_71_Template, 42, 4, "form", 28)(72, FreelanceComponent_Conditional_72_Template, 2, 0, "div", 17);
            i0.ɵɵelementStart(73, "div", 23);
            i0.ɵɵrepeaterCreate(74, FreelanceComponent_For_75_Template, 36, 19, "article", 29, _forTrack0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵtemplate(76, FreelanceComponent_Conditional_76_Template, 32, 13, "div", 30)(77, FreelanceComponent_Conditional_77_Template, 35, 1, "div", 30);
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.projects.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.myBids.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.myProjects.length);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("selectedIndex", ctx.activeTab);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filterTitle);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.filterSkills);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(47, ctx.loadingProjects ? 47 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.projects);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(51, !ctx.loadingProjects && ctx.projects.length === 0 ? 51 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(52, !ctx.loadingProjects && !ctx.lastPage ? 52 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(54, ctx.loadingBids ? 54 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.myBids);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(58, !ctx.loadingBids && ctx.myBids.length === 0 ? 58 : -1);
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.showProjectForm && !ctx.editingProject ? "close" : "add");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.showProjectForm && !ctx.editingProject ? "Fermer" : "Publier un projet");
            i0.ɵɵadvance();
            i0.ɵɵconditional(71, ctx.showProjectForm ? 71 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(72, ctx.loadingMyProjects ? 72 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.myProjects);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(76, ctx.selectedProject ? 76 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(77, ctx.negotiatingBid ? 77 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.SlicePipe, i1.DecimalPipe, i1.DatePipe, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, MatButtonModule, i3.MatIconButton, MatIconModule, i4.MatIcon, MatFormFieldModule, i5.MatFormField, i5.MatLabel, MatInputModule, i6.MatInput, MatMenuModule, MatProgressSpinnerModule, i7.MatProgressSpinner, MatTabsModule, i8.MatTab, i8.MatTabGroup, MatChipsModule, MatTooltipModule, i9.MatTooltip], styles: ["[_nghost-%COMP%] {\n      --accent: #ff8c00;\n      --accent-dark: #e67600;\n      --accent-light: #ffb347;\n      --accent-soft: rgba(255, 140, 0, 0.1);\n      --surface: #fffaf4;\n      --surface-strong: #fff3df;\n      --ink: #1f2937;\n      --muted: #6b7280;\n      --line: rgba(31, 41, 55, 0.08);\n      --shadow-soft: 0 14px 32px rgba(15, 23, 42, 0.08);\n      --shadow-strong: 0 22px 40px rgba(255, 140, 0, 0.12);\n      --success-bg: #dcfce7;\n      --success-text: #166534;\n      --info-bg: #dbeafe;\n      --info-text: #1d4ed8;\n      --warn-bg: #fef3c7;\n      --warn-text: #b45309;\n      --danger-bg: #fee2e2;\n      --danger-text: #b91c1c;\n      --neutral-bg: #f3f4f6;\n      --neutral-text: #4b5563;\n    }\n\n    .page-wrapper[_ngcontent-%COMP%] {\n      padding: 24px;\n      max-width: 1240px;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: column;\n      gap: 22px;\n      background:\n        radial-gradient(circle at top right, rgba(255, 179, 71, 0.14), transparent 24%),\n        linear-gradient(180deg, #fffdf9 0%, #fff7ef 100%);\n      min-height: 100vh;\n    }\n\n    .hero-card[_ngcontent-%COMP%], .surface-card[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%], .detail-panel[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.96);\n      border: 1px solid var(--line);\n      box-shadow: var(--shadow-soft);\n      backdrop-filter: blur(12px);\n    }\n\n    .hero-card[_ngcontent-%COMP%] {\n      border-radius: 28px;\n      padding: 28px;\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 22px;\n      background:\n        linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.03)),\n        #fff;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .hero-card[_ngcontent-%COMP%]::after {\n      content: '';\n      position: absolute;\n      inset: auto -48px -48px auto;\n      width: 180px;\n      height: 180px;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(255, 179, 71, 0.28), transparent 65%);\n      pointer-events: none;\n    }\n\n    .hero-copy[_ngcontent-%COMP%] {\n      position: relative;\n      z-index: 1;\n      max-width: 640px;\n    }\n\n    .hero-eyebrow[_ngcontent-%COMP%], .section-eyebrow[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      padding: 7px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.12);\n      color: var(--accent-dark);\n      font-size: 0.76rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n    }\n\n    .page-title[_ngcontent-%COMP%] {\n      font-size: clamp(1.9rem, 3vw, 2.5rem);\n      font-weight: 800;\n      color: var(--ink);\n      margin: 12px 0 8px;\n      line-height: 1.1;\n    }\n\n    .page-subtitle[_ngcontent-%COMP%] {\n      color: var(--muted);\n      margin: 0;\n      line-height: 1.65;\n      font-size: 0.97rem;\n    }\n\n    .hero-stats[_ngcontent-%COMP%] {\n      display: grid;\n      gap: 12px;\n      min-width: 230px;\n      position: relative;\n      z-index: 1;\n    }\n\n    .stat-pill[_ngcontent-%COMP%] {\n      padding: 16px 18px;\n      border-radius: 20px;\n      background: rgba(255, 255, 255, 0.92);\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      box-shadow: 0 10px 22px rgba(255, 140, 0, 0.08);\n    }\n\n    .stat-pill.accent[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 179, 71, 0.08));\n    }\n\n    .stat-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 1.28rem;\n      margin-bottom: 4px;\n      color: var(--ink);\n    }\n\n    .stat-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      display: block;\n      color: var(--muted);\n      font-size: 0.84rem;\n    }\n\n    .surface-card[_ngcontent-%COMP%] {\n      border-radius: 24px;\n      padding: 22px;\n    }\n\n    .filter-panel[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 18px;\n      margin-top: 18px;\n    }\n\n    .panel-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .my-projects-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .form-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0 0 6px;\n      color: var(--ink);\n      font-size: 1.16rem;\n    }\n\n    .panel-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .my-projects-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.6;\n    }\n\n    .filters-row[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;\n      gap: 12px;\n      align-items: center;\n    }\n\n    .filter-field[_ngcontent-%COMP%], .full-width[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .btn-primary[_ngcontent-%COMP%], .btn-outline[_ngcontent-%COMP%], .btn-soft[_ngcontent-%COMP%], .btn-danger-outline[_ngcontent-%COMP%] {\n      border-radius: 14px;\n      font-weight: 700;\n      border: 1px solid transparent;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n      text-decoration: none;\n      min-height: 46px;\n      padding: 0 18px;\n      font-size: 0.92rem;\n    }\n\n    .btn-primary[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, var(--accent), var(--accent-dark));\n      color: #fff;\n      box-shadow: 0 14px 28px rgba(255, 140, 0, 0.22);\n    }\n\n    .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 18px 34px rgba(255, 140, 0, 0.28);\n    }\n\n    .btn-primary[_ngcontent-%COMP%]:disabled {\n      opacity: 0.65;\n      cursor: not-allowed;\n      box-shadow: none;\n    }\n\n    .btn-primary[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n      --mdc-circular-progress-active-indicator-color: #fff;\n    }\n\n    .btn-outline[_ngcontent-%COMP%] {\n      background: #fff;\n      color: var(--accent-dark);\n      border-color: rgba(255, 140, 0, 0.22);\n      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.08);\n    }\n\n    .btn-outline[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.08);\n    }\n\n    .btn-soft[_ngcontent-%COMP%] {\n      background: #fff;\n      color: var(--muted);\n      border-color: rgba(31, 41, 55, 0.12);\n    }\n\n    .btn-soft[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: #f8fafc;\n      color: var(--ink);\n    }\n\n    .btn-danger-outline[_ngcontent-%COMP%] {\n      background: #fff;\n      color: var(--danger-text);\n      border-color: rgba(185, 28, 28, 0.18);\n    }\n\n    .btn-danger-outline[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: rgba(185, 28, 28, 0.06);\n    }\n\n    .btn-search[_ngcontent-%COMP%] {\n      min-width: 160px;\n    }\n\n    .projects-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\n      gap: 18px;\n      padding: 18px 0 8px;\n    }\n\n    .project-card[_ngcontent-%COMP%] {\n      border-radius: 24px;\n      padding: 22px;\n      position: relative;\n      overflow: hidden;\n      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;\n    }\n\n    .project-card[_ngcontent-%COMP%]::before {\n      content: '';\n      position: absolute;\n      inset: 0 0 auto 0;\n      height: 4px;\n      background: linear-gradient(90deg, var(--accent), var(--accent-light));\n      opacity: 0.85;\n    }\n\n    .project-card[_ngcontent-%COMP%]:hover {\n      transform: translateY(-4px);\n      box-shadow: var(--shadow-strong);\n      border-color: rgba(255, 140, 0, 0.14);\n    }\n\n    .clickable-card[_ngcontent-%COMP%] {\n      cursor: pointer;\n    }\n\n    .project-card.my-project[_ngcontent-%COMP%] {\n      cursor: default;\n    }\n\n    .project-card-top[_ngcontent-%COMP%], .project-actions-row[_ngcontent-%COMP%], .bid-header[_ngcontent-%COMP%], .bid-item-main[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      flex-wrap: wrap;\n    }\n\n    .project-status-chip[_ngcontent-%COMP%], .bid-status[_ngcontent-%COMP%], .mini-counter[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 7px 12px;\n      border-radius: 999px;\n      font-size: 0.76rem;\n      font-weight: 700;\n      letter-spacing: 0.03em;\n    }\n\n    .mini-counter[_ngcontent-%COMP%] {\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--accent-dark);\n    }\n\n    .status-open[_ngcontent-%COMP%] { background: var(--success-bg); color: var(--success-text); }\n    .status-in_progress[_ngcontent-%COMP%] { background: var(--info-bg); color: var(--info-text); }\n    .status-completed[_ngcontent-%COMP%] { background: var(--neutral-bg); color: var(--neutral-text); }\n    .status-cancelled[_ngcontent-%COMP%] { background: var(--danger-bg); color: var(--danger-text); }\n\n    .bid-pending[_ngcontent-%COMP%] { background: var(--warn-bg); color: var(--warn-text); }\n    .bid-accepted[_ngcontent-%COMP%] { background: var(--success-bg); color: var(--success-text); }\n    .bid-rejected[_ngcontent-%COMP%] { background: var(--danger-bg); color: var(--danger-text); }\n    .bid-negotiating[_ngcontent-%COMP%] { background: var(--info-bg); color: var(--info-text); }\n    .bid-withdrawn[_ngcontent-%COMP%] { background: var(--neutral-bg); color: var(--neutral-text); }\n\n    .project-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 16px 0 10px;\n      font-size: 1.08rem;\n      color: var(--ink);\n      line-height: 1.35;\n    }\n\n    .project-desc[_ngcontent-%COMP%], .bid-text[_ngcontent-%COMP%], .detail-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .counter-note[_ngcontent-%COMP%], .bid-note[_ngcontent-%COMP%], .detail-callout[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.7;\n      font-size: 0.92rem;\n      white-space: pre-line;\n    }\n\n    .skills-row[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 8px;\n      margin: 16px 0 0;\n    }\n\n    .detail-skills[_ngcontent-%COMP%] {\n      margin-top: 0;\n    }\n\n    .skill-chip[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      padding: 7px 11px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--accent-dark);\n      font-size: 0.78rem;\n      font-weight: 700;\n    }\n\n    .project-meta-grid[_ngcontent-%COMP%], .detail-meta-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      gap: 10px;\n      margin-top: 18px;\n    }\n\n    .meta-chip[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      min-height: 42px;\n      padding: 0 12px;\n      border-radius: 14px;\n      background: #fff;\n      border: 1px solid rgba(31, 41, 55, 0.08);\n      color: var(--ink);\n      font-size: 0.84rem;\n      font-weight: 600;\n    }\n\n    .meta-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      color: var(--accent);\n      font-size: 18px;\n      width: 18px;\n      height: 18px;\n    }\n\n    .project-footer[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 18px;\n    }\n\n    .project-cta[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n      color: var(--accent-dark);\n      font-weight: 700;\n      font-size: 0.86rem;\n    }\n\n    .project-actions-row[_ngcontent-%COMP%] {\n      margin-top: 18px;\n    }\n\n    .inline-actions[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 8px;\n      align-items: center;\n    }\n\n    .icon-action[_ngcontent-%COMP%] {\n      width: 42px;\n      height: 42px;\n      border-radius: 14px;\n      border: 1px solid rgba(255, 140, 0, 0.14);\n      background: rgba(255, 140, 0, 0.06);\n      color: var(--accent-dark);\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n      transition: transform 0.2s ease, background 0.2s ease;\n    }\n\n    .icon-action[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.12);\n    }\n\n    .icon-action.danger[_ngcontent-%COMP%] {\n      border-color: rgba(185, 28, 28, 0.14);\n      background: rgba(185, 28, 28, 0.05);\n      color: var(--danger-text);\n    }\n\n    .icon-action.danger[_ngcontent-%COMP%]:hover {\n      background: rgba(185, 28, 28, 0.1);\n    }\n\n    .stack-list[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      margin-top: 18px;\n    }\n\n    .bid-card[_ngcontent-%COMP%] {\n      border-radius: 22px;\n    }\n\n    .bid-header-left[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex-wrap: wrap;\n    }\n\n    .bid-amount-pill[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      padding: 7px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--accent-dark);\n      font-weight: 800;\n      font-size: 0.82rem;\n    }\n\n    .bid-duration[_ngcontent-%COMP%] {\n      color: var(--muted);\n      font-weight: 600;\n      font-size: 0.86rem;\n    }\n\n    .counter-offer[_ngcontent-%COMP%] {\n      margin-top: 16px;\n      padding: 18px;\n      border-radius: 18px;\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.04));\n      border: 1px solid rgba(255, 140, 0, 0.12);\n    }\n\n    .counter-header[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      color: var(--accent-dark);\n      margin-bottom: 8px;\n    }\n\n    .button-row[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-top: 14px;\n    }\n\n    .button-row.compact[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .button-row.compact[_ngcontent-%COMP%]   .btn-danger-outline[_ngcontent-%COMP%], .button-row.compact[_ngcontent-%COMP%]   .btn-soft[_ngcontent-%COMP%] {\n      min-height: 42px;\n      padding: 0 14px;\n      font-size: 0.84rem;\n    }\n\n    .bid-footer[_ngcontent-%COMP%] {\n      margin-top: 16px;\n      display: flex;\n      justify-content: flex-end;\n    }\n\n    .my-projects-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 16px;\n      padding: 20px 0 4px;\n      flex-wrap: wrap;\n    }\n\n    .project-form[_ngcontent-%COMP%] {\n      margin-top: 18px;\n    }\n\n    .form-head[_ngcontent-%COMP%] {\n      margin-bottom: 18px;\n    }\n\n    .form-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 12px;\n    }\n\n    .form-span-2[_ngcontent-%COMP%] {\n      grid-column: span 2;\n    }\n\n    .form-actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-top: 18px;\n    }\n\n    .bids-list[_ngcontent-%COMP%] {\n      margin-top: 18px;\n      padding-top: 18px;\n      border-top: 1px solid rgba(31, 41, 55, 0.08);\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n    }\n\n    .bid-item[_ngcontent-%COMP%] {\n      padding: 16px;\n      border-radius: 18px;\n      background: linear-gradient(180deg, #fff, var(--surface));\n      border: 1px solid rgba(255, 140, 0, 0.08);\n    }\n\n    .bid-user[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      min-width: 0;\n    }\n\n    .user-badge[_ngcontent-%COMP%] {\n      width: 42px;\n      height: 42px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, var(--accent), var(--accent-dark));\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 800;\n      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.18);\n      flex-shrink: 0;\n    }\n\n    .bid-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      display: block;\n      color: var(--ink);\n      margin-bottom: 2px;\n    }\n\n    .bid-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--muted);\n      font-size: 0.84rem;\n    }\n\n    .empty-inline[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      color: var(--muted);\n      padding: 10px 0 2px;\n    }\n\n    .empty-inline[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      color: var(--accent);\n    }\n\n    .empty-state[_ngcontent-%COMP%] {\n      text-align: center;\n      margin-top: 18px;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 52px;\n      width: 52px;\n      height: 52px;\n      color: var(--accent);\n      margin-bottom: 12px;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0 0 8px;\n      color: var(--ink);\n    }\n\n    .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.6;\n    }\n\n    .load-more[_ngcontent-%COMP%], .center-spinner[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      padding: 20px 0 4px;\n    }\n\n    .detail-overlay[_ngcontent-%COMP%] {\n      position: fixed;\n      inset: 0;\n      background: rgba(17, 24, 39, 0.46);\n      backdrop-filter: blur(6px);\n      z-index: 1000;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 24px;\n    }\n\n    .detail-panel[_ngcontent-%COMP%] {\n      width: min(860px, 100%);\n      max-height: 92vh;\n      overflow-y: auto;\n      border-radius: 28px;\n      padding: 28px;\n      position: relative;\n      background:\n        linear-gradient(180deg, #ffffff, #fffaf3);\n    }\n\n    .compact-panel[_ngcontent-%COMP%] {\n      width: min(620px, 100%);\n    }\n\n    .no-shadow[_ngcontent-%COMP%] {\n      box-shadow: none;\n      border: none;\n      padding: 0;\n      background: transparent;\n    }\n\n    .close-btn[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 16px;\n      right: 16px;\n      color: var(--muted) !important;\n    }\n\n    .detail-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 18px;\n      margin-bottom: 18px;\n      padding-right: 36px;\n    }\n\n    .detail-header.compact[_ngcontent-%COMP%] {\n      padding-right: 0;\n    }\n\n    .detail-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .detail-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 12px 0 8px;\n      color: var(--ink);\n      line-height: 1.2;\n    }\n\n    .detail-callout[_ngcontent-%COMP%] {\n      margin-top: 20px;\n      padding: 18px 20px;\n      border-radius: 20px;\n      background: rgba(255, 140, 0, 0.08);\n      border: 1px solid rgba(255, 140, 0, 0.12);\n    }\n\n    .detail-callout[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n      margin: 0 0 6px;\n      color: var(--ink);\n    }\n\n    .detail-action[_ngcontent-%COMP%] {\n      margin-top: 18px;\n    }\n\n    .bid-form[_ngcontent-%COMP%] {\n      margin-top: 18px;\n    }\n\n      .freelance-tabs .mat-mdc-tab-header {\n      border-bottom: none;\n      margin-top: 8px;\n    }\n\n      .freelance-tabs .mdc-tab {\n      min-width: 120px;\n    }\n\n      .freelance-tabs .mdc-tab__text-label {\n      font-weight: 700;\n      color: var(--muted) !important;\n    }\n\n      .freelance-tabs .mdc-tab-indicator__content--underline {\n      border-color: var(--accent) !important;\n      border-top-width: 3px !important;\n      border-radius: 999px;\n    }\n\n      .freelance-tabs .mdc-tab--active .mdc-tab__text-label {\n      color: var(--accent-dark) !important;\n    }\n\n      .freelance-tabs .mat-mdc-tab-body-content {\n      overflow: visible;\n    }\n\n      .page-wrapper .mat-mdc-form-field-subscript-wrapper {\n      display: none;\n    }\n\n      .page-wrapper .mat-mdc-text-field-wrapper {\n      border-radius: 18px !important;\n      background: #fff !important;\n    }\n\n      .page-wrapper .mdc-notched-outline__leading,   .page-wrapper .mdc-notched-outline__notch,   .page-wrapper .mdc-notched-outline__trailing {\n      border-color: rgba(255, 140, 0, 0.14) !important;\n    }\n\n      .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n      border-color: var(--accent) !important;\n    }\n\n      .page-wrapper .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {\n      color: var(--accent) !important;\n    }\n\n    @media (max-width: 980px) {\n      .hero-card[_ngcontent-%COMP%] {\n        flex-direction: column;\n      }\n\n      .hero-stats[_ngcontent-%COMP%] {\n        width: 100%;\n        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      }\n\n      .filters-row[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr 1fr;\n      }\n\n      .btn-search[_ngcontent-%COMP%] {\n        grid-column: span 2;\n        width: 100%;\n      }\n    }\n\n    @media (max-width: 760px) {\n      .page-wrapper[_ngcontent-%COMP%] {\n        padding: 16px 12px 28px;\n      }\n\n      .hero-card[_ngcontent-%COMP%], .surface-card[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%], .detail-panel[_ngcontent-%COMP%] {\n        border-radius: 22px;\n      }\n\n      .projects-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .form-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .form-span-2[_ngcontent-%COMP%] {\n        grid-column: span 1;\n      }\n\n      .detail-header[_ngcontent-%COMP%] {\n        flex-direction: column;\n      }\n    }\n\n    @media (max-width: 560px) {\n      .filters-row[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .btn-search[_ngcontent-%COMP%] {\n        grid-column: span 1;\n      }\n\n      .project-card-top[_ngcontent-%COMP%], .project-actions-row[_ngcontent-%COMP%], .bid-header[_ngcontent-%COMP%], .bid-item-main[_ngcontent-%COMP%], .my-projects-header[_ngcontent-%COMP%] {\n        align-items: stretch;\n      }\n\n      .button-row[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%] {\n        flex-direction: column;\n      }\n\n      .button-row[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .button-row[_ngcontent-%COMP%]   .btn-danger-outline[_ngcontent-%COMP%], .button-row[_ngcontent-%COMP%]   .btn-soft[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .form-actions[_ngcontent-%COMP%]   .btn-soft[_ngcontent-%COMP%], .bid-footer[_ngcontent-%COMP%]   .btn-danger-outline[_ngcontent-%COMP%], .project-actions-row[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n\n      .detail-overlay[_ngcontent-%COMP%] {\n        padding: 12px;\n      }\n\n      .detail-panel[_ngcontent-%COMP%] {\n        padding: 22px 18px;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FreelanceComponent, [{
        type: Component,
        args: [{ selector: 'app-freelance', standalone: true, imports: [
                    CommonModule, FormsModule, ReactiveFormsModule,
                    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
                    MatMenuModule, MatProgressSpinnerModule, MatTabsModule, MatChipsModule, MatTooltipModule
                ], template: `
<div class="page-wrapper">
  <section class="hero-card">
    <div class="hero-copy">
      <span class="hero-eyebrow">Projets freelance</span>
      <h1 class="page-title">Espace Freelance</h1>
      <p class="page-subtitle">Trouvez des projets, soumettez vos offres et gerez vos negociations dans une interface plus claire et plus moderne.</p>
    </div>

    <div class="hero-stats">
      <div class="stat-pill">
        <strong>{{ projects.length }}</strong>
        <span>projets explores</span>
      </div>
      <div class="stat-pill accent">
        <strong>{{ myBids.length }}</strong>
        <span>offres envoyees</span>
      </div>
      <div class="stat-pill">
        <strong>{{ myProjects.length }}</strong>
        <span>projets publies</span>
      </div>
    </div>
  </section>

  <mat-tab-group class="freelance-tabs" [selectedIndex]="activeTab" (selectedIndexChange)="onTabChange($event)">
    <mat-tab label="Explorer">
      <div class="surface-card filter-panel">
        <div class="panel-copy">
          <h3>Recherche de projets</h3>
          <p>Filtrez rapidement les projets par titre et competences pour trouver les missions les plus pertinentes.</p>
        </div>

        <div class="filters-row">
          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>Titre du projet</mat-label>
            <input matInput [(ngModel)]="filterTitle" (keyup.enter)="search()">
          </mat-form-field>

          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>Competences</mat-label>
            <input matInput [(ngModel)]="filterSkills" (keyup.enter)="search()">
          </mat-form-field>

          <button type="button" class="btn-primary btn-search" (click)="search()">
            <mat-icon>search</mat-icon>
            <span>Rechercher</span>
          </button>
        </div>
      </div>

      @if (loadingProjects) {
        <div class="center-spinner"><mat-spinner></mat-spinner></div>
      }

      <div class="projects-grid">
        @for (p of projects; track p.id) {
          <article class="project-card clickable-card" (click)="selectProject(p)">
            <div class="project-card-top">
              <span class="project-status-chip" [ngClass]="statusClass(p.status)">{{ statusLabel(p.status) }}</span>
              <span class="mini-counter">{{ p.bidCount || 0 }} offre(s)</span>
            </div>

            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.description | slice:0:140 }}{{ p.description.length > 140 ? '...' : '' }}</p>

            @if (skillsOf(p.requiredSkills, 4).length) {
              <div class="skills-row">
                @for (sk of skillsOf(p.requiredSkills, 4); track sk) {
                  <span class="skill-chip">{{ sk }}</span>
                }
              </div>
            }

            <div class="project-meta-grid">
              <span class="meta-chip">
                <mat-icon>payments</mat-icon>
                {{ p.budgetMin || 0 | number }} - {{ p.budgetMax || '?' }} EUR
              </span>
              <span class="meta-chip">
                <mat-icon>schedule</mat-icon>
                {{ p.durationDays || '?' }} jours
              </span>
              @if (p.deadlineDate) {
                <span class="meta-chip">
                  <mat-icon>event</mat-icon>
                  {{ p.deadlineDate | date:'dd/MM/yyyy' }}
                </span>
              }
              <span class="meta-chip">
                <mat-icon>person</mat-icon>
                {{ p.postedBy.fullName }}
              </span>
            </div>

            <div class="project-footer">
              <span class="project-cta">
                Voir le projet
                <mat-icon>arrow_forward</mat-icon>
              </span>
            </div>
          </article>
        }
      </div>

      @if (!loadingProjects && projects.length === 0) {
        <div class="surface-card empty-state">
          <mat-icon>work_off</mat-icon>
          <h3>Aucun projet disponible</h3>
          <p>Essayez un autre filtre ou revenez plus tard pour decouvrir de nouvelles missions.</p>
        </div>
      }

      @if (!loadingProjects && !lastPage) {
        <div class="load-more">
          <button type="button" class="btn-outline" (click)="loadMore()">
            <mat-icon>expand_more</mat-icon>
            <span>Voir plus</span>
          </button>
        </div>
      }
    </mat-tab>

    <mat-tab label="Mes offres">
      @if (loadingBids) {
        <div class="center-spinner"><mat-spinner></mat-spinner></div>
      }

      <div class="stack-list">
        @for (bid of myBids; track bid.id) {
          <article class="surface-card bid-card">
            <div class="bid-header">
              <div class="bid-header-left">
                <span class="bid-status" [ngClass]="bidStatusClass(bid.status)">{{ bidStatusLabel(bid.status) }}</span>
                <span class="bid-amount-pill">{{ bid.proposedAmount | number }} EUR</span>
              </div>
              <span class="bid-duration">{{ bid.proposedDurationDays }} jours</span>
            </div>

            <p class="bid-text">{{ bid.coverLetter || 'Aucune lettre de motivation ajoutee pour cette offre.' }}</p>

            @if (bid.status === 'NEGOTIATING' && bid.counterAmount) {
              <div class="counter-offer">
                <div class="counter-header">
                  <mat-icon>swap_horiz</mat-icon>
                  <strong>Contre-offre recue</strong>
                </div>
                <p>{{ bid.counterAmount | number }} EUR pour {{ bid.counterDurationDays }} jours</p>
                @if (bid.negotiationNote) {
                  <p class="counter-note">{{ bid.negotiationNote }}</p>
                }
                <div class="button-row">
                  <button type="button" class="btn-primary" (click)="acceptCounter(bid)">
                    <mat-icon>check</mat-icon>
                    <span>Accepter</span>
                  </button>
                  <button type="button" class="btn-danger-outline" (click)="declineCounter(bid)">
                    <mat-icon>close</mat-icon>
                    <span>Decliner</span>
                  </button>
                </div>
              </div>
            }

            @if (bid.status === 'PENDING' || bid.status === 'NEGOTIATING') {
              <div class="bid-footer">
                <button type="button" class="btn-danger-outline" (click)="withdrawBid(bid)">
                  <mat-icon>undo</mat-icon>
                  <span>Retirer mon offre</span>
                </button>
              </div>
            }
          </article>
        }
      </div>

      @if (!loadingBids && myBids.length === 0) {
        <div class="surface-card empty-state">
          <mat-icon>gavel</mat-icon>
          <h3>Aucune offre envoyee</h3>
          <p>Parcourez les projets disponibles et soumettez votre premiere proposition.</p>
        </div>
      }
    </mat-tab>

    <mat-tab label="Mes projets">
      <div class="my-projects-header">
        <div>
          <h3>Gestion de mes projets</h3>
          <p>Publiez une mission, suivez les offres recues et negociez depuis le meme espace.</p>
        </div>

        <button type="button" class="btn-primary" (click)="toggleProjectForm()">
          <mat-icon>{{ showProjectForm && !editingProject ? 'close' : 'add' }}</mat-icon>
          <span>{{ showProjectForm && !editingProject ? 'Fermer' : 'Publier un projet' }}</span>
        </button>
      </div>

      @if (showProjectForm) {
        <form [formGroup]="projectForm" (ngSubmit)="createProject()" class="surface-card project-form">
          <div class="form-head">
            <div>
              <span class="section-eyebrow">Edition</span>
              <h3>{{ editingProject ? 'Modifier le projet' : 'Nouveau projet freelance' }}</h3>
            </div>
          </div>

          <div class="form-grid">
            <mat-form-field appearance="outline" class="full-width form-span-2">
              <mat-label>Titre *</mat-label>
              <input matInput formControlName="title">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width form-span-2">
              <mat-label>Description *</mat-label>
              <textarea matInput formControlName="description" rows="5"></textarea>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width form-span-2">
              <mat-label>Competences requises</mat-label>
              <input matInput formControlName="requiredSkills" placeholder="Angular, Java, UX, SQL">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Duree (jours)</mat-label>
              <input matInput type="number" formControlName="durationDays">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Date limite</mat-label>
              <input matInput type="date" formControlName="deadlineDate">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Budget min (EUR)</mat-label>
              <input matInput type="number" formControlName="budgetMin">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Budget max (EUR)</mat-label>
              <input matInput type="number" formControlName="budgetMax">
            </mat-form-field>
          </div>

          <div class="form-actions">
            <button type="button" class="btn-soft" (click)="cancelProjectForm()">Annuler</button>
            <button type="submit" class="btn-primary" [disabled]="projectForm.invalid || creatingProject">
              @if (creatingProject) {
                <mat-spinner diameter="18"></mat-spinner>
                <span>Enregistrement...</span>
              } @else {
                <mat-icon>save</mat-icon>
                <span>{{ editingProject ? 'Mettre a jour' : 'Publier' }}</span>
              }
            </button>
          </div>
        </form>
      }

      @if (loadingMyProjects) {
        <div class="center-spinner"><mat-spinner></mat-spinner></div>
      }

      <div class="stack-list">
        @for (p of myProjects; track p.id) {
          <article class="surface-card project-card my-project">
            <div class="project-card-top">
              <span class="project-status-chip" [ngClass]="statusClass(p.status)">{{ statusLabel(p.status) }}</span>
              <span class="mini-counter">{{ p.bidCount || 0 }} offre(s) recue(s)</span>
            </div>

            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.description | slice:0:120 }}{{ p.description.length > 120 ? '...' : '' }}</p>

            @if (skillsOf(p.requiredSkills, 5).length) {
              <div class="skills-row">
                @for (sk of skillsOf(p.requiredSkills, 5); track sk) {
                  <span class="skill-chip">{{ sk }}</span>
                }
              </div>
            }

            <div class="project-meta-grid">
              <span class="meta-chip">
                <mat-icon>payments</mat-icon>
                {{ p.budgetMin || 0 | number }} - {{ p.budgetMax || '?' }} EUR
              </span>
              <span class="meta-chip">
                <mat-icon>schedule</mat-icon>
                {{ p.durationDays || '?' }} jours
              </span>
            </div>

            <div class="project-actions-row">
              <div class="inline-actions">
                <button type="button" class="icon-action" (click)="editProject(p)" matTooltip="Modifier">
                  <mat-icon>edit</mat-icon>
                </button>
                <button type="button" class="icon-action danger" (click)="deleteProject(p)" matTooltip="Supprimer">
                  <mat-icon>delete</mat-icon>
                </button>
              </div>

              <button type="button" class="btn-outline" (click)="viewBids(p)">
                <mat-icon>{{ selectedProjectBids[p.id] ? 'expand_less' : 'visibility' }}</mat-icon>
                <span>{{ selectedProjectBids[p.id] ? 'Masquer les offres' : 'Voir les offres' }}</span>
              </button>
            </div>

            @if (selectedProjectBids[p.id]) {
              <div class="bids-list">
                @if (selectedProjectBids[p.id].length === 0) {
                  <div class="empty-inline">
                    <mat-icon>inbox</mat-icon>
                    <span>Aucune offre recue pour ce projet.</span>
                  </div>
                }

                @for (bid of selectedProjectBids[p.id]; track bid.id) {
                  <div class="bid-item">
                    <div class="bid-item-main">
                      <div class="bid-user">
                        <div class="user-badge">{{ initials(bid.freelancer.fullName) }}</div>
                        <div>
                          <strong>{{ bid.freelancer.fullName }}</strong>
                          <p>{{ bid.proposedAmount | number }} EUR / {{ bid.proposedDurationDays }} jours</p>
                        </div>
                      </div>

                      <span class="bid-status" [ngClass]="bidStatusClass(bid.status)">{{ bidStatusLabel(bid.status) }}</span>
                    </div>

                    @if (bid.coverLetter) {
                      <p class="bid-note">{{ bid.coverLetter | slice:0:180 }}{{ bid.coverLetter.length > 180 ? '...' : '' }}</p>
                    }

                    @if (bid.status === 'PENDING') {
                      <div class="button-row compact">
                        <button type="button" class="btn-primary" (click)="acceptBid(bid)">
                          <mat-icon>check</mat-icon>
                          <span>Accepter</span>
                        </button>
                        <button type="button" class="btn-danger-outline" (click)="rejectBid(bid)">
                          <mat-icon>close</mat-icon>
                          <span>Rejeter</span>
                        </button>
                        <button type="button" class="btn-soft" (click)="openNegotiateDialog(bid, p.id)">
                          <mat-icon>swap_horiz</mat-icon>
                          <span>Negocier</span>
                        </button>
                      </div>
                    }
                  </div>
                }
              </div>
            }
          </article>
        }
      </div>
    </mat-tab>
  </mat-tab-group>
</div>

@if (selectedProject) {
  <div class="detail-overlay" (click)="closeProject()">
    <div class="detail-panel" (click)="$event.stopPropagation()">
      <button type="button" class="close-btn" mat-icon-button (click)="closeProject()">
        <mat-icon>close</mat-icon>
      </button>

      <div class="detail-header">
        <div>
          <span class="section-eyebrow">Projet selectionne</span>
          <h2>{{ selectedProject.title }}</h2>
          <p>{{ selectedProject.description }}</p>
        </div>
        <span class="project-status-chip" [ngClass]="statusClass(selectedProject.status)">{{ statusLabel(selectedProject.status) }}</span>
      </div>

      @if (skillsOf(selectedProject.requiredSkills).length) {
        <div class="skills-row detail-skills">
          @for (sk of skillsOf(selectedProject.requiredSkills); track sk) {
            <span class="skill-chip">{{ sk }}</span>
          }
        </div>
      }

      <div class="detail-meta-grid">
        <span class="meta-chip">
          <mat-icon>payments</mat-icon>
          {{ selectedProject.budgetMin || 0 | number }} - {{ selectedProject.budgetMax || '?' }} EUR
        </span>
        <span class="meta-chip">
          <mat-icon>schedule</mat-icon>
          {{ selectedProject.durationDays || '?' }} jours
        </span>
        @if (selectedProject.deadlineDate) {
          <span class="meta-chip">
            <mat-icon>event</mat-icon>
            {{ selectedProject.deadlineDate | date:'dd/MM/yyyy' }}
          </span>
        }
        <span class="meta-chip">
          <mat-icon>person</mat-icon>
          {{ selectedProject.postedBy.fullName }}
        </span>
      </div>

      @if (selectedProject.postedBy.id !== auth.currentUser?.id && selectedProject.status === 'OPEN') {
        <div class="detail-callout">
          <h4>Proposer votre offre</h4>
          <p>Envoyez une proposition claire avec votre montant, votre delai et un court message de motivation.</p>
        </div>

        @if (!showBidForm) {
          <button type="button" class="btn-primary detail-action" (click)="showBidForm = true">
            <mat-icon>send</mat-icon>
            <span>Soumettre une offre</span>
          </button>
        } @else {
          <form [formGroup]="bidForm" (ngSubmit)="submitBid()" class="surface-card bid-form">
            <h4>Mon offre</h4>

            <div class="form-grid">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Montant propose (EUR) *</mat-label>
                <input matInput type="number" formControlName="proposedAmount">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Duree proposee (jours) *</mat-label>
                <input matInput type="number" formControlName="proposedDurationDays">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width form-span-2">
                <mat-label>Lettre de motivation</mat-label>
                <textarea matInput formControlName="coverLetter" rows="4"></textarea>
              </mat-form-field>
            </div>

            <div class="form-actions">
              <button type="button" class="btn-soft" (click)="showBidForm = false">Annuler</button>
              <button type="submit" class="btn-primary" [disabled]="bidForm.invalid || submittingBid">
                @if (submittingBid) {
                  <mat-spinner diameter="18"></mat-spinner>
                  <span>Envoi...</span>
                } @else {
                  <mat-icon>bolt</mat-icon>
                  <span>Soumettre</span>
                }
              </button>
            </div>
          </form>
        }
      }
    </div>
  </div>
}

@if (negotiatingBid) {
  <div class="detail-overlay" (click)="cancelNegotiate()">
    <div class="detail-panel compact-panel" (click)="$event.stopPropagation()">
      <button type="button" class="close-btn" mat-icon-button (click)="cancelNegotiate()">
        <mat-icon>close</mat-icon>
      </button>

      <div class="detail-header compact">
        <div>
          <span class="section-eyebrow">Negociation</span>
          <h3>Envoyer une contre-offre</h3>
          <p>Ajustez le montant, la duree et ajoutez une note claire pour cadrer la suite.</p>
        </div>
      </div>

      <form [formGroup]="negotiateForm" (ngSubmit)="sendCounterOffer()" class="surface-card bid-form no-shadow">
        <div class="form-grid">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contre-montant (EUR)</mat-label>
            <input matInput type="number" formControlName="counterAmount">
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contre-duree (jours)</mat-label>
            <input matInput type="number" formControlName="counterDurationDays">
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width form-span-2">
            <mat-label>Note de negociation</mat-label>
            <textarea matInput formControlName="negotiationNote" rows="3"></textarea>
          </mat-form-field>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-soft" (click)="cancelNegotiate()">Annuler</button>
          <button type="submit" class="btn-primary">
            <mat-icon>send</mat-icon>
            <span>Envoyer</span>
          </button>
        </div>
      </form>
    </div>
  </div>
}
  `, styles: ["\n    :host {\n      --accent: #ff8c00;\n      --accent-dark: #e67600;\n      --accent-light: #ffb347;\n      --accent-soft: rgba(255, 140, 0, 0.1);\n      --surface: #fffaf4;\n      --surface-strong: #fff3df;\n      --ink: #1f2937;\n      --muted: #6b7280;\n      --line: rgba(31, 41, 55, 0.08);\n      --shadow-soft: 0 14px 32px rgba(15, 23, 42, 0.08);\n      --shadow-strong: 0 22px 40px rgba(255, 140, 0, 0.12);\n      --success-bg: #dcfce7;\n      --success-text: #166534;\n      --info-bg: #dbeafe;\n      --info-text: #1d4ed8;\n      --warn-bg: #fef3c7;\n      --warn-text: #b45309;\n      --danger-bg: #fee2e2;\n      --danger-text: #b91c1c;\n      --neutral-bg: #f3f4f6;\n      --neutral-text: #4b5563;\n    }\n\n    .page-wrapper {\n      padding: 24px;\n      max-width: 1240px;\n      margin: 0 auto;\n      display: flex;\n      flex-direction: column;\n      gap: 22px;\n      background:\n        radial-gradient(circle at top right, rgba(255, 179, 71, 0.14), transparent 24%),\n        linear-gradient(180deg, #fffdf9 0%, #fff7ef 100%);\n      min-height: 100vh;\n    }\n\n    .hero-card,\n    .surface-card,\n    .project-card,\n    .detail-panel {\n      background: rgba(255, 255, 255, 0.96);\n      border: 1px solid var(--line);\n      box-shadow: var(--shadow-soft);\n      backdrop-filter: blur(12px);\n    }\n\n    .hero-card {\n      border-radius: 28px;\n      padding: 28px;\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 22px;\n      background:\n        linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.03)),\n        #fff;\n      position: relative;\n      overflow: hidden;\n    }\n\n    .hero-card::after {\n      content: '';\n      position: absolute;\n      inset: auto -48px -48px auto;\n      width: 180px;\n      height: 180px;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(255, 179, 71, 0.28), transparent 65%);\n      pointer-events: none;\n    }\n\n    .hero-copy {\n      position: relative;\n      z-index: 1;\n      max-width: 640px;\n    }\n\n    .hero-eyebrow,\n    .section-eyebrow {\n      display: inline-flex;\n      align-items: center;\n      padding: 7px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.12);\n      color: var(--accent-dark);\n      font-size: 0.76rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n    }\n\n    .page-title {\n      font-size: clamp(1.9rem, 3vw, 2.5rem);\n      font-weight: 800;\n      color: var(--ink);\n      margin: 12px 0 8px;\n      line-height: 1.1;\n    }\n\n    .page-subtitle {\n      color: var(--muted);\n      margin: 0;\n      line-height: 1.65;\n      font-size: 0.97rem;\n    }\n\n    .hero-stats {\n      display: grid;\n      gap: 12px;\n      min-width: 230px;\n      position: relative;\n      z-index: 1;\n    }\n\n    .stat-pill {\n      padding: 16px 18px;\n      border-radius: 20px;\n      background: rgba(255, 255, 255, 0.92);\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      box-shadow: 0 10px 22px rgba(255, 140, 0, 0.08);\n    }\n\n    .stat-pill.accent {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 179, 71, 0.08));\n    }\n\n    .stat-pill strong {\n      display: block;\n      font-size: 1.28rem;\n      margin-bottom: 4px;\n      color: var(--ink);\n    }\n\n    .stat-pill span {\n      display: block;\n      color: var(--muted);\n      font-size: 0.84rem;\n    }\n\n    .surface-card {\n      border-radius: 24px;\n      padding: 22px;\n    }\n\n    .filter-panel {\n      display: flex;\n      flex-direction: column;\n      gap: 18px;\n      margin-top: 18px;\n    }\n\n    .panel-copy h3,\n    .my-projects-header h3,\n    .form-head h3 {\n      margin: 0 0 6px;\n      color: var(--ink);\n      font-size: 1.16rem;\n    }\n\n    .panel-copy p,\n    .my-projects-header p {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.6;\n    }\n\n    .filters-row {\n      display: grid;\n      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;\n      gap: 12px;\n      align-items: center;\n    }\n\n    .filter-field,\n    .full-width {\n      width: 100%;\n    }\n\n    .btn-primary,\n    .btn-outline,\n    .btn-soft,\n    .btn-danger-outline {\n      border-radius: 14px;\n      font-weight: 700;\n      border: 1px solid transparent;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n      text-decoration: none;\n      min-height: 46px;\n      padding: 0 18px;\n      font-size: 0.92rem;\n    }\n\n    .btn-primary {\n      background: linear-gradient(135deg, var(--accent), var(--accent-dark));\n      color: #fff;\n      box-shadow: 0 14px 28px rgba(255, 140, 0, 0.22);\n    }\n\n    .btn-primary:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 18px 34px rgba(255, 140, 0, 0.28);\n    }\n\n    .btn-primary:disabled {\n      opacity: 0.65;\n      cursor: not-allowed;\n      box-shadow: none;\n    }\n\n    .btn-primary mat-spinner {\n      --mdc-circular-progress-active-indicator-color: #fff;\n    }\n\n    .btn-outline {\n      background: #fff;\n      color: var(--accent-dark);\n      border-color: rgba(255, 140, 0, 0.22);\n      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.08);\n    }\n\n    .btn-outline:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.08);\n    }\n\n    .btn-soft {\n      background: #fff;\n      color: var(--muted);\n      border-color: rgba(31, 41, 55, 0.12);\n    }\n\n    .btn-soft:hover {\n      transform: translateY(-1px);\n      background: #f8fafc;\n      color: var(--ink);\n    }\n\n    .btn-danger-outline {\n      background: #fff;\n      color: var(--danger-text);\n      border-color: rgba(185, 28, 28, 0.18);\n    }\n\n    .btn-danger-outline:hover {\n      transform: translateY(-1px);\n      background: rgba(185, 28, 28, 0.06);\n    }\n\n    .btn-search {\n      min-width: 160px;\n    }\n\n    .projects-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\n      gap: 18px;\n      padding: 18px 0 8px;\n    }\n\n    .project-card {\n      border-radius: 24px;\n      padding: 22px;\n      position: relative;\n      overflow: hidden;\n      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;\n    }\n\n    .project-card::before {\n      content: '';\n      position: absolute;\n      inset: 0 0 auto 0;\n      height: 4px;\n      background: linear-gradient(90deg, var(--accent), var(--accent-light));\n      opacity: 0.85;\n    }\n\n    .project-card:hover {\n      transform: translateY(-4px);\n      box-shadow: var(--shadow-strong);\n      border-color: rgba(255, 140, 0, 0.14);\n    }\n\n    .clickable-card {\n      cursor: pointer;\n    }\n\n    .project-card.my-project {\n      cursor: default;\n    }\n\n    .project-card-top,\n    .project-actions-row,\n    .bid-header,\n    .bid-item-main {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      flex-wrap: wrap;\n    }\n\n    .project-status-chip,\n    .bid-status,\n    .mini-counter {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      padding: 7px 12px;\n      border-radius: 999px;\n      font-size: 0.76rem;\n      font-weight: 700;\n      letter-spacing: 0.03em;\n    }\n\n    .mini-counter {\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--accent-dark);\n    }\n\n    .status-open { background: var(--success-bg); color: var(--success-text); }\n    .status-in_progress { background: var(--info-bg); color: var(--info-text); }\n    .status-completed { background: var(--neutral-bg); color: var(--neutral-text); }\n    .status-cancelled { background: var(--danger-bg); color: var(--danger-text); }\n\n    .bid-pending { background: var(--warn-bg); color: var(--warn-text); }\n    .bid-accepted { background: var(--success-bg); color: var(--success-text); }\n    .bid-rejected { background: var(--danger-bg); color: var(--danger-text); }\n    .bid-negotiating { background: var(--info-bg); color: var(--info-text); }\n    .bid-withdrawn { background: var(--neutral-bg); color: var(--neutral-text); }\n\n    .project-card h3 {\n      margin: 16px 0 10px;\n      font-size: 1.08rem;\n      color: var(--ink);\n      line-height: 1.35;\n    }\n\n    .project-desc,\n    .bid-text,\n    .detail-header p,\n    .counter-note,\n    .bid-note,\n    .detail-callout p {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.7;\n      font-size: 0.92rem;\n      white-space: pre-line;\n    }\n\n    .skills-row {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 8px;\n      margin: 16px 0 0;\n    }\n\n    .detail-skills {\n      margin-top: 0;\n    }\n\n    .skill-chip {\n      display: inline-flex;\n      align-items: center;\n      padding: 7px 11px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--accent-dark);\n      font-size: 0.78rem;\n      font-weight: 700;\n    }\n\n    .project-meta-grid,\n    .detail-meta-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      gap: 10px;\n      margin-top: 18px;\n    }\n\n    .meta-chip {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      min-height: 42px;\n      padding: 0 12px;\n      border-radius: 14px;\n      background: #fff;\n      border: 1px solid rgba(31, 41, 55, 0.08);\n      color: var(--ink);\n      font-size: 0.84rem;\n      font-weight: 600;\n    }\n\n    .meta-chip mat-icon {\n      color: var(--accent);\n      font-size: 18px;\n      width: 18px;\n      height: 18px;\n    }\n\n    .project-footer {\n      display: flex;\n      justify-content: flex-end;\n      margin-top: 18px;\n    }\n\n    .project-cta {\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n      color: var(--accent-dark);\n      font-weight: 700;\n      font-size: 0.86rem;\n    }\n\n    .project-actions-row {\n      margin-top: 18px;\n    }\n\n    .inline-actions {\n      display: flex;\n      gap: 8px;\n      align-items: center;\n    }\n\n    .icon-action {\n      width: 42px;\n      height: 42px;\n      border-radius: 14px;\n      border: 1px solid rgba(255, 140, 0, 0.14);\n      background: rgba(255, 140, 0, 0.06);\n      color: var(--accent-dark);\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n      transition: transform 0.2s ease, background 0.2s ease;\n    }\n\n    .icon-action:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.12);\n    }\n\n    .icon-action.danger {\n      border-color: rgba(185, 28, 28, 0.14);\n      background: rgba(185, 28, 28, 0.05);\n      color: var(--danger-text);\n    }\n\n    .icon-action.danger:hover {\n      background: rgba(185, 28, 28, 0.1);\n    }\n\n    .stack-list {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      margin-top: 18px;\n    }\n\n    .bid-card {\n      border-radius: 22px;\n    }\n\n    .bid-header-left {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex-wrap: wrap;\n    }\n\n    .bid-amount-pill {\n      display: inline-flex;\n      align-items: center;\n      padding: 7px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--accent-dark);\n      font-weight: 800;\n      font-size: 0.82rem;\n    }\n\n    .bid-duration {\n      color: var(--muted);\n      font-weight: 600;\n      font-size: 0.86rem;\n    }\n\n    .counter-offer {\n      margin-top: 16px;\n      padding: 18px;\n      border-radius: 18px;\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.04));\n      border: 1px solid rgba(255, 140, 0, 0.12);\n    }\n\n    .counter-header {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      color: var(--accent-dark);\n      margin-bottom: 8px;\n    }\n\n    .button-row {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-top: 14px;\n    }\n\n    .button-row.compact .btn-primary,\n    .button-row.compact .btn-danger-outline,\n    .button-row.compact .btn-soft {\n      min-height: 42px;\n      padding: 0 14px;\n      font-size: 0.84rem;\n    }\n\n    .bid-footer {\n      margin-top: 16px;\n      display: flex;\n      justify-content: flex-end;\n    }\n\n    .my-projects-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 16px;\n      padding: 20px 0 4px;\n      flex-wrap: wrap;\n    }\n\n    .project-form {\n      margin-top: 18px;\n    }\n\n    .form-head {\n      margin-bottom: 18px;\n    }\n\n    .form-grid {\n      display: grid;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 12px;\n    }\n\n    .form-span-2 {\n      grid-column: span 2;\n    }\n\n    .form-actions {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-top: 18px;\n    }\n\n    .bids-list {\n      margin-top: 18px;\n      padding-top: 18px;\n      border-top: 1px solid rgba(31, 41, 55, 0.08);\n      display: flex;\n      flex-direction: column;\n      gap: 12px;\n    }\n\n    .bid-item {\n      padding: 16px;\n      border-radius: 18px;\n      background: linear-gradient(180deg, #fff, var(--surface));\n      border: 1px solid rgba(255, 140, 0, 0.08);\n    }\n\n    .bid-user {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      min-width: 0;\n    }\n\n    .user-badge {\n      width: 42px;\n      height: 42px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, var(--accent), var(--accent-dark));\n      color: #fff;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 800;\n      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.18);\n      flex-shrink: 0;\n    }\n\n    .bid-user strong {\n      display: block;\n      color: var(--ink);\n      margin-bottom: 2px;\n    }\n\n    .bid-user p {\n      margin: 0;\n      color: var(--muted);\n      font-size: 0.84rem;\n    }\n\n    .empty-inline {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      color: var(--muted);\n      padding: 10px 0 2px;\n    }\n\n    .empty-inline mat-icon {\n      color: var(--accent);\n    }\n\n    .empty-state {\n      text-align: center;\n      margin-top: 18px;\n    }\n\n    .empty-state mat-icon {\n      font-size: 52px;\n      width: 52px;\n      height: 52px;\n      color: var(--accent);\n      margin-bottom: 12px;\n    }\n\n    .empty-state h3 {\n      margin: 0 0 8px;\n      color: var(--ink);\n    }\n\n    .empty-state p {\n      margin: 0;\n      color: var(--muted);\n      line-height: 1.6;\n    }\n\n    .load-more,\n    .center-spinner {\n      display: flex;\n      justify-content: center;\n      padding: 20px 0 4px;\n    }\n\n    .detail-overlay {\n      position: fixed;\n      inset: 0;\n      background: rgba(17, 24, 39, 0.46);\n      backdrop-filter: blur(6px);\n      z-index: 1000;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      padding: 24px;\n    }\n\n    .detail-panel {\n      width: min(860px, 100%);\n      max-height: 92vh;\n      overflow-y: auto;\n      border-radius: 28px;\n      padding: 28px;\n      position: relative;\n      background:\n        linear-gradient(180deg, #ffffff, #fffaf3);\n    }\n\n    .compact-panel {\n      width: min(620px, 100%);\n    }\n\n    .no-shadow {\n      box-shadow: none;\n      border: none;\n      padding: 0;\n      background: transparent;\n    }\n\n    .close-btn {\n      position: absolute;\n      top: 16px;\n      right: 16px;\n      color: var(--muted) !important;\n    }\n\n    .detail-header {\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 18px;\n      margin-bottom: 18px;\n      padding-right: 36px;\n    }\n\n    .detail-header.compact {\n      padding-right: 0;\n    }\n\n    .detail-header h2,\n    .detail-header h3 {\n      margin: 12px 0 8px;\n      color: var(--ink);\n      line-height: 1.2;\n    }\n\n    .detail-callout {\n      margin-top: 20px;\n      padding: 18px 20px;\n      border-radius: 20px;\n      background: rgba(255, 140, 0, 0.08);\n      border: 1px solid rgba(255, 140, 0, 0.12);\n    }\n\n    .detail-callout h4 {\n      margin: 0 0 6px;\n      color: var(--ink);\n    }\n\n    .detail-action {\n      margin-top: 18px;\n    }\n\n    .bid-form {\n      margin-top: 18px;\n    }\n\n    ::ng-deep .freelance-tabs .mat-mdc-tab-header {\n      border-bottom: none;\n      margin-top: 8px;\n    }\n\n    ::ng-deep .freelance-tabs .mdc-tab {\n      min-width: 120px;\n    }\n\n    ::ng-deep .freelance-tabs .mdc-tab__text-label {\n      font-weight: 700;\n      color: var(--muted) !important;\n    }\n\n    ::ng-deep .freelance-tabs .mdc-tab-indicator__content--underline {\n      border-color: var(--accent) !important;\n      border-top-width: 3px !important;\n      border-radius: 999px;\n    }\n\n    ::ng-deep .freelance-tabs .mdc-tab--active .mdc-tab__text-label {\n      color: var(--accent-dark) !important;\n    }\n\n    ::ng-deep .freelance-tabs .mat-mdc-tab-body-content {\n      overflow: visible;\n    }\n\n    ::ng-deep .page-wrapper .mat-mdc-form-field-subscript-wrapper {\n      display: none;\n    }\n\n    ::ng-deep .page-wrapper .mat-mdc-text-field-wrapper {\n      border-radius: 18px !important;\n      background: #fff !important;\n    }\n\n    ::ng-deep .page-wrapper .mdc-notched-outline__leading,\n    ::ng-deep .page-wrapper .mdc-notched-outline__notch,\n    ::ng-deep .page-wrapper .mdc-notched-outline__trailing {\n      border-color: rgba(255, 140, 0, 0.14) !important;\n    }\n\n    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,\n    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,\n    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n      border-color: var(--accent) !important;\n    }\n\n    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {\n      color: var(--accent) !important;\n    }\n\n    @media (max-width: 980px) {\n      .hero-card {\n        flex-direction: column;\n      }\n\n      .hero-stats {\n        width: 100%;\n        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      }\n\n      .filters-row {\n        grid-template-columns: 1fr 1fr;\n      }\n\n      .btn-search {\n        grid-column: span 2;\n        width: 100%;\n      }\n    }\n\n    @media (max-width: 760px) {\n      .page-wrapper {\n        padding: 16px 12px 28px;\n      }\n\n      .hero-card,\n      .surface-card,\n      .project-card,\n      .detail-panel {\n        border-radius: 22px;\n      }\n\n      .projects-grid {\n        grid-template-columns: 1fr;\n      }\n\n      .form-grid {\n        grid-template-columns: 1fr;\n      }\n\n      .form-span-2 {\n        grid-column: span 1;\n      }\n\n      .detail-header {\n        flex-direction: column;\n      }\n    }\n\n    @media (max-width: 560px) {\n      .filters-row {\n        grid-template-columns: 1fr;\n      }\n\n      .btn-search {\n        grid-column: span 1;\n      }\n\n      .project-card-top,\n      .project-actions-row,\n      .bid-header,\n      .bid-item-main,\n      .my-projects-header {\n        align-items: stretch;\n      }\n\n      .button-row,\n      .form-actions {\n        flex-direction: column;\n      }\n\n      .button-row .btn-primary,\n      .button-row .btn-danger-outline,\n      .button-row .btn-soft,\n      .form-actions .btn-primary,\n      .form-actions .btn-soft,\n      .bid-footer .btn-danger-outline,\n      .project-actions-row .btn-outline {\n        width: 100%;\n      }\n\n      .detail-overlay {\n        padding: 12px;\n      }\n\n      .detail-panel {\n        padding: 22px 18px;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FreelanceComponent, { className: "FreelanceComponent", filePath: "app\\features\\shared\\freelance\\freelance.component.ts", lineNumber: 1417 }); })();
//# sourceMappingURL=freelance.component.js.map