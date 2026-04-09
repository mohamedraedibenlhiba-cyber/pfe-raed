import {
  ReclamationService
} from "./chunk-33GCIT4G.js";
import {
  AppSelectComponent
} from "./chunk-TJQ44VG2.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-CZTZ4ONH.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-FNKFVHAE.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
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
  MatButton,
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
  ɵɵtextInterpolate1
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/shared/reclamations/my-reclamations.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MyReclamationsComponent_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 20 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function MyReclamationsComponent_Conditional_10_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 13);
  }
}
function MyReclamationsComponent_Conditional_10_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Soumettre la r\xE9clamation ");
  }
}
function MyReclamationsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "h3");
    \u0275\u0275text(2, "Soumettre une r\xE9clamation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 6);
    \u0275\u0275listener("ngSubmit", function MyReclamationsComponent_Conditional_10_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(4, "div", 7);
    \u0275\u0275element(5, "app-select", 8);
    \u0275\u0275elementStart(6, "mat-form-field")(7, "mat-label");
    \u0275\u0275text(8, "Sujet");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "input", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 10)(11, "mat-label");
    \u0275\u0275text(12, "Description d\xE9taill\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "textarea", 11);
    \u0275\u0275elementStart(14, "mat-hint");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, MyReclamationsComponent_Conditional_10_Conditional_16_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275template(18, MyReclamationsComponent_Conditional_10_Conditional_18_Template, 1, 0, "mat-spinner", 13)(19, MyReclamationsComponent_Conditional_10_Conditional_19_Template, 3, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("options", ctx_r1.typeOptions);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1("", ((tmp_3_0 = ctx_r1.form.get("description")) == null ? null : tmp_3_0.value == null ? null : tmp_3_0.value.length) || 0, " caract\xE8res");
    \u0275\u0275advance();
    \u0275\u0275conditional(16, ((tmp_4_0 = ctx_r1.form.get("description")) == null ? null : tmp_4_0.hasError("minlength")) && ((tmp_4_0 = ctx_r1.form.get("description")) == null ? null : tmp_4_0.touched) ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.form.invalid || ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, ctx_r1.submitting ? 18 : 19);
  }
}
function MyReclamationsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementEnd();
  }
}
function MyReclamationsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 16);
    \u0275\u0275text(2, "check_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "Aucune r\xE9clamation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 18);
    \u0275\u0275text(6, "Tout va bien ! Soumettez une r\xE9clamation si vous avez un probl\xE8me.");
    \u0275\u0275elementEnd()();
  }
}
function MyReclamationsComponent_Conditional_13_For_2_Conditional_13_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Trait\xE9 le ", \u0275\u0275pipeBind2(2, 1, r_r3.resolvedAt, "dd/MM/yyyy \xE0 HH:mm"), "");
  }
}
function MyReclamationsComponent_Conditional_13_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "span", 27);
    \u0275\u0275text(3, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5, "R\xE9ponse de l'\xE9quipe support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MyReclamationsComponent_Conditional_13_For_2_Conditional_13_Conditional_8_Template, 3, 4, "p", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(r_r3.adminResponse);
    \u0275\u0275advance();
    \u0275\u0275conditional(8, r_r3.resolvedAt ? 8 : -1);
  }
}
function MyReclamationsComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 23);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "h4");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, MyReclamationsComponent_Conditional_13_For_2_Conditional_13_Template, 9, 2, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", r_r3.id, "");
    \u0275\u0275advance();
    \u0275\u0275classMapInterpolate1("chip ", ctx_r1.statusClass(r_r3.status), "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.statusLabel(r_r3.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 9, r_r3.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.subject);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, r_r3.adminResponse ? 13 : -1);
  }
}
function MyReclamationsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275repeaterCreate(1, MyReclamationsComponent_Conditional_13_For_2_Template, 14, 12, "div", 20, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.reclamations);
  }
}
var MyReclamationsComponent = class _MyReclamationsComponent {
  constructor() {
    this.reclamSvc = inject(ReclamationService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.loading = true;
    this.submitting = false;
    this.reclamations = [];
    this.showForm = false;
    this.form = this.fb.group({
      type: ["", Validators.required],
      subject: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(20)]]
    });
    this.typeOptions = [
      { value: "TECHNICAL_ISSUE", label: "Probl\xE8me technique" },
      { value: "ACCOUNT_PROBLEM", label: "Probl\xE8me de compte" },
      { value: "PAYMENT_ISSUE", label: "Probl\xE8me de paiement" },
      { value: "ABUSIVE_CONTENT", label: "Contenu abusif" },
      { value: "OFFER_FRAUD", label: "Offre frauduleuse" },
      { value: "OTHER", label: "Autre" }
    ];
  }
  ngOnInit() {
    this.reclamSvc.getMine().subscribe({
      next: (res) => {
        this.reclamations = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  submit() {
    if (this.form.invalid)
      return;
    this.submitting = true;
    this.reclamSvc.submit(this.form.value).subscribe({
      next: (res) => {
        this.reclamations.unshift(res.data);
        this.form.reset();
        this.showForm = false;
        this.submitting = false;
        this.snack.open("R\xE9clamation soumise avec succ\xE8s", "OK", { panelClass: "success-snack" });
      },
      error: (err) => {
        this.submitting = false;
        this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" });
      }
    });
  }
  statusClass(s) {
    return { OPEN: "chip-danger", IN_PROGRESS: "chip-warning", RESOLVED: "chip-success", CLOSED: "chip-gray", REJECTED: "chip-gray" }[s] ?? "chip-gray";
  }
  statusLabel(s) {
    return { OPEN: "Ouvert", IN_PROGRESS: "En cours", RESOLVED: "R\xE9solu", CLOSED: "Ferm\xE9", REJECTED: "Rejet\xE9" }[s] ?? s;
  }
  static {
    this.\u0275fac = function MyReclamationsComponent_Factory(t) {
      return new (t || _MyReclamationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyReclamationsComponent, selectors: [["app-my-reclamations"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 14, vars: 5, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["mat-flat-button", "", 1, "btn-primary", 3, "click"], [1, "card", "form-card"], [1, "loading-center"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["label", "Type de r\xE9clamation", "formControlName", "type", 3, "options"], ["matInput", "", "formControlName", "subject", "placeholder", "R\xE9sumez votre probl\xE8me..."], [1, "full"], ["matInput", "", "formControlName", "description", "rows", "4", "placeholder", "D\xE9crivez votre probl\xE8me en d\xE9tail (minimum 20 caract\xE8res)..."], ["mat-flat-button", "", "type", "submit", 1, "btn-primary", "submit-btn", 3, "disabled"], ["diameter", "18"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "reclamations-list"], [1, "reclamation-card", "card"], [1, "card-header"], [1, "card-id"], [1, "date"], [1, "description"], [1, "admin-reply"], [1, "reply-header"], [1, "material-icons-round"], [1, "resolved-date"]], template: function MyReclamationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Mes r\xE9clamations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "button", 3);
        \u0275\u0275listener("click", function MyReclamationsComponent_Template_button_click_6_listener() {
          return ctx.showForm = !ctx.showForm;
        });
        \u0275\u0275elementStart(7, "mat-icon");
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275text(9);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, MyReclamationsComponent_Conditional_10_Template, 20, 6, "div", 4)(11, MyReclamationsComponent_Conditional_11_Template, 2, 0, "div", 5)(12, MyReclamationsComponent_Conditional_12_Template, 7, 0)(13, MyReclamationsComponent_Conditional_13_Template, 3, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.reclamations.length, " r\xE9clamation(s) soumise(s)");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.showForm ? "close" : "add");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.showForm ? "Annuler" : "Nouvelle r\xE9clamation", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(10, ctx.showForm ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(11, ctx.loading ? 11 : !ctx.reclamations.length ? 12 : 13);
      }
    }, dependencies: [CommonModule, DatePipe, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, AppSelectComponent, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  gap: 16px;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 16px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 16px;\n  margin-bottom: 8px;\n}\n.form-grid[_ngcontent-%COMP%]   .full[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.submit-btn[_ngcontent-%COMP%] {\n  height: 46px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 10px !important;\n}\n.reclamations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.reclamation-card[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 10px;\n}\n.card-id[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: var(--text-muted);\n  background: #f1f5f9;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n.date[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\nh4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 6px;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  line-height: 1.5;\n  margin: 0 0 12px;\n}\n.admin-reply[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #eff6ff,\n      #f0fdf4);\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 14px;\n}\n.admin-reply[_ngcontent-%COMP%]   .reply-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.admin-reply[_ngcontent-%COMP%]   .reply-header[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: #1d4ed8;\n  font-size: 18px;\n}\n.admin-reply[_ngcontent-%COMP%]   .reply-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #1d4ed8;\n}\n.admin-reply[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #1e3a5f;\n  margin: 0 0 6px;\n  line-height: 1.5;\n}\n.admin-reply[_ngcontent-%COMP%]   .resolved-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #059669;\n  margin: 6px 0 0;\n  font-weight: 600;\n}\n/*# sourceMappingURL=my-reclamations.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyReclamationsComponent, { className: "MyReclamationsComponent", filePath: "src\\app\\features\\shared\\reclamations\\my-reclamations.component.ts", lineNumber: 21 });
})();
export {
  MyReclamationsComponent
};
//# sourceMappingURL=chunk-EN5P4ORK.js.map
