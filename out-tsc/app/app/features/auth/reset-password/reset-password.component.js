import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
function ResetPasswordComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "mat-spinner", 10);
    i0.ɵɵelementStart(2, "p", 11);
    i0.ɵɵtext(3, "V\u00E9rification du lien de r\u00E9initialisation...");
    i0.ɵɵelementEnd()();
} }
function ResetPasswordComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13)(2, "span", 4);
    i0.ɵɵtext(3, "error_outline");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h2", 14);
    i0.ɵɵtext(5, "Lien invalide ou expir\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 15);
    i0.ɵɵtext(7, "Le lien de r\u00E9initialisation que vous avez utilis\u00E9 est expir\u00E9 ou invalide.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 16)(9, "mat-icon");
    i0.ɵɵtext(10, "refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Demander un nouveau lien ");
    i0.ɵɵelementEnd()();
} }
function ResetPasswordComponent_Conditional_32_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le mot de passe est requis");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_Conditional_32_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le mot de passe doit contenir au moins 6 caract\u00E8res");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_Conditional_32_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Veuillez confirmer votre mot de passe");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_Conditional_32_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Les mots de passe ne correspondent pas");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_Conditional_32_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 26);
} }
function ResetPasswordComponent_Conditional_32_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "R\u00E9initialiser mon mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_forward");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "h2");
    i0.ɵɵtext(2, "Nouveau mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Cr\u00E9ez un mot de passe fort et m\u00E9morable pour s\u00E9curiser votre compte.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "form", 18);
    i0.ɵɵlistener("ngSubmit", function ResetPasswordComponent_Conditional_32_Template_form_ngSubmit_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵelementStart(6, "mat-form-field")(7, "mat-label");
    i0.ɵɵtext(8, "Nouveau mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "input", 19);
    i0.ɵɵelementStart(10, "mat-icon", 20);
    i0.ɵɵtext(11, "lock_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 21);
    i0.ɵɵlistener("click", function ResetPasswordComponent_Conditional_32_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hidePassword = !ctx_r1.hidePassword); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, ResetPasswordComponent_Conditional_32_Conditional_15_Template, 2, 0, "mat-error")(16, ResetPasswordComponent_Conditional_32_Conditional_16_Template, 2, 0, "mat-error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "mat-form-field")(18, "mat-label");
    i0.ɵɵtext(19, "Confirmer le mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(20, "input", 22);
    i0.ɵɵelementStart(21, "mat-icon", 20);
    i0.ɵɵtext(22, "lock_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 21);
    i0.ɵɵlistener("click", function ResetPasswordComponent_Conditional_32_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hideConfirm = !ctx_r1.hideConfirm); });
    i0.ɵɵelementStart(24, "mat-icon");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(26, ResetPasswordComponent_Conditional_32_Conditional_26_Template, 2, 0, "mat-error")(27, ResetPasswordComponent_Conditional_32_Conditional_27_Template, 2, 0, "mat-error");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "div", 23)(29, "p", 24);
    i0.ɵɵtext(30, "Exigences du mot de passe:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "ul")(32, "li");
    i0.ɵɵtext(33, "Au moins 6 caract\u00E8res");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "li");
    i0.ɵɵtext(35, "Correspond \u00E0 la confirmation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "button", 25);
    i0.ɵɵtemplate(37, ResetPasswordComponent_Conditional_32_Conditional_37_Template, 1, 0, "mat-spinner", 26)(38, ResetPasswordComponent_Conditional_32_Conditional_38_Template, 4, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div", 27)(40, "p");
    i0.ɵɵtext(41, "Vous vous souvenez de votre mot de passe?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "a", 28);
    i0.ɵɵtext(43, "Retourner \u00E0 la connexion");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("type", ctx_r1.hidePassword ? "password" : "text");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.hidePassword ? "visibility_off" : "visibility");
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, ((tmp_4_0 = ctx_r1.form.get("newPassword")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx_r1.form.get("newPassword")) == null ? null : tmp_4_0.touched) ? 15 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(16, ((tmp_5_0 = ctx_r1.form.get("newPassword")) == null ? null : tmp_5_0.hasError("minlength")) && ((tmp_5_0 = ctx_r1.form.get("newPassword")) == null ? null : tmp_5_0.touched) ? 16 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("type", ctx_r1.hideConfirm ? "password" : "text");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.hideConfirm ? "visibility_off" : "visibility");
    i0.ɵɵadvance();
    i0.ɵɵconditional(26, ((tmp_8_0 = ctx_r1.form.get("confirmPassword")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx_r1.form.get("confirmPassword")) == null ? null : tmp_8_0.touched) ? 26 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(27, ctx_r1.form.hasError("passwordMismatch") && ((tmp_9_0 = ctx_r1.form.get("confirmPassword")) == null ? null : tmp_9_0.touched) ? 27 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("valid", ((tmp_10_0 = ctx_r1.form.get("newPassword")) == null ? null : tmp_10_0.value == null ? null : tmp_10_0.value.length) >= 6);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("valid", ctx_r1.form.valid && !ctx_r1.form.hasError("passwordMismatch"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.tokenValid || ctx_r1.form.invalid || ctx_r1.loading);
    i0.ɵɵadvance();
    i0.ɵɵconditional(37, ctx_r1.loading ? 37 : 38);
} }
export class ResetPasswordComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.alert = inject(AlertService);
        this.router = inject(Router);
        this.route = inject(ActivatedRoute);
        this.loading = false;
        this.validating = true;
        this.tokenValid = false;
        this.hidePassword = true;
        this.hideConfirm = true;
    }
    ngOnInit() {
        if (this.auth.isLoggedIn) {
            this.router.navigate(['/']);
            return;
        }
        this.route.queryParams.subscribe(params => {
            const token = params['token'];
            if (!token) {
                this.alert.error('Erreur', 'Token de réinitialisation manquant');
                this.router.navigate(['/auth/forgot-password']);
                return;
            }
            // Validate token
            this.auth.validateResetToken(token).subscribe({
                next: () => {
                    this.tokenValid = true;
                    this.validating = false;
                    this.form = this.fb.nonNullable.group({
                        newPassword: ['', [Validators.required, Validators.minLength(6)]],
                        confirmPassword: ['', Validators.required]
                    }, { validators: this.passwordMatchValidator });
                },
                error: () => {
                    this.validating = false;
                    this.alert.error('Erreur', 'Lien de réinitialisation expiré ou invalide');
                    this.router.navigate(['/auth/forgot-password']);
                }
            });
        });
    }
    passwordMatchValidator(group) {
        const password = group.get('newPassword');
        const confirm = group.get('confirmPassword');
        return password && confirm && password.value === confirm.value ? null : { passwordMismatch: true };
    }
    submit() {
        if (!this.tokenValid || this.form.invalid)
            return;
        if (this.form.hasError('passwordMismatch')) {
            this.alert.error('Erreur', 'Les mots de passe ne correspondent pas');
            return;
        }
        this.loading = true;
        const token = this.route.snapshot.queryParams['token'];
        const newPassword = this.form.get('newPassword')?.value;
        this.auth.resetPassword(token, newPassword).subscribe({
            next: () => {
                this.loading = false;
                this.alert.success('Succès', 'Mot de passe réinitialisé avec succès!');
                setTimeout(() => this.router.navigate(['/auth/login']), 2000);
            },
            error: err => {
                this.loading = false;
                this.alert.error('Erreur', getApiErrorMessage(err, 'Erreur lors de la réinitialisation'));
            }
        });
    }
    backToLogin() {
        this.router.navigate(['/auth/login']);
    }
    static { this.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 33, vars: 1, consts: [[1, "auth-wrapper", "reset-password-page"], [1, "auth-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "material-icons-round"], [1, "brand-features"], [1, "feature-item"], [1, "auth-form-panel"], [1, "auth-form-container"], [1, "validating-state"], ["diameter", "50"], [1, "validating-text"], [1, "error-state"], [1, "error-icon"], [1, "error-title"], [1, "error-message"], ["mat-flat-button", "", "routerLink", "/auth/forgot-password", 1, "btn-primary-modern"], [1, "form-header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "newPassword", "autocomplete", "new-password", 3, "type"], ["matPrefix", "", 1, "field-icon"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "formControlName", "confirmPassword", "autocomplete", "new-password", 3, "type"], [1, "password-requirements"], [1, "requirement-title"], ["mat-flat-button", "", "type", "submit", 1, "btn-submit", 3, "disabled"], ["diameter", "20"], [1, "form-footer"], ["routerLink", "/auth/login", 1, "login-link"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "vpn_key");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "NeoHire");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Cr\u00E9ez un nouveau mot de passe");
            i0.ɵɵelement(10, "br");
            i0.ɵɵtext(11, "pour votre compte.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5)(13, "div", 6)(14, "span", 4);
            i0.ɵɵtext(15, "check_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "Mot de passe s\u00E9curis\u00E9");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 6)(19, "span", 4);
            i0.ɵɵtext(20, "lock");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span");
            i0.ɵɵtext(22, "Chiffrement avanc\u00E9");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 6)(24, "span", 4);
            i0.ɵɵtext(25, "shield");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "span");
            i0.ɵɵtext(27, "Protection de compte");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(28, "div", 7)(29, "div", 8);
            i0.ɵɵtemplate(30, ResetPasswordComponent_Conditional_30_Template, 4, 0, "div", 9)(31, ResetPasswordComponent_Conditional_31_Template, 12, 0)(32, ResetPasswordComponent_Conditional_32_Template, 44, 15);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(30);
            i0.ɵɵconditional(30, ctx.validating ? 30 : !ctx.tokenValid ? 31 : 32);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            MatCardModule, MatFormFieldModule, i2.MatFormField, i2.MatLabel, i2.MatError, i2.MatPrefix, i2.MatSuffix, MatInputModule, i3.MatInput, MatButtonModule, i4.MatButton, i4.MatIconButton, MatIconModule, i5.MatIcon, MatProgressSpinnerModule, i6.MatProgressSpinner], styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 500px; height: 500px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 105, 0, 0.1) 0%, transparent 70%);\n    top: -150px; right: -150px;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    width: 400px; height: 400px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(252, 185, 0, 0.08) 0%, transparent 70%);\n    bottom: -100px; left: -100px;\n  }\n}\n\n.brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative; z-index: 1;\n\n  .brand-logo {\n    width: 80px; height: 80px;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    border-radius: 20px;\n    display: flex; align-items: center; justify-content: center;\n    margin-bottom: 32px;\n    box-shadow: 0 12px 40px rgba(255, 105, 0, 0.25);\n    .material-icons-round { font-size: 40px; color: #000; }\n  }\n\n  h1 {\n    font-size: 2.8rem; font-weight: 900;\n    margin: 0 0 12px 0; letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  p {\n    font-size: 1.05rem; opacity: 0.85;\n    line-height: 1.7; margin: 0 0 48px 0;\n    color: #e8e8e8;\n  }\n}\n\n.brand-features[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 14px;\n  .feature-item {\n    display: flex; align-items: center; gap: 14px;\n    background: rgba(255, 105, 0, 0.08);\n    border-radius: 14px; padding: 14px 18px;\n    border: 1px solid rgba(255, 105, 0, 0.15);\n    font-size: 0.95rem; font-weight: 500;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n    &:hover {\n      background: rgba(255, 105, 0, 0.12);\n      border-color: rgba(252, 185, 0, 0.3);\n      transform: translateX(6px);\n      box-shadow: 0 6px 20px rgba(255, 105, 0, 0.15);\n    }\n\n    .material-icons-round {\n      font-size: 22px;\n      color: #fcb900;\n      min-width: 22px;\n    }\n  }\n}\n\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex; align-items: center; justify-content: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);\n}\n\n.auth-form-container[_ngcontent-%COMP%] {\n  width: 100%; max-width: 420px;\n}\n\n.validating-state[_ngcontent-%COMP%], .error-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n}\n\n.validating-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  .validating-text {\n    font-size: 1rem;\n    color: #666;\n    font-weight: 500;\n    margin: 0;\n  }\n}\n\n.error-state[_ngcontent-%COMP%] {\n  .error-icon {\n    margin-bottom: 20px;\n\n    .material-icons-round {\n      font-size: 80px;\n      color: #dc2626;\n      opacity: 0.8;\n    }\n  }\n\n  .error-title {\n    font-size: 1.75rem;\n    font-weight: 900;\n    color: #000;\n    margin: 0 0 12px 0;\n  }\n\n  .error-message {\n    font-size: 1rem;\n    color: #666;\n    line-height: 1.6;\n    margin: 0 0 24px 0;\n  }\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n  h2 {\n    font-size: 2rem; font-weight: 900;\n    color: #000;\n    margin: 0 0 6px 0;\n    letter-spacing: -0.02em;\n  }\n  p  {\n    color: #666;\n    margin: 0;\n    font-size: 0.95rem;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 20px;\n}\n\n.field-icon[_ngcontent-%COMP%] {\n  color: #ff6900 !important;\n  font-size: 22px;\n  margin-right: 8px;\n  font-weight: 600;\n}\n\n.password-requirements[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border: 1px solid rgba(255, 105, 0, 0.1);\n  border-radius: 10px;\n  padding: 16px;\n  margin: -4px 0 12px 0;\n\n  .requirement-title {\n    font-size: 0.8rem;\n    font-weight: 700;\n    color: #666;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    margin: 0 0 10px 0;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    li {\n      font-size: 0.85rem;\n      color: #999;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      position: relative;\n\n      &::before {\n        content: '\u2713';\n        display: inline-block;\n        width: 16px;\n        height: 16px;\n        border-radius: 50%;\n        background: #f0f0f0;\n        color: #999;\n        text-align: center;\n        line-height: 16px;\n        font-size: 10px;\n        font-weight: bold;\n        flex-shrink: 0;\n      }\n\n      &.valid {\n        color: #16a34a;\n\n        &::before {\n          background: #16a34a;\n          color: #fff;\n        }\n      }\n    }\n  }\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  height: 56px;\n  background: linear-gradient(135deg, #ff6900 0%, #ff8a2e 50%, #fcb900 100%) !important;\n  color: #000 !important;\n  font-size: 1rem !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  display: flex; align-items: center; justify-content: center; gap: 8px;\n  letter-spacing: .03em;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n  box-shadow: 0 6px 25px rgba(255, 105, 0, 0.35) !important;\n  border: none !important;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent);\n    border-radius: 14px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 35px rgba(255, 105, 0, 0.45) !important;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.3) !important;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  mat-icon { font-size: 20px; font-weight: 600; }\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 28px; text-align: center;\n  p {\n    color: #666;\n    margin: 0 0 8px 0;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n  .login-link {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 0.875rem;\n    transition: all 0.2s ease;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -2px; left: 0; right: 0;\n      height: 2px;\n      background: linear-gradient(90deg, #ff6900, #fcb900);\n      transform: scaleX(0);\n      transform-origin: right;\n      transition: transform 0.3s ease;\n    }\n\n    &:hover {\n      &::after {\n        transform: scaleX(1);\n        transform-origin: left;\n      }\n    }\n  }\n}\n\n.btn-primary-modern[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  padding: 0 24px !important;\n  border-radius: 12px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(255, 105, 0, 0.25) !important;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px rgba(255, 105, 0, 0.35) !important;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n  }\n\n  mat-icon {\n    font-size: 20px;\n  }\n}\n\n  {\n  .auth-form-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mdc-text-field--filled {\n        background-color: #f8f9fa !important;\n\n        &:hover {\n          background-color: #f0f1f3 !important;\n        }\n      }\n\n      .mat-mdc-floating-label {\n        color: #666 !important;\n        font-weight: 500;\n      }\n\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n        height: 3px;\n      }\n\n      .mat-focused {\n        .mdc-line-ripple::after {\n          border-bottom-color: #ff6900 !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #ff6900 !important;\n          font-weight: 600;\n        }\n      }\n\n      .mat-error {\n        color: #dc2626 !important;\n        font-weight: 500;\n      }\n\n      .mat-mdc-icon-button {\n        color: #ff6900 !important;\n        transition: all 0.2s ease;\n\n        &:hover {\n          background-color: rgba(255, 105, 0, 0.08) !important;\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .auth-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n  .auth-form-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResetPasswordComponent, [{
        type: Component,
        args: [{ selector: 'app-reset-password', standalone: true, imports: [
                    CommonModule, ReactiveFormsModule, RouterLink,
                    MatCardModule, MatFormFieldModule, MatInputModule,
                    MatButtonModule, MatIconModule, MatProgressSpinnerModule
                ], template: "<div class=\"auth-wrapper reset-password-page\">\n  <div class=\"auth-brand\">\n    <div class=\"brand-content\">\n      <div class=\"brand-logo\">\n        <span class=\"material-icons-round\">vpn_key</span>\n      </div>\n      <h1>NeoHire</h1>\n      <p>Cr\u00E9ez un nouveau mot de passe<br>pour votre compte.</p>\n      <div class=\"brand-features\">\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">check_circle</span>\n          <span>Mot de passe s\u00E9curis\u00E9</span>\n        </div>\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">lock</span>\n          <span>Chiffrement avanc\u00E9</span>\n        </div>\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">shield</span>\n          <span>Protection de compte</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"auth-form-panel\">\n    <div class=\"auth-form-container\">\n      @if (validating) {\n        <div class=\"validating-state\">\n          <mat-spinner diameter=\"50\"></mat-spinner>\n          <p class=\"validating-text\">V\u00E9rification du lien de r\u00E9initialisation...</p>\n        </div>\n      } @else if (!tokenValid) {\n        <div class=\"error-state\">\n          <div class=\"error-icon\">\n            <span class=\"material-icons-round\">error_outline</span>\n          </div>\n          <h2 class=\"error-title\">Lien invalide ou expir\u00E9</h2>\n          <p class=\"error-message\">Le lien de r\u00E9initialisation que vous avez utilis\u00E9 est expir\u00E9 ou invalide.</p>\n          <button mat-flat-button class=\"btn-primary-modern\" routerLink=\"/auth/forgot-password\">\n            <mat-icon>refresh</mat-icon> Demander un nouveau lien\n          </button>\n        </div>\n      } @else {\n        <div class=\"form-header\">\n          <h2>Nouveau mot de passe</h2>\n          <p>Cr\u00E9ez un mot de passe fort et m\u00E9morable pour s\u00E9curiser votre compte.</p>\n        </div>\n\n        <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n          <mat-form-field>\n            <mat-label>Nouveau mot de passe</mat-label>\n            <input matInput formControlName=\"newPassword\" [type]=\"hidePassword ? 'password' : 'text'\" autocomplete=\"new-password\" />\n            <mat-icon matPrefix class=\"field-icon\">lock_outline</mat-icon>\n            <button type=\"button\" mat-icon-button matSuffix (click)=\"hidePassword = !hidePassword\">\n              <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>\n            </button>\n            @if (form.get('newPassword')?.hasError('required') && form.get('newPassword')?.touched) {\n              <mat-error>Le mot de passe est requis</mat-error>\n            }\n            @if (form.get('newPassword')?.hasError('minlength') && form.get('newPassword')?.touched) {\n              <mat-error>Le mot de passe doit contenir au moins 6 caract\u00E8res</mat-error>\n            }\n          </mat-form-field>\n\n          <mat-form-field>\n            <mat-label>Confirmer le mot de passe</mat-label>\n            <input matInput formControlName=\"confirmPassword\" [type]=\"hideConfirm ? 'password' : 'text'\" autocomplete=\"new-password\" />\n            <mat-icon matPrefix class=\"field-icon\">lock_outline</mat-icon>\n            <button type=\"button\" mat-icon-button matSuffix (click)=\"hideConfirm = !hideConfirm\">\n              <mat-icon>{{ hideConfirm ? 'visibility_off' : 'visibility' }}</mat-icon>\n            </button>\n            @if (form.get('confirmPassword')?.hasError('required') && form.get('confirmPassword')?.touched) {\n              <mat-error>Veuillez confirmer votre mot de passe</mat-error>\n            }\n            @if (form.hasError('passwordMismatch') && form.get('confirmPassword')?.touched) {\n              <mat-error>Les mots de passe ne correspondent pas</mat-error>\n            }\n          </mat-form-field>\n\n          <div class=\"password-requirements\">\n            <p class=\"requirement-title\">Exigences du mot de passe:</p>\n            <ul>\n              <li [class.valid]=\"form.get('newPassword')?.value?.length >= 6\">Au moins 6 caract\u00E8res</li>\n              <li [class.valid]=\"form.valid && !form.hasError('passwordMismatch')\">Correspond \u00E0 la confirmation</li>\n            </ul>\n          </div>\n\n          <button mat-flat-button type=\"submit\" class=\"btn-submit\" [disabled]=\"!tokenValid || form.invalid || loading\">\n            @if (loading) {\n              <mat-spinner diameter=\"20\" />\n            } @else {\n              <span>R\u00E9initialiser mon mot de passe</span>\n              <mat-icon>arrow_forward</mat-icon>\n            }\n          </button>\n        </form>\n\n        <div class=\"form-footer\">\n          <p>Vous vous souvenez de votre mot de passe?</p>\n          <a routerLink=\"/auth/login\" class=\"login-link\">Retourner \u00E0 la connexion</a>\n        </div>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".auth-wrapper {\n  display: flex;\n  min-height: 100vh;\n}\n\n.auth-brand {\n  flex: 0 0 50%;\n  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 500px; height: 500px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 105, 0, 0.1) 0%, transparent 70%);\n    top: -150px; right: -150px;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    width: 400px; height: 400px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(252, 185, 0, 0.08) 0%, transparent 70%);\n    bottom: -100px; left: -100px;\n  }\n}\n\n.brand-content {\n  color: #fff;\n  position: relative; z-index: 1;\n\n  .brand-logo {\n    width: 80px; height: 80px;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    border-radius: 20px;\n    display: flex; align-items: center; justify-content: center;\n    margin-bottom: 32px;\n    box-shadow: 0 12px 40px rgba(255, 105, 0, 0.25);\n    .material-icons-round { font-size: 40px; color: #000; }\n  }\n\n  h1 {\n    font-size: 2.8rem; font-weight: 900;\n    margin: 0 0 12px 0; letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  p {\n    font-size: 1.05rem; opacity: 0.85;\n    line-height: 1.7; margin: 0 0 48px 0;\n    color: #e8e8e8;\n  }\n}\n\n.brand-features {\n  display: flex; flex-direction: column; gap: 14px;\n  .feature-item {\n    display: flex; align-items: center; gap: 14px;\n    background: rgba(255, 105, 0, 0.08);\n    border-radius: 14px; padding: 14px 18px;\n    border: 1px solid rgba(255, 105, 0, 0.15);\n    font-size: 0.95rem; font-weight: 500;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n    &:hover {\n      background: rgba(255, 105, 0, 0.12);\n      border-color: rgba(252, 185, 0, 0.3);\n      transform: translateX(6px);\n      box-shadow: 0 6px 20px rgba(255, 105, 0, 0.15);\n    }\n\n    .material-icons-round {\n      font-size: 22px;\n      color: #fcb900;\n      min-width: 22px;\n    }\n  }\n}\n\n.auth-form-panel {\n  flex: 1;\n  display: flex; align-items: center; justify-content: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);\n}\n\n.auth-form-container {\n  width: 100%; max-width: 420px;\n}\n\n.validating-state, .error-state {\n  text-align: center;\n  padding: 40px 20px;\n}\n\n.validating-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  .validating-text {\n    font-size: 1rem;\n    color: #666;\n    font-weight: 500;\n    margin: 0;\n  }\n}\n\n.error-state {\n  .error-icon {\n    margin-bottom: 20px;\n\n    .material-icons-round {\n      font-size: 80px;\n      color: #dc2626;\n      opacity: 0.8;\n    }\n  }\n\n  .error-title {\n    font-size: 1.75rem;\n    font-weight: 900;\n    color: #000;\n    margin: 0 0 12px 0;\n  }\n\n  .error-message {\n    font-size: 1rem;\n    color: #666;\n    line-height: 1.6;\n    margin: 0 0 24px 0;\n  }\n}\n\n.form-header {\n  margin-bottom: 36px;\n  h2 {\n    font-size: 2rem; font-weight: 900;\n    color: #000;\n    margin: 0 0 6px 0;\n    letter-spacing: -0.02em;\n  }\n  p  {\n    color: #666;\n    margin: 0;\n    font-size: 0.95rem;\n    line-height: 1.5;\n    font-weight: 500;\n  }\n}\n\nform {\n  display: flex; flex-direction: column; gap: 20px;\n}\n\n.field-icon {\n  color: #ff6900 !important;\n  font-size: 22px;\n  margin-right: 8px;\n  font-weight: 600;\n}\n\n.password-requirements {\n  background: linear-gradient(135deg, #fff8f0, #fffbf0);\n  border: 1px solid rgba(255, 105, 0, 0.1);\n  border-radius: 10px;\n  padding: 16px;\n  margin: -4px 0 12px 0;\n\n  .requirement-title {\n    font-size: 0.8rem;\n    font-weight: 700;\n    color: #666;\n    text-transform: uppercase;\n    letter-spacing: 0.05em;\n    margin: 0 0 10px 0;\n  }\n\n  ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n\n    li {\n      font-size: 0.85rem;\n      color: #999;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      position: relative;\n\n      &::before {\n        content: '\u2713';\n        display: inline-block;\n        width: 16px;\n        height: 16px;\n        border-radius: 50%;\n        background: #f0f0f0;\n        color: #999;\n        text-align: center;\n        line-height: 16px;\n        font-size: 10px;\n        font-weight: bold;\n        flex-shrink: 0;\n      }\n\n      &.valid {\n        color: #16a34a;\n\n        &::before {\n          background: #16a34a;\n          color: #fff;\n        }\n      }\n    }\n  }\n}\n\n.btn-submit {\n  margin-top: 12px;\n  height: 56px;\n  background: linear-gradient(135deg, #ff6900 0%, #ff8a2e 50%, #fcb900 100%) !important;\n  color: #000 !important;\n  font-size: 1rem !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  display: flex; align-items: center; justify-content: center; gap: 8px;\n  letter-spacing: .03em;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n  box-shadow: 0 6px 25px rgba(255, 105, 0, 0.35) !important;\n  border: none !important;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent);\n    border-radius: 14px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 35px rgba(255, 105, 0, 0.45) !important;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.3) !important;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  mat-icon { font-size: 20px; font-weight: 600; }\n}\n\n.form-footer {\n  margin-top: 28px; text-align: center;\n  p {\n    color: #666;\n    margin: 0 0 8px 0;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n  .login-link {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 0.875rem;\n    transition: all 0.2s ease;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -2px; left: 0; right: 0;\n      height: 2px;\n      background: linear-gradient(90deg, #ff6900, #fcb900);\n      transform: scaleX(0);\n      transform-origin: right;\n      transition: transform 0.3s ease;\n    }\n\n    &:hover {\n      &::after {\n        transform: scaleX(1);\n        transform-origin: left;\n      }\n    }\n  }\n}\n\n.btn-primary-modern {\n  background: linear-gradient(135deg, #ff6900, #fcb900) !important;\n  color: #000 !important;\n  font-weight: 700 !important;\n  height: 48px !important;\n  padding: 0 24px !important;\n  border-radius: 12px !important;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-shadow: 0 6px 20px rgba(255, 105, 0, 0.25) !important;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 30px rgba(255, 105, 0, 0.35) !important;\n  }\n\n  &:disabled {\n    opacity: 0.6;\n  }\n\n  mat-icon {\n    font-size: 20px;\n  }\n}\n\n::ng-deep {\n  .auth-form-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mdc-text-field--filled {\n        background-color: #f8f9fa !important;\n\n        &:hover {\n          background-color: #f0f1f3 !important;\n        }\n      }\n\n      .mat-mdc-floating-label {\n        color: #666 !important;\n        font-weight: 500;\n      }\n\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n        height: 3px;\n      }\n\n      .mat-focused {\n        .mdc-line-ripple::after {\n          border-bottom-color: #ff6900 !important;\n        }\n\n        .mat-mdc-floating-label {\n          color: #ff6900 !important;\n          font-weight: 600;\n        }\n      }\n\n      .mat-error {\n        color: #dc2626 !important;\n        font-weight: 500;\n      }\n\n      .mat-mdc-icon-button {\n        color: #ff6900 !important;\n        transition: all 0.2s ease;\n\n        &:hover {\n          background-color: rgba(255, 105, 0, 0.08) !important;\n        }\n      }\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .auth-brand {\n    display: none;\n  }\n  .auth-form-panel {\n    padding: 40px 24px;\n  }\n  .auth-form-container {\n    max-width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "app\\features\\auth\\reset-password\\reset-password.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=reset-password.component.js.map