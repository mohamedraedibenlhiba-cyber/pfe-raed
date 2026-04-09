import {
  JobOfferService
} from "./chunk-XBWLOVK2.js";
import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import {
  RouterLink
} from "./chunk-CIKWQEPB.js";
import {
  MatCardModule
} from "./chunk-Z7KZQMIO.js";
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
  MatAnchor,
  MatButtonModule,
  MatIconAnchor,
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/enterprise/dashboard/enterprise-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = (a0) => ["/enterprise/offers", a0, "applications"];
function EnterpriseDashboardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 5);
    \u0275\u0275elementEnd();
  }
}
function EnterpriseDashboardComponent_Conditional_12_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 29);
    \u0275\u0275text(2, "work_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 30);
    \u0275\u0275text(4, "Aucune offre cr\xE9\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 31);
    \u0275\u0275text(6, "Publiez votre premi\xE8re offre d'emploi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 32)(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Cr\xE9er une offre ");
    \u0275\u0275elementEnd()();
  }
}
function EnterpriseDashboardComponent_Conditional_12_Conditional_46_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "span", 36);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 39)(10, "mat-icon");
    \u0275\u0275text(11, "people");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const offer_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(offer_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", offer_r1.location || "Non pr\xE9cis\xE9", " \u2022 ", offer_r1.contractType, "");
    \u0275\u0275advance(2);
    \u0275\u0275classMapInterpolate1("chip ", offer_r1.status === "PUBLISHED" ? "chip-success" : offer_r1.status === "DRAFT" ? "chip-warning" : "chip-gray", "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", offer_r1.status === "PUBLISHED" ? "Publi\xE9e" : offer_r1.status === "DRAFT" ? "Brouillon" : "Ferm\xE9e", " ");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(8, _c0, offer_r1.id));
  }
}
function EnterpriseDashboardComponent_Conditional_12_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275repeaterCreate(1, EnterpriseDashboardComponent_Conditional_12_Conditional_46_For_2_Template, 12, 10, "div", 34, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.offers.slice(0, 5));
  }
}
function EnterpriseDashboardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "span", 9);
    \u0275\u0275text(4, "work");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 10)(6, "p", 11);
    \u0275\u0275text(7, "Total offres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h3", 12);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 13)(12, "span", 9);
    \u0275\u0275text(13, "public");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "p", 11);
    \u0275\u0275text(16, "Publi\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "h3", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 7)(20, "div", 14)(21, "span", 9);
    \u0275\u0275text(22, "drafts");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 10)(24, "p", 11);
    \u0275\u0275text(25, "Brouillons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "h3", 12);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 7)(29, "div", 15)(30, "span", 9);
    \u0275\u0275text(31, "archive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 10)(33, "p", 11);
    \u0275\u0275text(34, "Ferm\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h3", 12);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 16)(38, "div", 17)(39, "h3");
    \u0275\u0275text(40, "Offres r\xE9centes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a", 18);
    \u0275\u0275text(42, " Voir toutes ");
    \u0275\u0275elementStart(43, "mat-icon");
    \u0275\u0275text(44, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(45, EnterpriseDashboardComponent_Conditional_12_Conditional_45_Template, 11, 0, "div", 19)(46, EnterpriseDashboardComponent_Conditional_12_Conditional_46_Template, 3, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 20)(48, "a", 21)(49, "div", 22)(50, "span", 9);
    \u0275\u0275text(51, "work_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "G\xE9rer les offres");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "a", 23)(55, "div", 24)(56, "span", 9);
    \u0275\u0275text(57, "chat_bubble_outline");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "span");
    \u0275\u0275text(59, "Messagerie");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "a", 25)(61, "div", 26)(62, "span", 9);
    \u0275\u0275text(63, "newspaper");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "span");
    \u0275\u0275text(65, "Actualit\xE9s");
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
    \u0275\u0275textInterpolate(ctx_r1.offers.length);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.publishedCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.draftCount);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.closedCount);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(45, !ctx_r1.offers.length ? 45 : 46);
  }
}
var EnterpriseDashboardComponent = class _EnterpriseDashboardComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.offerSvc = inject(JobOfferService);
    this.loading = true;
    this.offers = [];
  }
  get publishedCount() {
    return this.offers.filter((o) => o.status === "PUBLISHED").length;
  }
  get draftCount() {
    return this.offers.filter((o) => o.status === "DRAFT").length;
  }
  get closedCount() {
    return this.offers.filter((o) => o.status === "CLOSED").length;
  }
  ngOnInit() {
    this.offerSvc.getMyOffers().subscribe({
      next: (res) => {
        this.offers = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  static {
    this.\u0275fac = function EnterpriseDashboardComponent_Factory(t) {
      return new (t || _EnterpriseDashboardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterpriseDashboardComponent, selectors: [["app-enterprise-dashboard"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [[1, "dashboard"], [1, "welcome-banner"], [1, "welcome-text"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary"], [1, "loading-center"], ["diameter", "40"], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "bg-primary"], [1, "material-icons-round"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "bg-success"], [1, "stat-icon", "bg-warning"], [1, "stat-icon", "bg-info"], [1, "card", "section-card"], [1, "section-header"], ["routerLink", "/enterprise/offers", "mat-button", "", 1, "view-all-btn"], [1, "empty-state"], [1, "quick-links-grid"], ["routerLink", "/enterprise/offers", 1, "quick-link-card"], [1, "ql-icon", "bg-primary"], ["routerLink", "/enterprise/messages", 1, "quick-link-card"], [1, "ql-icon", "bg-info"], ["routerLink", "/enterprise/feed", 1, "quick-link-card"], [1, "ql-icon", "bg-success"], ["routerLink", "/enterprise/reclamations", 1, "quick-link-card"], [1, "ql-icon", "bg-warning"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary", 2, "margin-top", "12px"], [1, "offers-list"], [1, "offer-row"], [1, "offer-info"], [1, "offer-title"], [1, "offer-meta"], [1, "offer-badges"], ["mat-icon-button", "", "matTooltip", "Voir les candidatures", 3, "routerLink"]], template: function EnterpriseDashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p");
        \u0275\u0275text(6, "G\xE9rez vos offres d'emploi et trouvez les meilleurs talents gr\xE2ce \xE0 l'IA.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 3)(8, "mat-icon");
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Publier une offre ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, EnterpriseDashboardComponent_Conditional_11_Template, 2, 0, "div", 4)(12, EnterpriseDashboardComponent_Conditional_12_Template, 72, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1("Bonjour, ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName, " \u{1F44B}");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(11, ctx.loading ? 11 : 12);
      }
    }, dependencies: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatAnchor, MatIconAnchor, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.welcome-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 60%,\n      #0891b2 100%);\n  border-radius: 16px;\n  padding: 28px 32px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.welcome-banner[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.5rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.welcome-banner[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n  font-size: 0.9rem;\n}\n.welcome-banner[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15) !important;\n  color: #fff !important;\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border-radius: 10px !important;\n  border: 1px solid rgba(255, 255, 255, 0.25) !important;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.stats-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n.section-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.view-all-btn[_ngcontent-%COMP%] {\n  color: var(--primary-light) !important;\n  font-size: 0.8rem !important;\n}\n.view-all-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.offers-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.offer-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 8px;\n  border-radius: 8px;\n}\n.offer-row[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.offer-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.offer-info[_ngcontent-%COMP%]   .offer-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: block;\n}\n.offer-info[_ngcontent-%COMP%]   .offer-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n}\n.offer-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n}\n.quick-links-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));\n  gap: 12px;\n}\n.quick-link-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 16px;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  text-decoration: none;\n  color: var(--text-primary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  text-align: center;\n  transition: all 0.2s ease;\n}\n.quick-link-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary-light);\n  box-shadow: var(--card-shadow-hover);\n  transform: translateY(-2px);\n}\n.quick-link-card[_ngcontent-%COMP%]   .ql-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quick-link-card[_ngcontent-%COMP%]   .ql-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n/*# sourceMappingURL=enterprise-dashboard.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterpriseDashboardComponent, { className: "EnterpriseDashboardComponent", filePath: "src\\app\\features\\enterprise\\dashboard\\enterprise-dashboard.component.ts", lineNumber: 20 });
})();
export {
  EnterpriseDashboardComponent
};
//# sourceMappingURL=chunk-BENMICZN.js.map
