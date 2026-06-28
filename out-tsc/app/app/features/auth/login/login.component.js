import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
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
function LoginComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Adresse e-mail invalide");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "L'e-mail est requis");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Le mot de passe est requis");
    i0.ɵɵelementEnd();
} }
function LoginComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 17);
} }
function LoginComponent_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Se connecter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_forward");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    constructor() {
        this.fb = inject(FormBuilder);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.alertSvc = inject(AlertService);
        this.loading = false;
        this.hidePassword = true;
    }
    ngOnInit() {
        if (this.auth.isLoggedIn) {
            this.auth.redirectToDashboard();
            return;
        }
        this.form = this.fb.nonNullable.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    submit() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        this.auth.login(this.form.getRawValue()).subscribe({
            next: () => { this.auth.redirectToDashboard(); },
            error: err => {
                this.loading = false;
                this.alertSvc.error('Erreur', getApiErrorMessage(err, 'Identifiants incorrects'));
            }
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["app-login"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 64, vars: 8, consts: [[1, "auth-wrapper"], [1, "auth-brand"], [1, "brand-content"], [1, "brand-logo"], [1, "material-icons-round"], [1, "brand-features"], [1, "feature-item"], [1, "auth-form-panel"], [1, "auth-form-container"], [1, "form-header"], ["novalidate", "", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "vous@exemple.com", "autocomplete", "email"], ["matPrefix", "", 1, "field-icon"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "click"], ["routerLink", "/auth/forgot-password", 1, "forgot-password-link"], ["mat-flat-button", "", "type", "submit", 1, "btn-submit", 3, "disabled"], ["diameter", "20"], [1, "form-footer"], ["routerLink", "/auth/register", 1, "register-link"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
            i0.ɵɵtext(5, "rocket_launch");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "h1");
            i0.ɵɵtext(7, "NeoHire");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "La plateforme IA qui r\u00E9volutionne");
            i0.ɵɵelement(10, "br");
            i0.ɵɵtext(11, "le recrutement des talents.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 5)(13, "div", 6)(14, "span", 4);
            i0.ɵɵtext(15, "psychology");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "span");
            i0.ɵɵtext(17, "Matching IA ultra-pr\u00E9cis");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "div", 6)(19, "span", 4);
            i0.ɵɵtext(20, "bolt");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "span");
            i0.ɵɵtext(22, "Recrutement 5\u00D7 plus rapide");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "div", 6)(24, "span", 4);
            i0.ɵɵtext(25, "verified_user");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "span");
            i0.ɵɵtext(27, "Candidats pr\u00E9-qualifi\u00E9s");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(28, "div", 7)(29, "div", 8)(30, "div", 9)(31, "h2");
            i0.ɵɵtext(32, "Bienvenue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p");
            i0.ɵɵtext(34, "Connectez-vous \u00E0 NeoHire");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "form", 10);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_35_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(36, "mat-form-field")(37, "mat-label");
            i0.ɵɵtext(38, "Adresse e-mail");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(39, "input", 11);
            i0.ɵɵelementStart(40, "mat-icon", 12);
            i0.ɵɵtext(41, "mail_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(42, LoginComponent_Conditional_42_Template, 2, 0, "mat-error")(43, LoginComponent_Conditional_43_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "mat-form-field")(45, "mat-label");
            i0.ɵɵtext(46, "Mot de passe");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(47, "input", 13);
            i0.ɵɵelementStart(48, "mat-icon", 12);
            i0.ɵɵtext(49, "lock_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "button", 14);
            i0.ɵɵlistener("click", function LoginComponent_Template_button_click_50_listener() { return ctx.hidePassword = !ctx.hidePassword; });
            i0.ɵɵelementStart(51, "mat-icon");
            i0.ɵɵtext(52);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(53, LoginComponent_Conditional_53_Template, 2, 0, "mat-error");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "a", 15);
            i0.ɵɵtext(55, " Mot de passe oubli\u00E9? ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "button", 16);
            i0.ɵɵtemplate(57, LoginComponent_Conditional_57_Template, 1, 0, "mat-spinner", 17)(58, LoginComponent_Conditional_58_Template, 4, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "div", 18)(60, "p");
            i0.ɵɵtext(61, "Vous n'avez pas encore de compte ?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "a", 19);
            i0.ɵɵtext(63, "Cr\u00E9er un compte gratuitement");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_5_0;
            i0.ɵɵadvance(35);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(42, ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.hasError("email")) && ((tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.touched) ? 42 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(43, ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.hasError("required")) && ((tmp_2_0 = ctx.form.get("email")) == null ? null : tmp_2_0.touched) ? 43 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("type", ctx.hidePassword ? "password" : "text");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.hidePassword ? "visibility_off" : "visibility");
            i0.ɵɵadvance();
            i0.ɵɵconditional(53, ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.form.get("password")) == null ? null : tmp_5_0.touched) ? 53 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.loading);
            i0.ɵɵadvance();
            i0.ɵɵconditional(57, ctx.loading ? 57 : 58);
        } }, dependencies: [CommonModule, ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            MatCardModule, MatFormFieldModule, i2.MatFormField, i2.MatLabel, i2.MatError, i2.MatPrefix, i2.MatSuffix, MatInputModule, i3.MatInput, MatButtonModule, i4.MatButton, i4.MatIconButton, MatIconModule, i5.MatIcon, MatProgressSpinnerModule, i6.MatProgressSpinner], styles: [".auth-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  flex: 0 0 50%;\n  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 500px; height: 500px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 105, 0, 0.1) 0%, transparent 70%);\n    top: -150px; right: -150px;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    width: 400px; height: 400px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(252, 185, 0, 0.08) 0%, transparent 70%);\n    bottom: -100px; left: -100px;\n  }\n}\n\n.brand-content[_ngcontent-%COMP%] {\n  color: #fff;\n  position: relative; z-index: 1;\n\n  .brand-logo {\n    width: 80px; height: 80px;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    border-radius: 20px;\n    display: flex; align-items: center; justify-content: center;\n    margin-bottom: 32px;\n    box-shadow: 0 12px 40px rgba(255, 105, 0, 0.25);\n    .material-icons-round { font-size: 40px; color: #000; }\n  }\n\n  h1 {\n    font-size: 2.8rem; font-weight: 900;\n    margin: 0 0 12px 0; letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  p {\n    font-size: 1.05rem; opacity: 0.85;\n    line-height: 1.7; margin: 0 0 48px 0;\n    color: #e8e8e8;\n  }\n}\n\n.brand-features[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 14px;\n  .feature-item {\n    display: flex; align-items: center; gap: 14px;\n    background: rgba(255, 105, 0, 0.08);\n    border-radius: 14px; padding: 14px 18px;\n    border: 1px solid rgba(255, 105, 0, 0.15);\n    font-size: 0.95rem; font-weight: 500;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n    &:hover {\n      background: rgba(255, 105, 0, 0.12);\n      border-color: rgba(252, 185, 0, 0.3);\n      transform: translateX(6px);\n      box-shadow: 0 6px 20px rgba(255, 105, 0, 0.15);\n    }\n\n    .material-icons-round {\n      font-size: 22px;\n      color: #fcb900;\n      min-width: 22px;\n    }\n  }\n}\n\n.auth-form-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex; align-items: center; justify-content: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);\n}\n\n.auth-form-container[_ngcontent-%COMP%] {\n  width: 100%; max-width: 420px;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  margin-bottom: 36px;\n  h2 {\n    font-size: 2rem; font-weight: 900;\n    color: #000;\n    margin: 0 0 6px 0;\n    letter-spacing: -0.02em;\n  }\n  p  {\n    color: #999;\n    margin: 0;\n    font-size: 0.95rem;\n    font-weight: 500;\n  }\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; gap: 20px;\n}\n\n.field-icon[_ngcontent-%COMP%] {\n  color: #ff6900 !important;\n  font-size: 22px;\n  margin-right: 8px;\n  font-weight: 600;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  height: 56px;\n  background: linear-gradient(135deg, #ff6900 0%, #ff8a2e 50%, #fcb900 100%) !important;\n  color: #000 !important;\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  display: flex; align-items: center; justify-content: center; gap: 8px;\n  letter-spacing: .03em;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n  box-shadow: 0 6px 25px rgba(255, 105, 0, 0.35) !important;\n  border: none !important;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent);\n    border-radius: 14px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 35px rgba(255, 105, 0, 0.45) !important;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.3) !important;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  mat-icon { font-size: 22px; font-weight: 600; }\n}\n\n.forgot-password-link[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #ff6900;\n  text-decoration: none;\n  align-self: flex-end;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  margin-top: -12px;\n\n  &:hover {\n    color: #fcb900;\n    text-decoration: underline;\n  }\n}\n\n.form-footer[_ngcontent-%COMP%] {\n  margin-top: 28px; text-align: center;\n  p {\n    color: #999;\n    margin: 0 0 8px 0;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n  .register-link {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 0.875rem;\n    transition: all 0.2s ease;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -2px; left: 0; right: 0;\n      height: 2px;\n      background: linear-gradient(90deg, #ff6900, #fcb900);\n      transform: scaleX(0);\n      transform-origin: right;\n      transition: transform 0.3s ease;\n    }\n\n    &:hover {\n      &::after {\n        transform: scaleX(1);\n        transform-origin: left;\n      }\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   Material[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   field[_ngcontent-%COMP%]   overrides[_ngcontent-%COMP%]   for[_ngcontent-%COMP%]   NeoHire[_ngcontent-%COMP%]   theme\n[_ngcontent-%COMP%]  {\n  .auth-form-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mat-mdc-text-field-wrapper {\n        padding-bottom: 0.5em;\n      }\n    }\n\n    .mdc-text-field--filled {\n      background-color: #ffffff !important;\n      border-radius: 12px 12px 0 0;\n      transition: all 0.2s ease;\n    }\n\n    .mdc-text-field--filled:hover {\n      background-color: #fafafa !important;\n    }\n\n    .mdc-line-ripple::after {\n      border-bottom-color: #ff6900 !important;\n      height: 3px;\n    }\n\n    .mat-mdc-form-field-focus-overlay {\n      background-color: rgba(255, 105, 0, 0.05) !important;\n    }\n\n    .mat-mdc-form-field.mat-focused {\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n      }\n\n      .mat-mdc-floating-label {\n        color: #ff6900 !important;\n        font-weight: 600;\n      }\n    }\n\n    .mat-mdc-floating-label {\n      color: #666 !important;\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n\n    .mat-error {\n      color: #e74c3c !important;\n      font-size: 0.75rem !important;\n      font-weight: 500;\n    }\n\n    .mat-mdc-icon-button {\n      color: #ff6900 !important;\n      transition: all 0.2s ease;\n\n      &:hover {\n        background-color: rgba(255, 105, 0, 0.08) !important;\n      }\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .auth-brand[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .auth-form-panel[_ngcontent-%COMP%] {\n    padding: 40px 24px;\n  }\n  .auth-form-container[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'app-login', standalone: true, imports: [
                    CommonModule, ReactiveFormsModule, RouterLink,
                    MatCardModule, MatFormFieldModule, MatInputModule,
                    MatButtonModule, MatIconModule, MatProgressSpinnerModule
                ], template: "<div class=\"auth-wrapper\">\n  <div class=\"auth-brand\">\n    <div class=\"brand-content\">\n      <div class=\"brand-logo\">\n        <span class=\"material-icons-round\">rocket_launch</span>\n      </div>\n      <h1>NeoHire</h1>\n      <p>La plateforme IA qui r\u00E9volutionne<br>le recrutement des talents.</p>\n      <div class=\"brand-features\">\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">psychology</span>\n          <span>Matching IA ultra-pr\u00E9cis</span>\n        </div>\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">bolt</span>\n          <span>Recrutement 5\u00D7 plus rapide</span>\n        </div>\n        <div class=\"feature-item\">\n          <span class=\"material-icons-round\">verified_user</span>\n          <span>Candidats pr\u00E9-qualifi\u00E9s</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"auth-form-panel\">\n    <div class=\"auth-form-container\">\n      <div class=\"form-header\">\n        <h2>Bienvenue</h2>\n        <p>Connectez-vous \u00E0 NeoHire</p>\n      </div>\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <mat-form-field>\n          <mat-label>Adresse e-mail</mat-label>\n          <input matInput formControlName=\"email\" type=\"email\" placeholder=\"vous@exemple.com\" autocomplete=\"email\" />\n          <mat-icon matPrefix class=\"field-icon\">mail_outline</mat-icon>\n          @if (form.get('email')?.hasError('email') && form.get('email')?.touched) {\n            <mat-error>Adresse e-mail invalide</mat-error>\n          }\n          @if (form.get('email')?.hasError('required') && form.get('email')?.touched) {\n            <mat-error>L'e-mail est requis</mat-error>\n          }\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-label>Mot de passe</mat-label>\n          <input matInput formControlName=\"password\" [type]=\"hidePassword ? 'password' : 'text'\" autocomplete=\"current-password\" />\n          <mat-icon matPrefix class=\"field-icon\">lock_outline</mat-icon>\n          <button type=\"button\" mat-icon-button matSuffix (click)=\"hidePassword = !hidePassword\">\n            <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>\n          </button>\n          @if (form.get('password')?.hasError('required') && form.get('password')?.touched) {\n            <mat-error>Le mot de passe est requis</mat-error>\n          }\n        </mat-form-field>\n\n        <a routerLink=\"/auth/forgot-password\" class=\"forgot-password-link\">\n          Mot de passe oubli\u00E9?\n        </a>\n\n        <button mat-flat-button type=\"submit\" class=\"btn-submit\" [disabled]=\"loading\">\n          @if (loading) {\n            <mat-spinner diameter=\"20\" />\n          } @else {\n            <span>Se connecter</span>\n            <mat-icon>arrow_forward</mat-icon>\n          }\n        </button>\n      </form>\n\n      <div class=\"form-footer\">\n        <p>Vous n'avez pas encore de compte ?</p>\n        <a routerLink=\"/auth/register\" class=\"register-link\">Cr\u00E9er un compte gratuitement</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n", styles: [".auth-wrapper {\n  display: flex;\n  min-height: 100vh;\n}\n\n.auth-brand {\n  flex: 0 0 50%;\n  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 60px 40px;\n  position: relative;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 500px; height: 500px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(255, 105, 0, 0.1) 0%, transparent 70%);\n    top: -150px; right: -150px;\n  }\n  &::after {\n    content: '';\n    position: absolute;\n    width: 400px; height: 400px;\n    border-radius: 50%;\n    background: radial-gradient(circle, rgba(252, 185, 0, 0.08) 0%, transparent 70%);\n    bottom: -100px; left: -100px;\n  }\n}\n\n.brand-content {\n  color: #fff;\n  position: relative; z-index: 1;\n\n  .brand-logo {\n    width: 80px; height: 80px;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    border-radius: 20px;\n    display: flex; align-items: center; justify-content: center;\n    margin-bottom: 32px;\n    box-shadow: 0 12px 40px rgba(255, 105, 0, 0.25);\n    .material-icons-round { font-size: 40px; color: #000; }\n  }\n\n  h1 {\n    font-size: 2.8rem; font-weight: 900;\n    margin: 0 0 12px 0; letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n\n  p {\n    font-size: 1.05rem; opacity: 0.85;\n    line-height: 1.7; margin: 0 0 48px 0;\n    color: #e8e8e8;\n  }\n}\n\n.brand-features {\n  display: flex; flex-direction: column; gap: 14px;\n  .feature-item {\n    display: flex; align-items: center; gap: 14px;\n    background: rgba(255, 105, 0, 0.08);\n    border-radius: 14px; padding: 14px 18px;\n    border: 1px solid rgba(255, 105, 0, 0.15);\n    font-size: 0.95rem; font-weight: 500;\n    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);\n\n    &:hover {\n      background: rgba(255, 105, 0, 0.12);\n      border-color: rgba(252, 185, 0, 0.3);\n      transform: translateX(6px);\n      box-shadow: 0 6px 20px rgba(255, 105, 0, 0.15);\n    }\n\n    .material-icons-round {\n      font-size: 22px;\n      color: #fcb900;\n      min-width: 22px;\n    }\n  }\n}\n\n.auth-form-panel {\n  flex: 1;\n  display: flex; align-items: center; justify-content: center;\n  padding: 60px 40px;\n  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);\n}\n\n.auth-form-container {\n  width: 100%; max-width: 420px;\n}\n\n.form-header {\n  margin-bottom: 36px;\n  h2 {\n    font-size: 2rem; font-weight: 900;\n    color: #000;\n    margin: 0 0 6px 0;\n    letter-spacing: -0.02em;\n  }\n  p  {\n    color: #999;\n    margin: 0;\n    font-size: 0.95rem;\n    font-weight: 500;\n  }\n}\n\nform {\n  display: flex; flex-direction: column; gap: 20px;\n}\n\n.field-icon {\n  color: #ff6900 !important;\n  font-size: 22px;\n  margin-right: 8px;\n  font-weight: 600;\n}\n\n.btn-submit {\n  margin-top: 16px;\n  height: 56px;\n  background: linear-gradient(135deg, #ff6900 0%, #ff8a2e 50%, #fcb900 100%) !important;\n  color: #000 !important;\n  font-size: 1.05rem !important;\n  font-weight: 700 !important;\n  border-radius: 14px !important;\n  display: flex; align-items: center; justify-content: center; gap: 8px;\n  letter-spacing: .03em;\n  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n  box-shadow: 0 6px 25px rgba(255, 105, 0, 0.35) !important;\n  border: none !important;\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0; left: 0; right: 0; bottom: 0;\n    background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3), transparent);\n    border-radius: 14px;\n    opacity: 0;\n    transition: opacity 0.3s ease;\n  }\n\n  &:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 35px rgba(255, 105, 0, 0.45) !important;\n\n    &::before {\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    transform: translateY(-1px);\n    box-shadow: 0 4px 15px rgba(255, 105, 0, 0.3) !important;\n  }\n\n  &:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  mat-icon { font-size: 22px; font-weight: 600; }\n}\n\n.forgot-password-link {\n  font-size: 0.85rem;\n  color: #ff6900;\n  text-decoration: none;\n  align-self: flex-end;\n  transition: all 0.2s ease;\n  font-weight: 500;\n  margin-top: -12px;\n\n  &:hover {\n    color: #fcb900;\n    text-decoration: underline;\n  }\n}\n\n.form-footer {\n  margin-top: 28px; text-align: center;\n  p {\n    color: #999;\n    margin: 0 0 8px 0;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n  .register-link {\n    background: linear-gradient(135deg, #ff6900, #fcb900);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    font-weight: 700;\n    text-decoration: none;\n    font-size: 0.875rem;\n    transition: all 0.2s ease;\n    position: relative;\n\n    &::after {\n      content: '';\n      position: absolute;\n      bottom: -2px; left: 0; right: 0;\n      height: 2px;\n      background: linear-gradient(90deg, #ff6900, #fcb900);\n      transform: scaleX(0);\n      transform-origin: right;\n      transition: transform 0.3s ease;\n    }\n\n    &:hover {\n      &::after {\n        transform: scaleX(1);\n        transform-origin: left;\n      }\n    }\n  }\n}\n\n// Material form field overrides for NeoHire theme\n::ng-deep {\n  .auth-form-container {\n    .mat-mdc-form-field {\n      width: 100%;\n\n      .mat-mdc-text-field-wrapper {\n        padding-bottom: 0.5em;\n      }\n    }\n\n    .mdc-text-field--filled {\n      background-color: #ffffff !important;\n      border-radius: 12px 12px 0 0;\n      transition: all 0.2s ease;\n    }\n\n    .mdc-text-field--filled:hover {\n      background-color: #fafafa !important;\n    }\n\n    .mdc-line-ripple::after {\n      border-bottom-color: #ff6900 !important;\n      height: 3px;\n    }\n\n    .mat-mdc-form-field-focus-overlay {\n      background-color: rgba(255, 105, 0, 0.05) !important;\n    }\n\n    .mat-mdc-form-field.mat-focused {\n      .mdc-line-ripple::after {\n        border-bottom-color: #ff6900 !important;\n      }\n\n      .mat-mdc-floating-label {\n        color: #ff6900 !important;\n        font-weight: 600;\n      }\n    }\n\n    .mat-mdc-floating-label {\n      color: #666 !important;\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n\n    .mat-error {\n      color: #e74c3c !important;\n      font-size: 0.75rem !important;\n      font-weight: 500;\n    }\n\n    .mat-mdc-icon-button {\n      color: #ff6900 !important;\n      transition: all 0.2s ease;\n\n      &:hover {\n        background-color: rgba(255, 105, 0, 0.08) !important;\n      }\n    }\n  }\n}\n\n@media (max-width: 768px) {\n  .auth-brand {\n    display: none;\n  }\n  .auth-form-panel {\n    padding: 40px 24px;\n  }\n  .auth-form-container {\n    max-width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "app\\features\\auth\\login\\login.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=login.component.js.map