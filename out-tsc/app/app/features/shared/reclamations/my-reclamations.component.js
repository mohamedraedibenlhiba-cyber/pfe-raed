import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { ReclamationService } from '../../../core/services/reclamation.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/progress-spinner";
const _forTrack0 = ($index, $item) => $item.id;
function MyReclamationsComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 9)(2, "span", 10);
    i0.ɵɵtext(3, "Total");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 11);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 9)(7, "span", 10);
    i0.ɵɵtext(8, "En cours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 11);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 9)(12, "span", 10);
    i0.ɵɵtext(13, "R\u00E9solues");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span", 11);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.reclamations.length);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.getOpenCount());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.getResolvedCount());
} }
function MyReclamationsComponent_Conditional_13_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Minimum 20 caract\u00E8res requis");
    i0.ɵɵelementEnd();
} }
function MyReclamationsComponent_Conditional_13_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 25);
} }
function MyReclamationsComponent_Conditional_13_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Soumettre la r\u00E9clamation ");
} }
function MyReclamationsComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 12)(2, "h3");
    i0.ɵɵtext(3, "Soumettre une nouvelle r\u00E9clamation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "D\u00E9crivez-nous votre probl\u00E8me et nous vous aiderons au plus vite");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "form", 13);
    i0.ɵɵlistener("ngSubmit", function MyReclamationsComponent_Conditional_13_Template_form_ngSubmit_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.submit()); });
    i0.ɵɵelementStart(7, "div", 14)(8, "div", 15);
    i0.ɵɵelement(9, "app-select", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 15)(11, "mat-form-field", 17)(12, "mat-label");
    i0.ɵɵtext(13, "Sujet");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(14, "input", 18);
    i0.ɵɵelementStart(15, "mat-icon", 19);
    i0.ɵɵtext(16, "subject");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "div", 20)(18, "mat-form-field", 17)(19, "mat-label");
    i0.ɵɵtext(20, "Description d\u00E9taill\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(21, "textarea", 21);
    i0.ɵɵelementStart(22, "mat-icon", 19);
    i0.ɵɵtext(23, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-hint");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(26, MyReclamationsComponent_Conditional_13_Conditional_26_Template, 2, 0, "mat-error");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div", 22)(28, "button", 23);
    i0.ɵɵlistener("click", function MyReclamationsComponent_Conditional_13_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showForm = false); });
    i0.ɵɵelementStart(29, "mat-icon");
    i0.ɵɵtext(30, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, " Annuler ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 24);
    i0.ɵɵtemplate(33, MyReclamationsComponent_Conditional_13_Conditional_33_Template, 1, 0, "mat-spinner", 25)(34, MyReclamationsComponent_Conditional_13_Conditional_34_Template, 3, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formGroup", ctx_r0.form);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r0.typeOptions);
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate1("", ((tmp_3_0 = ctx_r0.form.get("description")) == null ? null : tmp_3_0.value == null ? null : tmp_3_0.value.length) || 0, "/500 caract\u00E8res");
    i0.ɵɵadvance();
    i0.ɵɵconditional(26, ((tmp_4_0 = ctx_r0.form.get("description")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx_r0.form.get("description")) == null ? null : tmp_4_0.touched) ? 26 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.form.invalid || ctx_r0.submitting);
    i0.ɵɵadvance();
    i0.ɵɵconditional(33, ctx_r0.submitting ? 33 : 34);
} }
function MyReclamationsComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelement(1, "mat-spinner", 26);
    i0.ɵɵelementEnd();
} }
function MyReclamationsComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    i0.ɵɵtext(3, "done_all");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "p", 30);
    i0.ɵɵtext(5, "Aucune r\u00E9clamation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 31);
    i0.ɵɵtext(7, "Vous n'avez pas soumis de r\u00E9clamation. Si vous avez un probl\u00E8me, n'h\u00E9sitez pas \u00E0 en cr\u00E9er une.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 5);
    i0.ɵɵlistener("click", function MyReclamationsComponent_Conditional_15_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showForm = true); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "add_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Cr\u00E9er une r\u00E9clamation ");
    i0.ɵɵelementEnd()();
} }
function MyReclamationsComponent_Conditional_16_For_2_Conditional_13_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(2, 1, r_r4.resolvedAt, "dd/MM/yyyy \u00E0 HH:mm"));
} }
function MyReclamationsComponent_Conditional_16_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39)(1, "div", 40)(2, "div", 41)(3, "span", 42);
    i0.ɵɵtext(4, "support_agent");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div")(6, "strong");
    i0.ɵɵtext(7, "R\u00E9ponse de notre \u00E9quipe support");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, MyReclamationsComponent_Conditional_16_For_2_Conditional_13_Conditional_8_Template, 3, 4, "p", 43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "p", 44);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(8, r_r4.resolvedAt ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r4.adminResponse);
} }
function MyReclamationsComponent_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "div", 34)(2, "div", 35);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 36);
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "h4", 37);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p", 38);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, MyReclamationsComponent_Conditional_16_For_2_Conditional_13_Template, 11, 2, "div", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("#", r_r4.id, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r0.statusClass(r_r4.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.statusLabel(r_r4.status));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 9, r_r4.createdAt, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r4.subject);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r4.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, r_r4.adminResponse ? 13 : -1);
} }
function MyReclamationsComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵrepeaterCreate(1, MyReclamationsComponent_Conditional_16_For_2_Template, 14, 12, "div", 33, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.reclamations);
} }
export class MyReclamationsComponent {
    constructor() {
        this.reclamSvc = inject(ReclamationService);
        this.alertSvc = inject(AlertService);
        this.fb = inject(FormBuilder);
        this.loading = true;
        this.submitting = false;
        this.reclamations = [];
        this.showForm = false;
        this.form = this.fb.group({
            type: ['', Validators.required],
            subject: ['', Validators.required],
            description: ['', [Validators.required, Validators.minLength(20)]]
        });
        this.typeOptions = [
            { value: 'TECHNICAL_ISSUE', label: 'Problème technique' },
            { value: 'ACCOUNT_PROBLEM', label: 'Problème de compte' },
            { value: 'PAYMENT_ISSUE', label: 'Problème de paiement' },
            { value: 'ABUSIVE_CONTENT', label: 'Contenu abusif' },
            { value: 'OFFER_FRAUD', label: 'Offre frauduleuse' },
            { value: 'OTHER', label: 'Autre' },
        ];
    }
    ngOnInit() {
        this.reclamSvc.getMine().subscribe({
            next: res => { this.reclamations = res.data; this.loading = false; },
            error: () => { this.loading = false; }
        });
    }
    submit() {
        if (this.form.invalid)
            return;
        this.submitting = true;
        this.reclamSvc.submit(this.form.value).subscribe({
            next: res => {
                this.reclamations.unshift(res.data);
                this.form.reset();
                this.showForm = false;
                this.submitting = false;
                this.alertSvc.success('Réclamation soumise avec succès');
            },
            error: err => { this.submitting = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur'); }
        });
    }
    statusClass(s) {
        return { OPEN: 'chip-danger', IN_PROGRESS: 'chip-warning', RESOLVED: 'chip-success', CLOSED: 'chip-gray', REJECTED: 'chip-gray' }[s] ?? 'chip-gray';
    }
    statusLabel(s) {
        return { OPEN: 'Ouvert', IN_PROGRESS: 'En cours', RESOLVED: 'Résolu', CLOSED: 'Fermé', REJECTED: 'Rejeté' }[s] ?? s;
    }
    getOpenCount() {
        return this.reclamations.filter(r => r.status === 'IN_PROGRESS' || r.status === 'OPEN').length;
    }
    getResolvedCount() {
        return this.reclamations.filter(r => r.status === 'RESOLVED').length;
    }
    static { this.ɵfac = function MyReclamationsComponent_Factory(t) { return new (t || MyReclamationsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyReclamationsComponent, selectors: [["app-my-reclamations"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 17, vars: 5, consts: [[1, "reclamations-wrapper"], [1, "page-header-modern"], [1, "header-content"], [1, "page-title"], [1, "page-subtitle"], ["mat-flat-button", "", 1, "btn-primary-modern", 3, "click"], [1, "stats-bar"], [1, "card", "form-card-modern"], [1, "loading-center"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "form-header-modern"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], [1, "form-group"], ["label", "Type de r\u00E9clamation", "formControlName", "type", 3, "options"], [1, "full-width"], ["matInput", "", "formControlName", "subject", "placeholder", "R\u00E9sumez votre probl\u00E8me..."], ["matPrefix", ""], [1, "form-group", "full"], ["matInput", "", "formControlName", "description", "rows", "5", "placeholder", "D\u00E9crivez votre probl\u00E8me en d\u00E9tail..."], [1, "form-actions"], ["mat-flat-button", "", "type", "button", 1, "btn-secondary", 3, "click"], ["mat-flat-button", "", "type", "submit", 1, "btn-primary-modern", 3, "disabled"], ["diameter", "18"], ["diameter", "40"], [1, "empty-state-modern", "card"], [1, "empty-icon-wrapper"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "reclamations-grid"], [1, "reclamation-card-modern", "card"], [1, "card-header-modern"], [1, "card-id-badge"], [1, "card-date"], [1, "card-title"], [1, "card-description"], [1, "admin-reply-modern"], [1, "reply-header-modern"], [1, "reply-icon"], [1, "material-icons-round"], [1, "resolved-date"], [1, "reply-text"]], template: function MyReclamationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1", 3);
            i0.ɵɵtext(5, "Mes r\u00E9clamations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 4);
            i0.ɵɵtext(7, "G\u00E9rez et suivez vos r\u00E9clamations en temps r\u00E9el");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 5);
            i0.ɵɵlistener("click", function MyReclamationsComponent_Template_button_click_8_listener() { return ctx.showForm = !ctx.showForm; });
            i0.ɵɵelementStart(9, "mat-icon");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(12, MyReclamationsComponent_Conditional_12_Template, 16, 3, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(13, MyReclamationsComponent_Conditional_13_Template, 35, 6, "div", 7)(14, MyReclamationsComponent_Conditional_14_Template, 2, 0, "div", 8)(15, MyReclamationsComponent_Conditional_15_Template, 12, 0)(16, MyReclamationsComponent_Conditional_16_Template, 3, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.showForm ? "close" : "add_circle");
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.showForm ? "Annuler" : "Nouvelle r\u00E9clamation", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(12, ctx.reclamations.length > 0 ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(13, ctx.showForm ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(14, ctx.loading ? 14 : !ctx.reclamations.length ? 15 : 16);
        } }, dependencies: [CommonModule, i1.DatePipe, ReactiveFormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.FormGroupDirective, i2.FormControlName, MatButtonModule, i3.MatButton, MatIconModule, i4.MatIcon, MatFormFieldModule, i5.MatFormField, i5.MatLabel, i5.MatHint, i5.MatError, i5.MatPrefix, MatInputModule, i6.MatInput, AppSelectComponent, MatProgressSpinnerModule, i7.MatProgressSpinner], styles: [".reclamations-wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.page-header-modern[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n\n  .header-content {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 20px;\n    margin-bottom: 24px;\n\n    h1 {\n      font-size: 2rem;\n      font-weight: 900;\n      margin: 0 0 4px 0;\n      color: #000;\n    }\n\n    .page-subtitle {\n      font-size: 0.95rem;\n      color: #666;\n      margin: 0;\n      font-weight: 500;\n    }\n\n    @media (max-width: 768px) {\n      flex-direction: column;\n      align-items: stretch;\n\n      .btn-primary-modern {\n        width: 100%;\n      }\n    }\n  }\n}\n\n.stats-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border: 1px solid rgba(255, 105, 0, 0.1);\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex-wrap: wrap;\n\n  .stat-item {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n    .stat-label {\n      font-size: 0.8rem;\n      color: #666;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    .stat-value {\n      font-size: 1.75rem;\n      font-weight: 900;\n      background: linear-gradient(135deg, #ff6900, #fcb900);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      background-clip: text;\n    }\n  }\n}\n\n.btn-primary-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  padding: 0 24px !important;\n  border-radius: 12px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(255, 105, 0, 0.25) !important;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px rgba(255, 105, 0, 0.35) !important;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n  }\n\n  mat-icon {\n    font-size: 22px;\n  }\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5 !important;\n  color: #333 !important;\n  font-weight: 600 !important;\n  height: 44px !important;\n  border-radius: 10px !important;\n  transition: all 0.2s ease !important;\n\n  &:hover {\n    background: #efefef !important;\n  }\n}\n\n.form-card-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fafafa, #f5f5f5);\n  border: 1px solid #eee;\n  margin-bottom: 32px;\n  padding: 28px;\n\n  .form-header-modern {\n    margin-bottom: 24px;\n\n    h3 {\n      font-size: 1.25rem;\n      font-weight: 800;\n      margin: 0 0 4px 0;\n      color: #000;\n    }\n\n    p {\n      font-size: 0.9rem;\n      color: #666;\n      margin: 0;\n      font-weight: 500;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  .form-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n\n    .form-group.full {\n      grid-column: 1 / -1;\n    }\n  }\n\n  .form-group {\n    display: flex;\n    flex-direction: column;\n\n    .full-width {\n      width: 100%;\n    }\n\n    mat-form-field {\n      ::ng-deep {\n        .mdc-text-field--filled {\n          background-color: #ffffff !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #666 !important;\n        }\n\n        .mat-focused {\n          .mdc-line-ripple::after {\n            border-bottom-color: #ff6900 !important;\n          }\n        }\n      }\n    }\n  }\n\n  .form-actions {\n    display: flex;\n    gap: 12px;\n    margin-top: 8px;\n\n    @media (max-width: 600px) {\n      flex-direction: column;\n\n      button {\n        width: 100%;\n      }\n    }\n  }\n}\n\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px 20px;\n}\n\n.empty-state-modern[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border: 2px dashed rgba(255, 105, 0, 0.2);\n\n  .empty-icon-wrapper {\n    margin-bottom: 20px;\n\n    .empty-icon {\n      font-size: 64px;\n      color: #ff6900;\n      opacity: 0.7;\n    }\n  }\n\n  .empty-title {\n    font-size: 1.3rem;\n    font-weight: 800;\n    margin: 0 0 8px 0;\n    color: #000;\n  }\n\n  .empty-desc {\n    font-size: 0.95rem;\n    color: #666;\n    margin: 0 0 24px 0;\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  button {\n    margin-top: 12px;\n  }\n}\n\n.reclamations-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n\n  @media (max-width: 768px) {\n    gap: 16px;\n  }\n}\n\n.reclamation-card-modern[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n  background: #fff;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n\n  &:hover {\n    border-color: rgba(255, 105, 0, 0.2);\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n    transform: translateY(-2px);\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 4px;\n    background: linear-gradient(90deg, #ff6900, #fcb900);\n  }\n\n  .card-header-modern {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-bottom: 16px;\n    padding-bottom: 12px;\n    border-bottom: 1px solid #f0f0f0;\n  }\n\n  .card-id-badge {\n    font-size: 0.75rem;\n    font-weight: 700;\n    color: #ff6900;\n    background: rgba(255, 105, 0, 0.08);\n    padding: 4px 10px;\n    border-radius: 6px;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  .chip {\n    padding: 6px 12px;\n    border-radius: 20px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n\n    &.chip-danger {\n      background: #fee2e2;\n      color: #dc2626;\n    }\n\n    &.chip-warning {\n      background: #fef3c7;\n      color: #d97706;\n    }\n\n    &.chip-success {\n      background: #dcfce7;\n      color: #16a34a;\n    }\n\n    &.chip-gray {\n      background: #f3f4f6;\n      color: #6b7280;\n    }\n  }\n\n  .card-date {\n    margin-left: auto;\n    font-size: 0.8rem;\n    color: #999;\n    font-weight: 500;\n  }\n\n  .card-title {\n    font-size: 1.05rem;\n    font-weight: 800;\n    margin: 0 0 10px 0;\n    color: #000;\n    line-height: 1.4;\n  }\n\n  .card-description {\n    font-size: 0.9rem;\n    color: #555;\n    line-height: 1.6;\n    margin: 0 0 16px 0;\n    word-break: break-word;\n  }\n}\n\n.admin-reply-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f0f9ff, #f0fdf4);\n  border: 1px solid #86efac;\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 12px;\n\n  .reply-header-modern {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 12px;\n\n    .reply-icon {\n      flex-shrink: 0;\n      width: 40px;\n      height: 40px;\n      background: linear-gradient(135deg, #16a34a, #059669);\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n\n      .material-icons-round {\n        font-size: 22px;\n      }\n    }\n\n    strong {\n      font-size: 0.9rem;\n      color: #166534;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .resolved-date {\n      font-size: 0.8rem;\n      color: #16a34a;\n      font-weight: 600;\n      margin: 0;\n    }\n  }\n\n  .reply-text {\n    font-size: 0.9rem;\n    color: #166534;\n    line-height: 1.6;\n    margin: 8px 0 0 0;\n  }\n}\n\n//[_ngcontent-%COMP%]   Material[_ngcontent-%COMP%]   overrides\n[_ngcontent-%COMP%]  {\n  .my-reclamations-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mdc-text-field--filled {\n        background-color: #f8f9fa !important;\n\n        &:hover {\n          background-color: #f0f1f3 !important;\n        }\n      }\n\n      .mat-mdc-floating-label {\n        color: #666 !important;\n        font-weight: 500;\n      }\n\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n      }\n\n      .mat-focused {\n        .mdc-line-ripple::after {\n          border-bottom-color: #ff6900 !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #ff6900 !important;\n          font-weight: 600;\n        }\n      }\n\n      .mat-error {\n        color: #dc2626 !important;\n        font-weight: 500;\n      }\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyReclamationsComponent, [{
        type: Component,
        args: [{ selector: 'app-my-reclamations', standalone: true, imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent, MatProgressSpinnerModule], template: "<div class=\"reclamations-wrapper\">\n  <div class=\"page-header-modern\">\n    <div class=\"header-content\">\n      <div>\n        <h1 class=\"page-title\">Mes r\u00E9clamations</h1>\n        <p class=\"page-subtitle\">G\u00E9rez et suivez vos r\u00E9clamations en temps r\u00E9el</p>\n      </div>\n      <button mat-flat-button class=\"btn-primary-modern\" (click)=\"showForm = !showForm\">\n        <mat-icon>{{ showForm ? 'close' : 'add_circle' }}</mat-icon>\n        {{ showForm ? 'Annuler' : 'Nouvelle r\u00E9clamation' }}\n      </button>\n    </div>\n    @if (reclamations.length > 0) {\n      <div class=\"stats-bar\">\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">Total</span>\n          <span class=\"stat-value\">{{ reclamations.length }}</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">En cours</span>\n          <span class=\"stat-value\">{{ getOpenCount() }}</span>\n        </div>\n        <div class=\"stat-item\">\n          <span class=\"stat-label\">R\u00E9solues</span>\n          <span class=\"stat-value\">{{ getResolvedCount() }}</span>\n        </div>\n      </div>\n    }\n  </div>\n\n  <!-- New reclamation form -->\n  @if (showForm) {\n    <div class=\"card form-card-modern\">\n      <div class=\"form-header-modern\">\n        <h3>Soumettre une nouvelle r\u00E9clamation</h3>\n        <p>D\u00E9crivez-nous votre probl\u00E8me et nous vous aiderons au plus vite</p>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <div class=\"form-grid\">\n          <div class=\"form-group\">\n            <app-select label=\"Type de r\u00E9clamation\" [options]=\"typeOptions\" formControlName=\"type\"></app-select>\n          </div>\n\n          <div class=\"form-group\">\n            <mat-form-field class=\"full-width\">\n              <mat-label>Sujet</mat-label>\n              <input matInput formControlName=\"subject\" placeholder=\"R\u00E9sumez votre probl\u00E8me...\" />\n              <mat-icon matPrefix>subject</mat-icon>\n            </mat-form-field>\n          </div>\n\n          <div class=\"form-group full\">\n            <mat-form-field class=\"full-width\">\n              <mat-label>Description d\u00E9taill\u00E9e</mat-label>\n              <textarea matInput formControlName=\"description\" rows=\"5\" placeholder=\"D\u00E9crivez votre probl\u00E8me en d\u00E9tail...\"></textarea>\n              <mat-icon matPrefix>description</mat-icon>\n              <mat-hint>{{ form.get('description')?.value?.length || 0 }}/500 caract\u00E8res</mat-hint>\n              @if (form.get('description')?.hasError('minlength') && form.get('description')?.touched) {\n                <mat-error>Minimum 20 caract\u00E8res requis</mat-error>\n              }\n            </mat-form-field>\n          </div>\n        </div>\n\n        <div class=\"form-actions\">\n          <button mat-flat-button type=\"button\" (click)=\"showForm = false\" class=\"btn-secondary\">\n            <mat-icon>cancel</mat-icon> Annuler\n          </button>\n          <button mat-flat-button type=\"submit\" class=\"btn-primary-modern\" [disabled]=\"form.invalid || submitting\">\n            @if (submitting) {\n              <mat-spinner diameter=\"18\" />\n            } @else {\n              <mat-icon>send</mat-icon> Soumettre la r\u00E9clamation\n            }\n          </button>\n        </div>\n      </form>\n    </div>\n  }\n\n  <!-- Reclamations list -->\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else if (!reclamations.length) {\n    <div class=\"empty-state-modern card\">\n      <div class=\"empty-icon-wrapper\">\n        <span class=\"material-icons-round empty-icon\">done_all</span>\n      </div>\n      <p class=\"empty-title\">Aucune r\u00E9clamation</p>\n      <p class=\"empty-desc\">Vous n'avez pas soumis de r\u00E9clamation. Si vous avez un probl\u00E8me, n'h\u00E9sitez pas \u00E0 en cr\u00E9er une.</p>\n      <button mat-flat-button class=\"btn-primary-modern\" (click)=\"showForm = true\">\n        <mat-icon>add_circle</mat-icon> Cr\u00E9er une r\u00E9clamation\n      </button>\n    </div>\n  } @else {\n    <div class=\"reclamations-grid\">\n      @for (r of reclamations; track r.id) {\n        <div class=\"reclamation-card-modern card\">\n          <div class=\"card-header-modern\">\n            <div class=\"card-id-badge\">#{{ r.id }}</div>\n            <span class=\"chip {{ statusClass(r.status) }}\">{{ statusLabel(r.status) }}</span>\n            <span class=\"card-date\">{{ r.createdAt | date:'dd/MM/yyyy' }}</span>\n          </div>\n\n          <h4 class=\"card-title\">{{ r.subject }}</h4>\n          <p class=\"card-description\">{{ r.description }}</p>\n\n          @if (r.adminResponse) {\n            <div class=\"admin-reply-modern\">\n              <div class=\"reply-header-modern\">\n                <div class=\"reply-icon\">\n                  <span class=\"material-icons-round\">support_agent</span>\n                </div>\n                <div>\n                  <strong>R\u00E9ponse de notre \u00E9quipe support</strong>\n                  @if (r.resolvedAt) {\n                    <p class=\"resolved-date\">{{ r.resolvedAt | date:'dd/MM/yyyy \u00E0 HH:mm' }}</p>\n                  }\n                </div>\n              </div>\n              <p class=\"reply-text\">{{ r.adminResponse }}</p>\n            </div>\n          }\n        </div>\n      }\n    </div>\n  }\n</div>\n\n", styles: [".reclamations-wrapper {\n  padding: 0;\n}\n\n.page-header-modern {\n  margin-bottom: 32px;\n\n  .header-content {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 20px;\n    margin-bottom: 24px;\n\n    h1 {\n      font-size: 2rem;\n      font-weight: 900;\n      margin: 0 0 4px 0;\n      color: #000;\n    }\n\n    .page-subtitle {\n      font-size: 0.95rem;\n      color: #666;\n      margin: 0;\n      font-weight: 500;\n    }\n\n    @media (max-width: 768px) {\n      flex-direction: column;\n      align-items: stretch;\n\n      .btn-primary-modern {\n        width: 100%;\n      }\n    }\n  }\n}\n\n.stats-bar {\n  display: flex;\n  gap: 16px;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border: 1px solid rgba(255, 105, 0, 0.1);\n  border-radius: 14px;\n  padding: 20px 24px;\n  flex-wrap: wrap;\n\n  .stat-item {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n    .stat-label {\n      font-size: 0.8rem;\n      color: #666;\n      font-weight: 600;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    .stat-value {\n      font-size: 1.75rem;\n      font-weight: 900;\n      background: linear-gradient(135deg, #ff6900, #fcb900);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      background-clip: text;\n    }\n  }\n}\n\n.btn-primary-modern {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  padding: 0 24px !important;\n  border-radius: 12px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(255, 105, 0, 0.25) !important;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px rgba(255, 105, 0, 0.35) !important;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n  }\n\n  mat-icon {\n    font-size: 22px;\n  }\n}\n\n.btn-secondary {\n  background: #f5f5f5 !important;\n  color: #333 !important;\n  font-weight: 600 !important;\n  height: 44px !important;\n  border-radius: 10px !important;\n  transition: all 0.2s ease !important;\n\n  &:hover {\n    background: #efefef !important;\n  }\n}\n\n.form-card-modern {\n  background: linear-gradient(135deg, #fafafa, #f5f5f5);\n  border: 1px solid #eee;\n  margin-bottom: 32px;\n  padding: 28px;\n\n  .form-header-modern {\n    margin-bottom: 24px;\n\n    h3 {\n      font-size: 1.25rem;\n      font-weight: 800;\n      margin: 0 0 4px 0;\n      color: #000;\n    }\n\n    p {\n      font-size: 0.9rem;\n      color: #666;\n      margin: 0;\n      font-weight: 500;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n  }\n\n  .form-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 16px;\n\n    @media (max-width: 600px) {\n      grid-template-columns: 1fr;\n    }\n\n    .form-group.full {\n      grid-column: 1 / -1;\n    }\n  }\n\n  .form-group {\n    display: flex;\n    flex-direction: column;\n\n    .full-width {\n      width: 100%;\n    }\n\n    mat-form-field {\n      ::ng-deep {\n        .mdc-text-field--filled {\n          background-color: #ffffff !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #666 !important;\n        }\n\n        .mat-focused {\n          .mdc-line-ripple::after {\n            border-bottom-color: #ff6900 !important;\n          }\n        }\n      }\n    }\n  }\n\n  .form-actions {\n    display: flex;\n    gap: 12px;\n    margin-top: 8px;\n\n    @media (max-width: 600px) {\n      flex-direction: column;\n\n      button {\n        width: 100%;\n      }\n    }\n  }\n}\n\n.loading-center {\n  display: flex;\n  justify-content: center;\n  padding: 80px 20px;\n}\n\n.empty-state-modern {\n  text-align: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border: 2px dashed rgba(255, 105, 0, 0.2);\n\n  .empty-icon-wrapper {\n    margin-bottom: 20px;\n\n    .empty-icon {\n      font-size: 64px;\n      color: #ff6900;\n      opacity: 0.7;\n    }\n  }\n\n  .empty-title {\n    font-size: 1.3rem;\n    font-weight: 800;\n    margin: 0 0 8px 0;\n    color: #000;\n  }\n\n  .empty-desc {\n    font-size: 0.95rem;\n    color: #666;\n    margin: 0 0 24px 0;\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  button {\n    margin-top: 12px;\n  }\n}\n\n.reclamations-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n\n  @media (max-width: 768px) {\n    gap: 16px;\n  }\n}\n\n.reclamation-card-modern {\n  border: 1px solid #eee;\n  background: #fff;\n  overflow: hidden;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n\n  &:hover {\n    border-color: rgba(255, 105, 0, 0.2);\n    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);\n    transform: translateY(-2px);\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 4px;\n    background: linear-gradient(90deg, #ff6900, #fcb900);\n  }\n\n  .card-header-modern {\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    margin-bottom: 16px;\n    padding-bottom: 12px;\n    border-bottom: 1px solid #f0f0f0;\n  }\n\n  .card-id-badge {\n    font-size: 0.75rem;\n    font-weight: 700;\n    color: #ff6900;\n    background: rgba(255, 105, 0, 0.08);\n    padding: 4px 10px;\n    border-radius: 6px;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n  }\n\n  .chip {\n    padding: 6px 12px;\n    border-radius: 20px;\n    font-size: 0.75rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n\n    &.chip-danger {\n      background: #fee2e2;\n      color: #dc2626;\n    }\n\n    &.chip-warning {\n      background: #fef3c7;\n      color: #d97706;\n    }\n\n    &.chip-success {\n      background: #dcfce7;\n      color: #16a34a;\n    }\n\n    &.chip-gray {\n      background: #f3f4f6;\n      color: #6b7280;\n    }\n  }\n\n  .card-date {\n    margin-left: auto;\n    font-size: 0.8rem;\n    color: #999;\n    font-weight: 500;\n  }\n\n  .card-title {\n    font-size: 1.05rem;\n    font-weight: 800;\n    margin: 0 0 10px 0;\n    color: #000;\n    line-height: 1.4;\n  }\n\n  .card-description {\n    font-size: 0.9rem;\n    color: #555;\n    line-height: 1.6;\n    margin: 0 0 16px 0;\n    word-break: break-word;\n  }\n}\n\n.admin-reply-modern {\n  background: linear-gradient(135deg, #f0f9ff, #f0fdf4);\n  border: 1px solid #86efac;\n  border-radius: 12px;\n  padding: 16px;\n  margin-top: 12px;\n\n  .reply-header-modern {\n    display: flex;\n    gap: 12px;\n    margin-bottom: 12px;\n\n    .reply-icon {\n      flex-shrink: 0;\n      width: 40px;\n      height: 40px;\n      background: linear-gradient(135deg, #16a34a, #059669);\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n\n      .material-icons-round {\n        font-size: 22px;\n      }\n    }\n\n    strong {\n      font-size: 0.9rem;\n      color: #166534;\n      display: block;\n      margin-bottom: 2px;\n    }\n\n    .resolved-date {\n      font-size: 0.8rem;\n      color: #16a34a;\n      font-weight: 600;\n      margin: 0;\n    }\n  }\n\n  .reply-text {\n    font-size: 0.9rem;\n    color: #166534;\n    line-height: 1.6;\n    margin: 8px 0 0 0;\n  }\n}\n\n// Material overrides\n::ng-deep {\n  .my-reclamations-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mdc-text-field--filled {\n        background-color: #f8f9fa !important;\n\n        &:hover {\n          background-color: #f0f1f3 !important;\n        }\n      }\n\n      .mat-mdc-floating-label {\n        color: #666 !important;\n        font-weight: 500;\n      }\n\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n      }\n\n      .mat-focused {\n        .mdc-line-ripple::after {\n          border-bottom-color: #ff6900 !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #ff6900 !important;\n          font-weight: 600;\n        }\n      }\n\n      .mat-error {\n        color: #dc2626 !important;\n        font-weight: 500;\n      }\n    }\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyReclamationsComponent, { className: "MyReclamationsComponent", filePath: "app\\features\\shared\\reclamations\\my-reclamations.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=my-reclamations.component.js.map