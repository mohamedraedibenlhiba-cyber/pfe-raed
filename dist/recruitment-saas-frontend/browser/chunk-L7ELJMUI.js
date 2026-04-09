import {
  getApiErrorMessage
} from "./chunk-PZ2SSTPI.js";
import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import {
  RouterLink
} from "./chunk-CIKWQEPB.js";
import {
  AppSelectComponent
} from "./chunk-TJQ44VG2.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/auth/register/register.component.ts
function RegisterComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "L'e-mail est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "E-mail invalide");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Le mot de passe est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 8 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Le nom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Le nom de l'entreprise est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 31);
  }
}
function RegisterComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cr\xE9er mon compte entreprise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "L'e-mail est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "E-mail invalide");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Le mot de passe est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_122_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 8 caract\xE8res");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_129_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Le nom est obligatoire");
    \u0275\u0275elementEnd();
  }
}
function RegisterComponent_Conditional_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 31);
  }
}
function RegisterComponent_Conditional_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Cr\xE9er mon profil candidat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_forward");
    \u0275\u0275elementEnd();
  }
}
var RegisterComponent = class _RegisterComponent {
  constructor() {
    this.fb = inject(FormBuilder);
    this.auth = inject(AuthService);
    this.snack = inject(MatSnackBar);
    this.loading = false;
    this.hidePassword = true;
    this.selectedTab = 0;
    this.companySizes = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"];
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
    this.sectorOpts = this.sectors.map((s) => ({ value: s, label: s }));
    this.companySizeOpts = this.companySizes.map((s) => ({ value: s, label: s + " employ\xE9s" }));
  }
  ngOnInit() {
    this.enterpriseForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      fullName: ["", Validators.required],
      companyName: ["", Validators.required],
      companyDescription: [""],
      companyWebsite: [""],
      companySector: [""],
      companySize: [""],
      siretNumber: [""],
      phoneNumber: [""],
      city: [""],
      country: [""]
    });
    this.candidateForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      fullName: ["", Validators.required],
      headline: [""],
      summary: [""],
      skills: [""],
      linkedinUrl: [""],
      githubUrl: [""],
      yearsExperience: [0, [Validators.min(0)]],
      phoneNumber: [""],
      city: [""],
      country: [""]
    });
  }
  submitEnterprise() {
    if (this.enterpriseForm.invalid)
      return;
    this.loading = true;
    this.auth.registerEnterprise(this.enterpriseForm.value).subscribe({
      next: () => this.auth.redirectToDashboard(),
      error: (err) => {
        this.loading = false;
        this.snack.open(getApiErrorMessage(err, "Erreur lors de l'inscription"), "Fermer", { panelClass: "error-snack" });
      }
    });
  }
  submitCandidate() {
    if (this.candidateForm.invalid)
      return;
    this.loading = true;
    this.auth.registerCandidate(this.candidateForm.value).subscribe({
      next: () => this.auth.redirectToDashboard(),
      error: (err) => {
        this.loading = false;
        this.snack.open(getApiErrorMessage(err, "Erreur lors de l'inscription"), "Fermer", { panelClass: "error-snack" });
      }
    });
  }
  static {
    this.\u0275fac = function RegisterComponent_Factory(t) {
      return new (t || _RegisterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterComponent, selectors: [["app-register"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 176, vars: 24, consts: [[1, "auth-wrapper"], [1, "auth-brand", "register-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "material-icons-round"], [1, "stats-row"], [1, "stat"], [1, "num"], [1, "lbl"], [1, "auth-form-panel", "register-panel"], [1, "auth-form-container", "wide"], [1, "form-header"], ["animationDuration", "0ms", 3, "selectedIndexChange", "selectedIndex"], ["label", "Je suis une Entreprise"], ["novalidate", "", 1, "register-form", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["matInput", "", "formControlName", "email", "type", "email"], ["matPrefix", "", 1, "field-icon"], ["matInput", "", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "companyName"], ["label", "Secteur d'activit\xE9", "formControlName", "companySector", 3, "options"], ["label", "Taille de l'entreprise", "formControlName", "companySize", 3, "options"], ["matInput", "", "formControlName", "companyWebsite", "placeholder", "https://..."], ["matInput", "", "formControlName", "siretNumber"], [1, "full-width"], ["matInput", "", "formControlName", "companyDescription", "rows", "3"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["mat-flat-button", "", "type", "submit", 1, "btn-submit", 3, "disabled"], ["diameter", "20"], ["label", "Je suis un Candidat"], ["matInput", "", "formControlName", "headline", "placeholder", "ex: D\xE9veloppeur Full-Stack Senior"], ["matInput", "", "formControlName", "skills", "placeholder", "Angular, Spring Boot, Docker..."], ["matInput", "", "formControlName", "yearsExperience", "type", "number", "min", "0"], ["matInput", "", "formControlName", "linkedinUrl", "placeholder", "https://linkedin.com/in/..."], ["matInput", "", "formControlName", "githubUrl", "placeholder", "https://github.com/..."], ["matInput", "", "formControlName", "summary", "rows", "3", "placeholder", "Pr\xE9sentez-vous en quelques lignes..."], [1, "form-footer"], ["routerLink", "/auth/login"]], template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275text(5, "work");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h1");
        \u0275\u0275text(7, "RecruitPro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Rejoignez des milliers d'entreprises et de talents");
        \u0275\u0275element(10, "br");
        \u0275\u0275text(11, "qui font confiance \xE0 notre plateforme IA.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "span", 7);
        \u0275\u0275text(15, "2 400+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span", 8);
        \u0275\u0275text(17, "Entreprises");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 6)(19, "span", 7);
        \u0275\u0275text(20, "18 000+");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span", 8);
        \u0275\u0275text(22, "Candidats");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 6)(24, "span", 7);
        \u0275\u0275text(25, "85%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 8);
        \u0275\u0275text(27, "Taux de placement");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(28, "div", 9)(29, "div", 10)(30, "div", 11)(31, "h2");
        \u0275\u0275text(32, "Cr\xE9er un compte");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, "Choisissez votre type de compte pour commencer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "mat-tab-group", 12);
        \u0275\u0275twoWayListener("selectedIndexChange", function RegisterComponent_Template_mat_tab_group_selectedIndexChange_35_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selectedTab, $event) || (ctx.selectedTab = $event);
          return $event;
        });
        \u0275\u0275elementStart(36, "mat-tab", 13)(37, "form", 14);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_37_listener() {
          return ctx.submitEnterprise();
        });
        \u0275\u0275elementStart(38, "div", 15)(39, "mat-form-field")(40, "mat-label");
        \u0275\u0275text(41, "E-mail professionnel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 16);
        \u0275\u0275elementStart(43, "mat-icon", 17);
        \u0275\u0275text(44, "mail_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275template(45, RegisterComponent_Conditional_45_Template, 2, 0, "mat-error")(46, RegisterComponent_Conditional_46_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-form-field")(48, "mat-label");
        \u0275\u0275text(49, "Mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 18);
        \u0275\u0275elementStart(51, "mat-icon", 17);
        \u0275\u0275text(52, "lock_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "button", 19);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_53_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(54, "mat-icon");
        \u0275\u0275text(55);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(56, RegisterComponent_Conditional_56_Template, 2, 0, "mat-error")(57, RegisterComponent_Conditional_57_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-form-field")(59, "mat-label");
        \u0275\u0275text(60, "Nom complet (responsable)");
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "input", 20);
        \u0275\u0275elementStart(62, "mat-icon", 17);
        \u0275\u0275text(63, "person_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275template(64, RegisterComponent_Conditional_64_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "mat-form-field")(66, "mat-label");
        \u0275\u0275text(67, "Nom de l'entreprise");
        \u0275\u0275elementEnd();
        \u0275\u0275element(68, "input", 21);
        \u0275\u0275elementStart(69, "mat-icon", 17);
        \u0275\u0275text(70, "business");
        \u0275\u0275elementEnd();
        \u0275\u0275template(71, RegisterComponent_Conditional_71_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275element(72, "app-select", 22)(73, "app-select", 23);
        \u0275\u0275elementStart(74, "mat-form-field")(75, "mat-label");
        \u0275\u0275text(76, "Site web");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "input", 24);
        \u0275\u0275elementStart(78, "mat-icon", 17);
        \u0275\u0275text(79, "language");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "mat-form-field")(81, "mat-label");
        \u0275\u0275text(82, "Num\xE9ro SIRET");
        \u0275\u0275elementEnd();
        \u0275\u0275element(83, "input", 25);
        \u0275\u0275elementStart(84, "mat-icon", 17);
        \u0275\u0275text(85, "badge");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "mat-form-field", 26)(87, "mat-label");
        \u0275\u0275text(88, "Description de l'entreprise");
        \u0275\u0275elementEnd();
        \u0275\u0275element(89, "textarea", 27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "mat-form-field")(91, "mat-label");
        \u0275\u0275text(92, "Ville");
        \u0275\u0275elementEnd();
        \u0275\u0275element(93, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "mat-form-field")(95, "mat-label");
        \u0275\u0275text(96, "Pays");
        \u0275\u0275elementEnd();
        \u0275\u0275element(97, "input", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "button", 30);
        \u0275\u0275template(99, RegisterComponent_Conditional_99_Template, 1, 0, "mat-spinner", 31)(100, RegisterComponent_Conditional_100_Template, 4, 0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(101, "mat-tab", 32)(102, "form", 14);
        \u0275\u0275listener("ngSubmit", function RegisterComponent_Template_form_ngSubmit_102_listener() {
          return ctx.submitCandidate();
        });
        \u0275\u0275elementStart(103, "div", 15)(104, "mat-form-field")(105, "mat-label");
        \u0275\u0275text(106, "E-mail");
        \u0275\u0275elementEnd();
        \u0275\u0275element(107, "input", 16);
        \u0275\u0275elementStart(108, "mat-icon", 17);
        \u0275\u0275text(109, "mail_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275template(110, RegisterComponent_Conditional_110_Template, 2, 0, "mat-error")(111, RegisterComponent_Conditional_111_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "mat-form-field")(113, "mat-label");
        \u0275\u0275text(114, "Mot de passe");
        \u0275\u0275elementEnd();
        \u0275\u0275element(115, "input", 18);
        \u0275\u0275elementStart(116, "mat-icon", 17);
        \u0275\u0275text(117, "lock_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "button", 19);
        \u0275\u0275listener("click", function RegisterComponent_Template_button_click_118_listener() {
          return ctx.hidePassword = !ctx.hidePassword;
        });
        \u0275\u0275elementStart(119, "mat-icon");
        \u0275\u0275text(120);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(121, RegisterComponent_Conditional_121_Template, 2, 0, "mat-error")(122, RegisterComponent_Conditional_122_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "mat-form-field")(124, "mat-label");
        \u0275\u0275text(125, "Nom complet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(126, "input", 20);
        \u0275\u0275elementStart(127, "mat-icon", 17);
        \u0275\u0275text(128, "person_outline");
        \u0275\u0275elementEnd();
        \u0275\u0275template(129, RegisterComponent_Conditional_129_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "mat-form-field")(131, "mat-label");
        \u0275\u0275text(132, "Titre professionnel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(133, "input", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "mat-form-field")(135, "mat-label");
        \u0275\u0275text(136, "Comp\xE9tences cl\xE9s");
        \u0275\u0275elementEnd();
        \u0275\u0275element(137, "input", 34);
        \u0275\u0275elementStart(138, "mat-icon", 17);
        \u0275\u0275text(139, "psychology");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "mat-form-field")(141, "mat-label");
        \u0275\u0275text(142, "Ann\xE9es d'exp\xE9rience");
        \u0275\u0275elementEnd();
        \u0275\u0275element(143, "input", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "mat-form-field")(145, "mat-label");
        \u0275\u0275text(146, "LinkedIn");
        \u0275\u0275elementEnd();
        \u0275\u0275element(147, "input", 36);
        \u0275\u0275elementStart(148, "mat-icon", 17);
        \u0275\u0275text(149, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "mat-form-field")(151, "mat-label");
        \u0275\u0275text(152, "GitHub");
        \u0275\u0275elementEnd();
        \u0275\u0275element(153, "input", 37);
        \u0275\u0275elementStart(154, "mat-icon", 17);
        \u0275\u0275text(155, "code");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "mat-form-field", 26)(157, "mat-label");
        \u0275\u0275text(158, "R\xE9sum\xE9 professionnel");
        \u0275\u0275elementEnd();
        \u0275\u0275element(159, "textarea", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(160, "mat-form-field")(161, "mat-label");
        \u0275\u0275text(162, "Ville");
        \u0275\u0275elementEnd();
        \u0275\u0275element(163, "input", 28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(164, "mat-form-field")(165, "mat-label");
        \u0275\u0275text(166, "Pays");
        \u0275\u0275elementEnd();
        \u0275\u0275element(167, "input", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "button", 30);
        \u0275\u0275template(169, RegisterComponent_Conditional_169_Template, 1, 0, "mat-spinner", 31)(170, RegisterComponent_Conditional_170_Template, 4, 0);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(171, "div", 39)(172, "p");
        \u0275\u0275text(173, "D\xE9j\xE0 inscrit ? ");
        \u0275\u0275elementStart(174, "a", 40);
        \u0275\u0275text(175, "Se connecter");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_2_0;
        let tmp_3_0;
        let tmp_6_0;
        let tmp_7_0;
        let tmp_8_0;
        let tmp_9_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_19_0;
        let tmp_20_0;
        let tmp_21_0;
        \u0275\u0275advance(35);
        \u0275\u0275twoWayProperty("selectedIndex", ctx.selectedTab);
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroup", ctx.enterpriseForm);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(45, ((tmp_2_0 = ctx.enterpriseForm.get("email")) == null ? null : tmp_2_0.hasError("required")) ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(46, ((tmp_3_0 = ctx.enterpriseForm.get("email")) == null ? null : tmp_3_0.hasError("email")) ? 46 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(56, ((tmp_6_0 = ctx.enterpriseForm.get("password")) == null ? null : tmp_6_0.hasError("required")) ? 56 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(57, ((tmp_7_0 = ctx.enterpriseForm.get("password")) == null ? null : tmp_7_0.hasError("minlength")) ? 57 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(64, ((tmp_8_0 = ctx.enterpriseForm.get("fullName")) == null ? null : tmp_8_0.hasError("required")) ? 64 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(71, ((tmp_9_0 = ctx.enterpriseForm.get("companyName")) == null ? null : tmp_9_0.hasError("required")) ? 71 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.sectorOpts);
        \u0275\u0275advance();
        \u0275\u0275property("options", ctx.companySizeOpts);
        \u0275\u0275advance(25);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(99, ctx.loading ? 99 : 100);
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroup", ctx.candidateForm);
        \u0275\u0275advance(8);
        \u0275\u0275conditional(110, ((tmp_15_0 = ctx.candidateForm.get("email")) == null ? null : tmp_15_0.hasError("required")) ? 110 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(111, ((tmp_16_0 = ctx.candidateForm.get("email")) == null ? null : tmp_16_0.hasError("email")) ? 111 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("type", ctx.hidePassword ? "password" : "text");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
        \u0275\u0275advance();
        \u0275\u0275conditional(121, ((tmp_19_0 = ctx.candidateForm.get("password")) == null ? null : tmp_19_0.hasError("required")) ? 121 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(122, ((tmp_20_0 = ctx.candidateForm.get("password")) == null ? null : tmp_20_0.hasError("minlength")) ? 122 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275conditional(129, ((tmp_21_0 = ctx.candidateForm.get("fullName")) == null ? null : tmp_21_0.hasError("required")) ? 129 : -1);
        \u0275\u0275advance(39);
        \u0275\u0275property("disabled", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275conditional(169, ctx.loading ? 169 : 170);
      }
    }, dependencies: [
      CommonModule,
      ReactiveFormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      MinValidator,
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
      MatSnackBarModule,
      MatTabsModule,
      MatTab,
      MatTabGroup,
      AppSelectComponent
    ], styles: ['\n\n.auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n.auth-brand[_ngcontent-%COMP%] {\n  flex: 0 0 45%;\n  background:\n    linear-gradient(\n      135deg,\n      #312e81 0%,\n      #4f46e5 50%,\n      #0891b2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n}\n.auth-brand[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.05);\n  top: -100px;\n  right: -100px;\n}\n.auth-brand[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.04);\n  bottom: -80px;\n  left: -80px;\n}\n.brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative;\n  z-index: 1;\n}\n.brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 24px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n}\n.brand-content[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: #fff;\n}\n.brand-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 800;\n  margin: 0 0 16px 0;\n  letter-spacing: -0.02em;\n}\n.brand-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  opacity: 0.85;\n  line-height: 1.6;\n  margin: 0 0 40px 0;\n}\n.brand-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 12px 16px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.brand-features[_ngcontent-%COMP%]   .feature-item[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #a5f3fc;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  background: #fff;\n}\n.auth-form-container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.form-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n  font-weight: 700;\n  color: #1e293b;\n  margin: 0 0 8px 0;\n}\n.form-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-icon[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 20px;\n  margin-right: 8px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n  color: #fff !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  letter-spacing: 0.02em;\n}\n.btn-submit[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  text-align: center;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 8px 0;\n  font-size: 0.875rem;\n}\n.form-footer[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 600;\n  text-decoration: none;\n  font-size: 0.875rem;\n}\n.form-footer[_ngcontent-%COMP%]   .register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .auth-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n}\n.register-brand[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  margin-top: 32px;\n}\n.register-brand[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  flex: 1;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 16px 12px;\n  text-align: center;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n}\n.register-brand[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 800;\n}\n.register-brand[_ngcontent-%COMP%]   .stats-row[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.8;\n}\n.register-panel[_ngcontent-%COMP%] {\n  padding: 40px 30px;\n}\n.auth-form-container.wide[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n.register-form[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 16px;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  width: 100%;\n  height: 52px;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed) !important;\n  color: #fff !important;\n  font-size: 1rem !important;\n  font-weight: 600 !important;\n  border-radius: 12px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n}\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 0.875rem;\n}\n.form-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.form-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  font-weight: 600;\n  text-decoration: none;\n}\n.form-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.auth-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.auth-form-panel[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.register-panel[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n/*# sourceMappingURL=register.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterComponent, { className: "RegisterComponent", filePath: "src\\app\\features\\auth\\register\\register.component.ts", lineNumber: 29 });
})();
export {
  RegisterComponent
};
//# sourceMappingURL=chunk-L7ELJMUI.js.map
