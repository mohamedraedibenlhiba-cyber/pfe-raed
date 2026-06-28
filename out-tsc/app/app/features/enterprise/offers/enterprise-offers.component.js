import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JobOfferService } from '../../../core/services/job-offer.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-spinner";
const _forTrack0 = ($index, $item) => $item[0];
const _forTrack1 = ($index, $item) => $item.id;
const _c0 = () => ["ALL", "Toutes"];
const _c1 = () => ["PUBLISHED", "Publi\u00E9es"];
const _c2 = () => ["DRAFT", "Brouillons"];
const _c3 = () => ["CLOSED", "Cl\u00F4tur\u00E9es"];
const _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
const _c5 = a0 => ["/enterprise/offers", a0, "applications"];
const _c6 = a0 => ["/enterprise/offers", a0, "edit"];
function EnterpriseOffersComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function EnterpriseOffersComponent_For_13_Template_button_click_0_listener() { const tab_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.filter = tab_r2[0]); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span", 9);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r2.filter === tab_r2[0]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", tab_r2[1], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.countByStatus(tab_r2[0]));
} }
function EnterpriseOffersComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "mat-spinner", 10);
    i0.ɵɵelementEnd();
} }
function EnterpriseOffersComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "span", 12);
    i0.ɵɵtext(2, "work_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 13);
    i0.ɵɵtext(4, "Aucune offre dans cette cat\u00E9gorie");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 14)(6, "mat-icon");
    i0.ɵɵtext(7, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " Cr\u00E9er votre premi\u00E8re offre ");
    i0.ɵɵelementEnd()();
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const offer_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.publish(offer_r5)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "public");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Publier ");
    i0.ɵɵelementEnd();
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const offer_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.close(offer_r5)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Cl\u00F4turer ");
    i0.ɵɵelementEnd();
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "a", 30)(2, "mat-icon");
    i0.ɵɵtext(3, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Modifier ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 30)(6, "mat-icon");
    i0.ɵɵtext(7, "people");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " Candidatures ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Conditional_9_Template, 4, 0, "button", 31)(10, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Conditional_10_Template, 4, 0, "button", 31);
    i0.ɵɵelementStart(11, "button", 32);
    i0.ɵɵlistener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r6); const offer_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.exportExcel(offer_r5)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "download");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " Export Excel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 33);
    i0.ɵɵlistener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r6); const offer_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.delete(offer_r5)); });
    i0.ɵɵelementStart(16, "mat-icon");
    i0.ɵɵtext(17, "delete_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18, " Supprimer ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const offer_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c6, offer_r5.id));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(6, _c5, offer_r5.id));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(9, offer_r5.status === "DRAFT" ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(10, offer_r5.status === "PUBLISHED" ? 10 : -1);
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23)(1, "span", 34);
    i0.ɵɵtext(2, "place");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(offer_r5.location);
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23)(1, "span", 34);
    i0.ɵɵtext(2, "work");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(offer_r5.contractType);
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24)(1, "span", 34);
    i0.ɵɵtext(2, "home");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "T\u00E9l\u00E9travail");
    i0.ɵɵelementEnd();
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23)(1, "span", 34);
    i0.ɵɵtext(2, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const offer_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", offer_r5.experienceRequired, " ans exp.");
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "span", 34);
    i0.ɵɵtext(2, "euro");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "number");
    i0.ɵɵpipe(6, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const offer_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind1(5, 2, offer_r5.salaryMin), " \u2013 ", i0.ɵɵpipeBind1(6, 4, offer_r5.salaryMax), " \u20AC");
} }
function EnterpriseOffersComponent_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "div", 17)(2, "div", 18)(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 19)(8, "button", 20);
    i0.ɵɵlistener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Template_button_click_8_listener() { const offer_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleMenu(offer_r5.id)); });
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "more_vert");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_11_Template, 19, 8, "div", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 22);
    i0.ɵɵtemplate(13, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_13_Template, 4, 1, "span", 23)(14, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_14_Template, 4, 1, "span", 23)(15, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_15_Template, 4, 0, "span", 24)(16, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_16_Template, 4, 1, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(17, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_17_Template, 7, 6, "div", 25);
    i0.ɵɵelementStart(18, "div", 26)(19, "span", 27);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 28)(23, "a", 29)(24, "mat-icon");
    i0.ɵɵtext(25, "people");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(26, " Candidatures ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const offer_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(offer_r5.title);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r2.statusClass(offer_r5.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(offer_r5.status));
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(11, ctx_r2.activeMenuId === offer_r5.id ? 11 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(13, offer_r5.location ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(14, offer_r5.contractType ? 14 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, offer_r5.remote ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(16, offer_r5.experienceRequired ? 16 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(17, offer_r5.salaryMin || offer_r5.salaryMax ? 17 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 13, offer_r5.createdAt, "dd/MM/yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(16, _c5, offer_r5.id));
} }
function EnterpriseOffersComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, EnterpriseOffersComponent_Conditional_16_For_2_Template, 27, 18, "div", 16, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.filtered);
} }
export class EnterpriseOffersComponent {
    constructor() {
        this.offerSvc = inject(JobOfferService);
        this.alertSvc = inject(AlertService);
        this.loading = true;
        this.offers = [];
        this.filter = 'ALL';
        this.activeMenuId = null;
    }
    get filtered() {
        return this.filter === 'ALL' ? this.offers : this.offers.filter(o => o.status === this.filter);
    }
    countByStatus(status) {
        return status === 'ALL' ? this.offers.length : this.offers.filter(o => o.status === status).length;
    }
    ngOnInit() {
        this.offerSvc.getMyOffers().subscribe({
            next: res => { this.offers = res.data; this.loading = false; },
            error: () => { this.loading = false; }
        });
    }
    publish(offer) {
        this.offerSvc.publish(offer.id).subscribe({
            next: res => { Object.assign(offer, res.data); this.alertSvc.success('Offre publiée avec succès'); },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    close(offer) {
        if (!confirm('Clôturer cette offre ?'))
            return;
        this.offerSvc.close(offer.id).subscribe({
            next: res => { Object.assign(offer, res.data); this.alertSvc.success('Offre clôturée'); },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    delete(offer) {
        if (!confirm(`Supprimer l'offre "${offer.title}" ?`))
            return;
        this.offerSvc.delete(offer.id).subscribe({
            next: () => { this.offers = this.offers.filter(o => o.id !== offer.id); this.alertSvc.success('Offre supprimée'); },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    exportExcel(offer) {
        this.offerSvc.exportExcel(offer.id).subscribe(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `candidatures_${offer.id}.xlsx`;
            a.click();
            URL.revokeObjectURL(url);
        });
    }
    statusClass(status) {
        return { PUBLISHED: 'chip-success', DRAFT: 'chip-warning', CLOSED: 'chip-gray', ARCHIVED: 'chip-gray' }[status] ?? 'chip-gray';
    }
    statusLabel(status) {
        return { PUBLISHED: 'Publiée', DRAFT: 'Brouillon', CLOSED: 'Clôturée', ARCHIVED: 'Archivée' }[status] ?? status;
    }
    toggleMenu(offerId) {
        this.activeMenuId = this.activeMenuId === offerId ? null : offerId;
    }
    static { this.ɵfac = function EnterpriseOffersComponent_Factory(t) { return new (t || EnterpriseOffersComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnterpriseOffersComponent, selectors: [["app-enterprise-offers"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 17, vars: 11, consts: [[1, "offers-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary"], [1, "filter-tabs"], [1, "filter-tab", 3, "active"], [1, "loading-center"], [1, "filter-tab", 3, "click"], [1, "count"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary", 2, "margin-top", "12px"], [1, "offers-grid"], [1, "offer-card", "card"], [1, "offer-card-header"], [1, "offer-card-title"], [1, "menu-container"], ["mat-icon-button", "", 1, "menu-btn", 3, "click"], [1, "custom-menu"], [1, "offer-meta-row"], [1, "meta-chip"], [1, "meta-chip", "remote"], [1, "salary-row"], [1, "offer-card-footer"], [1, "date-label"], [1, "footer-actions"], ["mat-button", "", 1, "btn-applications", 3, "routerLink"], [1, "menu-option", 3, "routerLink"], [1, "menu-option"], [1, "menu-option", 3, "click"], [1, "menu-option", "danger", 3, "click"], [1, "material-icons-round"]], template: function EnterpriseOffersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Mes offres d'emploi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4)(8, "mat-icon");
            i0.ɵɵtext(9, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Nouvelle offre ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "div", 5);
            i0.ɵɵrepeaterCreate(12, EnterpriseOffersComponent_For_13_Template, 4, 4, "button", 6, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, EnterpriseOffersComponent_Conditional_14_Template, 2, 0, "div", 7)(15, EnterpriseOffersComponent_Conditional_15_Template, 9, 0)(16, EnterpriseOffersComponent_Conditional_16_Template, 3, 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("", ctx.offers.length, " offre(s) cr\u00E9\u00E9e(s)");
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(i0.ɵɵpureFunction4(6, _c4, i0.ɵɵpureFunction0(2, _c0), i0.ɵɵpureFunction0(3, _c1), i0.ɵɵpureFunction0(4, _c2), i0.ɵɵpureFunction0(5, _c3)));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(14, ctx.loading ? 14 : !ctx.filtered.length ? 15 : 16);
        } }, dependencies: [CommonModule, i1.DecimalPipe, i1.DatePipe, RouterLink, MatButtonModule, i2.MatAnchor, i2.MatIconButton, MatIconModule, i3.MatIcon, MatMenuModule, MatProgressSpinnerModule, i4.MatProgressSpinner, MatTooltipModule], styles: [".page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; }\n\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex; gap: 4px; margin-bottom: 20px;\n  background: #fff; border: 1px solid var(--border-color);\n  border-radius: 12px; padding: 5px; width: fit-content; flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 6px;\n  padding: 7px 14px; border: none; border-radius: 8px;\n  background: transparent; cursor: pointer;\n  font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);\n  transition: all 0.2s ease;\n  .count { background: #e2e8f0; color: #475569; padding: 1px 7px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }\n  &:hover { background: #f1f5f9; }\n  &.active { background: var(--primary-light); color: #fff; .count { background: rgba(255,255,255,.25); color: #fff; } }\n}\n\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; }\n\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex; gap: 4px; margin-bottom: 20px;\n  background: #fff; border: 1px solid var(--border-color);\n  border-radius: 12px; padding: 5px; width: fit-content; flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 6px;\n  padding: 7px 14px; border: none; border-radius: 8px;\n  background: transparent; cursor: pointer;\n  font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);\n  transition: all 0.2s ease;\n  .count { background: #e2e8f0; color: #475569; padding: 1px 7px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }\n  &:hover { background: #f1f5f9; }\n  &.active { background: var(--primary-light); color: #fff; .count { background: rgba(255,255,255,.25); color: #fff; } }\n}\n\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.offers-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }\n\n.offer-card[_ngcontent-%COMP%] { padding: 20px; }\n.offer-card-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; }\n.offer-card-title[_ngcontent-%COMP%] { flex: 1; h3 { font-size: 0.95rem; font-weight: 700; margin: 0 0 6px; color: var(--text-primary); } }\n.menu-btn[_ngcontent-%COMP%] { margin-left: 4px; color: var(--text-secondary)!important; }\n\n.offer-meta-row[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }\n.meta-chip[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 4px;\n  font-size: 0.78rem; color: var(--text-secondary); background: #f1f5f9;\n  padding: 3px 8px; border-radius: 6px;\n  .material-icons-round { font-size: 14px; }\n  &.remote { background: #dcfce7; color: #166534; }\n}\n\n.salary-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 6px;\n  font-size: 0.85rem; font-weight: 600; color: var(--success);\n  margin-bottom: 12px;\n  .material-icons-round { font-size: 16px; }\n}\n\n.offer-card-footer[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-top: 12px; padding-top: 12px;\n  border-top: 1px solid var(--border-color);\n}\n.date-label[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-muted); }\n.btn-applications[_ngcontent-%COMP%] { font-size: 0.8rem!important; color: var(--primary-light)!important; }\n\n  .danger-item { color: var(--danger); }\n\n//[_ngcontent-%COMP%]   =====[_ngcontent-%COMP%]   Custom[_ngcontent-%COMP%]   Menu[_ngcontent-%COMP%]   =====\n.menu-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.custom-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  z-index: 1000;\n  min-width: 200px;\n  margin-top: 4px;\n}\n\n.menu-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  text-decoration: none;\n  text-align: left;\n  width: 100%;\n  transition: background 0.2s ease;\n\n  mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n\n  &:hover {\n    background: #f1f5f9;\n  }\n\n  &.danger {\n    color: var(--danger);\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnterpriseOffersComponent, [{
        type: Component,
        args: [{ selector: 'app-enterprise-offers', standalone: true, imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatMenuModule, MatProgressSpinnerModule, MatTooltipModule], template: "<div class=\"offers-page\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"page-title\">Mes offres d'emploi</h1>\n      <p class=\"page-subtitle\">{{ offers.length }} offre(s) cr\u00E9\u00E9e(s)</p>\n    </div>\n    <a mat-flat-button routerLink=\"/enterprise/offers/new\" class=\"btn-primary\">\n      <mat-icon>add</mat-icon> Nouvelle offre\n    </a>\n  </div>\n\n  <!-- Filter tabs -->\n  <div class=\"filter-tabs\">\n    @for (tab of [['ALL','Toutes'],['PUBLISHED','Publi\u00E9es'],['DRAFT','Brouillons'],['CLOSED','Cl\u00F4tur\u00E9es']]; track tab[0]) {\n      <button class=\"filter-tab\" [class.active]=\"filter === tab[0]\" (click)=\"filter = $any(tab[0])\">\n        {{ tab[1] }}\n        <span class=\"count\">{{ countByStatus(tab[0]) }}</span>\n      </button>\n    }\n  </div>\n\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else if (!filtered.length) {\n    <div class=\"empty-state card\">\n      <span class=\"material-icons-round empty-icon\">work_outline</span>\n      <p class=\"empty-title\">Aucune offre dans cette cat\u00E9gorie</p>\n      <a mat-flat-button routerLink=\"/enterprise/offers/new\" class=\"btn-primary\" style=\"margin-top:12px\">\n        <mat-icon>add</mat-icon> Cr\u00E9er votre premi\u00E8re offre\n      </a>\n    </div>\n  } @else {\n    <div class=\"offers-grid\">\n      @for (offer of filtered; track offer.id) {\n        <div class=\"offer-card card\">\n          <div class=\"offer-card-header\">\n            <div class=\"offer-card-title\">\n              <h3>{{ offer.title }}</h3>\n              <span class=\"chip {{ statusClass(offer.status) }}\">{{ statusLabel(offer.status) }}</span>\n            </div>\n            <div class=\"menu-container\">\n              <button mat-icon-button (click)=\"toggleMenu(offer.id)\" class=\"menu-btn\">\n                <mat-icon>more_vert</mat-icon>\n              </button>\n              @if (activeMenuId === offer.id) {\n                <div class=\"custom-menu\">\n                  <a [routerLink]=\"['/enterprise/offers', offer.id, 'edit']\" class=\"menu-option\">\n                    <mat-icon>edit</mat-icon> Modifier\n                  </a>\n                  <a [routerLink]=\"['/enterprise/offers', offer.id, 'applications']\" class=\"menu-option\">\n                    <mat-icon>people</mat-icon> Candidatures\n                  </a>\n                  @if (offer.status === 'DRAFT') {\n                    <button (click)=\"publish(offer)\" class=\"menu-option\">\n                      <mat-icon>public</mat-icon> Publier\n                    </button>\n                  }\n                  @if (offer.status === 'PUBLISHED') {\n                    <button (click)=\"close(offer)\" class=\"menu-option\">\n                      <mat-icon>lock</mat-icon> Cl\u00F4turer\n                    </button>\n                  }\n                  <button (click)=\"exportExcel(offer)\" class=\"menu-option\">\n                    <mat-icon>download</mat-icon> Export Excel\n                  </button>\n                  <button (click)=\"delete(offer)\" class=\"menu-option danger\">\n                    <mat-icon>delete_outline</mat-icon> Supprimer\n                  </button>\n                </div>\n              }\n            </div>\n          </div>\n\n          <div class=\"offer-meta-row\">\n            @if (offer.location) {\n              <span class=\"meta-chip\"><span class=\"material-icons-round\">place</span>{{ offer.location }}</span>\n            }\n            @if (offer.contractType) {\n              <span class=\"meta-chip\"><span class=\"material-icons-round\">work</span>{{ offer.contractType }}</span>\n            }\n            @if (offer.remote) {\n              <span class=\"meta-chip remote\"><span class=\"material-icons-round\">home</span>T\u00E9l\u00E9travail</span>\n            }\n            @if (offer.experienceRequired) {\n              <span class=\"meta-chip\"><span class=\"material-icons-round\">schedule</span>{{ offer.experienceRequired }} ans exp.</span>\n            }\n          </div>\n\n          @if (offer.salaryMin || offer.salaryMax) {\n            <div class=\"salary-row\">\n              <span class=\"material-icons-round\">euro</span>\n              <span>{{ offer.salaryMin | number }} \u2013 {{ offer.salaryMax | number }} \u20AC</span>\n            </div>\n          }\n\n          <div class=\"offer-card-footer\">\n            <span class=\"date-label\">{{ offer.createdAt | date:'dd/MM/yyyy' }}</span>\n            <div class=\"footer-actions\">\n              <a mat-button [routerLink]=\"['/enterprise/offers', offer.id, 'applications']\" class=\"btn-applications\">\n                <mat-icon>people</mat-icon> Candidatures\n              </a>\n            </div>\n          </div>\n        </div>\n      }\n    </div>\n  }\n</div>\n", styles: [".page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; }\n\n.filter-tabs {\n  display: flex; gap: 4px; margin-bottom: 20px;\n  background: #fff; border: 1px solid var(--border-color);\n  border-radius: 12px; padding: 5px; width: fit-content; flex-wrap: wrap;\n}\n.filter-tab {\n  display: flex; align-items: center; gap: 6px;\n  padding: 7px 14px; border: none; border-radius: 8px;\n  background: transparent; cursor: pointer;\n  font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);\n  transition: all 0.2s ease;\n  .count { background: #e2e8f0; color: #475569; padding: 1px 7px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }\n  &:hover { background: #f1f5f9; }\n  &.active { background: var(--primary-light); color: #fff; .count { background: rgba(255,255,255,.25); color: #fff; } }\n}\n\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 20px; gap: 16px; }\n\n.filter-tabs {\n  display: flex; gap: 4px; margin-bottom: 20px;\n  background: #fff; border: 1px solid var(--border-color);\n  border-radius: 12px; padding: 5px; width: fit-content; flex-wrap: wrap;\n}\n.filter-tab {\n  display: flex; align-items: center; gap: 6px;\n  padding: 7px 14px; border: none; border-radius: 8px;\n  background: transparent; cursor: pointer;\n  font-size: 0.85rem; font-weight: 500; color: var(--text-secondary);\n  transition: all 0.2s ease;\n  .count { background: #e2e8f0; color: #475569; padding: 1px 7px; border-radius: 999px; font-size: 0.72rem; font-weight: 600; }\n  &:hover { background: #f1f5f9; }\n  &.active { background: var(--primary-light); color: #fff; .count { background: rgba(255,255,255,.25); color: #fff; } }\n}\n\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.offers-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }\n\n.offer-card { padding: 20px; }\n.offer-card-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 12px; }\n.offer-card-title { flex: 1; h3 { font-size: 0.95rem; font-weight: 700; margin: 0 0 6px; color: var(--text-primary); } }\n.menu-btn { margin-left: 4px; color: var(--text-secondary)!important; }\n\n.offer-meta-row { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }\n.meta-chip {\n  display: flex; align-items: center; gap: 4px;\n  font-size: 0.78rem; color: var(--text-secondary); background: #f1f5f9;\n  padding: 3px 8px; border-radius: 6px;\n  .material-icons-round { font-size: 14px; }\n  &.remote { background: #dcfce7; color: #166534; }\n}\n\n.salary-row {\n  display: flex; align-items: center; gap: 6px;\n  font-size: 0.85rem; font-weight: 600; color: var(--success);\n  margin-bottom: 12px;\n  .material-icons-round { font-size: 16px; }\n}\n\n.offer-card-footer {\n  display: flex; align-items: center; justify-content: space-between;\n  margin-top: 12px; padding-top: 12px;\n  border-top: 1px solid var(--border-color);\n}\n.date-label { font-size: 0.75rem; color: var(--text-muted); }\n.btn-applications { font-size: 0.8rem!important; color: var(--primary-light)!important; }\n\n::ng-deep .danger-item { color: var(--danger); }\n\n// ===== Custom Menu =====\n.menu-container {\n  position: relative;\n}\n\n.custom-menu {\n  position: absolute;\n  top: 100%;\n  right: 0;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 8px;\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n  z-index: 1000;\n  min-width: 200px;\n  margin-top: 4px;\n}\n\n.menu-option {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--text-primary);\n  font-size: 0.9rem;\n  text-decoration: none;\n  text-align: left;\n  width: 100%;\n  transition: background 0.2s ease;\n\n  mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n\n  &:hover {\n    background: #f1f5f9;\n  }\n\n  &.danger {\n    color: var(--danger);\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnterpriseOffersComponent, { className: "EnterpriseOffersComponent", filePath: "app\\features\\enterprise\\offers\\enterprise-offers.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=enterprise-offers.component.js.map