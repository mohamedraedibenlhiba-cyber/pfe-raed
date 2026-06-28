import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatTabsModule } from '@angular/material/tabs';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { AuthService } from '../../../core/services/auth.service';
import { getApiErrorMessage } from '../../../core/utils/api-error.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/progress-spinner";
import * as i7 from "@angular/material/tabs";
function RegisterComponent_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "L'e-mail est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "E-mail invalide");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le mot de passe est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Minimum 8 caract\u00E8res");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le nom est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le nom de l'entreprise est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_99_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 31);
} }
function RegisterComponent_Conditional_100_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Cr\u00E9er mon compte entreprise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_forward");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_110_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "L'e-mail est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_111_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "E-mail invalide");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le mot de passe est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_122_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Minimum 8 caract\u00E8res");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le nom est obligatoire");
    i0.ɵɵelementEnd();
} }
function RegisterComponent_Conditional_169_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 31);
} }
function RegisterComponent_Conditional_170_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Cr\u00E9er mon profil candidat");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_forward");
    i0.ɵɵelementEnd();
} }
export class RegisterComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.alertSvc = inject(AlertService);
        this.loading = false;
        this.hidePassword = true;
        this.selectedTab = 0;
        this.companySizes = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'];
        this.sectors = [
            'Technologie & IT', 'Finance & Banque', 'Santé & Médical',
            'Éducation & Formation', 'Commerce & Distribution',
            'Industrie & Fabrication', 'Transport & Logistique',
            'Construction & Immobilier', 'Médias & Communication',
            'Conseil & Services', 'Agriculture & Agroalimentaire', 'Autre'
        ];
        this.sectorOpts = this.sectors.map(s => ({ value: s, label: s }));
        this.companySizeOpts = this.companySizes.map(s => ({ value: s, label: s + ' employés' }));
    }
    ngOnInit() {
        this.enterpriseForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            fullName: ['', Validators.required],
            companyName: ['', Validators.required],
            companyDescription: [''],
            companyWebsite: [''],
            companySector: [''],
            companySize: [''],
            siretNumber: [''],
            phoneNumber: [''],
            city: [''],
            country: [''],
        });
        this.candidateForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            fullName: ['', Validators.required],
            headline: [''],
            summary: [''],
            skills: [''],
            linkedinUrl: [''],
            githubUrl: [''],
            yearsExperience: [0, [Validators.min(0)]],
            phoneNumber: [''],
            city: [''],
            country: [''],
        });
    }
    submitEnterprise() {
        if (this.enterpriseForm.invalid)
            return;
        this.loading = true;
        this.auth.registerEnterprise(this.enterpriseForm.value).subscribe({
            next: () => {
                this.alertSvc.success('Succès', 'Inscription réussie! Bienvenue sur NeoHire.');
                this.auth.redirectToDashboard();
            },
            error: err => {
                this.loading = false;
                this.alertSvc.error('Erreur', getApiErrorMessage(err, 'Erreur lors de l\'inscription'));
            }
        });
    }
    submitCandidate() {
        if (this.candidateForm.invalid)
            return;
        this.loading = true;
        this.auth.registerCandidate(this.candidateForm.value).subscribe({
            next: () => {
                this.alertSvc.success('Succès', 'Inscription réussie! Bienvenue sur NeoHire.');
                this.auth.redirectToDashboard();
            },
            error: err => {
                this.loading = false;
                this.alertSvc.error('Erreur', getApiErrorMessage(err, 'Erreur lors de l\'inscription'));
            }
        });
    }
    static { this.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RegisterComponent, selectors: [["app-register"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 176, vars: 24, consts: [[1, "auth-wrapper"], [1, "auth-brand", "register-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "material-icons-round"], [1, "stats-row"], [1, "stat"], [1, "num"], [1, "lbl"], [1, "auth-form-panel", "register-panel"], [1, "auth-form-container", "wide"], [1, "form-header"], ["animationDuration", "0ms", 3, "selectedIndexChange", "selectedIndex"], ["label", "Je suis une Entreprise"], ["novalidate", "", 1, "register-form", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["matInput", "", "formControlName", "email", "type", "email"], ["matPrefix", "", 1, "field-icon"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "companyName"], ["label", "Secteur d'activit\u00E9", "formControlName", "companySector", 3, "options"], ["label", "Taille de l'entreprise", "formControlName", "companySize", 3, "options"], ["matInput", "", "formControlName", "companyWebsite", "placeholder", "https://..."], ["matInput", "", "formControlName", "siretNumber"], [1, "full-width"], ["matInput", "", "formControlName", "companyDescription", "rows", "3"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["mat-flat-button", "", "type", "submit", 1, "btn-submit", 3, "disabled"], ["diameter", "20"], ["label", "Je suis un Candidat"], ["matInput", "", "formControlName", "headline", "placeholder", "ex: D\u00E9veloppeur Full-Stack Senior"], ["matInput", "", "formControlName", "skills", "placeholder", "Angular, Spring Boot, Docker..."], ["matInput", "", "formControlName", "yearsExperience", "type", "number", "min", "0"], ["matInput", "", "formControlName", "linkedinUrl", "placeholder", "https://linkedin.com/in/..."], ["matInput", "", "formControlName", "githubUrl", "placeholder", "https://github.com/..."], ["matInput", "", "formControlName", "summary", "rows", "3", "placeholder", "Pr\u00E9sentez-vous en quelques lignes..."], [1, "form-footer"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "rocket_launch");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "NeoHire");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Rejoignez les innovateurs qui transforment");
            i0.ɵɵelement(10, "br");
            i0.ɵɵtext(11, "le recrutement avec l'IA.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5)(13, "div", 6)(14, "span", 7);
            i0.ɵɵtext(15, "5 000+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span", 8);
            i0.ɵɵtext(17, "Entreprises");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 6)(19, "span", 7);
            i0.ɵɵtext(20, "50 000+");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span", 8);
            i0.ɵɵtext(22, "Talents");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 6)(24, "span", 7);
            i0.ɵɵtext(25, "92%");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "span", 8);
            i0.ɵɵtext(27, "Succ\u00E8s");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(28, "div", 9)(29, "div", 10)(30, "div", 11)(31, "h2");
            i0.ɵɵtext(32, "Cr\u00E9er un compte");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p");
            i0.ɵɵtext(34, "Choisissez votre type de compte pour commencer");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "mat-tab-group", 12);
            i0.ɵɵtwoWayListener("selectedIndexChange", function RegisterComponent_Template_mat_tab_group_selectedIndexChange_35_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event); return $event; });
            i0.ɵɵelementStart(36, "mat-tab", 13)(37, "form", 14);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_37_listener() { return ctx.submitEnterprise(); });
            i0.ɵɵelementStart(38, "div", 15)(39, "mat-form-field")(40, "mat-label");
            i0.ɵɵtext(41, "E-mail professionnel");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(42, "input", 16);
            i0.ɵɵelementStart(43, "mat-icon", 17);
            i0.ɵɵtext(44, "mail_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(45, RegisterComponent_Conditional_45_Template, 2, 0, "mat-error")(46, RegisterComponent_Conditional_46_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "mat-form-field")(48, "mat-label");
            i0.ɵɵtext(49, "Mot de passe");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(50, "input", 18);
            i0.ɵɵelementStart(51, "mat-icon", 17);
            i0.ɵɵtext(52, "lock_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "button", 19);
            i0.ɵɵlistener("click", function RegisterComponent_Template_button_click_53_listener() { return ctx.hidePassword = !ctx.hidePassword; });
            i0.ɵɵelementStart(54, "mat-icon");
            i0.ɵɵtext(55);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(56, RegisterComponent_Conditional_56_Template, 2, 0, "mat-error")(57, RegisterComponent_Conditional_57_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "mat-form-field")(59, "mat-label");
            i0.ɵɵtext(60, "Nom complet (responsable)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(61, "input", 20);
            i0.ɵɵelementStart(62, "mat-icon", 17);
            i0.ɵɵtext(63, "person_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(64, RegisterComponent_Conditional_64_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "mat-form-field")(66, "mat-label");
            i0.ɵɵtext(67, "Nom de l'entreprise");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(68, "input", 21);
            i0.ɵɵelementStart(69, "mat-icon", 17);
            i0.ɵɵtext(70, "business");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(71, RegisterComponent_Conditional_71_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(72, "app-select", 22)(73, "app-select", 23);
            i0.ɵɵelementStart(74, "mat-form-field")(75, "mat-label");
            i0.ɵɵtext(76, "Site web");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(77, "input", 24);
            i0.ɵɵelementStart(78, "mat-icon", 17);
            i0.ɵɵtext(79, "language");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "mat-form-field")(81, "mat-label");
            i0.ɵɵtext(82, "Num\u00E9ro SIRET");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(83, "input", 25);
            i0.ɵɵelementStart(84, "mat-icon", 17);
            i0.ɵɵtext(85, "badge");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(86, "mat-form-field", 26)(87, "mat-label");
            i0.ɵɵtext(88, "Description de l'entreprise");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(89, "textarea", 27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "mat-form-field")(91, "mat-label");
            i0.ɵɵtext(92, "Ville");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(93, "input", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "mat-form-field")(95, "mat-label");
            i0.ɵɵtext(96, "Pays");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(97, "input", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(98, "button", 30);
            i0.ɵɵtemplate(99, RegisterComponent_Conditional_99_Template, 1, 0, "mat-spinner", 31)(100, RegisterComponent_Conditional_100_Template, 4, 0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(101, "mat-tab", 32)(102, "form", 14);
            i0.ɵɵlistener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_102_listener() { return ctx.submitCandidate(); });
            i0.ɵɵelementStart(103, "div", 15)(104, "mat-form-field")(105, "mat-label");
            i0.ɵɵtext(106, "E-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(107, "input", 16);
            i0.ɵɵelementStart(108, "mat-icon", 17);
            i0.ɵɵtext(109, "mail_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(110, RegisterComponent_Conditional_110_Template, 2, 0, "mat-error")(111, RegisterComponent_Conditional_111_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(112, "mat-form-field")(113, "mat-label");
            i0.ɵɵtext(114, "Mot de passe");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(115, "input", 18);
            i0.ɵɵelementStart(116, "mat-icon", 17);
            i0.ɵɵtext(117, "lock_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(118, "button", 19);
            i0.ɵɵlistener("click", function RegisterComponent_Template_button_click_118_listener() { return ctx.hidePassword = !ctx.hidePassword; });
            i0.ɵɵelementStart(119, "mat-icon");
            i0.ɵɵtext(120);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(121, RegisterComponent_Conditional_121_Template, 2, 0, "mat-error")(122, RegisterComponent_Conditional_122_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "mat-form-field")(124, "mat-label");
            i0.ɵɵtext(125, "Nom complet");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(126, "input", 20);
            i0.ɵɵelementStart(127, "mat-icon", 17);
            i0.ɵɵtext(128, "person_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(129, RegisterComponent_Conditional_129_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(130, "mat-form-field")(131, "mat-label");
            i0.ɵɵtext(132, "Titre professionnel");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(133, "input", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(134, "mat-form-field")(135, "mat-label");
            i0.ɵɵtext(136, "Comp\u00E9tences cl\u00E9s");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(137, "input", 34);
            i0.ɵɵelementStart(138, "mat-icon", 17);
            i0.ɵɵtext(139, "psychology");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(140, "mat-form-field")(141, "mat-label");
            i0.ɵɵtext(142, "Ann\u00E9es d'exp\u00E9rience");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(143, "input", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(144, "mat-form-field")(145, "mat-label");
            i0.ɵɵtext(146, "LinkedIn");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(147, "input", 36);
            i0.ɵɵelementStart(148, "mat-icon", 17);
            i0.ɵɵtext(149, "link");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(150, "mat-form-field")(151, "mat-label");
            i0.ɵɵtext(152, "GitHub");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(153, "input", 37);
            i0.ɵɵelementStart(154, "mat-icon", 17);
            i0.ɵɵtext(155, "code");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(156, "mat-form-field", 26)(157, "mat-label");
            i0.ɵɵtext(158, "R\u00E9sum\u00E9 professionnel");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(159, "textarea", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(160, "mat-form-field")(161, "mat-label");
            i0.ɵɵtext(162, "Ville");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(163, "input", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(164, "mat-form-field")(165, "mat-label");
            i0.ɵɵtext(166, "Pays");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(167, "input", 29);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(168, "button", 30);
            i0.ɵɵtemplate(169, RegisterComponent_Conditional_169_Template, 1, 0, "mat-spinner", 31)(170, RegisterComponent_Conditional_170_Template, 4, 0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(171, "div", 39)(172, "p");
            i0.ɵɵtext(173, "D\u00E9j\u00E0 inscrit ? ");
            i0.ɵɵelementStart(174, "a", 40);
            i0.ɵɵtext(175, "Se connecter");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_3_0;
            let tmp_6_0;
            let tmp_7_0;
            let tmp_8_0;
            let tmp_9_0;
            let tmp_15_0;
            let tmp_16_0;
            let tmp_19_0;
            let tmp_20_0;
            let tmp_21_0;
            i0.ɵɵadvance(35);
            i0.ɵɵtwoWayProperty("selectedIndex", ctx.selectedTab);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("formGroup", ctx.enterpriseForm);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(45, ((tmp_2_0 = ctx.enterpriseForm.get("email")) == null ? null : tmp_2_0.hasError("required")) ? 45 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(46, ((tmp_3_0 = ctx.enterpriseForm.get("email")) == null ? null : tmp_3_0.hasError("email")) ? 46 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("type", ctx.hidePassword ? "password" : "text");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
            i0.ɵɵadvance();
            i0.ɵɵconditional(56, ((tmp_6_0 = ctx.enterpriseForm.get("password")) == null ? null : tmp_6_0.hasError("required")) ? 56 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(57, ((tmp_7_0 = ctx.enterpriseForm.get("password")) == null ? null : tmp_7_0.hasError("minlength")) ? 57 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(64, ((tmp_8_0 = ctx.enterpriseForm.get("fullName")) == null ? null : tmp_8_0.hasError("required")) ? 64 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(71, ((tmp_9_0 = ctx.enterpriseForm.get("companyName")) == null ? null : tmp_9_0.hasError("required")) ? 71 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.sectorOpts);
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.companySizeOpts);
            i0.ɵɵadvance(25);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵconditional(99, ctx.loading ? 99 : 100);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formGroup", ctx.candidateForm);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(110, ((tmp_15_0 = ctx.candidateForm.get("email")) == null ? null : tmp_15_0.hasError("required")) ? 110 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(111, ((tmp_16_0 = ctx.candidateForm.get("email")) == null ? null : tmp_16_0.hasError("email")) ? 111 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("type", ctx.hidePassword ? "password" : "text");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
            i0.ɵɵadvance();
            i0.ɵɵconditional(121, ((tmp_19_0 = ctx.candidateForm.get("password")) == null ? null : tmp_19_0.hasError("required")) ? 121 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(122, ((tmp_20_0 = ctx.candidateForm.get("password")) == null ? null : tmp_20_0.hasError("minlength")) ? 122 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(129, ((tmp_21_0 = ctx.candidateForm.get("fullName")) == null ? null : tmp_21_0.hasError("required")) ? 129 : -1);
            i0.ɵɵadvance(39);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵconditional(169, ctx.loading ? 169 : 170);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            MatCardModule, MatFormFieldModule, i2.MatFormField, i2.MatLabel, i2.MatError, i2.MatPrefix, i2.MatSuffix, MatInputModule, i3.MatInput, MatButtonModule, i4.MatButton, i4.MatIconButton, MatIconModule, i5.MatIcon, MatProgressSpinnerModule, i6.MatProgressSpinner, MatTabsModule, i7.MatTab, i7.MatTabGroup, AppSelectComponent], styles: ["@import '../login/login.component.scss';\n\n.register-brand[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: flex; gap: 24px; margin-top: 32px;\n  .stat {\n    flex: 1; background: rgba(255,255,255,.1); border-radius: 12px;\n    padding: 16px 12px; text-align: center;\n    border: 1px solid rgba(255,255,255,.15);\n    backdrop-filter: blur(10px);\n    transition: all 0.3s ease;\n\n    &:hover {\n      background: rgba(255,255,255,.15);\n      border-color: rgba(255,255,255,.3);\n    }\n\n    .num { display: block; font-size: 1.5rem; font-weight: 800; }\n    .lbl { font-size: 0.75rem; opacity: 0.8; }\n  }\n}\n\n.register-panel[_ngcontent-%COMP%] { padding: 40px 30px; }\n\n.auth-form-container.wide[_ngcontent-%COMP%] { max-width: 640px; }\n\n.register-form[_ngcontent-%COMP%] { padding-top: 20px; }\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px 16px;\n\n  .full-width { grid-column: 1 / -1; }\n\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 12px; width: 100%;\n  height: 52px;\n  background: linear-gradient(135deg, #fcb900, #ff6900) !important;\n  color: #000 !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease !important;\n  box-shadow: 0 4px 15px rgba(252, 185, 0, 0.3) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(252, 185, 0, 0.4) !important;\n  }\n\n  &:disabled {\n    opacity: 0.7;\n  }\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 20px; text-align: center; font-size: 0.875rem;\n  p { color: #abb8c3; margin: 0; }\n  a {\n    color: #fcb900;\n    font-weight: 600;\n    text-decoration: none;\n    transition: all 0.2s ease;\n\n    &:hover {\n      color: #ff6900;\n      text-decoration: underline;\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   Emp\u00EAche[_ngcontent-%COMP%]   le[_ngcontent-%COMP%]   CDK[_ngcontent-%COMP%]   overlay[_ngcontent-%COMP%]   d'\u00EAtre[_ngcontent-%COMP%]   clipp\u00E9[_ngcontent-%COMP%]   par[_ngcontent-%COMP%]   le[_ngcontent-%COMP%]   conteneur[_ngcontent-%COMP%]   parent\n.auth-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.auth-form-panel[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n\n.register-panel[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RegisterComponent, [{
        type: Component,
        args: [{ selector: 'app-register', standalone: true, imports: [
                    CommonModule, ReactiveFormsModule, RouterLink,
                    MatCardModule, MatFormFieldModule, MatInputModule,
                    MatButtonModule, MatIconModule, MatProgressSpinnerModule,
                    MatTabsModule, AppSelectComponent
                ], template: "<div class=\"auth-wrapper\">\n  <div class=\"auth-brand register-brand\">\n    <div class=\"brand-content\">\n      <div class=\"brand-logo\"><span class=\"material-icons-round\">rocket_launch</span></div>\n      <h1>NeoHire</h1>\n      <p>Rejoignez les innovateurs qui transforment<br>le recrutement avec l'IA.</p>\n      <div class=\"stats-row\">\n        <div class=\"stat\"><span class=\"num\">5 000+</span><span class=\"lbl\">Entreprises</span></div>\n        <div class=\"stat\"><span class=\"num\">50 000+</span><span class=\"lbl\">Talents</span></div>\n        <div class=\"stat\"><span class=\"num\">92%</span><span class=\"lbl\">Succ\u00E8s</span></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"auth-form-panel register-panel\">\n    <div class=\"auth-form-container wide\">\n      <div class=\"form-header\">\n        <h2>Cr\u00E9er un compte</h2>\n        <p>Choisissez votre type de compte pour commencer</p>\n      </div>\n\n      <mat-tab-group [(selectedIndex)]=\"selectedTab\" animationDuration=\"0ms\">\n        <!-- \u2500\u2500 Entreprise \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <mat-tab label=\"Je suis une Entreprise\">\n          <form [formGroup]=\"enterpriseForm\" (ngSubmit)=\"submitEnterprise()\" novalidate class=\"register-form\">\n            <div class=\"form-grid\">\n              <mat-form-field>\n                <mat-label>E-mail professionnel</mat-label>\n                <input matInput formControlName=\"email\" type=\"email\" />\n                <mat-icon matPrefix class=\"field-icon\">mail_outline</mat-icon>\n                @if (enterpriseForm.get('email')?.hasError('required')) {\n                  <mat-error>L'e-mail est obligatoire</mat-error>\n                }\n                @if (enterpriseForm.get('email')?.hasError('email')) {\n                  <mat-error>E-mail invalide</mat-error>\n                }\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Mot de passe</mat-label>\n                <input matInput formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" />\n                <mat-icon matPrefix class=\"field-icon\">lock_outline</mat-icon>\n                <button mat-icon-button matSuffix type=\"button\" (click)=\"hidePassword=!hidePassword\">\n                  <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>\n                </button>\n                @if (enterpriseForm.get('password')?.hasError('required')) {\n                  <mat-error>Le mot de passe est obligatoire</mat-error>\n                }\n                @if (enterpriseForm.get('password')?.hasError('minlength')) {\n                  <mat-error>Minimum 8 caract\u00E8res</mat-error>\n                }\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Nom complet (responsable)</mat-label>\n                <input matInput formControlName=\"fullName\" />\n                <mat-icon matPrefix class=\"field-icon\">person_outline</mat-icon>\n                @if (enterpriseForm.get('fullName')?.hasError('required')) {\n                  <mat-error>Le nom est obligatoire</mat-error>\n                }\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Nom de l'entreprise</mat-label>\n                <input matInput formControlName=\"companyName\" />\n                <mat-icon matPrefix class=\"field-icon\">business</mat-icon>\n                @if (enterpriseForm.get('companyName')?.hasError('required')) {\n                  <mat-error>Le nom de l'entreprise est obligatoire</mat-error>\n                }\n              </mat-form-field>\n\n              <app-select label=\"Secteur d'activit\u00E9\" [options]=\"sectorOpts\" formControlName=\"companySector\"></app-select>\n\n              <app-select label=\"Taille de l'entreprise\" [options]=\"companySizeOpts\" formControlName=\"companySize\"></app-select>\n\n              <mat-form-field>\n                <mat-label>Site web</mat-label>\n                <input matInput formControlName=\"companyWebsite\" placeholder=\"https://...\" />\n                <mat-icon matPrefix class=\"field-icon\">language</mat-icon>\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Num\u00E9ro SIRET</mat-label>\n                <input matInput formControlName=\"siretNumber\" />\n                <mat-icon matPrefix class=\"field-icon\">badge</mat-icon>\n              </mat-form-field>\n\n              <mat-form-field class=\"full-width\">\n                <mat-label>Description de l'entreprise</mat-label>\n                <textarea matInput formControlName=\"companyDescription\" rows=\"3\"></textarea>\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Ville</mat-label>\n                <input matInput formControlName=\"city\" />\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Pays</mat-label>\n                <input matInput formControlName=\"country\" />\n              </mat-form-field>\n            </div>\n\n            <button mat-flat-button type=\"submit\" class=\"btn-submit\" [disabled]=\"loading\">\n              @if (loading) { <mat-spinner diameter=\"20\" /> }\n              @else { <span>Cr\u00E9er mon compte entreprise</span><mat-icon>arrow_forward</mat-icon> }\n            </button>\n          </form>\n        </mat-tab>\n\n        <!-- \u2500\u2500 Candidat \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\n        <mat-tab label=\"Je suis un Candidat\">\n          <form [formGroup]=\"candidateForm\" (ngSubmit)=\"submitCandidate()\" novalidate class=\"register-form\">\n            <div class=\"form-grid\">\n              <mat-form-field>\n                <mat-label>E-mail</mat-label>\n                <input matInput formControlName=\"email\" type=\"email\" />\n                <mat-icon matPrefix class=\"field-icon\">mail_outline</mat-icon>\n                @if (candidateForm.get('email')?.hasError('required')) {\n                  <mat-error>L'e-mail est obligatoire</mat-error>\n                }\n                @if (candidateForm.get('email')?.hasError('email')) {\n                  <mat-error>E-mail invalide</mat-error>\n                }\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Mot de passe</mat-label>\n                <input matInput formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" />\n                <mat-icon matPrefix class=\"field-icon\">lock_outline</mat-icon>\n                <button mat-icon-button matSuffix type=\"button\" (click)=\"hidePassword=!hidePassword\">\n                  <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>\n                </button>\n                @if (candidateForm.get('password')?.hasError('required')) {\n                  <mat-error>Le mot de passe est obligatoire</mat-error>\n                }\n                @if (candidateForm.get('password')?.hasError('minlength')) {\n                  <mat-error>Minimum 8 caract\u00E8res</mat-error>\n                }\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Nom complet</mat-label>\n                <input matInput formControlName=\"fullName\" />\n                <mat-icon matPrefix class=\"field-icon\">person_outline</mat-icon>\n                @if (candidateForm.get('fullName')?.hasError('required')) {\n                  <mat-error>Le nom est obligatoire</mat-error>\n                }\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Titre professionnel</mat-label>\n                <input matInput formControlName=\"headline\" placeholder=\"ex: D\u00E9veloppeur Full-Stack Senior\" />\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Comp\u00E9tences cl\u00E9s</mat-label>\n                <input matInput formControlName=\"skills\" placeholder=\"Angular, Spring Boot, Docker...\" />\n                <mat-icon matPrefix class=\"field-icon\">psychology</mat-icon>\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Ann\u00E9es d'exp\u00E9rience</mat-label>\n                <input matInput formControlName=\"yearsExperience\" type=\"number\" min=\"0\" />\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>LinkedIn</mat-label>\n                <input matInput formControlName=\"linkedinUrl\" placeholder=\"https://linkedin.com/in/...\" />\n                <mat-icon matPrefix class=\"field-icon\">link</mat-icon>\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>GitHub</mat-label>\n                <input matInput formControlName=\"githubUrl\" placeholder=\"https://github.com/...\" />\n                <mat-icon matPrefix class=\"field-icon\">code</mat-icon>\n              </mat-form-field>\n\n              <mat-form-field class=\"full-width\">\n                <mat-label>R\u00E9sum\u00E9 professionnel</mat-label>\n                <textarea matInput formControlName=\"summary\" rows=\"3\" placeholder=\"Pr\u00E9sentez-vous en quelques lignes...\"></textarea>\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Ville</mat-label>\n                <input matInput formControlName=\"city\" />\n              </mat-form-field>\n\n              <mat-form-field>\n                <mat-label>Pays</mat-label>\n                <input matInput formControlName=\"country\" />\n              </mat-form-field>\n            </div>\n\n            <button mat-flat-button type=\"submit\" class=\"btn-submit\" [disabled]=\"loading\">\n              @if (loading) { <mat-spinner diameter=\"20\" /> }\n              @else { <span>Cr\u00E9er mon profil candidat</span><mat-icon>arrow_forward</mat-icon> }\n            </button>\n          </form>\n        </mat-tab>\n      </mat-tab-group>\n\n      <div class=\"form-footer\">\n        <p>D\u00E9j\u00E0 inscrit ? <a routerLink=\"/auth/login\">Se connecter</a></p>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: ["@import '../login/login.component.scss';\n\n.register-brand .stats-row {\n  display: flex; gap: 24px; margin-top: 32px;\n  .stat {\n    flex: 1; background: rgba(255,255,255,.1); border-radius: 12px;\n    padding: 16px 12px; text-align: center;\n    border: 1px solid rgba(255,255,255,.15);\n    backdrop-filter: blur(10px);\n    transition: all 0.3s ease;\n\n    &:hover {\n      background: rgba(255,255,255,.15);\n      border-color: rgba(255,255,255,.3);\n    }\n\n    .num { display: block; font-size: 1.5rem; font-weight: 800; }\n    .lbl { font-size: 0.75rem; opacity: 0.8; }\n  }\n}\n\n.register-panel { padding: 40px 30px; }\n\n.auth-form-container.wide { max-width: 640px; }\n\n.register-form { padding-top: 20px; }\n\n.form-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px 16px;\n\n  .full-width { grid-column: 1 / -1; }\n\n  @media (max-width: 600px) { grid-template-columns: 1fr; }\n}\n\n.btn-submit {\n  margin-top: 12px; width: 100%;\n  height: 52px;\n  background: linear-gradient(135deg, #fcb900, #ff6900) !important;\n  color: #000 !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  transition: all 0.3s ease !important;\n  box-shadow: 0 4px 15px rgba(252, 185, 0, 0.3) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-2px);\n    box-shadow: 0 6px 20px rgba(252, 185, 0, 0.4) !important;\n  }\n\n  &:disabled {\n    opacity: 0.7;\n  }\n}\n\n.form-footer {\n  margin-top: 20px; text-align: center; font-size: 0.875rem;\n  p { color: #abb8c3; margin: 0; }\n  a {\n    color: #fcb900;\n    font-weight: 600;\n    text-decoration: none;\n    transition: all 0.2s ease;\n\n    &:hover {\n      color: #ff6900;\n      text-decoration: underline;\n    }\n  }\n}\n\n// Emp\u00EAche le CDK overlay d'\u00EAtre clipp\u00E9 par le conteneur parent\n.auth-wrapper {\n  position: relative;\n}\n\n.auth-form-panel {\n  overflow: visible !important;\n}\n\n.register-panel {\n  overflow: visible !important;\n}"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "app\\features\\auth\\register\\register.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=register.component.js.map