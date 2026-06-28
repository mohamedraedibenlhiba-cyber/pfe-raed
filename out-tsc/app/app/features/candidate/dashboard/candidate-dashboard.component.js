import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApplicationService } from '../../../core/services/application.service';
import { CvService } from '../../../core/services/cv.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/progress-spinner";
const _forTrack0 = ($index, $item) => $item.id;
function CandidateDashboardComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵelement(1, "mat-spinner", 5);
    i0.ɵɵelementEnd();
} }
function CandidateDashboardComponent_Conditional_12_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 29);
    i0.ɵɵtext(2, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 30);
    i0.ɵɵtext(4, "Aucune candidature");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "a", 31);
    i0.ɵɵtext(6, " Rechercher des offres ");
    i0.ɵɵelementEnd()();
} }
function CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "/100");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(app_r1.aiScore);
} }
function CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "div", 33)(2, "p", 34);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(6, CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Conditional_6_Template, 4, 1, "div", 36);
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span", 37);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.enterprise == null ? null : app_r1.jobOffer.enterprise.companyName);
    i0.ɵɵadvance();
    i0.ɵɵconditional(6, app_r1.aiScore ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("chip ", ctx_r1.appStatusClass(app_r1.status), "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(app_r1.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 8, app_r1.appliedAt, "dd/MM"));
} }
function CandidateDashboardComponent_Conditional_12_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Template, 12, 11, "div", 32, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.applications.slice(0, 5));
} }
function CandidateDashboardComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 9);
    i0.ɵɵtext(4, "send");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 10)(6, "p", 11);
    i0.ɵɵtext(7, "Candidatures envoy\u00E9es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h3", 12);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 7)(11, "div", 13)(12, "span", 9);
    i0.ɵɵtext(13, "hourglass_empty");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 10)(15, "p", 11);
    i0.ɵɵtext(16, "En attente");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h3", 12);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 7)(20, "div", 14)(21, "span", 9);
    i0.ɵɵtext(22, "star");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 10)(24, "p", 11);
    i0.ɵɵtext(25, "S\u00E9lectionn\u00E9s");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "h3", 12);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 7)(29, "div", 15)(30, "span", 9);
    i0.ɵɵtext(31, "event");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 10)(33, "p", 11);
    i0.ɵɵtext(34, "Entretiens");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h3", 12);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(37, "div", 16)(38, "div", 17)(39, "h3");
    i0.ɵɵtext(40, "Mes derni\u00E8res candidatures");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "a", 18);
    i0.ɵɵtext(42, " Voir tout ");
    i0.ɵɵelementStart(43, "mat-icon");
    i0.ɵɵtext(44, "arrow_forward");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(45, CandidateDashboardComponent_Conditional_12_Conditional_45_Template, 7, 0, "div", 19)(46, CandidateDashboardComponent_Conditional_12_Conditional_46_Template, 2, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 20)(48, "a", 21)(49, "div", 22)(50, "span", 9);
    i0.ɵɵtext(51, "search");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "span");
    i0.ɵɵtext(53, "Offres d'emploi");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "a", 23)(55, "div", 24)(56, "span", 9);
    i0.ɵɵtext(57, "description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "span");
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "a", 25)(61, "div", 26)(62, "span", 9);
    i0.ɵɵtext(63, "chat_bubble_outline");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "span");
    i0.ɵɵtext(65, "Messagerie");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "a", 27)(67, "div", 28)(68, "span", 9);
    i0.ɵɵtext(69, "report_problem");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "span");
    i0.ɵɵtext(71, "R\u00E9clamations");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.applications.length);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.pendingCount);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.shortlistCount);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.interviewCount);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(45, !ctx_r1.applications.length ? 45 : 46);
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate1("Mes CVs (", ctx_r1.cvCount, ")");
} }
export class CandidateDashboardComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.appSvc = inject(ApplicationService);
        this.cvSvc = inject(CvService);
        this.loading = true;
        this.applications = [];
        this.cvCount = 0;
    }
    get pendingCount() { return this.applications.filter(a => a.status === 'PENDING').length; }
    get shortlistCount() { return this.applications.filter(a => a.status === 'SHORTLISTED').length; }
    get interviewCount() { return this.applications.filter(a => a.status === 'INTERVIEW').length; }
    appStatusClass(status) {
        const map = {
            PENDING: 'chip-gray', REVIEWED: 'chip-info', AI_ANALYZED: 'chip-accent',
            SHORTLISTED: 'chip-primary', INTERVIEW: 'chip-warning', ACCEPTED: 'chip-success', REJECTED: 'chip-danger'
        };
        return map[status] ?? 'chip-gray';
    }
    ngOnInit() {
        this.appSvc.getMyApplications().subscribe({
            next: res => { this.applications = res.data; this.loading = false; },
            error: () => { this.loading = false; }
        });
        this.cvSvc.getMyCvs().subscribe({ next: res => this.cvCount = res.data.length });
    }
    static { this.ɵfac = function CandidateDashboardComponent_Factory(t) { return new (t || CandidateDashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CandidateDashboardComponent, selectors: [["app-candidate-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 13, vars: 2, consts: [[1, "dashboard"], [1, "welcome-banner", "candidate-banner"], [1, "welcome-text"], ["mat-flat-button", "", "routerLink", "/candidate/search", 1, "btn-search"], [1, "loading-center"], ["diameter", "40"], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "bg-primary"], [1, "material-icons-round"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "bg-warning"], [1, "stat-icon", "bg-success"], [1, "stat-icon", "bg-info"], [1, "card", "section-card"], [1, "section-header"], ["routerLink", "/candidate/applications", "mat-button", "", 1, "view-all-btn"], [1, "empty-state"], [1, "quick-links-grid"], ["routerLink", "/candidate/search", 1, "quick-link-card"], [1, "ql-icon", "bg-primary"], ["routerLink", "/candidate/cvs", 1, "quick-link-card"], [1, "ql-icon", "bg-info"], ["routerLink", "/candidate/messages", 1, "quick-link-card"], [1, "ql-icon", "bg-success"], ["routerLink", "/candidate/reclamations", 1, "quick-link-card"], [1, "ql-icon", "bg-warning"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], ["mat-flat-button", "", "routerLink", "/candidate/search", 1, "btn-primary", 2, "margin-top", "12px"], [1, "app-row"], [1, "app-info"], [1, "app-offer-title"], [1, "app-company"], [1, "mini-score"], [1, "app-date"]], template: function CandidateDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "D\u00E9couvrez les meilleures offres d'emploi adapt\u00E9es \u00E0 votre profil gr\u00E2ce \u00E0 l'IA.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "a", 3)(8, "mat-icon");
            i0.ɵɵtext(9, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(10, " Chercher des offres ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, CandidateDashboardComponent_Conditional_11_Template, 2, 0, "div", 4)(12, CandidateDashboardComponent_Conditional_12_Template, 72, 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Bonjour, ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName, " \uD83D\uDC4B");
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(11, ctx.loading ? 11 : 12);
        } }, dependencies: [CommonModule, i1.DatePipe, RouterLink,
            MatButtonModule, i2.MatAnchor, MatIconModule, i3.MatIcon, MatProgressSpinnerModule, i4.MatProgressSpinner], styles: ["@import '../../enterprise/dashboard/enterprise-dashboard.component.scss';\n\n.candidate-banner[_ngcontent-%COMP%] { background: linear-gradient(135deg, #065f46, #059669, #0891b2); }\n.btn-search[_ngcontent-%COMP%] { @extend .btn-primary; }\n\n//[_ngcontent-%COMP%]   \u2728[_ngcontent-%COMP%]   Search[_ngcontent-%COMP%]   Banner\n.search-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #1e3a8a, #2563eb, #0891b2);\n  padding: 2rem;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n  color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n\n  h2 {\n    margin: 0 0 1.5rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n\n  .search-wrapper {\n    position: relative;\n\n    .search-field {\n      width: 100%;\n      background: rgba(255, 255, 255, 0.95);\n      border-radius: 8px;\n\n      ::ng-deep {\n        .mdc-text-field {\n          width: 100%;\n        }\n        .mat-mdc-form-field-focus-overlay {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2728[_ngcontent-%COMP%]   Search[_ngcontent-%COMP%]   Results[_ngcontent-%COMP%]   Dropdown\n.search-results-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 8px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: 100;\n\n  .loading-center {\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  transition: background 0.15s;\n\n  &:hover {\n    background: #f9fafb;\n  }\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  .result-left {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n\n    .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, #2563eb, #0891b2);\n      color: white;\n      font-weight: 600;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n    }\n\n    .user-details {\n      flex: 1;\n      min-width: 0;\n\n      .name {\n        font-weight: 600;\n        font-size: 0.9rem;\n        margin: 0 0 4px;\n        color: #1f2937;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .subtitle {\n        font-size: 0.8rem;\n        color: #6b7280;\n        margin: 0 0 2px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .location {\n        font-size: 0.75rem;\n        color: #9ca3af;\n        margin: 0;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        white-space: nowrap;\n\n        mat-icon {\n          font-size: 12px;\n          width: 12px;\n          height: 12px;\n        }\n      }\n    }\n  }\n\n  .result-actions {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    flex-shrink: 0;\n    margin-left: 12px;\n\n    .action-btn {\n      color: #6b7280;\n    }\n\n    .msg-btn {\n      white-space: nowrap;\n      min-width: 120px;\n    }\n  }\n}\n\n.app-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 8px; border-radius: 8px;\n  &:hover { background: #f8fafc; }\n  .app-info { flex: 1; .app-offer-title { font-weight: 600; font-size: 0.9rem; margin: 0; } .app-company { font-size: 0.78rem; color: var(--text-secondary); margin: 0; } }\n  .mini-score { font-size: 0.95rem; font-weight: 700; color: var(--primary-light); span { font-size: 0.65rem; color: var(--text-muted); } }\n  .app-date { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CandidateDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-candidate-dashboard', standalone: true, imports: [
                    CommonModule,
                    RouterLink,
                    MatButtonModule,
                    MatIconModule,
                    MatProgressSpinnerModule
                ], template: "<div class=\"dashboard\">\n  <div class=\"welcome-banner candidate-banner\">\n    <div class=\"welcome-text\">\n      <h1>Bonjour, {{ auth.currentUser?.fullName }} \uD83D\uDC4B</h1>\n      <p>D\u00E9couvrez les meilleures offres d'emploi adapt\u00E9es \u00E0 votre profil gr\u00E2ce \u00E0 l'IA.</p>\n    </div>\n    <a mat-flat-button routerLink=\"/candidate/search\" class=\"btn-search\">\n      <mat-icon>search</mat-icon> Chercher des offres\n    </a>\n  </div>\n\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else {\n    <div class=\"stats-row\">\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-primary\"><span class=\"material-icons-round\">send</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">Candidatures envoy\u00E9es</p>\n          <h3 class=\"stat-value\">{{ applications.length }}</h3>\n        </div>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-warning\"><span class=\"material-icons-round\">hourglass_empty</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">En attente</p>\n          <h3 class=\"stat-value\">{{ pendingCount }}</h3>\n        </div>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-success\"><span class=\"material-icons-round\">star</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">S\u00E9lectionn\u00E9s</p>\n          <h3 class=\"stat-value\">{{ shortlistCount }}</h3>\n        </div>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-info\"><span class=\"material-icons-round\">event</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">Entretiens</p>\n          <h3 class=\"stat-value\">{{ interviewCount }}</h3>\n        </div>\n      </div>\n    </div>\n\n    <!-- Recent applications -->\n    <div class=\"card section-card\">\n      <div class=\"section-header\">\n        <h3>Mes derni\u00E8res candidatures</h3>\n        <a routerLink=\"/candidate/applications\" mat-button class=\"view-all-btn\">\n          Voir tout <mat-icon>arrow_forward</mat-icon>\n        </a>\n      </div>\n\n      @if (!applications.length) {\n        <div class=\"empty-state\">\n          <span class=\"material-icons-round empty-icon\">send</span>\n          <p class=\"empty-title\">Aucune candidature</p>\n          <a mat-flat-button routerLink=\"/candidate/search\" class=\"btn-primary\" style=\"margin-top:12px\">\n            Rechercher des offres\n          </a>\n        </div>\n      } @else {\n        @for (app of applications.slice(0, 5); track app.id) {\n          <div class=\"app-row\">\n            <div class=\"app-info\">\n              <p class=\"app-offer-title\">{{ app.jobOffer?.title }}</p>\n              <p class=\"app-company\">{{ app.jobOffer?.enterprise?.companyName }}</p>\n            </div>\n            @if (app.aiScore) {\n              <div class=\"mini-score\">{{ app.aiScore }}<span>/100</span></div>\n            }\n            <span class=\"chip {{ appStatusClass(app.status) }}\">{{ app.status }}</span>\n            <span class=\"app-date\">{{ app.appliedAt | date:'dd/MM' }}</span>\n          </div>\n        }\n      }\n    </div>\n\n    <!-- Quick links -->\n    <div class=\"quick-links-grid\">\n      <a routerLink=\"/candidate/search\"       class=\"quick-link-card\"><div class=\"ql-icon bg-primary\"><span class=\"material-icons-round\">search</span></div><span>Offres d'emploi</span></a>\n      <a routerLink=\"/candidate/cvs\"          class=\"quick-link-card\"><div class=\"ql-icon bg-info\"><span class=\"material-icons-round\">description</span></div><span>Mes CVs ({{ cvCount }})</span></a>\n      <a routerLink=\"/candidate/messages\"     class=\"quick-link-card\"><div class=\"ql-icon bg-success\"><span class=\"material-icons-round\">chat_bubble_outline</span></div><span>Messagerie</span></a>\n      <a routerLink=\"/candidate/reclamations\" class=\"quick-link-card\"><div class=\"ql-icon bg-warning\"><span class=\"material-icons-round\">report_problem</span></div><span>R\u00E9clamations</span></a>\n    </div>\n  }\n</div>\n\n", styles: ["@import '../../enterprise/dashboard/enterprise-dashboard.component.scss';\n\n.candidate-banner { background: linear-gradient(135deg, #065f46, #059669, #0891b2); }\n.btn-search { @extend .btn-primary; }\n\n// \u2728 Search Banner\n.search-banner {\n  background: linear-gradient(135deg, #1e3a8a, #2563eb, #0891b2);\n  padding: 2rem;\n  border-radius: 12px;\n  margin-bottom: 2rem;\n  color: white;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n\n  h2 {\n    margin: 0 0 1.5rem;\n    font-size: 1.5rem;\n    font-weight: 600;\n  }\n\n  .search-wrapper {\n    position: relative;\n\n    .search-field {\n      width: 100%;\n      background: rgba(255, 255, 255, 0.95);\n      border-radius: 8px;\n\n      ::ng-deep {\n        .mdc-text-field {\n          width: 100%;\n        }\n        .mat-mdc-form-field-focus-overlay {\n          background-color: transparent;\n        }\n      }\n    }\n  }\n}\n\n// \u2728 Search Results Dropdown\n.search-results-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin-top: 8px;\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: 100;\n\n  .loading-center {\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n  }\n}\n\n.search-result-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e5e7eb;\n  transition: background 0.15s;\n\n  &:hover {\n    background: #f9fafb;\n  }\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  .result-left {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    cursor: pointer;\n\n    .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background: linear-gradient(135deg, #2563eb, #0891b2);\n      color: white;\n      font-weight: 600;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-shrink: 0;\n    }\n\n    .user-details {\n      flex: 1;\n      min-width: 0;\n\n      .name {\n        font-weight: 600;\n        font-size: 0.9rem;\n        margin: 0 0 4px;\n        color: #1f2937;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .subtitle {\n        font-size: 0.8rem;\n        color: #6b7280;\n        margin: 0 0 2px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .location {\n        font-size: 0.75rem;\n        color: #9ca3af;\n        margin: 0;\n        display: flex;\n        align-items: center;\n        gap: 4px;\n        white-space: nowrap;\n\n        mat-icon {\n          font-size: 12px;\n          width: 12px;\n          height: 12px;\n        }\n      }\n    }\n  }\n\n  .result-actions {\n    display: flex;\n    gap: 8px;\n    align-items: center;\n    flex-shrink: 0;\n    margin-left: 12px;\n\n    .action-btn {\n      color: #6b7280;\n    }\n\n    .msg-btn {\n      white-space: nowrap;\n      min-width: 120px;\n    }\n  }\n}\n\n.app-row {\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 8px; border-radius: 8px;\n  &:hover { background: #f8fafc; }\n  .app-info { flex: 1; .app-offer-title { font-weight: 600; font-size: 0.9rem; margin: 0; } .app-company { font-size: 0.78rem; color: var(--text-secondary); margin: 0; } }\n  .mini-score { font-size: 0.95rem; font-weight: 700; color: var(--primary-light); span { font-size: 0.65rem; color: var(--text-muted); } }\n  .app-date { font-size: 0.75rem; color: var(--text-muted); white-space: nowrap; }\n}\n\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CandidateDashboardComponent, { className: "CandidateDashboardComponent", filePath: "app\\features\\candidate\\dashboard\\candidate-dashboard.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=candidate-dashboard.component.js.map