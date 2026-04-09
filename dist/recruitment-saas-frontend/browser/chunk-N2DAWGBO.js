import {
  CvService
} from "./chunk-DUY2VADM.js";
import {
  ApplicationService
} from "./chunk-WKMMEWS2.js";
import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import {
  RouterLink
} from "./chunk-CIKWQEPB.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-M2YTZW2R.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-JTYJI43T.js";
import {
  CommonModule,
  DatePipe,
  MatAnchor,
  MatButtonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/candidate/dashboard/candidate-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function CandidateDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function CandidateDashboardComponent_Conditional_12_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 29);
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4, "Aucune candidature");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 31);
    \u0275\u0275text(6, " Rechercher des offres ");
    \u0275\u0275elementEnd()();
  }
}
function CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "/100");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r1.aiScore);
  }
}
function CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "p", 34);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Conditional_6_Template, 4, 1, "div", 36);
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 37);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.enterprise == null ? null : app_r1.jobOffer.enterprise.companyName);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, app_r1.aiScore ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip ", ctx_r1.appStatusClass(app_r1.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 8, app_r1.appliedAt, "dd/MM"));
  }
}
function CandidateDashboardComponent_Conditional_12_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CandidateDashboardComponent_Conditional_12_Conditional_46_For_1_Template, 12, 11, "div", 32, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.applications.slice(0, 5));
  }
}
function CandidateDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 9);
    \u0275\u0275text(4, "send");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "p", 11);
    \u0275\u0275text(7, "Candidatures envoy\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 13)(12, "span", 9);
    \u0275\u0275text(13, "hourglass_empty");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "p", 11);
    \u0275\u0275text(16, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 7)(20, "div", 14)(21, "span", 9);
    \u0275\u0275text(22, "star");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "p", 11);
    \u0275\u0275text(25, "S\xE9lectionn\xE9s");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3", 12);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 7)(29, "div", 15)(30, "span", 9);
    \u0275\u0275text(31, "event");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 10)(33, "p", 11);
    \u0275\u0275text(34, "Entretiens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h3", 12);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 16)(38, "div", 17)(39, "h3");
    \u0275\u0275text(40, "Mes derni\xE8res candidatures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a", 18);
    \u0275\u0275text(42, " Voir tout ");
    \u0275\u0275elementStart(43, "mat-icon");
    \u0275\u0275text(44, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, CandidateDashboardComponent_Conditional_12_Conditional_45_Template, 7, 0, "div", 19)(46, CandidateDashboardComponent_Conditional_12_Conditional_46_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 20)(48, "a", 21)(49, "div", 22)(50, "span", 9);
    \u0275\u0275text(51, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Offres d'emploi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "a", 23)(55, "div", 24)(56, "span", 9);
    \u0275\u0275text(57, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "a", 25)(61, "div", 26)(62, "span", 9);
    \u0275\u0275text(63, "chat_bubble_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Messagerie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "a", 27)(67, "div", 28)(68, "span", 9);
    \u0275\u0275text(69, "report_problem");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71, "R\xE9clamations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.applications.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.pendingCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.shortlistCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.interviewCount);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(45, !ctx_r1.applications.length ? 45 : 46);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate1("Mes CVs (", ctx_r1.cvCount, ")");
  }
}
var CandidateDashboardComponent = class _CandidateDashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.appSvc = inject(ApplicationService);
    this.cvSvc = inject(CvService);
    this.loading = true;
    this.applications = [];
    this.cvCount = 0;
  }
  get pendingCount() {
    return this.applications.filter((a) => a.status === "PENDING").length;
  }
  get shortlistCount() {
    return this.applications.filter((a) => a.status === "SHORTLISTED").length;
  }
  get interviewCount() {
    return this.applications.filter((a) => a.status === "INTERVIEW").length;
  }
  appStatusClass(status) {
    const map = {
      PENDING: "chip-gray",
      REVIEWED: "chip-info",
      AI_ANALYZED: "chip-accent",
      SHORTLISTED: "chip-primary",
      INTERVIEW: "chip-warning",
      ACCEPTED: "chip-success",
      REJECTED: "chip-danger"
    };
    return map[status] ?? "chip-gray";
  }
  ngOnInit() {
    this.appSvc.getMyApplications().subscribe({
      next: (res) => {
        this.applications = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
    this.cvSvc.getMyCvs().subscribe({ next: (res) => this.cvCount = res.data.length });
  }
  static {
    this.\u0275fac = function CandidateDashboardComponent_Factory(t) {
      return new (t || _CandidateDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateDashboardComponent, selectors: [["app-candidate-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "dashboard"], [1, "welcome-banner", "candidate-banner"], [1, "welcome-text"], ["mat-flat-button", "", "routerLink", "/candidate/search", 1, "btn-search"], [1, "loading-center"], ["diameter", "40"], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "bg-primary"], [1, "material-icons-round"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "bg-warning"], [1, "stat-icon", "bg-success"], [1, "stat-icon", "bg-info"], [1, "card", "section-card"], [1, "section-header"], ["routerLink", "/candidate/applications", "mat-button", "", 1, "view-all-btn"], [1, "empty-state"], [1, "quick-links-grid"], ["routerLink", "/candidate/search", 1, "quick-link-card"], [1, "ql-icon", "bg-primary"], ["routerLink", "/candidate/cvs", 1, "quick-link-card"], [1, "ql-icon", "bg-info"], ["routerLink", "/candidate/messages", 1, "quick-link-card"], [1, "ql-icon", "bg-success"], ["routerLink", "/candidate/reclamations", 1, "quick-link-card"], [1, "ql-icon", "bg-warning"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], ["mat-flat-button", "", "routerLink", "/candidate/search", 1, "btn-primary", 2, "margin-top", "12px"], [1, "app-row"], [1, "app-info"], [1, "app-offer-title"], [1, "app-company"], [1, "mini-score"], [1, "app-date"]], template: function CandidateDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "D\xE9couvrez les meilleures offres d'emploi adapt\xE9es \xE0 votre profil gr\xE2ce \xE0 l'IA.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3)(8, "mat-icon");
        \u0275\u0275text(9, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Chercher des offres ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, CandidateDashboardComponent_Conditional_11_Template, 2, 0, "div", 4)(12, CandidateDashboardComponent_Conditional_12_Template, 72, 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Bonjour, ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName, " \u{1F44B}");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(11, ctx.loading ? 11 : 12);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, MatButtonModule, MatAnchor, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.welcome-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 60%,\n      #0891b2 100%);\n  border-radius: 16px;\n  padding: 28px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.welcome-banner[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.welcome-banner[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n  font-size: 0.9rem;\n}\n.welcome-banner[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], .welcome-banner[_ngcontent-%COMP%]   .btn-search[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15) !important;\n  color: #fff !important;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border-radius: 10px !important;\n  border: 1px solid rgba(255, 255, 255, 0.25) !important;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.section-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  color: var(--primary-light) !important;\n  font-size: 0.8rem !important;\n}\n.view-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.offers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.offer-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 8px;\n}\n.offer-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.offer-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.offer-info[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: block;\n}\n.offer-info[_ngcontent-%COMP%]   .offer-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.offer-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.quick-links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.quick-link-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 16px;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  text-decoration: none;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.quick-link-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n  box-shadow: var(--card-shadow-hover);\n  transform: translateY(-2px);\n}\n.quick-link-card[_ngcontent-%COMP%]   .ql-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quick-link-card[_ngcontent-%COMP%]   .ql-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.candidate-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #065f46,\n      #059669,\n      #0891b2);\n}\n.app-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 8px;\n}\n.app-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.app-row[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.app-row[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%]   .app-offer-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.app-row[_ngcontent-%COMP%]   .app-info[_ngcontent-%COMP%]   .app-company[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.app-row[_ngcontent-%COMP%]   .mini-score[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--primary-light);\n}\n.app-row[_ngcontent-%COMP%]   .mini-score[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  color: var(--text-muted);\n}\n.app-row[_ngcontent-%COMP%]   .app-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n/*# sourceMappingURL=candidate-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateDashboardComponent, { className: "CandidateDashboardComponent", filePath: "src\\app\\features\\candidate\\dashboard\\candidate-dashboard.component.ts", lineNumber: 19 });
})();
export {
  CandidateDashboardComponent
};
//# sourceMappingURL=chunk-N2DAWGBO.js.map
