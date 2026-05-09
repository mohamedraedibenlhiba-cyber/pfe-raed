import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { AlertService } from '../../../core/services/alert.service';
import { UserConnectionModalComponent } from '../../../shared/components/user-connection-modal/user-connection-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/card";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/progress-spinner";
const _forTrack0 = ($index, $item) => $item.id;
function ConnectionRequestsModalComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner", 7);
    i0.ɵɵelementEnd();
} }
function ConnectionRequestsModalComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "mat-icon");
    i0.ɵɵtext(2, "mark_email_read");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Aucune demande en attente");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Les nouvelles invitations apparaitront ici.");
    i0.ɵɵelementEnd()();
} }
function ConnectionRequestsModalComponent_Conditional_15_For_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 21);
} if (rf & 2) {
    const request_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", request_r2.senderProfilePicture, i0.ɵɵsanitizeUrl)("alt", request_r2.senderName);
} }
function ConnectionRequestsModalComponent_Conditional_15_For_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.initials(request_r2.senderName), " ");
} }
function ConnectionRequestsModalComponent_Conditional_15_For_1_p_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(request_r2.message);
} }
function ConnectionRequestsModalComponent_Conditional_15_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-card", 9)(1, "div", 10)(2, "div", 11);
    i0.ɵɵtemplate(3, ConnectionRequestsModalComponent_Conditional_15_For_1_img_3_Template, 1, 2, "img", 12)(4, ConnectionRequestsModalComponent_Conditional_15_For_1_div_4_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14)(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 15);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 16);
    i0.ɵɵlistener("click", function ConnectionRequestsModalComponent_Conditional_15_For_1_Template_button_click_11_listener() { const request_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openUserDetails(request_r2.senderId)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " Voir le profil ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(15, ConnectionRequestsModalComponent_Conditional_15_For_1_p_15_Template, 2, 1, "p", 17);
    i0.ɵɵelementStart(16, "div", 18)(17, "button", 19);
    i0.ɵɵlistener("click", function ConnectionRequestsModalComponent_Conditional_15_For_1_Template_button_click_17_listener() { const request_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.rejectRequest(request_r2.id)); });
    i0.ɵɵelementStart(18, "mat-icon");
    i0.ɵɵtext(19, "close");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, " Refuser ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 20);
    i0.ɵɵlistener("click", function ConnectionRequestsModalComponent_Conditional_15_For_1_Template_button_click_21_listener() { const request_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.acceptRequest(request_r2.id)); });
    i0.ɵɵelementStart(22, "mat-icon");
    i0.ɵɵtext(23, "check");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Accepter ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const request_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", request_r2.senderProfilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !request_r2.senderProfilePicture);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(request_r2.senderName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 7, request_r2.createdAt, "medium"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngIf", request_r2.message);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r2.processingRequestId === request_r2.id);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r2.processingRequestId === request_r2.id);
} }
function ConnectionRequestsModalComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ConnectionRequestsModalComponent_Conditional_15_For_1_Template, 25, 10, "mat-card", 9, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.pendingRequests);
} }
function ConnectionRequestsModalComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "mat-spinner", 7);
    i0.ɵɵelementEnd();
} }
function ConnectionRequestsModalComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8)(1, "mat-icon");
    i0.ɵɵtext(2, "outgoing_mail");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Aucune demande envoyee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Vous pouvez lancer une nouvelle relation depuis la recherche utilisateur.");
    i0.ɵɵelementEnd()();
} }
function ConnectionRequestsModalComponent_Conditional_20_For_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 21);
} if (rf & 2) {
    const request_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", request_r5.receiverProfilePicture, i0.ɵɵsanitizeUrl)("alt", request_r5.receiverName);
} }
function ConnectionRequestsModalComponent_Conditional_20_For_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.initials(request_r5.receiverName), " ");
} }
function ConnectionRequestsModalComponent_Conditional_20_For_1_p_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(request_r5.message);
} }
function ConnectionRequestsModalComponent_Conditional_20_For_1_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function ConnectionRequestsModalComponent_Conditional_20_For_1_button_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const request_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.cancelRequest(request_r5.id)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Annuler ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r2.processingRequestId === request_r5.id);
} }
function ConnectionRequestsModalComponent_Conditional_20_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-card", 9)(1, "div", 10)(2, "div", 11);
    i0.ɵɵtemplate(3, ConnectionRequestsModalComponent_Conditional_20_For_1_img_3_Template, 1, 2, "img", 12)(4, ConnectionRequestsModalComponent_Conditional_20_For_1_div_4_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14)(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 24);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 16);
    i0.ɵɵlistener("click", function ConnectionRequestsModalComponent_Conditional_20_For_1_Template_button_click_10_listener() { const request_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openUserDetails(request_r5.receiverId)); });
    i0.ɵɵelementStart(11, "mat-icon");
    i0.ɵɵtext(12, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Voir le profil ");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, ConnectionRequestsModalComponent_Conditional_20_For_1_p_14_Template, 2, 1, "p", 17);
    i0.ɵɵelementStart(15, "div", 18);
    i0.ɵɵtemplate(16, ConnectionRequestsModalComponent_Conditional_20_For_1_button_16_Template, 4, 1, "button", 25);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", request_r5.receiverProfilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !request_r5.receiverProfilePicture);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(request_r5.receiverName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", request_r5.status.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.getStatusLabel(request_r5.status), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", request_r5.message);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", request_r5.status === "PENDING");
} }
function ConnectionRequestsModalComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ConnectionRequestsModalComponent_Conditional_20_For_1_Template, 17, 7, "mat-card", 9, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.sentRequests);
} }
export class ConnectionRequestsModalComponent {
    constructor() {
        this.dialogRef = inject((MatDialogRef));
        this.data = inject(MAT_DIALOG_DATA, { optional: true });
        this.connectionSvc = inject(ConnectionRequestService);
        this.alertSvc = inject(AlertService);
        this.dialog = inject(MatDialog);
        this.pendingRequests = [];
        this.sentRequests = [];
        this.loadingPending = false;
        this.loadingSent = false;
        this.processingRequestId = null;
    }
    ngOnInit() {
        this.loadRequests();
    }
    loadRequests() {
        this.loadPendingRequests();
        this.loadSentRequests();
    }
    loadPendingRequests() {
        this.loadingPending = true;
        this.connectionSvc.getPendingRequests(0, 20).subscribe({
            next: ({ data }) => {
                this.pendingRequests = data.content;
                this.loadingPending = false;
            },
            error: async () => {
                this.loadingPending = false;
                await this.alertSvc.error('Chargement impossible');
            }
        });
    }
    loadSentRequests() {
        this.loadingSent = true;
        this.connectionSvc.getSentRequests(0, 20).subscribe({
            next: ({ data }) => {
                this.sentRequests = data.content;
                this.loadingSent = false;
            },
            error: async () => {
                this.loadingSent = false;
                await this.alertSvc.error('Chargement impossible');
            }
        });
    }
    acceptRequest(requestId) {
        this.processingRequestId = requestId;
        this.connectionSvc.acceptRequest(requestId).subscribe({
            next: async () => {
                this.processingRequestId = null;
                this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
                await this.alertSvc.success('Demande acceptee');
            },
            error: async (error) => {
                this.processingRequestId = null;
                await this.alertSvc.error('Acceptation impossible', error?.error?.message);
            }
        });
    }
    rejectRequest(requestId) {
        this.processingRequestId = requestId;
        this.connectionSvc.rejectRequest(requestId).subscribe({
            next: async () => {
                this.processingRequestId = null;
                this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
                await this.alertSvc.success('Demande refusee');
            },
            error: async (error) => {
                this.processingRequestId = null;
                await this.alertSvc.error('Refus impossible', error?.error?.message);
            }
        });
    }
    cancelRequest(requestId) {
        this.processingRequestId = requestId;
        this.connectionSvc.cancelRequest(requestId).subscribe({
            next: async () => {
                this.processingRequestId = null;
                this.sentRequests = this.sentRequests.filter(request => request.id !== requestId);
                await this.alertSvc.success('Demande annulee');
            },
            error: async (error) => {
                this.processingRequestId = null;
                await this.alertSvc.error('Annulation impossible', error?.error?.message);
            }
        });
    }
    openUserDetails(userId) {
        this.dialog.open(UserConnectionModalComponent, {
            width: '760px',
            maxWidth: '95vw',
            data: { userId }
        });
    }
    getStatusLabel(status) {
        if (status === 'PENDING') {
            return 'En attente';
        }
        if (status === 'ACCEPTED') {
            return 'Acceptee';
        }
        if (status === 'REJECTED') {
            return 'Refusee';
        }
        return status;
    }
    initials(name) {
        return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    static { this.ɵfac = function ConnectionRequestsModalComponent_Factory(t) { return new (t || ConnectionRequestsModalComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConnectionRequestsModalComponent, selectors: [["app-connection-requests-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 21, vars: 4, consts: [[1, "requests-dialog"], [1, "dialog-header"], ["mat-icon-button", "", 3, "click"], ["animationDuration", "0ms", 1, "request-tabs"], [3, "label"], [1, "tab-body"], [1, "loading-state"], ["diameter", "34"], [1, "empty-state"], [1, "request-card"], [1, "request-head"], [1, "avatar"], [3, "src", "alt", 4, "ngIf"], ["class", "avatar-fallback", 4, "ngIf"], [1, "request-meta"], [1, "timestamp"], ["mat-stroked-button", "", 3, "click"], ["class", "request-message", 4, "ngIf"], [1, "request-actions"], ["mat-stroked-button", "", "color", "warn", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [3, "src", "alt"], [1, "avatar-fallback"], [1, "request-message"], [1, "status-pill", 3, "ngClass"], ["mat-stroked-button", "", "color", "warn", 3, "disabled", "click", 4, "ngIf"]], template: function ConnectionRequestsModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Demandes de connexion");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Gerez les invitations qui ouvrent l'acces a la messagerie.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "button", 2);
            i0.ɵɵlistener("click", function ConnectionRequestsModalComponent_Template_button_click_7_listener() { return ctx.dialogRef.close(); });
            i0.ɵɵelementStart(8, "mat-icon");
            i0.ɵɵtext(9, "close");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "mat-tab-group", 3)(11, "mat-tab", 4)(12, "div", 5);
            i0.ɵɵtemplate(13, ConnectionRequestsModalComponent_Conditional_13_Template, 2, 0, "div", 6)(14, ConnectionRequestsModalComponent_Conditional_14_Template, 7, 0)(15, ConnectionRequestsModalComponent_Conditional_15_Template, 2, 0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "mat-tab", 4)(17, "div", 5);
            i0.ɵɵtemplate(18, ConnectionRequestsModalComponent_Conditional_18_Template, 2, 0, "div", 6)(19, ConnectionRequestsModalComponent_Conditional_19_Template, 7, 0)(20, ConnectionRequestsModalComponent_Conditional_20_Template, 2, 0);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("label", "Recues (" + ctx.pendingRequests.length + ")");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(13, ctx.loadingPending ? 13 : !ctx.pendingRequests.length ? 14 : 15);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("label", "Envoyees (" + ctx.sentRequests.length + ")");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(18, ctx.loadingSent ? 18 : !ctx.sentRequests.length ? 19 : 20);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, i1.DatePipe, MatTabsModule, i2.MatTab, i2.MatTabGroup, MatButtonModule, i3.MatButton, i3.MatIconButton, MatCardModule, i4.MatCard, MatIconModule, i5.MatIcon, MatProgressSpinnerModule, i6.MatProgressSpinner, MatDialogModule], styles: [".requests-dialog[_ngcontent-%COMP%] {\n      width: min(820px, 95vw);\n      max-height: min(760px, 90vh);\n      display: flex;\n      flex-direction: column;\n      background: linear-gradient(180deg, #f7fbff 0%, #ffffff 30%);\n    }\n\n    .dialog-header[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: space-between;\n      gap: 16px;\n      align-items: flex-start;\n      padding: 22px 24px 12px;\n    }\n\n    .dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n      margin: 0;\n      color: #10233f;\n    }\n\n    .dialog-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 6px 0 0;\n      color: #607086;\n    }\n\n    .request-tabs[_ngcontent-%COMP%] {\n      flex: 1;\n      min-height: 0;\n    }\n\n    .tab-body[_ngcontent-%COMP%] {\n      padding: 12px 24px 24px;\n      display: flex;\n      flex-direction: column;\n      gap: 14px;\n      max-height: 640px;\n      overflow: auto;\n    }\n\n    .loading-state[_ngcontent-%COMP%], .empty-state[_ngcontent-%COMP%] {\n      min-height: 260px;\n      display: grid;\n      place-items: center;\n      text-align: center;\n      color: #6b7a90;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      width: 44px;\n      height: 44px;\n      font-size: 44px;\n      color: #94a3b8;\n      margin-bottom: 8px;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      color: #18314f;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 6px 0 0;\n    }\n\n    .request-card[_ngcontent-%COMP%] {\n      border-radius: 20px;\n      border: 1px solid #d8e4f0;\n      box-shadow: none;\n      padding: 18px;\n    }\n\n    .request-head[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n    }\n\n    .avatar[_ngcontent-%COMP%] {\n      width: 54px;\n      height: 54px;\n      border-radius: 18px;\n      overflow: hidden;\n      background: #e6eef8;\n      flex-shrink: 0;\n    }\n\n    .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .avatar-fallback[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n    }\n\n    .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      object-fit: cover;\n    }\n\n    .avatar-fallback[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n      color: white;\n      font-weight: 700;\n    }\n\n    .request-meta[_ngcontent-%COMP%] {\n      flex: 1;\n      min-width: 0;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .request-meta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0;\n      color: #10233f;\n    }\n\n    .timestamp[_ngcontent-%COMP%] {\n      color: #6b7a90;\n      font-size: 0.85rem;\n    }\n\n    .status-pill[_ngcontent-%COMP%] {\n      align-self: flex-start;\n      display: inline-flex;\n      align-items: center;\n      padding: 5px 10px;\n      border-radius: 999px;\n      font-size: 0.76rem;\n      font-weight: 700;\n      letter-spacing: 0.02em;\n      text-transform: uppercase;\n      background: #eef2f7;\n      color: #516174;\n    }\n\n    .status-pill.pending[_ngcontent-%COMP%] {\n      background: #fff4d6;\n      color: #9a6700;\n    }\n\n    .status-pill.accepted[_ngcontent-%COMP%] {\n      background: #ddf5e5;\n      color: #17653a;\n    }\n\n    .status-pill.rejected[_ngcontent-%COMP%] {\n      background: #ffe1e1;\n      color: #b42318;\n    }\n\n    .request-message[_ngcontent-%COMP%] {\n      margin: 16px 0 0;\n      padding: 14px 16px;\n      border-radius: 14px;\n      background: #f8fbff;\n      color: #445468;\n      line-height: 1.55;\n    }\n\n    .request-actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-top: 18px;\n    }\n\n    @media (max-width: 720px) {\n      .dialog-header[_ngcontent-%COMP%], .tab-body[_ngcontent-%COMP%] {\n        padding-left: 18px;\n        padding-right: 18px;\n      }\n\n      .request-head[_ngcontent-%COMP%] {\n        flex-wrap: wrap;\n      }\n\n      .request-head[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .request-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n        width: 100%;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConnectionRequestsModalComponent, [{
        type: Component,
        args: [{ selector: 'app-connection-requests-modal', standalone: true, imports: [
                    CommonModule,
                    MatTabsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatIconModule,
                    MatProgressSpinnerModule,
                    MatDialogModule
                ], template: `
    <div class="requests-dialog">
      <div class="dialog-header">
        <div>
          <h2>Demandes de connexion</h2>
          <p>Gerez les invitations qui ouvrent l'acces a la messagerie.</p>
        </div>
        <button mat-icon-button (click)="dialogRef.close()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <mat-tab-group animationDuration="0ms" class="request-tabs">
        <mat-tab [label]="'Recues (' + pendingRequests.length + ')'">
          <div class="tab-body">
            @if (loadingPending) {
              <div class="loading-state">
                <mat-spinner diameter="34"></mat-spinner>
              </div>
            } @else if (!pendingRequests.length) {
              <div class="empty-state">
                <mat-icon>mark_email_read</mat-icon>
                <h3>Aucune demande en attente</h3>
                <p>Les nouvelles invitations apparaitront ici.</p>
              </div>
            } @else {
              @for (request of pendingRequests; track request.id) {
                <mat-card class="request-card">
                  <div class="request-head">
                    <div class="avatar">
                      <img *ngIf="request.senderProfilePicture" [src]="request.senderProfilePicture" [alt]="request.senderName" />
                      <div *ngIf="!request.senderProfilePicture" class="avatar-fallback">
                        {{ initials(request.senderName) }}
                      </div>
                    </div>

                    <div class="request-meta">
                      <h3>{{ request.senderName }}</h3>
                      <span class="timestamp">{{ request.createdAt | date:'medium' }}</span>
                    </div>

                    <button mat-stroked-button (click)="openUserDetails(request.senderId)">
                      <mat-icon>visibility</mat-icon>
                      Voir le profil
                    </button>
                  </div>

                  <p class="request-message" *ngIf="request.message">{{ request.message }}</p>

                  <div class="request-actions">
                    <button
                      mat-stroked-button
                      color="warn"
                      (click)="rejectRequest(request.id)"
                      [disabled]="processingRequestId === request.id">
                      <mat-icon>close</mat-icon>
                      Refuser
                    </button>
                    <button
                      mat-raised-button
                      color="primary"
                      (click)="acceptRequest(request.id)"
                      [disabled]="processingRequestId === request.id">
                      <mat-icon>check</mat-icon>
                      Accepter
                    </button>
                  </div>
                </mat-card>
              }
            }
          </div>
        </mat-tab>

        <mat-tab [label]="'Envoyees (' + sentRequests.length + ')'">
          <div class="tab-body">
            @if (loadingSent) {
              <div class="loading-state">
                <mat-spinner diameter="34"></mat-spinner>
              </div>
            } @else if (!sentRequests.length) {
              <div class="empty-state">
                <mat-icon>outgoing_mail</mat-icon>
                <h3>Aucune demande envoyee</h3>
                <p>Vous pouvez lancer une nouvelle relation depuis la recherche utilisateur.</p>
              </div>
            } @else {
              @for (request of sentRequests; track request.id) {
                <mat-card class="request-card">
                  <div class="request-head">
                    <div class="avatar">
                      <img *ngIf="request.receiverProfilePicture" [src]="request.receiverProfilePicture" [alt]="request.receiverName" />
                      <div *ngIf="!request.receiverProfilePicture" class="avatar-fallback">
                        {{ initials(request.receiverName) }}
                      </div>
                    </div>

                    <div class="request-meta">
                      <h3>{{ request.receiverName }}</h3>
                      <span class="status-pill" [ngClass]="request.status.toLowerCase()">
                        {{ getStatusLabel(request.status) }}
                      </span>
                    </div>

                    <button mat-stroked-button (click)="openUserDetails(request.receiverId)">
                      <mat-icon>visibility</mat-icon>
                      Voir le profil
                    </button>
                  </div>

                  <p class="request-message" *ngIf="request.message">{{ request.message }}</p>

                  <div class="request-actions">
                    <button
                      mat-stroked-button
                      color="warn"
                      *ngIf="request.status === 'PENDING'"
                      (click)="cancelRequest(request.id)"
                      [disabled]="processingRequestId === request.id">
                      <mat-icon>cancel</mat-icon>
                      Annuler
                    </button>
                  </div>
                </mat-card>
              }
            }
          </div>
        </mat-tab>
      </mat-tab-group>
    </div>
  `, styles: ["\n    .requests-dialog {\n      width: min(820px, 95vw);\n      max-height: min(760px, 90vh);\n      display: flex;\n      flex-direction: column;\n      background: linear-gradient(180deg, #f7fbff 0%, #ffffff 30%);\n    }\n\n    .dialog-header {\n      display: flex;\n      justify-content: space-between;\n      gap: 16px;\n      align-items: flex-start;\n      padding: 22px 24px 12px;\n    }\n\n    .dialog-header h2 {\n      margin: 0;\n      color: #10233f;\n    }\n\n    .dialog-header p {\n      margin: 6px 0 0;\n      color: #607086;\n    }\n\n    .request-tabs {\n      flex: 1;\n      min-height: 0;\n    }\n\n    .tab-body {\n      padding: 12px 24px 24px;\n      display: flex;\n      flex-direction: column;\n      gap: 14px;\n      max-height: 640px;\n      overflow: auto;\n    }\n\n    .loading-state,\n    .empty-state {\n      min-height: 260px;\n      display: grid;\n      place-items: center;\n      text-align: center;\n      color: #6b7a90;\n    }\n\n    .empty-state mat-icon {\n      width: 44px;\n      height: 44px;\n      font-size: 44px;\n      color: #94a3b8;\n      margin-bottom: 8px;\n    }\n\n    .empty-state h3 {\n      margin: 0;\n      color: #18314f;\n    }\n\n    .empty-state p {\n      margin: 6px 0 0;\n    }\n\n    .request-card {\n      border-radius: 20px;\n      border: 1px solid #d8e4f0;\n      box-shadow: none;\n      padding: 18px;\n    }\n\n    .request-head {\n      display: flex;\n      align-items: center;\n      gap: 14px;\n    }\n\n    .avatar {\n      width: 54px;\n      height: 54px;\n      border-radius: 18px;\n      overflow: hidden;\n      background: #e6eef8;\n      flex-shrink: 0;\n    }\n\n    .avatar img,\n    .avatar-fallback {\n      width: 100%;\n      height: 100%;\n    }\n\n    .avatar img {\n      object-fit: cover;\n    }\n\n    .avatar-fallback {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n      color: white;\n      font-weight: 700;\n    }\n\n    .request-meta {\n      flex: 1;\n      min-width: 0;\n      display: flex;\n      flex-direction: column;\n      gap: 4px;\n    }\n\n    .request-meta h3 {\n      margin: 0;\n      color: #10233f;\n    }\n\n    .timestamp {\n      color: #6b7a90;\n      font-size: 0.85rem;\n    }\n\n    .status-pill {\n      align-self: flex-start;\n      display: inline-flex;\n      align-items: center;\n      padding: 5px 10px;\n      border-radius: 999px;\n      font-size: 0.76rem;\n      font-weight: 700;\n      letter-spacing: 0.02em;\n      text-transform: uppercase;\n      background: #eef2f7;\n      color: #516174;\n    }\n\n    .status-pill.pending {\n      background: #fff4d6;\n      color: #9a6700;\n    }\n\n    .status-pill.accepted {\n      background: #ddf5e5;\n      color: #17653a;\n    }\n\n    .status-pill.rejected {\n      background: #ffe1e1;\n      color: #b42318;\n    }\n\n    .request-message {\n      margin: 16px 0 0;\n      padding: 14px 16px;\n      border-radius: 14px;\n      background: #f8fbff;\n      color: #445468;\n      line-height: 1.55;\n    }\n\n    .request-actions {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      flex-wrap: wrap;\n      margin-top: 18px;\n    }\n\n    @media (max-width: 720px) {\n      .dialog-header,\n      .tab-body {\n        padding-left: 18px;\n        padding-right: 18px;\n      }\n\n      .request-head {\n        flex-wrap: wrap;\n      }\n\n      .request-head button,\n      .request-actions button {\n        width: 100%;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConnectionRequestsModalComponent, { className: "ConnectionRequestsModalComponent", filePath: "app\\features\\shared\\connection-requests-modal\\connection-requests-modal.component.ts", lineNumber: 346 }); })();
//# sourceMappingURL=connection-requests-modal.component.js.map