import {
  UserService
} from "./chunk-EBWDBHD2.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-HDLYBLM6.js";
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
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
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

// src/app/features/candidate/profile/candidate-profile.component.ts
function CandidateProfileComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 4);
    \u0275\u0275elementEnd();
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.profile.profilePicture, \u0275\u0275sanitizeUrl);
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2, "account_circle");
    \u0275\u0275elementEnd()();
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "photo_camera");
    \u0275\u0275elementEnd();
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "Ouvert aux opportunit\xE9s");
    \u0275\u0275elementEnd();
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 37);
  }
}
function CandidateProfileComponent_Conditional_7_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function CandidateProfileComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 5);
    \u0275\u0275listener("ngSubmit", function CandidateProfileComponent_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7);
    \u0275\u0275template(3, CandidateProfileComponent_Conditional_7_Conditional_3_Template, 1, 1, "img", 8)(4, CandidateProfileComponent_Conditional_7_Conditional_4_Template, 3, 0);
    \u0275\u0275elementStart(5, "label", 9);
    \u0275\u0275template(6, CandidateProfileComponent_Conditional_7_Conditional_6_Template, 1, 0, "mat-spinner", 10)(7, CandidateProfileComponent_Conditional_7_Conditional_7_Template, 2, 0);
    \u0275\u0275elementStart(8, "input", 11);
    \u0275\u0275listener("change", function CandidateProfileComponent_Conditional_7_Template_input_change_8_listener($event) {
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
    \u0275\u0275template(14, CandidateProfileComponent_Conditional_7_Conditional_14_Template, 2, 0, "span", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 14)(16, "h3", 15)(17, "mat-icon");
    \u0275\u0275text(18, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Informations g\xE9n\xE9rales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 16)(21, "mat-form-field", 17)(22, "mat-label");
    \u0275\u0275text(23, "Nom complet");
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
    \u0275\u0275text(40, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " Profil professionnel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 16)(43, "mat-form-field", 22)(44, "mat-label");
    \u0275\u0275text(45, "Titre / Poste recherch\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "input", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-form-field", 22)(48, "mat-label");
    \u0275\u0275text(49, "R\xE9sum\xE9 professionnel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(50, "textarea", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "mat-form-field", 17)(52, "mat-label");
    \u0275\u0275text(53, "Ann\xE9es d'exp\xE9rience");
    \u0275\u0275elementEnd();
    \u0275\u0275element(54, "input", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "mat-form-field", 17)(56, "mat-label");
    \u0275\u0275text(57, "Salaire souhait\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 22)(60, "mat-label");
    \u0275\u0275text(61, "Comp\xE9tences");
    \u0275\u0275elementEnd();
    \u0275\u0275element(62, "input", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "mat-form-field", 22)(64, "mat-label");
    \u0275\u0275text(65, "Langues");
    \u0275\u0275elementEnd();
    \u0275\u0275element(66, "input", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-form-field", 22)(68, "mat-label");
    \u0275\u0275text(69, "Formation / Dipl\xF4mes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "textarea", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "mat-checkbox", 30);
    \u0275\u0275text(72, " Je suis ouvert(e) aux opportunit\xE9s professionnelles ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 14)(74, "h3", 15)(75, "mat-icon");
    \u0275\u0275text(76, "link");
    \u0275\u0275elementEnd();
    \u0275\u0275text(77, " Liens professionnels");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 16)(79, "mat-form-field", 17)(80, "mat-label");
    \u0275\u0275text(81, "LinkedIn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-icon", 31);
    \u0275\u0275text(83, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275element(84, "input", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-form-field", 17)(86, "mat-label");
    \u0275\u0275text(87, "GitHub");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "mat-icon", 31);
    \u0275\u0275text(89, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275element(90, "input", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "mat-form-field", 22)(92, "mat-label");
    \u0275\u0275text(93, "Portfolio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "mat-icon", 31);
    \u0275\u0275text(95, "language");
    \u0275\u0275elementEnd();
    \u0275\u0275element(96, "input", 34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(97, "div", 35)(98, "button", 36);
    \u0275\u0275template(99, CandidateProfileComponent_Conditional_7_Conditional_99_Template, 1, 0, "mat-spinner", 37)(100, CandidateProfileComponent_Conditional_7_Conditional_100_Template, 2, 0);
    \u0275\u0275text(101, " Enregistrer les modifications ");
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
    \u0275\u0275textInterpolate(ctx_r1.profile == null ? null : ctx_r1.profile.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.profile == null ? null : ctx_r1.profile.email);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, (ctx_r1.profile == null ? null : ctx_r1.profile.openToWork) ? 14 : -1);
    \u0275\u0275advance(84);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance();
    \u0275\u0275conditional(99, ctx_r1.saving ? 99 : 100);
  }
}
var CandidateProfileComponent = class _CandidateProfileComponent {
  constructor() {
    this.userSvc = inject(UserService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.loading = true;
    this.saving = false;
    this.uploadingPhoto = false;
    this.profile = null;
    this.form = this.fb.group({
      fullName: [""],
      phoneNumber: [""],
      city: [""],
      country: [""],
      headline: [""],
      summary: [""],
      linkedinUrl: [""],
      githubUrl: [""],
      portfolioUrl: [""],
      yearsExperience: [null],
      skills: [""],
      languages: [""],
      education: [""],
      openToWork: [false],
      desiredSalary: [""]
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
          headline: res.data.headline ?? "",
          summary: res.data.summary ?? "",
          linkedinUrl: res.data.linkedinUrl ?? "",
          githubUrl: res.data.githubUrl ?? "",
          portfolioUrl: res.data.portfolioUrl ?? "",
          yearsExperience: res.data.yearsExperience ?? null,
          skills: res.data.skills ?? "",
          languages: res.data.languages ?? "",
          education: res.data.education ?? "",
          openToWork: res.data.openToWork ?? false,
          desiredSalary: res.data.desiredSalary ?? ""
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
        this.snack.open("Photo de profil mise \xE0 jour", "OK", { panelClass: "success-snack" });
      },
      error: (err) => {
        this.uploadingPhoto = false;
        this.snack.open(err.error?.message || "Erreur upload photo", "OK", { panelClass: "error-snack" });
      }
    });
  }
  static {
    this.\u0275fac = function CandidateProfileComponent_Factory(t) {
      return new (t || _CandidateProfileComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CandidateProfileComponent, selectors: [["app-candidate-profile"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 1, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "loading-center"], ["diameter", "40"], [3, "ngSubmit", "formGroup"], [1, "card", "profile-photo-section"], [1, "photo-container"], ["alt", "Photo de profil", 1, "avatar-img", 3, "src"], [1, "photo-upload-btn"], ["diameter", "16"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change", "disabled"], [1, "profile-info"], [1, "chip", "chip-success"], [1, "card", "section-card"], [1, "section-title"], [1, "form-grid"], ["appearance", "outline"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "phoneNumber"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "headline", "placeholder", "Ex: D\xE9veloppeur Full Stack React/Node.js"], ["matInput", "", "formControlName", "summary", "rows", "4", "placeholder", "D\xE9crivez votre exp\xE9rience, vos objectifs professionnels..."], ["matInput", "", "type", "number", "formControlName", "yearsExperience", "min", "0"], ["matInput", "", "formControlName", "desiredSalary", "placeholder", "Ex: 45000 \u20AC/an"], ["matInput", "", "formControlName", "skills", "placeholder", "Ex: Java, Angular, Spring Boot, SQL..."], ["matInput", "", "formControlName", "languages", "placeholder", "Ex: Fran\xE7ais (natif), Anglais (courant)"], ["matInput", "", "formControlName", "education", "rows", "3", "placeholder", "Ex: Master Informatique - Universit\xE9 Paris-Saclay (2022), BTS SIO (2020)..."], ["formControlName", "openToWork", "color", "primary", 1, "open-to-work-check"], ["matPrefix", ""], ["matInput", "", "formControlName", "linkedinUrl", "placeholder", "https://linkedin.com/in/..."], ["matInput", "", "formControlName", "githubUrl", "placeholder", "https://github.com/..."], ["matInput", "", "formControlName", "portfolioUrl", "placeholder", "https://monportfolio.com"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18"], [1, "avatar-placeholder"], [1, "material-icons-round"]], template: function CandidateProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Mon profil candidat");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5, "G\xE9rez votre profil pour attirer les recruteurs");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(6, CandidateProfileComponent_Conditional_6_Template, 2, 0, "div", 3)(7, CandidateProfileComponent_Conditional_7_Template, 102, 11);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(6, ctx.loading ? 6 : 7);
      }
    }, dependencies: [CommonModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon, MatCheckboxModule, MatCheckbox, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ["\n\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.profile-photo-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  padding: 24px;\n  margin-bottom: 16px;\n}\n.photo-container[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.photo-container[_ngcontent-%COMP%]   .avatar-img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #e2e8f0;\n}\n.photo-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  border-radius: 50%;\n  background: #f1f5f9;\n  border: 3px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.photo-container[_ngcontent-%COMP%]   .avatar-placeholder[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 56px;\n  color: #cbd5e1;\n}\n.photo-upload-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: var(--primary-light);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid #fff;\n}\n.photo-upload-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.photo-upload-btn.loading[_ngcontent-%COMP%] {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.875rem;\n  margin: 0 0 8px;\n}\n.section-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 24px;\n}\nform[_ngcontent-%COMP%]    > .section-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1rem;\n  font-weight: 600;\n  color: #334155;\n  margin: 0 0 20px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 16px;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n@media (max-width: 600px) {\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-grid[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n}\n.open-to-work-check[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 16px 0;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0 28px;\n  height: 44px;\n}\n/*# sourceMappingURL=candidate-profile.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CandidateProfileComponent, { className: "CandidateProfileComponent", filePath: "src\\app\\features\\candidate\\profile\\candidate-profile.component.ts", lineNumber: 26 });
})();
export {
  CandidateProfileComponent
};
//# sourceMappingURL=chunk-ZAAYP6JL.js.map
