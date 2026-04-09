import {
  ApplicationService
} from "./chunk-WKMMEWS2.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-CIKWQEPB.js";
import {
  AppSelectComponent
} from "./chunk-TJQ44VG2.js";
import {
  MatTabsModule
} from "./chunk-QDUAY4BZ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-FNKFVHAE.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FV7EZ2JQ.js";
import {
  MatTooltipModule
} from "./chunk-K3CFEA6O.js";
import "./chunk-XXJRWQFV.js";
import "./chunk-T243Z5LV.js";
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/enterprise/applications/enterprise-applications.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function EnterpriseApplicationsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function EnterpriseApplicationsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "people_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "Aucune candidature pour le moment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 10);
    \u0275\u0275text(6, "Partagez votre offre pour recevoir des candidatures");
    \u0275\u0275elementEnd()();
  }
}
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21)(1, "span", 30);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r2.candidate.city);
  }
}
function EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 30);
    \u0275\u0275text(2, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r2.aiSummary);
  }
}
function EnterpriseApplicationsComponent_Conditional_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17)(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 19)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 20);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_11_Template, 4, 1, "span", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 22)(13, "div")(14, "span", 23);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 24);
    \u0275\u0275text(17, "/ 100");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "span", 25);
    \u0275\u0275text(19, "Score IA");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, EnterpriseApplicationsComponent_Conditional_13_For_10_Conditional_20_Template, 5, 1, "div", 26);
    \u0275\u0275elementStart(21, "div", 27)(22, "div", 28);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "app-select", 29);
    \u0275\u0275listener("selectionChange", function EnterpriseApplicationsComponent_Conditional_13_For_10_Template_app_select_selectionChange_27_listener($event) {
      const app_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.updateStatus(app_r2, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_18_0;
    const app_r2 = ctx.$implicit;
    const i_r4 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("rank-badge rank-", i_r4 < 3 ? i_r4 + 1 : "other", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r4 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.initials(app_r2.candidate == null ? null : app_r2.candidate.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r2.candidate == null ? null : app_r2.candidate.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((app_r2.candidate == null ? null : app_r2.candidate.headline) || (app_r2.candidate == null ? null : app_r2.candidate.email));
    \u0275\u0275advance();
    \u0275\u0275conditional(11, (app_r2.candidate == null ? null : app_r2.candidate.city) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("score-circle ", ctx_r2.scoreClass(app_r2.aiScore), "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_18_0 = app_r2.aiScore) !== null && tmp_18_0 !== void 0 ? tmp_18_0 : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(20, app_r2.aiSummary ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(24, 20, app_r2.appliedAt, "dd/MM/yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("chip ", ctx_r2.statusChipClass(app_r2.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r2.status);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r2.statusOptions)("ngModel", app_r2.status);
  }
}
function EnterpriseApplicationsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "Classement IA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 14);
    \u0275\u0275text(7, "Les candidatures sont tri\xE9es par score de compatibilit\xE9 IA");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275repeaterCreate(9, EnterpriseApplicationsComponent_Conditional_13_For_10_Template, 28, 23, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.ranked);
  }
}
var EnterpriseApplicationsComponent = class _EnterpriseApplicationsComponent {
  constructor() {
    this.appSvc = inject(ApplicationService);
    this.route = inject(ActivatedRoute);
    this.snack = inject(MatSnackBar);
    this.loading = true;
    this.applications = [];
    this.ranked = [];
    this.viewMode = "ranked";
    this.statusOptions = [
      { value: "REVIEWED", label: "En revue" },
      { value: "SHORTLISTED", label: "S\xE9lectionn\xE9" },
      { value: "INTERVIEW", label: "Entretien" },
      { value: "ACCEPTED", label: "Accept\xE9" },
      { value: "REJECTED", label: "Refus\xE9" }
    ];
  }
  ngOnInit() {
    this.offerId = +this.route.snapshot.paramMap.get("id");
    this.loadRanked();
  }
  loadRanked() {
    this.loading = true;
    this.appSvc.getRanked(this.offerId).subscribe({
      next: (res) => {
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
      next: (res) => {
        app.status = res.data.status;
        this.snack.open("Statut mis \xE0 jour", "OK", { panelClass: "success-snack" });
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  statusChipClass(status) {
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
  scoreClass(score) {
    if (!score)
      return "score-na";
    if (score >= 80)
      return "score-high";
    if (score >= 50)
      return "score-mid";
    return "score-low";
  }
  initials(name) {
    return name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  static {
    this.\u0275fac = function EnterpriseApplicationsComponent_Factory(t) {
      return new (t || _EnterpriseApplicationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterpriseApplicationsComponent, selectors: [["app-enterprise-applications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 3, consts: [[1, "apps-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["mat-button", "", "routerLink", "/enterprise/offers", 1, "back-btn"], [1, "loading-center"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "ranking-header", "card"], [1, "ranking-legend"], [1, "material-icons-round", 2, "color", "#7c3aed"], [1, "legend-desc"], [1, "applications-list"], [1, "app-card", "card"], [1, "candidate-info"], [1, "candidate-avatar"], [1, "candidate-details"], [1, "candidate-headline"], [1, "meta-chip"], [1, "ai-score-section"], [1, "score-value"], [1, "score-unit"], [1, "score-label"], [1, "ai-summary"], [1, "app-footer"], [1, "app-date"], ["label", "Statut", 1, "status-select", 3, "selectionChange", "options", "ngModel"], [1, "material-icons-round"]], template: function EnterpriseApplicationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
        \u0275\u0275text(4, "Candidatures");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 3);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 4)(8, "mat-icon");
        \u0275\u0275text(9, "arrow_back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Mes offres ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, EnterpriseApplicationsComponent_Conditional_11_Template, 2, 0, "div", 5)(12, EnterpriseApplicationsComponent_Conditional_12_Template, 7, 0)(13, EnterpriseApplicationsComponent_Conditional_13_Template, 11, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate2("Offre #", ctx.offerId, " \u2014 ", ctx.ranked.length, " candidature(s) re\xE7ue(s)");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(11, ctx.loading ? 11 : !ctx.ranked.length ? 12 : 13);
      }
    }, dependencies: [CommonModule, DatePipe, RouterLink, FormsModule, NgControlStatus, NgModel, MatButtonModule, MatAnchor, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule, AppSelectComponent, MatTooltipModule, MatTabsModule], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n}\n.back-btn[_ngcontent-%COMP%] {\n  color: var(--text-secondary) !important;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.ranking-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  margin-bottom: 16px;\n}\n.ranking-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.ranking-legend[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.ranking-legend[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.legend-desc[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n.applications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.app-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: grid;\n  grid-template-columns: 40px auto 100px 1fr auto;\n  align-items: center;\n  gap: 16px;\n}\n@media (max-width: 768px) {\n  .app-card[_ngcontent-%COMP%] {\n    grid-template-columns: 40px 1fr;\n    flex-wrap: wrap;\n  }\n}\n.rank-badge[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  font-weight: 800;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rank-badge.rank-1[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fbbf24,\n      #f59e0b);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(251, 191, 36, 0.4);\n}\n.rank-badge.rank-2[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #94a3b8,\n      #64748b);\n  color: #fff;\n}\n.rank-badge.rank-3[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #d97706,\n      #b45309);\n  color: #fff;\n}\n.rank-badge.rank-other[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n}\n.candidate-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n}\n.candidate-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #0891b2);\n  color: #fff;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.candidate-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin: 0 0 3px;\n}\n.candidate-headline[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 0 0 4px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.meta-chip[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ai-score-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n.score-circle[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 3px solid;\n}\n.score-circle.score-high[_ngcontent-%COMP%] {\n  border-color: var(--success);\n  background: #f0fdf4;\n}\n.score-circle.score-high[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--success);\n}\n.score-circle.score-mid[_ngcontent-%COMP%] {\n  border-color: var(--warning);\n  background: #fffbeb;\n}\n.score-circle.score-mid[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--warning);\n}\n.score-circle.score-low[_ngcontent-%COMP%] {\n  border-color: var(--danger);\n  background: #fef2f2;\n}\n.score-circle.score-low[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--danger);\n}\n.score-circle.score-na[_ngcontent-%COMP%] {\n  border-color: #e2e8f0;\n  background: #f8fafc;\n}\n.score-circle.score-na[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1;\n}\n.score-unit[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--text-muted);\n}\n.score-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-secondary);\n  text-align: center;\n}\n.ai-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  background: #f5f3ff;\n  border-radius: 8px;\n  padding: 10px 12px;\n}\n.ai-summary[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #7c3aed;\n  flex-shrink: 0;\n}\n.ai-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  line-height: 1.5;\n  margin: 0;\n  color: #4c1d95;\n}\n.app-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n.app-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n}\n.status-select[_ngcontent-%COMP%] {\n  width: 150px;\n  --mat-form-field-container-height: 40px;\n}\n/*# sourceMappingURL=enterprise-applications.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterpriseApplicationsComponent, { className: "EnterpriseApplicationsComponent", filePath: "src\\app\\features\\enterprise\\applications\\enterprise-applications.component.ts", lineNumber: 22 });
})();
export {
  EnterpriseApplicationsComponent
};
//# sourceMappingURL=chunk-JKKWLHWY.js.map
