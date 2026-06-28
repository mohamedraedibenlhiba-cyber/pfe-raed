import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MessagingService } from '../../../core/services/messaging.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConnectionRequestService } from '../../../core/services/connection-request.service';
import { AlertService } from '../../../core/services/alert.service';
import { EmojiPickerComponent } from '../../../shared/components/emoji-picker/emoji-picker.component';
import { ConnectionRequestsModalComponent } from '../connection-requests-modal/connection-requests-modal.component';
import { UserConnectionModalComponent } from '../../../shared/components/user-connection-modal/user-connection-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/progress-spinner";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/badge";
const _forTrack0 = ($index, $item) => $item.id;
function UnifiedChatComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function UnifiedChatComponent_button_19_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.searchQuery = ""; return i0.ɵɵresetView(ctx_r1.searchResults = []); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_20_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelement(1, "mat-spinner", 21);
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_20_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22)(1, "mat-icon");
    i0.ɵɵtext(2, "search_off");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Aucun utilisateur trouve");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_20_Conditional_3_For_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const user_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", user_r4.profilePicture, i0.ɵɵsanitizeUrl)("alt", user_r4.fullName);
} }
function UnifiedChatComponent_Conditional_20_Conditional_3_For_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(user_r4.fullName), " ");
} }
function UnifiedChatComponent_Conditional_20_Conditional_3_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_20_Conditional_3_For_1_Template_button_click_0_listener() { const user_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openUserModal(user_r4.id)); });
    i0.ɵɵelementStart(1, "div", 25);
    i0.ɵɵtemplate(2, UnifiedChatComponent_Conditional_20_Conditional_3_For_1_img_2_Template, 1, 2, "img", 26)(3, UnifiedChatComponent_Conditional_20_Conditional_3_For_1_div_3_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 28)(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 29);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", user_r4.profilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !user_r4.profilePicture);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(user_r4.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getUserSubtitle(user_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", user_r4.canMessage ? "active" : "pending");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", user_r4.canMessage ? "Message" : "Profil", " ");
} }
function UnifiedChatComponent_Conditional_20_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, UnifiedChatComponent_Conditional_20_Conditional_3_For_1_Template, 11, 6, "button", 23, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.searchResults);
} }
function UnifiedChatComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, UnifiedChatComponent_Conditional_20_Conditional_1_Template, 2, 0, "div", 20)(2, UnifiedChatComponent_Conditional_20_Conditional_2_Template, 5, 0)(3, UnifiedChatComponent_Conditional_20_Conditional_3_Template, 2, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx_r1.searchingUsers ? 1 : !ctx_r1.searchResults.length ? 2 : 3);
} }
function UnifiedChatComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 32);
    i0.ɵɵlistener("click", function UnifiedChatComponent_button_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openRequestsCenter()); });
    i0.ɵɵtext(1, " Tout voir ");
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "mat-spinner", 21);
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "mat-icon");
    i0.ɵɵtext(2, "mail_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Aucune demande recue.");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_32_For_2_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const request_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", request_r7.senderProfilePicture, i0.ɵɵsanitizeUrl)("alt", request_r7.senderName);
} }
function UnifiedChatComponent_Conditional_32_For_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(request_r7.senderName), " ");
} }
function UnifiedChatComponent_Conditional_32_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "button", 36);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_32_For_2_Template_button_click_1_listener() { const request_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openUserModal(request_r7.senderId)); });
    i0.ɵɵelementStart(2, "div", 37);
    i0.ɵɵtemplate(3, UnifiedChatComponent_Conditional_32_For_2_img_3_Template, 1, 2, "img", 26)(4, UnifiedChatComponent_Conditional_32_For_2_div_4_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 38)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 39)(11, "button", 40);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_32_For_2_Template_button_click_11_listener() { const request_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.quickAcceptRequest(request_r7.id)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "check");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 41);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_32_For_2_Template_button_click_14_listener() { const request_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.quickRejectRequest(request_r7.id)); });
    i0.ɵɵelementStart(15, "mat-icon");
    i0.ɵɵtext(16, "close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const request_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", request_r7.senderProfilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !request_r7.senderProfilePicture);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(request_r7.senderName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(request_r7.message || "Souhaite entrer en relation.");
} }
function UnifiedChatComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵrepeaterCreate(1, UnifiedChatComponent_Conditional_32_For_2_Template, 17, 4, "div", 35, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.visiblePendingRequests);
} }
function UnifiedChatComponent_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "mat-spinner", 21);
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "mat-icon");
    i0.ɵɵtext(2, "group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Vos contacts apparaitront ici.");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_42_For_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const user_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", user_r9.profilePicture, i0.ɵɵsanitizeUrl)("alt", user_r9.fullName);
} }
function UnifiedChatComponent_Conditional_42_For_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(user_r9.fullName), " ");
} }
function UnifiedChatComponent_Conditional_42_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_42_For_2_Template_button_click_0_listener() { const user_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.startConversationWithConnection(user_r9)); });
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵtemplate(2, UnifiedChatComponent_Conditional_42_For_2_img_2_Template, 1, 2, "img", 26)(3, UnifiedChatComponent_Conditional_42_For_2_div_3_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 45)(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "mat-icon");
    i0.ɵɵtext(10, "arrow_forward");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", user_r9.profilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !user_r9.profilePicture);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(user_r9.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getUserSubtitle(user_r9));
} }
function UnifiedChatComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42);
    i0.ɵɵrepeaterCreate(1, UnifiedChatComponent_Conditional_42_For_2_Template, 11, 4, "button", 43, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.acceptedConnections);
} }
function UnifiedChatComponent_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "mat-spinner", 46);
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "mat-icon");
    i0.ɵɵtext(2, "chat_bubble_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4, "Aucune conversation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Recherchez un utilisateur ou acceptez une demande pour commencer.");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_52_For_2_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const conv_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.getOtherParticipant(conv_r11).profilePicture, i0.ɵɵsanitizeUrl)("alt", ctx_r1.getOtherParticipant(conv_r11).fullName);
} }
function UnifiedChatComponent_Conditional_52_For_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const conv_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(ctx_r1.getOtherParticipant(conv_r11).fullName), " ");
} }
function UnifiedChatComponent_Conditional_52_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 50);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_52_For_2_Template_button_click_0_listener() { const conv_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectConversation(conv_r11)); });
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵtemplate(2, UnifiedChatComponent_Conditional_52_For_2_img_2_Template, 1, 2, "img", 26)(3, UnifiedChatComponent_Conditional_52_For_2_div_3_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 51)(5, "div", 52)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const conv_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", (ctx_r1.selectedConv == null ? null : ctx_r1.selectedConv.id) === conv_r11.id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.getOtherParticipant(conv_r11).profilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.getOtherParticipant(conv_r11).profilePicture);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.getOtherParticipant(conv_r11).fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 7, conv_r11.lastMessageAt, "shortTime"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getUserSubtitle(ctx_r1.getOtherParticipant(conv_r11)));
} }
function UnifiedChatComponent_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵrepeaterCreate(1, UnifiedChatComponent_Conditional_52_For_2_Template, 13, 10, "button", 49, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.conversations);
} }
function UnifiedChatComponent_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 53)(2, "mat-icon");
    i0.ɵɵtext(3, "forum");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5, "Une messagerie plus claire pour vos relations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, " Recherchez un utilisateur, envoyez une demande si necessaire, puis ouvrez la conversation une fois la connexion acceptee. ");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_55_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 30);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r1.getOtherParticipant(ctx_r1.selectedConv).profilePicture, i0.ɵɵsanitizeUrl)("alt", ctx_r1.getOtherParticipant(ctx_r1.selectedConv).fullName);
} }
function UnifiedChatComponent_Conditional_55_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.initials(ctx_r1.getOtherParticipant(ctx_r1.selectedConv).fullName), " ");
} }
function UnifiedChatComponent_Conditional_55_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelement(1, "mat-spinner", 70);
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_55_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "mat-icon");
    i0.ɵɵtext(2, "mark_chat_unread");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h4");
    i0.ɵɵtext(4, "Aucun message pour le moment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Ouvrez l'echange avec un premier message professionnel.");
    i0.ɵɵelementEnd()();
} }
function UnifiedChatComponent_Conditional_55_Conditional_17_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72)(1, "div", 73)(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const msg_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("own", msg_r13.sender.id === (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(msg_r13.content);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 4, msg_r13.sentAt, "HH:mm"));
} }
function UnifiedChatComponent_Conditional_55_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, UnifiedChatComponent_Conditional_55_Conditional_17_For_1_Template, 7, 7, "div", 71, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.messages);
} }
function UnifiedChatComponent_Conditional_55_div_19_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_55_div_19_For_2_Template_button_click_0_listener() { const suggestion_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.useSuggestion(suggestion_r15)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const suggestion_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", suggestion_r15, " ");
} }
function UnifiedChatComponent_Conditional_55_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 74);
    i0.ɵɵrepeaterCreate(1, UnifiedChatComponent_Conditional_55_div_19_For_2_Template, 2, 1, "button", 75, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.messageSuggestions);
} }
function UnifiedChatComponent_Conditional_55_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 68);
} }
function UnifiedChatComponent_Conditional_55_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "send");
    i0.ɵɵelementEnd();
} }
function UnifiedChatComponent_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 54)(1, "button", 55);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_55_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openUserModal(ctx_r1.getOtherParticipant(ctx_r1.selectedConv).id)); });
    i0.ɵɵelementStart(2, "div", 56);
    i0.ɵɵtemplate(3, UnifiedChatComponent_Conditional_55_img_3_Template, 1, 2, "img", 26)(4, UnifiedChatComponent_Conditional_55_div_4_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 57)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "button", 58);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_55_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openUserModal(ctx_r1.getOtherParticipant(ctx_r1.selectedConv).id)); });
    i0.ɵɵelementStart(11, "mat-icon");
    i0.ɵɵtext(12, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Voir le profil ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 59);
    i0.ɵɵtemplate(15, UnifiedChatComponent_Conditional_55_Conditional_15_Template, 2, 0, "div", 15)(16, UnifiedChatComponent_Conditional_55_Conditional_16_Template, 7, 0)(17, UnifiedChatComponent_Conditional_55_Conditional_17_Template, 2, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 60);
    i0.ɵɵtemplate(19, UnifiedChatComponent_Conditional_55_div_19_Template, 3, 0, "div", 61);
    i0.ɵɵelementStart(20, "div", 62)(21, "mat-form-field", 63)(22, "mat-label");
    i0.ɵɵtext(23, "Votre message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "textarea", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function UnifiedChatComponent_Conditional_55_Template_textarea_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newMessage, $event) || (ctx_r1.newMessage = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keydown.control.enter", function UnifiedChatComponent_Conditional_55_Template_textarea_keydown_control_enter_24_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendDirectMessage()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 65)(26, "app-emoji-picker", 66);
    i0.ɵɵlistener("emojiSelected", function UnifiedChatComponent_Conditional_55_Template_app_emoji_picker_emojiSelected_26_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onEmojiSelected($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "button", 67);
    i0.ɵɵlistener("click", function UnifiedChatComponent_Conditional_55_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sendDirectMessage()); });
    i0.ɵɵtemplate(28, UnifiedChatComponent_Conditional_55_Conditional_28_Template, 1, 0, "mat-spinner", 68)(29, UnifiedChatComponent_Conditional_55_Conditional_29_Template, 2, 0);
    i0.ɵɵtext(30, " Envoyer ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "p", 69);
    i0.ɵɵtext(32, "Astuce: utilisez Ctrl + Entree pour envoyer rapidement.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.getOtherParticipant(ctx_r1.selectedConv).profilePicture);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.getOtherParticipant(ctx_r1.selectedConv).profilePicture);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.getOtherParticipant(ctx_r1.selectedConv).fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getUserSubtitle(ctx_r1.getOtherParticipant(ctx_r1.selectedConv)));
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(15, ctx_r1.loadingMessages ? 15 : !ctx_r1.messages.length ? 16 : 17);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.newMessage.trim());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newMessage);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r1.newMessage.trim() || ctx_r1.sendingMessage);
    i0.ɵɵadvance();
    i0.ɵɵconditional(28, ctx_r1.sendingMessage ? 28 : 29);
} }
export class UnifiedChatComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.messagingSvc = inject(MessagingService);
        this.connectionSvc = inject(ConnectionRequestService);
        this.alertSvc = inject(AlertService);
        this.dialog = inject(MatDialog);
        this.route = inject(ActivatedRoute);
        this.router = inject(Router);
        this.loadingConversations = true;
        this.loadingMessages = false;
        this.loadingConnections = false;
        this.loadingRequests = false;
        this.searchingUsers = false;
        this.sendingMessage = false;
        this.acceptedConnections = [];
        this.pendingRequests = [];
        this.conversations = [];
        this.selectedConv = null;
        this.messages = [];
        this.searchResults = [];
        this.searchQuery = '';
        this.newMessage = '';
        this.searchTimeout = null;
        this.requestedConversationId = null;
        this.messageSuggestions = [
            'Bonjour, merci pour votre retour.',
            'Pouvez-vous partager plus de details ?',
            'Je suis disponible pour echanger cette semaine.',
            'Merci, je vous recontacte rapidement.'
        ];
    }
    ngOnInit() {
        this.bindConversationSelectionFromRoute();
        this.loadSidebarData();
        this.connectionSvc.requestChanges$.subscribe(() => {
            this.loadAcceptedConnections();
            this.loadPendingRequests();
            this.loadConversations();
        });
    }
    get visiblePendingRequests() {
        return this.pendingRequests.slice(0, 3);
    }
    bindConversationSelectionFromRoute() {
        this.route.queryParamMap.subscribe(params => {
            const rawConvId = params.get('convId');
            this.requestedConversationId = rawConvId ? Number(rawConvId) : null;
            this.trySelectRequestedConversation();
        });
    }
    loadSidebarData() {
        this.loadConversations();
        this.loadAcceptedConnections();
        this.loadPendingRequests();
    }
    loadConversations() {
        this.loadingConversations = true;
        this.messagingSvc.getConversations().subscribe({
            next: ({ data }) => {
                this.conversations = [...data].sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());
                this.loadingConversations = false;
                this.trySelectRequestedConversation();
            },
            error: () => {
                this.loadingConversations = false;
            }
        });
    }
    loadAcceptedConnections() {
        this.loadingConnections = true;
        this.connectionSvc.getAcceptedConnections().subscribe({
            next: (res) => {
                this.acceptedConnections = res.data || [];
                this.loadingConnections = false;
            },
            error: () => {
                this.loadingConnections = false;
            }
        });
    }
    loadPendingRequests() {
        this.loadingRequests = true;
        this.connectionSvc.getPendingRequests(0, 6).subscribe({
            next: ({ data }) => {
                this.pendingRequests = data.content;
                this.loadingRequests = false;
            },
            error: () => {
                this.loadingRequests = false;
            }
        });
    }
    onSearchInput() {
        const query = this.searchQuery.trim();
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        if (query.length < 2) {
            this.searchingUsers = false;
            this.searchResults = [];
            return;
        }
        this.searchingUsers = true;
        this.searchTimeout = setTimeout(() => {
            this.messagingSvc.searchUsers(query, undefined, 0, 8).subscribe({
                next: ({ data }) => {
                    this.searchResults = data.content;
                    this.searchingUsers = false;
                },
                error: () => {
                    this.searchResults = [];
                    this.searchingUsers = false;
                }
            });
        }, 250);
    }
    openRequestsCenter() {
        this.dialog.open(ConnectionRequestsModalComponent, {
            width: '820px',
            maxWidth: '95vw'
        });
    }
    openUserModal(userId) {
        this.dialog.open(UserConnectionModalComponent, {
            width: '760px',
            maxWidth: '95vw',
            data: { userId }
        });
    }
    quickAcceptRequest(requestId) {
        this.connectionSvc.acceptRequest(requestId).subscribe({
            next: async () => {
                this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
                this.loadAcceptedConnections();
                await this.alertSvc.success('Demande acceptee');
            },
            error: async (error) => {
                await this.alertSvc.error('Acceptation impossible', error?.error?.message);
            }
        });
    }
    quickRejectRequest(requestId) {
        this.connectionSvc.rejectRequest(requestId).subscribe({
            next: async () => {
                this.pendingRequests = this.pendingRequests.filter(request => request.id !== requestId);
                await this.alertSvc.success('Demande refusee');
            },
            error: async (error) => {
                await this.alertSvc.error('Refus impossible', error?.error?.message);
            }
        });
    }
    startConversationWithConnection(user) {
        this.openConversationWithUser(user.id);
    }
    openConversationWithUser(userId) {
        this.messagingSvc.getOrCreateConversation(userId).subscribe({
            next: ({ data }) => {
                this.upsertConversation(data);
                this.selectConversation(data);
                this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: { convId: data.id },
                    queryParamsHandling: 'merge'
                });
            },
            error: async (error) => {
                await this.alertSvc.error('Ouverture impossible', error?.error?.message);
            }
        });
    }
    selectConversation(conv) {
        this.selectedConv = conv;
        this.loadingMessages = true;
        this.messagingSvc.getMessages(conv.id).subscribe({
            next: ({ data }) => {
                this.messages = data.content;
                this.loadingMessages = false;
                this.messagingSvc.markRead(conv.id).subscribe();
            },
            error: () => {
                this.loadingMessages = false;
            }
        });
    }
    sendDirectMessage() {
        if (!this.newMessage.trim() || !this.selectedConv || this.sendingMessage) {
            return;
        }
        const recipient = this.getOtherParticipant(this.selectedConv);
        this.sendingMessage = true;
        this.messagingSvc.send({
            recipientId: recipient.id,
            content: this.newMessage.trim()
        }).subscribe({
            next: ({ data }) => {
                this.messages = [...this.messages, data];
                this.newMessage = '';
                this.sendingMessage = false;
                this.bumpConversationActivity(this.selectedConv.id, data.sentAt);
            },
            error: async (error) => {
                this.sendingMessage = false;
                await this.alertSvc.error('Envoi impossible', error?.error?.message);
            }
        });
    }
    useSuggestion(suggestion) {
        this.newMessage = suggestion;
    }
    onEmojiSelected(emoji) {
        this.newMessage += emoji;
    }
    getOtherParticipant(conv) {
        return conv.participant1.id === this.auth.currentUser?.id ? conv.participant2 : conv.participant1;
    }
    getRoleLabel(role) {
        if (role === 'ROLE_CANDIDATE') {
            return 'Candidat';
        }
        if (role === 'ROLE_ENTERPRISE') {
            return 'Entreprise';
        }
        return role;
    }
    getUserSubtitle(user) {
        if ('companyName' in user && user.companyName) {
            return user.companyName;
        }
        if ('headline' in user && user.headline) {
            return user.headline;
        }
        return this.getRoleLabel(user.role);
    }
    initials(name) {
        return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    trySelectRequestedConversation() {
        if (!this.requestedConversationId || !this.conversations.length) {
            return;
        }
        const targetConversation = this.conversations.find(conv => conv.id === this.requestedConversationId);
        if (targetConversation && this.selectedConv?.id !== targetConversation.id) {
            this.selectConversation(targetConversation);
        }
    }
    upsertConversation(conversation) {
        const existingIndex = this.conversations.findIndex(item => item.id === conversation.id);
        if (existingIndex >= 0) {
            this.conversations[existingIndex] = conversation;
        }
        else {
            this.conversations = [conversation, ...this.conversations];
        }
        this.conversations = [...this.conversations].sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());
    }
    bumpConversationActivity(conversationId, sentAt) {
        const updated = this.conversations.map(conversation => conversation.id === conversationId
            ? { ...conversation, lastMessageAt: sentAt }
            : conversation);
        this.conversations = updated.sort((a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime());
    }
    static { this.ɵfac = function UnifiedChatComponent_Factory(t) { return new (t || UnifiedChatComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UnifiedChatComponent, selectors: [["app-unified-chat"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 56, vars: 13, consts: [[1, "chat-workspace"], [1, "workspace-sidebar"], [1, "sidebar-header"], [1, "eyebrow"], ["mat-stroked-button", "", "color", "primary", "matBadgeColor", "warn", "matBadgeSize", "small", 3, "click", "matBadge"], [1, "sidebar-search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Nom, entreprise, competences...", 3, "ngModelChange", "input", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "search-panel"], [1, "sidebar-body"], [1, "sidebar-section"], [1, "section-head"], ["mat-button", "", 3, "click", 4, "ngIf"], [1, "section-loading"], [1, "sidebar-section", "conversations"], [1, "workspace-panel"], [1, "empty-panel"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "panel-loading"], ["diameter", "24"], [1, "panel-empty"], [1, "search-result"], [1, "search-result", 3, "click"], [1, "search-avatar"], [3, "src", "alt", 4, "ngIf"], ["class", "fallback", 4, "ngIf"], [1, "search-copy"], [1, "result-tag", 3, "ngClass"], [3, "src", "alt"], [1, "fallback"], ["mat-button", "", 3, "click"], [1, "section-empty", "compact"], [1, "request-stack"], [1, "request-preview"], [1, "request-main", 3, "click"], [1, "mini-avatar"], [1, "request-copy"], [1, "request-buttons"], ["mat-icon-button", "", "color", "primary", "matTooltip", "Accepter", 3, "click"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Refuser", 3, "click"], [1, "contact-list"], [1, "contact-row"], [1, "contact-row", 3, "click"], [1, "contact-copy"], ["diameter", "28"], [1, "section-empty"], [1, "conversation-list"], [1, "conversation-row", 3, "active"], [1, "conversation-row", 3, "click"], [1, "conversation-copy"], [1, "copy-head"], [1, "panel-illustration"], [1, "conversation-header"], [1, "identity", 3, "click"], [1, "header-avatar"], [1, "header-copy"], ["mat-stroked-button", "", 3, "click"], [1, "message-feed"], [1, "composer-card"], ["class", "suggestions", 4, "ngIf"], [1, "composer-row"], ["appearance", "outline", 1, "composer-field"], ["matInput", "", "rows", "3", "placeholder", "Ecrivez votre message...", 3, "ngModelChange", "keydown.control.enter", "ngModel"], [1, "composer-actions"], [3, "emojiSelected"], ["mat-raised-button", "", "color", "primary", 1, "send-btn", 3, "click", "disabled"], ["diameter", "16"], [1, "composer-hint"], ["diameter", "34"], [1, "message-row", 3, "own"], [1, "message-row"], [1, "bubble"], [1, "suggestions"], [1, "suggestion-pill"], [1, "suggestion-pill", 3, "click"]], template: function UnifiedChatComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div")(4, "p", 3);
            i0.ɵɵtext(5, "Espace communication");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7, "Messagerie");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function UnifiedChatComponent_Template_button_click_8_listener() { return ctx.openRequestsCenter(); });
            i0.ɵɵelementStart(9, "mat-icon");
            i0.ɵɵtext(10, "person_add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Demandes ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 5)(13, "mat-form-field", 6)(14, "mat-label");
            i0.ɵɵtext(15, "Rechercher une personne");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-icon", 7);
            i0.ɵɵtext(17, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "input", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function UnifiedChatComponent_Template_input_ngModelChange_18_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event); return $event; });
            i0.ɵɵlistener("input", function UnifiedChatComponent_Template_input_input_18_listener() { return ctx.onSearchInput(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(19, UnifiedChatComponent_button_19_Template, 3, 0, "button", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, UnifiedChatComponent_Conditional_20_Template, 4, 1, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 11)(22, "section", 12)(23, "div", 13)(24, "div")(25, "h3");
            i0.ɵɵtext(26, "Demandes en attente");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p");
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(29, UnifiedChatComponent_button_29_Template, 2, 0, "button", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(30, UnifiedChatComponent_Conditional_30_Template, 2, 0, "div", 15)(31, UnifiedChatComponent_Conditional_31_Template, 5, 0)(32, UnifiedChatComponent_Conditional_32_Template, 3, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "section", 12)(34, "div", 13)(35, "div")(36, "h3");
            i0.ɵɵtext(37, "Contacts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "p");
            i0.ɵɵtext(39, "Connexions acceptees");
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(40, UnifiedChatComponent_Conditional_40_Template, 2, 0, "div", 15)(41, UnifiedChatComponent_Conditional_41_Template, 5, 0)(42, UnifiedChatComponent_Conditional_42_Template, 3, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "section", 16)(44, "div", 13)(45, "div")(46, "h3");
            i0.ɵɵtext(47, "Conversations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "p");
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(50, UnifiedChatComponent_Conditional_50_Template, 2, 0, "div", 15)(51, UnifiedChatComponent_Conditional_51_Template, 7, 0)(52, UnifiedChatComponent_Conditional_52_Template, 3, 0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(53, "section", 17);
            i0.ɵɵtemplate(54, UnifiedChatComponent_Conditional_54_Template, 8, 0, "div", 18)(55, UnifiedChatComponent_Conditional_55_Template, 33, 9);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("matBadge", ctx.pendingRequests.length > 0 ? ctx.pendingRequests.length : null);
            i0.ɵɵadvance(10);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQuery);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.searchQuery);
            i0.ɵɵadvance();
            i0.ɵɵconditional(20, ctx.searchQuery.trim().length >= 2 ? 20 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate2("", ctx.pendingRequests.length, " invitation", ctx.pendingRequests.length > 1 ? "s" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.pendingRequests.length > 3);
            i0.ɵɵadvance();
            i0.ɵɵconditional(30, ctx.loadingRequests ? 30 : !ctx.pendingRequests.length ? 31 : 32);
            i0.ɵɵadvance(10);
            i0.ɵɵconditional(40, ctx.loadingConnections ? 40 : !ctx.acceptedConnections.length ? 41 : 42);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate2("", ctx.conversations.length, " fil", ctx.conversations.length > 1 ? "s" : "", "");
            i0.ɵɵadvance();
            i0.ɵɵconditional(50, ctx.loadingConversations ? 50 : !ctx.conversations.length ? 51 : 52);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(54, !ctx.selectedConv ? 54 : 55);
        } }, dependencies: [CommonModule, i1.NgClass, i1.NgIf, i1.DatePipe, FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, MatButtonModule, i3.MatButton, i3.MatIconButton, MatIconModule, i4.MatIcon, MatFormFieldModule, i5.MatFormField, i5.MatLabel, i5.MatPrefix, i5.MatSuffix, MatInputModule, i6.MatInput, MatProgressSpinnerModule, i7.MatProgressSpinner, MatTooltipModule, i8.MatTooltip, MatBadgeModule, i9.MatBadge, MatDialogModule,
            EmojiPickerComponent], styles: [".chat-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px minmax(0, 1fr);\n  gap: 18px;\n  height: calc(100vh - 150px);\n  min-height: 680px;\n}\n\n.workspace-sidebar[_ngcontent-%COMP%], .workspace-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dbe6f1;\n  border-radius: 24px;\n  box-shadow: 0 18px 40px rgba(15, 35, 63, 0.06);\n  overflow: hidden;\n}\n\n.workspace-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #f7fbff 0%, #ffffff 22%);\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 22px 22px 14px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0f5ec6;\n}\n\n.sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #10233f;\n}\n\n.sidebar-search[_ngcontent-%COMP%] {\n  padding: 0 22px 16px;\n}\n\n.search-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.search-panel[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  padding: 10px;\n  border: 1px solid #dbe6f1;\n  border-radius: 18px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.panel-loading[_ngcontent-%COMP%], .section-loading[_ngcontent-%COMP%] {\n  min-height: 70px;\n  display: grid;\n  place-items: center;\n}\n\n.panel-empty[_ngcontent-%COMP%], .section-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #6b7a90;\n  padding: 18px 14px;\n}\n\n.panel-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .section-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  color: #93a2b7;\n  margin-bottom: 6px;\n}\n\n.section-empty.compact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.section-empty[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .section-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .panel-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.search-result[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  border: none;\n  background: transparent;\n  padding: 10px;\n  border-radius: 14px;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n}\n\n.search-result[_ngcontent-%COMP%]:hover, .contact-row[_ngcontent-%COMP%]:hover, .conversation-row[_ngcontent-%COMP%]:hover, .request-main[_ngcontent-%COMP%]:hover {\n  background: #f4f8fc;\n  transform: translateY(-1px);\n}\n\n.search-avatar[_ngcontent-%COMP%], .mini-avatar[_ngcontent-%COMP%], .header-avatar[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 16px;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: #e5edf7;\n}\n\n.mini-avatar[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n}\n\n.header-avatar[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  border-radius: 18px;\n}\n\n.search-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mini-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .fallback[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.search-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .mini-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .header-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n\n.fallback[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n\n.search-copy[_ngcontent-%COMP%], .contact-copy[_ngcontent-%COMP%], .request-copy[_ngcontent-%COMP%], .conversation-copy[_ngcontent-%COMP%], .header-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.search-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .contact-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .request-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .header-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .copy-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #10233f;\n}\n\n.search-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .contact-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .request-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .header-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .conversation-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .copy-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #617287;\n  font-size: 0.87rem;\n  margin: 0;\n}\n\n.result-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: #eef4fb;\n  color: #4f6277;\n}\n\n.result-tag.active[_ngcontent-%COMP%] {\n  background: #e6f2ff;\n  color: #0f5ec6;\n}\n\n.result-tag.pending[_ngcontent-%COMP%] {\n  background: #fff5dd;\n  color: #9a6700;\n}\n\n.sidebar-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 0 12px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.sidebar-section[_ngcontent-%COMP%] {\n  border: 1px solid #dbe6f1;\n  border-radius: 20px;\n  background: #fff;\n  padding: 16px;\n}\n\n.sidebar-section.conversations[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 220px;\n}\n\n.section-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 14px;\n}\n\n.section-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  color: #18314f;\n}\n\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7a90;\n  font-size: 0.84rem;\n}\n\n.request-stack[_ngcontent-%COMP%], .contact-list[_ngcontent-%COMP%], .conversation-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.request-preview[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border: 1px solid #edf3f8;\n  border-radius: 16px;\n  padding: 8px;\n}\n\n.request-main[_ngcontent-%COMP%], .contact-row[_ngcontent-%COMP%], .conversation-row[_ngcontent-%COMP%], .identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n  border: none;\n  padding: 8px;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n}\n\n.request-main[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.request-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.conversation-row[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n}\n\n.conversation-row.active[_ngcontent-%COMP%] {\n  background: #eef5ff;\n  border-color: #bfd7f4;\n}\n\n.copy-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  align-items: center;\n}\n\n.workspace-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #fbfdff 0%, #ffffff 24%);\n}\n\n.empty-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 32px;\n  color: #617287;\n}\n\n.panel-illustration[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: 28px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n  color: #fff;\n  margin: 0 auto 18px;\n  box-shadow: 0 20px 44px rgba(15, 94, 198, 0.2);\n}\n\n.panel-illustration[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  font-size: 42px;\n}\n\n.empty-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .empty-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.empty-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  max-width: 520px;\n  line-height: 1.6;\n}\n\n.conversation-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e8eff6;\n}\n\n.identity[_ngcontent-%COMP%] {\n  width: auto;\n  padding: 0;\n}\n\n.message-feed[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background:\n    radial-gradient(circle at top right, rgba(15, 94, 198, 0.06), transparent 22%),\n    linear-gradient(180deg, #fbfdff 0%, #f7fbff 100%);\n}\n\n.message-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.message-row.own[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.bubble[_ngcontent-%COMP%] {\n  max-width: min(72%, 640px);\n  padding: 14px 16px;\n  border-radius: 18px 18px 18px 8px;\n  background: #fff;\n  border: 1px solid #dbe6f1;\n  box-shadow: 0 10px 24px rgba(15, 35, 63, 0.04);\n}\n\n.message-row.own[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n  color: #fff;\n  border-color: transparent;\n  border-radius: 18px 18px 8px 18px;\n}\n\n.bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.bubble[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 8px;\n  font-size: 0.75rem;\n  opacity: 0.75;\n}\n\n.composer-card[_ngcontent-%COMP%] {\n  border-top: 1px solid #e8eff6;\n  padding: 18px 24px 22px;\n  background: #fff;\n}\n\n.suggestions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.suggestion-pill[_ngcontent-%COMP%] {\n  border: 1px solid #d6e2ef;\n  border-radius: 999px;\n  background: #f8fbff;\n  color: #355274;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.suggestion-pill[_ngcontent-%COMP%]:hover {\n  border-color: #a8c8eb;\n  color: #0f5ec6;\n}\n\n.composer-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n}\n\n.composer-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.composer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  min-width: 132px;\n}\n\n.composer-hint[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #6b7a90;\n  font-size: 0.82rem;\n}\n\n@media (max-width: 1180px) {\n  .chat-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    height: auto;\n    min-height: 0;\n  }\n\n  .workspace-sidebar[_ngcontent-%COMP%], .workspace-panel[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n\n  .workspace-panel[_ngcontent-%COMP%] {\n    min-height: 640px;\n  }\n}\n\n@media (max-width: 760px) {\n  .sidebar-header[_ngcontent-%COMP%], .sidebar-search[_ngcontent-%COMP%], .conversation-header[_ngcontent-%COMP%], .message-feed[_ngcontent-%COMP%], .composer-card[_ngcontent-%COMP%] {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n\n  .section-head[_ngcontent-%COMP%], .conversation-header[_ngcontent-%COMP%], .composer-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .bubble[_ngcontent-%COMP%] {\n    max-width: 88%;\n  }\n\n  .send-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnifiedChatComponent, [{
        type: Component,
        args: [{ selector: 'app-unified-chat', standalone: true, imports: [
                    CommonModule,
                    FormsModule,
                    MatButtonModule,
                    MatIconModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatProgressSpinnerModule,
                    MatTooltipModule,
                    MatBadgeModule,
                    MatDialogModule,
                    EmojiPickerComponent
                ], template: "<div class=\"chat-workspace\">\n  <aside class=\"workspace-sidebar\">\n    <div class=\"sidebar-header\">\n      <div>\n        <p class=\"eyebrow\">Espace communication</p>\n        <h2>Messagerie</h2>\n      </div>\n      <button\n        mat-stroked-button\n        color=\"primary\"\n        (click)=\"openRequestsCenter()\"\n        [matBadge]=\"pendingRequests.length > 0 ? pendingRequests.length : null\"\n        matBadgeColor=\"warn\"\n        matBadgeSize=\"small\">\n        <mat-icon>person_add</mat-icon>\n        Demandes\n      </button>\n    </div>\n\n    <div class=\"sidebar-search\">\n      <mat-form-field appearance=\"outline\" class=\"search-field\">\n        <mat-label>Rechercher une personne</mat-label>\n        <mat-icon matPrefix>search</mat-icon>\n        <input\n          matInput\n          [(ngModel)]=\"searchQuery\"\n          (input)=\"onSearchInput()\"\n          placeholder=\"Nom, entreprise, competences...\" />\n        <button\n          *ngIf=\"searchQuery\"\n          mat-icon-button\n          matSuffix\n          (click)=\"searchQuery = ''; searchResults = []\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n\n      @if (searchQuery.trim().length >= 2) {\n        <div class=\"search-panel\">\n          @if (searchingUsers) {\n            <div class=\"panel-loading\">\n              <mat-spinner diameter=\"24\"></mat-spinner>\n            </div>\n          } @else if (!searchResults.length) {\n            <div class=\"panel-empty\">\n              <mat-icon>search_off</mat-icon>\n              <p>Aucun utilisateur trouve</p>\n            </div>\n          } @else {\n            @for (user of searchResults; track user.id) {\n              <button class=\"search-result\" (click)=\"openUserModal(user.id)\">\n                <div class=\"search-avatar\">\n                  <img *ngIf=\"user.profilePicture\" [src]=\"user.profilePicture\" [alt]=\"user.fullName\" />\n                  <div *ngIf=\"!user.profilePicture\" class=\"fallback\">\n                    {{ initials(user.fullName) }}\n                  </div>\n                </div>\n\n                <div class=\"search-copy\">\n                  <strong>{{ user.fullName }}</strong>\n                  <span>{{ getUserSubtitle(user) }}</span>\n                </div>\n\n                <span class=\"result-tag\" [ngClass]=\"user.canMessage ? 'active' : 'pending'\">\n                  {{ user.canMessage ? 'Message' : 'Profil' }}\n                </span>\n              </button>\n            }\n          }\n        </div>\n      }\n    </div>\n\n    <div class=\"sidebar-body\">\n      <section class=\"sidebar-section\">\n        <div class=\"section-head\">\n          <div>\n            <h3>Demandes en attente</h3>\n            <p>{{ pendingRequests.length }} invitation{{ pendingRequests.length > 1 ? 's' : '' }}</p>\n          </div>\n          <button mat-button *ngIf=\"pendingRequests.length > 3\" (click)=\"openRequestsCenter()\">\n            Tout voir\n          </button>\n        </div>\n\n        @if (loadingRequests) {\n          <div class=\"section-loading\">\n            <mat-spinner diameter=\"24\"></mat-spinner>\n          </div>\n        } @else if (!pendingRequests.length) {\n          <div class=\"section-empty compact\">\n            <mat-icon>mail_outline</mat-icon>\n            <span>Aucune demande recue.</span>\n          </div>\n        } @else {\n          <div class=\"request-stack\">\n            @for (request of visiblePendingRequests; track request.id) {\n              <div class=\"request-preview\">\n                <button class=\"request-main\" (click)=\"openUserModal(request.senderId)\">\n                  <div class=\"mini-avatar\">\n                    <img *ngIf=\"request.senderProfilePicture\" [src]=\"request.senderProfilePicture\" [alt]=\"request.senderName\" />\n                    <div *ngIf=\"!request.senderProfilePicture\" class=\"fallback\">\n                      {{ initials(request.senderName) }}\n                    </div>\n                  </div>\n                  <div class=\"request-copy\">\n                    <strong>{{ request.senderName }}</strong>\n                    <span>{{ request.message || 'Souhaite entrer en relation.' }}</span>\n                  </div>\n                </button>\n                <div class=\"request-buttons\">\n                  <button mat-icon-button color=\"primary\" (click)=\"quickAcceptRequest(request.id)\" matTooltip=\"Accepter\">\n                    <mat-icon>check</mat-icon>\n                  </button>\n                  <button mat-icon-button color=\"warn\" (click)=\"quickRejectRequest(request.id)\" matTooltip=\"Refuser\">\n                    <mat-icon>close</mat-icon>\n                  </button>\n                </div>\n              </div>\n            }\n          </div>\n        }\n      </section>\n\n      <section class=\"sidebar-section\">\n        <div class=\"section-head\">\n          <div>\n            <h3>Contacts</h3>\n            <p>Connexions acceptees</p>\n          </div>\n        </div>\n\n        @if (loadingConnections) {\n          <div class=\"section-loading\">\n            <mat-spinner diameter=\"24\"></mat-spinner>\n          </div>\n        } @else if (!acceptedConnections.length) {\n          <div class=\"section-empty compact\">\n            <mat-icon>group</mat-icon>\n            <span>Vos contacts apparaitront ici.</span>\n          </div>\n        } @else {\n          <div class=\"contact-list\">\n            @for (user of acceptedConnections; track user.id) {\n              <button class=\"contact-row\" (click)=\"startConversationWithConnection(user)\">\n                <div class=\"mini-avatar\">\n                  <img *ngIf=\"user.profilePicture\" [src]=\"user.profilePicture\" [alt]=\"user.fullName\" />\n                  <div *ngIf=\"!user.profilePicture\" class=\"fallback\">\n                    {{ initials(user.fullName) }}\n                  </div>\n                </div>\n                <div class=\"contact-copy\">\n                  <strong>{{ user.fullName }}</strong>\n                  <span>{{ getUserSubtitle(user) }}</span>\n                </div>\n                <mat-icon>arrow_forward</mat-icon>\n              </button>\n            }\n          </div>\n        }\n      </section>\n\n      <section class=\"sidebar-section conversations\">\n        <div class=\"section-head\">\n          <div>\n            <h3>Conversations</h3>\n            <p>{{ conversations.length }} fil{{ conversations.length > 1 ? 's' : '' }}</p>\n          </div>\n        </div>\n\n        @if (loadingConversations) {\n          <div class=\"section-loading\">\n            <mat-spinner diameter=\"28\"></mat-spinner>\n          </div>\n        } @else if (!conversations.length) {\n          <div class=\"section-empty\">\n            <mat-icon>chat_bubble_outline</mat-icon>\n            <h4>Aucune conversation</h4>\n            <p>Recherchez un utilisateur ou acceptez une demande pour commencer.</p>\n          </div>\n        } @else {\n          <div class=\"conversation-list\">\n            @for (conv of conversations; track conv.id) {\n              <button class=\"conversation-row\" [class.active]=\"selectedConv?.id === conv.id\" (click)=\"selectConversation(conv)\">\n                <div class=\"mini-avatar\">\n                  <img *ngIf=\"getOtherParticipant(conv).profilePicture\" [src]=\"getOtherParticipant(conv).profilePicture\" [alt]=\"getOtherParticipant(conv).fullName\" />\n                  <div *ngIf=\"!getOtherParticipant(conv).profilePicture\" class=\"fallback\">\n                    {{ initials(getOtherParticipant(conv).fullName) }}\n                  </div>\n                </div>\n                <div class=\"conversation-copy\">\n                  <div class=\"copy-head\">\n                    <strong>{{ getOtherParticipant(conv).fullName }}</strong>\n                    <span>{{ conv.lastMessageAt | date:'shortTime' }}</span>\n                  </div>\n                  <p>{{ getUserSubtitle(getOtherParticipant(conv)) }}</p>\n                </div>\n              </button>\n            }\n          </div>\n        }\n      </section>\n    </div>\n  </aside>\n\n  <section class=\"workspace-panel\">\n    @if (!selectedConv) {\n      <div class=\"empty-panel\">\n        <div class=\"panel-illustration\">\n          <mat-icon>forum</mat-icon>\n        </div>\n        <h3>Une messagerie plus claire pour vos relations</h3>\n        <p>\n          Recherchez un utilisateur, envoyez une demande si necessaire,\n          puis ouvrez la conversation une fois la connexion acceptee.\n        </p>\n      </div>\n    } @else {\n      <header class=\"conversation-header\">\n        <button class=\"identity\" (click)=\"openUserModal(getOtherParticipant(selectedConv).id)\">\n          <div class=\"header-avatar\">\n            <img *ngIf=\"getOtherParticipant(selectedConv).profilePicture\" [src]=\"getOtherParticipant(selectedConv).profilePicture\" [alt]=\"getOtherParticipant(selectedConv).fullName\" />\n            <div *ngIf=\"!getOtherParticipant(selectedConv).profilePicture\" class=\"fallback\">\n              {{ initials(getOtherParticipant(selectedConv).fullName) }}\n            </div>\n          </div>\n          <div class=\"header-copy\">\n            <strong>{{ getOtherParticipant(selectedConv).fullName }}</strong>\n            <span>{{ getUserSubtitle(getOtherParticipant(selectedConv)) }}</span>\n          </div>\n        </button>\n\n        <button mat-stroked-button (click)=\"openUserModal(getOtherParticipant(selectedConv).id)\">\n          <mat-icon>visibility</mat-icon>\n          Voir le profil\n        </button>\n      </header>\n\n      <div class=\"message-feed\">\n        @if (loadingMessages) {\n          <div class=\"section-loading\">\n            <mat-spinner diameter=\"34\"></mat-spinner>\n          </div>\n        } @else if (!messages.length) {\n          <div class=\"section-empty\">\n            <mat-icon>mark_chat_unread</mat-icon>\n            <h4>Aucun message pour le moment</h4>\n            <p>Ouvrez l'echange avec un premier message professionnel.</p>\n          </div>\n        } @else {\n          @for (msg of messages; track msg.id) {\n            <div class=\"message-row\" [class.own]=\"msg.sender.id === auth.currentUser?.id\">\n              <div class=\"bubble\">\n                <p>{{ msg.content }}</p>\n                <span>{{ msg.sentAt | date:'HH:mm' }}</span>\n              </div>\n            </div>\n          }\n        }\n      </div>\n\n      <div class=\"composer-card\">\n        <div class=\"suggestions\" *ngIf=\"!newMessage.trim()\">\n          @for (suggestion of messageSuggestions; track suggestion) {\n            <button class=\"suggestion-pill\" (click)=\"useSuggestion(suggestion)\">\n              {{ suggestion }}\n            </button>\n          }\n        </div>\n\n        <div class=\"composer-row\">\n          <mat-form-field appearance=\"outline\" class=\"composer-field\">\n            <mat-label>Votre message</mat-label>\n            <textarea\n              matInput\n              rows=\"3\"\n              [(ngModel)]=\"newMessage\"\n              placeholder=\"Ecrivez votre message...\"\n              (keydown.control.enter)=\"sendDirectMessage()\"></textarea>\n          </mat-form-field>\n\n          <div class=\"composer-actions\">\n            <app-emoji-picker (emojiSelected)=\"onEmojiSelected($event)\"></app-emoji-picker>\n            <button\n              mat-raised-button\n              color=\"primary\"\n              class=\"send-btn\"\n              (click)=\"sendDirectMessage()\"\n              [disabled]=\"!newMessage.trim() || sendingMessage\">\n              @if (sendingMessage) {\n                <mat-spinner diameter=\"16\"></mat-spinner>\n              } @else {\n                <mat-icon>send</mat-icon>\n              }\n              Envoyer\n            </button>\n          </div>\n        </div>\n\n        <p class=\"composer-hint\">Astuce: utilisez Ctrl + Entree pour envoyer rapidement.</p>\n      </div>\n    }\n  </section>\n</div>\n", styles: [".chat-workspace {\n  display: grid;\n  grid-template-columns: 380px minmax(0, 1fr);\n  gap: 18px;\n  height: calc(100vh - 150px);\n  min-height: 680px;\n}\n\n.workspace-sidebar,\n.workspace-panel {\n  background: #fff;\n  border: 1px solid #dbe6f1;\n  border-radius: 24px;\n  box-shadow: 0 18px 40px rgba(15, 35, 63, 0.06);\n  overflow: hidden;\n}\n\n.workspace-sidebar {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #f7fbff 0%, #ffffff 22%);\n}\n\n.sidebar-header {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 22px 22px 14px;\n}\n\n.eyebrow {\n  margin: 0 0 6px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0f5ec6;\n}\n\n.sidebar-header h2 {\n  margin: 0;\n  color: #10233f;\n}\n\n.sidebar-search {\n  padding: 0 22px 16px;\n}\n\n.search-field {\n  width: 100%;\n}\n\n.search-panel {\n  margin-top: 12px;\n  padding: 10px;\n  border: 1px solid #dbe6f1;\n  border-radius: 18px;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.panel-loading,\n.section-loading {\n  min-height: 70px;\n  display: grid;\n  place-items: center;\n}\n\n.panel-empty,\n.section-empty {\n  text-align: center;\n  color: #6b7a90;\n  padding: 18px 14px;\n}\n\n.panel-empty mat-icon,\n.section-empty mat-icon {\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  color: #93a2b7;\n  margin-bottom: 6px;\n}\n\n.section-empty.compact {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.section-empty h4,\n.section-empty p,\n.panel-empty p {\n  margin: 0;\n}\n\n.search-result {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  border: none;\n  background: transparent;\n  padding: 10px;\n  border-radius: 14px;\n  cursor: pointer;\n  text-align: left;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n}\n\n.search-result:hover,\n.contact-row:hover,\n.conversation-row:hover,\n.request-main:hover {\n  background: #f4f8fc;\n  transform: translateY(-1px);\n}\n\n.search-avatar,\n.mini-avatar,\n.header-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 16px;\n  overflow: hidden;\n  flex-shrink: 0;\n  background: #e5edf7;\n}\n\n.mini-avatar {\n  width: 42px;\n  height: 42px;\n  border-radius: 14px;\n}\n\n.header-avatar {\n  width: 54px;\n  height: 54px;\n  border-radius: 18px;\n}\n\n.search-avatar img,\n.mini-avatar img,\n.header-avatar img,\n.fallback {\n  width: 100%;\n  height: 100%;\n}\n\n.search-avatar img,\n.mini-avatar img,\n.header-avatar img {\n  object-fit: cover;\n}\n\n.fallback {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n  color: #fff;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n}\n\n.search-copy,\n.contact-copy,\n.request-copy,\n.conversation-copy,\n.header-copy {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.search-copy strong,\n.contact-copy strong,\n.request-copy strong,\n.header-copy strong,\n.copy-head strong {\n  color: #10233f;\n}\n\n.search-copy span,\n.contact-copy span,\n.request-copy span,\n.header-copy span,\n.conversation-copy p,\n.copy-head span {\n  color: #617287;\n  font-size: 0.87rem;\n  margin: 0;\n}\n\n.result-tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 5px 10px;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: #eef4fb;\n  color: #4f6277;\n}\n\n.result-tag.active {\n  background: #e6f2ff;\n  color: #0f5ec6;\n}\n\n.result-tag.pending {\n  background: #fff5dd;\n  color: #9a6700;\n}\n\n.sidebar-body {\n  flex: 1;\n  overflow: auto;\n  padding: 0 12px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.sidebar-section {\n  border: 1px solid #dbe6f1;\n  border-radius: 20px;\n  background: #fff;\n  padding: 16px;\n}\n\n.sidebar-section.conversations {\n  flex: 1;\n  min-height: 220px;\n}\n\n.section-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  align-items: flex-start;\n  margin-bottom: 14px;\n}\n\n.section-head h3 {\n  margin: 0;\n  font-size: 1rem;\n  color: #18314f;\n}\n\n.section-head p {\n  margin: 4px 0 0;\n  color: #6b7a90;\n  font-size: 0.84rem;\n}\n\n.request-stack,\n.contact-list,\n.conversation-list {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.request-preview {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  border: 1px solid #edf3f8;\n  border-radius: 16px;\n  padding: 8px;\n}\n\n.request-main,\n.contact-row,\n.conversation-row,\n.identity {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  text-align: left;\n  background: transparent;\n  border: none;\n  padding: 8px;\n  border-radius: 14px;\n  cursor: pointer;\n  transition: background-color 0.2s ease, transform 0.2s ease;\n}\n\n.request-main {\n  padding: 0;\n}\n\n.request-buttons {\n  display: flex;\n  align-items: center;\n}\n\n.conversation-row {\n  border: 1px solid transparent;\n}\n\n.conversation-row.active {\n  background: #eef5ff;\n  border-color: #bfd7f4;\n}\n\n.copy-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 8px;\n  align-items: center;\n}\n\n.workspace-panel {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #fbfdff 0%, #ffffff 24%);\n}\n\n.empty-panel {\n  flex: 1;\n  display: grid;\n  place-items: center;\n  text-align: center;\n  padding: 32px;\n  color: #617287;\n}\n\n.panel-illustration {\n  width: 84px;\n  height: 84px;\n  border-radius: 28px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n  color: #fff;\n  margin: 0 auto 18px;\n  box-shadow: 0 20px 44px rgba(15, 94, 198, 0.2);\n}\n\n.panel-illustration mat-icon {\n  width: 42px;\n  height: 42px;\n  font-size: 42px;\n}\n\n.empty-panel h3,\n.empty-panel p {\n  margin: 0;\n}\n\n.empty-panel p {\n  margin-top: 10px;\n  max-width: 520px;\n  line-height: 1.6;\n}\n\n.conversation-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  border-bottom: 1px solid #e8eff6;\n}\n\n.identity {\n  width: auto;\n  padding: 0;\n}\n\n.message-feed {\n  flex: 1;\n  overflow: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background:\n    radial-gradient(circle at top right, rgba(15, 94, 198, 0.06), transparent 22%),\n    linear-gradient(180deg, #fbfdff 0%, #f7fbff 100%);\n}\n\n.message-row {\n  display: flex;\n}\n\n.message-row.own {\n  justify-content: flex-end;\n}\n\n.bubble {\n  max-width: min(72%, 640px);\n  padding: 14px 16px;\n  border-radius: 18px 18px 18px 8px;\n  background: #fff;\n  border: 1px solid #dbe6f1;\n  box-shadow: 0 10px 24px rgba(15, 35, 63, 0.04);\n}\n\n.message-row.own .bubble {\n  background: linear-gradient(135deg, #0f5ec6 0%, #2c8ae6 100%);\n  color: #fff;\n  border-color: transparent;\n  border-radius: 18px 18px 8px 18px;\n}\n\n.bubble p,\n.bubble span {\n  margin: 0;\n}\n\n.bubble p {\n  line-height: 1.6;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n\n.bubble span {\n  display: block;\n  margin-top: 8px;\n  font-size: 0.75rem;\n  opacity: 0.75;\n}\n\n.composer-card {\n  border-top: 1px solid #e8eff6;\n  padding: 18px 24px 22px;\n  background: #fff;\n}\n\n.suggestions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 14px;\n}\n\n.suggestion-pill {\n  border: 1px solid #d6e2ef;\n  border-radius: 999px;\n  background: #f8fbff;\n  color: #355274;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.suggestion-pill:hover {\n  border-color: #a8c8eb;\n  color: #0f5ec6;\n}\n\n.composer-row {\n  display: flex;\n  gap: 14px;\n  align-items: flex-end;\n}\n\n.composer-field {\n  flex: 1;\n}\n\n.composer-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.send-btn {\n  min-width: 132px;\n}\n\n.composer-hint {\n  margin: 10px 0 0;\n  color: #6b7a90;\n  font-size: 0.82rem;\n}\n\n@media (max-width: 1180px) {\n  .chat-workspace {\n    grid-template-columns: 1fr;\n    height: auto;\n    min-height: 0;\n  }\n\n  .workspace-sidebar,\n  .workspace-panel {\n    min-height: 0;\n  }\n\n  .workspace-panel {\n    min-height: 640px;\n  }\n}\n\n@media (max-width: 760px) {\n  .sidebar-header,\n  .sidebar-search,\n  .conversation-header,\n  .message-feed,\n  .composer-card {\n    padding-left: 18px;\n    padding-right: 18px;\n  }\n\n  .section-head,\n  .conversation-header,\n  .composer-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .bubble {\n    max-width: 88%;\n  }\n\n  .send-btn {\n    width: 100%;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UnifiedChatComponent, { className: "UnifiedChatComponent", filePath: "app\\features\\shared\\unified-chat\\unified-chat.component.ts", lineNumber: 49 }); })();
//# sourceMappingURL=unified-chat.component.js.map