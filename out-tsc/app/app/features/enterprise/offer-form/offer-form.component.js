import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertService } from '../../../core/services/alert.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { JobOfferService } from '../../../core/services/job-offer.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/checkbox";
import * as i7 from "@angular/material/progress-spinner";
function OfferFormComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner", 7);
    i0.ɵɵelementEnd();
} }
function OfferFormComponent_Conditional_13_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Minimum 50 caract\u00E8res");
    i0.ɵɵelementEnd();
} }
function OfferFormComponent_Conditional_13_Conditional_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 34);
} }
function OfferFormComponent_Conditional_13_Conditional_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.isEdit ? "save" : "publish");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.isEdit ? "Enregistrer" : "Cr\u00E9er l'offre", " ");
} }
function OfferFormComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 8);
    i0.ɵɵlistener("ngSubmit", function OfferFormComponent_Conditional_13_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(1, "h3", 9);
    i0.ɵɵtext(2, "Informations principales");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 10)(4, "mat-form-field", 11)(5, "mat-label");
    i0.ɵɵtext(6, "Titre du poste *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field")(9, "mat-label");
    i0.ɵɵtext(10, "Lieu");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 13);
    i0.ɵɵelementStart(12, "mat-icon", 14);
    i0.ɵɵtext(13, "place");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "app-select", 15);
    i0.ɵɵelementStart(15, "mat-form-field")(16, "mat-label");
    i0.ɵɵtext(17, "Salaire minimum (\u20AC/an)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 16);
    i0.ɵɵelementStart(19, "mat-icon", 14);
    i0.ɵɵtext(20, "euro");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "mat-form-field")(22, "mat-label");
    i0.ɵɵtext(23, "Salaire maximum (\u20AC/an)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(24, "input", 17);
    i0.ɵɵelementStart(25, "mat-icon", 14);
    i0.ɵɵtext(26, "euro");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "mat-form-field")(28, "mat-label");
    i0.ɵɵtext(29, "Exp\u00E9rience requise (ann\u00E9es)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(30, "input", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "mat-form-field")(32, "mat-label");
    i0.ɵɵtext(33, "Date limite de candidature");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(34, "input", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "mat-form-field")(36, "mat-label");
    i0.ɵɵtext(37, "Date de d\u00E9but souhait\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(38, "input", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "mat-form-field")(40, "mat-label");
    i0.ɵɵtext(41, "Nombre de postes");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(42, "input", 21);
    i0.ɵɵelementStart(43, "mat-icon", 14);
    i0.ɵɵtext(44, "group");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(45, "app-select", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 23)(47, "mat-checkbox", 24);
    i0.ɵɵtext(48, "Poste en t\u00E9l\u00E9travail (partiel ou total)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "h3", 9);
    i0.ɵɵtext(50, "D\u00E9tails de l'offre");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "mat-form-field")(52, "mat-label");
    i0.ɵɵtext(53, "Description du poste *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(54, "textarea", 25);
    i0.ɵɵtemplate(55, OfferFormComponent_Conditional_13_Conditional_55_Template, 2, 0, "mat-error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "mat-form-field")(57, "mat-label");
    i0.ɵɵtext(58, "Exigences du poste");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(59, "textarea", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "mat-form-field")(61, "mat-label");
    i0.ɵɵtext(62, "Comp\u00E9tences requises (pour le scoring IA)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(63, "input", 27);
    i0.ɵɵelementStart(64, "mat-hint");
    i0.ɵɵtext(65, "Ces comp\u00E9tences servent au matching IA avec les candidats");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "mat-form-field")(67, "mat-label");
    i0.ɵɵtext(68, "Stack technique");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(69, "input", 28);
    i0.ɵɵelementStart(70, "mat-hint");
    i0.ɵɵtext(71, "Technologies utilis\u00E9es dans l'entreprise");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "mat-form-field")(73, "mat-label");
    i0.ɵɵtext(74, "Avantages (benefits)");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(75, "textarea", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "mat-form-field")(77, "mat-label");
    i0.ɵɵtext(78, "Processus d'entretien");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(79, "textarea", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "div", 31)(81, "a", 32);
    i0.ɵɵtext(82, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "button", 33);
    i0.ɵɵtemplate(84, OfferFormComponent_Conditional_13_Conditional_84_Template, 1, 0, "mat-spinner", 34)(85, OfferFormComponent_Conditional_13_Conditional_85_Template, 3, 2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("options", ctx_r1.contractTypeOpts);
    i0.ɵɵadvance(31);
    i0.ɵɵproperty("options", ctx_r1.experienceLevelOpts);
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(55, ((tmp_4_0 = ctx_r1.form.get("description")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx_r1.form.get("description")) == null ? null : tmp_4_0.touched) ? 55 : -1);
    i0.ɵɵadvance(28);
    i0.ɵɵproperty("disabled", ctx_r1.form.invalid || ctx_r1.saving);
    i0.ɵɵadvance();
    i0.ɵɵconditional(84, ctx_r1.saving ? 84 : 85);
} }
export class OfferFormComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.offerSvc = inject(JobOfferService);
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.alertSvc = inject(AlertService);
        this.loading = false;
        this.saving = false;
        this.isEdit = false;
        this.contractTypes = ['CDI', 'CDD', 'STAGE', 'FREELANCE', 'ALTERNANCE', 'TEMPS_PARTIEL'];
        this.contractTypeOpts = this.contractTypes.map(c => ({ value: c, label: c }));
        this.experienceLevels = ['JUNIOR', 'MID', 'SENIOR', 'LEAD'];
        this.experienceLevelOpts = this.experienceLevels.map(e => ({ value: e, label: e }));
        this.form = this.fb.group({
            title: ['', Validators.required],
            description: ['', [Validators.required, Validators.minLength(50)]],
            requirements: [''],
            requiredSkills: [''],
            location: [''],
            remote: [false],
            contractType: [''],
            salaryMin: [null],
            salaryMax: [null],
            experienceRequired: [null],
            deadlineDate: [null],
            techStack: [''],
            experienceLevel: [null],
            numberOfPositions: [1],
            benefits: [''],
            interviewProcess: [''],
            startDate: [null],
        });
    }
    ngOnInit() {
        this.editId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id') : undefined;
        this.isEdit = !!this.editId;
        if (this.isEdit && this.editId) {
            this.loading = true;
            this.offerSvc.getById(this.editId).subscribe({
                next: res => { this.form.patchValue(res.data); this.loading = false; },
                error: () => { this.loading = false; }
            });
        }
    }
    submit() {
        if (this.form.invalid)
            return;
        this.saving = true;
        const raw = this.form.value;
        // Conversion Date → ISO string (MatDatepicker retourne un objet Date)
        const req = {
            ...raw,
            deadlineDate: raw.deadlineDate instanceof Date
                ? raw.deadlineDate.toISOString().split('T')[0]
                : (raw.deadlineDate ?? null),
            startDate: raw.startDate instanceof Date
                ? raw.startDate.toISOString().split('T')[0]
                : (raw.startDate ?? null)
        };
        const obs = this.isEdit && this.editId
            ? this.offerSvc.update(this.editId, req)
            : this.offerSvc.create(req);
        obs.subscribe({
            next: () => {
                this.saving = false;
                this.alertSvc.success(this.isEdit ? 'Offre mise à jour' : 'Offre créée');
                this.router.navigate(['/enterprise/offers']);
            },
            error: err => { this.saving = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur'); }
        });
    }
    static { this.ɵfac = function OfferFormComponent_Factory(t) { return new (t || OfferFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OfferFormComponent, selectors: [["app-offer-form"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 3, consts: [[1, "form-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["mat-button", "", "routerLink", "/enterprise/offers", 1, "back-btn"], [1, "card", "form-card"], [1, "loading-center"], ["diameter", "40"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-section-title"], [1, "form-grid"], [1, "full"], ["matInput", "", "formControlName", "title", "placeholder", "ex: D\u00E9veloppeur Full-Stack Senior"], ["matInput", "", "formControlName", "location", "placeholder", "Paris, France"], ["matPrefix", ""], ["label", "Type de contrat", "formControlName", "contractType", 3, "options"], ["matInput", "", "formControlName", "salaryMin", "type", "number"], ["matInput", "", "formControlName", "salaryMax", "type", "number"], ["matInput", "", "formControlName", "experienceRequired", "type", "number", "min", "0"], ["matInput", "", "formControlName", "deadlineDate", "type", "date"], ["matInput", "", "formControlName", "startDate", "type", "date"], ["matInput", "", "formControlName", "numberOfPositions", "type", "number", "min", "1"], ["label", "Niveau d'exp\u00E9rience", "formControlName", "experienceLevel", 3, "options"], [1, "checkbox-row"], ["formControlName", "remote"], ["matInput", "", "formControlName", "description", "rows", "6", "placeholder", "D\u00E9crivez le poste, les responsabilit\u00E9s, le contexte de l'\u00E9quipe..."], ["matInput", "", "formControlName", "requirements", "rows", "3", "placeholder", "Qualifications, dipl\u00F4mes, exp\u00E9riences requises..."], ["matInput", "", "formControlName", "requiredSkills", "placeholder", "Angular, Spring Boot, Docker, AWS... (s\u00E9par\u00E9es par des virgules)"], ["matInput", "", "formControlName", "techStack", "placeholder", "React, Node.js, PostgreSQL, Kubernetes..."], ["matInput", "", "formControlName", "benefits", "rows", "3", "placeholder", "Mutuelle premium, titres-restaurant, 2 jours de t\u00E9l\u00E9travail/semaine, RTT..."], ["matInput", "", "formControlName", "interviewProcess", "rows", "3", "placeholder", "Ex : 1) Appel RH 30 min \u2192 2) Test technique \u2192 3) Entretien technique \u2192 4) Entretien RH final"], [1, "form-actions"], ["mat-stroked-button", "", "routerLink", "/enterprise/offers"], ["mat-flat-button", "", "type", "submit", 1, "btn-primary", 3, "disabled"], ["diameter", "20"]], template: function OfferFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4)(8, "mat-icon");
            i0.ɵɵtext(9, "arrow_back");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Retour ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 5);
            i0.ɵɵtemplate(12, OfferFormComponent_Conditional_12_Template, 2, 0, "div", 6)(13, OfferFormComponent_Conditional_13_Template, 86, 6);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.isEdit ? "Modifier l'offre" : "Nouvelle offre d'emploi");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.isEdit ? "Mettez \u00E0 jour les informations de l'offre" : "Cr\u00E9ez et publiez votre offre d'emploi");
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(12, ctx.loading ? 12 : 13);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink, MatButtonModule, i2.MatAnchor, i2.MatButton, MatIconModule, i3.MatIcon, MatFormFieldModule, i4.MatFormField, i4.MatLabel, i4.MatHint, i4.MatError, i4.MatPrefix, MatInputModule, i5.MatInput, AppSelectComponent, MatCheckboxModule, i6.MatCheckbox, MatProgressSpinnerModule, i7.MatProgressSpinner, MatDatepickerModule, MatNativeDateModule], styles: [".page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }\n.back-btn[_ngcontent-%COMP%] { color: var(--text-secondary)!important; }\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.form-card[_ngcontent-%COMP%] { max-width: 780px; }\n.form-section-title[_ngcontent-%COMP%] { font-size: 0.875rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .06em; margin: 20px 0 8px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); }\n.form-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; .full { grid-column: 1/-1; } @media (max-width: 600px) { grid-template-columns: 1fr; } }\n.checkbox-row[_ngcontent-%COMP%] { margin: 4px 0 12px; }\n.form-actions[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: flex-end; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border-color); }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OfferFormComponent, [{
        type: Component,
        args: [{ selector: 'app-offer-form', standalone: true, imports: [CommonModule, ReactiveFormsModule, RouterLink, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent, MatCheckboxModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule], template: "<div class=\"form-page\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"page-title\">{{ isEdit ? 'Modifier l\\'offre' : 'Nouvelle offre d\\'emploi' }}</h1>\n      <p class=\"page-subtitle\">{{ isEdit ? 'Mettez \u00E0 jour les informations de l\\'offre' : 'Cr\u00E9ez et publiez votre offre d\\'emploi' }}</p>\n    </div>\n    <a mat-button routerLink=\"/enterprise/offers\" class=\"back-btn\">\n      <mat-icon>arrow_back</mat-icon> Retour\n    </a>\n  </div>\n\n  <div class=\"card form-card\">\n    @if (loading) {\n      <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n    } @else {\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <h3 class=\"form-section-title\">Informations principales</h3>\n        <div class=\"form-grid\">\n          <mat-form-field class=\"full\">\n            <mat-label>Titre du poste *</mat-label>\n            <input matInput formControlName=\"title\" placeholder=\"ex: D\u00E9veloppeur Full-Stack Senior\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Lieu</mat-label>\n            <input matInput formControlName=\"location\" placeholder=\"Paris, France\" />\n            <mat-icon matPrefix>place</mat-icon>\n          </mat-form-field>\n\n          <app-select label=\"Type de contrat\" [options]=\"contractTypeOpts\" formControlName=\"contractType\"></app-select>\n\n          <mat-form-field>\n            <mat-label>Salaire minimum (\u20AC/an)</mat-label>\n            <input matInput formControlName=\"salaryMin\" type=\"number\" />\n            <mat-icon matPrefix>euro</mat-icon>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Salaire maximum (\u20AC/an)</mat-label>\n            <input matInput formControlName=\"salaryMax\" type=\"number\" />\n            <mat-icon matPrefix>euro</mat-icon>\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Exp\u00E9rience requise (ann\u00E9es)</mat-label>\n            <input matInput formControlName=\"experienceRequired\" type=\"number\" min=\"0\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Date limite de candidature</mat-label>\n            <input matInput formControlName=\"deadlineDate\" type=\"date\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Date de d\u00E9but souhait\u00E9e</mat-label>\n            <input matInput formControlName=\"startDate\" type=\"date\" />\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Nombre de postes</mat-label>\n            <input matInput formControlName=\"numberOfPositions\" type=\"number\" min=\"1\" />\n            <mat-icon matPrefix>group</mat-icon>\n          </mat-form-field>\n\n          <app-select label=\"Niveau d'exp\u00E9rience\" [options]=\"experienceLevelOpts\" formControlName=\"experienceLevel\"></app-select>\n        </div>\n\n        <div class=\"checkbox-row\">\n          <mat-checkbox formControlName=\"remote\">Poste en t\u00E9l\u00E9travail (partiel ou total)</mat-checkbox>\n        </div>\n\n        <h3 class=\"form-section-title\">D\u00E9tails de l'offre</h3>\n\n        <mat-form-field>\n          <mat-label>Description du poste *</mat-label>\n          <textarea matInput formControlName=\"description\" rows=\"6\" placeholder=\"D\u00E9crivez le poste, les responsabilit\u00E9s, le contexte de l'\u00E9quipe...\"></textarea>\n          @if (form.get('description')?.hasError('minlength') && form.get('description')?.touched) {\n            <mat-error>Minimum 50 caract\u00E8res</mat-error>\n          }\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Exigences du poste</mat-label>\n          <textarea matInput formControlName=\"requirements\" rows=\"3\" placeholder=\"Qualifications, dipl\u00F4mes, exp\u00E9riences requises...\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Comp\u00E9tences requises (pour le scoring IA)</mat-label>\n          <input matInput formControlName=\"requiredSkills\" placeholder=\"Angular, Spring Boot, Docker, AWS... (s\u00E9par\u00E9es par des virgules)\" />\n          <mat-hint>Ces comp\u00E9tences servent au matching IA avec les candidats</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Stack technique</mat-label>\n          <input matInput formControlName=\"techStack\" placeholder=\"React, Node.js, PostgreSQL, Kubernetes...\" />\n          <mat-hint>Technologies utilis\u00E9es dans l'entreprise</mat-hint>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Avantages (benefits)</mat-label>\n          <textarea matInput formControlName=\"benefits\" rows=\"3\" placeholder=\"Mutuelle premium, titres-restaurant, 2 jours de t\u00E9l\u00E9travail/semaine, RTT...\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Processus d'entretien</mat-label>\n          <textarea matInput formControlName=\"interviewProcess\" rows=\"3\" placeholder=\"Ex : 1) Appel RH 30 min \u2192 2) Test technique \u2192 3) Entretien technique \u2192 4) Entretien RH final\"></textarea>\n        </mat-form-field>\n\n        <div class=\"form-actions\">\n          <a mat-stroked-button routerLink=\"/enterprise/offers\">Annuler</a>\n          <button mat-flat-button type=\"submit\" class=\"btn-primary\" [disabled]=\"form.invalid || saving\">\n            @if (saving) { <mat-spinner diameter=\"20\" /> }\n            @else { <mat-icon>{{ isEdit ? 'save' : 'publish' }}</mat-icon> {{ isEdit ? 'Enregistrer' : 'Cr\u00E9er l\\'offre' }} }\n          </button>\n        </div>\n      </form>\n    }\n  </div>\n</div>\n", styles: [".page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; }\n.back-btn { color: var(--text-secondary)!important; }\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.form-card { max-width: 780px; }\n.form-section-title { font-size: 0.875rem; font-weight: 600; color: var(--text-secondary); text-transform: uppercase; letter-spacing: .06em; margin: 20px 0 8px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color); }\n.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; .full { grid-column: 1/-1; } @media (max-width: 600px) { grid-template-columns: 1fr; } }\n.checkbox-row { margin: 4px 0 12px; }\n.form-actions { display: flex; align-items: center; justify-content: flex-end; gap: 12px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border-color); }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OfferFormComponent, { className: "OfferFormComponent", filePath: "app\\features\\enterprise\\offer-form\\offer-form.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=offer-form.component.js.map