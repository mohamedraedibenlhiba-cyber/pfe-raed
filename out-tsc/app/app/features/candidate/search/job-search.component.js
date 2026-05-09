import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { CvService } from '../../../core/services/cv.service';
import { ApplicationService } from '../../../core/services/application.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/progress-spinner";
import * as i8 from "@angular/material/paginator";
const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => [10, 20];
function JobSearchComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelement(1, "mat-spinner", 13);
    i0.ɵɵelementEnd();
} }
function JobSearchComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "span", 15);
    i0.ɵɵtext(2, "search_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 16);
    i0.ɵɵtext(4, "Aucune offre trouv\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 17);
    i0.ɵɵtext(6, "Modifiez vos filtres de recherche");
    i0.ɵɵelementEnd()();
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27)(1, "span", 36);
    i0.ɵɵtext(2, "place");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(offer_r3.location);
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offer_r3.contractType);
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 29)(1, "span", 36);
    i0.ɵɵtext(2, "home");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "T\u00E9l\u00E9travail");
    i0.ɵɵelementEnd();
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", offer_r3.experienceRequired, "+ ans");
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offer_r3.experienceLevel);
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27)(1, "span", 36);
    i0.ɵɵtext(2, "group");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", offer_r3.numberOfPositions, " postes");
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31)(1, "span", 36);
    i0.ɵɵtext(2, "euro");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "number");
    i0.ɵɵpipe(5, "number");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind1(4, 2, offer_r3.salaryMin), " \u2013 ", i0.ɵɵpipeBind1(5, 4, offer_r3.salaryMax), " \u20AC/an ");
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32)(1, "span", 37);
    i0.ɵɵtext(2, "code");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", offer_r3.techStack, "");
} }
function JobSearchComponent_Conditional_26_For_2_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(offer_r3.requiredSkills);
} }
function JobSearchComponent_Conditional_26_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "div", 21)(2, "div", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 23)(5, "h3", 24);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 25);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 26);
    i0.ɵɵtemplate(10, JobSearchComponent_Conditional_26_For_2_Conditional_10_Template, 4, 1, "span", 27)(11, JobSearchComponent_Conditional_26_For_2_Conditional_11_Template, 2, 1, "span", 28)(12, JobSearchComponent_Conditional_26_For_2_Conditional_12_Template, 4, 0, "span", 29)(13, JobSearchComponent_Conditional_26_For_2_Conditional_13_Template, 2, 1, "span", 27)(14, JobSearchComponent_Conditional_26_For_2_Conditional_14_Template, 2, 1, "span", 30)(15, JobSearchComponent_Conditional_26_For_2_Conditional_15_Template, 4, 1, "span", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, JobSearchComponent_Conditional_26_For_2_Conditional_16_Template, 6, 6, "p", 31)(17, JobSearchComponent_Conditional_26_For_2_Conditional_17_Template, 4, 1, "p", 32)(18, JobSearchComponent_Conditional_26_For_2_Conditional_18_Template, 2, 1, "p", 32);
    i0.ɵɵelementStart(19, "div", 33)(20, "span", 34);
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 35);
    i0.ɵɵlistener("click", function JobSearchComponent_Conditional_26_For_2_Template_button_click_23_listener() { const offer_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openApply(offer_r3)); });
    i0.ɵɵtext(24, " Postuler ");
    i0.ɵɵelementStart(25, "mat-icon");
    i0.ɵɵtext(26, "arrow_forward");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const offer_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(offer_r3.enterprise == null ? null : offer_r3.enterprise.companyName == null ? null : offer_r3.enterprise.companyName[0] == null ? null : offer_r3.enterprise.companyName[0].toUpperCase());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(offer_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(offer_r3.enterprise == null ? null : offer_r3.enterprise.companyName);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(10, offer_r3.location ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(11, offer_r3.contractType ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(12, offer_r3.remote ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, offer_r3.experienceRequired ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(14, offer_r3.experienceLevel ? 14 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, offer_r3.numberOfPositions && offer_r3.numberOfPositions > 1 ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(16, offer_r3.salaryMin || offer_r3.salaryMax ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(17, offer_r3.techStack ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(18, offer_r3.requiredSkills ? 18 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(22, 13, offer_r3.createdAt, "dd/MM/yyyy"));
} }
function JobSearchComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵrepeaterCreate(1, JobSearchComponent_Conditional_26_For_2_Template, 27, 16, "div", 19, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-paginator", 20);
    i0.ɵɵlistener("page", function JobSearchComponent_Conditional_26_Template_mat_paginator_page_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.onPage($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r3.offers);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("length", ctx_r3.totalElements)("pageSize", ctx_r3.pageSize)("pageSizeOptions", i0.ɵɵpureFunction0(3, _c0));
} }
function JobSearchComponent_Conditional_27_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "p", 48)(2, "mat-icon", 49);
    i0.ɵɵtext(3, "card_giftcard");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Avantages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 50);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.selectedOffer.benefits);
} }
function JobSearchComponent_Conditional_27_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "p", 48)(2, "mat-icon", 49);
    i0.ɵɵtext(3, "how_to_reg");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Processus d'entretien");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 50);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r3.selectedOffer.interviewProcess);
} }
function JobSearchComponent_Conditional_27_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 43)(1, "mat-icon", 49);
    i0.ɵɵtext(2, "event");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " D\u00E9but souhait\u00E9 : ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 1, ctx_r3.selectedOffer.startDate, "dd/MM/yyyy"));
} }
function JobSearchComponent_Conditional_27_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 47);
} }
function JobSearchComponent_Conditional_27_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Envoyer ma candidature ");
} }
function JobSearchComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵlistener("click", function JobSearchComponent_Conditional_27_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectedOffer = null); });
    i0.ɵɵelementStart(1, "div", 39);
    i0.ɵɵlistener("click", function JobSearchComponent_Conditional_27_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 40)(3, "div")(4, "h3");
    i0.ɵɵtext(5, "Postuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 41);
    i0.ɵɵlistener("click", function JobSearchComponent_Conditional_27_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectedOffer = null); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(11, JobSearchComponent_Conditional_27_Conditional_11_Template, 7, 1, "div", 42)(12, JobSearchComponent_Conditional_27_Conditional_12_Template, 7, 1, "div", 42)(13, JobSearchComponent_Conditional_27_Conditional_13_Template, 7, 4, "p", 43);
    i0.ɵɵelementStart(14, "app-select", 44);
    i0.ɵɵtwoWayListener("ngModelChange", function JobSearchComponent_Conditional_27_Template_app_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.selectedCvId, $event) || (ctx_r3.selectedCvId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "mat-form-field")(16, "mat-label");
    i0.ɵɵtext(17, "Lettre de motivation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "textarea", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function JobSearchComponent_Conditional_27_Template_textarea_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r3.coverLetter, $event) || (ctx_r3.coverLetter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "button", 46);
    i0.ɵɵlistener("click", function JobSearchComponent_Conditional_27_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r5); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.submitApply()); });
    i0.ɵɵtemplate(20, JobSearchComponent_Conditional_27_Conditional_20_Template, 1, 0, "mat-spinner", 47)(21, JobSearchComponent_Conditional_27_Conditional_21_Template, 3, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", ctx_r3.selectedOffer.title, " \u2014 ", ctx_r3.selectedOffer.enterprise == null ? null : ctx_r3.selectedOffer.enterprise.companyName, "");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(11, ctx_r3.selectedOffer.benefits ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(12, ctx_r3.selectedOffer.interviewProcess ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, ctx_r3.selectedOffer.startDate ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r3.cvOpts);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.selectedCvId);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r3.coverLetter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r3.applyLoading);
    i0.ɵɵadvance();
    i0.ɵɵconditional(20, ctx_r3.applyLoading ? 20 : 21);
} }
export class JobSearchComponent {
    constructor() {
        this.offerSvc = inject(JobOfferService);
        this.appSvc = inject(ApplicationService);
        this.cvSvc = inject(CvService);
        this.alertSvc = inject(AlertService);
        this.loading = false;
        this.offers = [];
        this.totalElements = 0;
        this.currentPage = 0;
        this.pageSize = 10;
        // Filters
        this.titleFilter = '';
        this.locationFilter = '';
        this.contractFilter = '';
        this.selectedOffer = null;
        this.myCvs = [];
        this.applyLoading = false;
        this.coverLetter = '';
        this.contractTypes = ['CDI', 'CDD', 'STAGE', 'FREELANCE', 'ALTERNANCE', 'TEMPS_PARTIEL'];
        this.contractTypeOpts = [
            { value: '', label: 'Tous' },
            ...this.contractTypes.map(c => ({ value: c, label: c }))
        ];
    }
    get cvOpts() {
        return this.myCvs.map(cv => ({ value: cv.id, label: cv.fileName + (cv.defaultCv ? ' (par défaut)' : '') }));
    }
    ngOnInit() {
        this.search();
        this.cvSvc.getMyCvs().subscribe(res => this.myCvs = res.data);
    }
    search() {
        this.loading = true;
        this.offerSvc.searchPublic(this.titleFilter, this.locationFilter, this.contractFilter, this.currentPage, this.pageSize).subscribe({
            next: res => { this.offers = res.data.content; this.totalElements = res.data.totalElements; this.loading = false; },
            error: () => { this.loading = false; }
        });
    }
    onPage(event) { this.currentPage = event.pageIndex; this.search(); }
    openApply(offer) {
        if (this.myCvs.length === 0) {
            this.alertSvc.error("Aucun CV disponible. Veuillez d'abord en uploader un dans Mes CVs."); // ← fixed
            return;
        }
        this.selectedOffer = offer;
        this.selectedCvId = this.myCvs.find(cv => cv.defaultCv)?.id || this.myCvs[0].id;
        this.coverLetter = '';
    }
    submitApply() {
        if (!this.selectedOffer || !this.selectedCvId) {
            this.alertSvc.error('Veuillez sélectionner un CV et une offre valide.');
            return;
        }
        this.applyLoading = true;
        this.appSvc.apply({ jobOfferId: this.selectedOffer.id, cvId: this.selectedCvId, coverLetter: this.coverLetter }).subscribe({
            next: () => { this.applyLoading = false; this.selectedOffer = null; this.alertSvc.success('Candidature envoyée !'); },
            error: err => { this.applyLoading = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur'); }
        });
    }
    static { this.ɵfac = function JobSearchComponent_Factory(t) { return new (t || JobSearchComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: JobSearchComponent, selectors: [["app-job-search"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 28, vars: 7, consts: [[1, "search-page"], [1, "search-header"], [1, "page-title"], [1, "page-subtitle"], [1, "search-bar", "card"], [1, "search-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matPrefix", ""], [1, "location-field"], ["label", "Type de contrat", 1, "contract-field", 3, "ngModelChange", "options", "ngModel"], ["mat-flat-button", "", 1, "btn-primary", "search-btn", 3, "click"], [1, "loading-center"], [1, "apply-overlay"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "offers-grid"], [1, "offer-card", "card"], [1, "paginator", 3, "page", "length", "pageSize", "pageSizeOptions"], [1, "offer-top"], [1, "offer-company-logo", "bg-primary"], [1, "offer-main"], [1, "offer-title"], [1, "offer-company"], [1, "offer-tags"], [1, "tag"], [1, "tag", "tag-contract"], [1, "tag", "tag-remote"], [1, "tag", "tag-level"], [1, "offer-salary"], [1, "offer-skills"], [1, "offer-footer"], [1, "offer-date"], ["mat-flat-button", "", 1, "btn-apply", 3, "click"], [1, "material-icons-round"], [1, "material-icons-round", 2, "font-size", "14px", "vertical-align", "middle"], [1, "apply-overlay", 3, "click"], [1, "apply-panel", "card", 3, "click"], [1, "panel-header"], ["mat-icon-button", "", 3, "click"], [1, "panel-detail-section"], [1, "panel-detail-label", 2, "margin-bottom", "12px"], ["label", "CV", 3, "ngModelChange", "options", "ngModel"], ["matInput", "", "rows", "5", "placeholder", "Pr\u00E9sentez-vous et expliquez votre motivation...", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", 1, "btn-primary", "apply-submit", 3, "click", "disabled"], ["diameter", "18"], [1, "panel-detail-label"], [2, "font-size", "16px", "vertical-align", "middle"], [1, "panel-detail-text"]], template: function JobSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
            i0.ɵɵtext(3, "Offres d'emploi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
            i0.ɵɵtext(9, "Titre, poste, entreprise...");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function JobSearchComponent_Template_input_ngModelChange_10_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.titleFilter, $event) || (ctx.titleFilter = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function JobSearchComponent_Template_input_keyup_enter_10_listener() { return ctx.search(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-icon", 7);
            i0.ɵɵtext(12, "search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "mat-form-field", 8)(14, "mat-label");
            i0.ɵɵtext(15, "Ville, r\u00E9gion");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function JobSearchComponent_Template_input_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.locationFilter, $event) || (ctx.locationFilter = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function JobSearchComponent_Template_input_keyup_enter_16_listener() { return ctx.search(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-icon", 7);
            i0.ɵɵtext(18, "place");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "app-select", 9);
            i0.ɵɵtwoWayListener("ngModelChange", function JobSearchComponent_Template_app_select_ngModelChange_19_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.contractFilter, $event) || (ctx.contractFilter = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 10);
            i0.ɵɵlistener("click", function JobSearchComponent_Template_button_click_20_listener() { return ctx.search(); });
            i0.ɵɵelementStart(21, "mat-icon");
            i0.ɵɵtext(22, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(23, " Rechercher ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(24, JobSearchComponent_Conditional_24_Template, 2, 0, "div", 11)(25, JobSearchComponent_Conditional_25_Template, 7, 0)(26, JobSearchComponent_Conditional_26_Template, 4, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(27, JobSearchComponent_Conditional_27_Template, 22, 10, "div", 12);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("D\u00E9couvrez ", ctx.totalElements, " offres disponibles");
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.titleFilter);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.locationFilter);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("options", ctx.contractTypeOpts);
            i0.ɵɵtwoWayProperty("ngModel", ctx.contractFilter);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(24, ctx.loading ? 24 : !ctx.offers.length ? 25 : 26);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(27, ctx.selectedOffer ? 27 : -1);
        } }, dependencies: [CommonModule, i1.DecimalPipe, i1.DatePipe, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, MatButtonModule, i3.MatButton, i3.MatIconButton, MatIconModule, i4.MatIcon, MatFormFieldModule, i5.MatFormField, i5.MatLabel, i5.MatPrefix, MatInputModule, i6.MatInput, AppSelectComponent, MatProgressSpinnerModule, i7.MatProgressSpinner, MatDialogModule, MatPaginatorModule, i8.MatPaginator], styles: [".search-header[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.search-bar[_ngcontent-%COMP%] { display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; padding: 16px 20px; margin-bottom: 20px; }\n.search-field[_ngcontent-%COMP%]  { flex: 2; min-width: 200px; }\n.location-field[_ngcontent-%COMP%]{ flex: 1; min-width: 160px; }\n.contract-field[_ngcontent-%COMP%]{ flex: 1; min-width: 160px; }\n.search-btn[_ngcontent-%COMP%]    { height: 56px; border-radius: 10px!important; white-space: nowrap; }\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.offers-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }\n\n.offer-card[_ngcontent-%COMP%] { padding: 20px; display: flex; flex-direction: column; gap: 12px; }\n.offer-top[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 12px; }\n.offer-company-logo[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: 10px; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; }\n.offer-title[_ngcontent-%COMP%] { font-size: 0.95rem; font-weight: 700; margin: 0 0 3px; color: var(--text-primary); }\n.offer-company[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--text-secondary); margin: 0; font-weight: 500; }\n\n.offer-tags[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; }\n.tag[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 4px;\n  font-size: 0.75rem; padding: 3px 9px; border-radius: 6px;\n  background: #f1f5f9; color: var(--text-secondary);\n  .material-icons-round { font-size: 13px; }\n  &.tag-contract { background: #e0e7ff; color: #3730a3; font-weight: 600; }\n  &.tag-remote   { background: #dcfce7; color: #166534; }\n}\n\n.offer-salary[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 600; color: var(--success); margin: 0; .material-icons-round { font-size: 16px; } }\n.offer-skills[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text-muted); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.offer-footer[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }\n.offer-date[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-muted); }\n.btn-apply[_ngcontent-%COMP%] { background: var(--primary-light)!important; color: #fff!important; border-radius: 8px!important; font-size: 0.85rem!important; gap: 4px; mat-icon { font-size: 16px!important; } }\n\n.paginator[_ngcontent-%COMP%] { background: #fff; border: 1px solid var(--border-color); border-radius: 12px; margin-top: 16px; }\n\n//[_ngcontent-%COMP%]   Apply[_ngcontent-%COMP%]   overlay\n.apply-overlay[_ngcontent-%COMP%] { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; }\n.apply-panel[_ngcontent-%COMP%] { width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: 12px; }\n.panel-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 4px; } p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; } }\n.apply-submit[_ngcontent-%COMP%] { height: 48px; border-radius: 10px!important; display: flex; align-items: center; gap: 8px; justify-content: center; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobSearchComponent, [{
        type: Component,
        args: [{ selector: 'app-job-search', standalone: true, imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule], template: "<div class=\"search-page\">\n  <div class=\"search-header\">\n    <h1 class=\"page-title\">Offres d'emploi</h1>\n    <p class=\"page-subtitle\">D\u00E9couvrez {{ totalElements }} offres disponibles</p>\n  </div>\n\n  <!-- Search bar -->\n  <div class=\"search-bar card\">\n    <mat-form-field class=\"search-field\">\n      <mat-label>Titre, poste, entreprise...</mat-label>\n      <input matInput [(ngModel)]=\"titleFilter\" (keyup.enter)=\"search()\" />\n      <mat-icon matPrefix>search</mat-icon>\n    </mat-form-field>\n    <mat-form-field class=\"location-field\">\n      <mat-label>Ville, r\u00E9gion</mat-label>\n      <input matInput [(ngModel)]=\"locationFilter\" (keyup.enter)=\"search()\" />\n      <mat-icon matPrefix>place</mat-icon>\n    </mat-form-field>\n    <app-select class=\"contract-field\" label=\"Type de contrat\" [options]=\"contractTypeOpts\" [(ngModel)]=\"contractFilter\"></app-select>\n    <button mat-flat-button class=\"btn-primary search-btn\" (click)=\"search()\">\n      <mat-icon>search</mat-icon> Rechercher\n    </button>\n  </div>\n\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else if (!offers.length) {\n    <div class=\"empty-state card\">\n      <span class=\"material-icons-round empty-icon\">search_off</span>\n      <p class=\"empty-title\">Aucune offre trouv\u00E9e</p>\n      <p class=\"empty-desc\">Modifiez vos filtres de recherche</p>\n    </div>\n  } @else {\n    <div class=\"offers-grid\">\n      @for (offer of offers; track offer.id) {\n        <div class=\"offer-card card\">\n          <div class=\"offer-top\">\n            <div class=\"offer-company-logo bg-primary\">{{ offer.enterprise?.companyName?.[0]?.toUpperCase() }}</div>\n            <div class=\"offer-main\">\n              <h3 class=\"offer-title\">{{ offer.title }}</h3>\n              <p class=\"offer-company\">{{ offer.enterprise?.companyName }}</p>\n            </div>\n          </div>\n\n          <div class=\"offer-tags\">\n            @if (offer.location) {\n              <span class=\"tag\"><span class=\"material-icons-round\">place</span>{{ offer.location }}</span>\n            }\n            @if (offer.contractType) {\n              <span class=\"tag tag-contract\">{{ offer.contractType }}</span>\n            }\n            @if (offer.remote) {\n              <span class=\"tag tag-remote\"><span class=\"material-icons-round\">home</span>T\u00E9l\u00E9travail</span>\n            }\n            @if (offer.experienceRequired) {\n              <span class=\"tag\">{{ offer.experienceRequired }}+ ans</span>\n            }\n            @if (offer.experienceLevel) {\n              <span class=\"tag tag-level\">{{ offer.experienceLevel }}</span>\n            }\n            @if (offer.numberOfPositions && offer.numberOfPositions > 1) {\n              <span class=\"tag\"><span class=\"material-icons-round\">group</span>{{ offer.numberOfPositions }} postes</span>\n            }\n          </div>\n\n          @if (offer.salaryMin || offer.salaryMax) {\n            <p class=\"offer-salary\">\n              <span class=\"material-icons-round\">euro</span>\n              {{ offer.salaryMin | number }} \u2013 {{ offer.salaryMax | number }} \u20AC/an\n            </p>\n          }\n\n          @if (offer.techStack) {\n            <p class=\"offer-skills\"><span class=\"material-icons-round\" style=\"font-size:14px;vertical-align:middle\">code</span> {{ offer.techStack }}</p>\n          }\n\n          @if (offer.requiredSkills) {\n            <p class=\"offer-skills\">{{ offer.requiredSkills }}</p>\n          }\n\n          <div class=\"offer-footer\">\n            <span class=\"offer-date\">{{ offer.createdAt | date:'dd/MM/yyyy' }}</span>\n            <button mat-flat-button class=\"btn-apply\" (click)=\"openApply(offer)\">\n              Postuler <mat-icon>arrow_forward</mat-icon>\n            </button>\n          </div>\n        </div>\n      }\n    </div>\n\n    <mat-paginator\n      [length]=\"totalElements\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"[10, 20]\"\n      (page)=\"onPage($event)\"\n      class=\"paginator\">\n    </mat-paginator>\n  }\n</div>\n\n<!-- Apply panel (simple overlay) -->\n@if (selectedOffer) {\n  <div class=\"apply-overlay\" (click)=\"selectedOffer=null\">\n    <div class=\"apply-panel card\" (click)=\"$event.stopPropagation()\">\n      <div class=\"panel-header\">\n        <div>\n          <h3>Postuler</h3>\n          <p>{{ selectedOffer.title }} \u2014 {{ selectedOffer.enterprise?.companyName }}</p>\n        </div>\n        <button mat-icon-button (click)=\"selectedOffer=null\"><mat-icon>close</mat-icon></button>\n      </div>\n\n      @if (selectedOffer.benefits) {\n        <div class=\"panel-detail-section\">\n          <p class=\"panel-detail-label\"><mat-icon style=\"font-size:16px;vertical-align:middle\">card_giftcard</mat-icon> Avantages</p>\n          <p class=\"panel-detail-text\">{{ selectedOffer.benefits }}</p>\n        </div>\n      }\n\n      @if (selectedOffer.interviewProcess) {\n        <div class=\"panel-detail-section\">\n          <p class=\"panel-detail-label\"><mat-icon style=\"font-size:16px;vertical-align:middle\">how_to_reg</mat-icon> Processus d'entretien</p>\n          <p class=\"panel-detail-text\">{{ selectedOffer.interviewProcess }}</p>\n        </div>\n      }\n\n      @if (selectedOffer.startDate) {\n        <p class=\"panel-detail-label\" style=\"margin-bottom:12px\"><mat-icon style=\"font-size:16px;vertical-align:middle\">event</mat-icon> D\u00E9but souhait\u00E9 : <strong>{{ selectedOffer.startDate | date:'dd/MM/yyyy' }}</strong></p>\n      }\n\n      <app-select label=\"CV\" [options]=\"cvOpts\" [(ngModel)]=\"selectedCvId\"></app-select>\n\n      <mat-form-field>\n        <mat-label>Lettre de motivation</mat-label>\n        <textarea matInput [(ngModel)]=\"coverLetter\" rows=\"5\" placeholder=\"Pr\u00E9sentez-vous et expliquez votre motivation...\"></textarea>\n      </mat-form-field>\n\n      <button mat-flat-button class=\"btn-primary apply-submit\" (click)=\"submitApply()\" [disabled]=\"applyLoading\">\n        @if (applyLoading) { <mat-spinner diameter=\"18\" /> }\n        @else { <mat-icon>send</mat-icon> Envoyer ma candidature }\n      </button>\n    </div>\n  </div>\n}\n", styles: [".search-header { margin-bottom: 20px; }\n.search-bar { display: flex; align-items: flex-end; gap: 12px; flex-wrap: wrap; padding: 16px 20px; margin-bottom: 20px; }\n.search-field  { flex: 2; min-width: 200px; }\n.location-field{ flex: 1; min-width: 160px; }\n.contract-field{ flex: 1; min-width: 160px; }\n.search-btn    { height: 56px; border-radius: 10px!important; white-space: nowrap; }\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.offers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; }\n\n.offer-card { padding: 20px; display: flex; flex-direction: column; gap: 12px; }\n.offer-top { display: flex; align-items: flex-start; gap: 12px; }\n.offer-company-logo { width: 44px; height: 44px; border-radius: 10px; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem; flex-shrink: 0; }\n.offer-title { font-size: 0.95rem; font-weight: 700; margin: 0 0 3px; color: var(--text-primary); }\n.offer-company { font-size: 0.8rem; color: var(--text-secondary); margin: 0; font-weight: 500; }\n\n.offer-tags { display: flex; flex-wrap: wrap; gap: 6px; }\n.tag {\n  display: flex; align-items: center; gap: 4px;\n  font-size: 0.75rem; padding: 3px 9px; border-radius: 6px;\n  background: #f1f5f9; color: var(--text-secondary);\n  .material-icons-round { font-size: 13px; }\n  &.tag-contract { background: #e0e7ff; color: #3730a3; font-weight: 600; }\n  &.tag-remote   { background: #dcfce7; color: #166534; }\n}\n\n.offer-salary { display: flex; align-items: center; gap: 4px; font-size: 0.85rem; font-weight: 600; color: var(--success); margin: 0; .material-icons-round { font-size: 16px; } }\n.offer-skills { font-size: 0.78rem; color: var(--text-muted); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n.offer-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }\n.offer-date { font-size: 0.75rem; color: var(--text-muted); }\n.btn-apply { background: var(--primary-light)!important; color: #fff!important; border-radius: 8px!important; font-size: 0.85rem!important; gap: 4px; mat-icon { font-size: 16px!important; } }\n\n.paginator { background: #fff; border: 1px solid var(--border-color); border-radius: 12px; margin-top: 16px; }\n\n// Apply overlay\n.apply-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px; }\n.apply-panel { width: 100%; max-width: 520px; display: flex; flex-direction: column; gap: 12px; }\n.panel-header { display: flex; align-items: flex-start; justify-content: space-between; h3 { font-size: 1.1rem; font-weight: 700; margin: 0 0 4px; } p { font-size: 0.85rem; color: var(--text-secondary); margin: 0; } }\n.apply-submit { height: 48px; border-radius: 10px!important; display: flex; align-items: center; gap: 8px; justify-content: center; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(JobSearchComponent, { className: "JobSearchComponent", filePath: "app\\features\\candidate\\search\\job-search.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=job-search.component.js.map