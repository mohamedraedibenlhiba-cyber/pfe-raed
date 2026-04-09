import {
  JobOfferService
} from "./chunk-XBWLOVK2.js";
import {
  RouterLink
} from "./chunk-CIKWQEPB.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-WUAYRPG3.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-FNKFVHAE.js";
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
  DecimalPipe,
  MatAnchor,
  MatButtonModule,
  MatIconButton,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/enterprise/offers/enterprise-offers.component.ts
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.id;
var _c0 = () => ["ALL", "Toutes"];
var _c1 = () => ["PUBLISHED", "Publi\xE9es"];
var _c2 = () => ["DRAFT", "Brouillons"];
var _c3 = () => ["CLOSED", "Cl\xF4tur\xE9es"];
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
var _c5 = (a0) => ["/enterprise/offers", a0, "edit"];
var _c6 = (a0) => ["/enterprise/offers", a0, "applications"];
function EnterpriseOffersComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function EnterpriseOffersComponent_For_13_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter = tab_r2[0]);
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.filter === tab_r2[0]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2[1], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.countByStatus(tab_r2[0]));
  }
}
function EnterpriseOffersComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function EnterpriseOffersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 13);
    \u0275\u0275text(2, "work_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 14);
    \u0275\u0275text(4, "Aucune offre dans cette cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 15)(6, "mat-icon");
    \u0275\u0275text(7, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Cr\xE9er votre premi\xE8re offre ");
    \u0275\u0275elementEnd()();
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const offer_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.publish(offer_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Publier ");
    \u0275\u0275elementEnd();
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const offer_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.close(offer_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Cl\xF4turer ");
    \u0275\u0275elementEnd();
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 33);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(offer_r6.location);
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 33);
    \u0275\u0275text(2, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(offer_r6.contractType);
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27)(1, "span", 33);
    \u0275\u0275text(2, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "T\xE9l\xE9travail");
    \u0275\u0275elementEnd();
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26)(1, "span", 33);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", offer_r6.experienceRequired, " ans exp.");
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 33);
    \u0275\u0275text(2, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const offer_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(5, 2, offer_r6.salaryMin), " \u2013 ", \u0275\u0275pipeBind1(6, 4, offer_r6.salaryMax), " \u20AC");
  }
}
function EnterpriseOffersComponent_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 20)(8, "mat-icon");
    \u0275\u0275text(9, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-menu", null, 0)(12, "a", 21)(13, "mat-icon");
    \u0275\u0275text(14, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Modifier ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "a", 21)(17, "mat-icon");
    \u0275\u0275text(18, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Candidatures ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_20_Template, 4, 0, "button", 22)(21, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_21_Template, 4, 0, "button", 22);
    \u0275\u0275elementStart(22, "button", 23);
    \u0275\u0275listener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Template_button_click_22_listener() {
      const offer_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.exportExcel(offer_r6));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Export Excel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 24);
    \u0275\u0275listener("click", function EnterpriseOffersComponent_Conditional_16_For_2_Template_button_click_26_listener() {
      const offer_r6 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(offer_r6));
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "delete_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Supprimer ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 25);
    \u0275\u0275template(31, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_31_Template, 4, 1, "span", 26)(32, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_32_Template, 4, 1, "span", 26)(33, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_33_Template, 4, 0, "span", 27)(34, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_34_Template, 4, 1, "span", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, EnterpriseOffersComponent_Conditional_16_For_2_Conditional_35_Template, 7, 6, "div", 28);
    \u0275\u0275elementStart(36, "div", 29)(37, "span", 30);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 31)(41, "a", 32)(42, "mat-icon");
    \u0275\u0275text(43, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44, " Candidatures ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const offer_r6 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(11);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(offer_r6.title);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip ", ctx_r2.statusClass(offer_r6.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(offer_r6.status));
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c5, offer_r6.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c6, offer_r6.id));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(20, offer_r6.status === "DRAFT" ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(21, offer_r6.status === "PUBLISHED" ? 21 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275conditional(31, offer_r6.location ? 31 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(32, offer_r6.contractType ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(33, offer_r6.remote ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(34, offer_r6.experienceRequired ? 34 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(35, offer_r6.salaryMin || offer_r6.salaryMax ? 35 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 17, offer_r6.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(24, _c6, offer_r6.id));
  }
}
function EnterpriseOffersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, EnterpriseOffersComponent_Conditional_16_For_2_Template, 45, 26, "div", 17, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filtered);
  }
}
var EnterpriseOffersComponent = class _EnterpriseOffersComponent {
  constructor() {
    this.offerSvc = inject(JobOfferService);
    this.snack = inject(MatSnackBar);
    this.loading = true;
    this.offers = [];
    this.filter = "ALL";
  }
  get filtered() {
    return this.filter === "ALL" ? this.offers : this.offers.filter((o) => o.status === this.filter);
  }
  countByStatus(status) {
    return status === "ALL" ? this.offers.length : this.offers.filter((o) => o.status === status).length;
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
  publish(offer) {
    this.offerSvc.publish(offer.id).subscribe({
      next: (res) => {
        Object.assign(offer, res.data);
        this.snack.open("Offre publi\xE9e avec succ\xE8s", "OK", { panelClass: "success-snack" });
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  close(offer) {
    if (!confirm("Cl\xF4turer cette offre ?"))
      return;
    this.offerSvc.close(offer.id).subscribe({
      next: (res) => {
        Object.assign(offer, res.data);
        this.snack.open("Offre cl\xF4tur\xE9e", "OK", { panelClass: "success-snack" });
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  delete(offer) {
    if (!confirm(`Supprimer l'offre "${offer.title}" ?`))
      return;
    this.offerSvc.delete(offer.id).subscribe({
      next: () => {
        this.offers = this.offers.filter((o) => o.id !== offer.id);
        this.snack.open("Offre supprim\xE9e", "OK", { panelClass: "success-snack" });
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  exportExcel(offer) {
    this.offerSvc.exportExcel(offer.id).subscribe((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `candidatures_${offer.id}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }
  statusClass(status) {
    return { PUBLISHED: "chip-success", DRAFT: "chip-warning", CLOSED: "chip-gray", ARCHIVED: "chip-gray" }[status] ?? "chip-gray";
  }
  statusLabel(status) {
    return { PUBLISHED: "Publi\xE9e", DRAFT: "Brouillon", CLOSED: "Cl\xF4tur\xE9e", ARCHIVED: "Archiv\xE9e" }[status] ?? status;
  }
  static {
    this.\u0275fac = function EnterpriseOffersComponent_Factory(t) {
      return new (t || _EnterpriseOffersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterpriseOffersComponent, selectors: [["app-enterprise-offers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 11, consts: [["menu", "matMenu"], [1, "offers-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary"], [1, "filter-tabs"], [1, "filter-tab", 3, "active"], [1, "loading-center"], [1, "filter-tab", 3, "click"], [1, "count"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary", 2, "margin-top", "12px"], [1, "offers-grid"], [1, "offer-card", "card"], [1, "offer-card-header"], [1, "offer-card-title"], ["mat-icon-button", "", 1, "menu-btn", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 1, "danger-item", 3, "click"], [1, "offer-meta-row"], [1, "meta-chip"], [1, "meta-chip", "remote"], [1, "salary-row"], [1, "offer-card-footer"], [1, "date-label"], [1, "footer-actions"], ["mat-button", "", 1, "btn-applications", 3, "routerLink"], [1, "material-icons-round"]], template: function EnterpriseOffersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h1", 3);
        \u0275\u0275text(4, "Mes offres d'emploi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "p", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "a", 5)(8, "mat-icon");
        \u0275\u0275text(9, "add");
        \u0275\u0275elementEnd();
        \u0275\u0275text(10, " Nouvelle offre ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275repeaterCreate(12, EnterpriseOffersComponent_For_13_Template, 4, 4, "button", 7, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(14, EnterpriseOffersComponent_Conditional_14_Template, 2, 0, "div", 8)(15, EnterpriseOffersComponent_Conditional_15_Template, 9, 0)(16, EnterpriseOffersComponent_Conditional_16_Template, 3, 0);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1("", ctx.offers.length, " offre(s) cr\xE9\xE9e(s)");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(\u0275\u0275pureFunction4(6, _c4, \u0275\u0275pureFunction0(2, _c0), \u0275\u0275pureFunction0(3, _c1), \u0275\u0275pureFunction0(4, _c2), \u0275\u0275pureFunction0(5, _c3)));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(14, ctx.loading ? 14 : !ctx.filtered.length ? 15 : 16);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, RouterLink, MatButtonModule, MatAnchor, MatIconButton, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule, MatTooltipModule], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.filter-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 5px;\n  width: fit-content;\n  flex-wrap: wrap;\n}\n.filter-tab[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n}\n.filter-tab[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: #e2e8f0;\n  color: #475569;\n  padding: 1px 7px;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.filter-tab[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n}\n.filter-tab.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: #fff;\n}\n.filter-tab.active[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.offers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 16px;\n}\n.offer-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.offer-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n.offer-card-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.offer-card-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: var(--text-primary);\n}\n.menu-btn[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  color: var(--text-secondary) !important;\n}\n.offer-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  background: #f1f5f9;\n  padding: 3px 8px;\n  border-radius: 6px;\n}\n.meta-chip[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.meta-chip.remote[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.salary-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--success);\n  margin-bottom: 12px;\n}\n.salary-row[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.offer-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 12px;\n  padding-top: 12px;\n  border-top: 1px solid var(--border-color);\n}\n.date-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.btn-applications[_ngcontent-%COMP%] {\n  font-size: 0.8rem !important;\n  color: var(--primary-light) !important;\n}\n  .danger-item {\n  color: var(--danger);\n}\n/*# sourceMappingURL=enterprise-offers.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterpriseOffersComponent, { className: "EnterpriseOffersComponent", filePath: "src\\app\\features\\enterprise\\offers\\enterprise-offers.component.ts", lineNumber: 20 });
})();
export {
  EnterpriseOffersComponent
};
//# sourceMappingURL=chunk-AJTUSAP3.js.map
