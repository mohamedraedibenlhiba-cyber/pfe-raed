import {
  MatChipsModule
} from "./chunk-U6GC3H2O.js";
import {
  AdminService
} from "./chunk-YG6HAUAV.js";
import {
  AppSelectComponent
} from "./chunk-TJQ44VG2.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-7W3NNERP.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ROGWU2VO.js";
import "./chunk-WTCVOHOR.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-CZTZ4ONH.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-GE2UJ6OD.js";
import {
  DefaultValueAccessor,
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
  DecimalPipe,
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/offers-overview/admin-offers.component.ts
var _c0 = () => [10, 20, 50];
function AdminOffersComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Titre");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 28)(1, "button", 29);
    \u0275\u0275listener("click", function AdminOffersComponent_Conditional_16_td_4_Template_button_click_1_listener() {
      const o_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetail(o_r3));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r3.title);
  }
}
function AdminOffersComponent_Conditional_16_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Entreprise");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r5.enterprise == null ? null : o_r5.enterprise.companyName == null ? null : o_r5.enterprise.companyName[0] == null ? null : o_r5.enterprise.companyName[0].toUpperCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r5.enterprise == null ? null : o_r5.enterprise.companyName);
  }
}
function AdminOffersComponent_Conditional_16_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Statut");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip ", ctx_r3.statusClass(o_r6.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusLabel(o_r6.status));
  }
}
function AdminOffersComponent_Conditional_16_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const o_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.contractLabel((tmp_3_0 = o_r7.contractType) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : ""));
  }
}
function AdminOffersComponent_Conditional_16_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Lieu");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2);
  }
  if (rf & 2) {
    const o_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", o_r8.location, " ");
  }
}
function AdminOffersComponent_Conditional_16_td_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function AdminOffersComponent_Conditional_16_td_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 34);
    \u0275\u0275text(1, "Remote");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 33);
    \u0275\u0275template(2, AdminOffersComponent_Conditional_16_td_16_Conditional_2_Template, 3, 1)(3, AdminOffersComponent_Conditional_16_td_16_Conditional_3_Template, 1, 0)(4, AdminOffersComponent_Conditional_16_td_16_Conditional_4_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(2, o_r8.location ? 2 : 3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(4, o_r8.remote ? 4 : -1);
  }
}
function AdminOffersComponent_Conditional_16_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Niveau");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const o_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate((tmp_3_0 = o_r9.experienceLevel) !== null && tmp_3_0 !== void 0 ? tmp_3_0 : "\u2014");
  }
}
function AdminOffersComponent_Conditional_16_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Cr\xE9\xE9e le");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_16_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const o_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, o_r10.createdAt, "dd/MM/yyyy"));
  }
}
function AdminOffersComponent_Conditional_16_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 36);
  }
}
function AdminOffersComponent_Conditional_16_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 37);
    \u0275\u0275listener("click", function AdminOffersComponent_Conditional_16_tr_24_Template_tr_click_0_listener() {
      const row_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.viewDetail(row_r12));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("row-selected", (ctx_r3.selectedOffer == null ? null : ctx_r3.selectedOffer.id) === row_r12.id);
  }
}
function AdminOffersComponent_Conditional_16_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 38);
    \u0275\u0275text(2, "work_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 39);
    \u0275\u0275text(4, "Aucune offre trouv\xE9e");
    \u0275\u0275elementEnd()();
  }
}
function AdminOffersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13);
    \u0275\u0275elementContainerStart(2, 14);
    \u0275\u0275template(3, AdminOffersComponent_Conditional_16_th_3_Template, 2, 0, "th", 15)(4, AdminOffersComponent_Conditional_16_td_4_Template, 3, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 17);
    \u0275\u0275template(6, AdminOffersComponent_Conditional_16_th_6_Template, 2, 0, "th", 15)(7, AdminOffersComponent_Conditional_16_td_7_Template, 6, 2, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 18);
    \u0275\u0275template(9, AdminOffersComponent_Conditional_16_th_9_Template, 2, 0, "th", 15)(10, AdminOffersComponent_Conditional_16_td_10_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 19);
    \u0275\u0275template(12, AdminOffersComponent_Conditional_16_th_12_Template, 2, 0, "th", 15)(13, AdminOffersComponent_Conditional_16_td_13_Template, 3, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 20);
    \u0275\u0275template(15, AdminOffersComponent_Conditional_16_th_15_Template, 2, 0, "th", 15)(16, AdminOffersComponent_Conditional_16_td_16_Template, 5, 2, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 21);
    \u0275\u0275template(18, AdminOffersComponent_Conditional_16_th_18_Template, 2, 0, "th", 15)(19, AdminOffersComponent_Conditional_16_td_19_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 22);
    \u0275\u0275template(21, AdminOffersComponent_Conditional_16_th_21_Template, 2, 0, "th", 15)(22, AdminOffersComponent_Conditional_16_td_22_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(23, AdminOffersComponent_Conditional_16_tr_23_Template, 1, 0, "tr", 23)(24, AdminOffersComponent_Conditional_16_tr_24_Template, 1, 2, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminOffersComponent_Conditional_16_Conditional_25_Template, 5, 0, "div", 25);
    \u0275\u0275elementStart(26, "mat-paginator", 26);
    \u0275\u0275listener("page", function AdminOffersComponent_Conditional_16_Template_mat_paginator_page_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r3.filteredOffers);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r3.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, !ctx_r3.offers.length ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r3.totalElements)("pageSize", ctx_r3.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c0));
  }
}
function AdminOffersComponent_Conditional_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.contractLabel(ctx_r3.selectedOffer.contractType));
  }
}
function AdminOffersComponent_Conditional_17_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1, "Remote");
    \u0275\u0275elementEnd();
  }
}
function AdminOffersComponent_Conditional_17_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.experienceLevel);
  }
}
function AdminOffersComponent_Conditional_17_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r3.selectedOffer.numberOfPositions, " postes");
  }
}
function AdminOffersComponent_Conditional_17_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49)(1, "mat-icon", 52);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedOffer.location, "");
  }
}
function AdminOffersComponent_Conditional_17_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49)(1, "mat-icon", 52);
    \u0275\u0275text(2, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 2, ctx_r3.selectedOffer.salaryMin), " \u2013 ", \u0275\u0275pipeBind1(5, 4, ctx_r3.selectedOffer.salaryMax), " \u20AC/an");
  }
}
function AdminOffersComponent_Conditional_17_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49)(1, "mat-icon", 52);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Date limite : ", \u0275\u0275pipeBind2(4, 1, ctx_r3.selectedOffer.deadlineDate, "dd/MM/yyyy"), "");
  }
}
function AdminOffersComponent_Conditional_17_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 50);
    \u0275\u0275text(1, "Comp\xE9tences requises");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.requiredSkills);
  }
}
function AdminOffersComponent_Conditional_17_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 50);
    \u0275\u0275text(1, "Stack technique");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.techStack);
  }
}
function AdminOffersComponent_Conditional_17_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 50);
    \u0275\u0275text(1, "Avantages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.benefits);
  }
}
function AdminOffersComponent_Conditional_17_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 50);
    \u0275\u0275text(1, "Processus d'entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 51);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.interviewProcess);
  }
}
function AdminOffersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function AdminOffersComponent_Conditional_17_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedOffer = null);
    });
    \u0275\u0275elementStart(1, "div", 41);
    \u0275\u0275listener("click", function AdminOffersComponent_Conditional_17_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 42)(3, "div")(4, "h3", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 44);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 45);
    \u0275\u0275listener("click", function AdminOffersComponent_Conditional_17_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedOffer = null);
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 46)(12, "span");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AdminOffersComponent_Conditional_17_Conditional_14_Template, 2, 1, "span", 32)(15, AdminOffersComponent_Conditional_17_Conditional_15_Template, 2, 0, "span", 47)(16, AdminOffersComponent_Conditional_17_Conditional_16_Template, 2, 1, "span", 48)(17, AdminOffersComponent_Conditional_17_Conditional_17_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, AdminOffersComponent_Conditional_17_Conditional_18_Template, 4, 1, "p", 49)(19, AdminOffersComponent_Conditional_17_Conditional_19_Template, 6, 6, "p", 49)(20, AdminOffersComponent_Conditional_17_Conditional_20_Template, 5, 4, "p", 49);
    \u0275\u0275elementStart(21, "h4", 50);
    \u0275\u0275text(22, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p", 51);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdminOffersComponent_Conditional_17_Conditional_25_Template, 4, 1)(26, AdminOffersComponent_Conditional_17_Conditional_26_Template, 4, 1)(27, AdminOffersComponent_Conditional_17_Conditional_27_Template, 4, 1)(28, AdminOffersComponent_Conditional_17_Conditional_28_Template, 4, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.enterprise == null ? null : ctx_r3.selectedOffer.enterprise.companyName);
    \u0275\u0275advance(5);
    \u0275\u0275classMapInterpolate1("chip ", ctx_r3.statusClass(ctx_r3.selectedOffer.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.statusLabel(ctx_r3.selectedOffer.status));
    \u0275\u0275advance();
    \u0275\u0275conditional(14, ctx_r3.selectedOffer.contractType ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, ctx_r3.selectedOffer.remote ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ctx_r3.selectedOffer.experienceLevel ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, ctx_r3.selectedOffer.numberOfPositions && ctx_r3.selectedOffer.numberOfPositions > 1 ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r3.selectedOffer.location ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(19, ctx_r3.selectedOffer.salaryMin || ctx_r3.selectedOffer.salaryMax ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r3.selectedOffer.deadlineDate ? 20 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, ctx_r3.selectedOffer.requiredSkills ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(26, ctx_r3.selectedOffer.techStack ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(27, ctx_r3.selectedOffer.benefits ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(28, ctx_r3.selectedOffer.interviewProcess ? 28 : -1);
  }
}
var AdminOffersComponent = class _AdminOffersComponent {
  constructor() {
    this.adminSvc = inject(AdminService);
    this.displayedColumns = ["title", "enterprise", "status", "contractType", "location", "level", "createdAt"];
    this.offers = [];
    this.totalElements = 0;
    this.pageSize = 20;
    this.currentPage = 0;
    this.loading = true;
    this.searchValue = "";
    this.statusFilter = "";
    this.selectedOffer = null;
    this.statusOpts = [
      { value: "", label: "Tous les statuts" },
      { value: "DRAFT", label: "Brouillon" },
      { value: "PUBLISHED", label: "Publi\xE9e" },
      { value: "CLOSED", label: "Ferm\xE9e" },
      { value: "ARCHIVED", label: "Archiv\xE9e" }
    ];
  }
  get filteredOffers() {
    if (!this.searchValue)
      return this.offers;
    const q = this.searchValue.toLowerCase();
    return this.offers.filter((o) => o.title?.toLowerCase().includes(q) || o.enterprise?.companyName?.toLowerCase().includes(q));
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.adminSvc.getOffers(this.statusFilter || void 0, this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        this.offers = res.data.content;
        this.totalElements = res.data.totalElements;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onPage(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }
  onStatusChange() {
    this.currentPage = 0;
    this.load();
  }
  statusLabel(status) {
    return {
      DRAFT: "Brouillon",
      PUBLISHED: "Publi\xE9e",
      CLOSED: "Ferm\xE9e",
      ARCHIVED: "Archiv\xE9e"
    }[status] ?? status;
  }
  statusClass(status) {
    return {
      DRAFT: "chip-gray",
      PUBLISHED: "chip-success",
      CLOSED: "chip-warning",
      ARCHIVED: "chip-danger"
    }[status] ?? "chip-gray";
  }
  contractLabel(c) {
    return {
      CDI: "CDI",
      CDD: "CDD",
      STAGE: "Stage",
      FREELANCE: "Freelance",
      ALTERNANCE: "Alternance",
      TEMPS_PARTIEL: "Temps partiel"
    }[c] ?? c;
  }
  viewDetail(offer) {
    this.selectedOffer = offer === this.selectedOffer ? null : offer;
  }
  static {
    this.\u0275fac = function AdminOffersComponent_Factory(t) {
      return new (t || _AdminOffersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOffersComponent, selectors: [["app-admin-offers"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 18, vars: 6, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-filters"], ["appearance", "outline", 1, "search-field"], ["matInput", "", "placeholder", "Titre, entreprise...", 3, "ngModelChange", "ngModel"], ["matSuffix", ""], ["label", "Statut", 1, "status-filter", 3, "ngModelChange", "options", "ngModel"], [1, "card", "table-card"], [1, "loading-center"], [1, "detail-overlay"], ["diameter", "40"], [1, "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "enterprise"], ["matColumnDef", "status"], ["matColumnDef", "contractType"], ["matColumnDef", "location"], ["matColumnDef", "level"], ["matColumnDef", "createdAt"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "table-row", 3, "row-selected", "click", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "offer-title-btn", 3, "click"], [1, "enterprise-cell"], [1, "enterprise-logo"], [1, "chip", "chip-info"], [1, "location-cell"], [1, "chip", "chip-tele", 2, "margin-left", "4px"], [1, "material-icons-round", "loc-icon"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row", 3, "click"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "detail-overlay", 3, "click"], [1, "detail-panel", "card", 3, "click"], [1, "detail-header"], [1, "detail-title"], [1, "detail-company"], ["mat-icon-button", "", 3, "click"], [1, "detail-chips"], [1, "chip", "chip-tele"], [1, "chip", "chip-gray"], [1, "detail-meta"], [1, "detail-section-label"], [1, "detail-text"], [2, "font-size", "15px", "vertical-align", "middle"]], template: function AdminOffersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Offres d'emploi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 3)(7, "mat-form-field", 4)(8, "mat-label");
        \u0275\u0275text(9, "Rechercher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 5);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOffersComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchValue, $event) || (ctx.searchValue = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 6);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "app-select", 7);
        \u0275\u0275twoWayListener("ngModelChange", function AdminOffersComponent_Template_app_select_ngModelChange_13_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function AdminOffersComponent_Template_app_select_ngModelChange_13_listener() {
          return ctx.onStatusChange();
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 8);
        \u0275\u0275template(15, AdminOffersComponent_Conditional_15_Template, 2, 0, "div", 9)(16, AdminOffersComponent_Conditional_16_Template, 27, 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(17, AdminOffersComponent_Conditional_17_Template, 29, 18, "div", 10);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.totalElements, " offres sur la plateforme");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchValue);
        \u0275\u0275advance(3);
        \u0275\u0275property("options", ctx.statusOpts);
        \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(15, ctx.loading ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(17, ctx.selectedOffer ? 17 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatInputModule, MatInput, MatFormField, MatLabel, MatSuffix, MatFormFieldModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatPaginatorModule, MatPaginator, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatChipsModule, AppSelectComponent], styles: ['@charset "UTF-8";\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.header-filters[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.search-field[_ngcontent-%COMP%] {\n  min-width: 240px;\n}\n.status-filter[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.offer-title-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #4f46e5;\n  text-align: left;\n}\n.offer-title-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.enterprise-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.enterprise-logo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #0ea5e9,\n      #4f46e5);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.location-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 0.85rem;\n}\n.loc-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--text-secondary);\n}\n.chip-tele[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #059669;\n  font-size: 0.67rem;\n  padding: 2px 6px;\n  border-radius: 4px;\n}\n.mat-mdc-row.table-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mat-mdc-row.table-row[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n}\n.mat-mdc-row.table-row.row-selected[_ngcontent-%COMP%] {\n  background: #ede9fe;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-color);\n}\n.detail-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  display: flex;\n  justify-content: flex-end;\n  z-index: 1000;\n}\n.detail-panel[_ngcontent-%COMP%] {\n  width: 480px;\n  max-width: 95vw;\n  height: 100vh;\n  overflow-y: auto;\n  border-radius: 0;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.detail-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.detail-company[_ngcontent-%COMP%] {\n  color: var(--text-secondary);\n  margin: 4px 0 0;\n}\n.detail-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.detail-meta[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-secondary);\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.detail-section-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: var(--text-secondary);\n  margin: 8px 0 4px;\n}\n.detail-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  white-space: pre-line;\n  margin: 0;\n  color: var(--text-primary);\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 60px 20px;\n  color: var(--text-secondary);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  opacity: 0.4;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-title[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=admin-offers.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOffersComponent, { className: "AdminOffersComponent", filePath: "src\\app\\features\\admin\\offers-overview\\admin-offers.component.ts", lineNumber: 28 });
})();
export {
  AdminOffersComponent
};
//# sourceMappingURL=chunk-RLOJTCCX.js.map
