import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { getApiErrorMessage } from '../../../core/utils/api-error.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/progress-spinner";
function ForgotPasswordComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "span", 4);
    i0.ɵɵtext(3, "check_circle");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h2", 11);
    i0.ɵɵtext(5, "Email envoy\u00E9 avec succ\u00E8s!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 12);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 13);
    i0.ɵɵtext(9, "Vous serez redirig\u00E9 automatiquement vers la page de connexion...");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 14);
    i0.ɵɵlistener("click", function ForgotPasswordComponent_Conditional_30_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.backToLogin()); });
    i0.ɵɵelementStart(11, "mat-icon");
    i0.ɵɵtext(12, "arrow_back");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Retourner \u00E0 la connexion ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.successMessage);
} }
function ForgotPasswordComponent_Conditional_31_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Adresse e-mail invalide");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordComponent_Conditional_31_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "L'e-mail est requis");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordComponent_Conditional_31_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 20);
} }
function ForgotPasswordComponent_Conditional_31_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Envoyer le lien de r\u00E9initialisation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "send");
    i0.ɵɵelementEnd();
} }
function ForgotPasswordComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "h2");
    i0.ɵɵtext(2, "Mot de passe oubli\u00E9?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Entrez votre adresse email et nous vous enverrons un lien pour r\u00E9initialiser votre mot de passe.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "form", 16);
    i0.ɵɵlistener("ngSubmit", function ForgotPasswordComponent_Conditional_31_Template_form_ngSubmit_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(6, "mat-form-field")(7, "mat-label");
    i0.ɵɵtext(8, "Adresse e-mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 17);
    i0.ɵɵelementStart(10, "mat-icon", 18);
    i0.ɵɵtext(11, "mail_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, ForgotPasswordComponent_Conditional_31_Conditional_12_Template, 2, 0, "mat-error")(13, ForgotPasswordComponent_Conditional_31_Conditional_13_Template, 2, 0, "mat-error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 19);
    i0.ɵɵtemplate(15, ForgotPasswordComponent_Conditional_31_Conditional_15_Template, 1, 0, "mat-spinner", 20)(16, ForgotPasswordComponent_Conditional_31_Conditional_16_Template, 4, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 21)(18, "p");
    i0.ɵɵtext(19, "Vous vous souvenez de votre mot de passe?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "a", 22);
    i0.ɵɵtext(21, "Retourner \u00E0 la connexion");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(12, ((tmp_2_0 = ctx_r1.form.get("email")) == null ? null : tmp_2_0.hasError("email")) && ((tmp_2_0 = ctx_r1.form.get("email")) == null ? null : tmp_2_0.touched) ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx_r1.form.get("email")) == null ? null : tmp_3_0.touched) ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, ctx_r1.loading ? 15 : 16);
} }
export class ForgotPasswordComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.alert = inject(AlertService);
        this.router = inject(Router);
        this.loading = false;
        this.submitted = false;
        this.successMessage = '';
    }
    ngOnInit() {
        if (this.auth.isLoggedIn) {
            this.router.navigate(['/']);
            return;
        }
        this.form = this.fb.nonNullable.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        const email = this.form.get('email')?.value;
        this.auth.forgotPassword(email).subscribe({
            next: () => {
                this.loading = false;
                this.submitted = true;
                this.successMessage = `Email de réinitialisation envoyé à ${email}. Vérifiez votre boîte de réception et suivez le lien pour réinitialiser votre mot de passe.`;
                this.form.reset();
                setTimeout(() => this.router.navigate(['/auth/login']), 5000);
            },
            error: err => {
                this.loading = false;
                this.alert.error('Erreur', getApiErrorMessage(err, 'Email non trouvé'));
            }
        });
    }
    backToLogin() {
        this.router.navigate(['/auth/login']);
    }
    static { this.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 32, vars: 1, consts: [[1, "auth-wrapper", "forgot-password-page"], [1, "auth-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "material-icons-round"], [1, "brand-features"], [1, "feature-item"], [1, "auth-form-panel"], [1, "auth-form-container"], [1, "success-state"], [1, "success-icon"], [1, "success-title"], [1, "success-message"], [1, "success-hint"], ["mat-flat-button", "", 1, "btn-primary-modern", 3, "click"], [1, "form-header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "vous@exemple.com", "autocomplete", "email"], ["matPrefix", "", 1, "field-icon"], ["mat-flat-button", "", "type", "submit", 1, "btn-submit", 3, "disabled"], ["diameter", "20"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "login-link"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "lock_reset");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "NeoHire");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "R\u00E9initialiser votre mot de passe");
            i0.ɵɵelement(10, "br");
            i0.ɵɵtext(11, "en toute s\u00E9curit\u00E9.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5)(13, "div", 6)(14, "span", 4);
            i0.ɵɵtext(15, "verified_user");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "V\u00E9rification par email");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 6)(19, "span", 4);
            i0.ɵɵtext(20, "schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span");
            i0.ɵɵtext(22, "Lien valide 24 heures");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 6)(24, "span", 4);
            i0.ɵɵtext(25, "security");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "span");
            i0.ɵɵtext(27, "100% s\u00E9curis\u00E9");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(28, "div", 7)(29, "div", 8);
            i0.ɵɵtemplate(30, ForgotPasswordComponent_Conditional_30_Template, 14, 1, "div", 9)(31, ForgotPasswordComponent_Conditional_31_Template, 22, 5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(30);
            i0.ɵɵconditional(30, ctx.submitted ? 30 : 31);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            MatCardModule, MatFormFieldModule, i2.MatFormField, i2.MatLabel, i2.MatError, i2.MatPrefix, MatInputModule, i3.MatInput, MatButtonModule, i4.MatButton, MatIconModule, i5.MatIcon, MatProgressSpinnerModule, i6.MatProgressSpinner], styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 500px; height: 500px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 105, 0, 0.1) 0%, transparent 70%);\n    top: -150px; right: -150px;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    width: 400px; height: 400px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(252, 185, 0, 0.08) 0%, transparent 70%);\n    bottom: -100px; left: -100px;\n  }\n}\n\n.brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative; z-index: 1;\n\n  .brand-logo {\n    width: 80px; height: 80px;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    border-radius: 20px;\n    display: flex; align-items: center; justify-content: center;\n    margin-bottom: 32px;\n    box-shadow: 0 12px 40px rgba(255, 105, 0, 0.25);\n    .material-icons-round { font-size: 40px; color: #000; }\n  }\n\n  h1 {\n    font-size: 2.8rem; font-weight: 900;\n    margin: 0 0 12px 0; letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  p {\n    font-size: 1.05rem; opacity: 0.85;\n    line-height: 1.7; margin: 0 0 48px 0;\n    color: #e8e8e8;\n  }\n}\n\n.brand-features[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 14px;\n  .feature-item {\n    display: flex; align-items: center; gap: 14px;\n    background: rgba(255, 105, 0, 0.08);\n    border-radius: 14px; padding: 14px 18px;\n    border: 1px solid rgba(255, 105, 0, 0.15);\n    font-size: 0.95rem; font-weight: 500;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n    &:hover {\n      background: rgba(255, 105, 0, 0.12);\n      border-color: rgba(252, 185, 0, 0.3);\n      transform: translateX(6px);\n      box-shadow: 0 6px 20px rgba(255, 105, 0, 0.15);\n    }\n\n    .material-icons-round {\n      font-size: 22px;\n      color: #fcb900;\n      min-width: 22px;\n    }\n  }\n}\n\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex; align-items: center; justify-content: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);\n}\n\n.auth-form-container[_ngcontent-%COMP%] {\n  width: 100%; max-width: 420px;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n  h2 {\n    font-size: 2rem; font-weight: 900;\n    color: #000;\n    margin: 0 0 6px 0;\n    letter-spacing: -0.02em;\n  }\n  p  {\n    color: #666;\n    margin: 0;\n    font-size: 0.95rem;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n}\n\n.success-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n\n  .success-icon {\n    margin-bottom: 20px;\n\n    .material-icons-round {\n      font-size: 80px;\n      color: #16a34a;\n      opacity: 0.8;\n    }\n  }\n\n  .success-title {\n    font-size: 1.75rem;\n    font-weight: 900;\n    color: #000;\n    margin: 0 0 12px 0;\n  }\n\n  .success-message {\n    font-size: 1rem;\n    color: #666;\n    line-height: 1.6;\n    margin: 0 0 8px 0;\n  }\n\n  .success-hint {\n    font-size: 0.85rem;\n    color: #999;\n    margin: 0 0 24px 0;\n    font-weight: 500;\n  }\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 20px;\n}\n\n.field-icon[_ngcontent-%COMP%] {\n  color: #ff6900 !important;\n  font-size: 22px;\n  margin-right: 8px;\n  font-weight: 600;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 56px;\n  background: linear-gradient(135deg, #ff6900 0%, #ff8a2e 50%, #fcb900 100%) !important;\n  color: #000 !important;\n  font-size: 1rem !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  display: flex; align-items: center; justify-content: center; gap: 8px;\n  letter-spacing: .03em;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n  box-shadow: 0 6px 25px rgba(255, 105, 0, 0.35) !important;\n  border: none !important;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent);\n    border-radius: 14px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 35px rgba(255, 105, 0, 0.45) !important;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.3) !important;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  mat-icon { font-size: 20px; font-weight: 600; }\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 28px; text-align: center;\n  p {\n    color: #666;\n    margin: 0 0 8px 0;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n  .login-link {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 0.875rem;\n    transition: all 0.2s ease;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -2px; left: 0; right: 0;\n      height: 2px;\n      background: linear-gradient(90deg, #ff6900, #fcb900);\n      transform: scaleX(0);\n      transform-origin: right;\n      transition: transform 0.3s ease;\n    }\n\n    &:hover {\n      &::after {\n        transform: scaleX(1);\n        transform-origin: left;\n      }\n    }\n  }\n}\n\n.btn-primary-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  padding: 0 24px !important;\n  border-radius: 12px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(255, 105, 0, 0.25) !important;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px rgba(255, 105, 0, 0.35) !important;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n  }\n\n  mat-icon {\n    font-size: 20px;\n  }\n}\n\n  {\n  .auth-form-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mdc-text-field--filled {\n        background-color: #f8f9fa !important;\n\n        &:hover {\n          background-color: #f0f1f3 !important;\n        }\n      }\n\n      .mat-mdc-floating-label {\n        color: #666 !important;\n        font-weight: 500;\n      }\n\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n        height: 3px;\n      }\n\n      .mat-focused {\n        .mdc-line-ripple::after {\n          border-bottom-color: #ff6900 !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #ff6900 !important;\n          font-weight: 600;\n        }\n      }\n\n      .mat-error {\n        color: #dc2626 !important;\n        font-weight: 500;\n      }\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .auth-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n  .auth-form-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ForgotPasswordComponent, [{
        type: Component,
        args: [{ selector: 'app-forgot-password', standalone: true, imports: [
                    CommonModule, ReactiveFormsModule, RouterLink,
                    MatCardModule, MatFormFieldModule, MatInputModule,
                    MatButtonModule, MatIconModule, MatProgressSpinnerModule
                ], template: "<div class=\"auth-wrapper forgot-password-page\">\n  <div class=\"auth-brand\">\n    <div class=\"brand-content\">\n      <div class=\"brand-logo\">\n        <span class=\"material-icons-round\">lock_reset</span>\n      </div>\n      <h1>NeoHire</h1>\n      <p>R\u00E9initialiser votre mot de passe<br>en toute s\u00E9curit\u00E9.</p>\n      <div class=\"brand-features\">\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">verified_user</span>\n          <span>V\u00E9rification par email</span>\n        </div>\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">schedule</span>\n          <span>Lien valide 24 heures</span>\n        </div>\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">security</span>\n          <span>100% s\u00E9curis\u00E9</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"auth-form-panel\">\n    <div class=\"auth-form-container\">\n      @if (submitted) {\n        <div class=\"success-state\">\n          <div class=\"success-icon\">\n            <span class=\"material-icons-round\">check_circle</span>\n          </div>\n          <h2 class=\"success-title\">Email envoy\u00E9 avec succ\u00E8s!</h2>\n          <p class=\"success-message\">{{ successMessage }}</p>\n          <p class=\"success-hint\">Vous serez redirig\u00E9 automatiquement vers la page de connexion...</p>\n          <button mat-flat-button class=\"btn-primary-modern\" (click)=\"backToLogin()\">\n            <mat-icon>arrow_back</mat-icon> Retourner \u00E0 la connexion\n          </button>\n        </div>\n      } @else {\n        <div class=\"form-header\">\n          <h2>Mot de passe oubli\u00E9?</h2>\n          <p>Entrez votre adresse email et nous vous enverrons un lien pour r\u00E9initialiser votre mot de passe.</p>\n        </div>\n\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n          <mat-form-field>\n            <mat-label>Adresse e-mail</mat-label>\n            <input matInput formControlName=\"email\" type=\"email\" placeholder=\"vous@exemple.com\" autocomplete=\"email\" />\n            <mat-icon matPrefix class=\"field-icon\">mail_outline</mat-icon>\n            @if (form.get('email')?.hasError('email') && form.get('email')?.touched) {\n              <mat-error>Adresse e-mail invalide</mat-error>\n            }\n            @if (form.get('email')?.hasError('required') && form.get('email')?.touched) {\n              <mat-error>L'e-mail est requis</mat-error>\n            }\n          </mat-form-field>\n\n          <button mat-flat-button type=\"submit\" class=\"btn-submit\" [disabled]=\"loading\">\n            @if (loading) {\n              <mat-spinner diameter=\"20\" />\n            } @else {\n              <span>Envoyer le lien de r\u00E9initialisation</span>\n              <mat-icon>send</mat-icon>\n            }\n          </button>\n        </form>\n\n        <div class=\"form-footer\">\n          <p>Vous vous souvenez de votre mot de passe?</p>\n          <a routerLink=\"/auth/login\" class=\"login-link\">Retourner \u00E0 la connexion</a>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".auth-wrapper {\n  display: flex;\n  min-height: 100vh;\n}\n\n.auth-brand {\n  flex: 0 0 50%;\n  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 500px; height: 500px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 105, 0, 0.1) 0%, transparent 70%);\n    top: -150px; right: -150px;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    width: 400px; height: 400px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(252, 185, 0, 0.08) 0%, transparent 70%);\n    bottom: -100px; left: -100px;\n  }\n}\n\n.brand-content {\n  color: #fff;\n  position: relative; z-index: 1;\n\n  .brand-logo {\n    width: 80px; height: 80px;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    border-radius: 20px;\n    display: flex; align-items: center; justify-content: center;\n    margin-bottom: 32px;\n    box-shadow: 0 12px 40px rgba(255, 105, 0, 0.25);\n    .material-icons-round { font-size: 40px; color: #000; }\n  }\n\n  h1 {\n    font-size: 2.8rem; font-weight: 900;\n    margin: 0 0 12px 0; letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  p {\n    font-size: 1.05rem; opacity: 0.85;\n    line-height: 1.7; margin: 0 0 48px 0;\n    color: #e8e8e8;\n  }\n}\n\n.brand-features {\n  display: flex; flex-direction: column; gap: 14px;\n  .feature-item {\n    display: flex; align-items: center; gap: 14px;\n    background: rgba(255, 105, 0, 0.08);\n    border-radius: 14px; padding: 14px 18px;\n    border: 1px solid rgba(255, 105, 0, 0.15);\n    font-size: 0.95rem; font-weight: 500;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n    &:hover {\n      background: rgba(255, 105, 0, 0.12);\n      border-color: rgba(252, 185, 0, 0.3);\n      transform: translateX(6px);\n      box-shadow: 0 6px 20px rgba(255, 105, 0, 0.15);\n    }\n\n    .material-icons-round {\n      font-size: 22px;\n      color: #fcb900;\n      min-width: 22px;\n    }\n  }\n}\n\n.auth-form-panel {\n  flex: 1;\n  display: flex; align-items: center; justify-content: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);\n}\n\n.auth-form-container {\n  width: 100%; max-width: 420px;\n}\n\n.form-header {\n  margin-bottom: 36px;\n  h2 {\n    font-size: 2rem; font-weight: 900;\n    color: #000;\n    margin: 0 0 6px 0;\n    letter-spacing: -0.02em;\n  }\n  p  {\n    color: #666;\n    margin: 0;\n    font-size: 0.95rem;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n}\n\n.success-state {\n  text-align: center;\n  padding: 40px 20px;\n\n  .success-icon {\n    margin-bottom: 20px;\n\n    .material-icons-round {\n      font-size: 80px;\n      color: #16a34a;\n      opacity: 0.8;\n    }\n  }\n\n  .success-title {\n    font-size: 1.75rem;\n    font-weight: 900;\n    color: #000;\n    margin: 0 0 12px 0;\n  }\n\n  .success-message {\n    font-size: 1rem;\n    color: #666;\n    line-height: 1.6;\n    margin: 0 0 8px 0;\n  }\n\n  .success-hint {\n    font-size: 0.85rem;\n    color: #999;\n    margin: 0 0 24px 0;\n    font-weight: 500;\n  }\n}\n\nform {\n  display: flex; flex-direction: column; gap: 20px;\n}\n\n.field-icon {\n  color: #ff6900 !important;\n  font-size: 22px;\n  margin-right: 8px;\n  font-weight: 600;\n}\n\n.btn-submit {\n  margin-top: 12px;\n  height: 56px;\n  background: linear-gradient(135deg, #ff6900 0%, #ff8a2e 50%, #fcb900 100%) !important;\n  color: #000 !important;\n  font-size: 1rem !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  display: flex; align-items: center; justify-content: center; gap: 8px;\n  letter-spacing: .03em;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n  box-shadow: 0 6px 25px rgba(255, 105, 0, 0.35) !important;\n  border: none !important;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent);\n    border-radius: 14px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 35px rgba(255, 105, 0, 0.45) !important;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.3) !important;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  mat-icon { font-size: 20px; font-weight: 600; }\n}\n\n.form-footer {\n  margin-top: 28px; text-align: center;\n  p {\n    color: #666;\n    margin: 0 0 8px 0;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n  .login-link {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 0.875rem;\n    transition: all 0.2s ease;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -2px; left: 0; right: 0;\n      height: 2px;\n      background: linear-gradient(90deg, #ff6900, #fcb900);\n      transform: scaleX(0);\n      transform-origin: right;\n      transition: transform 0.3s ease;\n    }\n\n    &:hover {\n      &::after {\n        transform: scaleX(1);\n        transform-origin: left;\n      }\n    }\n  }\n}\n\n.btn-primary-modern {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  padding: 0 24px !important;\n  border-radius: 12px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(255, 105, 0, 0.25) !important;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px rgba(255, 105, 0, 0.35) !important;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n  }\n\n  mat-icon {\n    font-size: 20px;\n  }\n}\n\n::ng-deep {\n  .auth-form-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mdc-text-field--filled {\n        background-color: #f8f9fa !important;\n\n        &:hover {\n          background-color: #f0f1f3 !important;\n        }\n      }\n\n      .mat-mdc-floating-label {\n        color: #666 !important;\n        font-weight: 500;\n      }\n\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n        height: 3px;\n      }\n\n      .mat-focused {\n        .mdc-line-ripple::after {\n          border-bottom-color: #ff6900 !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #ff6900 !important;\n          font-weight: 600;\n        }\n      }\n\n      .mat-error {\n        color: #dc2626 !important;\n        font-weight: 500;\n      }\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .auth-brand {\n    display: none;\n  }\n  .auth-form-panel {\n    padding: 40px 24px;\n  }\n  .auth-form-container {\n    max-width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "app\\features\\auth\\forgot-password\\forgot-password.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=forgot-password.component.js.map