import {
  getApiErrorMessage
} from "./chunk-PZ2SSTPI.js";
import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import {
  Router,
  RouterLink
} from "./chunk-CIKWQEPB.js";
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
  MatLabel,
  MatPrefix,
  MatSuffix
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
  MatButton,
  MatButtonModule,
  MatIconButton,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Adresse e-mail invalide");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "L'e-mail est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Le mot de passe est requis");
    \u0275\u0275elementEnd();
  }
}
function LoginComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 16);
  }
}
function LoginComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Se connecter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
var LoginComponent = class _LoginComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.snack = inject(MatSnackBar);
    this.loading = false;
    this.hidePassword = true;
  }
  ngOnInit() {
    if (this.auth.isLoggedIn) {
      this.auth.redirectToDashboard();
      return;
    }
    this.form = this.fb.nonNullable.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () => {
        this.auth.redirectToDashboard();
      },
      error: (err) => {
        this.loading = false;
        this.snack.open(getApiErrorMessage(err, "Identifiants incorrects"), "Fermer", { panelClass: "error-snack" });
      }
    });
  }
  static {
    this.\u0275fac = function LoginComponent_Factory(t) {
      return new (t || _LoginComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 62, vars: 8, consts: [[1, "auth-wrapper"], [1, "auth-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "material-icons-round"], [1, "brand-features"], [1, "feature-item"], [1, "auth-form-panel"], [1, "auth-form-container"], [1, "form-header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "vous@exemple.com", "autocomplete", "email"], ["matPrefix", "", 1, "field-icon"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-flat-button", "", "type", "submit", 1, "btn-submit", 3, "disabled"], ["diameter", "20"], [1, "form-footer"], ["routerLink", "/auth/register", 1, "register-link"]], template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "work");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "RecruitPro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "La plateforme intelligente qui connecte");
        \u0275\u0275element(10, "br");
        \u0275\u0275text(11, "les meilleurs talents aux entreprises innovantes.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 4);
        \u0275\u0275text(15, "psychology");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "Matching IA avanc\xE9");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "span", 4);
        \u0275\u0275text(20, "speed");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "Processus acc\xE9l\xE9r\xE9 3\xD7");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "span", 4);
        \u0275\u0275text(25, "verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "Candidats v\xE9rifi\xE9s");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 7)(29, "div", 8)(30, "div", 9)(31, "h2");
        \u0275\u0275text(32, "Bienvenue");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, "Connectez-vous \xE0 votre espace");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "form", 10);
        \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_35_listener() {
          return ctx.submit();
        });
        \u0275\u0275elementStart(36, "mat-form-field")(37, "mat-label");
        \u0275\u0275text(38, "Adresse e-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275element(39, "input", 11);
        \u0275\u0275elementStart(40, "mat-icon", 12);
        \u0275\u0275text(41, "mail_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275template(42, LoginComponent_Conditional_42_Template, 2, 0, "mat-error")(43, LoginComponent_Conditional_43_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-form-field")(45, "mat-label");
        \u0275\u0275text(46, "Mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(47, "input", 13);
        \u0275\u0275elementStart(48, "mat-icon", 12);
        \u0275\u0275text(49, "lock_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 14);
        \u0275\u0275listener("click", function LoginComponent_Template_button_click_50_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(51, "mat-icon");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(53, LoginComponent_Conditional_53_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "button", 15);
        \u0275\u0275template(55, LoginComponent_Conditional_55_Template, 1, 0, "mat-spinner", 16)(56, LoginComponent_Conditional_56_Template, 4, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 17)(58, "p");
        \u0275\u0275text(59, "Vous n'avez pas encore de compte ?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "a", 18);
        \u0275\u0275text(61, "Cr\xE9er un compte gratuitement");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_5_0;
        \u0275\u0275advance(35);
        \u0275\u0275property("formGroup", ctx.form);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(42, ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.hasError("email")) && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.touched) ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(43, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 43 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(53, ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched) ? 53 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(55, ctx.loading ? 55 : 56);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      FormGroupDirective,
      FormControlName,
      RouterLink,
      MatCardModule,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule
    ], styles: ['\n\n.auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-brand[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 50%,\n      #0891b2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n}\n.auth-brand[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  top: -100px;\n  right: -100px;\n}\n.auth-brand[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  bottom: -80px;\n  left: -80px;\n}\n.brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n  z-index: 1;\n}\n.brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #fff;\n}\n.brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin: 0 0 16px 0;\n  letter-spacing: -0.02em;\n}\n.brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.85;\n  line-height: 1.6;\n  margin: 0 0 40px 0;\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 12px 16px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #a5f3fc;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  background: #fff;\n}\n.auth-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 20px;\n  margin-right: 8px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n  color: #fff !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  letter-spacing: 0.02em;\n}\n.btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 8px 0;\n  font-size: 0.875rem;\n}\n.form-footer[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 0.875rem;\n}\n.form-footer[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .auth-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n}\n/*# sourceMappingURL=login.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src\\app\\features\\auth\\login\\login.component.ts", lineNumber: 26 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-U6MMOHSV.js.map
