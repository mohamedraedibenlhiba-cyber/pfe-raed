import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import "./chunk-CIKWQEPB.js";
import {
  MatChipsModule
} from "./chunk-U6GC3H2O.js";
import {
  MatMenuModule
} from "./chunk-WUAYRPG3.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-QDUAY4BZ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-CZTZ4ONH.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-FNKFVHAE.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-GE2UJ6OD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FV7EZ2JQ.js";
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
  DecimalPipe,
  HttpClient,
  HttpParams,
  MatButton,
  MatButtonModule,
  MatIconButton,
  NgClass,
  SlicePipe,
  environment,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2ECENSOK.js";
import {
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/core/services/freelance.service.ts
var FreelanceService = class _FreelanceService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/freelance`;
  }
  // ── Projets ───────────────────────────────────────────────────────────────
  createProject(req) {
    return this.http.post(`${this.API}/projects`, req);
  }
  updateProject(id, req) {
    return this.http.put(`${this.API}/projects/${id}`, req);
  }
  deleteProject(id) {
    return this.http.delete(`${this.API}/projects/${id}`);
  }
  search(title, skills, page = 0, size = 12) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (title)
      params = params.set("title", title);
    if (skills)
      params = params.set("skills", skills);
    return this.http.get(`${this.API}/projects`, { params });
  }
  getById(id) {
    return this.http.get(`${this.API}/projects/${id}`);
  }
  getMyProjects(page = 0, size = 12) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/projects/mine`, { params });
  }
  // ── Offres (bids) ─────────────────────────────────────────────────────────
  submitBid(projectId, req) {
    return this.http.post(`${this.API}/projects/${projectId}/bids`, req);
  }
  updateBid(bidId, req) {
    return this.http.put(`${this.API}/bids/${bidId}`, req);
  }
  withdrawBid(bidId) {
    return this.http.post(`${this.API}/bids/${bidId}/withdraw`, {});
  }
  negotiate(bidId, req) {
    return this.http.patch(`${this.API}/bids/${bidId}/negotiate`, req);
  }
  getProjectBids(projectId) {
    return this.http.get(`${this.API}/projects/${projectId}/bids`);
  }
  getMyBids() {
    return this.http.get(`${this.API}/bids/mine`);
  }
  static {
    this.\u0275fac = function FreelanceService_Factory(t) {
      return new (t || _FreelanceService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FreelanceService, factory: _FreelanceService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/shared/freelance/freelance.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function FreelanceComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementEnd();
  }
}
function FreelanceComponent_For_24_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sk_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sk_r4.trim());
  }
}
function FreelanceComponent_For_24_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, FreelanceComponent_For_24_Conditional_8_For_2_Template, 2, 1, "span", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r2.requiredSkills.split(",").slice(0, 4));
  }
}
function FreelanceComponent_For_24_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "number");
  }
  if (rf & 2) {
    const p_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate2("\u{1F4B0} ", \u0275\u0275pipeBind1(1, 2, p_r2.budgetMin || 0), " \u2013 ", p_r2.budgetMax || "?", " \u20AC");
  }
}
function FreelanceComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function FreelanceComponent_For_24_Template_div_click_0_listener() {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectProject(p_r2));
    });
    \u0275\u0275elementStart(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FreelanceComponent_For_24_Conditional_8_Template, 3, 0, "div", 25);
    \u0275\u0275elementStart(9, "div", 26)(10, "span", 27);
    \u0275\u0275template(11, FreelanceComponent_For_24_Conditional_11_Template, 2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 28);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.statusClass(p_r2.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r2.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(7, 8, p_r2.description, 0, 120), "", p_r2.description.length > 120 ? "\u2026" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(8, p_r2.requiredSkills ? 8 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(11, p_r2.budgetMin || p_r2.budgetMax ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", p_r2.bidCount || 0, " offre(s)");
  }
}
function FreelanceComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon");
    \u0275\u0275text(2, "work_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun projet disponible.");
    \u0275\u0275elementEnd()();
  }
}
function FreelanceComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 30);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_26_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275text(2, "Voir plus");
    \u0275\u0275elementEnd()();
  }
}
function FreelanceComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementEnd();
  }
}
function FreelanceComponent_For_30_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bid_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bid_r7.negotiationNote);
  }
}
function FreelanceComponent_For_30_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "b");
    \u0275\u0275text(2, "Contre-offre :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275template(5, FreelanceComponent_For_30_Conditional_10_Conditional_5_Template, 2, 1, "p");
    \u0275\u0275elementStart(6, "div", 36)(7, "button", 9);
    \u0275\u0275listener("click", function FreelanceComponent_For_30_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const bid_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.acceptCounter(bid_r7));
    });
    \u0275\u0275text(8, "Accepter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 37);
    \u0275\u0275listener("click", function FreelanceComponent_For_30_Conditional_10_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r6);
      const bid_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.declineCounter(bid_r7));
    });
    \u0275\u0275text(10, "D\xE9cliner");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const bid_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 3, bid_r7.counterAmount), " \u20AC \u2014 ", bid_r7.counterDurationDays, " j ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(5, bid_r7.negotiationNote ? 5 : -1);
  }
}
function FreelanceComponent_For_30_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function FreelanceComponent_For_30_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const bid_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.withdrawBid(bid_r7));
    });
    \u0275\u0275text(1, "Retirer mon offre");
    \u0275\u0275elementEnd();
  }
}
function FreelanceComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 31)(2, "span", 32);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FreelanceComponent_For_30_Conditional_10_Template, 11, 5, "div", 34)(11, FreelanceComponent_For_30_Conditional_11_Template, 2, 0, "button", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bid_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.bidStatusClass(bid_r7.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bid_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(6, 8, bid_r7.proposedAmount), " \u20AC \u2014 ", bid_r7.proposedDurationDays, " j");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(9, 10, bid_r7.coverLetter, 0, 100), "", ((bid_r7.coverLetter == null ? null : bid_r7.coverLetter.length) || 0) > 100 ? "\u2026" : "", "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, bid_r7.status === "NEGOTIATING" && bid_r7.counterAmount ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, bid_r7.status === "PENDING" || bid_r7.status === "NEGOTIATING" ? 11 : -1);
  }
}
function FreelanceComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon");
    \u0275\u0275text(2, "gavel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Vous n'avez pas encore soumis d'offres.");
    \u0275\u0275elementEnd()();
  }
}
function FreelanceComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 38);
    \u0275\u0275listener("ngSubmit", function FreelanceComponent_Conditional_38_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.createProject());
    });
    \u0275\u0275elementStart(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 39)(4, "mat-label");
    \u0275\u0275text(5, "Titre *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "input", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 39)(8, "mat-label");
    \u0275\u0275text(9, "Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42)(12, "mat-form-field", 39)(13, "mat-label");
    \u0275\u0275text(14, "Comp\xE9tences (CSV)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 39)(17, "mat-label");
    \u0275\u0275text(18, "Dur\xE9e (jours)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 39)(21, "mat-label");
    \u0275\u0275text(22, "Budget min (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 39)(25, "mat-label");
    \u0275\u0275text(26, "Budget max (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 39)(29, "mat-label");
    \u0275\u0275text(30, "Date limite");
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "input", 47);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 48)(33, "button", 49);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_38_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelProjectForm());
    });
    \u0275\u0275text(34, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 50);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r2.projectForm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.editingProject ? "Modifier le projet" : "Nouveau projet");
    \u0275\u0275advance(33);
    \u0275\u0275property("disabled", ctx_r2.projectForm.invalid || ctx_r2.creatingProject);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.editingProject ? "Mettre \xE0 jour" : "Publier", " ");
  }
}
function FreelanceComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementEnd();
  }
}
function FreelanceComponent_For_41_Conditional_20_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function FreelanceComponent_For_41_Conditional_20_For_2_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const bid_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.acceptBid(bid_r13));
    });
    \u0275\u0275text(1, "Accepter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function FreelanceComponent_For_41_Conditional_20_For_2_Conditional_8_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const bid_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.rejectBid(bid_r13));
    });
    \u0275\u0275text(3, "Rejeter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function FreelanceComponent_For_41_Conditional_20_For_2_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const bid_r13 = \u0275\u0275nextContext().$implicit;
      const p_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNegotiateDialog(bid_r13, p_r11.id));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "swap_horiz");
    \u0275\u0275elementEnd()();
  }
}
function FreelanceComponent_For_41_Conditional_20_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "span")(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FreelanceComponent_For_41_Conditional_20_For_2_Conditional_8_Template, 7, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bid_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(bid_r13.freelancer.fullName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" \u2014 ", \u0275\u0275pipeBind1(5, 6, bid_r13.proposedAmount), " \u20AC / ", bid_r13.proposedDurationDays, " j");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r2.bidStatusClass(bid_r13.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bid_r13.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, bid_r13.status === "PENDING" ? 8 : -1);
  }
}
function FreelanceComponent_For_41_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275repeaterCreate(1, FreelanceComponent_For_41_Conditional_20_For_2_Template, 9, 8, "div", 55, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedProjectBids[p_r11.id]);
  }
}
function FreelanceComponent_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 26)(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 51)(12, "button", 52);
    \u0275\u0275listener("click", function FreelanceComponent_For_41_Template_button_click_12_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProject(p_r11));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 53);
    \u0275\u0275listener("click", function FreelanceComponent_For_41_Template_button_click_15_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteProject(p_r11));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 30);
    \u0275\u0275listener("click", function FreelanceComponent_For_41_Template_button_click_18_listener() {
      const p_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewBids(p_r11));
    });
    \u0275\u0275text(19, "Voir les offres");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, FreelanceComponent_For_41_Conditional_20_Template, 3, 0, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.statusClass(p_r11.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r11.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind3(7, 6, p_r11.description, 0, 100), "\u2026");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", p_r11.bidCount || 0, " offre(s) re\xE7ue(s)");
    \u0275\u0275advance(10);
    \u0275\u0275conditional(20, ctx_r2.selectedProjectBids[p_r11.id] ? 20 : -1);
  }
}
function FreelanceComponent_Conditional_42_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const sk_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(sk_r15.trim());
  }
}
function FreelanceComponent_Conditional_42_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, FreelanceComponent_Conditional_42_Conditional_11_For_2_Template, 2, 1, "span", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedProject.requiredSkills.split(","));
  }
}
function FreelanceComponent_Conditional_42_Conditional_23_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_42_Conditional_23_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showBidForm = true);
    });
    \u0275\u0275text(1, "Soumettre une offre");
    \u0275\u0275elementEnd();
  }
}
function FreelanceComponent_Conditional_42_Conditional_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 62);
    \u0275\u0275listener("ngSubmit", function FreelanceComponent_Conditional_42_Conditional_23_Conditional_1_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.submitBid());
    });
    \u0275\u0275elementStart(1, "h4");
    \u0275\u0275text(2, "Mon offre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "mat-form-field", 39)(5, "mat-label");
    \u0275\u0275text(6, "Montant propos\xE9 (\u20AC) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 39)(9, "mat-label");
    \u0275\u0275text(10, "Dur\xE9e propos\xE9e (jours) *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "input", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 39)(13, "mat-label");
    \u0275\u0275text(14, "Lettre de motivation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 65);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 48)(17, "button", 49);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_42_Conditional_23_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.showBidForm = false);
    });
    \u0275\u0275text(18, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 50);
    \u0275\u0275text(20, "Soumettre");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("formGroup", ctx_r2.bidForm);
    \u0275\u0275advance(19);
    \u0275\u0275property("disabled", ctx_r2.bidForm.invalid || ctx_r2.submittingBid);
  }
}
function FreelanceComponent_Conditional_42_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FreelanceComponent_Conditional_42_Conditional_23_Conditional_0_Template, 2, 0, "button", 61)(1, FreelanceComponent_Conditional_42_Conditional_23_Conditional_1_Template, 21, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(0, !ctx_r2.showBidForm ? 0 : 1);
  }
}
function FreelanceComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_42_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeProject());
    });
    \u0275\u0275elementStart(1, "div", 58);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_42_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 59);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_42_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeProject());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FreelanceComponent_Conditional_42_Conditional_11_Template, 3, 0, "div", 25);
    \u0275\u0275elementStart(12, "div", 60)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, FreelanceComponent_Conditional_42_Conditional_23_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r2.statusClass(ctx_r2.selectedProject.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, ctx_r2.selectedProject.requiredSkills ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u{1F4B0} ", \u0275\u0275pipeBind1(15, 11, ctx_r2.selectedProject.budgetMin || 0), " \u2013 ", ctx_r2.selectedProject.budgetMax || "?", " \u20AC");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F1 ", ctx_r2.selectedProject.durationDays || "?", " jours");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4C5} Deadline: ", \u0275\u0275pipeBind2(20, 13, ctx_r2.selectedProject.deadlineDate, "dd/MM/yy"), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u{1F464} ", ctx_r2.selectedProject.postedBy.fullName, "");
    \u0275\u0275advance();
    \u0275\u0275conditional(23, ctx_r2.selectedProject.postedBy.id !== (ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.id) && ctx_r2.selectedProject.status === "OPEN" ? 23 : -1);
  }
}
function FreelanceComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_43_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelNegotiate());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_43_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r18);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 59);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_43_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelNegotiate());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Envoyer une contre-offre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "form", 62);
    \u0275\u0275listener("ngSubmit", function FreelanceComponent_Conditional_43_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendCounterOffer());
    });
    \u0275\u0275elementStart(8, "div", 42)(9, "mat-form-field", 39)(10, "mat-label");
    \u0275\u0275text(11, "Contre-montant (\u20AC)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 39)(14, "mat-label");
    \u0275\u0275text(15, "Contre-dur\xE9e (jours)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-form-field", 39)(18, "mat-label");
    \u0275\u0275text(19, "Note de n\xE9gociation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "textarea", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 48)(22, "button", 49);
    \u0275\u0275listener("click", function FreelanceComponent_Conditional_43_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelNegotiate());
    });
    \u0275\u0275text(23, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 70);
    \u0275\u0275text(25, "Envoyer");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("formGroup", ctx_r2.negotiateForm);
  }
}
var FreelanceComponent = class _FreelanceComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.freelanceSvc = inject(FreelanceService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.activeTab = 0;
    this.projects = [];
    this.myProjects = [];
    this.myBids = [];
    this.selectedProjectBids = {};
    this.loadingProjects = true;
    this.loadingMyProjects = false;
    this.loadingBids = false;
    this.creatingProject = false;
    this.submittingBid = false;
    this.filterTitle = "";
    this.filterSkills = "";
    this.page = 0;
    this.lastPage = false;
    this.showProjectForm = false;
    this.showBidForm = false;
    this.editingProject = null;
    this.selectedProject = null;
    this.negotiatingBid = null;
    this.negotiatingProjectId = null;
    this.projectForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      requiredSkills: [""],
      durationDays: [null],
      budgetMin: [null],
      budgetMax: [null],
      deadlineDate: [""]
    });
    this.bidForm = this.fb.group({
      proposedAmount: [null, [Validators.required, Validators.min(1)]],
      proposedDurationDays: [null, [Validators.required, Validators.min(1)]],
      coverLetter: [""]
    });
    this.negotiateForm = this.fb.group({
      counterAmount: [null],
      counterDurationDays: [null],
      negotiationNote: [""]
    });
  }
  ngOnInit() {
    this.loadProjects();
  }
  onTabChange(idx) {
    this.activeTab = idx;
    if (idx === 1 && this.myBids.length === 0)
      this.loadMyBids();
    if (idx === 2 && this.myProjects.length === 0)
      this.loadMyProjects();
  }
  search() {
    this.page = 0;
    this.projects = [];
    this.loadProjects();
  }
  loadMore() {
    this.page++;
    this.loadProjects();
  }
  loadProjects() {
    this.loadingProjects = true;
    this.freelanceSvc.search(this.filterTitle || void 0, this.filterSkills || void 0, this.page).subscribe({
      next: (res) => {
        this.projects.push(...res.data.content);
        this.lastPage = res.data.last;
        this.loadingProjects = false;
      },
      error: () => {
        this.loadingProjects = false;
      }
    });
  }
  loadMyBids() {
    this.loadingBids = true;
    this.freelanceSvc.getMyBids().subscribe({
      next: (res) => {
        this.myBids = res.data;
        this.loadingBids = false;
      },
      error: () => {
        this.loadingBids = false;
      }
    });
  }
  loadMyProjects() {
    this.loadingMyProjects = true;
    this.freelanceSvc.getMyProjects().subscribe({
      next: (res) => {
        this.myProjects = res.data.content;
        this.loadingMyProjects = false;
      },
      error: () => {
        this.loadingMyProjects = false;
      }
    });
  }
  createProject() {
    if (this.projectForm.invalid)
      return;
    this.creatingProject = true;
    const req = __spreadValues({}, this.projectForm.value);
    const obs = this.editingProject ? this.freelanceSvc.updateProject(this.editingProject.id, req) : this.freelanceSvc.createProject(req);
    obs.subscribe({
      next: (res) => {
        if (this.editingProject) {
          const i = this.myProjects.findIndex((p) => p.id === this.editingProject.id);
          if (i >= 0)
            this.myProjects[i] = res.data;
        } else {
          this.myProjects.unshift(res.data);
        }
        this.cancelProjectForm();
        this.creatingProject = false;
        this.snack.open(this.editingProject ? "Mis \xE0 jour" : "Projet publi\xE9", "OK", { duration: 2e3 });
      },
      error: () => {
        this.creatingProject = false;
      }
    });
  }
  editProject(p) {
    this.editingProject = p;
    this.showProjectForm = true;
    this.projectForm.patchValue({
      title: p.title,
      description: p.description,
      requiredSkills: p.requiredSkills,
      durationDays: p.durationDays ?? null,
      budgetMin: p.budgetMin ?? null,
      budgetMax: p.budgetMax ?? null,
      deadlineDate: p.deadlineDate ?? ""
    });
  }
  cancelProjectForm() {
    this.showProjectForm = false;
    this.editingProject = null;
    this.projectForm.reset();
  }
  deleteProject(p) {
    this.freelanceSvc.deleteProject(p.id).subscribe(() => {
      this.myProjects = this.myProjects.filter((pr) => pr.id !== p.id);
      this.snack.open("Supprim\xE9", "OK", { duration: 2e3 });
    });
  }
  viewBids(p) {
    if (this.selectedProjectBids[p.id]) {
      delete this.selectedProjectBids[p.id];
      return;
    }
    this.freelanceSvc.getProjectBids(p.id).subscribe((res) => {
      this.selectedProjectBids[p.id] = res.data;
    });
  }
  selectProject(p) {
    this.selectedProject = p;
    this.showBidForm = false;
  }
  closeProject() {
    this.selectedProject = null;
    this.showBidForm = false;
  }
  submitBid() {
    if (this.bidForm.invalid || !this.selectedProject)
      return;
    this.submittingBid = true;
    this.freelanceSvc.submitBid(this.selectedProject.id, this.bidForm.value).subscribe({
      next: (res) => {
        this.myBids.unshift(res.data);
        this.showBidForm = false;
        this.submittingBid = false;
        this.snack.open("Offre soumise avec succ\xE8s", "OK", { duration: 2e3 });
        this.closeProject();
        if (this.activeTab !== 1)
          this.activeTab = 1;
      },
      error: (err) => {
        this.submittingBid = false;
        this.snack.open(err.error?.message || "Erreur", "OK", { duration: 3e3 });
      }
    });
  }
  withdrawBid(bid) {
    this.freelanceSvc.withdrawBid(bid.id).subscribe(() => {
      bid.status = "WITHDRAWN";
      this.snack.open("Offre retir\xE9e", "OK", { duration: 2e3 });
    });
  }
  acceptBid(bid) {
    this.freelanceSvc.negotiate(bid.id, { status: "ACCEPTED" }).subscribe((res) => {
      bid.status = res.data.status;
      this.snack.open("Offre accept\xE9e", "OK", { duration: 2e3 });
    });
  }
  rejectBid(bid) {
    this.freelanceSvc.negotiate(bid.id, { status: "REJECTED" }).subscribe((res) => {
      bid.status = res.data.status;
    });
  }
  openNegotiateDialog(bid, projectId) {
    this.negotiatingBid = bid;
    this.negotiatingProjectId = projectId;
  }
  cancelNegotiate() {
    this.negotiatingBid = null;
    this.negotiatingProjectId = null;
    this.negotiateForm.reset();
  }
  sendCounterOffer() {
    if (!this.negotiatingBid || this.negotiatingProjectId === null)
      return;
    const req = __spreadValues({ status: "NEGOTIATING" }, this.negotiateForm.value);
    this.freelanceSvc.negotiate(this.negotiatingBid.id, req).subscribe((res) => {
      this.negotiatingBid.status = res.data.status;
      const bids = this.selectedProjectBids[this.negotiatingProjectId];
      if (bids) {
        const i = bids.findIndex((b) => b.id === res.data.id);
        if (i >= 0)
          bids[i] = res.data;
      }
      this.cancelNegotiate();
      this.snack.open("Contre-offre envoy\xE9e", "OK", { duration: 2e3 });
    });
  }
  acceptCounter(bid) {
    this.freelanceSvc.negotiate(bid.id, { status: "ACCEPTED" }).subscribe((res) => {
      bid.status = res.data.status;
      this.snack.open("Contre-offre accept\xE9e", "OK", { duration: 2e3 });
    });
  }
  declineCounter(bid) {
    this.freelanceSvc.negotiate(bid.id, { status: "REJECTED" }).subscribe(() => {
      bid.status = "REJECTED";
    });
  }
  statusClass(s) {
    return { "status-open": s === "OPEN", "status-in_progress": s === "IN_PROGRESS", "status-completed": s === "COMPLETED", "status-cancelled": s === "CANCELLED" };
  }
  bidStatusClass(s) {
    return { "bid-pending": s === "PENDING", "bid-accepted": s === "ACCEPTED", "bid-rejected": s === "REJECTED", "bid-negotiating": s === "NEGOTIATING", "bid-withdrawn": s === "WITHDRAWN" };
  }
  static {
    this.\u0275fac = function FreelanceComponent_Factory(t) {
      return new (t || _FreelanceComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FreelanceComponent, selectors: [["app-freelance"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 12, consts: [[1, "page-wrapper"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [3, "selectedIndexChange", "selectedIndex"], ["label", "Explorer"], [1, "filters-row"], ["appearance", "outline", 1, "filter-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "center-spinner"], [1, "projects-grid"], [1, "project-card"], [1, "empty-state"], [1, "load-more"], ["label", "Mes offres"], [1, "bid-card"], ["label", "Mes projets"], [1, "my-projects-header"], [1, "project-form", "card", 3, "formGroup"], [1, "project-card", "my-project"], [1, "detail-overlay"], [1, "project-card", 3, "click"], [1, "project-status-chip", 3, "ngClass"], [1, "project-desc"], [1, "skills-row"], [1, "project-footer"], [1, "budget"], [1, "bids"], [1, "skill-chip"], ["mat-stroked-button", "", 3, "click"], [1, "bid-header"], [1, "bid-status", 3, "ngClass"], [1, "bid-amount"], [1, "counter-offer"], ["mat-stroked-button", "", "color", "warn"], [1, "negotiate-actions"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [1, "project-form", "card", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "title"], ["matInput", "", "formControlName", "description", "rows", "4"], [1, "two-col"], ["matInput", "", "formControlName", "requiredSkills"], ["matInput", "", "type", "number", "formControlName", "durationDays"], ["matInput", "", "type", "number", "formControlName", "budgetMin"], ["matInput", "", "type", "number", "formControlName", "budgetMax"], ["matInput", "", "type", "date", "formControlName", "deadlineDate"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "actions"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", "color", "warn", 3, "click"], [1, "bids-list"], [1, "bid-item"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "detail-overlay", 3, "click"], [1, "detail-panel", 3, "click"], ["mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "detail-meta"], ["mat-raised-button", "", "color", "primary"], [1, "bid-form", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "number", "formControlName", "proposedAmount"], ["matInput", "", "type", "number", "formControlName", "proposedDurationDays"], ["matInput", "", "formControlName", "coverLetter", "rows", "4"], [1, "detail-panel", 2, "max-width", "480px", 3, "click"], ["matInput", "", "type", "number", "formControlName", "counterAmount"], ["matInput", "", "type", "number", "formControlName", "counterDurationDays"], ["matInput", "", "formControlName", "negotiationNote", "rows", "3"], ["mat-raised-button", "", "color", "primary", "type", "submit"]], template: function FreelanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Espace Freelance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5, "Trouvez des projets, soumettez vos offres et n\xE9gociez");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-tab-group", 4);
        \u0275\u0275listener("selectedIndexChange", function FreelanceComponent_Template_mat_tab_group_selectedIndexChange_6_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275elementStart(7, "mat-tab", 5)(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
        \u0275\u0275text(11, "Titre du projet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function FreelanceComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterTitle, $event) || (ctx.filterTitle = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function FreelanceComponent_Template_input_keyup_enter_12_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-label");
        \u0275\u0275text(15, "Comp\xE9tences");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function FreelanceComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterSkills, $event) || (ctx.filterSkills = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function FreelanceComponent_Template_input_keyup_enter_16_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 9);
        \u0275\u0275listener("click", function FreelanceComponent_Template_button_click_17_listener() {
          return ctx.search();
        });
        \u0275\u0275elementStart(18, "mat-icon");
        \u0275\u0275text(19, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " Rechercher ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(21, FreelanceComponent_Conditional_21_Template, 2, 0, "div", 10);
        \u0275\u0275elementStart(22, "div", 11);
        \u0275\u0275repeaterCreate(23, FreelanceComponent_For_24_Template, 14, 12, "div", 12, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(25, FreelanceComponent_Conditional_25_Template, 5, 0, "div", 13)(26, FreelanceComponent_Conditional_26_Template, 3, 0, "div", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "mat-tab", 15);
        \u0275\u0275template(28, FreelanceComponent_Conditional_28_Template, 2, 0, "div", 10);
        \u0275\u0275repeaterCreate(29, FreelanceComponent_For_30_Template, 12, 14, "div", 16, _forTrack0);
        \u0275\u0275template(31, FreelanceComponent_Conditional_31_Template, 5, 0, "div", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "mat-tab", 17)(33, "div", 18)(34, "button", 9);
        \u0275\u0275listener("click", function FreelanceComponent_Template_button_click_34_listener() {
          return ctx.showProjectForm = !ctx.showProjectForm;
        });
        \u0275\u0275elementStart(35, "mat-icon");
        \u0275\u0275text(36, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " Publier un projet ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(38, FreelanceComponent_Conditional_38_Template, 37, 4, "form", 19)(39, FreelanceComponent_Conditional_39_Template, 2, 0, "div", 10);
        \u0275\u0275repeaterCreate(40, FreelanceComponent_For_41_Template, 21, 10, "div", 20, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(42, FreelanceComponent_Conditional_42_Template, 24, 16, "div", 21)(43, FreelanceComponent_Conditional_43_Template, 26, 1, "div", 21);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275property("selectedIndex", ctx.activeTab);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterTitle);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterSkills);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(21, ctx.loadingProjects ? 21 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.projects);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(25, !ctx.loadingProjects && ctx.projects.length === 0 ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(26, !ctx.loadingProjects && !ctx.lastPage ? 26 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(28, ctx.loadingBids ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.myBids);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(31, !ctx.loadingBids && ctx.myBids.length === 0 ? 31 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(38, ctx.showProjectForm ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(39, ctx.loadingMyProjects ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.myProjects);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(42, ctx.selectedProject ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(43, ctx.negotiatingBid ? 43 : -1);
      }
    }, dependencies: [CommonModule, NgClass, SlicePipe, DecimalPipe, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatMenuModule, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule, MatTabsModule, MatTab, MatTabGroup, MatChipsModule], styles: ["\n\n.page-wrapper[_ngcontent-%COMP%] {\n  padding: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0;\n}\n.page-subtitle[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 4px 0 0;\n}\n.filters-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  padding: 16px 0;\n}\n.filter-field[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.projects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n  padding: 8px 0 16px;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .08);\n  cursor: pointer;\n  transition: box-shadow .2s;\n  position: relative;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, .12);\n}\n.project-card.my-project[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.project-status-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.status-open[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.status-in_progress[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.status-completed[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.status-cancelled[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.project-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px;\n}\n.project-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #64748b;\n  line-height: 1.5;\n  margin-bottom: 12px;\n}\n.skills-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin-bottom: 12px;\n}\n.skill-chip[_ngcontent-%COMP%] {\n  background: #ede9fe;\n  color: #6d28d9;\n  font-size: 12px;\n  padding: 3px 8px;\n  border-radius: 12px;\n}\n.project-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  color: #64748b;\n}\n.budget[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e293b;\n}\n.center-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.load-more[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 16px 0;\n}\n.bid-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .08);\n  margin-bottom: 12px;\n}\n.bid-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.bid-status[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.bid-pending[_ngcontent-%COMP%] {\n  background: #fef9c3;\n  color: #854d0e;\n}\n.bid-accepted[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.bid-rejected[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #991b1b;\n}\n.bid-negotiating[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.bid-withdrawn[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  color: #64748b;\n}\n.bid-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #1e293b;\n}\n.counter-offer[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 8px;\n  padding: 12px;\n  margin: 8px 0;\n}\n.negotiate-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n.my-projects-header[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.project-form[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .08);\n}\n.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n  margin-top: 8px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n.bids-list[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.bid-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 13px;\n}\n.detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, .4);\n  z-index: 1000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 28px;\n  max-width: 600px;\n  width: 90%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n.detail-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 12px 0;\n  font-size: 13px;\n  color: #64748b;\n}\n.bid-form[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.skills-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  margin: 8px 0;\n}\n/*# sourceMappingURL=freelance.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FreelanceComponent, { className: "FreelanceComponent", filePath: "src\\app\\features\\shared\\freelance\\freelance.component.ts", lineNumber: 325 });
})();
export {
  FreelanceComponent
};
//# sourceMappingURL=chunk-W3TVU73I.js.map
