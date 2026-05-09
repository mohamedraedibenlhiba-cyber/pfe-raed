import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { AlertService } from '../../../core/services/alert.service';
import { ApplicationService } from '../../../core/services/application.service';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/tooltip";
const _forTrack0 = ($index, $item) => $item.id;
function EnterpriseApplicationsComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelement(1, "mat-spinner", 7);
    i0.ɵɵelementEnd();
} }
function EnterpriseApplicationsComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "span", 9);
    i0.ɵɵtext(2, "people_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 10);
    i0.ɵɵtext(4, "Aucune candidature pour le moment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 11);
    i0.ɵɵtext(6, "Partagez votre offre pour recevoir des candidatures");
    i0.ɵɵelementEnd()();
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(app_r2.candidate == null ? null : app_r2.candidate.headline);
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23)(1, "span", 35);
    i0.ɵɵtext(2, "place");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r2.candidate.city);
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23)(1, "span", 35);
    i0.ɵɵtext(2, "mail");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r2.candidate.email);
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "span", 35);
    i0.ɵɵtext(2, "psychology");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r2.aiSummary);
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "span", 35);
    i0.ɵɵtext(2, "article");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r2.coverLetter);
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 36)(2, "mat-icon");
    i0.ɵɵtext(3, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 37)(7, "button", 38);
    i0.ɵɵlistener("click", function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_24_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const app_r2 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.openCv(app_r2)); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 39);
    i0.ɵɵlistener("click", function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_24_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r3); const app_r2 = i0.ɵɵnextContext().$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.downloadCv(app_r2)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "download");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " Telecharger ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const app_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(app_r2.cv.fileName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r3.canPreviewCv(app_r2.cv) ? "visibility" : "download");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r3.canPreviewCv(app_r2.cv) ? "Voir le CV" : "Telecharger le CV", " ");
} }
function EnterpriseApplicationsComponent_Conditional_13_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "div");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 18)(4, "div", 19);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 20)(7, "h4");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_9_Template, 2, 1, "p", 21);
    i0.ɵɵelementStart(10, "div", 22);
    i0.ɵɵtemplate(11, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_11_Template, 4, 1, "span", 23)(12, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_12_Template, 4, 1, "span", 23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 24)(14, "div")(15, "span", 25);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span", 26);
    i0.ɵɵtext(18, "/ 100");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "span", 27);
    i0.ɵɵtext(20, "Score IA");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 28);
    i0.ɵɵtemplate(22, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_22_Template, 5, 1, "div", 29)(23, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_23_Template, 5, 1, "div", 30)(24, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_24_Template, 15, 3, "div", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 32)(26, "div", 33);
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "app-select", 34);
    i0.ɵɵlistener("selectionChange", function EnterpriseApplicationsComponent_Conditional_13_For_10_Template_app_select_selectionChange_31_listener($event) { const app_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.updateStatus(app_r2, $event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_19_0;
    const app_r2 = ctx.$implicit;
    const i_r5 = ctx.$index;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("rank-badge rank-", i_r5 < 3 ? i_r5 + 1 : "other", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i_r5 + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.initials(app_r2.candidate == null ? null : app_r2.candidate.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r2.candidate == null ? null : app_r2.candidate.fullName);
    i0.ɵɵadvance();
    i0.ɵɵconditional(9, (app_r2.candidate == null ? null : app_r2.candidate.headline) ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(11, (app_r2.candidate == null ? null : app_r2.candidate.city) ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(12, (app_r2.candidate == null ? null : app_r2.candidate.email) ? 12 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("score-circle ", ctx_r3.scoreClass(app_r2.aiScore), "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_19_0 = app_r2.aiScore) !== null && tmp_19_0 !== undefined ? tmp_19_0 : "-");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(22, app_r2.aiSummary ? 22 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(23, app_r2.coverLetter ? 23 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(24, app_r2.cv ? 24 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(28, 23, app_r2.appliedAt, "dd/MM/yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r3.statusChipClass(app_r2.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(app_r2.status);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r3.statusOptions)("ngModel", app_r2.status);
} }
function EnterpriseApplicationsComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "span", 14);
    i0.ɵɵtext(3, "psychology");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5, "Classement IA");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 15);
    i0.ɵɵtext(7, "Les candidatures sont triees par score de compatibilite IA");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 16);
    i0.ɵɵrepeaterCreate(9, EnterpriseApplicationsComponent_Conditional_13_For_10_Template, 32, 26, "div", 17, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r3.ranked);
} }
function EnterpriseApplicationsComponent_Conditional_14_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelement(1, "mat-spinner", 46);
    i0.ɵɵelementEnd();
} }
function EnterpriseApplicationsComponent_Conditional_14_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 47);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.viewerUrl, i0.ɵɵsanitizeResourceUrl);
} }
function EnterpriseApplicationsComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵlistener("click", function EnterpriseApplicationsComponent_Conditional_14_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeViewer()); });
    i0.ɵɵelementStart(1, "div", 41);
    i0.ɵɵlistener("click", function EnterpriseApplicationsComponent_Conditional_14_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r6); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 42)(3, "span", 43)(4, "span", 35);
    i0.ɵɵtext(5, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 44);
    i0.ɵɵlistener("click", function EnterpriseApplicationsComponent_Conditional_14_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.closeViewer()); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(10, EnterpriseApplicationsComponent_Conditional_14_Conditional_10_Template, 2, 0, "div", 45)(11, EnterpriseApplicationsComponent_Conditional_14_Conditional_11_Template, 1, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r3.viewerName, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(10, ctx_r3.viewerLoading ? 10 : 11);
} }
export class EnterpriseApplicationsComponent {
    constructor() {
        this.appSvc = inject(ApplicationService);
        this.route = inject(ActivatedRoute);
        this.alertSvc = inject(AlertService);
        this.sanitizer = inject(DomSanitizer);
        this.loading = true;
        this.ranked = [];
        this.viewerUrl = null;
        this.viewerName = '';
        this.viewerLoading = false;
        this.viewerObjectUrl = null;
        this.statusOptions = [
            { value: 'REVIEWED', label: 'En revue' },
            { value: 'SHORTLISTED', label: 'Selectionne' },
            { value: 'INTERVIEW', label: 'Entretien' },
            { value: 'ACCEPTED', label: 'Accepte' },
            { value: 'REJECTED', label: 'Refuse' },
        ];
    }
    ngOnInit() {
        this.offerId = +this.route.snapshot.paramMap.get('id');
        this.loadRanked();
    }
    ngOnDestroy() {
        this.revokeViewerUrl();
    }
    loadRanked() {
        this.loading = true;
        this.appSvc.getRankedWithDetails(this.offerId).subscribe({
            next: res => {
                this.ranked = res.data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            }
        });
    }
    updateStatus(app, status) {
        this.appSvc.updateStatus(app.id, status).subscribe({
            next: res => {
                app.status = res.data.status;
                this.alertSvc.success('Statut mis à jour - Email envoyé au candidat');
            },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    openCv(app) {
        const cv = app.cv;
        if (!cv) {
            this.alertSvc.error('Aucun CV joint a cette candidature');
            return;
        }
        this.viewerLoading = true;
        this.viewerName = cv.fileName;
        this.viewerUrl = null;
        this.appSvc.getApplicationCv(app.id).subscribe({
            next: blob => {
                if (!this.canPreviewCv(cv)) {
                    this.viewerLoading = false;
                    this.downloadBlob(blob, cv.fileName);
                    this.alertSvc.success('CV telecharge pour lecture');
                    return;
                }
                this.revokeViewerUrl();
                this.viewerObjectUrl = URL.createObjectURL(blob);
                this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewerObjectUrl);
                this.viewerLoading = false;
            },
            error: err => {
                this.viewerLoading = false;
                this.alertSvc.error('Erreur', err.error?.message || 'Impossible de charger le CV');
            }
        });
    }
    downloadCv(app) {
        const cv = app.cv;
        if (!cv) {
            this.alertSvc.error('Aucun CV joint a cette candidature');
            return;
        }
        this.appSvc.getApplicationCv(app.id).subscribe({
            next: blob => this.downloadBlob(blob, cv.fileName),
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Impossible de telecharger le CV')
        });
    }
    closeViewer() {
        this.viewerLoading = false;
        this.viewerName = '';
        this.viewerUrl = null;
        this.revokeViewerUrl();
    }
    canPreviewCv(cv) {
        return cv?.contentType === 'application/pdf';
    }
    statusChipClass(status) {
        const map = {
            PENDING: 'chip-gray',
            REVIEWED: 'chip-info',
            AI_ANALYZED: 'chip-accent',
            SHORTLISTED: 'chip-primary',
            INTERVIEW: 'chip-warning',
            ACCEPTED: 'chip-success',
            REJECTED: 'chip-danger'
        };
        return map[status] ?? 'chip-gray';
    }
    scoreClass(score) {
        if (score == null)
            return 'score-na';
        if (score >= 80)
            return 'score-high';
        if (score >= 50)
            return 'score-mid';
        return 'score-low';
    }
    initials(name) {
        return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    downloadBlob(blob, fileName) {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 0);
    }
    revokeViewerUrl() {
        if (this.viewerObjectUrl) {
            URL.revokeObjectURL(this.viewerObjectUrl);
            this.viewerObjectUrl = null;
        }
    }
    static { this.ɵfac = function EnterpriseApplicationsComponent_Factory(t) { return new (t || EnterpriseApplicationsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnterpriseApplicationsComponent, selectors: [["app-enterprise-applications"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 15, vars: 4, consts: [[1, "apps-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["mat-button", "", "routerLink", "/enterprise/offers", 1, "back-btn"], [1, "loading-center"], [1, "cv-viewer-overlay"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "ranking-header", "card"], [1, "ranking-legend"], [1, "material-icons-round", 2, "color", "#7c3aed"], [1, "legend-desc"], [1, "applications-list"], [1, "app-card", "card"], [1, "candidate-info"], [1, "candidate-avatar"], [1, "candidate-details"], [1, "candidate-headline"], [1, "candidate-meta"], [1, "meta-chip"], [1, "ai-score-section"], [1, "score-value"], [1, "score-unit"], [1, "score-label"], [1, "application-main"], [1, "ai-summary"], [1, "cover-letter"], [1, "cv-bar"], [1, "app-footer"], [1, "app-date"], ["label", "Statut", 1, "status-select", 3, "selectionChange", "options", "ngModel"], [1, "material-icons-round"], [1, "cv-meta"], [1, "cv-actions"], ["mat-button", "", 1, "btn-cv", 3, "click"], ["mat-button", "", 1, "btn-cv-secondary", 3, "click"], [1, "cv-viewer-overlay", 3, "click"], [1, "cv-viewer-modal", 3, "click"], [1, "cv-viewer-header"], [1, "cv-viewer-title"], ["mat-icon-button", "", "matTooltip", "Fermer", 3, "click"], [1, "viewer-loading"], ["diameter", "48"], [1, "cv-iframe", 3, "src"]], template: function EnterpriseApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Candidatures");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 4)(8, "mat-icon");
            i0.ɵɵtext(9, "arrow_back");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Mes offres ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, EnterpriseApplicationsComponent_Conditional_11_Template, 2, 0, "div", 5)(12, EnterpriseApplicationsComponent_Conditional_12_Template, 7, 0)(13, EnterpriseApplicationsComponent_Conditional_13_Template, 11, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, EnterpriseApplicationsComponent_Conditional_14_Template, 12, 2, "div", 6);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2("Offre #", ctx.offerId, " - ", ctx.ranked.length, " candidature(s) recue(s)");
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(11, ctx.loading ? 11 : !ctx.ranked.length ? 12 : 13);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(14, ctx.viewerUrl || ctx.viewerLoading ? 14 : -1);
        } }, dependencies: [CommonModule, i1.DatePipe, RouterLink, FormsModule, i2.NgControlStatus, i2.NgModel, MatButtonModule, i3.MatAnchor, i3.MatButton, i3.MatIconButton, MatIconModule, i4.MatIcon, MatProgressSpinnerModule, i5.MatProgressSpinner, AppSelectComponent, MatTooltipModule, i6.MatTooltip, MatTabsModule], styles: [".page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 20px; }\n.back-btn[_ngcontent-%COMP%] { color: var(--text-secondary)!important; }\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.ranking-header[_ngcontent-%COMP%] { padding: 14px 20px; margin-bottom: 16px; }\n.ranking-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n\n  .material-icons-round { font-size: 20px; }\n  strong { font-size: 0.875rem; }\n}\n.legend-desc[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--text-secondary); }\n\n.applications-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n\n.app-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 40px minmax(220px, 1fr) 100px minmax(300px, 1.3fr) auto;\n  align-items: start;\n  gap: 16px;\n\n  @media (max-width: 1100px) {\n    grid-template-columns: 40px 1fr 100px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: 40px 1fr;\n  }\n}\n\n.rank-badge[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  font-weight: 800;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  &.rank-1 { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #fff; box-shadow: 0 4px 12px rgba(251,191,36,.4); }\n  &.rank-2 { background: linear-gradient(135deg, #94a3b8, #64748b); color: #fff; }\n  &.rank-3 { background: linear-gradient(135deg, #d97706, #b45309); color: #fff; }\n  &.rank-other { background: #f1f5f9; color: var(--text-secondary); font-size: 0.875rem; }\n}\n\n.candidate-info[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 12px; min-width: 0; }\n.candidate-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #0891b2);\n  color: #fff;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.candidate-details[_ngcontent-%COMP%] {\n  min-width: 0;\n\n  h4 { font-weight: 700; font-size: 0.95rem; margin: 0 0 3px; }\n}\n.candidate-headline[_ngcontent-%COMP%] { font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 6px; }\n.candidate-meta[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; }\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n\n  .material-icons-round { font-size: 12px; }\n}\n\n.ai-score-section[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; }\n.score-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid;\n\n  &.score-high { border-color: var(--success); background: #f0fdf4; .score-value { color: var(--success); } }\n  &.score-mid  { border-color: var(--warning); background: #fffbeb; .score-value { color: var(--warning); } }\n  &.score-low  { border-color: var(--danger); background: #fef2f2; .score-value { color: var(--danger); } }\n  &.score-na   { border-color: #e2e8f0; background: #f8fafc; .score-value { color: var(--text-muted); } }\n}\n.score-value[_ngcontent-%COMP%] { font-size: 1rem; font-weight: 800; line-height: 1; }\n.score-unit[_ngcontent-%COMP%]  { font-size: 0.6rem; color: var(--text-muted); }\n.score-label[_ngcontent-%COMP%] { font-size: 0.7rem; color: var(--text-secondary); text-align: center; }\n\n.application-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n\n  @media (max-width: 1100px) {\n    grid-column: 2 / -1;\n  }\n\n  @media (max-width: 768px) {\n    grid-column: 1 / -1;\n  }\n}\n\n.ai-summary[_ngcontent-%COMP%], .cover-letter[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  border-radius: 8px;\n  padding: 10px 12px;\n\n  .material-icons-round {\n    font-size: 16px;\n    flex-shrink: 0;\n  }\n\n  p {\n    font-size: 0.8rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n}\n\n.ai-summary[_ngcontent-%COMP%] {\n  background: #f5f3ff;\n\n  .material-icons-round { color: #7c3aed; }\n  p { color: #4c1d95; }\n}\n\n.cover-letter[_ngcontent-%COMP%] {\n  background: #f8fafc;\n\n  .material-icons-round { color: #0f172a; }\n  p { color: var(--text-primary); }\n}\n\n.cv-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #eff6ff, #f8fafc);\n  border: 1px solid #dbeafe;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n.cv-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  color: var(--text-primary);\n\n  mat-icon { color: #2563eb; }\n  span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n}\n\n.cv-actions[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.btn-cv[_ngcontent-%COMP%], .btn-cv-secondary[_ngcontent-%COMP%] { border-radius: 999px; }\n.btn-cv[_ngcontent-%COMP%] { background: #2563eb; color: #fff!important; }\n.btn-cv-secondary[_ngcontent-%COMP%] { color: #1e3a8a!important; }\n\n.app-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media (max-width: 1100px) {\n    grid-column: 2 / -1;\n  }\n\n  @media (max-width: 768px) {\n    grid-column: 1 / -1;\n    justify-content: flex-start;\n  }\n}\n\n.app-date[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; }\n.status-select[_ngcontent-%COMP%] { width: 150px; --mat-form-field-container-height: 40px; }\n\n.cv-viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  z-index: 1100;\n}\n\n.cv-viewer-modal[_ngcontent-%COMP%] {\n  width: min(1100px, 100%);\n  height: min(88vh, 900px);\n  background: #fff;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);\n}\n\n.cv-viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.cv-viewer-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n}\n\n.viewer-loading[_ngcontent-%COMP%] { flex: 1; display: flex; align-items: center; justify-content: center; }\n.cv-iframe[_ngcontent-%COMP%] { flex: 1; width: 100%; border: none; }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnterpriseApplicationsComponent, [{
        type: Component,
        args: [{ selector: 'app-enterprise-applications', standalone: true, imports: [CommonModule, RouterLink, FormsModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, AppSelectComponent, MatTooltipModule, MatTabsModule], template: "<div class=\"apps-page\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"page-title\">Candidatures</h1>\n      <p class=\"page-subtitle\">Offre #{{ offerId }} - {{ ranked.length }} candidature(s) recue(s)</p>\n    </div>\n    <a mat-button routerLink=\"/enterprise/offers\" class=\"back-btn\">\n      <mat-icon>arrow_back</mat-icon> Mes offres\n    </a>\n  </div>\n\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else if (!ranked.length) {\n    <div class=\"empty-state card\">\n      <span class=\"material-icons-round empty-icon\">people_outline</span>\n      <p class=\"empty-title\">Aucune candidature pour le moment</p>\n      <p class=\"empty-desc\">Partagez votre offre pour recevoir des candidatures</p>\n    </div>\n  } @else {\n    <div class=\"ranking-header card\">\n      <div class=\"ranking-legend\">\n        <span class=\"material-icons-round\" style=\"color:#7c3aed\">psychology</span>\n        <strong>Classement IA</strong>\n        <span class=\"legend-desc\">Les candidatures sont triees par score de compatibilite IA</span>\n      </div>\n    </div>\n\n    <div class=\"applications-list\">\n      @for (app of ranked; track app.id; let i = $index) {\n        <div class=\"app-card card\">\n          <div class=\"rank-badge rank-{{ i < 3 ? i+1 : 'other' }}\">{{ i + 1 }}</div>\n\n          <div class=\"candidate-info\">\n            <div class=\"candidate-avatar\">{{ initials(app.candidate?.fullName) }}</div>\n            <div class=\"candidate-details\">\n              <h4>{{ app.candidate?.fullName }}</h4>\n              @if (app.candidate?.headline) {\n                <p class=\"candidate-headline\">{{ app.candidate?.headline }}</p>\n              }\n              <div class=\"candidate-meta\">\n                @if (app.candidate?.city) {\n                  <span class=\"meta-chip\"><span class=\"material-icons-round\">place</span>{{ app.candidate!.city }}</span>\n                }\n                @if (app.candidate?.email) {\n                  <span class=\"meta-chip\"><span class=\"material-icons-round\">mail</span>{{ app.candidate!.email }}</span>\n                }\n              </div>\n            </div>\n          </div>\n\n          <div class=\"ai-score-section\">\n            <div class=\"score-circle {{ scoreClass(app.aiScore) }}\">\n              <span class=\"score-value\">{{ app.aiScore ?? '-' }}</span>\n              <span class=\"score-unit\">/ 100</span>\n            </div>\n            <span class=\"score-label\">Score IA</span>\n          </div>\n\n          <div class=\"application-main\">\n            @if (app.aiSummary) {\n              <div class=\"ai-summary\">\n                <span class=\"material-icons-round\">psychology</span>\n                <p>{{ app.aiSummary }}</p>\n              </div>\n            }\n\n            @if (app.coverLetter) {\n              <div class=\"cover-letter\">\n                <span class=\"material-icons-round\">article</span>\n                <p>{{ app.coverLetter }}</p>\n              </div>\n            }\n\n            @if (app.cv) {\n              <div class=\"cv-bar\">\n                <div class=\"cv-meta\">\n                  <mat-icon>description</mat-icon>\n                  <span>{{ app.cv.fileName }}</span>\n                </div>\n                <div class=\"cv-actions\">\n                  <button mat-button class=\"btn-cv\" (click)=\"openCv(app)\">\n                    <mat-icon>{{ canPreviewCv(app.cv) ? 'visibility' : 'download' }}</mat-icon>\n                    {{ canPreviewCv(app.cv) ? 'Voir le CV' : 'Telecharger le CV' }}\n                  </button>\n                  <button mat-button class=\"btn-cv-secondary\" (click)=\"downloadCv(app)\">\n                    <mat-icon>download</mat-icon>\n                    Telecharger\n                  </button>\n                </div>\n              </div>\n            }\n          </div>\n\n          <div class=\"app-footer\">\n            <div class=\"app-date\">{{ app.appliedAt | date:'dd/MM/yyyy' }}</div>\n            <span class=\"chip {{ statusChipClass(app.status) }}\">{{ app.status }}</span>\n            <app-select class=\"status-select\" label=\"Statut\" [options]=\"statusOptions\" [ngModel]=\"app.status\" (selectionChange)=\"updateStatus(app, $event)\"></app-select>\n          </div>\n        </div>\n      }\n    </div>\n  }\n</div>\n\n@if (viewerUrl || viewerLoading) {\n  <div class=\"cv-viewer-overlay\" (click)=\"closeViewer()\">\n    <div class=\"cv-viewer-modal\" (click)=\"$event.stopPropagation()\">\n      <div class=\"cv-viewer-header\">\n        <span class=\"cv-viewer-title\">\n          <span class=\"material-icons-round\">description</span>\n          {{ viewerName }}\n        </span>\n        <button mat-icon-button (click)=\"closeViewer()\" matTooltip=\"Fermer\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </div>\n      @if (viewerLoading) {\n        <div class=\"viewer-loading\"><mat-spinner diameter=\"48\" /></div>\n      } @else {\n        <iframe [src]=\"viewerUrl\" class=\"cv-iframe\"></iframe>\n      }\n    </div>\n  </div>\n}\n", styles: [".page-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; margin-bottom: 20px; }\n.back-btn { color: var(--text-secondary)!important; }\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.ranking-header { padding: 14px 20px; margin-bottom: 16px; }\n.ranking-legend {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n\n  .material-icons-round { font-size: 20px; }\n  strong { font-size: 0.875rem; }\n}\n.legend-desc { font-size: 0.8rem; color: var(--text-secondary); }\n\n.applications-list { display: flex; flex-direction: column; gap: 12px; }\n\n.app-card {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 40px minmax(220px, 1fr) 100px minmax(300px, 1.3fr) auto;\n  align-items: start;\n  gap: 16px;\n\n  @media (max-width: 1100px) {\n    grid-template-columns: 40px 1fr 100px;\n  }\n\n  @media (max-width: 768px) {\n    grid-template-columns: 40px 1fr;\n  }\n}\n\n.rank-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  font-weight: 800;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n\n  &.rank-1 { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #fff; box-shadow: 0 4px 12px rgba(251,191,36,.4); }\n  &.rank-2 { background: linear-gradient(135deg, #94a3b8, #64748b); color: #fff; }\n  &.rank-3 { background: linear-gradient(135deg, #d97706, #b45309); color: #fff; }\n  &.rank-other { background: #f1f5f9; color: var(--text-secondary); font-size: 0.875rem; }\n}\n\n.candidate-info { display: flex; align-items: flex-start; gap: 12px; min-width: 0; }\n.candidate-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #4f46e5, #0891b2);\n  color: #fff;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.candidate-details {\n  min-width: 0;\n\n  h4 { font-weight: 700; font-size: 0.95rem; margin: 0 0 3px; }\n}\n.candidate-headline { font-size: 0.8rem; color: var(--text-secondary); margin: 0 0 6px; }\n.candidate-meta { display: flex; flex-wrap: wrap; gap: 8px; }\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n\n  .material-icons-round { font-size: 12px; }\n}\n\n.ai-score-section { display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; }\n.score-circle {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid;\n\n  &.score-high { border-color: var(--success); background: #f0fdf4; .score-value { color: var(--success); } }\n  &.score-mid  { border-color: var(--warning); background: #fffbeb; .score-value { color: var(--warning); } }\n  &.score-low  { border-color: var(--danger); background: #fef2f2; .score-value { color: var(--danger); } }\n  &.score-na   { border-color: #e2e8f0; background: #f8fafc; .score-value { color: var(--text-muted); } }\n}\n.score-value { font-size: 1rem; font-weight: 800; line-height: 1; }\n.score-unit  { font-size: 0.6rem; color: var(--text-muted); }\n.score-label { font-size: 0.7rem; color: var(--text-secondary); text-align: center; }\n\n.application-main {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n\n  @media (max-width: 1100px) {\n    grid-column: 2 / -1;\n  }\n\n  @media (max-width: 768px) {\n    grid-column: 1 / -1;\n  }\n}\n\n.ai-summary,\n.cover-letter {\n  display: flex;\n  gap: 8px;\n  border-radius: 8px;\n  padding: 10px 12px;\n\n  .material-icons-round {\n    font-size: 16px;\n    flex-shrink: 0;\n  }\n\n  p {\n    font-size: 0.8rem;\n    line-height: 1.5;\n    margin: 0;\n  }\n}\n\n.ai-summary {\n  background: #f5f3ff;\n\n  .material-icons-round { color: #7c3aed; }\n  p { color: #4c1d95; }\n}\n\n.cover-letter {\n  background: #f8fafc;\n\n  .material-icons-round { color: #0f172a; }\n  p { color: var(--text-primary); }\n}\n\n.cv-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #eff6ff, #f8fafc);\n  border: 1px solid #dbeafe;\n\n  @media (max-width: 768px) {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n\n.cv-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  color: var(--text-primary);\n\n  mat-icon { color: #2563eb; }\n  span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n}\n\n.cv-actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n.btn-cv,\n.btn-cv-secondary { border-radius: 999px; }\n.btn-cv { background: #2563eb; color: #fff!important; }\n.btn-cv-secondary { color: #1e3a8a!important; }\n\n.app-footer {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n\n  @media (max-width: 1100px) {\n    grid-column: 2 / -1;\n  }\n\n  @media (max-width: 768px) {\n    grid-column: 1 / -1;\n    justify-content: flex-start;\n  }\n}\n\n.app-date { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; }\n.status-select { width: 150px; --mat-form-field-container-height: 40px; }\n\n.cv-viewer-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n  z-index: 1100;\n}\n\n.cv-viewer-modal {\n  width: min(1100px, 100%);\n  height: min(88vh, 900px);\n  background: #fff;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.35);\n}\n\n.cv-viewer-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 14px 18px;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.cv-viewer-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 700;\n}\n\n.viewer-loading { flex: 1; display: flex; align-items: center; justify-content: center; }\n.cv-iframe { flex: 1; width: 100%; border: none; }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnterpriseApplicationsComponent, { className: "EnterpriseApplicationsComponent", filePath: "app\\features\\enterprise\\applications\\enterprise-applications.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=enterprise-applications.component.js.map