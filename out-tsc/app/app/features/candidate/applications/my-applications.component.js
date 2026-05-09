import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ApplicationService } from '../../../core/services/application.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
const _forTrack0 = ($index, $item) => $item.id;
function MyApplicationsComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "mat-spinner", 4);
    i0.ɵɵelementEnd();
} }
function MyApplicationsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5)(1, "span", 6);
    i0.ɵɵtext(2, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 7);
    i0.ɵɵtext(4, "Aucune candidature envoy\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 8);
    i0.ɵɵtext(6, "Explorez les offres et postulez en un clic");
    i0.ɵɵelementEnd()();
} }
function MyApplicationsComponent_Conditional_7_For_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16)(1, "span", 22);
    i0.ɵɵtext(2, "place");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.location);
} }
function MyApplicationsComponent_Conditional_7_For_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.contractType);
} }
function MyApplicationsComponent_Conditional_7_For_2_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span", 22);
    i0.ɵɵtext(2, "psychology");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const app_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMapInterpolate1("ai-score-badge ", app_r1.aiScore >= 80 ? "high" : app_r1.aiScore >= 50 ? "mid" : "low", "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", app_r1.aiScore, "/100 ");
} }
function MyApplicationsComponent_Conditional_7_For_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 22);
    i0.ɵɵtext(2, "psychology");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(app_r1.aiSummary);
} }
function MyApplicationsComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 13)(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 15);
    i0.ɵɵtemplate(10, MyApplicationsComponent_Conditional_7_For_2_Conditional_10_Template, 4, 1, "span", 16)(11, MyApplicationsComponent_Conditional_7_For_2_Conditional_11_Template, 2, 1, "span", 16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 17)(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, MyApplicationsComponent_Conditional_7_For_2_Conditional_15_Template, 4, 4, "div", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(16, MyApplicationsComponent_Conditional_7_For_2_Conditional_16_Template, 5, 1, "div", 19);
    i0.ɵɵelementStart(17, "div", 20)(18, "span", 21);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.enterprise == null ? null : app_r1.jobOffer.enterprise.companyName == null ? null : app_r1.jobOffer.enterprise.companyName[0] == null ? null : app_r1.jobOffer.enterprise.companyName[0].toUpperCase());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.enterprise == null ? null : app_r1.jobOffer.enterprise.companyName);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(10, (app_r1.jobOffer == null ? null : app_r1.jobOffer.location) ? 10 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(11, (app_r1.jobOffer == null ? null : app_r1.jobOffer.contractType) ? 11 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r1.statusChipClass(app_r1.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(app_r1.status));
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, app_r1.aiScore ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(16, app_r1.aiSummary ? 16 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Postul\u00E9 le ", i0.ɵɵpipeBind2(20, 12, app_r1.appliedAt, "dd MMMM yyyy"), "");
} }
function MyApplicationsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵrepeaterCreate(1, MyApplicationsComponent_Conditional_7_For_2_Template, 21, 15, "div", 10, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.applications);
} }
export class MyApplicationsComponent {
    constructor() {
        this.appSvc = inject(ApplicationService);
        this.loading = true;
        this.applications = [];
    }
    ngOnInit() {
        this.appSvc.getMyApplications().subscribe({
            next: res => { this.applications = res.data; this.loading = false; },
            error: () => { this.loading = false; }
        });
    }
    statusChipClass(s) {
        return { PENDING: 'chip-gray', REVIEWED: 'chip-info', AI_ANALYZED: 'chip-accent', SHORTLISTED: 'chip-primary', INTERVIEW: 'chip-warning', ACCEPTED: 'chip-success', REJECTED: 'chip-danger' }[s] ?? 'chip-gray';
    }
    statusLabel(s) {
        return { PENDING: 'En attente', REVIEWED: 'Examinée', AI_ANALYZED: 'Analysée IA', SHORTLISTED: 'Sélectionné', INTERVIEW: 'Entretien', ACCEPTED: 'Accepté', REJECTED: 'Refusé' }[s] ?? s;
    }
    static { this.ɵfac = function MyApplicationsComponent_Factory(t) { return new (t || MyApplicationsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyApplicationsComponent, selectors: [["app-my-applications"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "loading-center"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "applications-list"], [1, "app-card", "card"], [1, "app-header"], [1, "company-logo", "bg-primary"], [1, "app-info"], [1, "company"], [1, "meta-row"], [1, "meta"], [1, "app-side"], [3, "class"], [1, "ai-summary"], [1, "app-footer"], [1, "date"], [1, "material-icons-round"]], template: function MyApplicationsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h1", 1);
            i0.ɵɵtext(2, "Mes candidatures");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p", 2);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(5, MyApplicationsComponent_Conditional_5_Template, 2, 0, "div", 3)(6, MyApplicationsComponent_Conditional_6_Template, 7, 0)(7, MyApplicationsComponent_Conditional_7_Template, 3, 0);
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", ctx.applications.length, " candidature(s) envoy\u00E9e(s)");
            i0.ɵɵadvance();
            i0.ɵɵconditional(5, ctx.loading ? 5 : !ctx.applications.length ? 6 : 7);
        } }, dependencies: [CommonModule, i1.DatePipe, MatProgressSpinnerModule, i2.MatProgressSpinner, MatIconModule, MatButtonModule], styles: [".page-header[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.applications-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 12px; }\n\n.app-card[_ngcontent-%COMP%] { padding: 20px; }\n.app-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; gap: 14px; }\n.company-logo[_ngcontent-%COMP%] { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 1rem; flex-shrink: 0; }\n.app-info[_ngcontent-%COMP%] { flex: 1; h3 { font-size: 0.95rem; font-weight: 700; margin: 0 0 3px; } .company { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 6px; font-weight: 500; } }\n.meta-row[_ngcontent-%COMP%] { display: flex; flex-wrap: wrap; gap: 8px; }\n.meta[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: var(--text-muted); .material-icons-round { font-size: 13px; } }\n\n.app-side[_ngcontent-%COMP%] { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }\n.ai-score-badge[_ngcontent-%COMP%] { display: flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; .material-icons-round { font-size: 14px; } &.high { background: #dcfce7; color: #166534; } &.mid { background: #fef3c7; color: #92400e; } &.low { background: #fee2e2; color: #991b1b; } }\n\n.ai-summary[_ngcontent-%COMP%] { display: flex; gap: 8px; background: #f5f3ff; border-radius: 8px; padding: 10px 14px; margin-top: 10px; .material-icons-round { font-size: 16px; color: #7c3aed; flex-shrink: 0; margin-top: 2px; } p { font-size: 0.82rem; line-height: 1.5; margin: 0; color: #3b0764; } }\n.app-footer[_ngcontent-%COMP%] { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border-color); .date { font-size: 0.78rem; color: var(--text-muted); } }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyApplicationsComponent, [{
        type: Component,
        args: [{ selector: 'app-my-applications', standalone: true, imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule], template: "<div class=\"page-header\">\n  <h1 class=\"page-title\">Mes candidatures</h1>\n  <p class=\"page-subtitle\">{{ applications.length }} candidature(s) envoy\u00E9e(s)</p>\n</div>\n\n@if (loading) {\n  <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n} @else if (!applications.length) {\n  <div class=\"empty-state card\">\n    <span class=\"material-icons-round empty-icon\">send</span>\n    <p class=\"empty-title\">Aucune candidature envoy\u00E9e</p>\n    <p class=\"empty-desc\">Explorez les offres et postulez en un clic</p>\n  </div>\n} @else {\n  <div class=\"applications-list\">\n    @for (app of applications; track app.id) {\n      <div class=\"app-card card\">\n        <div class=\"app-header\">\n          <div class=\"company-logo bg-primary\">{{ app.jobOffer?.enterprise?.companyName?.[0]?.toUpperCase() }}</div>\n          <div class=\"app-info\">\n            <h3>{{ app.jobOffer?.title }}</h3>\n            <p class=\"company\">{{ app.jobOffer?.enterprise?.companyName }}</p>\n            <div class=\"meta-row\">\n              @if (app.jobOffer?.location) {\n                <span class=\"meta\"><span class=\"material-icons-round\">place</span>{{ app.jobOffer?.location }}</span>\n              }\n              @if (app.jobOffer?.contractType) {\n                <span class=\"meta\">{{ app.jobOffer?.contractType }}</span>\n              }\n            </div>\n          </div>\n          <div class=\"app-side\">\n            <span class=\"chip {{ statusChipClass(app.status) }}\">{{ statusLabel(app.status) }}</span>\n            @if (app.aiScore) {\n              <div class=\"ai-score-badge {{ app.aiScore >= 80 ? 'high' : app.aiScore >= 50 ? 'mid' : 'low' }}\">\n                <span class=\"material-icons-round\">psychology</span>\n                {{ app.aiScore }}/100\n              </div>\n            }\n          </div>\n        </div>\n\n        @if (app.aiSummary) {\n          <div class=\"ai-summary\">\n            <span class=\"material-icons-round\">psychology</span>\n            <p>{{ app.aiSummary }}</p>\n          </div>\n        }\n\n        <div class=\"app-footer\">\n          <span class=\"date\">Postul\u00E9 le {{ app.appliedAt | date:'dd MMMM yyyy' }}</span>\n        </div>\n      </div>\n    }\n  </div>\n}\n", styles: [".page-header { margin-bottom: 20px; }\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.applications-list { display: flex; flex-direction: column; gap: 12px; }\n\n.app-card { padding: 20px; }\n.app-header { display: flex; align-items: flex-start; gap: 14px; }\n.company-logo { width: 44px; height: 44px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 1rem; flex-shrink: 0; }\n.app-info { flex: 1; h3 { font-size: 0.95rem; font-weight: 700; margin: 0 0 3px; } .company { font-size: 0.82rem; color: var(--text-secondary); margin: 0 0 6px; font-weight: 500; } }\n.meta-row { display: flex; flex-wrap: wrap; gap: 8px; }\n.meta { display: flex; align-items: center; gap: 4px; font-size: 0.75rem; color: var(--text-muted); .material-icons-round { font-size: 13px; } }\n\n.app-side { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; flex-shrink: 0; }\n.ai-score-badge { display: flex; align-items: center; gap: 4px; font-size: 0.8rem; font-weight: 700; padding: 4px 10px; border-radius: 999px; .material-icons-round { font-size: 14px; } &.high { background: #dcfce7; color: #166534; } &.mid { background: #fef3c7; color: #92400e; } &.low { background: #fee2e2; color: #991b1b; } }\n\n.ai-summary { display: flex; gap: 8px; background: #f5f3ff; border-radius: 8px; padding: 10px 14px; margin-top: 10px; .material-icons-round { font-size: 16px; color: #7c3aed; flex-shrink: 0; margin-top: 2px; } p { font-size: 0.82rem; line-height: 1.5; margin: 0; color: #3b0764; } }\n.app-footer { margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border-color); .date { font-size: 0.78rem; color: var(--text-muted); } }\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyApplicationsComponent, { className: "MyApplicationsComponent", filePath: "app\\features\\candidate\\applications\\my-applications.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=my-applications.component.js.map