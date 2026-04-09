import {
  ReclamationService
} from "./chunk-33GCIT4G.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-2TZY33OT.js";
import {
  AppSelectComponent
} from "./chunk-TJQ44VG2.js";
import {
  MatTabsModule
} from "./chunk-QDUAY4BZ.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-5U2QUVSG.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FV7EZ2JQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-K3CFEA6O.js";
import "./chunk-XXJRWQFV.js";
import "./chunk-T243Z5LV.js";
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
  DatePipe,
  MatButton,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/admin/reclamations/admin-reclamations.component.ts
var _forTrack0 = ($index, $item) => $item.value;
var _c0 = () => [10, 15, 30];
function AdminReclamationsComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function AdminReclamationsComponent_For_8_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.switchTab(tab_r2.value));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTab === tab_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r2.label, " ");
  }
}
function AdminReclamationsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "#");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", r_r5.id, "");
  }
}
function AdminReclamationsComponent_Conditional_12_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Utilisateur");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "div", 30)(2, "div", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 33);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.initials(r_r6.user == null ? null : r_r6.user.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r6.user == null ? null : r_r6.user.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.user == null ? null : r_r6.user.email);
  }
}
function AdminReclamationsComponent_Conditional_12_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(r_r7.type));
  }
}
function AdminReclamationsComponent_Conditional_12_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Sujet");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", r_r8.description);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r8.subject);
  }
}
function AdminReclamationsComponent_Conditional_12_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Statut");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip ", ctx_r2.statusChipClass(r_r9.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(r_r9.status));
  }
}
function AdminReclamationsComponent_Conditional_12_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, r_r10.createdAt, "dd/MM/yyyy HH:mm"));
  }
}
function AdminReclamationsComponent_Conditional_12_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function AdminReclamationsComponent_Conditional_12_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 28)(1, "button", 36);
    \u0275\u0275listener("click", function AdminReclamationsComponent_Conditional_12_td_22_Template_button_click_1_listener() {
      const r_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openDetail(r_r12));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Traiter ");
    \u0275\u0275elementEnd()();
  }
}
function AdminReclamationsComponent_Conditional_12_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function AdminReclamationsComponent_Conditional_12_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected-row", (ctx_r2.selectedReclamation == null ? null : ctx_r2.selectedReclamation.id) === row_r13.id);
  }
}
function AdminReclamationsComponent_Conditional_12_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 39);
    \u0275\u0275text(2, "check_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 40);
    \u0275\u0275text(4, "Aucune r\xE9clamation dans cette cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 41);
    \u0275\u0275text(6, "Toutes les r\xE9clamations ont \xE9t\xE9 trait\xE9es");
    \u0275\u0275elementEnd()();
  }
}
function AdminReclamationsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "table", 13);
    \u0275\u0275elementContainerStart(2, 14);
    \u0275\u0275template(3, AdminReclamationsComponent_Conditional_12_th_3_Template, 2, 0, "th", 15)(4, AdminReclamationsComponent_Conditional_12_td_4_Template, 3, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 17);
    \u0275\u0275template(6, AdminReclamationsComponent_Conditional_12_th_6_Template, 2, 0, "th", 15)(7, AdminReclamationsComponent_Conditional_12_td_7_Template, 9, 3, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 18);
    \u0275\u0275template(9, AdminReclamationsComponent_Conditional_12_th_9_Template, 2, 0, "th", 15)(10, AdminReclamationsComponent_Conditional_12_td_10_Template, 3, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 19);
    \u0275\u0275template(12, AdminReclamationsComponent_Conditional_12_th_12_Template, 2, 0, "th", 15)(13, AdminReclamationsComponent_Conditional_12_td_13_Template, 3, 2, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 20);
    \u0275\u0275template(15, AdminReclamationsComponent_Conditional_12_th_15_Template, 2, 0, "th", 15)(16, AdminReclamationsComponent_Conditional_12_td_16_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 21);
    \u0275\u0275template(18, AdminReclamationsComponent_Conditional_12_th_18_Template, 2, 0, "th", 15)(19, AdminReclamationsComponent_Conditional_12_td_19_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 22);
    \u0275\u0275template(21, AdminReclamationsComponent_Conditional_12_th_21_Template, 2, 0, "th", 15)(22, AdminReclamationsComponent_Conditional_12_td_22_Template, 5, 0, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(23, AdminReclamationsComponent_Conditional_12_tr_23_Template, 1, 0, "tr", 23)(24, AdminReclamationsComponent_Conditional_12_tr_24_Template, 1, 2, "tr", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminReclamationsComponent_Conditional_12_Conditional_25_Template, 7, 0, "div", 25);
    \u0275\u0275elementStart(26, "mat-paginator", 26);
    \u0275\u0275listener("page", function AdminReclamationsComponent_Conditional_12_Template_mat_paginator_page_26_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.reclamations);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns)("matHeaderRowDefSticky", true);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(25, !ctx_r2.reclamations.length ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r2.totalElements)("pageSize", ctx_r2.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c0));
  }
}
function AdminReclamationsComponent_Conditional_13_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53)(1, "p", 49);
    \u0275\u0275text(2, "R\xE9ponse pr\xE9c\xE9dente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedReclamation.adminResponse);
  }
}
function AdminReclamationsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 42)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function AdminReclamationsComponent_Conditional_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePanel());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 44)(8, "div", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 46);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "mat-divider");
    \u0275\u0275elementStart(18, "div", 47)(19, "div", 48)(20, "span", 49);
    \u0275\u0275text(21, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 50);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 48)(25, "span", 49);
    \u0275\u0275text(26, "Sujet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 50);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 48)(30, "span", 49);
    \u0275\u0275text(31, "Statut actuel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 48)(35, "span", 49);
    \u0275\u0275text(36, "Soumis le");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span", 50);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 51)(41, "p", 49);
    \u0275\u0275text(42, "Description de la r\xE9clamation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "p", 52);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(45, AdminReclamationsComponent_Conditional_13_Conditional_45_Template, 5, 1, "div", 53);
    \u0275\u0275element(46, "mat-divider");
    \u0275\u0275elementStart(47, "form", 54);
    \u0275\u0275listener("ngSubmit", function AdminReclamationsComponent_Conditional_13_Template_form_ngSubmit_47_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.submitResponse());
    });
    \u0275\u0275elementStart(48, "p", 55);
    \u0275\u0275text(49, "R\xE9pondre \xE0 la r\xE9clamation");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "app-select", 56);
    \u0275\u0275elementStart(51, "mat-form-field")(52, "mat-label");
    \u0275\u0275text(53, "R\xE9ponse admin");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "textarea", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 58)(56, "mat-icon");
    \u0275\u0275text(57, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(58, " Envoyer la r\xE9ponse ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("R\xE9clamation #", ctx_r2.selectedReclamation.id, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.initials(ctx_r2.selectedReclamation.user == null ? null : ctx_r2.selectedReclamation.user.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedReclamation.user == null ? null : ctx_r2.selectedReclamation.user.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedReclamation.user == null ? null : ctx_r2.selectedReclamation.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedReclamation.user == null ? null : ctx_r2.selectedReclamation.user.role);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.typeLabel(ctx_r2.selectedReclamation.type));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedReclamation.subject);
    \u0275\u0275advance(4);
    \u0275\u0275classMapInterpolate1("chip ", ctx_r2.statusChipClass(ctx_r2.selectedReclamation.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(ctx_r2.selectedReclamation.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(39, 17, ctx_r2.selectedReclamation.createdAt, "dd/MM/yyyy \xE0 HH:mm"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedReclamation.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(45, ctx_r2.selectedReclamation.adminResponse ? 45 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.responseForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r2.statusOptions);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.responseForm.invalid);
  }
}
var AdminReclamationsComponent = class _AdminReclamationsComponent {
  constructor() {
    this.reclamSvc = inject(ReclamationService);
    this.snack = inject(MatSnackBar);
    this.dialog = inject(MatDialog);
    this.fb = inject(FormBuilder);
    this.displayedColumns = ["id", "user", "type", "subject", "status", "createdAt", "actions"];
    this.reclamations = [];
    this.totalElements = 0;
    this.pageSize = 15;
    this.currentPage = 0;
    this.loading = true;
    this.activeTab = "ALL";
    this.selectedReclamation = null;
    this.panelOpen = false;
    this.responseForm = this.fb.group({
      status: ["IN_PROGRESS", Validators.required],
      adminResponse: [""]
    });
    this.statusOptions = [
      { value: "IN_PROGRESS", label: "En cours" },
      { value: "RESOLVED", label: "R\xE9solu" },
      { value: "CLOSED", label: "Ferm\xE9" },
      { value: "REJECTED", label: "Rejet\xE9" }
    ];
    this.tabs = [
      { label: "Toutes", value: "ALL", icon: "list" },
      { label: "Ouvertes", value: "OPEN", icon: "report_problem" },
      { label: "En cours", value: "IN_PROGRESS", icon: "pending" },
      { label: "R\xE9solues", value: "RESOLVED", icon: "check_circle" },
      { label: "Ferm\xE9es", value: "CLOSED", icon: "lock" }
    ];
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    const obs = this.activeTab === "ALL" ? this.reclamSvc.getAll(this.currentPage, this.pageSize) : this.reclamSvc.getByStatus(this.activeTab, this.currentPage, this.pageSize);
    obs.subscribe({
      next: (res) => {
        this.reclamations = res.data.content;
        this.totalElements = res.data.totalElements;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  switchTab(value) {
    this.activeTab = value;
    this.currentPage = 0;
    this.load();
  }
  onPage(event) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }
  openDetail(r) {
    this.selectedReclamation = r;
    this.responseForm.patchValue({ status: r.status, adminResponse: r.adminResponse ?? "" });
    this.panelOpen = true;
  }
  closePanel() {
    this.panelOpen = false;
    this.selectedReclamation = null;
  }
  submitResponse() {
    if (this.responseForm.invalid || !this.selectedReclamation)
      return;
    const { status, adminResponse } = this.responseForm.value;
    this.reclamSvc.respond(this.selectedReclamation.id, { status, adminResponse: adminResponse ?? "" }).subscribe({
      next: (res) => {
        const idx = this.reclamations.findIndex((r) => r.id === res.data.id);
        if (idx !== -1)
          this.reclamations[idx] = res.data;
        this.snack.open("R\xE9clamation mise \xE0 jour", "OK", { panelClass: "success-snack" });
        this.closePanel();
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  statusChipClass(status) {
    const map = {
      OPEN: "chip-danger",
      IN_PROGRESS: "chip-warning",
      RESOLVED: "chip-success",
      CLOSED: "chip-gray",
      REJECTED: "chip-gray"
    };
    return map[status] ?? "chip-gray";
  }
  statusLabel(status) {
    const map = {
      OPEN: "Ouvert",
      IN_PROGRESS: "En cours",
      RESOLVED: "R\xE9solu",
      CLOSED: "Ferm\xE9",
      REJECTED: "Rejet\xE9"
    };
    return map[status] ?? status;
  }
  typeLabel(type) {
    const map = {
      TECHNICAL_ISSUE: "Probl\xE8me technique",
      ACCOUNT_PROBLEM: "Compte",
      PAYMENT_ISSUE: "Paiement",
      ABUSIVE_CONTENT: "Contenu abusif",
      OFFER_FRAUD: "Fraude offre",
      OTHER: "Autre"
    };
    return map[type] ?? type;
  }
  initials(name) {
    return name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  static {
    this.\u0275fac = function AdminReclamationsComponent_Factory(t) {
      return new (t || _AdminReclamationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminReclamationsComponent, selectors: [["app-admin-reclamations"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 4, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "tabs-bar"], [1, "tab-btn", 3, "active"], [1, "reclamation-layout"], [1, "card", "table-card"], [1, "loading-center"], [1, "detail-panel", "card"], [1, "tab-btn", 3, "click"], [1, "material-icons-round"], ["diameter", "40"], [1, "table-responsive"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "user"], ["matColumnDef", "type"], ["matColumnDef", "subject"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", "class", "table-row", 3, "selected-row", 4, "matRowDef", "matRowDefColumns"], [1, "empty-state"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "id-cell"], [1, "user-cell"], [1, "user-avatar-sm"], [1, "user-name"], [1, "user-email"], [1, "type-label"], [1, "subject-cell", 3, "matTooltip"], ["mat-flat-button", "", 1, "btn-handle", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "panel-header"], ["mat-icon-button", "", 3, "click"], [1, "detail-user"], [1, "user-avatar-md"], [1, "chip", "chip-gray"], [1, "detail-section"], [1, "detail-row"], [1, "detail-label"], [1, "detail-value"], [1, "description-box"], [1, "description-text"], [1, "previous-response"], ["novalidate", "", 1, "response-form", 3, "ngSubmit", "formGroup"], [1, "section-title"], ["label", "Nouveau statut", "formControlName", "status", 3, "options"], ["matInput", "", "formControlName", "adminResponse", "rows", "4", "placeholder", "Saisissez votre r\xE9ponse..."], ["mat-flat-button", "", "type", "submit", 1, "btn-primary", "w-full", 3, "disabled"]], template: function AdminReclamationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Gestion des r\xE9clamations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "Traitez et r\xE9pondez aux r\xE9clamations utilisateurs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "div", 3);
        \u0275\u0275repeaterCreate(7, AdminReclamationsComponent_For_8_Template, 4, 4, "button", 4, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5)(10, "div", 6);
        \u0275\u0275template(11, AdminReclamationsComponent_Conditional_11_Template, 2, 0, "div", 7)(12, AdminReclamationsComponent_Conditional_12_Template, 27, 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, AdminReclamationsComponent_Conditional_13_Template, 59, 20, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(7);
        \u0275\u0275repeater(ctx.tabs);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("with-panel", ctx.panelOpen);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, ctx.loading ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(13, ctx.panelOpen && ctx.selectedReclamation ? 13 : -1);
      }
    }, dependencies: [
      CommonModule,
      DatePipe,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      MatCardModule,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      MatPaginatorModule,
      MatPaginator,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      AppSelectComponent,
      MatDialogModule,
      MatSnackBarModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatTabsModule,
      MatTooltipModule,
      MatTooltip,
      MatDividerModule,
      MatDivider
    ], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.tabs-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  padding: 6px;\n  width: fit-content;\n  flex-wrap: wrap;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--text-secondary);\n  transition: all 0.2s ease;\n}\n.tab-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: var(--text-primary);\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(79, 70, 229, 0.3);\n}\n.reclamation-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 20px;\n}\n@media (min-width: 1024px) {\n  .reclamation-layout.with-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 400px;\n  }\n}\n.table-card[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow: hidden;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 60px;\n}\n.table-responsive[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.id-cell[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  font-weight: 600;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 180px;\n}\n.user-avatar-sm[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #0891b2);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.85rem;\n  margin: 0;\n}\n.user-email[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.type-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  font-weight: 500;\n}\n.subject-cell[_ngcontent-%COMP%] {\n  font-weight: 500;\n  cursor: help;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 200px;\n  display: block;\n  text-overflow: ellipsis;\n}\n.btn-handle[_ngcontent-%COMP%] {\n  background: #f0f2ff !important;\n  color: var(--primary-light) !important;\n  font-size: 0.8rem !important;\n  height: 32px !important;\n  padding: 0 12px !important;\n  border-radius: 8px !important;\n}\n.btn-handle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.mat-mdc-row.table-row[_ngcontent-%COMP%]:hover {\n  background: #f8faff;\n  cursor: pointer;\n}\n.mat-mdc-row.selected-row[_ngcontent-%COMP%] {\n  background: #eef2ff !important;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--border-color);\n}\n.detail-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  height: fit-content;\n  position: sticky;\n  top: 92px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0;\n}\n.detail-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 10px;\n}\n.detail-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.detail-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 4px 0;\n}\n.user-avatar-md[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #0891b2);\n  color: #fff;\n  font-size: 1rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detail-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--text-muted);\n}\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--text-primary);\n  font-weight: 500;\n}\n.description-box[_ngcontent-%COMP%] {\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 12px;\n}\n.description-box[_ngcontent-%COMP%]   .description-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.6;\n  margin: 8px 0 0;\n  color: var(--text-primary);\n}\n.previous-response[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 12px;\n  font-size: 0.875rem;\n  color: #92400e;\n}\n.response-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.response-form[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin: 0 0 4px 0;\n}\n.w-full[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=admin-reclamations.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminReclamationsComponent, { className: "AdminReclamationsComponent", filePath: "src\\app\\features\\admin\\reclamations\\admin-reclamations.component.ts", lineNumber: 34 });
})();
export {
  AdminReclamationsComponent
};
//# sourceMappingURL=chunk-VP426D6N.js.map
