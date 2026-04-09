import {
  UserService
} from "./chunk-EBWDBHD2.js";
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
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-GE2UJ6OD.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
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
  MatButton,
  MatButtonModule,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/enterprise/profile/enterprise-profile.component.ts
function EnterpriseProfileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.profile.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 35);
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd()();
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "photo_camera");
    \u0275\u0275elementEnd();
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Premium");
    \u0275\u0275elementEnd();
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 33);
  }
}
function EnterpriseProfileComponent_Conditional_7_Conditional_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function EnterpriseProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function EnterpriseProfileComponent_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7);
    \u0275\u0275template(3, EnterpriseProfileComponent_Conditional_7_Conditional_3_Template, 1, 1, "img", 8)(4, EnterpriseProfileComponent_Conditional_7_Conditional_4_Template, 3, 0);
    \u0275\u0275elementStart(5, "label", 9);
    \u0275\u0275template(6, EnterpriseProfileComponent_Conditional_7_Conditional_6_Template, 1, 0, "mat-spinner", 10)(7, EnterpriseProfileComponent_Conditional_7_Conditional_7_Template, 2, 0);
    \u0275\u0275elementStart(8, "input", 11);
    \u0275\u0275listener("change", function EnterpriseProfileComponent_Conditional_7_Template_input_change_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhotoSelect($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 12)(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, EnterpriseProfileComponent_Conditional_7_Conditional_14_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "h3", 15)(17, "mat-icon");
    \u0275\u0275text(18, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Informations de contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "mat-form-field", 17)(22, "mat-label");
    \u0275\u0275text(23, "Nom du responsable");
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 17)(26, "mat-label");
    \u0275\u0275text(27, "T\xE9l\xE9phone");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 17)(30, "mat-label");
    \u0275\u0275text(31, "Ville");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 17)(34, "mat-label");
    \u0275\u0275text(35, "Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "input", 21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "div", 14)(38, "h3", 15)(39, "mat-icon");
    \u0275\u0275text(40, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Informations entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 16)(43, "mat-form-field", 22)(44, "mat-label");
    \u0275\u0275text(45, "Nom de l'entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 22)(48, "mat-label");
    \u0275\u0275text(49, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(51, "app-select", 25)(52, "app-select", 26);
    \u0275\u0275elementStart(53, "mat-form-field", 17)(54, "mat-label");
    \u0275\u0275text(55, "Site web");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "mat-icon", 27);
    \u0275\u0275text(57, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 17)(60, "mat-label");
    \u0275\u0275text(61, "Num\xE9ro SIRET");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-form-field", 22)(64, "mat-label");
    \u0275\u0275text(65, "LinkedIn entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-icon", 27);
    \u0275\u0275text(67, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "input", 30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 31)(70, "button", 32);
    \u0275\u0275template(71, EnterpriseProfileComponent_Conditional_7_Conditional_71_Template, 1, 0, "mat-spinner", 33)(72, EnterpriseProfileComponent_Conditional_7_Conditional_72_Template, 2, 0);
    \u0275\u0275text(73, " Enregistrer les modifications ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(3, (ctx_r1.profile == null ? null : ctx_r1.profile.profilePicture) ? 3 : 4);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("loading", ctx_r1.uploadingPhoto);
    \u0275\u0275advance();
    \u0275\u0275conditional(6, ctx_r1.uploadingPhoto ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.uploadingPhoto);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r1.profile == null ? null : ctx_r1.profile.companyName) || (ctx_r1.profile == null ? null : ctx_r1.profile.fullName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile == null ? null : ctx_r1.profile.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, (ctx_r1.profile == null ? null : ctx_r1.profile.premium) ? 14 : -1);
    \u0275\u0275advance(37);
    \u0275\u0275property("options", ctx_r1.sectorOpts);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r1.companySizeOpts);
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(71, ctx_r1.saving ? 71 : 72);
  }
}
var EnterpriseProfileComponent = class _EnterpriseProfileComponent {
  constructor() {
    this.userSvc = inject(UserService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.loading = true;
    this.saving = false;
    this.uploadingPhoto = false;
    this.profile = null;
    this.sectors = [
      "Technologie & IT",
      "Finance & Banque",
      "Sant\xE9 & M\xE9dical",
      "\xC9ducation & Formation",
      "Commerce & Distribution",
      "Industrie & Fabrication",
      "Transport & Logistique",
      "Construction & Immobilier",
      "M\xE9dias & Communication",
      "Conseil & Services",
      "Agriculture & Agroalimentaire",
      "Autre"
    ];
    this.companySizes = [
      "1-10",
      "11-50",
      "51-200",
      "201-500",
      "501-1000",
      "1000+"
    ];
    this.sectorOpts = this.sectors.map((s) => ({ value: s, label: s }));
    this.companySizeOpts = this.companySizes.map((s) => ({ value: s, label: s + " employ\xE9s" }));
    this.form = this.fb.group({
      fullName: [""],
      phoneNumber: [""],
      city: [""],
      country: [""],
      companyName: [""],
      companyDescription: [""],
      companyWebsite: [""],
      companySector: [""],
      companySize: [""],
      siretNumber: [""],
      enterpriseLinkedinUrl: [""]
    });
  }
  ngOnInit() {
    this.userSvc.getProfile().subscribe({
      next: (res) => {
        this.profile = res.data;
        this.form.patchValue({
          fullName: res.data.fullName ?? "",
          phoneNumber: res.data.phoneNumber ?? "",
          city: res.data.city ?? "",
          country: res.data.country ?? "",
          companyName: res.data.companyName ?? "",
          companyDescription: res.data.companyDescription ?? "",
          companyWebsite: res.data.companyWebsite ?? "",
          companySector: res.data.companySector ?? "",
          companySize: res.data.companySize ?? "",
          siretNumber: res.data.siretNumber ?? "",
          enterpriseLinkedinUrl: res.data.enterpriseLinkedinUrl ?? ""
        });
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  save() {
    if (this.saving)
      return;
    this.saving = true;
    this.userSvc.updateProfile(this.form.value).subscribe({
      next: (res) => {
        this.profile = res.data;
        this.saving = false;
        this.snack.open("Profil mis \xE0 jour", "OK", { panelClass: "success-snack" });
      },
      error: (err) => {
        this.saving = false;
        this.snack.open(err.error?.message || "Erreur lors de la mise \xE0 jour", "OK", { panelClass: "error-snack" });
      }
    });
  }
  onPhotoSelect(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (!file.type.startsWith("image/")) {
      this.snack.open("Seules les images sont accept\xE9es", "OK", { panelClass: "error-snack" });
      return;
    }
    this.uploadingPhoto = true;
    this.userSvc.uploadProfilePicture(file).subscribe({
      next: (res) => {
        this.profile = res.data;
        this.uploadingPhoto = false;
        this.snack.open("Logo mis \xE0 jour", "OK", { panelClass: "success-snack" });
      },
      error: (err) => {
        this.uploadingPhoto = false;
        this.snack.open(err.error?.message || "Erreur upload logo", "OK", { panelClass: "error-snack" });
      }
    });
  }
  static {
    this.\u0275fac = function EnterpriseProfileComponent_Factory(t) {
      return new (t || _EnterpriseProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EnterpriseProfileComponent, selectors: [["app-enterprise-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "loading-center"], ["diameter", "40"], [3, "ngSubmit", "formGroup"], [1, "card", "profile-photo-section"], [1, "photo-container"], ["alt", "Logo entreprise", 1, "avatar-img", 3, "src"], [1, "photo-upload-btn"], ["diameter", "16"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change", "disabled"], [1, "profile-info"], [1, "chip", "chip-warning"], [1, "card", "section-card"], [1, "section-title"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "phoneNumber"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "companyName"], ["matInput", "", "formControlName", "companyDescription", "rows", "4", "placeholder", "D\xE9crivez votre entreprise, sa mission, ses valeurs..."], ["label", "Secteur d'activit\xE9", "formControlName", "companySector", 3, "options"], ["label", "Taille de l'entreprise", "formControlName", "companySize", 3, "options"], ["matPrefix", ""], ["matInput", "", "formControlName", "companyWebsite", "placeholder", "https://..."], ["matInput", "", "formControlName", "siretNumber", "placeholder", "12345678901234"], ["matInput", "", "formControlName", "enterpriseLinkedinUrl", "placeholder", "https://linkedin.com/company/..."], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18"], [1, "avatar-placeholder"], [1, "material-icons-round"]], template: function EnterpriseProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Mon profil entreprise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "G\xE9rez les informations de votre entreprise");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, EnterpriseProfileComponent_Conditional_6_Template, 2, 0, "div", 3)(7, EnterpriseProfileComponent_Conditional_7_Template, 74, 13);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading ? 6 : 7);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatInputModule,
      MatInput,
      AppSelectComponent,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSnackBarModule
    ], styles: ["\n\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.profile-photo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.photo-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.photo-container[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 12px;\n  object-fit: cover;\n  border: 3px solid #e2e8f0;\n}\n.photo-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 12px;\n  background: #f1f5f9;\n  border: 3px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.photo-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #cbd5e1;\n}\n.photo-upload-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -4px;\n  right: -4px;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid #fff;\n}\n.photo-upload-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.photo-upload-btn.loading[_ngcontent-%COMP%] {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0 0 8px;\n}\n.section-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 24px;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin: 0 0 20px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 16px;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 16px 0;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 28px;\n  height: 44px;\n}\n/*# sourceMappingURL=enterprise-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EnterpriseProfileComponent, { className: "EnterpriseProfileComponent", filePath: "src\\app\\features\\enterprise\\profile\\enterprise-profile.component.ts", lineNumber: 26 });
})();
export {
  EnterpriseProfileComponent
};
//# sourceMappingURL=chunk-4MOZBICN.js.map
