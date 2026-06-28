import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/progress-spinner";
import * as i8 from "@angular/material/tabs";
import * as i9 from "@angular/material/tooltip";
function EnterpriseProfileComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "mat-spinner", 1);
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.profile.profilePicture, i0.ɵɵsanitizeUrl);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 45)(1, "mat-icon");
    i0.ɵɵtext(2, "business");
    i0.ɵɵelementEnd()();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 8);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "photo_camera");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11)(1, "mat-icon");
    i0.ɵɵtext(2, "star");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Premium ");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Requis ");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Requis ");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Minimum 6 caract\u00E8res ");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Requis ");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Minimum 6 caract\u00E8res ");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 44);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "lock");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_90_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h3", 17)(2, "mat-icon");
    i0.ɵɵtext(3, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Changer de mot de passe ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "form", 46);
    i0.ɵɵlistener("ngSubmit", function EnterpriseProfileComponent_Conditional_1_Conditional_90_Template_form_ngSubmit_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changePassword()); });
    i0.ɵɵelementStart(6, "mat-form-field", 26)(7, "mat-label");
    i0.ɵɵtext(8, "Ancien mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-icon", 20);
    i0.ɵɵtext(10, "password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 47);
    i0.ɵɵtemplate(12, EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_12_Template, 2, 0, "mat-error", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-form-field", 26)(14, "mat-label");
    i0.ɵɵtext(15, "Nouveau mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-icon", 20);
    i0.ɵɵtext(17, "vpn_key");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 49);
    i0.ɵɵtemplate(19, EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_19_Template, 2, 0, "mat-error", 48)(20, EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_20_Template, 2, 0, "mat-error", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "mat-form-field", 26)(22, "mat-label");
    i0.ɵɵtext(23, "Confirmer mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-icon", 20);
    i0.ɵɵtext(25, "vpn_key");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 50);
    i0.ɵɵtemplate(27, EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_27_Template, 2, 0, "mat-error", 48)(28, EnterpriseProfileComponent_Conditional_1_Conditional_90_mat_error_28_Template, 2, 0, "mat-error", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 51)(30, "button", 43);
    i0.ɵɵtemplate(31, EnterpriseProfileComponent_Conditional_1_Conditional_90_Conditional_31_Template, 1, 0, "mat-spinner", 44)(32, EnterpriseProfileComponent_Conditional_1_Conditional_90_Conditional_32_Template, 2, 0);
    i0.ɵɵtext(33, " Changer mot de passe ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 52);
    i0.ɵɵlistener("click", function EnterpriseProfileComponent_Conditional_1_Conditional_90_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.showChangePassword = false; return i0.ɵɵresetView(ctx_r1.changePasswordForm.reset()); });
    i0.ɵɵelementStart(35, "mat-icon");
    i0.ɵɵtext(36, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(37, " Annuler ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("formGroup", ctx_r1.changePasswordForm);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (tmp_3_0 = ctx_r1.changePasswordForm.get("oldPassword")) == null ? null : tmp_3_0.hasError("required"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (tmp_4_0 = ctx_r1.changePasswordForm.get("newPassword")) == null ? null : tmp_4_0.hasError("required"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_5_0 = ctx_r1.changePasswordForm.get("newPassword")) == null ? null : tmp_5_0.hasError("minlength"));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", (tmp_6_0 = ctx_r1.changePasswordForm.get("confirmPassword")) == null ? null : tmp_6_0.hasError("required"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (tmp_7_0 = ctx_r1.changePasswordForm.get("confirmPassword")) == null ? null : tmp_7_0.hasError("minlength"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.changingPassword || ctx_r1.changePasswordForm.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(31, ctx_r1.changingPassword ? 31 : 32);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_91_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h3", 17)(2, "mat-icon");
    i0.ɵɵtext(3, "shield");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " S\u00E9curit\u00E9 du compte ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 53);
    i0.ɵɵtext(6, " G\u00E9rez les param\u00E8tres de s\u00E9curit\u00E9 de votre compte entreprise ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 54);
    i0.ɵɵlistener("click", function EnterpriseProfileComponent_Conditional_1_Conditional_91_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showChangePassword = true); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "vpn_key");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Changer mot de passe ");
    i0.ɵɵelementEnd()();
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_121_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56)(1, "mat-icon", 59);
    i0.ɵɵtext(2, " people ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 58);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", (tmp_3_0 = ctx_r1.form.get("companySize")) == null ? null : tmp_3_0.value, " employ\u00E9s ");
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_121_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56)(1, "mat-icon", 59);
    i0.ɵɵtext(2, " security ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 60);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" SIRET: ", ctx_r1.maskSiret((tmp_3_0 = ctx_r1.form.get("siretNumber")) == null ? null : tmp_3_0.value), " ");
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_121_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 36)(1, "span", 37);
    i0.ɵɵtext(2, "Informations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 55)(4, "div", 56)(5, "mat-icon", 57);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 58);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, EnterpriseProfileComponent_Conditional_1_Conditional_121_Conditional_9_Template, 5, 1, "div", 56)(10, EnterpriseProfileComponent_Conditional_1_Conditional_121_Conditional_10_Template, 5, 1, "div", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("color", ctx_r1.getSectorColor());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getSectorIcon(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", (tmp_4_0 = ctx_r1.form.get("companySector")) == null ? null : tmp_4_0.value, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(9, ((tmp_5_0 = ctx_r1.form.get("companySize")) == null ? null : tmp_5_0.value) ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(10, ((tmp_6_0 = ctx_r1.form.get("siretNumber")) == null ? null : tmp_6_0.value) ? 10 : -1);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_126_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 41)(1, "mat-icon");
    i0.ɵɵtext(2, "language");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Site web ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", (tmp_2_0 = ctx_r1.form.get("companyWebsite")) == null ? null : tmp_2_0.value, i0.ɵɵsanitizeUrl);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_127_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 41)(1, "mat-icon");
    i0.ɵɵtext(2, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " LinkedIn ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("href", (tmp_2_0 = ctx_r1.form.get("enterpriseLinkedinUrl")) == null ? null : tmp_2_0.value, i0.ɵɵsanitizeUrl);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_130_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 44);
} }
function EnterpriseProfileComponent_Conditional_1_Conditional_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "save");
    i0.ɵɵelementEnd();
} }
function EnterpriseProfileComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("ngSubmit", function EnterpriseProfileComponent_Conditional_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    i0.ɵɵtemplate(4, EnterpriseProfileComponent_Conditional_1_Conditional_4_Template, 1, 1, "img", 6)(5, EnterpriseProfileComponent_Conditional_1_Conditional_5_Template, 3, 0);
    i0.ɵɵelementStart(6, "label", 7);
    i0.ɵɵtemplate(7, EnterpriseProfileComponent_Conditional_1_Conditional_7_Template, 1, 0, "mat-spinner", 8)(8, EnterpriseProfileComponent_Conditional_1_Conditional_8_Template, 2, 0);
    i0.ɵɵelementStart(9, "input", 9);
    i0.ɵɵlistener("change", function EnterpriseProfileComponent_Conditional_1_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPhotoSelect($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 10)(11, "h1");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, EnterpriseProfileComponent_Conditional_1_Conditional_15_Template, 4, 0, "span", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 12)(17, "div", 13)(18, "mat-tab-group", 14);
    i0.ɵɵtwoWayListener("selectedIndexChange", function EnterpriseProfileComponent_Conditional_1_Template_mat_tab_group_selectedIndexChange_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedTabIndex, $event) || (ctx_r1.selectedTabIndex = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(19, "mat-tab", 15)(20, "div", 16)(21, "h3", 17)(22, "mat-icon");
    i0.ɵɵtext(23, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Informations de contact ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 18)(26, "mat-form-field", 19)(27, "mat-label");
    i0.ɵɵtext(28, "Nom du responsable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "mat-icon", 20);
    i0.ɵɵtext(30, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(31, "input", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "mat-form-field", 19)(33, "mat-label");
    i0.ɵɵtext(34, "T\u00E9l\u00E9phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "mat-icon", 20);
    i0.ɵɵtext(36, "phone");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(37, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "mat-form-field", 19)(39, "mat-label");
    i0.ɵɵtext(40, "Ville");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "mat-icon", 20);
    i0.ɵɵtext(42, "location_city");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "input", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "mat-form-field", 19)(45, "mat-label");
    i0.ɵɵtext(46, "Pays");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "mat-icon", 20);
    i0.ɵɵtext(48, "public");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(49, "input", 24);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(50, "mat-tab", 25)(51, "div", 16)(52, "h3", 17)(53, "mat-icon");
    i0.ɵɵtext(54, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(55, " Informations entreprise ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 18)(57, "mat-form-field", 26)(58, "mat-label");
    i0.ɵɵtext(59, "Nom de l'entreprise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "mat-icon", 20);
    i0.ɵɵtext(61, "badge");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(62, "input", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "mat-form-field", 26)(64, "mat-label");
    i0.ɵɵtext(65, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(66, "textarea", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(67, "app-select", 29)(68, "app-select", 30);
    i0.ɵɵelementStart(69, "mat-form-field", 26)(70, "mat-label");
    i0.ɵɵtext(71, "Site web");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "mat-icon", 20);
    i0.ɵɵtext(73, "language");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(74, "input", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "mat-form-field", 26)(76, "mat-label");
    i0.ɵɵtext(77, "Num\u00E9ro SIRET");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "mat-icon", 20);
    i0.ɵɵtext(79, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(80, "input", 32);
    i0.ɵɵelementStart(81, "mat-hint");
    i0.ɵɵtext(82, "S\u00E9curis\u00E9 et confidentiel");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(83, "mat-form-field", 26)(84, "mat-label");
    i0.ɵɵtext(85, "LinkedIn entreprise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "mat-icon", 20);
    i0.ɵɵtext(87, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(88, "input", 33);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(89, "mat-tab", 34);
    i0.ɵɵtemplate(90, EnterpriseProfileComponent_Conditional_1_Conditional_90_Template, 38, 8, "div", 16)(91, EnterpriseProfileComponent_Conditional_1_Conditional_91_Template, 11, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(92, "div", 35)(93, "div", 36)(94, "span", 37);
    i0.ɵɵtext(95, "Annonces actives");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "span", 38);
    i0.ɵɵtext(97);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "span", 39);
    i0.ɵɵtext(99, "offres publi\u00E9es");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(100, "div", 36)(101, "span", 37);
    i0.ɵɵtext(102, "Candidatures");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "span", 38);
    i0.ɵɵtext(104);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(105, "span", 39);
    i0.ɵɵtext(106, "re\u00E7ues");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(107, "div", 36)(108, "span", 37);
    i0.ɵɵtext(109, "Embauches");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(110, "span", 38);
    i0.ɵɵtext(111);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "span", 39);
    i0.ɵɵtext(113, "candidats accept\u00E9s");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(114, "div", 36)(115, "span", 37);
    i0.ɵɵtext(116, "Visibilit\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "span", 38);
    i0.ɵɵtext(118);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "span", 39);
    i0.ɵɵtext(120, "consultations du profil");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(121, EnterpriseProfileComponent_Conditional_1_Conditional_121_Template, 11, 6, "div", 36);
    i0.ɵɵelementStart(122, "div", 36)(123, "span", 37);
    i0.ɵɵtext(124, "R\u00E9seaux & Web");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "div", 40);
    i0.ɵɵtemplate(126, EnterpriseProfileComponent_Conditional_1_Conditional_126_Template, 4, 1, "a", 41)(127, EnterpriseProfileComponent_Conditional_1_Conditional_127_Template, 4, 1, "a", 41);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(128, "div", 42)(129, "button", 43);
    i0.ɵɵtemplate(130, EnterpriseProfileComponent_Conditional_1_Conditional_130_Template, 1, 0, "mat-spinner", 44)(131, EnterpriseProfileComponent_Conditional_1_Conditional_131_Template, 2, 0);
    i0.ɵɵtext(132, " Enregistrer les modifications ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_17_0;
    let tmp_18_0;
    let tmp_19_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.form);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(4, (ctx_r1.profile == null ? null : ctx_r1.profile.profilePicture) ? 4 : 5);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("loading", ctx_r1.uploadingPhoto);
    i0.ɵɵadvance();
    i0.ɵɵconditional(7, ctx_r1.uploadingPhoto ? 7 : 8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.uploadingPhoto);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((ctx_r1.profile == null ? null : ctx_r1.profile.companyName) || "Profil Entreprise");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((ctx_r1.profile == null ? null : ctx_r1.profile.companySector) || "Secteur");
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, (ctx_r1.profile == null ? null : ctx_r1.profile.premium) ? 15 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("selectedIndex", ctx_r1.selectedTabIndex);
    i0.ɵɵadvance(49);
    i0.ɵɵproperty("options", ctx_r1.sectorOpts);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r1.companySizeOpts);
    i0.ɵɵadvance(22);
    i0.ɵɵconditional(90, ctx_r1.showChangePassword ? 90 : 91);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.companyStats.offersCount);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.companyStats.applicationsCount);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.companyStats.acceptedCandidatesCount);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.companyStats.profileViewsCount);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(121, ((tmp_17_0 = ctx_r1.form.get("companySector")) == null ? null : tmp_17_0.value) ? 121 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(126, ((tmp_18_0 = ctx_r1.form.get("companyWebsite")) == null ? null : tmp_18_0.value) ? 126 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(127, ((tmp_19_0 = ctx_r1.form.get("enterpriseLinkedinUrl")) == null ? null : tmp_19_0.value) ? 127 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.saving || ctx_r1.form.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(130, ctx_r1.saving ? 130 : 131);
} }
export class EnterpriseProfileComponent {
    constructor() {
        this.userSvc = inject(UserService);
        this.authSvc = inject(AuthService);
        this.alertSvc = inject(AlertService);
        this.fb = inject(FormBuilder);
        this.loading = true;
        this.saving = false;
        this.uploadingPhoto = false;
        this.changingPassword = false;
        this.showChangePassword = false;
        this.selectedTabIndex = 0;
        this.profile = null;
        // Stats placeholder
        this.companyStats = {
            offersCount: 0,
            applicationsCount: 0,
            acceptedCandidatesCount: 0,
            profileViewsCount: 0
        };
        this.sectors = [
            'Technologie & IT', 'Finance & Banque', 'Santé & Médical',
            'Éducation & Formation', 'Commerce & Distribution',
            'Industrie & Fabrication', 'Transport & Logistique',
            'Construction & Immobilier', 'Médias & Communication',
            'Conseil & Services', 'Agriculture & Agroalimentaire', 'Autre'
        ];
        this.companySizes = [
            '1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'
        ];
        this.sectorOpts = this.sectors.map(s => ({ value: s, label: s }));
        this.companySizeOpts = this.companySizes.map(s => ({ value: s, label: s + ' employés' }));
        this.form = this.fb.group({
            fullName: [''],
            phoneNumber: [''],
            city: [''],
            country: [''],
            companyName: [''],
            companyDescription: [''],
            companyWebsite: [''],
            companySector: [''],
            companySize: [''],
            siretNumber: [''],
            enterpriseLinkedinUrl: ['']
        });
        this.changePasswordForm = this.fb.group({
            oldPassword: ['', [Validators.required, Validators.minLength(6)]],
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    ngOnInit() {
        this.userSvc.getProfile().subscribe({
            next: res => {
                this.profile = res.data;
                this.form.patchValue({
                    fullName: res.data.fullName ?? '',
                    phoneNumber: res.data.phoneNumber ?? '',
                    city: res.data.city ?? '',
                    country: res.data.country ?? '',
                    companyName: res.data.companyName ?? '',
                    companyDescription: res.data.companyDescription ?? '',
                    companyWebsite: res.data.companyWebsite ?? '',
                    companySector: res.data.companySector ?? '',
                    companySize: res.data.companySize ?? '',
                    siretNumber: res.data.siretNumber ?? '',
                    enterpriseLinkedinUrl: res.data.enterpriseLinkedinUrl ?? ''
                });
                this.loading = false;
            },
            error: () => { this.loading = false; }
        });
    }
    save() {
        if (this.saving)
            return;
        this.saving = true;
        this.userSvc.updateProfile(this.form.value).subscribe({
            next: res => {
                this.profile = res.data;
                this.saving = false;
                this.alertSvc.success('Profil mis à jour');
            },
            error: err => {
                this.saving = false;
                this.alertSvc.error('Erreur', err.error?.message || 'Erreur lors de la mise à jour');
            }
        });
    }
    onPhotoSelect(event) {
        const file = event.target.files?.[0];
        if (!file)
            return;
        if (!file.type.startsWith('image/')) {
            this.alertSvc.error('Seules les images sont acceptées');
            return;
        }
        this.uploadingPhoto = true;
        this.userSvc.uploadProfilePicture(file).subscribe({
            next: res => {
                this.profile = res.data;
                this.uploadingPhoto = false;
                this.alertSvc.success('Logo mis à jour');
            },
            error: err => {
                this.uploadingPhoto = false;
                this.alertSvc.error('Erreur', err.error?.message || 'Erreur upload logo');
            }
        });
    }
    changePassword() {
        if (this.changePasswordForm.invalid || this.changingPassword)
            return;
        const { oldPassword, newPassword, confirmPassword } = this.changePasswordForm.value;
        if (newPassword !== confirmPassword) {
            this.alertSvc.error('Les mots de passe ne correspondent pas');
            return;
        }
        this.changingPassword = true;
        this.authSvc.changePassword({
            oldPassword,
            newPassword,
            confirmPassword
        }).subscribe({
            next: () => {
                this.changingPassword = false;
                this.showChangePassword = false;
                this.changePasswordForm.reset();
                this.alertSvc.success('Mot de passe modifié avec succès');
            },
            error: err => {
                this.changingPassword = false;
                this.alertSvc.error('Erreur', err.error?.message || 'Erreur lors du changement de mot de passe');
            }
        });
    }
    // Helper methods for template
    maskSiret(siret) {
        if (!siret || siret.length < 8)
            return '****';
        return siret.substring(0, 4) + '****' + siret.substring(siret.length - 4);
    }
    getSectorIcon() {
        const sector = this.form.get('companySector')?.value || '';
        const iconMap = {
            'Technologie & IT': 'computer',
            'Finance & Banque': 'savings',
            'Santé & Médical': 'local_hospital',
            'Éducation & Formation': 'school',
            'Commerce & Distribution': 'shopping_cart',
            'Industrie & Fabrication': 'factory',
            'Transport & Logistique': 'local_shipping',
            'Construction & Immobilier': 'apartment',
            'Médias & Communication': 'newspaper',
            'Conseil & Services': 'support_agent',
            'Agriculture & Agroalimentaire': 'eco',
            'Autre': 'business'
        };
        return iconMap[sector] || 'business';
    }
    getSectorColor() {
        const sector = this.form.get('companySector')?.value || '';
        const colorMap = {
            'Technologie & IT': '#0693e3',
            'Finance & Banque': '#9b51e0',
            'Santé & Médical': '#cf2e2e',
            'Éducation & Formation': '#00d084',
            'Commerce & Distribution': '#ff6900',
            'Industrie & Fabrication': '#abb8c3',
            'Transport & Logistique': '#fcb900',
            'Construction & Immobilier': '#0693e3',
            'Médias & Communication': '#9b51e0',
            'Conseil & Services': '#00d084',
            'Agriculture & Agroalimentaire': '#00d084'
        };
        return colorMap[sector] || '#abb8c3';
    }
    static { this.ɵfac = function EnterpriseProfileComponent_Factory(t) { return new (t || EnterpriseProfileComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnterpriseProfileComponent, selectors: [["app-enterprise-profile"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [[1, "loading-center"], ["diameter", "40"], [3, "ngSubmit", "formGroup"], [1, "profile-wrapper"], [1, "profile-header", "enterprise"], [1, "profile-avatar-container"], ["alt", "Logo entreprise", 1, "profile-avatar", "enterprise", 3, "src"], ["matTooltip", "Cliquer pour changer le logo", 1, "photo-upload-btn"], ["diameter", "16"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change", "disabled"], [1, "profile-header-info"], [1, "badge", "badge-warning"], [1, "profile-container"], [1, "profile-main"], [1, "profile-content", 3, "selectedIndexChange", "selectedIndex"], ["label", "Contact"], [1, "form-section"], [1, "form-section-title"], [1, "form-grid"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "phoneNumber"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["label", "Entreprise"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "companyName"], ["matInput", "", "formControlName", "companyDescription", "rows", "4", "placeholder", "D\u00E9crivez votre entreprise, sa mission, ses valeurs..."], ["label", "Secteur d'activit\u00E9", "formControlName", "companySector", 3, "options"], ["label", "Taille de l'entreprise", "formControlName", "companySize", 3, "options"], ["matInput", "", "formControlName", "companyWebsite", "placeholder", "https://www.example.com"], ["matInput", "", "formControlName", "siretNumber", "placeholder", "12345678901234"], ["matInput", "", "formControlName", "enterpriseLinkedinUrl", "placeholder", "https://linkedin.com/company/..."], ["label", "S\u00E9curit\u00E9"], [1, "profile-sidebar"], [1, "sidebar-card"], [1, "card-label"], [1, "card-value"], [1, "card-subtext"], [2, "display", "flex", "flex-direction", "column", "gap", "8px", "margin-top", "12px"], ["target", "_blank", 1, "link-icon", 3, "href"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18"], [1, "profile-avatar", "profile-avatar-placeholder", "enterprise"], [1, "password-form", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "password", "formControlName", "oldPassword"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], [1, "password-form-actions"], ["mat-stroked-button", "", "color", "accent", "type", "button", 3, "click"], [2, "color", "var(--text-secondary)", "margin-bottom", "20px"], ["mat-stroked-button", "", "type", "button", 3, "click"], [2, "margin-top", "12px", "display", "flex", "flex-direction", "column", "gap", "10px"], [2, "display", "flex", "align-items", "center", "gap", "8px"], [2, "font-size", "20px", "width", "20px", "height", "20px"], [2, "font-weight", "500", "color", "var(--text-primary)"], [2, "font-size", "20px", "width", "20px", "height", "20px", "color", "#abb8c3"], [2, "font-size", "0.85rem", "color", "var(--text-secondary)"]], template: function EnterpriseProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, EnterpriseProfileComponent_Conditional_0_Template, 2, 0, "div", 0)(1, EnterpriseProfileComponent_Conditional_1_Template, 133, 22);
        } if (rf & 2) {
            i0.ɵɵconditional(0, ctx.loading ? 0 : 1);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, MatFormFieldModule, i3.MatFormField, i3.MatLabel, i3.MatHint, i3.MatError, i3.MatPrefix, MatInputModule, i4.MatInput, AppSelectComponent,
            MatButtonModule, i5.MatButton, MatIconModule, i6.MatIcon, MatProgressSpinnerModule, i7.MatProgressSpinner, MatDividerModule, MatCardModule,
            MatTabsModule, i8.MatTab, i8.MatTabGroup, MatTooltipModule, i9.MatTooltip], styles: ["@import '../../../shared/styles/profile.shared.scss';\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   ENTERPRISE-SPECIFIC[_ngcontent-%COMP%]   STYLES[_ngcontent-%COMP%]   ============\n\n.profile-wrapper[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  animation: fadeIn 300ms ease-in;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #9b51e0, rgba(155, 81, 224, 0.7));\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    background: linear-gradient(to bottom, rgba(248, 249, 251, 0), #f8f9fb);\n    pointer-events: none;\n  }\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  &.enterprise {\n    border-radius: 12px;\n    width: 140px;\n    height: 140px;\n  }\n\n  &.enterprise.profile-avatar-placeholder {\n    border-radius: 12px;\n\n    mat-icon {\n      font-size: 70px;\n      width: 70px;\n      height: 70px;\n      color: #7c3aed;\n    }\n  }\n}\n\n.photo-upload-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #9b51e0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 150ms ease;\n\n  &:hover:not(.loading) {\n    background: #7c3aed;\n    transform: scale(1.1);\n  }\n\n  &.loading {\n    background: #94a3b8;\n    cursor: not-allowed;\n  }\n\n  mat-icon {\n    font-size: 20px;\n    width: 20px;\n    height: 20px;\n  }\n\n  input {\n    display: none;\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   FORM[_ngcontent-%COMP%]   OVERRIDES[_ngcontent-%COMP%]   ============\n\n.form-section[_ngcontent-%COMP%] {\n  background: white;\n\n  &:first-child {\n    padding-top: 24px;\n  }\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  mat-form-field {\n    ::ng-deep {\n      .mat-mdc-text-field-wrapper {\n        padding-bottom: 0.75rem;\n      }\n\n      .mdc-text-field--filled {\n        &.mdc-text-field--focused {\n          .mdc-text-field__ripple {\n            background-color: rgba(155, 81, 224, 0.08);\n          }\n        }\n      }\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   PASSWORD[_ngcontent-%COMP%]   FORM[_ngcontent-%COMP%]   ============\n.password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  mat-form-field {\n    width: 100%;\n  }\n}\n\n.password-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n\n  button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 44px;\n    padding: 0 24px;\n\n    mat-icon {\n      font-size: 20px;\n      width: 20px;\n      height: 20px;\n    }\n\n    mat-spinner {\n      margin-right: 4px;\n    }\n  }\n\n  @include sm {\n    flex-direction: column-reverse;\n\n    button {\n      width: 100%;\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   HINT[_ngcontent-%COMP%]   TEXT[_ngcontent-%COMP%]   ============\n[_ngcontent-%COMP%]  {\n  .mat-mdc-form-field-hint {\n    color: var(--text-secondary) !important;\n    font-size: 0.75rem;\n  }\n\n  .mat-mdc-form-field-error {\n    color: var(--color-error) !important;\n    font-size: 0.75rem;\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   RESPONSIVE[_ngcontent-%COMP%]   STYLES[_ngcontent-%COMP%]   ============\n\n@include[_ngcontent-%COMP%]   lg[_ngcontent-%COMP%] {\n  .profile-container {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n\n  .profile-sidebar {\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    .sidebar-card {\n      flex: 1 1 calc(50% - 8px);\n      min-width: 200px;\n    }\n  }\n\n  .profile-main {\n    width: 100%;\n  }\n}\n\n@include md {\n  .profile-header {\n    height: 160px;\n    border-radius: 8px 8px 0 0;\n  }\n\n  .profile-avatar {\n    &.enterprise {\n      width: 120px;\n      height: 120px;\n\n      &.profile-avatar-placeholder {\n        mat-icon {\n          font-size: 60px;\n          width: 60px;\n          height: 60px;\n        }\n      }\n    }\n  }\n\n  .profile-header-info {\n    bottom: 16px;\n    right: 16px;\n\n    h1 {\n      font-size: 1.375rem;\n    }\n\n    p {\n      font-size: 0.875rem;\n    }\n  }\n\n  .photo-upload-btn {\n    bottom: 40px;\n    right: 12px;\n    width: 36px;\n    height: 36px;\n  }\n}\n\n@include sm {\n  .profile-sidebar {\n    flex-direction: column;\n    gap: 12px;\n\n    .sidebar-card {\n      flex: 1 1 100%;\n    }\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .form-actions {\n    flex-direction: column;\n    gap: 12px;\n    padding: 16px;\n\n    button {\n      width: 100%;\n    }\n  }\n\n  ::ng-deep {\n    .profile-content {\n      .mat-mdc-tab-labels {\n        padding: 0 12px;\n      }\n\n      .mat-mdc-tab-label {\n        min-width: 70px;\n        padding: 0 8px;\n        font-size: 0.875rem;\n      }\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   ANIMATIONS[_ngcontent-%COMP%]   ============\n@keyframes[_ngcontent-%COMP%]   fadeIn[_ngcontent-%COMP%] {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.form-section[_ngcontent-%COMP%] {\n  animation: fadeIn 300ms ease-out;\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   LOADING[_ngcontent-%COMP%]   STATE[_ngcontent-%COMP%]   ============\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 80px 24px;\n  min-height: 600px;\n  background: #f8f9fb;\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   PRINT[_ngcontent-%COMP%]   STYLES[_ngcontent-%COMP%]   ============\n@media[_ngcontent-%COMP%]   print[_ngcontent-%COMP%] {\n  .photo-upload-btn,\n  .form-actions,\n  .password-form {\n    display: none !important;\n  }\n\n  .profile-content {\n    box-shadow: none;\n    border: none;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnterpriseProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-enterprise-profile', standalone: true, imports: [
                    CommonModule, FormsModule, ReactiveFormsModule,
                    MatFormFieldModule, MatInputModule, AppSelectComponent,
                    MatButtonModule, MatIconModule,
                    MatProgressSpinnerModule,
                    MatDividerModule, MatCardModule,
                    MatTabsModule, MatTooltipModule
                ], template: "@if (loading) {\n  <div class=\"loading-center\">\n    <mat-spinner diameter=\"40\" />\n  </div>\n} @else {\n  <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <!-- Header Banner with Logo -->\n    <div class=\"profile-wrapper\">\n      <div class=\"profile-header enterprise\">\n        <div class=\"profile-avatar-container\">\n          @if (profile?.profilePicture) {\n            <img [src]=\"profile!.profilePicture\" alt=\"Logo entreprise\" class=\"profile-avatar enterprise\" />\n          } @else {\n            <div class=\"profile-avatar profile-avatar-placeholder enterprise\">\n              <mat-icon>business</mat-icon>\n            </div>\n          }\n          <label class=\"photo-upload-btn\" [class.loading]=\"uploadingPhoto\" matTooltip=\"Cliquer pour changer le logo\">\n            @if (uploadingPhoto) {\n              <mat-spinner diameter=\"16\" />\n            } @else {\n              <mat-icon>photo_camera</mat-icon>\n            }\n            <input type=\"file\" accept=\"image/*\" (change)=\"onPhotoSelect($event)\" hidden [disabled]=\"uploadingPhoto\" />\n          </label>\n        </div>\n\n        <div class=\"profile-header-info\">\n          <h1>{{ profile?.companyName || 'Profil Entreprise' }}</h1>\n          <p>{{ profile?.companySector || 'Secteur' }}</p>\n          @if (profile?.premium) {\n            <span class=\"badge badge-warning\">\n              <mat-icon>star</mat-icon>\n              Premium\n            </span>\n          }\n        </div>\n      </div>\n\n      <div class=\"profile-container\">\n        <!-- Main Content Area with Tabs -->\n        <div class=\"profile-main\">\n          <mat-tab-group class=\"profile-content\" [(selectedIndex)]=\"selectedTabIndex\">\n            <!-- Tab 1: Informations de Contact -->\n            <mat-tab label=\"Contact\">\n              <div class=\"form-section\">\n                <h3 class=\"form-section-title\">\n                  <mat-icon>person</mat-icon>\n                  Informations de contact\n                </h3>\n                <div class=\"form-grid\">\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Nom du responsable</mat-label>\n                    <mat-icon matPrefix>person</mat-icon>\n                    <input matInput formControlName=\"fullName\" />\n                  </mat-form-field>\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>T\u00E9l\u00E9phone</mat-label>\n                    <mat-icon matPrefix>phone</mat-icon>\n                    <input matInput formControlName=\"phoneNumber\" />\n                  </mat-form-field>\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Ville</mat-label>\n                    <mat-icon matPrefix>location_city</mat-icon>\n                    <input matInput formControlName=\"city\" />\n                  </mat-form-field>\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Pays</mat-label>\n                    <mat-icon matPrefix>public</mat-icon>\n                    <input matInput formControlName=\"country\" />\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-tab>\n\n            <!-- Tab 2: Informations Entreprise -->\n            <mat-tab label=\"Entreprise\">\n              <div class=\"form-section\">\n                <h3 class=\"form-section-title\">\n                  <mat-icon>business</mat-icon>\n                  Informations entreprise\n                </h3>\n                <div class=\"form-grid\">\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Nom de l'entreprise</mat-label>\n                    <mat-icon matPrefix>badge</mat-icon>\n                    <input matInput formControlName=\"companyName\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Description</mat-label>\n                    <textarea matInput formControlName=\"companyDescription\" rows=\"4\"\n                      placeholder=\"D\u00E9crivez votre entreprise, sa mission, ses valeurs...\"></textarea>\n                  </mat-form-field>\n\n                  <app-select label=\"Secteur d'activit\u00E9\" [options]=\"sectorOpts\"\n                    formControlName=\"companySector\"></app-select>\n\n                  <app-select label=\"Taille de l'entreprise\" [options]=\"companySizeOpts\"\n                    formControlName=\"companySize\"></app-select>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Site web</mat-label>\n                    <mat-icon matPrefix>language</mat-icon>\n                    <input matInput formControlName=\"companyWebsite\"\n                      placeholder=\"https://www.example.com\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Num\u00E9ro SIRET</mat-label>\n                    <mat-icon matPrefix>lock</mat-icon>\n                    <input matInput formControlName=\"siretNumber\" placeholder=\"12345678901234\" />\n                    <mat-hint>S\u00E9curis\u00E9 et confidentiel</mat-hint>\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>LinkedIn entreprise</mat-label>\n                    <mat-icon matPrefix>business</mat-icon>\n                    <input matInput formControlName=\"enterpriseLinkedinUrl\"\n                      placeholder=\"https://linkedin.com/company/...\" />\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-tab>\n\n            <!-- Tab 3: S\u00E9curit\u00E9 -->\n            <mat-tab label=\"S\u00E9curit\u00E9\">\n              @if (showChangePassword) {\n                <div class=\"form-section\">\n                  <h3 class=\"form-section-title\">\n                    <mat-icon>lock</mat-icon>\n                    Changer de mot de passe\n                  </h3>\n                  <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"changePassword()\" class=\"password-form\">\n                    <mat-form-field appearance=\"outline\" class=\"full-width\">\n                      <mat-label>Ancien mot de passe</mat-label>\n                      <mat-icon matPrefix>password</mat-icon>\n                      <input matInput type=\"password\" formControlName=\"oldPassword\" />\n                      <mat-error *ngIf=\"changePasswordForm.get('oldPassword')?.hasError('required')\">\n                        Requis\n                      </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"full-width\">\n                      <mat-label>Nouveau mot de passe</mat-label>\n                      <mat-icon matPrefix>vpn_key</mat-icon>\n                      <input matInput type=\"password\" formControlName=\"newPassword\" />\n                      <mat-error *ngIf=\"changePasswordForm.get('newPassword')?.hasError('required')\">\n                        Requis\n                      </mat-error>\n                      <mat-error *ngIf=\"changePasswordForm.get('newPassword')?.hasError('minlength')\">\n                        Minimum 6 caract\u00E8res\n                      </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"full-width\">\n                      <mat-label>Confirmer mot de passe</mat-label>\n                      <mat-icon matPrefix>vpn_key</mat-icon>\n                      <input matInput type=\"password\" formControlName=\"confirmPassword\" />\n                      <mat-error *ngIf=\"changePasswordForm.get('confirmPassword')?.hasError('required')\">\n                        Requis\n                      </mat-error>\n                      <mat-error *ngIf=\"changePasswordForm.get('confirmPassword')?.hasError('minlength')\">\n                        Minimum 6 caract\u00E8res\n                      </mat-error>\n                    </mat-form-field>\n\n                    <div class=\"password-form-actions\">\n                      <button mat-raised-button color=\"primary\" type=\"submit\"\n                        [disabled]=\"changingPassword || changePasswordForm.invalid\">\n                        @if (changingPassword) {\n                          <mat-spinner diameter=\"18\" />\n                        } @else {\n                          <mat-icon>lock</mat-icon>\n                        }\n                        Changer mot de passe\n                      </button>\n                      <button mat-stroked-button color=\"accent\" type=\"button\"\n                        (click)=\"showChangePassword = false; changePasswordForm.reset()\">\n                        <mat-icon>close</mat-icon>\n                        Annuler\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              } @else {\n                <div class=\"form-section\">\n                  <h3 class=\"form-section-title\">\n                    <mat-icon>shield</mat-icon>\n                    S\u00E9curit\u00E9 du compte\n                  </h3>\n                  <p style=\"color: var(--text-secondary); margin-bottom: 20px;\">\n                    G\u00E9rez les param\u00E8tres de s\u00E9curit\u00E9 de votre compte entreprise\n                  </p>\n                  <button mat-stroked-button type=\"button\" (click)=\"showChangePassword = true\">\n                    <mat-icon>vpn_key</mat-icon>\n                    Changer mot de passe\n                  </button>\n                </div>\n              }\n            </mat-tab>\n          </mat-tab-group>\n        </div>\n\n        <!-- Sidebar -->\n        <div class=\"profile-sidebar\">\n          <!-- Company Stats -->\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">Annonces actives</span>\n            <span class=\"card-value\">{{ companyStats.offersCount }}</span>\n            <span class=\"card-subtext\">offres publi\u00E9es</span>\n          </div>\n\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">Candidatures</span>\n            <span class=\"card-value\">{{ companyStats.applicationsCount }}</span>\n            <span class=\"card-subtext\">re\u00E7ues</span>\n          </div>\n\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">Embauches</span>\n            <span class=\"card-value\">{{ companyStats.acceptedCandidatesCount }}</span>\n            <span class=\"card-subtext\">candidats accept\u00E9s</span>\n          </div>\n\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">Visibilit\u00E9</span>\n            <span class=\"card-value\">{{ companyStats.profileViewsCount }}</span>\n            <span class=\"card-subtext\">consultations du profil</span>\n          </div>\n\n          <!-- Company Info Card -->\n          @if (form.get('companySector')?.value) {\n            <div class=\"sidebar-card\">\n              <span class=\"card-label\">Informations</span>\n              <div style=\"margin-top: 12px; display: flex; flex-direction: column; gap: 10px;\">\n                <div style=\"display: flex; align-items: center; gap: 8px;\">\n                  <mat-icon [style.color]=\"getSectorColor()\" style=\"font-size: 20px; width: 20px; height: 20px;\">\n                    {{ getSectorIcon() }}\n                  </mat-icon>\n                  <span style=\"font-weight: 500; color: var(--text-primary);\">\n                    {{ form.get('companySector')?.value }}\n                  </span>\n                </div>\n\n                @if (form.get('companySize')?.value) {\n                  <div style=\"display: flex; align-items: center; gap: 8px;\">\n                    <mat-icon style=\"font-size: 20px; width: 20px; height: 20px; color: #abb8c3;\">\n                      people\n                    </mat-icon>\n                    <span style=\"font-weight: 500; color: var(--text-primary);\">\n                      {{ form.get('companySize')?.value }} employ\u00E9s\n                    </span>\n                  </div>\n                }\n\n                @if (form.get('siretNumber')?.value) {\n                  <div style=\"display: flex; align-items: center; gap: 8px;\">\n                    <mat-icon style=\"font-size: 20px; width: 20px; height: 20px; color: #abb8c3;\">\n                      security\n                    </mat-icon>\n                    <span style=\"font-size: 0.85rem; color: var(--text-secondary);\">\n                      SIRET: {{ maskSiret(form.get('siretNumber')?.value) }}\n                    </span>\n                  </div>\n                }\n              </div>\n            </div>\n          }\n\n          <!-- Quick Links Card -->\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">R\u00E9seaux & Web</span>\n            <div style=\"display: flex; flex-direction: column; gap: 8px; margin-top: 12px;\">\n              @if (form.get('companyWebsite')?.value) {\n                <a [href]=\"form.get('companyWebsite')?.value\" target=\"_blank\" class=\"link-icon\">\n                  <mat-icon>language</mat-icon>\n                  Site web\n                </a>\n              }\n              @if (form.get('enterpriseLinkedinUrl')?.value) {\n                <a [href]=\"form.get('enterpriseLinkedinUrl')?.value\" target=\"_blank\" class=\"link-icon\">\n                  <mat-icon>business</mat-icon>\n                  LinkedIn\n                </a>\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Form Actions -->\n    <div class=\"form-actions\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"saving || form.invalid\">\n        @if (saving) {\n          <mat-spinner diameter=\"18\" />\n        } @else {\n          <mat-icon>save</mat-icon>\n        }\n        Enregistrer les modifications\n      </button>\n    </div>\n  </form>\n}\n", styles: ["@import '../../../shared/styles/profile.shared.scss';\n\n// ============ ENTERPRISE-SPECIFIC STYLES ============\n\n.profile-wrapper {\n  margin-top: 80px;\n  animation: fadeIn 300ms ease-in;\n}\n\n.profile-header {\n  background: linear-gradient(135deg, #9b51e0, rgba(155, 81, 224, 0.7));\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    background: linear-gradient(to bottom, rgba(248, 249, 251, 0), #f8f9fb);\n    pointer-events: none;\n  }\n}\n\n.profile-avatar {\n  &.enterprise {\n    border-radius: 12px;\n    width: 140px;\n    height: 140px;\n  }\n\n  &.enterprise.profile-avatar-placeholder {\n    border-radius: 12px;\n\n    mat-icon {\n      font-size: 70px;\n      width: 70px;\n      height: 70px;\n      color: #7c3aed;\n    }\n  }\n}\n\n.photo-upload-btn {\n  position: absolute;\n  bottom: 50px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #9b51e0;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 150ms ease;\n\n  &:hover:not(.loading) {\n    background: #7c3aed;\n    transform: scale(1.1);\n  }\n\n  &.loading {\n    background: #94a3b8;\n    cursor: not-allowed;\n  }\n\n  mat-icon {\n    font-size: 20px;\n    width: 20px;\n    height: 20px;\n  }\n\n  input {\n    display: none;\n  }\n}\n\n// ============ FORM OVERRIDES ============\n\n.form-section {\n  background: white;\n\n  &:first-child {\n    padding-top: 24px;\n  }\n}\n\n.form-grid {\n  mat-form-field {\n    ::ng-deep {\n      .mat-mdc-text-field-wrapper {\n        padding-bottom: 0.75rem;\n      }\n\n      .mdc-text-field--filled {\n        &.mdc-text-field--focused {\n          .mdc-text-field__ripple {\n            background-color: rgba(155, 81, 224, 0.08);\n          }\n        }\n      }\n    }\n  }\n}\n\n// ============ PASSWORD FORM ============\n.password-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  mat-form-field {\n    width: 100%;\n  }\n}\n\n.password-form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n\n  button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 44px;\n    padding: 0 24px;\n\n    mat-icon {\n      font-size: 20px;\n      width: 20px;\n      height: 20px;\n    }\n\n    mat-spinner {\n      margin-right: 4px;\n    }\n  }\n\n  @include sm {\n    flex-direction: column-reverse;\n\n    button {\n      width: 100%;\n    }\n  }\n}\n\n// ============ HINT TEXT ============\n::ng-deep {\n  .mat-mdc-form-field-hint {\n    color: var(--text-secondary) !important;\n    font-size: 0.75rem;\n  }\n\n  .mat-mdc-form-field-error {\n    color: var(--color-error) !important;\n    font-size: 0.75rem;\n  }\n}\n\n// ============ RESPONSIVE STYLES ============\n\n@include lg {\n  .profile-container {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n\n  .profile-sidebar {\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    .sidebar-card {\n      flex: 1 1 calc(50% - 8px);\n      min-width: 200px;\n    }\n  }\n\n  .profile-main {\n    width: 100%;\n  }\n}\n\n@include md {\n  .profile-header {\n    height: 160px;\n    border-radius: 8px 8px 0 0;\n  }\n\n  .profile-avatar {\n    &.enterprise {\n      width: 120px;\n      height: 120px;\n\n      &.profile-avatar-placeholder {\n        mat-icon {\n          font-size: 60px;\n          width: 60px;\n          height: 60px;\n        }\n      }\n    }\n  }\n\n  .profile-header-info {\n    bottom: 16px;\n    right: 16px;\n\n    h1 {\n      font-size: 1.375rem;\n    }\n\n    p {\n      font-size: 0.875rem;\n    }\n  }\n\n  .photo-upload-btn {\n    bottom: 40px;\n    right: 12px;\n    width: 36px;\n    height: 36px;\n  }\n}\n\n@include sm {\n  .profile-sidebar {\n    flex-direction: column;\n    gap: 12px;\n\n    .sidebar-card {\n      flex: 1 1 100%;\n    }\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .form-actions {\n    flex-direction: column;\n    gap: 12px;\n    padding: 16px;\n\n    button {\n      width: 100%;\n    }\n  }\n\n  ::ng-deep {\n    .profile-content {\n      .mat-mdc-tab-labels {\n        padding: 0 12px;\n      }\n\n      .mat-mdc-tab-label {\n        min-width: 70px;\n        padding: 0 8px;\n        font-size: 0.875rem;\n      }\n    }\n  }\n}\n\n// ============ ANIMATIONS ============\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.form-section {\n  animation: fadeIn 300ms ease-out;\n}\n\n// ============ LOADING STATE ============\n.loading-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 80px 24px;\n  min-height: 600px;\n  background: #f8f9fb;\n}\n\n// ============ PRINT STYLES ============\n@media print {\n  .photo-upload-btn,\n  .form-actions,\n  .password-form {\n    display: none !important;\n  }\n\n  .profile-content {\n    box-shadow: none;\n    border: none;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnterpriseProfileComponent, { className: "EnterpriseProfileComponent", filePath: "app\\features\\enterprise\\profile\\enterprise-profile.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=enterprise-profile.component.js.map