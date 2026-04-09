import {
  ApplicationService
} from "./chunk-WKMMEWS2.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-M2YTZW2R.js";
import {
  MatIconModule
} from "./chunk-JTYJI43T.js";
import {
  CommonModule,
  DatePipe,
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

// src/app/features/candidate/applications/my-applications.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MyApplicationsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function MyApplicationsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 6);
    \u0275\u0275text(2, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 7);
    \u0275\u0275text(4, "Aucune candidature envoy\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6, "Explorez les offres et postulez en un clic");
    \u0275\u0275elementEnd()();
  }
}
function MyApplicationsComponent_Conditional_7_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16)(1, "span", 22);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.location);
  }
}
function MyApplicationsComponent_Conditional_7_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.contractType);
  }
}
function MyApplicationsComponent_Conditional_7_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span", 22);
    \u0275\u0275text(2, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classMapInterpolate1("ai-score-badge ", app_r1.aiScore >= 80 ? "high" : app_r1.aiScore >= 50 ? "mid" : "low", "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", app_r1.aiScore, "/100 ");
  }
}
function MyApplicationsComponent_Conditional_7_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 22);
    \u0275\u0275text(2, "psychology");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const app_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(app_r1.aiSummary);
  }
}
function MyApplicationsComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "div", 12);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13)(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 14);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275template(10, MyApplicationsComponent_Conditional_7_For_2_Conditional_10_Template, 4, 1, "span", 16)(11, MyApplicationsComponent_Conditional_7_For_2_Conditional_11_Template, 2, 1, "span", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 17)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, MyApplicationsComponent_Conditional_7_For_2_Conditional_15_Template, 4, 4, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(16, MyApplicationsComponent_Conditional_7_For_2_Conditional_16_Template, 5, 1, "div", 19);
    \u0275\u0275elementStart(17, "div", 20)(18, "span", 21);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const app_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.enterprise == null ? null : app_r1.jobOffer.enterprise.companyName == null ? null : app_r1.jobOffer.enterprise.companyName[0] == null ? null : app_r1.jobOffer.enterprise.companyName[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(app_r1.jobOffer == null ? null : app_r1.jobOffer.enterprise == null ? null : app_r1.jobOffer.enterprise.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, (app_r1.jobOffer == null ? null : app_r1.jobOffer.location) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, (app_r1.jobOffer == null ? null : app_r1.jobOffer.contractType) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("chip ", ctx_r1.statusChipClass(app_r1.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(app_r1.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(15, app_r1.aiScore ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, app_r1.aiSummary ? 16 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Postul\xE9 le ", \u0275\u0275pipeBind2(20, 12, app_r1.appliedAt, "dd MMMM yyyy"), "");
  }
}
function MyApplicationsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, MyApplicationsComponent_Conditional_7_For_2_Template, 21, 15, "div", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.applications);
  }
}
var MyApplicationsComponent = class _MyApplicationsComponent {
  constructor() {
    this.appSvc = inject(ApplicationService);
    this.loading = true;
    this.applications = [];
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
  }
  statusChipClass(s) {
    return { PENDING: "chip-gray", REVIEWED: "chip-info", AI_ANALYZED: "chip-accent", SHORTLISTED: "chip-primary", INTERVIEW: "chip-warning", ACCEPTED: "chip-success", REJECTED: "chip-danger" }[s] ?? "chip-gray";
  }
  statusLabel(s) {
    return { PENDING: "En attente", REVIEWED: "Examin\xE9e", AI_ANALYZED: "Analys\xE9e IA", SHORTLISTED: "S\xE9lectionn\xE9", INTERVIEW: "Entretien", ACCEPTED: "Accept\xE9", REJECTED: "Refus\xE9" }[s] ?? s;
  }
  static {
    this.\u0275fac = function MyApplicationsComponent_Factory(t) {
      return new (t || _MyApplicationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyApplicationsComponent, selectors: [["app-my-applications"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 2, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "loading-center"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "applications-list"], [1, "app-card", "card"], [1, "app-header"], [1, "company-logo", "bg-primary"], [1, "app-info"], [1, "company"], [1, "meta-row"], [1, "meta"], [1, "app-side"], [3, "class"], [1, "ai-summary"], [1, "app-footer"], [1, "date"], [1, "material-icons-round"]], template: function MyApplicationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
        \u0275\u0275text(2, "Mes candidatures");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p", 2);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, MyApplicationsComponent_Conditional_5_Template, 2, 0, "div", 3)(6, MyApplicationsComponent_Conditional_6_Template, 7, 0)(7, MyApplicationsComponent_Conditional_7_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("", ctx.applications.length, " candidature(s) envoy\xE9e(s)");
        \u0275\u0275advance();
        \u0275\u0275conditional(5, ctx.loading ? 5 : !ctx.applications.length ? 6 : 7);
      }
    }, dependencies: [CommonModule, DatePipe, MatProgressSpinnerModule, MatProgressSpinner, MatIconModule, MatButtonModule], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.applications-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.app-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.app-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n}\n.company-logo[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.app-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.app-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 3px;\n}\n.app-info[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-secondary);\n  margin: 0 0 6px;\n  font-weight: 500;\n}\n.meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.meta[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.app-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 6px;\n  flex-shrink: 0;\n}\n.ai-score-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 999px;\n}\n.ai-score-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.ai-score-badge.high[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.ai-score-badge.mid[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.ai-score-badge.low[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.ai-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  background: #f5f3ff;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-top: 10px;\n}\n.ai-summary[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #7c3aed;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.ai-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  line-height: 1.5;\n  margin: 0;\n  color: #3b0764;\n}\n.app-footer[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid var(--border-color);\n}\n.app-footer[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n}\n/*# sourceMappingURL=my-applications.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyApplicationsComponent, { className: "MyApplicationsComponent", filePath: "src\\app\\features\\candidate\\applications\\my-applications.component.ts", lineNumber: 16 });
})();
export {
  MyApplicationsComponent
};
//# sourceMappingURL=chunk-CKGFWIOW.js.map
