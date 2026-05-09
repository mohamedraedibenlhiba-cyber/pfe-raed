import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertService } from '../../../core/services/alert.service';
import { PostService } from '../../../core/services/post.service';
import { FollowService } from '../../../core/services/follow.service';
import { AuthService } from '../../../core/services/auth.service';
import { ConfigService } from '../../../core/services/config.service';
import { AttachmentUploaderComponent } from '../../../shared/components/attachment-uploader/attachment-uploader.component';
import { MediaViewerComponent } from '../../../shared/components/media-viewer/media-viewer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/menu";
import * as i8 from "@angular/material/progress-spinner";
import * as i9 from "@angular/material/tooltip";
const _forTrack0 = ($index, $item) => $item.id;
const _c0 = () => [];
function FeedComponent_Conditional_32_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "mat-icon");
    i0.ɵɵtext(2, "check_circle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 32);
    i0.ɵɵlistener("click", function FeedComponent_Conditional_32_Conditional_13_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.removePostAttachment()); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.selectedPostAttachment.file.name);
} }
function FeedComponent_Conditional_32_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 33);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Publication...");
    i0.ɵɵelementEnd();
} }
function FeedComponent_Conditional_32_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon");
    i0.ɵɵtext(1, "send");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Publier");
    i0.ɵɵelementEnd();
} }
function FeedComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 20);
    i0.ɵɵlistener("ngSubmit", function FeedComponent_Conditional_32_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createPost()); });
    i0.ɵɵelementStart(1, "div", 21)(2, "mat-form-field", 22)(3, "mat-label");
    i0.ɵɵtext(4, "Votre publication");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "textarea", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 24)(7, "div", 25)(8, "mat-icon");
    i0.ɵɵtext(9, "attach_file");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11, "Piece jointe");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "app-attachment-uploader", 26);
    i0.ɵɵlistener("fileSelected", function FeedComponent_Conditional_32_Template_app_attachment_uploader_fileSelected_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFilePreviewSelected($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, FeedComponent_Conditional_32_Conditional_13_Template, 8, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-form-field", 22)(15, "mat-label");
    i0.ɵɵtext(16, "Lien media optionnel");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(17, "input", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 29)(19, "button", 30);
    i0.ɵɵlistener("click", function FeedComponent_Conditional_32_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.showCreateForm = false); });
    i0.ɵɵtext(20, "Annuler");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 31);
    i0.ɵɵtemplate(22, FeedComponent_Conditional_32_Conditional_22_Template, 3, 0)(23, FeedComponent_Conditional_32_Conditional_23_Template, 4, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r1.postForm);
    i0.ɵɵadvance(12);
    i0.ɵɵproperty("maxSizeMb", 50)("acceptTypes", "all");
    i0.ɵɵadvance();
    i0.ɵɵconditional(13, ctx_r1.selectedPostAttachment ? 13 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r1.postForm.invalid || ctx_r1.creating);
    i0.ɵɵadvance();
    i0.ɵɵconditional(22, ctx_r1.creating ? 22 : 23);
} }
function FeedComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelement(1, "mat-spinner");
    i0.ɵɵelementEnd();
} }
function FeedComponent_For_35_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵtext(1, "Vous");
    i0.ɵɵelementEnd();
} }
function FeedComponent_For_35_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Conditional_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const post_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleFollow(post_r6.author.id)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("followed", ctx_r1.followingMap[post_r6.author.id]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.followingMap[post_r6.author.id] ? "check" : "person_add");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.followingMap[post_r6.author.id] ? "Abonne" : "Suivre");
} }
function FeedComponent_For_35_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52)(1, "mat-icon");
    i0.ɵɵtext(2, "more_vert");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "mat-menu", null, 0)(5, "button", 53);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Conditional_17_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r7); const post_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deletePost(post_r6)); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "delete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "Supprimer");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const postMenu_r8 = i0.ɵɵreference(4);
    i0.ɵɵproperty("matMenuTriggerFor", postMenu_r8);
} }
function FeedComponent_For_35_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelement(1, "app-media-viewer", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("attachmentFileUrl", post_r6.attachmentFileUrl)("attachmentFileType", post_r6.attachmentFileType || "IMAGE")("fileName", post_r6.attachmentFileName || "")("attachmentFileSize", post_r6.attachmentFileSize || 0);
} }
function FeedComponent_For_35_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46);
    i0.ɵɵelement(1, "app-media-viewer", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("attachmentFileUrl", post_r6.mediaUrl)("attachmentFileType", "IMAGE")("fileName", "Image")("attachmentFileSize", 0);
} }
function FeedComponent_For_35_Conditional_23_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55)(1, "mat-icon");
    i0.ɵɵtext(2, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", post_r6.reactionCount, " ");
} }
function FeedComponent_For_35_Conditional_23_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 55)(1, "mat-icon");
    i0.ɵɵtext(2, "chat_bubble_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", post_r6.commentCount, " commentaire(s) ");
} }
function FeedComponent_For_35_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, FeedComponent_For_35_Conditional_23_Conditional_1_Template, 4, 1, "span", 55)(2, FeedComponent_For_35_Conditional_23_Conditional_2_Template, 4, 1, "span", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, (post_r6.reactionCount || 0) > 0 ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(2, (post_r6.commentCount || 0) > 0 ? 2 : -1);
} }
function FeedComponent_For_35_Conditional_45_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 56)(1, "mat-icon");
    i0.ɵɵtext(2, "reply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 64);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Conditional_45_Conditional_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r10); const post_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearReply(post_r6.id)); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Reponse a ", ctx_r1.replyTarget[post_r6.id].author.fullName, "");
} }
function FeedComponent_For_35_Conditional_45_For_3_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵelement(1, "app-media-viewer", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const c_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("attachmentFileUrl", c_r12.attachmentFileUrl)("attachmentFileType", c_r12.attachmentFileType || "IMAGE")("fileName", c_r12.attachmentFileName || "")("attachmentFileSize", c_r12.attachmentFileSize || 0);
} }
function FeedComponent_For_35_Conditional_45_For_3_For_14_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵelement(1, "app-media-viewer", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("attachmentFileUrl", r_r13.attachmentFileUrl)("attachmentFileType", r_r13.attachmentFileType || "IMAGE")("fileName", r_r13.attachmentFileName || "")("attachmentFileSize", r_r13.attachmentFileSize || 0);
} }
function FeedComponent_For_35_Conditional_45_For_3_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "div", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 72)(4, "span", 68);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, FeedComponent_For_35_Conditional_45_For_3_For_14_Conditional_8_Template, 2, 4, "div", 69);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const r_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.initials(r_r13.author.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(r_r13.author.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(r_r13.content);
    i0.ɵɵadvance();
    i0.ɵɵconditional(8, r_r13.attachmentFileUrl ? 8 : -1);
} }
function FeedComponent_For_35_Conditional_45_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 60);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 65)(4, "div", 66)(5, "div", 67)(6, "span", 68);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, FeedComponent_For_35_Conditional_45_For_3_Conditional_10_Template, 2, 4, "div", 69);
    i0.ɵɵelementStart(11, "button", 70);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Conditional_45_For_3_Template_button_click_11_listener() { const c_r12 = i0.ɵɵrestoreView(_r11).$implicit; const post_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setReply(post_r6.id, c_r12)); });
    i0.ɵɵtext(12, "Repondre");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(13, FeedComponent_For_35_Conditional_45_For_3_For_14_Template, 9, 4, "div", 71, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const c_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.initials(c_r12.author.fullName));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(c_r12.author.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(c_r12.content);
    i0.ɵɵadvance();
    i0.ɵɵconditional(10, c_r12.attachmentFileUrl ? 10 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(c_r12.replies || i0.ɵɵpureFunction0(4, _c0));
} }
function FeedComponent_For_35_Conditional_45_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58)(1, "mat-icon");
    i0.ɵɵtext(2, "forum");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Aucun commentaire pour le moment. Soyez le premier a reagir.");
    i0.ɵɵelementEnd()();
} }
function FeedComponent_For_35_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, FeedComponent_For_35_Conditional_45_Conditional_1_Template, 8, 1, "div", 56);
    i0.ɵɵrepeaterCreate(2, FeedComponent_For_35_Conditional_45_For_3_Template, 15, 5, "div", 57, _forTrack0);
    i0.ɵɵtemplate(4, FeedComponent_For_35_Conditional_45_Conditional_4_Template, 5, 0, "div", 58);
    i0.ɵɵelementStart(5, "div", 59)(6, "div", 60);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "mat-form-field", 61)(9, "mat-label");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function FeedComponent_For_35_Conditional_45_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r9); const post_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.commentText[post_r6.id], $event) || (ctx_r1.commentText[post_r6.id] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function FeedComponent_For_35_Conditional_45_Template_input_keyup_enter_11_listener() { i0.ɵɵrestoreView(_r9); const post_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitComment(post_r6)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 63);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Conditional_45_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r9); const post_r6 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitComment(post_r6)); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "send");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const post_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx_r1.replyTarget[post_r6.id] ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.commentsMap[post_r6.id] || i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(4, (ctx_r1.commentsMap[post_r6.id] || i0.ɵɵpureFunction0(7, _c0)).length === 0 ? 4 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.replyTarget[post_r6.id] ? "Votre reponse" : "Ajouter un commentaire");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.commentText[post_r6.id]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !(ctx_r1.commentText[post_r6.id] || "").trim());
} }
function FeedComponent_For_35_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 17)(1, "div", 34)(2, "div", 35)(3, "div", 36);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 37)(6, "div", 38)(7, "span", 39);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, FeedComponent_For_35_Conditional_9_Template, 2, 0, "span", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "span", 41)(11, "mat-icon");
    i0.ɵɵtext(12, "schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 42);
    i0.ɵɵtemplate(16, FeedComponent_For_35_Conditional_16_Template, 5, 4, "button", 43)(17, FeedComponent_For_35_Conditional_17_Template, 10, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 44)(19, "p", 45);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(21, FeedComponent_For_35_Conditional_21_Template, 2, 4, "div", 46)(22, FeedComponent_For_35_Conditional_22_Template, 2, 4)(23, FeedComponent_For_35_Conditional_23_Template, 3, 2, "div", 47);
    i0.ɵɵelementStart(24, "div", 48)(25, "button", 49);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Template_button_click_25_listener() { const post_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.react(post_r6, "LIKE")); });
    i0.ɵɵelementStart(26, "mat-icon");
    i0.ɵɵtext(27, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span");
    i0.ɵɵtext(29, "J'aime");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "button", 49);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Template_button_click_30_listener() { const post_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.react(post_r6, "LOVE")); });
    i0.ɵɵelementStart(31, "mat-icon");
    i0.ɵɵtext(32, "favorite");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34, "J'adore");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "button", 49);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Template_button_click_35_listener() { const post_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.react(post_r6, "CELEBRATE")); });
    i0.ɵɵelementStart(36, "mat-icon");
    i0.ɵɵtext(37, "celebration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "span");
    i0.ɵɵtext(39, "Bravo");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "button", 49);
    i0.ɵɵlistener("click", function FeedComponent_For_35_Template_button_click_40_listener() { const post_r6 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleComments(post_r6)); });
    i0.ɵɵelementStart(41, "mat-icon");
    i0.ɵɵtext(42, "chat_bubble_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "span");
    i0.ɵɵtext(44, "Commenter");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(45, FeedComponent_For_35_Conditional_45_Template, 15, 8, "div", 50);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.initials(post_r6.author.fullName));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(post_r6.author.fullName);
    i0.ɵɵadvance();
    i0.ɵɵconditional(9, post_r6.author.id === (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 9 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(14, 17, post_r6.createdAt, "dd/MM/yyyy HH:mm"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(16, post_r6.author.id !== (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 16 : 17);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(post_r6.content);
    i0.ɵɵadvance();
    i0.ɵɵconditional(21, post_r6.attachmentFileUrl ? 21 : post_r6.mediaUrl ? 22 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(23, (post_r6.reactionCount || 0) > 0 || (post_r6.commentCount || 0) > 0 ? 23 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("reacted", post_r6.userReaction === "LIKE");
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("reacted", post_r6.userReaction === "LOVE");
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("reacted", post_r6.userReaction === "CELEBRATE");
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("opened", ctx_r1.openComments[post_r6.id]);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(45, ctx_r1.openComments[post_r6.id] ? 45 : -1);
} }
function FeedComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "mat-icon");
    i0.ɵɵtext(2, "newspaper");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Aucune publication visible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Suivez des utilisateurs ou creez votre premiere publication pour lancer l'activite.");
    i0.ɵɵelementEnd()();
} }
function FeedComponent_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "button", 73);
    i0.ɵɵlistener("click", function FeedComponent_Conditional_37_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadMore()); });
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "expand_more");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Voir plus");
    i0.ɵɵelementEnd()()();
} }
export class FeedComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.postSvc = inject(PostService);
        this.followSvc = inject(FollowService);
        this.alertSvc = inject(AlertService);
        this.configSvc = inject(ConfigService);
        this.fb = inject(FormBuilder);
        this.loading = true;
        this.creating = false;
        this.posts = [];
        this.page = 0;
        this.lastPage = false;
        this.showCreateForm = false;
        this.followingMap = {};
        this.openComments = {};
        this.commentsMap = {};
        this.commentText = {};
        this.replyTarget = {};
        this.selectedPostAttachment = null;
        this.pendingFileToUpload = null;
        this.commentAttachmentMap = {};
        this.postForm = this.fb.group({
            content: ['', [Validators.required, Validators.minLength(1)]],
            mediaUrl: ['']
        });
    }
    ngOnInit() { this.loadFeed(); }
    loadFeed() {
        this.loading = true;
        this.postSvc.getFeed(this.page, 10).subscribe({
            next: res => {
                this.posts.push(...res.data.content);
                this.lastPage = res.data.last;
                this.loading = false;
                this.updateFollowMap();
            },
            error: () => { this.loading = false; }
        });
    }
    loadMore() { this.page++; this.loadFeed(); }
    createPost() {
        if (this.postForm.invalid)
            return;
        this.creating = true;
        const { content, mediaUrl } = this.postForm.value;
        this.postSvc.create(content, mediaUrl || undefined).subscribe({
            next: res => {
                const newPost = res.data;
                this.posts.unshift(newPost);
                this.postForm.reset();
                this.showCreateForm = false;
                this.alertSvc.success('Publication creee');
                if (this.pendingFileToUpload && newPost.id) {
                    this.postSvc.uploadPostAttachment(newPost.id, this.pendingFileToUpload).subscribe({
                        next: () => {
                            this.postSvc.getById(newPost.id).subscribe(postRes => {
                                const idx = this.posts.findIndex(p => p.id === newPost.id);
                                if (idx >= 0) {
                                    this.posts[idx] = postRes.data;
                                }
                            });
                            this.alertSvc.success('Fichier uploade');
                            this.pendingFileToUpload = null;
                            this.removePostAttachment();
                            this.creating = false;
                        },
                        error: err => {
                            console.error('Erreur upload:', err);
                            this.alertSvc.error("Erreur lors de l'upload du fichier");
                            this.creating = false;
                        }
                    });
                }
                else {
                    this.creating = false;
                }
            },
            error: () => { this.creating = false; }
        });
    }
    deletePost(post) {
        this.postSvc.delete(post.id).subscribe({
            next: () => {
                this.posts = this.posts.filter(p => p.id !== post.id);
                this.alertSvc.success('Publication supprimee');
            }
        });
    }
    react(post, type) {
        if (post.userReaction === type) {
            this.postSvc.removeReaction(post.id).subscribe(() => {
                post.userReaction = undefined;
                post.reactionCount = Math.max(0, (post.reactionCount || 1) - 1);
            });
        }
        else {
            this.postSvc.react(post.id, type).subscribe(() => {
                if (!post.userReaction)
                    post.reactionCount = (post.reactionCount || 0) + 1;
                post.userReaction = type;
            });
        }
    }
    toggleComments(post) {
        this.openComments[post.id] = !this.openComments[post.id];
        if (this.openComments[post.id] && !this.commentsMap[post.id]) {
            this.postSvc.getComments(post.id).subscribe(res => { this.commentsMap[post.id] = res.data; });
        }
    }
    setReply(postId, c) { this.replyTarget[postId] = c; }
    clearReply(postId) { this.replyTarget[postId] = null; }
    submitComment(post) {
        const text = this.commentText[post.id]?.trim();
        if (!text)
            return;
        const parent = this.replyTarget[post.id];
        this.postSvc.addComment(post.id, text, parent?.id).subscribe(res => {
            if (!this.commentsMap[post.id])
                this.commentsMap[post.id] = [];
            if (parent) {
                const target = this.commentsMap[post.id].find(c => c.id === parent.id);
                if (target) {
                    if (!target.replies)
                        target.replies = [];
                    target.replies.push(res.data);
                }
            }
            else {
                this.commentsMap[post.id].push(res.data);
                post.commentCount = (post.commentCount || 0) + 1;
            }
            this.commentText[post.id] = '';
            this.replyTarget[post.id] = null;
        });
    }
    toggleFollow(userId) {
        if (this.followingMap[userId]) {
            this.followSvc.unfollow(userId).subscribe(() => { this.followingMap[userId] = false; });
        }
        else {
            this.followSvc.follow(userId).subscribe(() => { this.followingMap[userId] = true; });
        }
    }
    updateFollowMap() {
        const myId = this.auth.currentUser?.id;
        const ids = [...new Set(this.posts.map(p => p.author.id).filter(id => id !== myId))];
        ids.forEach(id => {
            if (this.followingMap[id] === undefined) {
                this.followSvc.getStatus(id).subscribe(res => { this.followingMap[id] = res.data.isFollowing; });
            }
        });
    }
    onImgError(e) { e.target.style.display = 'none'; }
    initials(name) {
        return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    getMediaUrl(url) {
        if (!url)
            return '';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        const API_URL = 'http://localhost:8080';
        return `${API_URL}${url.startsWith('/') ? '' : '/'}${url}`;
    }
    onMediaLoad(e) {
        e.target.style.display = 'block';
    }
    onFilePreviewSelected(filePreview) {
        this.selectedPostAttachment = filePreview;
        this.pendingFileToUpload = filePreview.file;
    }
    removePostAttachment() {
        this.selectedPostAttachment = null;
        this.pendingFileToUpload = null;
    }
    static { this.ɵfac = function FeedComponent_Factory(t) { return new (t || FeedComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeedComponent, selectors: [["app-feed"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 38, vars: 12, consts: [["postMenu", "matMenu"], [1, "feed-layout"], [1, "feed-hero", "card"], [1, "hero-copy"], [1, "hero-eyebrow"], [1, "hero-metrics"], [1, "metric-pill"], [1, "metric-pill", "accent"], [1, "card", "create-post-card"], [1, "post-author-row"], [1, "avatar-sm"], ["type", "button", 1, "create-trigger", 3, "click"], [1, "trigger-title"], [1, "trigger-subtitle"], ["type", "button", 1, "mini-action-btn", 3, "click", "matTooltip"], [1, "post-form", 3, "formGroup"], [1, "center-spinner"], [1, "card", "post-card"], [1, "card", "empty-state"], [1, "load-more"], [1, "post-form", 3, "ngSubmit", "formGroup"], [1, "form-panel"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "content", "rows", "4", "placeholder", "Ecrivez votre message..."], [1, "upload-section"], [1, "section-label"], [3, "fileSelected", "maxSizeMb", "acceptTypes"], [1, "attachment-badge"], ["matInput", "", "formControlName", "mediaUrl", "placeholder", "https://..."], [1, "form-actions"], ["type", "button", 1, "btn-soft", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["type", "button", "mat-icon-button", "", "matTooltip", "Retirer", 3, "click"], ["diameter", "18"], [1, "post-header"], [1, "post-header-left"], [1, "avatar"], [1, "post-header-info"], [1, "post-author-line"], [1, "author-name"], [1, "owner-badge"], [1, "post-time"], [1, "post-header-right"], ["type", "button", 1, "follow-btn", 3, "followed"], [1, "post-body"], [1, "post-content"], [1, "media-surface"], [1, "post-counts"], [1, "post-actions"], ["type", "button", 1, "action-btn", 3, "click"], [1, "comments-section"], ["type", "button", 1, "follow-btn", 3, "click"], ["type", "button", "matTooltip", "Plus d'actions", 1, "icon-btn", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [3, "attachmentFileUrl", "attachmentFileType", "fileName", "attachmentFileSize"], [1, "count-pill"], [1, "reply-indicator"], [1, "comment"], [1, "comments-empty"], [1, "comment-input-row"], [1, "avatar-xs"], ["appearance", "outline", 1, "comment-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "submit-comment-btn", 3, "click", "disabled"], ["type", "button", 1, "icon-btn-small", 3, "click"], [1, "comment-thread"], [1, "comment-body"], [1, "comment-top"], [1, "comment-author"], [1, "comment-media-wrapper"], ["type", "button", 1, "reply-btn", 3, "click"], [1, "reply"], [1, "comment-body", "reply-body"], ["type", "button", 1, "btn-outline", 3, "click"]], template: function FeedComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "span", 4);
            i0.ɵɵtext(4, "Gestion des publications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6, "Votre fil social");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Publiez des actualites, partagez vos pieces jointes et interagissez avec la communaute dans une interface plus claire.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 5)(10, "div", 6)(11, "strong");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14, "publication(s) chargee(s)");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 7)(16, "strong");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span");
            i0.ɵɵtext(19);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(20, "div", 8)(21, "div", 9)(22, "div", 10);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "button", 11);
            i0.ɵɵlistener("click", function FeedComponent_Template_button_click_24_listener() { return ctx.showCreateForm = !ctx.showCreateForm; });
            i0.ɵɵelementStart(25, "span", 12);
            i0.ɵɵtext(26, "Partager une publication");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span", 13);
            i0.ɵɵtext(28, "Texte, image, video ou document");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(29, "button", 14);
            i0.ɵɵlistener("click", function FeedComponent_Template_button_click_29_listener() { return ctx.showCreateForm = !ctx.showCreateForm; });
            i0.ɵɵelementStart(30, "mat-icon");
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()()();
            i0.ɵɵtemplate(32, FeedComponent_Conditional_32_Template, 24, 6, "form", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(33, FeedComponent_Conditional_33_Template, 2, 0, "div", 16);
            i0.ɵɵrepeaterCreate(34, FeedComponent_For_35_Template, 46, 20, "article", 17, _forTrack0);
            i0.ɵɵtemplate(36, FeedComponent_Conditional_36_Template, 7, 0, "div", 18)(37, FeedComponent_Conditional_37_Template, 6, 0, "div", 19);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.posts.length);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.showCreateForm ? "Brouillon" : "Pret");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.showCreateForm ? "formulaire ouvert" : "a publier");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("expanded", ctx.showCreateForm);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.initials(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName));
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("matTooltip", ctx.showCreateForm ? "Fermer le formulaire" : "Ouvrir le formulaire");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.showCreateForm ? "expand_less" : "edit");
            i0.ɵɵadvance();
            i0.ɵɵconditional(32, ctx.showCreateForm ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(33, ctx.loading ? 33 : -1);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.posts);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(36, !ctx.loading && ctx.posts.length === 0 ? 36 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(37, !ctx.loading && !ctx.lastPage && ctx.posts.length > 0 ? 37 : -1);
        } }, dependencies: [CommonModule, i1.DatePipe, FormsModule, i2.ɵNgNoValidate, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.NgModel, ReactiveFormsModule, i2.FormGroupDirective, i2.FormControlName, MatButtonModule, i3.MatIconButton, MatIconModule, i4.MatIcon, MatFormFieldModule, i5.MatFormField, i5.MatLabel, MatInputModule, i6.MatInput, MatMenuModule, i7.MatMenu, i7.MatMenuItem, i7.MatMenuTrigger, MatProgressSpinnerModule, i8.MatProgressSpinner, MatTooltipModule, i9.MatTooltip, AttachmentUploaderComponent, MediaViewerComponent], styles: ["[_nghost-%COMP%] {\n      --orange: #ff8c00;\n      --orange-dark: #e67600;\n      --orange-soft: #fff1df;\n      --orange-light: #ffb347;\n      --orange-outline: rgba(255, 140, 0, 0.16);\n      --black: #1a1a1a;\n      --black-light: #4b5563;\n      --white: #ffffff;\n      --surface: #fffaf4;\n      --surface-strong: #fff5e8;\n      --gray-light: #f7f4ef;\n      --gray-medium: #ebe4d9;\n      --border: rgba(26, 26, 26, 0.08);\n      --shadow-soft: 0 12px 32px rgba(26, 26, 26, 0.08);\n      --shadow-card: 0 22px 40px rgba(26, 26, 26, 0.06);\n    }\n\n    .feed-layout[_ngcontent-%COMP%] {\n      max-width: 860px;\n      margin: 0 auto;\n      padding: 24px 20px 40px;\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      background:\n        radial-gradient(circle at top left, rgba(255, 179, 71, 0.18), transparent 24%),\n        linear-gradient(180deg, #fffdf9 0%, #fff7ef 100%);\n      min-height: 100vh;\n    }\n\n    .card[_ngcontent-%COMP%] {\n      background: rgba(255, 255, 255, 0.96);\n      border: 1px solid var(--border);\n      border-radius: 24px;\n      box-shadow: var(--shadow-soft);\n      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;\n      backdrop-filter: blur(12px);\n    }\n\n    .card[_ngcontent-%COMP%]:hover {\n      transform: translateY(-3px);\n      box-shadow: var(--shadow-card);\n      border-color: var(--orange-outline);\n    }\n\n    .feed-hero[_ngcontent-%COMP%] {\n      padding: 26px 28px;\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 20px;\n      background:\n        linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.02)),\n        #fff;\n      overflow: hidden;\n      position: relative;\n    }\n\n    .feed-hero[_ngcontent-%COMP%]::after {\n      content: '';\n      position: absolute;\n      top: -48px;\n      right: -48px;\n      width: 160px;\n      height: 160px;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(255, 179, 71, 0.24), transparent 68%);\n      pointer-events: none;\n    }\n\n    .hero-copy[_ngcontent-%COMP%] {\n      position: relative;\n      z-index: 1;\n      max-width: 540px;\n    }\n\n    .hero-eyebrow[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 7px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.12);\n      color: var(--orange-dark);\n      font-size: 0.76rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      margin-bottom: 12px;\n    }\n\n    .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      margin: 0 0 10px;\n      font-size: clamp(1.8rem, 3vw, 2.3rem);\n      line-height: 1.1;\n      color: var(--black);\n    }\n\n    .hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--black-light);\n      line-height: 1.65;\n      font-size: 0.96rem;\n    }\n\n    .hero-metrics[_ngcontent-%COMP%] {\n      display: grid;\n      gap: 12px;\n      min-width: 210px;\n      position: relative;\n      z-index: 1;\n    }\n\n    .metric-pill[_ngcontent-%COMP%] {\n      padding: 16px 18px;\n      border-radius: 20px;\n      background: rgba(255, 255, 255, 0.92);\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      box-shadow: 0 10px 22px rgba(255, 140, 0, 0.08);\n    }\n\n    .metric-pill.accent[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.14), rgba(255, 179, 71, 0.08));\n    }\n\n    .metric-pill[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 1.2rem;\n      color: var(--black);\n      margin-bottom: 4px;\n    }\n\n    .metric-pill[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 0.84rem;\n      color: var(--black-light);\n    }\n\n    .create-post-card[_ngcontent-%COMP%] {\n      padding: 18px 18px 16px;\n      overflow: hidden;\n      position: relative;\n    }\n\n    .create-post-card[_ngcontent-%COMP%]::before {\n      content: '';\n      position: absolute;\n      inset: 0 0 auto 0;\n      height: 5px;\n      background: linear-gradient(90deg, var(--orange), var(--orange-light));\n    }\n\n    .create-post-card.expanded[_ngcontent-%COMP%] {\n      box-shadow: 0 24px 42px rgba(255, 140, 0, 0.12);\n    }\n\n    .post-author-row[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: auto 1fr auto;\n      gap: 12px;\n      align-items: center;\n    }\n\n    .create-trigger[_ngcontent-%COMP%] {\n      width: 100%;\n      border: 1px solid var(--gray-medium);\n      border-radius: 18px;\n      background: linear-gradient(135deg, #fffefc, var(--surface));\n      padding: 14px 18px;\n      text-align: left;\n      cursor: pointer;\n      transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;\n    }\n\n    .create-trigger[_ngcontent-%COMP%]:hover {\n      border-color: rgba(255, 140, 0, 0.25);\n      box-shadow: 0 14px 28px rgba(255, 140, 0, 0.08);\n      transform: translateY(-1px);\n    }\n\n    .trigger-title[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 0.96rem;\n      font-weight: 700;\n      color: var(--black);\n      margin-bottom: 3px;\n    }\n\n    .trigger-subtitle[_ngcontent-%COMP%] {\n      display: block;\n      font-size: 0.84rem;\n      color: var(--black-light);\n    }\n\n    .mini-action-btn[_ngcontent-%COMP%] {\n      width: 44px;\n      height: 44px;\n      border-radius: 14px;\n      border: 1px solid rgba(255, 140, 0, 0.12);\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      display: grid;\n      place-items: center;\n      cursor: pointer;\n      transition: transform 0.2s ease, background 0.2s ease;\n    }\n\n    .mini-action-btn[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.14);\n    }\n\n    .post-form[_ngcontent-%COMP%] {\n      margin-top: 18px;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n\n    .form-panel[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      padding: 18px;\n      border-radius: 20px;\n      background: linear-gradient(180deg, #fff, var(--surface));\n      border: 1px solid rgba(255, 140, 0, 0.08);\n    }\n\n    .full-width[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .section-label[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 0.84rem;\n      font-weight: 700;\n      color: var(--black);\n      margin-bottom: 10px;\n    }\n\n    .section-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      color: var(--orange);\n    }\n\n    .upload-section[_ngcontent-%COMP%] {\n      padding: 16px;\n      border-radius: 18px;\n      background: rgba(255, 140, 0, 0.03);\n      border: 1px dashed rgba(255, 140, 0, 0.22);\n    }\n\n    .attachment-badge[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 12px 14px;\n      margin-top: 12px;\n      border-radius: 14px;\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.14), rgba(255, 179, 71, 0.08));\n      border: 1px solid rgba(255, 140, 0, 0.12);\n      color: var(--black);\n    }\n\n    .attachment-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      color: var(--orange);\n    }\n\n    .attachment-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      flex: 1;\n      min-width: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-weight: 600;\n    }\n\n    .form-actions[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      flex-wrap: wrap;\n    }\n\n    .btn-primary[_ngcontent-%COMP%], .btn-soft[_ngcontent-%COMP%], .btn-outline[_ngcontent-%COMP%] {\n      border: none;\n      border-radius: 14px;\n      font-weight: 700;\n      font-size: 0.92rem;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;\n      text-decoration: none;\n    }\n\n    .btn-primary[_ngcontent-%COMP%] {\n      min-height: 46px;\n      padding: 0 18px;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      color: var(--white);\n      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.24);\n    }\n\n    .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 18px 30px rgba(255, 140, 0, 0.28);\n    }\n\n    .btn-primary[_ngcontent-%COMP%]:disabled {\n      opacity: 0.65;\n      cursor: not-allowed;\n      box-shadow: none;\n    }\n\n    .btn-primary[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n      --mdc-circular-progress-active-indicator-color: #fff;\n    }\n\n    .btn-soft[_ngcontent-%COMP%] {\n      min-height: 46px;\n      padding: 0 16px;\n      background: #fff;\n      color: var(--black-light);\n      border: 1px solid var(--gray-medium);\n    }\n\n    .btn-soft[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: var(--gray-light);\n      color: var(--black);\n    }\n\n    .btn-outline[_ngcontent-%COMP%] {\n      min-height: 48px;\n      padding: 0 20px;\n      background: rgba(255, 255, 255, 0.9);\n      color: var(--orange-dark);\n      border: 1px solid rgba(255, 140, 0, 0.24);\n      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.08);\n    }\n\n    .btn-outline[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.08);\n    }\n\n    .post-card[_ngcontent-%COMP%] {\n      overflow: hidden;\n      animation: _ngcontent-%COMP%_slideIn 0.35s ease;\n    }\n\n    @keyframes _ngcontent-%COMP%_slideIn {\n      from {\n        opacity: 0;\n        transform: translateY(14px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    .post-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      padding: 18px 22px 14px;\n    }\n\n    .post-header-left[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      min-width: 0;\n    }\n\n    .post-header-info[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n      min-width: 0;\n    }\n\n    .post-author-line[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      flex-wrap: wrap;\n    }\n\n    .author-name[_ngcontent-%COMP%] {\n      font-weight: 700;\n      font-size: 0.98rem;\n      color: var(--black);\n    }\n\n    .owner-badge[_ngcontent-%COMP%] {\n      padding: 4px 10px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.12);\n      color: var(--orange-dark);\n      font-size: 0.72rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    .post-time[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n      font-size: 0.82rem;\n      color: #6b7280;\n    }\n\n    .post-time[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 16px;\n      width: 16px;\n      height: 16px;\n    }\n\n    .post-header-right[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      flex-shrink: 0;\n    }\n\n    .follow-btn[_ngcontent-%COMP%] {\n      min-height: 40px;\n      padding: 0 14px;\n      border-radius: 12px;\n      border: 1px solid transparent;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      color: var(--white);\n      font-weight: 700;\n      font-size: 0.86rem;\n      display: inline-flex;\n      align-items: center;\n      gap: 7px;\n      cursor: pointer;\n      box-shadow: 0 10px 18px rgba(255, 140, 0, 0.2);\n      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n    }\n\n    .follow-btn[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 14px 24px rgba(255, 140, 0, 0.24);\n    }\n\n    .follow-btn.followed[_ngcontent-%COMP%] {\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      border-color: rgba(255, 140, 0, 0.18);\n      box-shadow: none;\n    }\n\n    .icon-btn[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      border-radius: 12px;\n      border: 1px solid transparent;\n      background: transparent;\n      color: #6b7280;\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n      transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;\n    }\n\n    .icon-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      transform: translateY(-1px);\n    }\n\n    .post-body[_ngcontent-%COMP%] {\n      padding: 0 22px 8px;\n    }\n\n    .post-content[_ngcontent-%COMP%] {\n      margin: 0;\n      font-size: 0.97rem;\n      line-height: 1.72;\n      color: var(--black);\n      word-break: break-word;\n      white-space: pre-line;\n    }\n\n    .media-surface[_ngcontent-%COMP%] {\n      margin: 0 18px 14px;\n      border-radius: 20px;\n      overflow: hidden;\n      border: 1px solid var(--border);\n      background: #fafafa;\n    }\n\n    .post-counts[_ngcontent-%COMP%] {\n      display: flex;\n      gap: 10px;\n      flex-wrap: wrap;\n      padding: 0 22px 14px;\n    }\n\n    .count-pill[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 7px;\n      padding: 8px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      font-size: 0.82rem;\n      font-weight: 700;\n    }\n\n    .count-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 16px;\n      width: 16px;\n      height: 16px;\n    }\n\n    .post-actions[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n      gap: 8px;\n      padding: 0 18px 18px;\n    }\n\n    .action-btn[_ngcontent-%COMP%] {\n      min-height: 46px;\n      padding: 0 10px;\n      border: 1px solid rgba(26, 26, 26, 0.08);\n      border-radius: 14px;\n      background: #fff;\n      color: var(--black-light);\n      font-weight: 700;\n      font-size: 0.84rem;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      cursor: pointer;\n      transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\n    }\n\n    .action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 18px;\n      width: 18px;\n      height: 18px;\n    }\n\n    .action-btn[_ngcontent-%COMP%]:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      border-color: rgba(255, 140, 0, 0.18);\n      box-shadow: 0 12px 20px rgba(255, 140, 0, 0.08);\n    }\n\n    .action-btn.reacted[_ngcontent-%COMP%], .action-btn.opened[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.16), rgba(255, 179, 71, 0.08));\n      color: var(--orange-dark);\n      border-color: rgba(255, 140, 0, 0.22);\n    }\n\n    .comments-section[_ngcontent-%COMP%] {\n      padding: 0 18px 18px;\n      display: flex;\n      flex-direction: column;\n      gap: 14px;\n    }\n\n    .reply-indicator[_ngcontent-%COMP%] {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 14px;\n      border-radius: 14px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      font-weight: 700;\n      align-self: flex-start;\n    }\n\n    .reply-indicator[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 18px;\n      width: 18px;\n      height: 18px;\n    }\n\n    .comment[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: flex-start;\n      gap: 12px;\n    }\n\n    .comment-thread[_ngcontent-%COMP%] {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n\n    .comment-body[_ngcontent-%COMP%] {\n      background: linear-gradient(180deg, var(--surface), #fff);\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      border-radius: 18px;\n      padding: 14px 16px;\n      box-shadow: 0 10px 18px rgba(255, 140, 0, 0.04);\n    }\n\n    .comment-top[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      margin-bottom: 4px;\n    }\n\n    .comment-author[_ngcontent-%COMP%] {\n      display: inline-block;\n      font-weight: 700;\n      font-size: 0.87rem;\n      color: var(--black);\n    }\n\n    .comment-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      line-height: 1.65;\n      color: var(--black-light);\n      font-size: 0.9rem;\n      white-space: pre-line;\n    }\n\n    .comment-media-wrapper[_ngcontent-%COMP%] {\n      margin-top: 12px;\n      border-radius: 14px;\n      overflow: hidden;\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      background: #fff;\n    }\n\n    .reply[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: flex-start;\n      gap: 10px;\n      margin-left: 18px;\n    }\n\n    .reply-body[_ngcontent-%COMP%] {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.04));\n    }\n\n    .reply-btn[_ngcontent-%COMP%] {\n      margin-top: 10px;\n      padding: 7px 11px;\n      border: none;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      font-size: 0.78rem;\n      font-weight: 700;\n      cursor: pointer;\n      transition: background 0.2s ease, transform 0.2s ease;\n    }\n\n    .reply-btn[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 140, 0, 0.14);\n      transform: translateY(-1px);\n    }\n\n    .comments-empty[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 14px 16px;\n      border-radius: 16px;\n      background: rgba(255, 140, 0, 0.04);\n      color: var(--black-light);\n    }\n\n    .comments-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      color: var(--orange);\n    }\n\n    .comment-input-row[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: auto 1fr auto;\n      gap: 10px;\n      align-items: end;\n      padding: 14px;\n      border-radius: 18px;\n      background: linear-gradient(180deg, #fff, var(--surface));\n      border: 1px solid rgba(255, 140, 0, 0.08);\n    }\n\n    .comment-field[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .submit-comment-btn[_ngcontent-%COMP%] {\n      width: 46px;\n      height: 46px;\n      border-radius: 14px;\n      border: none;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      color: #fff;\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.22);\n      transition: transform 0.2s ease, box-shadow 0.2s ease;\n    }\n\n    .submit-comment-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n      transform: translateY(-1px);\n      box-shadow: 0 16px 28px rgba(255, 140, 0, 0.28);\n    }\n\n    .submit-comment-btn[_ngcontent-%COMP%]:disabled {\n      opacity: 0.45;\n      cursor: not-allowed;\n      box-shadow: none;\n    }\n\n    .avatar[_ngcontent-%COMP%], .avatar-sm[_ngcontent-%COMP%], .avatar-xs[_ngcontent-%COMP%] {\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 800;\n      color: #fff;\n      flex-shrink: 0;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.2);\n    }\n\n    .avatar[_ngcontent-%COMP%] {\n      width: 48px;\n      height: 48px;\n      font-size: 1rem;\n    }\n\n    .avatar-sm[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      font-size: 0.84rem;\n    }\n\n    .avatar-xs[_ngcontent-%COMP%] {\n      width: 32px;\n      height: 32px;\n      font-size: 0.75rem;\n      background: linear-gradient(135deg, var(--orange-light), var(--orange));\n      box-shadow: none;\n    }\n\n    .icon-btn-small[_ngcontent-%COMP%] {\n      width: 28px;\n      height: 28px;\n      border: none;\n      border-radius: 50%;\n      background: transparent;\n      color: var(--orange-dark);\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n    }\n\n    .icon-btn-small[_ngcontent-%COMP%]:hover {\n      background: rgba(255, 140, 0, 0.08);\n    }\n\n    .empty-state[_ngcontent-%COMP%] {\n      padding: 42px 32px;\n      text-align: center;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n      font-size: 52px;\n      width: 52px;\n      height: 52px;\n      color: var(--orange);\n      margin-bottom: 12px;\n    }\n\n    .empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n      margin: 0 0 8px;\n      font-size: 1.2rem;\n      color: var(--black);\n    }\n\n    .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      margin: 0;\n      color: var(--black-light);\n      line-height: 1.6;\n    }\n\n    .load-more[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      padding-top: 2px;\n    }\n\n    .center-spinner[_ngcontent-%COMP%] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 32px;\n    }\n\n      .feed-layout .mat-mdc-form-field-subscript-wrapper {\n      display: none;\n    }\n\n      .feed-layout .mat-mdc-text-field-wrapper {\n      border-radius: 18px !important;\n      background: #fff !important;\n    }\n\n      .feed-layout .mdc-notched-outline__leading,   .feed-layout .mdc-notched-outline__notch,   .feed-layout .mdc-notched-outline__trailing {\n      border-color: rgba(255, 140, 0, 0.14) !important;\n    }\n\n      .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,   .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,   .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n      border-color: var(--orange) !important;\n    }\n\n      .feed-layout .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {\n      color: var(--orange) !important;\n    }\n\n    @media (max-width: 900px) {\n      .feed-hero[_ngcontent-%COMP%] {\n        flex-direction: column;\n      }\n\n      .hero-metrics[_ngcontent-%COMP%] {\n        width: 100%;\n        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      }\n    }\n\n    @media (max-width: 720px) {\n      .feed-layout[_ngcontent-%COMP%] {\n        padding: 16px 12px 32px;\n        gap: 16px;\n      }\n\n      .feed-hero[_ngcontent-%COMP%], .create-post-card[_ngcontent-%COMP%], .post-card[_ngcontent-%COMP%] {\n        border-radius: 20px;\n      }\n\n      .post-author-row[_ngcontent-%COMP%], .comment-input-row[_ngcontent-%COMP%] {\n        grid-template-columns: auto 1fr;\n      }\n\n      .mini-action-btn[_ngcontent-%COMP%], .submit-comment-btn[_ngcontent-%COMP%] {\n        grid-column: 2;\n        justify-self: end;\n      }\n\n      .post-actions[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n      }\n\n      .post-header[_ngcontent-%COMP%], .post-body[_ngcontent-%COMP%], .post-counts[_ngcontent-%COMP%], .post-actions[_ngcontent-%COMP%], .comments-section[_ngcontent-%COMP%] {\n        padding-left: 16px;\n        padding-right: 16px;\n      }\n\n      .media-surface[_ngcontent-%COMP%] {\n        margin-left: 14px;\n        margin-right: 14px;\n      }\n    }\n\n    @media (max-width: 520px) {\n      .hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 1.6rem;\n      }\n\n      .post-header[_ngcontent-%COMP%] {\n        align-items: flex-start;\n      }\n\n      .follow-btn[_ngcontent-%COMP%] {\n        padding: 0 12px;\n      }\n\n      .follow-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        display: none;\n      }\n\n      .reply[_ngcontent-%COMP%] {\n        margin-left: 8px;\n      }\n\n      .comment[_ngcontent-%COMP%] {\n        align-items: stretch;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeedComponent, [{
        type: Component,
        args: [{ selector: 'app-feed', standalone: true, imports: [
                    CommonModule, FormsModule, ReactiveFormsModule,
                    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
                    MatMenuModule, MatProgressSpinnerModule, MatTooltipModule,
                    AttachmentUploaderComponent, MediaViewerComponent
                ], template: `
<div class="feed-layout">
  <section class="feed-hero card">
    <div class="hero-copy">
      <span class="hero-eyebrow">Gestion des publications</span>
      <h1>Votre fil social</h1>
      <p>Publiez des actualites, partagez vos pieces jointes et interagissez avec la communaute dans une interface plus claire.</p>
    </div>

    <div class="hero-metrics">
      <div class="metric-pill">
        <strong>{{ posts.length }}</strong>
        <span>publication(s) chargee(s)</span>
      </div>
      <div class="metric-pill accent">
        <strong>{{ showCreateForm ? 'Brouillon' : 'Pret' }}</strong>
        <span>{{ showCreateForm ? 'formulaire ouvert' : 'a publier' }}</span>
      </div>
    </div>
  </section>

  <div class="card create-post-card" [class.expanded]="showCreateForm">
    <div class="post-author-row">
      <div class="avatar-sm">{{ initials(auth.currentUser?.fullName) }}</div>

      <button type="button" class="create-trigger" (click)="showCreateForm = !showCreateForm">
        <span class="trigger-title">Partager une publication</span>
        <span class="trigger-subtitle">Texte, image, video ou document</span>
      </button>

      <button
        type="button"
        class="mini-action-btn"
        (click)="showCreateForm = !showCreateForm"
        [matTooltip]="showCreateForm ? 'Fermer le formulaire' : 'Ouvrir le formulaire'">
        <mat-icon>{{ showCreateForm ? 'expand_less' : 'edit' }}</mat-icon>
      </button>
    </div>

    @if (showCreateForm) {
      <form [formGroup]="postForm" (ngSubmit)="createPost()" class="post-form">
        <div class="form-panel">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Votre publication</mat-label>
            <textarea matInput formControlName="content" rows="4" placeholder="Ecrivez votre message..."></textarea>
          </mat-form-field>

          <div class="upload-section">
            <div class="section-label">
              <mat-icon>attach_file</mat-icon>
              <span>Piece jointe</span>
            </div>

            <app-attachment-uploader
              [maxSizeMb]="50"
              [acceptTypes]="'all'"
              (fileSelected)="onFilePreviewSelected($event)">
            </app-attachment-uploader>

            @if (selectedPostAttachment) {
              <div class="attachment-badge">
                <mat-icon>check_circle</mat-icon>
                <span>{{ selectedPostAttachment.file.name }}</span>
                <button type="button" mat-icon-button (click)="removePostAttachment()" matTooltip="Retirer">
                  <mat-icon>close</mat-icon>
                </button>
              </div>
            }
          </div>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Lien media optionnel</mat-label>
            <input matInput formControlName="mediaUrl" placeholder="https://...">
          </mat-form-field>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-soft" (click)="showCreateForm = false">Annuler</button>
          <button class="btn-primary" type="submit" [disabled]="postForm.invalid || creating">
            @if (creating) {
              <mat-spinner diameter="18"></mat-spinner>
              <span>Publication...</span>
            } @else {
              <mat-icon>send</mat-icon>
              <span>Publier</span>
            }
          </button>
        </div>
      </form>
    }
  </div>

  @if (loading) {
    <div class="center-spinner"><mat-spinner></mat-spinner></div>
  }

  @for (post of posts; track post.id) {
    <article class="card post-card">
      <div class="post-header">
        <div class="post-header-left">
          <div class="avatar">{{ initials(post.author.fullName) }}</div>
          <div class="post-header-info">
            <div class="post-author-line">
              <span class="author-name">{{ post.author.fullName }}</span>
              @if (post.author.id === auth.currentUser?.id) {
                <span class="owner-badge">Vous</span>
              }
            </div>
            <span class="post-time">
              <mat-icon>schedule</mat-icon>
              {{ post.createdAt | date:'dd/MM/yyyy HH:mm' }}
            </span>
          </div>
        </div>

        <div class="post-header-right">
          @if (post.author.id !== auth.currentUser?.id) {
            <button
              type="button"
              class="follow-btn"
              [class.followed]="followingMap[post.author.id]"
              (click)="toggleFollow(post.author.id)">
              <mat-icon>{{ followingMap[post.author.id] ? 'check' : 'person_add' }}</mat-icon>
              <span>{{ followingMap[post.author.id] ? 'Abonne' : 'Suivre' }}</span>
            </button>
          } @else {
            <button type="button" class="icon-btn" [matMenuTriggerFor]="postMenu" matTooltip="Plus d'actions">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #postMenu="matMenu">
              <button mat-menu-item (click)="deletePost(post)">
                <mat-icon>delete</mat-icon>
                <span>Supprimer</span>
              </button>
            </mat-menu>
          }
        </div>
      </div>

      <div class="post-body">
        <p class="post-content">{{ post.content }}</p>
      </div>

      @if (post.attachmentFileUrl) {
        <div class="media-surface">
          <app-media-viewer
            [attachmentFileUrl]="post.attachmentFileUrl"
            [attachmentFileType]="post.attachmentFileType || 'IMAGE'"
            [fileName]="post.attachmentFileName || ''"
            [attachmentFileSize]="post.attachmentFileSize || 0">
          </app-media-viewer>
        </div>
      } @else if (post.mediaUrl) {
        <div class="media-surface">
          <app-media-viewer
            [attachmentFileUrl]="post.mediaUrl"
            [attachmentFileType]="'IMAGE'"
            [fileName]="'Image'"
            [attachmentFileSize]="0">
          </app-media-viewer>
        </div>
      }

      @if ((post.reactionCount || 0) > 0 || (post.commentCount || 0) > 0) {
        <div class="post-counts">
          @if ((post.reactionCount || 0) > 0) {
            <span class="count-pill">
              <mat-icon>thumb_up</mat-icon>
              {{ post.reactionCount }}
            </span>
          }
          @if ((post.commentCount || 0) > 0) {
            <span class="count-pill">
              <mat-icon>chat_bubble_outline</mat-icon>
              {{ post.commentCount }} commentaire(s)
            </span>
          }
        </div>
      }

      <div class="post-actions">
        <button type="button" class="action-btn" [class.reacted]="post.userReaction === 'LIKE'" (click)="react(post, 'LIKE')">
          <mat-icon>thumb_up</mat-icon>
          <span>J'aime</span>
        </button>
        <button type="button" class="action-btn" [class.reacted]="post.userReaction === 'LOVE'" (click)="react(post, 'LOVE')">
          <mat-icon>favorite</mat-icon>
          <span>J'adore</span>
        </button>
        <button type="button" class="action-btn" [class.reacted]="post.userReaction === 'CELEBRATE'" (click)="react(post, 'CELEBRATE')">
          <mat-icon>celebration</mat-icon>
          <span>Bravo</span>
        </button>
        <button type="button" class="action-btn" [class.opened]="openComments[post.id]" (click)="toggleComments(post)">
          <mat-icon>chat_bubble_outline</mat-icon>
          <span>Commenter</span>
        </button>
      </div>

      @if (openComments[post.id]) {
        <div class="comments-section">
          @if (replyTarget[post.id]) {
            <div class="reply-indicator">
              <mat-icon>reply</mat-icon>
              <span>Reponse a {{ replyTarget[post.id]!.author.fullName }}</span>
              <button type="button" class="icon-btn-small" (click)="clearReply(post.id)">
                <mat-icon>close</mat-icon>
              </button>
            </div>
          }

          @for (c of commentsMap[post.id] || []; track c.id) {
            <div class="comment">
              <div class="avatar-xs">{{ initials(c.author.fullName) }}</div>

              <div class="comment-thread">
                <div class="comment-body">
                  <div class="comment-top">
                    <span class="comment-author">{{ c.author.fullName }}</span>
                  </div>
                  <p>{{ c.content }}</p>

                  @if (c.attachmentFileUrl) {
                    <div class="comment-media-wrapper">
                      <app-media-viewer
                        [attachmentFileUrl]="c.attachmentFileUrl"
                        [attachmentFileType]="c.attachmentFileType || 'IMAGE'"
                        [fileName]="c.attachmentFileName || ''"
                        [attachmentFileSize]="c.attachmentFileSize || 0">
                      </app-media-viewer>
                    </div>
                  }

                  <button type="button" class="reply-btn" (click)="setReply(post.id, c)">Repondre</button>
                </div>

                @for (r of c.replies || []; track r.id) {
                  <div class="reply">
                    <div class="avatar-xs">{{ initials(r.author.fullName) }}</div>
                    <div class="comment-body reply-body">
                      <span class="comment-author">{{ r.author.fullName }}</span>
                      <p>{{ r.content }}</p>

                      @if (r.attachmentFileUrl) {
                        <div class="comment-media-wrapper">
                          <app-media-viewer
                            [attachmentFileUrl]="r.attachmentFileUrl"
                            [attachmentFileType]="r.attachmentFileType || 'IMAGE'"
                            [fileName]="r.attachmentFileName || ''"
                            [attachmentFileSize]="r.attachmentFileSize || 0">
                          </app-media-viewer>
                        </div>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          }

          @if ((commentsMap[post.id] || []).length === 0) {
            <div class="comments-empty">
              <mat-icon>forum</mat-icon>
              <p>Aucun commentaire pour le moment. Soyez le premier a reagir.</p>
            </div>
          }

          <div class="comment-input-row">
            <div class="avatar-xs">{{ initials(auth.currentUser?.fullName) }}</div>
            <mat-form-field appearance="outline" class="comment-field">
              <mat-label>{{ replyTarget[post.id] ? 'Votre reponse' : 'Ajouter un commentaire' }}</mat-label>
              <input matInput [(ngModel)]="commentText[post.id]" (keyup.enter)="submitComment(post)">
            </mat-form-field>
            <button type="button" class="submit-comment-btn" (click)="submitComment(post)" [disabled]="!(commentText[post.id] || '').trim()">
              <mat-icon>send</mat-icon>
            </button>
          </div>
        </div>
      }
    </article>
  }

  @if (!loading && posts.length === 0) {
    <div class="card empty-state">
      <mat-icon>newspaper</mat-icon>
      <h3>Aucune publication visible</h3>
      <p>Suivez des utilisateurs ou creez votre premiere publication pour lancer l'activite.</p>
    </div>
  }

  @if (!loading && !lastPage && posts.length > 0) {
    <div class="load-more">
      <button type="button" class="btn-outline" (click)="loadMore()">
        <mat-icon>expand_more</mat-icon>
        <span>Voir plus</span>
      </button>
    </div>
  }
</div>
  `, styles: ["\n    :host {\n      --orange: #ff8c00;\n      --orange-dark: #e67600;\n      --orange-soft: #fff1df;\n      --orange-light: #ffb347;\n      --orange-outline: rgba(255, 140, 0, 0.16);\n      --black: #1a1a1a;\n      --black-light: #4b5563;\n      --white: #ffffff;\n      --surface: #fffaf4;\n      --surface-strong: #fff5e8;\n      --gray-light: #f7f4ef;\n      --gray-medium: #ebe4d9;\n      --border: rgba(26, 26, 26, 0.08);\n      --shadow-soft: 0 12px 32px rgba(26, 26, 26, 0.08);\n      --shadow-card: 0 22px 40px rgba(26, 26, 26, 0.06);\n    }\n\n    .feed-layout {\n      max-width: 860px;\n      margin: 0 auto;\n      padding: 24px 20px 40px;\n      display: flex;\n      flex-direction: column;\n      gap: 20px;\n      background:\n        radial-gradient(circle at top left, rgba(255, 179, 71, 0.18), transparent 24%),\n        linear-gradient(180deg, #fffdf9 0%, #fff7ef 100%);\n      min-height: 100vh;\n    }\n\n    .card {\n      background: rgba(255, 255, 255, 0.96);\n      border: 1px solid var(--border);\n      border-radius: 24px;\n      box-shadow: var(--shadow-soft);\n      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;\n      backdrop-filter: blur(12px);\n    }\n\n    .card:hover {\n      transform: translateY(-3px);\n      box-shadow: var(--shadow-card);\n      border-color: var(--orange-outline);\n    }\n\n    .feed-hero {\n      padding: 26px 28px;\n      display: flex;\n      align-items: flex-start;\n      justify-content: space-between;\n      gap: 20px;\n      background:\n        linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.02)),\n        #fff;\n      overflow: hidden;\n      position: relative;\n    }\n\n    .feed-hero::after {\n      content: '';\n      position: absolute;\n      top: -48px;\n      right: -48px;\n      width: 160px;\n      height: 160px;\n      border-radius: 50%;\n      background: radial-gradient(circle, rgba(255, 179, 71, 0.24), transparent 68%);\n      pointer-events: none;\n    }\n\n    .hero-copy {\n      position: relative;\n      z-index: 1;\n      max-width: 540px;\n    }\n\n    .hero-eyebrow {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 7px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.12);\n      color: var(--orange-dark);\n      font-size: 0.76rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.08em;\n      margin-bottom: 12px;\n    }\n\n    .hero-copy h1 {\n      margin: 0 0 10px;\n      font-size: clamp(1.8rem, 3vw, 2.3rem);\n      line-height: 1.1;\n      color: var(--black);\n    }\n\n    .hero-copy p {\n      margin: 0;\n      color: var(--black-light);\n      line-height: 1.65;\n      font-size: 0.96rem;\n    }\n\n    .hero-metrics {\n      display: grid;\n      gap: 12px;\n      min-width: 210px;\n      position: relative;\n      z-index: 1;\n    }\n\n    .metric-pill {\n      padding: 16px 18px;\n      border-radius: 20px;\n      background: rgba(255, 255, 255, 0.92);\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      box-shadow: 0 10px 22px rgba(255, 140, 0, 0.08);\n    }\n\n    .metric-pill.accent {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.14), rgba(255, 179, 71, 0.08));\n    }\n\n    .metric-pill strong {\n      display: block;\n      font-size: 1.2rem;\n      color: var(--black);\n      margin-bottom: 4px;\n    }\n\n    .metric-pill span {\n      display: block;\n      font-size: 0.84rem;\n      color: var(--black-light);\n    }\n\n    .create-post-card {\n      padding: 18px 18px 16px;\n      overflow: hidden;\n      position: relative;\n    }\n\n    .create-post-card::before {\n      content: '';\n      position: absolute;\n      inset: 0 0 auto 0;\n      height: 5px;\n      background: linear-gradient(90deg, var(--orange), var(--orange-light));\n    }\n\n    .create-post-card.expanded {\n      box-shadow: 0 24px 42px rgba(255, 140, 0, 0.12);\n    }\n\n    .post-author-row {\n      display: grid;\n      grid-template-columns: auto 1fr auto;\n      gap: 12px;\n      align-items: center;\n    }\n\n    .create-trigger {\n      width: 100%;\n      border: 1px solid var(--gray-medium);\n      border-radius: 18px;\n      background: linear-gradient(135deg, #fffefc, var(--surface));\n      padding: 14px 18px;\n      text-align: left;\n      cursor: pointer;\n      transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;\n    }\n\n    .create-trigger:hover {\n      border-color: rgba(255, 140, 0, 0.25);\n      box-shadow: 0 14px 28px rgba(255, 140, 0, 0.08);\n      transform: translateY(-1px);\n    }\n\n    .trigger-title {\n      display: block;\n      font-size: 0.96rem;\n      font-weight: 700;\n      color: var(--black);\n      margin-bottom: 3px;\n    }\n\n    .trigger-subtitle {\n      display: block;\n      font-size: 0.84rem;\n      color: var(--black-light);\n    }\n\n    .mini-action-btn {\n      width: 44px;\n      height: 44px;\n      border-radius: 14px;\n      border: 1px solid rgba(255, 140, 0, 0.12);\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      display: grid;\n      place-items: center;\n      cursor: pointer;\n      transition: transform 0.2s ease, background 0.2s ease;\n    }\n\n    .mini-action-btn:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.14);\n    }\n\n    .post-form {\n      margin-top: 18px;\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n    }\n\n    .form-panel {\n      display: flex;\n      flex-direction: column;\n      gap: 16px;\n      padding: 18px;\n      border-radius: 20px;\n      background: linear-gradient(180deg, #fff, var(--surface));\n      border: 1px solid rgba(255, 140, 0, 0.08);\n    }\n\n    .full-width {\n      width: 100%;\n    }\n\n    .section-label {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 0.84rem;\n      font-weight: 700;\n      color: var(--black);\n      margin-bottom: 10px;\n    }\n\n    .section-label mat-icon {\n      color: var(--orange);\n    }\n\n    .upload-section {\n      padding: 16px;\n      border-radius: 18px;\n      background: rgba(255, 140, 0, 0.03);\n      border: 1px dashed rgba(255, 140, 0, 0.22);\n    }\n\n    .attachment-badge {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 12px 14px;\n      margin-top: 12px;\n      border-radius: 14px;\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.14), rgba(255, 179, 71, 0.08));\n      border: 1px solid rgba(255, 140, 0, 0.12);\n      color: var(--black);\n    }\n\n    .attachment-badge mat-icon {\n      color: var(--orange);\n    }\n\n    .attachment-badge span {\n      flex: 1;\n      min-width: 0;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      font-weight: 600;\n    }\n\n    .form-actions {\n      display: flex;\n      justify-content: flex-end;\n      gap: 10px;\n      flex-wrap: wrap;\n    }\n\n    .btn-primary,\n    .btn-soft,\n    .btn-outline {\n      border: none;\n      border-radius: 14px;\n      font-weight: 700;\n      font-size: 0.92rem;\n      cursor: pointer;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;\n      text-decoration: none;\n    }\n\n    .btn-primary {\n      min-height: 46px;\n      padding: 0 18px;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      color: var(--white);\n      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.24);\n    }\n\n    .btn-primary:hover:not(:disabled) {\n      transform: translateY(-2px);\n      box-shadow: 0 18px 30px rgba(255, 140, 0, 0.28);\n    }\n\n    .btn-primary:disabled {\n      opacity: 0.65;\n      cursor: not-allowed;\n      box-shadow: none;\n    }\n\n    .btn-primary mat-spinner {\n      --mdc-circular-progress-active-indicator-color: #fff;\n    }\n\n    .btn-soft {\n      min-height: 46px;\n      padding: 0 16px;\n      background: #fff;\n      color: var(--black-light);\n      border: 1px solid var(--gray-medium);\n    }\n\n    .btn-soft:hover {\n      transform: translateY(-1px);\n      background: var(--gray-light);\n      color: var(--black);\n    }\n\n    .btn-outline {\n      min-height: 48px;\n      padding: 0 20px;\n      background: rgba(255, 255, 255, 0.9);\n      color: var(--orange-dark);\n      border: 1px solid rgba(255, 140, 0, 0.24);\n      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.08);\n    }\n\n    .btn-outline:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.08);\n    }\n\n    .post-card {\n      overflow: hidden;\n      animation: slideIn 0.35s ease;\n    }\n\n    @keyframes slideIn {\n      from {\n        opacity: 0;\n        transform: translateY(14px);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    .post-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      padding: 18px 22px 14px;\n    }\n\n    .post-header-left {\n      display: flex;\n      align-items: center;\n      gap: 12px;\n      min-width: 0;\n    }\n\n    .post-header-info {\n      display: flex;\n      flex-direction: column;\n      gap: 5px;\n      min-width: 0;\n    }\n\n    .post-author-line {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      flex-wrap: wrap;\n    }\n\n    .author-name {\n      font-weight: 700;\n      font-size: 0.98rem;\n      color: var(--black);\n    }\n\n    .owner-badge {\n      padding: 4px 10px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.12);\n      color: var(--orange-dark);\n      font-size: 0.72rem;\n      font-weight: 700;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n    }\n\n    .post-time {\n      display: inline-flex;\n      align-items: center;\n      gap: 6px;\n      font-size: 0.82rem;\n      color: #6b7280;\n    }\n\n    .post-time mat-icon {\n      font-size: 16px;\n      width: 16px;\n      height: 16px;\n    }\n\n    .post-header-right {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      flex-shrink: 0;\n    }\n\n    .follow-btn {\n      min-height: 40px;\n      padding: 0 14px;\n      border-radius: 12px;\n      border: 1px solid transparent;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      color: var(--white);\n      font-weight: 700;\n      font-size: 0.86rem;\n      display: inline-flex;\n      align-items: center;\n      gap: 7px;\n      cursor: pointer;\n      box-shadow: 0 10px 18px rgba(255, 140, 0, 0.2);\n      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n    }\n\n    .follow-btn:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 14px 24px rgba(255, 140, 0, 0.24);\n    }\n\n    .follow-btn.followed {\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      border-color: rgba(255, 140, 0, 0.18);\n      box-shadow: none;\n    }\n\n    .icon-btn {\n      width: 40px;\n      height: 40px;\n      border-radius: 12px;\n      border: 1px solid transparent;\n      background: transparent;\n      color: #6b7280;\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n      transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;\n    }\n\n    .icon-btn:hover {\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      transform: translateY(-1px);\n    }\n\n    .post-body {\n      padding: 0 22px 8px;\n    }\n\n    .post-content {\n      margin: 0;\n      font-size: 0.97rem;\n      line-height: 1.72;\n      color: var(--black);\n      word-break: break-word;\n      white-space: pre-line;\n    }\n\n    .media-surface {\n      margin: 0 18px 14px;\n      border-radius: 20px;\n      overflow: hidden;\n      border: 1px solid var(--border);\n      background: #fafafa;\n    }\n\n    .post-counts {\n      display: flex;\n      gap: 10px;\n      flex-wrap: wrap;\n      padding: 0 22px 14px;\n    }\n\n    .count-pill {\n      display: inline-flex;\n      align-items: center;\n      gap: 7px;\n      padding: 8px 12px;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      font-size: 0.82rem;\n      font-weight: 700;\n    }\n\n    .count-pill mat-icon {\n      font-size: 16px;\n      width: 16px;\n      height: 16px;\n    }\n\n    .post-actions {\n      display: grid;\n      grid-template-columns: repeat(4, minmax(0, 1fr));\n      gap: 8px;\n      padding: 0 18px 18px;\n    }\n\n    .action-btn {\n      min-height: 46px;\n      padding: 0 10px;\n      border: 1px solid rgba(26, 26, 26, 0.08);\n      border-radius: 14px;\n      background: #fff;\n      color: var(--black-light);\n      font-weight: 700;\n      font-size: 0.84rem;\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      gap: 8px;\n      cursor: pointer;\n      transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;\n    }\n\n    .action-btn mat-icon {\n      font-size: 18px;\n      width: 18px;\n      height: 18px;\n    }\n\n    .action-btn:hover {\n      transform: translateY(-1px);\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      border-color: rgba(255, 140, 0, 0.18);\n      box-shadow: 0 12px 20px rgba(255, 140, 0, 0.08);\n    }\n\n    .action-btn.reacted,\n    .action-btn.opened {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.16), rgba(255, 179, 71, 0.08));\n      color: var(--orange-dark);\n      border-color: rgba(255, 140, 0, 0.22);\n    }\n\n    .comments-section {\n      padding: 0 18px 18px;\n      display: flex;\n      flex-direction: column;\n      gap: 14px;\n    }\n\n    .reply-indicator {\n      display: inline-flex;\n      align-items: center;\n      gap: 8px;\n      padding: 10px 14px;\n      border-radius: 14px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      font-weight: 700;\n      align-self: flex-start;\n    }\n\n    .reply-indicator mat-icon {\n      font-size: 18px;\n      width: 18px;\n      height: 18px;\n    }\n\n    .comment {\n      display: flex;\n      align-items: flex-start;\n      gap: 12px;\n    }\n\n    .comment-thread {\n      flex: 1;\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n    }\n\n    .comment-body {\n      background: linear-gradient(180deg, var(--surface), #fff);\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      border-radius: 18px;\n      padding: 14px 16px;\n      box-shadow: 0 10px 18px rgba(255, 140, 0, 0.04);\n    }\n\n    .comment-top {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 12px;\n      margin-bottom: 4px;\n    }\n\n    .comment-author {\n      display: inline-block;\n      font-weight: 700;\n      font-size: 0.87rem;\n      color: var(--black);\n    }\n\n    .comment-body p {\n      margin: 0;\n      line-height: 1.65;\n      color: var(--black-light);\n      font-size: 0.9rem;\n      white-space: pre-line;\n    }\n\n    .comment-media-wrapper {\n      margin-top: 12px;\n      border-radius: 14px;\n      overflow: hidden;\n      border: 1px solid rgba(255, 140, 0, 0.08);\n      background: #fff;\n    }\n\n    .reply {\n      display: flex;\n      align-items: flex-start;\n      gap: 10px;\n      margin-left: 18px;\n    }\n\n    .reply-body {\n      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.04));\n    }\n\n    .reply-btn {\n      margin-top: 10px;\n      padding: 7px 11px;\n      border: none;\n      border-radius: 999px;\n      background: rgba(255, 140, 0, 0.08);\n      color: var(--orange-dark);\n      font-size: 0.78rem;\n      font-weight: 700;\n      cursor: pointer;\n      transition: background 0.2s ease, transform 0.2s ease;\n    }\n\n    .reply-btn:hover {\n      background: rgba(255, 140, 0, 0.14);\n      transform: translateY(-1px);\n    }\n\n    .comments-empty {\n      display: flex;\n      align-items: center;\n      gap: 10px;\n      padding: 14px 16px;\n      border-radius: 16px;\n      background: rgba(255, 140, 0, 0.04);\n      color: var(--black-light);\n    }\n\n    .comments-empty mat-icon {\n      color: var(--orange);\n    }\n\n    .comment-input-row {\n      display: grid;\n      grid-template-columns: auto 1fr auto;\n      gap: 10px;\n      align-items: end;\n      padding: 14px;\n      border-radius: 18px;\n      background: linear-gradient(180deg, #fff, var(--surface));\n      border: 1px solid rgba(255, 140, 0, 0.08);\n    }\n\n    .comment-field {\n      width: 100%;\n    }\n\n    .submit-comment-btn {\n      width: 46px;\n      height: 46px;\n      border-radius: 14px;\n      border: none;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      color: #fff;\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.22);\n      transition: transform 0.2s ease, box-shadow 0.2s ease;\n    }\n\n    .submit-comment-btn:hover:not(:disabled) {\n      transform: translateY(-1px);\n      box-shadow: 0 16px 28px rgba(255, 140, 0, 0.28);\n    }\n\n    .submit-comment-btn:disabled {\n      opacity: 0.45;\n      cursor: not-allowed;\n      box-shadow: none;\n    }\n\n    .avatar,\n    .avatar-sm,\n    .avatar-xs {\n      border-radius: 50%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 800;\n      color: #fff;\n      flex-shrink: 0;\n      background: linear-gradient(135deg, var(--orange), var(--orange-dark));\n      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.2);\n    }\n\n    .avatar {\n      width: 48px;\n      height: 48px;\n      font-size: 1rem;\n    }\n\n    .avatar-sm {\n      width: 40px;\n      height: 40px;\n      font-size: 0.84rem;\n    }\n\n    .avatar-xs {\n      width: 32px;\n      height: 32px;\n      font-size: 0.75rem;\n      background: linear-gradient(135deg, var(--orange-light), var(--orange));\n      box-shadow: none;\n    }\n\n    .icon-btn-small {\n      width: 28px;\n      height: 28px;\n      border: none;\n      border-radius: 50%;\n      background: transparent;\n      color: var(--orange-dark);\n      display: inline-grid;\n      place-items: center;\n      cursor: pointer;\n    }\n\n    .icon-btn-small:hover {\n      background: rgba(255, 140, 0, 0.08);\n    }\n\n    .empty-state {\n      padding: 42px 32px;\n      text-align: center;\n    }\n\n    .empty-state mat-icon {\n      font-size: 52px;\n      width: 52px;\n      height: 52px;\n      color: var(--orange);\n      margin-bottom: 12px;\n    }\n\n    .empty-state h3 {\n      margin: 0 0 8px;\n      font-size: 1.2rem;\n      color: var(--black);\n    }\n\n    .empty-state p {\n      margin: 0;\n      color: var(--black-light);\n      line-height: 1.6;\n    }\n\n    .load-more {\n      display: flex;\n      justify-content: center;\n      padding-top: 2px;\n    }\n\n    .center-spinner {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 32px;\n    }\n\n    ::ng-deep .feed-layout .mat-mdc-form-field-subscript-wrapper {\n      display: none;\n    }\n\n    ::ng-deep .feed-layout .mat-mdc-text-field-wrapper {\n      border-radius: 18px !important;\n      background: #fff !important;\n    }\n\n    ::ng-deep .feed-layout .mdc-notched-outline__leading,\n    ::ng-deep .feed-layout .mdc-notched-outline__notch,\n    ::ng-deep .feed-layout .mdc-notched-outline__trailing {\n      border-color: rgba(255, 140, 0, 0.14) !important;\n    }\n\n    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,\n    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,\n    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {\n      border-color: var(--orange) !important;\n    }\n\n    ::ng-deep .feed-layout .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {\n      color: var(--orange) !important;\n    }\n\n    @media (max-width: 900px) {\n      .feed-hero {\n        flex-direction: column;\n      }\n\n      .hero-metrics {\n        width: 100%;\n        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n      }\n    }\n\n    @media (max-width: 720px) {\n      .feed-layout {\n        padding: 16px 12px 32px;\n        gap: 16px;\n      }\n\n      .feed-hero,\n      .create-post-card,\n      .post-card {\n        border-radius: 20px;\n      }\n\n      .post-author-row,\n      .comment-input-row {\n        grid-template-columns: auto 1fr;\n      }\n\n      .mini-action-btn,\n      .submit-comment-btn {\n        grid-column: 2;\n        justify-self: end;\n      }\n\n      .post-actions {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n      }\n\n      .post-header,\n      .post-body,\n      .post-counts,\n      .post-actions,\n      .comments-section {\n        padding-left: 16px;\n        padding-right: 16px;\n      }\n\n      .media-surface {\n        margin-left: 14px;\n        margin-right: 14px;\n      }\n    }\n\n    @media (max-width: 520px) {\n      .hero-copy h1 {\n        font-size: 1.6rem;\n      }\n\n      .post-header {\n        align-items: flex-start;\n      }\n\n      .follow-btn {\n        padding: 0 12px;\n      }\n\n      .follow-btn span {\n        display: none;\n      }\n\n      .reply {\n        margin-left: 8px;\n      }\n\n      .comment {\n        align-items: stretch;\n      }\n    }\n  "] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "app\\features\\shared\\feed\\feed.component.ts", lineNumber: 1259 }); })();
//# sourceMappingURL=feed.component.js.map