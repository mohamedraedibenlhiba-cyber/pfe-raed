import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/material/icon";
import * as i7 from "@angular/material/checkbox";
import * as i8 from "@angular/material/progress-spinner";
import * as i9 from "@angular/material/tabs";
import * as i10 from "@angular/material/chips";
import * as i11 from "@angular/material/tooltip";
function CandidateProfileComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵelement(1, "mat-spinner", 1);
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 6);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.profile.profilePicture, i0.ɵɵsanitizeUrl);
} }
function CandidateProfileComponent_Conditional_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 54)(1, "mat-icon");
    i0.ɵɵtext(2, "account_circle");
    i0.ɵɵelementEnd()();
} }
function CandidateProfileComponent_Conditional_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 8);
} }
function CandidateProfileComponent_Conditional_1_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "photo_camera");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 11)(1, "mat-icon");
    i0.ɵɵtext(2, "check_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Ouvert aux opportunit\u00E9s ");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Requis ");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Requis ");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Minimum 6 caract\u00E8res ");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Requis ");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Minimum 6 caract\u00E8res ");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 53);
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "lock");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Conditional_126_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h3", 17)(2, "mat-icon");
    i0.ɵɵtext(3, "lock");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Changer de mot de passe ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "form", 55);
    i0.ɵɵlistener("ngSubmit", function CandidateProfileComponent_Conditional_1_Conditional_126_Template_form_ngSubmit_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changePassword()); });
    i0.ɵɵelementStart(6, "mat-form-field", 26)(7, "mat-label");
    i0.ɵɵtext(8, "Ancien mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "mat-icon", 20);
    i0.ɵɵtext(10, "password");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(11, "input", 56);
    i0.ɵɵtemplate(12, CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_12_Template, 2, 0, "mat-error", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "mat-form-field", 26)(14, "mat-label");
    i0.ɵɵtext(15, "Nouveau mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-icon", 20);
    i0.ɵɵtext(17, "vpn_key");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(18, "input", 58);
    i0.ɵɵtemplate(19, CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_19_Template, 2, 0, "mat-error", 57)(20, CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_20_Template, 2, 0, "mat-error", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "mat-form-field", 26)(22, "mat-label");
    i0.ɵɵtext(23, "Confirmer mot de passe");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-icon", 20);
    i0.ɵɵtext(25, "vpn_key");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(26, "input", 59);
    i0.ɵɵtemplate(27, CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_27_Template, 2, 0, "mat-error", 57)(28, CandidateProfileComponent_Conditional_1_Conditional_126_mat_error_28_Template, 2, 0, "mat-error", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "div", 60)(30, "button", 52);
    i0.ɵɵtemplate(31, CandidateProfileComponent_Conditional_1_Conditional_126_Conditional_31_Template, 1, 0, "mat-spinner", 53)(32, CandidateProfileComponent_Conditional_1_Conditional_126_Conditional_32_Template, 2, 0);
    i0.ɵɵtext(33, " Changer mot de passe ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 61);
    i0.ɵɵlistener("click", function CandidateProfileComponent_Conditional_1_Conditional_126_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.showChangePassword = false; return i0.ɵɵresetView(ctx_r1.changePasswordForm.reset()); });
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
function CandidateProfileComponent_Conditional_1_Conditional_127_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "h3", 17)(2, "mat-icon");
    i0.ɵɵtext(3, "shield");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " S\u00E9curit\u00E9 du compte ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 62);
    i0.ɵɵtext(6, " G\u00E9rez les param\u00E8tres de s\u00E9curit\u00E9 de votre compte ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 63);
    i0.ɵɵlistener("click", function CandidateProfileComponent_Conditional_1_Conditional_127_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showChangePassword = true); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "vpn_key");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Changer mot de passe ");
    i0.ɵɵelementEnd()();
} }
function CandidateProfileComponent_Conditional_1_Conditional_139_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "span", 43);
    i0.ɵɵtext(2, "Salaire");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 45);
    i0.ɵɵtext(6, "\u20AC / an");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.form.get("desiredSalary")) == null ? null : tmp_2_0.value);
} }
function CandidateProfileComponent_Conditional_1_Conditional_140_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-chip");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const skill_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(skill_r5);
} }
function CandidateProfileComponent_Conditional_1_Conditional_140_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "arrow_forward");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" +", ctx_r1.skillsArray.length - 6, " plus ");
} }
function CandidateProfileComponent_Conditional_1_Conditional_140_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "span", 43);
    i0.ɵɵtext(2, "Comp\u00E9tences");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 64);
    i0.ɵɵrepeaterCreate(4, CandidateProfileComponent_Conditional_1_Conditional_140_For_5_Template, 2, 1, "mat-chip", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CandidateProfileComponent_Conditional_1_Conditional_140_Conditional_6_Template, 4, 1, "a", 65);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.skillsPreview);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(6, ctx_r1.hasMoreSkills ? 6 : -1);
} }
function CandidateProfileComponent_Conditional_1_Conditional_144_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "span", 11)(2, "mat-icon");
    i0.ɵɵtext(3, "check_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Actif ");
    i0.ɵɵelementEnd()();
} }
function CandidateProfileComponent_Conditional_1_Conditional_145_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "span", 66)(2, "mat-icon");
    i0.ɵɵtext(3, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " Non actif ");
    i0.ɵɵelementEnd()();
} }
function CandidateProfileComponent_Conditional_1_Conditional_152_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 50)(1, "mat-icon");
    i0.ɵɵtext(2, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " LinkedIn ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", (tmp_2_0 = ctx_r1.form.get("linkedinUrl")) == null ? null : tmp_2_0.value, i0.ɵɵsanitizeUrl);
} }
function CandidateProfileComponent_Conditional_1_Conditional_153_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 50)(1, "mat-icon");
    i0.ɵɵtext(2, "code");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " GitHub ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", (tmp_2_0 = ctx_r1.form.get("githubUrl")) == null ? null : tmp_2_0.value, i0.ɵɵsanitizeUrl);
} }
function CandidateProfileComponent_Conditional_1_Conditional_154_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 50)(1, "mat-icon");
    i0.ɵɵtext(2, "language");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Portfolio ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("href", (tmp_2_0 = ctx_r1.form.get("portfolioUrl")) == null ? null : tmp_2_0.value, i0.ɵɵsanitizeUrl);
} }
function CandidateProfileComponent_Conditional_1_Conditional_157_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 53);
} }
function CandidateProfileComponent_Conditional_1_Conditional_158_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "save");
    i0.ɵɵelementEnd();
} }
function CandidateProfileComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 2);
    i0.ɵɵlistener("ngSubmit", function CandidateProfileComponent_Conditional_1_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "div", 5);
    i0.ɵɵtemplate(4, CandidateProfileComponent_Conditional_1_Conditional_4_Template, 1, 1, "img", 6)(5, CandidateProfileComponent_Conditional_1_Conditional_5_Template, 3, 0);
    i0.ɵɵelementStart(6, "label", 7);
    i0.ɵɵtemplate(7, CandidateProfileComponent_Conditional_1_Conditional_7_Template, 1, 0, "mat-spinner", 8)(8, CandidateProfileComponent_Conditional_1_Conditional_8_Template, 2, 0);
    i0.ɵɵelementStart(9, "input", 9);
    i0.ɵɵlistener("change", function CandidateProfileComponent_Conditional_1_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onPhotoSelect($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 10)(11, "h1");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(15, CandidateProfileComponent_Conditional_1_Conditional_15_Template, 4, 0, "span", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 12)(17, "div", 13)(18, "mat-tab-group", 14);
    i0.ɵɵtwoWayListener("selectedIndexChange", function CandidateProfileComponent_Conditional_1_Template_mat_tab_group_selectedIndexChange_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedTabIndex, $event) || (ctx_r1.selectedTabIndex = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(19, "mat-tab", 15)(20, "div", 16)(21, "h3", 17)(22, "mat-icon");
    i0.ɵɵtext(23, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Informations g\u00E9n\u00E9rales ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 18)(26, "mat-form-field", 19)(27, "mat-label");
    i0.ɵɵtext(28, "Nom complet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "mat-icon", 20);
    i0.ɵɵtext(30, "account_box");
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
    i0.ɵɵtext(54, "work");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(55, " Profil professionnel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 18)(57, "mat-form-field", 26)(58, "mat-label");
    i0.ɵɵtext(59, "Titre / Poste recherch\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "mat-icon", 20);
    i0.ɵɵtext(61, "badge");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(62, "input", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "mat-form-field", 26)(64, "mat-label");
    i0.ɵɵtext(65, "R\u00E9sum\u00E9 professionnel");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(66, "textarea", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "mat-form-field", 19)(68, "mat-label");
    i0.ɵɵtext(69, "Ann\u00E9es d'exp\u00E9rience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "mat-icon", 20);
    i0.ɵɵtext(71, "history");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(72, "input", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "mat-form-field", 19)(74, "mat-label");
    i0.ɵɵtext(75, "Salaire souhait\u00E9 (\u20AC/an)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "mat-icon", 20);
    i0.ɵɵtext(77, "euro");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(78, "input", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "mat-form-field", 26)(80, "mat-label");
    i0.ɵɵtext(81, "Comp\u00E9tences");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "mat-icon", 20);
    i0.ɵɵtext(83, "code");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(84, "input", 31);
    i0.ɵɵelementStart(85, "mat-hint");
    i0.ɵɵtext(86, "S\u00E9parez les comp\u00E9tences par des virgules");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(87, "mat-form-field", 26)(88, "mat-label");
    i0.ɵɵtext(89, "Langues");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "mat-icon", 20);
    i0.ɵɵtext(91, "language");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(92, "input", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "mat-form-field", 26)(94, "mat-label");
    i0.ɵɵtext(95, "Formation / Dipl\u00F4mes");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(96, "textarea", 33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(97, "mat-checkbox", 34)(98, "span", 35);
    i0.ɵɵtext(99, "Je suis ouvert(e) aux opportunit\u00E9s professionnelles");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(100, "mat-tab", 36)(101, "div", 16)(102, "h3", 17)(103, "mat-icon");
    i0.ɵɵtext(104, "link");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(105, " Liens professionnels ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(106, "div", 18)(107, "mat-form-field", 26)(108, "mat-label");
    i0.ɵɵtext(109, "LinkedIn");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(110, "mat-icon", 20);
    i0.ɵɵtext(111, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(112, "input", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "mat-form-field", 26)(114, "mat-label");
    i0.ɵɵtext(115, "GitHub");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(116, "mat-icon", 20);
    i0.ɵɵtext(117, "code");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(118, "input", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "mat-form-field", 26)(120, "mat-label");
    i0.ɵɵtext(121, "Portfolio");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(122, "mat-icon", 20);
    i0.ɵɵtext(123, "language");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(124, "input", 39);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(125, "mat-tab", 40);
    i0.ɵɵtemplate(126, CandidateProfileComponent_Conditional_1_Conditional_126_Template, 38, 8, "div", 16)(127, CandidateProfileComponent_Conditional_1_Conditional_127_Template, 11, 0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(128, "div", 41)(129, "div", 42)(130, "span", 43);
    i0.ɵɵtext(131, "Exp\u00E9rience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "span", 44);
    i0.ɵɵtext(133);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(134, "span", 45);
    i0.ɵɵtext(135, "ans d'exp\u00E9rience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(136, "div", 46)(137, "span");
    i0.ɵɵtext(138);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(139, CandidateProfileComponent_Conditional_1_Conditional_139_Template, 7, 1, "div", 42)(140, CandidateProfileComponent_Conditional_1_Conditional_140_Template, 7, 1, "div", 42);
    i0.ɵɵelementStart(141, "div", 42)(142, "span", 43);
    i0.ɵɵtext(143, "Statut");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(144, CandidateProfileComponent_Conditional_1_Conditional_144_Template, 5, 0, "div", 47)(145, CandidateProfileComponent_Conditional_1_Conditional_145_Template, 5, 0);
    i0.ɵɵelementStart(146, "p", 48);
    i0.ɵɵtext(147, " Mettez \u00E0 jour votre disponibilit\u00E9 dans l'onglet Professionnel ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(148, "div", 42)(149, "span", 43);
    i0.ɵɵtext(150, "R\u00E9seaux");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(151, "div", 49);
    i0.ɵɵtemplate(152, CandidateProfileComponent_Conditional_1_Conditional_152_Template, 4, 1, "a", 50)(153, CandidateProfileComponent_Conditional_1_Conditional_153_Template, 4, 1, "a", 50)(154, CandidateProfileComponent_Conditional_1_Conditional_154_Template, 4, 1, "a", 50);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(155, "div", 51)(156, "button", 52);
    i0.ɵɵtemplate(157, CandidateProfileComponent_Conditional_1_Conditional_157_Template, 1, 0, "mat-spinner", 53)(158, CandidateProfileComponent_Conditional_1_Conditional_158_Template, 2, 0);
    i0.ɵɵtext(159, " Enregistrer les modifications ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_11_0;
    let tmp_14_0;
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
    i0.ɵɵtextInterpolate((ctx_r1.profile == null ? null : ctx_r1.profile.fullName) || "Profil Candidat");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.profile == null ? null : ctx_r1.profile.email);
    i0.ɵɵadvance();
    i0.ɵɵconditional(15, (ctx_r1.profile == null ? null : ctx_r1.profile.openToWork) ? 15 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("selectedIndex", ctx_r1.selectedTabIndex);
    i0.ɵɵadvance(108);
    i0.ɵɵconditional(126, ctx_r1.showChangePassword ? 126 : 127);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(((tmp_11_0 = ctx_r1.form.get("yearsExperience")) == null ? null : tmp_11_0.value) || 0);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap("badge " + ctx_r1.experienceLevelColor);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.experienceLevelBadge, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(139, ((tmp_14_0 = ctx_r1.form.get("desiredSalary")) == null ? null : tmp_14_0.value) ? 139 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(140, ctx_r1.skillsPreview.length > 0 ? 140 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(144, (ctx_r1.profile == null ? null : ctx_r1.profile.openToWork) ? 144 : 145);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(152, ((tmp_17_0 = ctx_r1.form.get("linkedinUrl")) == null ? null : tmp_17_0.value) ? 152 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(153, ((tmp_18_0 = ctx_r1.form.get("githubUrl")) == null ? null : tmp_18_0.value) ? 153 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(154, ((tmp_19_0 = ctx_r1.form.get("portfolioUrl")) == null ? null : tmp_19_0.value) ? 154 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.saving || ctx_r1.form.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(157, ctx_r1.saving ? 157 : 158);
} }
export class CandidateProfileComponent {
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
        // Stats placeholder (can be enhanced with actual data)
        this.profileStats = {
            applicationsCount: 0,
            messagesCount: 0,
            postsCount: 0,
            certificationsCount: 0
        };
        this.form = this.fb.group({
            fullName: [''],
            phoneNumber: [''],
            city: [''],
            country: [''],
            headline: [''],
            summary: [''],
            linkedinUrl: [''],
            githubUrl: [''],
            portfolioUrl: [''],
            yearsExperience: [null],
            skills: [''],
            languages: [''],
            education: [''],
            openToWork: [false],
            desiredSalary: ['']
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
                    headline: res.data.headline ?? '',
                    summary: res.data.summary ?? '',
                    linkedinUrl: res.data.linkedinUrl ?? '',
                    githubUrl: res.data.githubUrl ?? '',
                    portfolioUrl: res.data.portfolioUrl ?? '',
                    yearsExperience: res.data.yearsExperience ?? null,
                    skills: res.data.skills ?? '',
                    languages: res.data.languages ?? '',
                    education: res.data.education ?? '',
                    openToWork: res.data.openToWork ?? false,
                    desiredSalary: res.data.desiredSalary ?? ''
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
                this.alertSvc.success('Photo de profil mise à jour');
            },
            error: err => {
                this.uploadingPhoto = false;
                this.alertSvc.error('Erreur', err.error?.message || 'Erreur upload photo');
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
    get skillsArray() {
        const skills = this.form.get('skills')?.value || '';
        return skills ? skills.split(',').map((s) => s.trim()).filter((s) => s) : [];
    }
    get skillsPreview() {
        return this.skillsArray.slice(0, 6);
    }
    get hasMoreSkills() {
        return this.skillsArray.length > 6;
    }
    get experienceLevelBadge() {
        const years = this.form.get('yearsExperience')?.value || 0;
        if (years < 2)
            return 'JUNIOR';
        if (years < 5)
            return 'MID';
        if (years < 10)
            return 'SENIOR';
        return 'LEAD';
    }
    get experienceLevelColor() {
        const level = this.experienceLevelBadge;
        const colors = {
            'JUNIOR': 'badge-info',
            'MID': 'badge-primary',
            'SENIOR': 'badge-warning',
            'LEAD': 'badge-success'
        };
        return colors[level];
    }
    static { this.ɵfac = function CandidateProfileComponent_Factory(t) { return new (t || CandidateProfileComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CandidateProfileComponent, selectors: [["app-candidate-profile"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 1, consts: [[1, "loading-center"], ["diameter", "40"], [3, "ngSubmit", "formGroup"], [1, "profile-wrapper"], [1, "profile-header"], [1, "profile-avatar-container"], ["alt", "Photo de profil", 1, "profile-avatar", 3, "src"], ["matTooltip", "Cliquer pour changer la photo", 1, "photo-upload-btn"], ["diameter", "16"], ["type", "file", "accept", "image/*", "hidden", "", 3, "change", "disabled"], [1, "profile-header-info"], [1, "badge", "badge-success"], [1, "profile-container"], [1, "profile-main"], [1, "profile-content", 3, "selectedIndexChange", "selectedIndex"], ["label", "Informations"], [1, "form-section"], [1, "form-section-title"], [1, "form-grid"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "phoneNumber"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "country"], ["label", "Professionnel"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "headline", "placeholder", "Ex: D\u00E9veloppeur Full Stack React/Node.js"], ["matInput", "", "formControlName", "summary", "rows", "4", "placeholder", "D\u00E9crivez votre exp\u00E9rience, vos objectifs professionnels..."], ["matInput", "", "type", "number", "formControlName", "yearsExperience", "min", "0"], ["matInput", "", "formControlName", "desiredSalary", "placeholder", "Ex: 45000"], ["matInput", "", "formControlName", "skills", "placeholder", "Ex: Java, Angular, Spring Boot, SQL..."], ["matInput", "", "formControlName", "languages", "placeholder", "Ex: Fran\u00E7ais (natif), Anglais (courant)"], ["matInput", "", "formControlName", "education", "rows", "3", "placeholder", "Ex: Master Informatique - Universit\u00E9 Paris-Saclay (2022), BTS SIO (2020)..."], ["formControlName", "openToWork", "color", "primary", 1, "open-to-work-check"], [2, "font-weight", "500"], ["label", "Liens"], ["matInput", "", "formControlName", "linkedinUrl", "placeholder", "https://linkedin.com/in/..."], ["matInput", "", "formControlName", "githubUrl", "placeholder", "https://github.com/..."], ["matInput", "", "formControlName", "portfolioUrl", "placeholder", "https://monportfolio.com"], ["label", "S\u00E9curit\u00E9"], [1, "profile-sidebar"], [1, "sidebar-card"], [1, "card-label"], [1, "card-value"], [1, "card-subtext"], [2, "margin-top", "12px"], [2, "margin-top", "8px"], [2, "font-size", "0.85rem", "color", "var(--text-secondary)", "margin-top", "8px", "margin-bottom", "0"], [2, "display", "flex", "flex-direction", "column", "gap", "8px", "margin-top", "12px"], ["target", "_blank", 1, "link-icon", 3, "href"], [1, "form-actions"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18"], [1, "profile-avatar", "profile-avatar-placeholder"], [1, "password-form", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "password", "formControlName", "oldPassword"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "newPassword"], ["matInput", "", "type", "password", "formControlName", "confirmPassword"], [1, "password-form-actions"], ["mat-stroked-button", "", "color", "accent", "type", "button", 3, "click"], [2, "color", "var(--text-secondary)", "margin-bottom", "20px"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "skills-container", 2, "margin-top", "8px", "margin-bottom", "8px"], [1, "link-icon"], [1, "badge", "badge-warning"]], template: function CandidateProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CandidateProfileComponent_Conditional_0_Template, 2, 0, "div", 0)(1, CandidateProfileComponent_Conditional_1_Template, 160, 23);
        } if (rf & 2) {
            i0.ɵɵconditional(0, ctx.loading ? 0 : 1);
        } }, dependencies: [CommonModule, i1.NgIf, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NumberValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.MinValidator, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, MatFormFieldModule, i3.MatFormField, i3.MatLabel, i3.MatHint, i3.MatError, i3.MatPrefix, MatInputModule, i4.MatInput, MatButtonModule, i5.MatButton, MatIconModule, i6.MatIcon, MatCheckboxModule, i7.MatCheckbox, MatProgressSpinnerModule, i8.MatProgressSpinner, MatTabsModule, i9.MatTab, i9.MatTabGroup, MatCardModule, MatDividerModule,
            MatChipsModule, i10.MatChip, MatTooltipModule, i11.MatTooltip], styles: ["@import '../../../shared/styles/profile.shared.scss';\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   CANDIDATE-SPECIFIC[_ngcontent-%COMP%]   STYLES[_ngcontent-%COMP%]   ============\n\n.profile-wrapper[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  animation: fadeIn 300ms ease-in;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #fcb900, #fef4d9);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    background: linear-gradient(to bottom, rgba(248, 249, 251, 0), #f8f9fb);\n    pointer-events: none;\n  }\n}\n\n.photo-upload-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 150ms ease;\n\n  &:hover:not(.loading) {\n    background: var(--primary-dark);\n    transform: scale(1.1);\n  }\n\n  &.loading {\n    background: #94a3b8;\n    cursor: not-allowed;\n  }\n\n  mat-icon {\n    font-size: 20px;\n    width: 20px;\n    height: 20px;\n  }\n\n  mat-spinner {\n    display: flex;\n  }\n\n  input {\n    display: none;\n  }\n}\n\n.open-to-work-check[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  display: flex;\n\n  ::ng-deep {\n    .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background {\n      border-color: var(--primary);\n      background-color: var(--primary);\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   FORM[_ngcontent-%COMP%]   OVERRIDES[_ngcontent-%COMP%]   ============\n\n.form-section[_ngcontent-%COMP%] {\n  background: white;\n\n  &:first-child {\n    padding-top: 24px;\n  }\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  mat-form-field {\n    ::ng-deep {\n      .mat-mdc-text-field-wrapper {\n        padding-bottom: 0.75rem;\n      }\n\n      .mdc-text-field--filled {\n        &.mdc-text-field--focused {\n          .mdc-text-field__ripple {\n            background-color: rgba(252, 185, 0, 0.08);\n          }\n        }\n      }\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   HINT[_ngcontent-%COMP%]   TEXT[_ngcontent-%COMP%]   ============\n[_ngcontent-%COMP%]  {\n  .mat-mdc-form-field-hint {\n    color: var(--text-secondary) !important;\n    font-size: 0.75rem;\n  }\n\n  .mat-mdc-form-field-error {\n    color: var(--color-error) !important;\n    font-size: 0.75rem;\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   PASSWORD[_ngcontent-%COMP%]   FORM[_ngcontent-%COMP%]   ============\n.password-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  mat-form-field {\n    width: 100%;\n  }\n}\n\n.password-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n\n  button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 44px;\n    padding: 0 24px;\n\n    mat-spinner {\n      margin-right: 4px;\n    }\n  }\n\n  @include sm {\n    flex-direction: column-reverse;\n\n    button {\n      width: 100%;\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   RESPONSIVE[_ngcontent-%COMP%]   STYLES[_ngcontent-%COMP%]   ============\n\n@include[_ngcontent-%COMP%]   lg[_ngcontent-%COMP%] {\n  .profile-container {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n\n  .profile-sidebar {\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    .sidebar-card {\n      flex: 1 1 calc(50% - 8px);\n      min-width: 200px;\n    }\n  }\n\n  .profile-main {\n    width: 100%;\n  }\n}\n\n@include md {\n  .profile-header {\n    height: 160px;\n    border-radius: 8px 8px 0 0;\n  }\n\n  .profile-avatar {\n    width: 100px;\n    height: 100px;\n\n    &::before {\n      width: 100px;\n      height: 100px;\n      bottom: 0;\n      left: 24px;\n    }\n  }\n\n  .profile-header-info {\n    bottom: 16px;\n    right: 16px;\n\n    h1 {\n      font-size: 1.375rem;\n    }\n\n    p {\n      font-size: 0.875rem;\n    }\n  }\n\n  .photo-upload-btn {\n    bottom: 40px;\n    right: 12px;\n    width: 36px;\n    height: 36px;\n  }\n}\n\n@include sm {\n  .profile-sidebar {\n    flex-direction: column;\n    gap: 12px;\n\n    .sidebar-card {\n      flex: 1 1 100%;\n    }\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .form-actions {\n    flex-direction: column;\n    gap: 12px;\n    padding: 16px;\n\n    button {\n      width: 100%;\n    }\n  }\n\n  ::ng-deep {\n    .profile-content {\n      .mat-mdc-tab-labels {\n        padding: 0 12px;\n      }\n\n      .mat-mdc-tab-label {\n        min-width: 80px;\n        padding: 0 12px;\n        font-size: 0.875rem;\n      }\n    }\n  }\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   ANIMATIONS[_ngcontent-%COMP%]   ============\n@keyframes[_ngcontent-%COMP%]   fadeIn[_ngcontent-%COMP%] {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.form-section[_ngcontent-%COMP%] {\n  animation: fadeIn 300ms ease-out;\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   LOADING[_ngcontent-%COMP%]   STATE[_ngcontent-%COMP%]   ============\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 80px 24px;\n  min-height: 600px;\n  background: #f8f9fb;\n}\n\n//[_ngcontent-%COMP%]   ============[_ngcontent-%COMP%]   PRINT[_ngcontent-%COMP%]   STYLES[_ngcontent-%COMP%]   ============\n@media[_ngcontent-%COMP%]   print[_ngcontent-%COMP%] {\n  .photo-upload-btn,\n  .form-actions,\n  .password-form {\n    display: none !important;\n  }\n\n  .profile-content {\n    box-shadow: none;\n    border: none;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CandidateProfileComponent, [{
        type: Component,
        args: [{ selector: 'app-candidate-profile', standalone: true, imports: [
                    CommonModule, FormsModule, ReactiveFormsModule,
                    MatFormFieldModule, MatInputModule, MatButtonModule,
                    MatIconModule, MatCheckboxModule,
                    MatProgressSpinnerModule,
                    MatTabsModule, MatCardModule, MatDividerModule,
                    MatChipsModule, MatTooltipModule
                ], template: "@if (loading) {\n  <div class=\"loading-center\">\n    <mat-spinner diameter=\"40\" />\n  </div>\n} @else {\n  <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <!-- Header Banner with Avatar -->\n    <div class=\"profile-wrapper\">\n      <div class=\"profile-header\">\n        <div class=\"profile-avatar-container\">\n          @if (profile?.profilePicture) {\n            <img [src]=\"profile!.profilePicture\" alt=\"Photo de profil\" class=\"profile-avatar\" />\n          } @else {\n            <div class=\"profile-avatar profile-avatar-placeholder\">\n              <mat-icon>account_circle</mat-icon>\n            </div>\n          }\n          <label class=\"photo-upload-btn\" [class.loading]=\"uploadingPhoto\" matTooltip=\"Cliquer pour changer la photo\">\n            @if (uploadingPhoto) {\n              <mat-spinner diameter=\"16\" />\n            } @else {\n              <mat-icon>photo_camera</mat-icon>\n            }\n            <input type=\"file\" accept=\"image/*\" (change)=\"onPhotoSelect($event)\" hidden [disabled]=\"uploadingPhoto\" />\n          </label>\n        </div>\n\n        <div class=\"profile-header-info\">\n          <h1>{{ profile?.fullName || 'Profil Candidat' }}</h1>\n          <p>{{ profile?.email }}</p>\n          @if (profile?.openToWork) {\n            <span class=\"badge badge-success\">\n              <mat-icon>check_circle</mat-icon>\n              Ouvert aux opportunit\u00E9s\n            </span>\n          }\n        </div>\n      </div>\n\n      <div class=\"profile-container\">\n        <!-- Main Content Area with Tabs -->\n        <div class=\"profile-main\">\n          <mat-tab-group class=\"profile-content\" [(selectedIndex)]=\"selectedTabIndex\">\n            <!-- Tab 1: Informations G\u00E9n\u00E9rales -->\n            <mat-tab label=\"Informations\">\n              <div class=\"form-section\">\n                <h3 class=\"form-section-title\">\n                  <mat-icon>person</mat-icon>\n                  Informations g\u00E9n\u00E9rales\n                </h3>\n                <div class=\"form-grid\">\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Nom complet</mat-label>\n                    <mat-icon matPrefix>account_box</mat-icon>\n                    <input matInput formControlName=\"fullName\" />\n                  </mat-form-field>\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>T\u00E9l\u00E9phone</mat-label>\n                    <mat-icon matPrefix>phone</mat-icon>\n                    <input matInput formControlName=\"phoneNumber\" />\n                  </mat-form-field>\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Ville</mat-label>\n                    <mat-icon matPrefix>location_city</mat-icon>\n                    <input matInput formControlName=\"city\" />\n                  </mat-form-field>\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Pays</mat-label>\n                    <mat-icon matPrefix>public</mat-icon>\n                    <input matInput formControlName=\"country\" />\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-tab>\n\n            <!-- Tab 2: Profil Professionnel -->\n            <mat-tab label=\"Professionnel\">\n              <div class=\"form-section\">\n                <h3 class=\"form-section-title\">\n                  <mat-icon>work</mat-icon>\n                  Profil professionnel\n                </h3>\n                <div class=\"form-grid\">\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Titre / Poste recherch\u00E9</mat-label>\n                    <mat-icon matPrefix>badge</mat-icon>\n                    <input matInput formControlName=\"headline\"\n                      placeholder=\"Ex: D\u00E9veloppeur Full Stack React/Node.js\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>R\u00E9sum\u00E9 professionnel</mat-label>\n                    <textarea matInput formControlName=\"summary\" rows=\"4\"\n                      placeholder=\"D\u00E9crivez votre exp\u00E9rience, vos objectifs professionnels...\"></textarea>\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Ann\u00E9es d'exp\u00E9rience</mat-label>\n                    <mat-icon matPrefix>history</mat-icon>\n                    <input matInput type=\"number\" formControlName=\"yearsExperience\" min=\"0\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\">\n                    <mat-label>Salaire souhait\u00E9 (\u20AC/an)</mat-label>\n                    <mat-icon matPrefix>euro</mat-icon>\n                    <input matInput formControlName=\"desiredSalary\" placeholder=\"Ex: 45000\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Comp\u00E9tences</mat-label>\n                    <mat-icon matPrefix>code</mat-icon>\n                    <input matInput formControlName=\"skills\"\n                      placeholder=\"Ex: Java, Angular, Spring Boot, SQL...\" />\n                    <mat-hint>S\u00E9parez les comp\u00E9tences par des virgules</mat-hint>\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Langues</mat-label>\n                    <mat-icon matPrefix>language</mat-icon>\n                    <input matInput formControlName=\"languages\"\n                      placeholder=\"Ex: Fran\u00E7ais (natif), Anglais (courant)\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Formation / Dipl\u00F4mes</mat-label>\n                    <textarea matInput formControlName=\"education\" rows=\"3\"\n                      placeholder=\"Ex: Master Informatique - Universit\u00E9 Paris-Saclay (2022), BTS SIO (2020)...\"></textarea>\n                  </mat-form-field>\n                </div>\n\n                <mat-checkbox formControlName=\"openToWork\" color=\"primary\" class=\"open-to-work-check\">\n                  <span style=\"font-weight: 500;\">Je suis ouvert(e) aux opportunit\u00E9s professionnelles</span>\n                </mat-checkbox>\n              </div>\n            </mat-tab>\n\n            <!-- Tab 3: Liens Professionnels -->\n            <mat-tab label=\"Liens\">\n              <div class=\"form-section\">\n                <h3 class=\"form-section-title\">\n                  <mat-icon>link</mat-icon>\n                  Liens professionnels\n                </h3>\n                <div class=\"form-grid\">\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>LinkedIn</mat-label>\n                    <mat-icon matPrefix>business</mat-icon>\n                    <input matInput formControlName=\"linkedinUrl\" placeholder=\"https://linkedin.com/in/...\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>GitHub</mat-label>\n                    <mat-icon matPrefix>code</mat-icon>\n                    <input matInput formControlName=\"githubUrl\" placeholder=\"https://github.com/...\" />\n                  </mat-form-field>\n\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\n                    <mat-label>Portfolio</mat-label>\n                    <mat-icon matPrefix>language</mat-icon>\n                    <input matInput formControlName=\"portfolioUrl\" placeholder=\"https://monportfolio.com\" />\n                  </mat-form-field>\n                </div>\n              </div>\n            </mat-tab>\n\n            <!-- Tab 4: S\u00E9curit\u00E9 -->\n            <mat-tab label=\"S\u00E9curit\u00E9\">\n              @if (showChangePassword) {\n                <div class=\"form-section\">\n                  <h3 class=\"form-section-title\">\n                    <mat-icon>lock</mat-icon>\n                    Changer de mot de passe\n                  </h3>\n                  <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"changePassword()\" class=\"password-form\">\n                    <mat-form-field appearance=\"outline\" class=\"full-width\">\n                      <mat-label>Ancien mot de passe</mat-label>\n                      <mat-icon matPrefix>password</mat-icon>\n                      <input matInput type=\"password\" formControlName=\"oldPassword\" />\n                      <mat-error *ngIf=\"changePasswordForm.get('oldPassword')?.hasError('required')\">\n                        Requis\n                      </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"full-width\">\n                      <mat-label>Nouveau mot de passe</mat-label>\n                      <mat-icon matPrefix>vpn_key</mat-icon>\n                      <input matInput type=\"password\" formControlName=\"newPassword\" />\n                      <mat-error *ngIf=\"changePasswordForm.get('newPassword')?.hasError('required')\">\n                        Requis\n                      </mat-error>\n                      <mat-error *ngIf=\"changePasswordForm.get('newPassword')?.hasError('minlength')\">\n                        Minimum 6 caract\u00E8res\n                      </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field appearance=\"outline\" class=\"full-width\">\n                      <mat-label>Confirmer mot de passe</mat-label>\n                      <mat-icon matPrefix>vpn_key</mat-icon>\n                      <input matInput type=\"password\" formControlName=\"confirmPassword\" />\n                      <mat-error *ngIf=\"changePasswordForm.get('confirmPassword')?.hasError('required')\">\n                        Requis\n                      </mat-error>\n                      <mat-error *ngIf=\"changePasswordForm.get('confirmPassword')?.hasError('minlength')\">\n                        Minimum 6 caract\u00E8res\n                      </mat-error>\n                    </mat-form-field>\n\n                    <div class=\"password-form-actions\">\n                      <button mat-raised-button color=\"primary\" type=\"submit\"\n                        [disabled]=\"changingPassword || changePasswordForm.invalid\">\n                        @if (changingPassword) {\n                          <mat-spinner diameter=\"18\" />\n                        } @else {\n                          <mat-icon>lock</mat-icon>\n                        }\n                        Changer mot de passe\n                      </button>\n                      <button mat-stroked-button color=\"accent\" type=\"button\"\n                        (click)=\"showChangePassword = false; changePasswordForm.reset()\">\n                        <mat-icon>close</mat-icon>\n                        Annuler\n                      </button>\n                    </div>\n                  </form>\n                </div>\n              } @else {\n                <div class=\"form-section\">\n                  <h3 class=\"form-section-title\">\n                    <mat-icon>shield</mat-icon>\n                    S\u00E9curit\u00E9 du compte\n                  </h3>\n                  <p style=\"color: var(--text-secondary); margin-bottom: 20px;\">\n                    G\u00E9rez les param\u00E8tres de s\u00E9curit\u00E9 de votre compte\n                  </p>\n                  <button mat-stroked-button type=\"button\" (click)=\"showChangePassword = true\">\n                    <mat-icon>vpn_key</mat-icon>\n                    Changer mot de passe\n                  </button>\n                </div>\n              }\n            </mat-tab>\n          </mat-tab-group>\n        </div>\n\n        <!-- Sidebar -->\n        <div class=\"profile-sidebar\">\n          <!-- Experience Card -->\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">Exp\u00E9rience</span>\n            <span class=\"card-value\">{{ form.get('yearsExperience')?.value || 0 }}</span>\n            <span class=\"card-subtext\">ans d'exp\u00E9rience</span>\n            <div style=\"margin-top: 12px;\">\n              <span [class]=\"'badge ' + experienceLevelColor\">\n                {{ experienceLevelBadge }}\n              </span>\n            </div>\n          </div>\n\n          <!-- Salary Card -->\n          @if (form.get('desiredSalary')?.value) {\n            <div class=\"sidebar-card\">\n              <span class=\"card-label\">Salaire</span>\n              <span class=\"card-value\">{{ form.get('desiredSalary')?.value }}</span>\n              <span class=\"card-subtext\">\u20AC / an</span>\n            </div>\n          }\n\n          <!-- Skills Preview Card -->\n          @if (skillsPreview.length > 0) {\n            <div class=\"sidebar-card\">\n              <span class=\"card-label\">Comp\u00E9tences</span>\n              <div class=\"skills-container\" style=\"margin-top: 8px; margin-bottom: 8px;\">\n                @for (skill of skillsPreview; track skill) {\n                  <mat-chip>{{ skill }}</mat-chip>\n                }\n              </div>\n              @if (hasMoreSkills) {\n                <a class=\"link-icon\">\n                  +{{ skillsArray.length - 6 }} plus\n                  <mat-icon>arrow_forward</mat-icon>\n                </a>\n              }\n            </div>\n          }\n\n          <!-- Profile Status Card -->\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">Statut</span>\n            @if (profile?.openToWork) {\n              <div style=\"margin-top: 8px;\">\n                <span class=\"badge badge-success\">\n                  <mat-icon>check_circle</mat-icon>\n                  Actif\n                </span>\n              </div>\n            } @else {\n              <div style=\"margin-top: 8px;\">\n                <span class=\"badge badge-warning\">\n                  <mat-icon>schedule</mat-icon>\n                  Non actif\n                </span>\n              </div>\n            }\n            <p style=\"font-size: 0.85rem; color: var(--text-secondary); margin-top: 8px; margin-bottom: 0;\">\n              Mettez \u00E0 jour votre disponibilit\u00E9 dans l'onglet Professionnel\n            </p>\n          </div>\n\n          <!-- Quick Links Card -->\n          <div class=\"sidebar-card\">\n            <span class=\"card-label\">R\u00E9seaux</span>\n            <div style=\"display: flex; flex-direction: column; gap: 8px; margin-top: 12px;\">\n              @if (form.get('linkedinUrl')?.value) {\n                <a href=\"{{ form.get('linkedinUrl')?.value }}\" target=\"_blank\" class=\"link-icon\">\n                  <mat-icon>business</mat-icon>\n                  LinkedIn\n                </a>\n              }\n              @if (form.get('githubUrl')?.value) {\n                <a href=\"{{ form.get('githubUrl')?.value }}\" target=\"_blank\" class=\"link-icon\">\n                  <mat-icon>code</mat-icon>\n                  GitHub\n                </a>\n              }\n              @if (form.get('portfolioUrl')?.value) {\n                <a href=\"{{ form.get('portfolioUrl')?.value }}\" target=\"_blank\" class=\"link-icon\">\n                  <mat-icon>language</mat-icon>\n                  Portfolio\n                </a>\n              }\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Form Actions -->\n    <div class=\"form-actions\">\n      <button mat-raised-button color=\"primary\" type=\"submit\" [disabled]=\"saving || form.invalid\">\n        @if (saving) {\n          <mat-spinner diameter=\"18\" />\n        } @else {\n          <mat-icon>save</mat-icon>\n        }\n        Enregistrer les modifications\n      </button>\n    </div>\n  </form>\n}\n", styles: ["@import '../../../shared/styles/profile.shared.scss';\n\n// ============ CANDIDATE-SPECIFIC STYLES ============\n\n.profile-wrapper {\n  margin-top: 80px;\n  animation: fadeIn 300ms ease-in;\n}\n\n.profile-header {\n  background: linear-gradient(135deg, #fcb900, #fef4d9);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 50px;\n    background: linear-gradient(to bottom, rgba(248, 249, 251, 0), #f8f9fb);\n    pointer-events: none;\n  }\n}\n\n.photo-upload-btn {\n  position: absolute;\n  bottom: 50px;\n  right: 16px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--primary);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  border: 2px solid white;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  transition: all 150ms ease;\n\n  &:hover:not(.loading) {\n    background: var(--primary-dark);\n    transform: scale(1.1);\n  }\n\n  &.loading {\n    background: #94a3b8;\n    cursor: not-allowed;\n  }\n\n  mat-icon {\n    font-size: 20px;\n    width: 20px;\n    height: 20px;\n  }\n\n  mat-spinner {\n    display: flex;\n  }\n\n  input {\n    display: none;\n  }\n}\n\n.open-to-work-check {\n  margin-top: 12px;\n  display: flex;\n\n  ::ng-deep {\n    .mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background {\n      border-color: var(--primary);\n      background-color: var(--primary);\n    }\n  }\n}\n\n// ============ FORM OVERRIDES ============\n\n.form-section {\n  background: white;\n\n  &:first-child {\n    padding-top: 24px;\n  }\n}\n\n.form-grid {\n  mat-form-field {\n    ::ng-deep {\n      .mat-mdc-text-field-wrapper {\n        padding-bottom: 0.75rem;\n      }\n\n      .mdc-text-field--filled {\n        &.mdc-text-field--focused {\n          .mdc-text-field__ripple {\n            background-color: rgba(252, 185, 0, 0.08);\n          }\n        }\n      }\n    }\n  }\n}\n\n// ============ HINT TEXT ============\n::ng-deep {\n  .mat-mdc-form-field-hint {\n    color: var(--text-secondary) !important;\n    font-size: 0.75rem;\n  }\n\n  .mat-mdc-form-field-error {\n    color: var(--color-error) !important;\n    font-size: 0.75rem;\n  }\n}\n\n// ============ PASSWORD FORM ============\n.password-form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  mat-form-field {\n    width: 100%;\n  }\n}\n\n.password-form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  margin-top: 20px;\n\n  button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    height: 44px;\n    padding: 0 24px;\n\n    mat-spinner {\n      margin-right: 4px;\n    }\n  }\n\n  @include sm {\n    flex-direction: column-reverse;\n\n    button {\n      width: 100%;\n    }\n  }\n}\n\n// ============ RESPONSIVE STYLES ============\n\n@include lg {\n  .profile-container {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n\n  .profile-sidebar {\n    flex-direction: row;\n    flex-wrap: wrap;\n\n    .sidebar-card {\n      flex: 1 1 calc(50% - 8px);\n      min-width: 200px;\n    }\n  }\n\n  .profile-main {\n    width: 100%;\n  }\n}\n\n@include md {\n  .profile-header {\n    height: 160px;\n    border-radius: 8px 8px 0 0;\n  }\n\n  .profile-avatar {\n    width: 100px;\n    height: 100px;\n\n    &::before {\n      width: 100px;\n      height: 100px;\n      bottom: 0;\n      left: 24px;\n    }\n  }\n\n  .profile-header-info {\n    bottom: 16px;\n    right: 16px;\n\n    h1 {\n      font-size: 1.375rem;\n    }\n\n    p {\n      font-size: 0.875rem;\n    }\n  }\n\n  .photo-upload-btn {\n    bottom: 40px;\n    right: 12px;\n    width: 36px;\n    height: 36px;\n  }\n}\n\n@include sm {\n  .profile-sidebar {\n    flex-direction: column;\n    gap: 12px;\n\n    .sidebar-card {\n      flex: 1 1 100%;\n    }\n  }\n\n  .form-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n\n  .form-actions {\n    flex-direction: column;\n    gap: 12px;\n    padding: 16px;\n\n    button {\n      width: 100%;\n    }\n  }\n\n  ::ng-deep {\n    .profile-content {\n      .mat-mdc-tab-labels {\n        padding: 0 12px;\n      }\n\n      .mat-mdc-tab-label {\n        min-width: 80px;\n        padding: 0 12px;\n        font-size: 0.875rem;\n      }\n    }\n  }\n}\n\n// ============ ANIMATIONS ============\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n.form-section {\n  animation: fadeIn 300ms ease-out;\n}\n\n// ============ LOADING STATE ============\n.loading-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 80px 24px;\n  min-height: 600px;\n  background: #f8f9fb;\n}\n\n// ============ PRINT STYLES ============\n@media print {\n  .photo-upload-btn,\n  .form-actions,\n  .password-form {\n    display: none !important;\n  }\n\n  .profile-content {\n    box-shadow: none;\n    border: none;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CandidateProfileComponent, { className: "CandidateProfileComponent", filePath: "app\\features\\candidate\\profile\\candidate-profile.component.ts", lineNumber: 34 }); })();
//# sourceMappingURL=candidate-profile.component.js.map