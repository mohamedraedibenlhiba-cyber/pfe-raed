import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../core/services/user.service';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { MessagingService } from '../../../core/services/messaging.service';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
function UserConnectionModalComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "mat-spinner", 4);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Chargement du profil...");
    i0.ɵɵelementEnd()();
} }
function UserConnectionModalComponent_Conditional_5_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 27);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.profile.profilePicture, i0.ɵɵsanitizeUrl)("alt", ctx_r1.profile.fullName);
} }
function UserConnectionModalComponent_Conditional_5_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(ctx_r1.profile.fullName), " ");
} }
function UserConnectionModalComponent_Conditional_5_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29)(1, "mat-icon");
    i0.ɵɵtext(2, "location_on");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getLocationLabel(), " ");
} }
function UserConnectionModalComponent_Conditional_5_p_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getSummaryText(), " ");
} }
function UserConnectionModalComponent_Conditional_5_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1, "Aucune presentation detaillee pour le moment.");
    i0.ɵɵelementEnd();
} }
function UserConnectionModalComponent_Conditional_5_div_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "Telephone");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.profile.phoneNumber);
} }
function UserConnectionModalComponent_Conditional_5_div_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "Experience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.profile.yearsExperience, " ans");
} }
function UserConnectionModalComponent_Conditional_5_div_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "Secteur");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.profile.companySector);
} }
function UserConnectionModalComponent_Conditional_5_div_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "Taille");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.profile.companySize);
} }
function UserConnectionModalComponent_Conditional_5_div_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "Competences");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.profile.skills);
} }
function UserConnectionModalComponent_Conditional_5_div_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "span", 33);
    i0.ɵɵtext(2, "Site web");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "a", 34);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", ctx_r1.profile.companyWebsite, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.profile.companyWebsite, " ");
} }
function UserConnectionModalComponent_Conditional_5_div_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "mat-icon");
    i0.ɵɵtext(2, "shield");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Une demande acceptee est necessaire avant d'ouvrir la messagerie.");
    i0.ɵɵelementEnd()();
} }
function UserConnectionModalComponent_Conditional_5_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "mat-form-field", 37)(2, "mat-label");
    i0.ɵɵtext(3, "Ajouter un message a votre demande");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "textarea", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function UserConnectionModalComponent_Conditional_5_div_49_Template_textarea_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.requestMessage, $event) || (ctx_r1.requestMessage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.requestMessage);
} }
function UserConnectionModalComponent_Conditional_5_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function UserConnectionModalComponent_Conditional_5_Conditional_53_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openConversation()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "chat");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Envoyer un message ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.processing);
} }
function UserConnectionModalComponent_Conditional_5_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function UserConnectionModalComponent_Conditional_5_Conditional_54_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.rejectRequest()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Refuser ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 39);
    i0.ɵɵlistener("click", function UserConnectionModalComponent_Conditional_5_Conditional_54_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.acceptRequest()); });
    i0.ɵɵelementStart(5, "mat-icon");
    i0.ɵɵtext(6, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Accepter ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.processing);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.processing);
} }
function UserConnectionModalComponent_Conditional_5_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function UserConnectionModalComponent_Conditional_5_Conditional_55_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cancelRequest()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Annuler la demande ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 41)(5, "mat-icon");
    i0.ɵɵtext(6, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(7, " Demande envoyee ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.processing || !ctx_r1.relationship.requestId);
} }
function UserConnectionModalComponent_Conditional_5_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function UserConnectionModalComponent_Conditional_5_Conditional_56_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.sendRequest()); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "person_add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Envoyer la demande ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r1.processing);
} }
function UserConnectionModalComponent_Conditional_5_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 41)(1, "mat-icon");
    i0.ɵɵtext(2, "info");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getRelationshipLabel(), " ");
} }
function UserConnectionModalComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "div", 6);
    i0.ɵɵtemplate(2, UserConnectionModalComponent_Conditional_5_img_2_Template, 1, 2, "img", 7)(3, UserConnectionModalComponent_Conditional_5_div_3_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 9)(5, "div", 10)(6, "span", 11);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 12);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "h2");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p", 13);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, UserConnectionModalComponent_Conditional_5_p_14_Template, 4, 1, "p", 14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 15)(16, "div", 16)(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Followers");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 16)(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "Abonnements");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 16)(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30, "Publications");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "div", 17)(32, "section", 18)(33, "h3");
    i0.ɵɵtext(34, "Presentation");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(35, UserConnectionModalComponent_Conditional_5_p_35_Template, 2, 1, "p", 19)(36, UserConnectionModalComponent_Conditional_5_ng_template_36_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "section", 18)(39, "h3");
    i0.ɵɵtext(40, "Informations utiles");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "div", 20);
    i0.ɵɵtemplate(42, UserConnectionModalComponent_Conditional_5_div_42_Template, 5, 1, "div", 21)(43, UserConnectionModalComponent_Conditional_5_div_43_Template, 5, 1, "div", 21)(44, UserConnectionModalComponent_Conditional_5_div_44_Template, 5, 1, "div", 21)(45, UserConnectionModalComponent_Conditional_5_div_45_Template, 5, 1, "div", 21)(46, UserConnectionModalComponent_Conditional_5_div_46_Template, 5, 1, "div", 21)(47, UserConnectionModalComponent_Conditional_5_div_47_Template, 5, 2, "div", 21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(48, UserConnectionModalComponent_Conditional_5_div_48_Template, 5, 0, "div", 22)(49, UserConnectionModalComponent_Conditional_5_div_49_Template, 5, 1, "div", 23);
    i0.ɵɵelementStart(50, "div", 24)(51, "button", 25);
    i0.ɵɵlistener("click", function UserConnectionModalComponent_Conditional_5_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dialogRef.close()); });
    i0.ɵɵtext(52, " Fermer ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(53, UserConnectionModalComponent_Conditional_5_Conditional_53_Template, 4, 1, "button", 26)(54, UserConnectionModalComponent_Conditional_5_Conditional_54_Template, 8, 2)(55, UserConnectionModalComponent_Conditional_5_Conditional_55_Template, 8, 1)(56, UserConnectionModalComponent_Conditional_5_Conditional_56_Template, 4, 1)(57, UserConnectionModalComponent_Conditional_5_Conditional_57_Template, 4, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noSummary_r8 = i0.ɵɵreference(37);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.profile.profilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.profile.profilePicture);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.getRoleLabel(ctx_r1.profile.role));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", ctx_r1.statusClass);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getRelationshipLabel(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.profile.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getPrimarySubtitle());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.profile.city || ctx_r1.profile.country);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.profile.followersCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.profile.followingCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.profile.postCount || 0);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.getSummaryText())("ngIfElse", noSummary_r8);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r1.profile.phoneNumber);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.profile.yearsExperience);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.profile.companySector);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.profile.companySize);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.profile.skills);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.profile.companyWebsite);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isCrossRole && !ctx_r1.relationship.canMessage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.canSendRequest);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.processing);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(53, ctx_r1.relationship.canMessage ? 53 : ctx_r1.canAcceptRequest ? 54 : ctx_r1.isOutgoingPending ? 55 : ctx_r1.canSendRequest ? 56 : 57);
} }
export class UserConnectionModalComponent {
    constructor() {
        this.dialogRef = inject((MatDialogRef));
        this.data = inject(MAT_DIALOG_DATA);
        this.userSvc = inject(UserService);
        this.connectionSvc = inject(ConnectionRequestService);
        this.messagingSvc = inject(MessagingService);
        this.alertSvc = inject(AlertService);
        this.auth = inject(AuthService);
        this.router = inject(Router);
        this.loading = true;
        this.processing = false;
        this.requestMessage = '';
        this.profile = null;
        this.relationship = {
            isFollowedByMe: false,
            isFollowingMe: false,
            canMessage: false,
            connectionRequestStatus: 'NONE',
            requestDirection: 'NONE',
            followersCount: 0,
            followingCount: 0
        };
    }
    ngOnInit() {
        this.refreshData();
    }
    get isCrossRole() {
        return !!this.profile && this.profile.role !== this.auth.currentUser?.role;
    }
    get canSendRequest() {
        return this.isCrossRole && this.relationship.connectionRequestStatus === 'NONE' && !this.relationship.canMessage;
    }
    get canAcceptRequest() {
        return this.relationship.connectionRequestStatus === 'PENDING' && this.relationship.requestDirection === 'INCOMING';
    }
    get isOutgoingPending() {
        return this.relationship.connectionRequestStatus === 'PENDING' && this.relationship.requestDirection === 'OUTGOING';
    }
    get statusClass() {
        return this.relationship.connectionRequestStatus.toLowerCase();
    }
    refreshData() {
        this.loading = true;
        forkJoin({
            profile: this.userSvc.getPublicProfile(this.data.userId),
            relationship: this.userSvc.getConnectionStatus(this.data.userId)
        }).subscribe({
            next: ({ profile, relationship }) => {
                this.profile = profile.data;
                this.relationship = relationship.data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
                this.alertSvc.error('Impossible de charger ce profil');
                this.dialogRef.close();
            }
        });
    }
    sendRequest() {
        if (this.processing) {
            return;
        }
        this.processing = true;
        this.connectionSvc.sendRequest(this.data.userId, this.requestMessage.trim() || undefined).subscribe({
            next: async () => {
                this.processing = false;
                await this.alertSvc.success('Demande envoyee');
                this.requestMessage = '';
                this.refreshData();
            },
            error: async (error) => {
                this.processing = false;
                await this.alertSvc.error('Envoi impossible', error?.error?.message);
            }
        });
    }
    acceptRequest() {
        if (!this.relationship.requestId || this.processing) {
            return;
        }
        this.processing = true;
        this.connectionSvc.acceptRequest(this.relationship.requestId).subscribe({
            next: async () => {
                this.processing = false;
                await this.alertSvc.success('Demande acceptee');
                this.refreshData();
            },
            error: async (error) => {
                this.processing = false;
                await this.alertSvc.error('Acceptation impossible', error?.error?.message);
            }
        });
    }
    rejectRequest() {
        if (!this.relationship.requestId || this.processing) {
            return;
        }
        this.processing = true;
        this.connectionSvc.rejectRequest(this.relationship.requestId).subscribe({
            next: async () => {
                this.processing = false;
                await this.alertSvc.success('Demande refusee');
                this.refreshData();
            },
            error: async (error) => {
                this.processing = false;
                await this.alertSvc.error('Refus impossible', error?.error?.message);
            }
        });
    }
    cancelRequest() {
        if (!this.relationship.requestId || this.processing) {
            return;
        }
        this.processing = true;
        this.connectionSvc.cancelRequest(this.relationship.requestId).subscribe({
            next: async () => {
                this.processing = false;
                await this.alertSvc.success('Demande annulee');
                this.refreshData();
            },
            error: async (error) => {
                this.processing = false;
                await this.alertSvc.error('Annulation impossible', error?.error?.message);
            }
        });
    }
    openConversation() {
        if (this.processing) {
            return;
        }
        this.processing = true;
        this.messagingSvc.getOrCreateConversation(this.data.userId).subscribe({
            next: ({ data }) => {
                this.processing = false;
                this.router.navigate([this.auth.isEnterprise ? '/enterprise/messages' : '/candidate/messages'], {
                    queryParams: { convId: data.id }
                });
                this.dialogRef.close();
            },
            error: async (error) => {
                this.processing = false;
                await this.alertSvc.error('Messagerie indisponible', error?.error?.message);
            }
        });
    }
    getRoleLabel(role) {
        return role === 'ROLE_ENTERPRISE' ? 'Entreprise' : role === 'ROLE_CANDIDATE' ? 'Candidat' : role;
    }
    getPrimarySubtitle() {
        if (!this.profile) {
            return '';
        }
        if (this.profile.role === 'ROLE_ENTERPRISE') {
            return this.profile.companyName || 'Entreprise';
        }
        return this.profile.headline || 'Profil professionnel';
    }
    getSummaryText() {
        if (!this.profile) {
            return '';
        }
        return this.profile.summary || this.profile.companyDescription || '';
    }
    getLocationLabel() {
        if (!this.profile) {
            return '';
        }
        return [this.profile.city, this.profile.country].filter(part => !!part).join(', ');
    }
    getRelationshipLabel() {
        if (this.relationship.canMessage) {
            return 'Messagerie active';
        }
        switch (this.relationship.connectionRequestStatus) {
            case 'PENDING':
                return this.relationship.requestDirection === 'INCOMING' ? 'Invitation recue' : 'Invitation envoyee';
            case 'ACCEPTED':
                return 'Connexion acceptee';
            case 'REJECTED':
                return 'Invitation refusee';
            default:
                return this.isCrossRole ? 'Aucune connexion' : 'Contact direct';
        }
    }
    initials(name) {
        return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    static { this.ɵfac = function UserConnectionModalComponent_Factory(t) { return new (t || UserConnectionModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserConnectionModalComponent, selectors: [["app-user-connection-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 1, consts: [["noSummary", ""], [1, "profile-dialog"], ["mat-icon-button", "", 1, "close-btn", 3, "click"], [1, "loading-state"], ["diameter", "42"], [1, "hero"], [1, "avatar-wrap"], [3, "src", "alt", 4, "ngIf"], ["class", "avatar-fallback", 4, "ngIf"], [1, "hero-copy"], [1, "hero-topline"], [1, "role-pill"], [1, "state-pill", 3, "ngClass"], [1, "subtitle"], ["class", "meta", 4, "ngIf"], [1, "stats-row"], [1, "stat-card"], [1, "content-grid"], [1, "content-card"], ["class", "summary", 4, "ngIf", "ngIfElse"], [1, "detail-list"], ["class", "detail-row", 4, "ngIf"], ["class", "request-note", 4, "ngIf"], ["class", "message-box", 4, "ngIf"], [1, "actions"], ["mat-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 3, "disabled"], [3, "src", "alt"], [1, "avatar-fallback"], [1, "meta"], [1, "summary"], [1, "muted"], [1, "detail-row"], [1, "label"], ["target", "_blank", "rel", "noreferrer", 3, "href"], [1, "request-note"], [1, "message-box"], ["appearance", "outline", 1, "message-field"], ["matInput", "", "rows", "3", "maxlength", "280", "placeholder", "Bonjour, je souhaite entrer en contact avec vous...", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["mat-stroked-button", "", "color", "warn", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", "disabled", ""]], template: function UserConnectionModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "button", 2);
            i0.ɵɵlistener("click", function UserConnectionModalComponent_Template_button_click_1_listener() { return ctx.dialogRef.close(); });
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "close");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(4, UserConnectionModalComponent_Conditional_4_Template, 4, 0, "div", 3)(5, UserConnectionModalComponent_Conditional_5_Template, 58, 23);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(4, ctx.loading ? 4 : ctx.profile ? 5 : -1);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.MaxLengthValidator, i2.NgModel, MatDialogModule,
            MatButtonModule, i3.MatButton, i3.MatIconButton, MatIconModule, i4.MatIcon, MatProgressSpinnerModule, i5.MatProgressSpinner, MatDividerModule,
            MatFormFieldModule, i6.MatFormField, i6.MatLabel, MatInputModule, i7.MatInput], styles: [".profile-dialog[_ngcontent-%COMP%] {\n      position: relative;\n      padding: 24px;\n      background: linear-gradient(180deg, #f7fbff 0%, #ffffff 38%);\n      color: #10233f;\n      max-width: 760px;\n    }\n\n    .close-btn[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      color: #6b7a90;\n    }\n\n    .loading-state[_ngcontent-%COMP%] {\n      min-height: 320px;\n      display: grid;\n      place-items: center;\n      gap: 12px;\n      color: #607086;\n    }\n\n    .hero[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 20px;\n      align-items: center;\n      padding: 8px 8px 24px;\n    }\n\n    .avatar-wrap[_ngcontent-%COMP%] {\n      width: 104px;\n      height: 104px;\n      border-radius: 28px;\n      overflow: hidden;\n      background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n      box-shadow: 0 18px 40px rgba(15, 94, 198, 0.18);\n      flex-shrink: 0;\n    }\n\n    .avatar-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .avatar-fallback[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n    }\n\n    .avatar-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      object-fit: cover;\n    }\n\n    .avatar-fallback[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n      font-size: 30px;\n      font-weight: 700;\n      letter-spacing: 0.04em;\n    }\n\n    .hero-copy[_ngcontent-%COMP%] {\n      min-width: 0;\n      flex: 1;\n    }\n\n    .hero-topline[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 10px;\n      margin-bottom: 12px;\n    }\n\n    .role-pill[_ngcontent-%COMP%], .state-pill[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      padding: 6px 12px;\n      border-radius: 999px;\n      font-size: 0.78rem;\n      font-weight: 700;\n      letter-spacing: 0.02em;\n    }\n\n    .role-pill[_ngcontent-%COMP%] {\n      background: #e9f3ff;\n      color: #0f5ec6;\n    }\n\n    .state-pill[_ngcontent-%COMP%] {\n      background: #edf2f7;\n      color: #4a5a70;\n    }\n\n    .state-pill.pending[_ngcontent-%COMP%] {\n      background: #fff4d6;\n      color: #9a6700;\n    }\n\n    .state-pill.accepted[_ngcontent-%COMP%] {\n      background: #ddf5e5;\n      color: #17653a;\n    }\n\n    .state-pill.rejected[_ngcontent-%COMP%] {\n      background: #ffe1e1;\n      color: #b42318;\n    }\n\n    .state-pill.none[_ngcontent-%COMP%] {\n      background: #edf2f7;\n      color: #516174;\n    }\n\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 1.9rem;\n      line-height: 1.1;\n      letter-spacing: -0.02em;\n    }\n\n    .subtitle[_ngcontent-%COMP%], .meta[_ngcontent-%COMP%] {\n      margin: 8px 0 0;\n      color: #5f7085;\n    }\n\n    .meta[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n    }\n\n    .meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n    }\n\n    .stats-row[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n      gap: 12px;\n      margin-bottom: 18px;\n    }\n\n    .stat-card[_ngcontent-%COMP%] {\n      background: #fff;\n      border: 1px solid #d8e4f0;\n      border-radius: 18px;\n      padding: 16px;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      font-size: 1.2rem;\n      color: #10233f;\n    }\n\n    .stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      color: #6b7a90;\n      font-size: 0.88rem;\n    }\n\n    .content-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 16px;\n    }\n\n    .content-card[_ngcontent-%COMP%] {\n      background: #fff;\n      border: 1px solid #d8e4f0;\n      border-radius: 18px;\n      padding: 18px;\n    }\n\n    .content-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0 0 12px;\n      font-size: 1rem;\n      color: #18314f;\n    }\n\n    .summary[_ngcontent-%COMP%], .muted[_ngcontent-%COMP%] {\n      margin: 0;\n      line-height: 1.6;\n      color: #4c5d72;\n    }\n\n    .muted[_ngcontent-%COMP%] {\n      color: #7b8a9d;\n    }\n\n    .detail-list[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n\n    .detail-row[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n      padding-bottom: 10px;\n      border-bottom: 1px solid #edf2f7;\n    }\n\n    .detail-row[_ngcontent-%COMP%]:last-child {\n      border-bottom: none;\n      padding-bottom: 0;\n    }\n\n    .detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n      font-size: 0.78rem;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      color: #6b7a90;\n      font-weight: 700;\n    }\n\n    .detail-row[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n      color: #0f5ec6;\n      text-decoration: none;\n      word-break: break-word;\n    }\n\n    .request-note[_ngcontent-%COMP%] {\n      margin-top: 16px;\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 12px 14px;\n      border-radius: 14px;\n      background: #eef5ff;\n      color: #29578b;\n    }\n\n    .message-box[_ngcontent-%COMP%] {\n      margin-top: 18px;\n    }\n\n    .message-field[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      gap: 12px;\n      flex-wrap: wrap;\n      margin-top: 22px;\n    }\n\n    @media (max-width: 720px) {\n      .profile-dialog[_ngcontent-%COMP%] {\n        padding: 18px;\n      }\n\n      .hero[_ngcontent-%COMP%] {\n        flex-direction: column;\n        align-items: flex-start;\n      }\n\n      .stats-row[_ngcontent-%COMP%], .content-grid[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n      }\n\n      .actions[_ngcontent-%COMP%] {\n        justify-content: stretch;\n      }\n\n      .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserConnectionModalComponent, [{
        type: Component,
        args: [{ selector: 'app-user-connection-modal', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    MatDialogModule,
                    MatButtonModule,
                    MatIconModule,
                    MatProgressSpinnerModule,
                    MatDividerModule,
                    MatFormFieldModule,
                    MatInputModule
                ], template: `
    <div class="profile-dialog">
      <button mat-icon-button class="close-btn" (click)="dialogRef.close()">
        <mat-icon>close</mat-icon>
      </button>

      @if (loading) {
        <div class="loading-state">
          <mat-spinner diameter="42"></mat-spinner>
          <p>Chargement du profil...</p>
        </div>
      } @else if (profile) {
        <div class="hero">
          <div class="avatar-wrap">
            <img *ngIf="profile.profilePicture" [src]="profile.profilePicture" [alt]="profile.fullName" />
            <div *ngIf="!profile.profilePicture" class="avatar-fallback">
              {{ initials(profile.fullName) }}
            </div>
          </div>

          <div class="hero-copy">
            <div class="hero-topline">
              <span class="role-pill">{{ getRoleLabel(profile.role) }}</span>
              <span class="state-pill" [ngClass]="statusClass">
                {{ getRelationshipLabel() }}
              </span>
            </div>
            <h2>{{ profile.fullName }}</h2>
            <p class="subtitle">{{ getPrimarySubtitle() }}</p>
            <p class="meta" *ngIf="profile.city || profile.country">
              <mat-icon>location_on</mat-icon>
              {{ getLocationLabel() }}
            </p>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-card">
            <strong>{{ profile.followersCount }}</strong>
            <span>Followers</span>
          </div>
          <div class="stat-card">
            <strong>{{ profile.followingCount }}</strong>
            <span>Abonnements</span>
          </div>
          <div class="stat-card">
            <strong>{{ profile.postCount || 0 }}</strong>
            <span>Publications</span>
          </div>
        </div>

        <div class="content-grid">
          <section class="content-card">
            <h3>Presentation</h3>
            <p *ngIf="getSummaryText(); else noSummary" class="summary">
              {{ getSummaryText() }}
            </p>
            <ng-template #noSummary>
              <p class="muted">Aucune presentation detaillee pour le moment.</p>
            </ng-template>
          </section>

          <section class="content-card">
            <h3>Informations utiles</h3>
            <div class="detail-list">
              <div class="detail-row" *ngIf="profile.phoneNumber">
                <span class="label">Telephone</span>
                <span>{{ profile.phoneNumber }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.yearsExperience">
                <span class="label">Experience</span>
                <span>{{ profile.yearsExperience }} ans</span>
              </div>
              <div class="detail-row" *ngIf="profile.companySector">
                <span class="label">Secteur</span>
                <span>{{ profile.companySector }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.companySize">
                <span class="label">Taille</span>
                <span>{{ profile.companySize }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.skills">
                <span class="label">Competences</span>
                <span>{{ profile.skills }}</span>
              </div>
              <div class="detail-row" *ngIf="profile.companyWebsite">
                <span class="label">Site web</span>
                <a [href]="profile.companyWebsite" target="_blank" rel="noreferrer">
                  {{ profile.companyWebsite }}
                </a>
              </div>
            </div>
          </section>
        </div>

        <div class="request-note" *ngIf="isCrossRole && !relationship.canMessage">
          <mat-icon>shield</mat-icon>
          <span>Une demande acceptee est necessaire avant d'ouvrir la messagerie.</span>
        </div>

        <div class="message-box" *ngIf="canSendRequest">
          <mat-form-field appearance="outline" class="message-field">
            <mat-label>Ajouter un message a votre demande</mat-label>
            <textarea
              matInput
              rows="3"
              maxlength="280"
              [(ngModel)]="requestMessage"
              placeholder="Bonjour, je souhaite entrer en contact avec vous..."
            ></textarea>
          </mat-form-field>
        </div>

        <div class="actions">
          <button mat-button (click)="dialogRef.close()" [disabled]="processing">
            Fermer
          </button>

          @if (relationship.canMessage) {
            <button mat-raised-button color="primary" (click)="openConversation()" [disabled]="processing">
              <mat-icon>chat</mat-icon>
              Envoyer un message
            </button>
          } @else if (canAcceptRequest) {
            <button mat-stroked-button color="warn" (click)="rejectRequest()" [disabled]="processing">
              <mat-icon>close</mat-icon>
              Refuser
            </button>
            <button mat-raised-button color="primary" (click)="acceptRequest()" [disabled]="processing">
              <mat-icon>check</mat-icon>
              Accepter
            </button>
          } @else if (isOutgoingPending) {
            <button mat-stroked-button color="warn" (click)="cancelRequest()" [disabled]="processing || !relationship.requestId">
              <mat-icon>cancel</mat-icon>
              Annuler la demande
            </button>
            <button mat-raised-button color="primary" disabled>
              <mat-icon>schedule</mat-icon>
              Demande envoyee
            </button>
          } @else if (canSendRequest) {
            <button mat-raised-button color="primary" (click)="sendRequest()" [disabled]="processing">
              <mat-icon>person_add</mat-icon>
              Envoyer la demande
            </button>
          } @else {
            <button mat-raised-button color="primary" disabled>
              <mat-icon>info</mat-icon>
              {{ getRelationshipLabel() }}
            </button>
          }
        </div>
      }
    </div>
  `, styles: ["\n    .profile-dialog {\n      position: relative;\n      padding: 24px;\n      background: linear-gradient(180deg, #f7fbff 0%, #ffffff 38%);\n      color: #10233f;\n      max-width: 760px;\n    }\n\n    .close-btn {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      color: #6b7a90;\n    }\n\n    .loading-state {\n      min-height: 320px;\n      display: grid;\n      place-items: center;\n      gap: 12px;\n      color: #607086;\n    }\n\n    .hero {\n      display: flex;\n      gap: 20px;\n      align-items: center;\n      padding: 8px 8px 24px;\n    }\n\n    .avatar-wrap {\n      width: 104px;\n      height: 104px;\n      border-radius: 28px;\n      overflow: hidden;\n      background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n      box-shadow: 0 18px 40px rgba(15, 94, 198, 0.18);\n      flex-shrink: 0;\n    }\n\n    .avatar-wrap img,\n    .avatar-fallback {\n      width: 100%;\n      height: 100%;\n    }\n\n    .avatar-wrap img {\n      object-fit: cover;\n    }\n\n    .avatar-fallback {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #fff;\n      font-size: 30px;\n      font-weight: 700;\n      letter-spacing: 0.04em;\n    }\n\n    .hero-copy {\n      min-width: 0;\n      flex: 1;\n    }\n\n    .hero-topline {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 10px;\n      margin-bottom: 12px;\n    }\n\n    .role-pill,\n    .state-pill {\n      display: inline-flex;\n      align-items: center;\n      padding: 6px 12px;\n      border-radius: 999px;\n      font-size: 0.78rem;\n      font-weight: 700;\n      letter-spacing: 0.02em;\n    }\n\n    .role-pill {\n      background: #e9f3ff;\n      color: #0f5ec6;\n    }\n\n    .state-pill {\n      background: #edf2f7;\n      color: #4a5a70;\n    }\n\n    .state-pill.pending {\n      background: #fff4d6;\n      color: #9a6700;\n    }\n\n    .state-pill.accepted {\n      background: #ddf5e5;\n      color: #17653a;\n    }\n\n    .state-pill.rejected {\n      background: #ffe1e1;\n      color: #b42318;\n    }\n\n    .state-pill.none {\n      background: #edf2f7;\n      color: #516174;\n    }\n\n    .hero h2 {\n      margin: 0;\n      font-size: 1.9rem;\n      line-height: 1.1;\n      letter-spacing: -0.02em;\n    }\n\n    .subtitle,\n    .meta {\n      margin: 8px 0 0;\n      color: #5f7085;\n    }\n\n    .meta {\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n    }\n\n    .meta mat-icon {\n      width: 18px;\n      height: 18px;\n      font-size: 18px;\n    }\n\n    .stats-row {\n      display: grid;\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n      gap: 12px;\n      margin-bottom: 18px;\n    }\n\n    .stat-card {\n      background: #fff;\n      border: 1px solid #d8e4f0;\n      border-radius: 18px;\n      padding: 16px;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .stat-card strong {\n      font-size: 1.2rem;\n      color: #10233f;\n    }\n\n    .stat-card span {\n      color: #6b7a90;\n      font-size: 0.88rem;\n    }\n\n    .content-grid {\n      display: grid;\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      gap: 16px;\n    }\n\n    .content-card {\n      background: #fff;\n      border: 1px solid #d8e4f0;\n      border-radius: 18px;\n      padding: 18px;\n    }\n\n    .content-card h3 {\n      margin: 0 0 12px;\n      font-size: 1rem;\n      color: #18314f;\n    }\n\n    .summary,\n    .muted {\n      margin: 0;\n      line-height: 1.6;\n      color: #4c5d72;\n    }\n\n    .muted {\n      color: #7b8a9d;\n    }\n\n    .detail-list {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n\n    .detail-row {\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n      padding-bottom: 10px;\n      border-bottom: 1px solid #edf2f7;\n    }\n\n    .detail-row:last-child {\n      border-bottom: none;\n      padding-bottom: 0;\n    }\n\n    .detail-row .label {\n      font-size: 0.78rem;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      color: #6b7a90;\n      font-weight: 700;\n    }\n\n    .detail-row a {\n      color: #0f5ec6;\n      text-decoration: none;\n      word-break: break-word;\n    }\n\n    .request-note {\n      margin-top: 16px;\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 12px 14px;\n      border-radius: 14px;\n      background: #eef5ff;\n      color: #29578b;\n    }\n\n    .message-box {\n      margin-top: 18px;\n    }\n\n    .message-field {\n      width: 100%;\n    }\n\n    .actions {\n      display: flex;\n      justify-content: flex-end;\n      gap: 12px;\n      flex-wrap: wrap;\n      margin-top: 22px;\n    }\n\n    @media (max-width: 720px) {\n      .profile-dialog {\n        padding: 18px;\n      }\n\n      .hero {\n        flex-direction: column;\n        align-items: flex-start;\n      }\n\n      .stats-row,\n      .content-grid {\n        grid-template-columns: 1fr;\n      }\n\n      .actions {\n        justify-content: stretch;\n      }\n\n      .actions button {\n        width: 100%;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserConnectionModalComponent, { className: "UserConnectionModalComponent", filePath: "app\\shared\\components\\user-connection-modal\\user-connection-modal.component.ts", lineNumber: 478 }); })();
//# sourceMappingURL=user-connection-modal.component.js.map