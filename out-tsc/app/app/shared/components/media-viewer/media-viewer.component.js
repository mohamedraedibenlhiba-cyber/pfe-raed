import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfigService } from '../../../core/services/config.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/progress-spinner";
function MediaViewerComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function MediaViewerComponent_div_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openLightbox()); });
    i0.ɵɵelementStart(1, "img", 10);
    i0.ɵɵlistener("load", function MediaViewerComponent_div_0_div_1_Template_img_load_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onMediaLoad()); })("error", function MediaViewerComponent_div_0_div_1_Template_img_error_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onMediaError()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 11);
    i0.ɵɵlistener("click", function MediaViewerComponent_div_0_div_1_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.openLightbox(); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "zoom_in");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.mediaUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r1.fileName);
} }
function MediaViewerComponent_div_0_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "mat-icon");
    i0.ɵɵtext(2, "videocam");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.fileName);
} }
function MediaViewerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "video", 13);
    i0.ɵɵlistener("loadstart", function MediaViewerComponent_div_0_div_2_Template_video_loadstart_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onMediaLoad()); })("error", function MediaViewerComponent_div_0_div_2_Template_video_error_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onMediaError()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, MediaViewerComponent_div_0_div_2_div_2_Template, 5, 1, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.mediaUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fileName);
} }
function MediaViewerComponent_div_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "mat-icon");
    i0.ɵɵtext(2, "music_note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.fileName);
} }
function MediaViewerComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "audio", 17);
    i0.ɵɵlistener("loadstart", function MediaViewerComponent_div_0_div_3_Template_audio_loadstart_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onMediaLoad()); })("error", function MediaViewerComponent_div_0_div_3_Template_audio_error_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onMediaError()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(2, MediaViewerComponent_div_0_div_3_div_2_Template, 5, 1, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r1.mediaUrl, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fileName);
} }
function MediaViewerComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "div", 19)(2, "mat-icon", 20);
    i0.ɵɵtext(3, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 21)(5, "p", 22);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 23);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 24)(10, "button", 25)(11, "mat-icon");
    i0.ɵɵtext(12, "download");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " T\u00E9l\u00E9charger ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.fileName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.formatFileSize(ctx_r1.fileSize));
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r1.mediaUrl, i0.ɵɵsanitizeUrl)("download", ctx_r1.fileName);
} }
function MediaViewerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "mat-icon");
    i0.ɵɵtext(2, "error_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Impossible de charger le m\u00E9dia");
    i0.ɵɵelementEnd()();
} }
function MediaViewerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵelement(1, "mat-spinner", 28);
    i0.ɵɵelementEnd();
} }
function MediaViewerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, MediaViewerComponent_div_0_div_1_Template, 5, 2, "div", 3)(2, MediaViewerComponent_div_0_div_2_Template, 3, 2, "div", 4)(3, MediaViewerComponent_div_0_div_3_Template, 3, 2, "div", 5)(4, MediaViewerComponent_div_0_div_4_Template, 14, 4, "div", 6)(5, MediaViewerComponent_div_0_div_5_Template, 5, 0, "div", 7)(6, MediaViewerComponent_div_0_div_6_Template, 2, 0, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngSwitch", ctx_r1.mediaType);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "IMAGE");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "VIDEO");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "AUDIO");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DOCUMENT");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isLoading);
} }
function MediaViewerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵlistener("click", function MediaViewerComponent_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeLightbox()); });
    i0.ɵɵelementStart(1, "div", 30);
    i0.ɵɵlistener("click", function MediaViewerComponent_div_1_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "button", 31);
    i0.ɵɵlistener("click", function MediaViewerComponent_div_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeLightbox()); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(5, "img", 32);
    i0.ɵɵelementStart(6, "div", 33)(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "a", 34)(10, "button", 35)(11, "mat-icon");
    i0.ɵɵtext(12, "download");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("src", ctx_r1.mediaUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r1.fileName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.fileName);
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", ctx_r1.mediaUrl, i0.ɵɵsanitizeUrl)("download", ctx_r1.fileName);
} }
export class MediaViewerComponent {
    constructor() {
        this.fileName = '';
        this.attachmentFileUrl = '';
        this.attachmentFileType = 'IMAGE';
        this.attachmentFileSize = 0;
        this.mediaUrl = '';
        this.mediaType = 'IMAGE';
        this.fileSize = 0;
        this.isLoading = true;
        this.showLightbox = false;
        this.configService = inject(ConfigService);
    }
    ngOnInit() {
        if (this.attachmentFileUrl) {
            this.mediaUrl = this.configService.getMediaUrl(this.attachmentFileUrl);
            console.log('📸 MediaViewer - Loading:', this.attachmentFileType, 'URL:', this.mediaUrl);
        }
        this.mediaType = this.attachmentFileType;
        this.fileSize = this.attachmentFileSize;
        if (this.mediaType === 'DOCUMENT') {
            this.isLoading = false;
        }
    }
    onMediaLoad() {
        console.log('✅ Media loaded successfully:', this.mediaType);
        this.isLoading = false;
    }
    onMediaError() {
        console.error('❌ Media loading failed:', this.mediaUrl);
        this.isLoading = false;
    }
    openLightbox() {
        if (this.mediaType === 'IMAGE') {
            this.showLightbox = true;
            document.body.style.overflow = 'hidden';
        }
    }
    closeLightbox() {
        this.showLightbox = false;
        document.body.style.overflow = 'auto';
    }
    formatFileSize(bytes) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    }
    static { this.ɵfac = function MediaViewerComponent_Factory(t) { return new (t || MediaViewerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MediaViewerComponent, selectors: [["app-media-viewer"]], inputs: { fileName: "fileName", attachmentFileUrl: "attachmentFileUrl", attachmentFileType: "attachmentFileType", attachmentFileSize: "attachmentFileSize" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 2, consts: [["class", "media-viewer", 3, "ngSwitch", 4, "ngIf"], ["class", "lightbox", 3, "click", 4, "ngIf"], [1, "media-viewer", 3, "ngSwitch"], ["class", "media-container image-container", 3, "click", 4, "ngSwitchCase"], ["class", "media-container video-container", 4, "ngSwitchCase"], ["class", "media-container audio-container", 4, "ngSwitchCase"], ["class", "media-container document-container", 4, "ngSwitchCase"], ["class", "media-error", 4, "ngSwitchDefault"], ["class", "media-loading", 4, "ngIf"], [1, "media-container", "image-container", 3, "click"], [1, "media-image", 3, "load", "error", "src", "alt"], ["mat-icon-button", "", 1, "zoom-button", 3, "click"], [1, "media-container", "video-container"], ["controls", "", "controlsList", "nodownload", 1, "media-video", 3, "loadstart", "error", "src"], ["class", "media-info", 4, "ngIf"], [1, "media-info"], [1, "media-container", "audio-container"], ["controls", "", "controlsList", "nodownload", 1, "media-audio", 3, "loadstart", "error", "src"], [1, "media-container", "document-container"], [1, "document-preview"], [1, "document-icon"], [1, "document-details"], [1, "document-name"], [1, "document-size"], ["target", "_blank", 1, "download-link", 3, "href", "download"], ["mat-raised-button", "", "color", "primary"], [1, "media-error"], [1, "media-loading"], ["diameter", "40"], [1, "lightbox", 3, "click"], [1, "lightbox-content", 3, "click"], ["mat-icon-button", "", 1, "lightbox-close", 3, "click"], [1, "lightbox-image", 3, "src", "alt"], [1, "lightbox-info"], ["target", "_blank", 3, "href", "download"], ["mat-icon-button", ""]], template: function MediaViewerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, MediaViewerComponent_div_0_Template, 7, 6, "div", 0)(1, MediaViewerComponent_div_1_Template, 13, 5, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.mediaUrl);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showLightbox);
        } }, dependencies: [CommonModule, i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, MatIconModule, i2.MatIcon, MatButtonModule, i3.MatButton, i3.MatIconButton, MatProgressSpinnerModule, i4.MatProgressSpinner], styles: [".media-viewer[_ngcontent-%COMP%] {\n      width: 100%;\n      position: relative;\n    }\n\n    .media-container[_ngcontent-%COMP%] {\n      position: relative;\n      width: 100%;\n      background: #f5f5f5;\n      border-radius: 8px;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 200px;\n\n      &.image-container {\n        aspect-ratio: 16 / 9;\n        cursor: zoom-in;\n        background: #000;\n      }\n\n      &.video-container {\n        aspect-ratio: 16 / 9;\n        flex-direction: column;\n        background: #000;\n      }\n\n      &.audio-container {\n        min-height: auto;\n        padding: 16px;\n      }\n\n      &.document-container {\n        min-height: 120px;\n      }\n    }\n\n    .media-image[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n      max-width: 100%;\n      max-height: 100%;\n    }\n\n    .media-video[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      max-width: 100%;\n      max-height: 100%;\n    }\n\n    .media-audio[_ngcontent-%COMP%] {\n      width: 100%;\n      max-width: 500px;\n    }\n\n    .zoom-button[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      background: rgba(255, 255, 255, 0.9);\n      color: #333;\n      transition: all 0.3s ease;\n\n      &:hover {\n        background: #fff;\n        color: #ff6900;\n      }\n    }\n\n    .media-info[_ngcontent-%COMP%] {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: rgba(0, 0, 0, 0.6);\n      color: white;\n      padding: 8px 12px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 12px;\n      animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n\n      mat-icon {\n        font-size: 16px;\n        width: 16px;\n        height: 16px;\n      }\n\n      span {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n    }\n\n    .document-preview[_ngcontent-%COMP%] {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: 16px;\n      padding: 16px;\n    }\n\n    .document-icon[_ngcontent-%COMP%] {\n      font-size: 48px;\n      width: 48px;\n      height: 48px;\n      color: #ff6900;\n      flex-shrink: 0;\n    }\n\n    .document-details[_ngcontent-%COMP%] {\n      flex: 1;\n    }\n\n    .document-name[_ngcontent-%COMP%] {\n      margin: 0;\n      font-weight: 600;\n      color: #333;\n      word-break: break-all;\n    }\n\n    .document-size[_ngcontent-%COMP%] {\n      margin: 4px 0;\n      color: #999;\n      font-size: 12px;\n    }\n\n    .download-link[_ngcontent-%COMP%] {\n      text-decoration: none;\n      display: inline-block;\n\n      button {\n        margin-top: 8px;\n      }\n    }\n\n    .media-error[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-height: 200px;\n      color: #999;\n\n      mat-icon {\n        font-size: 48px;\n        width: 48px;\n        height: 48px;\n        margin-bottom: 12px;\n      }\n    }\n\n    .media-loading[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    \n\n    .lightbox[_ngcontent-%COMP%] {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: rgba(0, 0, 0, 0.95);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 1000;\n      animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n    }\n\n    .lightbox-content[_ngcontent-%COMP%] {\n      position: relative;\n      max-width: 90vw;\n      max-height: 90vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .lightbox-close[_ngcontent-%COMP%] {\n      position: absolute;\n      top: -40px;\n      right: 0;\n      color: white;\n      z-index: 1001;\n\n      &:hover {\n        color: #ff6900;\n      }\n    }\n\n    .lightbox-image[_ngcontent-%COMP%] {\n      max-width: 100%;\n      max-height: 85vh;\n      object-fit: contain;\n      animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n    }\n\n    .lightbox-info[_ngcontent-%COMP%] {\n      margin-top: 16px;\n      color: white;\n      text-align: center;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n\n      p {\n        margin: 0;\n        font-size: 14px;\n        max-width: 400px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      button {\n        color: white;\n\n        &:hover {\n          color: #ff6900;\n        }\n      }\n    }\n\n    @keyframes _ngcontent-%COMP%_fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    @keyframes _ngcontent-%COMP%_slideUp {\n      from {\n        transform: translateY(20px);\n        opacity: 0;\n      }\n      to {\n        transform: translateY(0);\n        opacity: 1;\n      }\n    }\n\n    @media (max-width: 768px) {\n      .media-container[_ngcontent-%COMP%] {\n        min-height: 150px;\n\n        &.image-container {\n          aspect-ratio: 1 / 1;\n        }\n\n        &.video-container {\n          aspect-ratio: 1 / 1;\n        }\n      }\n\n      .document-preview[_ngcontent-%COMP%] {\n        flex-direction: column;\n        text-align: center;\n      }\n\n      .lightbox-content[_ngcontent-%COMP%] {\n        max-width: 95vw;\n        max-height: 95vh;\n      }\n\n      .lightbox-image[_ngcontent-%COMP%] {\n        max-height: 80vh;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MediaViewerComponent, [{
        type: Component,
        args: [{ selector: 'app-media-viewer', standalone: true, imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule], template: `
    <div *ngIf="mediaUrl" class="media-viewer" [ngSwitch]="mediaType">
      <!-- IMAGE -->
      <div *ngSwitchCase="'IMAGE'" class="media-container image-container" (click)="openLightbox()">
        <img
          [src]="mediaUrl"
          [alt]="fileName"
          class="media-image"
          (load)="onMediaLoad()"
          (error)="onMediaError()"
        />
        <button mat-icon-button class="zoom-button" (click)="openLightbox(); $event.stopPropagation()">
          <mat-icon>zoom_in</mat-icon>
        </button>
      </div>

      <!-- VIDEO -->
      <div *ngSwitchCase="'VIDEO'" class="media-container video-container">
        <video
          [src]="mediaUrl"
          class="media-video"
          controls
          controlsList="nodownload"
          (loadstart)="onMediaLoad()"
          (error)="onMediaError()"
        ></video>
        <div *ngIf="fileName" class="media-info">
          <mat-icon>videocam</mat-icon>
          <span>{{ fileName }}</span>
        </div>
      </div>

      <!-- AUDIO -->
      <div *ngSwitchCase="'AUDIO'" class="media-container audio-container">
        <audio
          [src]="mediaUrl"
          class="media-audio"
          controls
          controlsList="nodownload"
          (loadstart)="onMediaLoad()"
          (error)="onMediaError()"
        ></audio>
        <div *ngIf="fileName" class="media-info">
          <mat-icon>music_note</mat-icon>
          <span>{{ fileName }}</span>
        </div>
      </div>

      <!-- DOCUMENT -->
      <div *ngSwitchCase="'DOCUMENT'" class="media-container document-container">
        <div class="document-preview">
          <mat-icon class="document-icon">description</mat-icon>
          <div class="document-details">
            <p class="document-name">{{ fileName }}</p>
            <p class="document-size">{{ formatFileSize(fileSize) }}</p>
            <a [href]="mediaUrl" [download]="fileName" class="download-link" target="_blank">
              <button mat-raised-button color="primary">
                <mat-icon>download</mat-icon>
                Télécharger
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- ERROR STATE -->
      <div *ngSwitchDefault class="media-error">
        <mat-icon>error_outline</mat-icon>
        <p>Impossible de charger le média</p>
      </div>

      <!-- LOADING -->
      <div *ngIf="isLoading" class="media-loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
    </div>

    <!-- LIGHTBOX MODAL -->
    <div *ngIf="showLightbox" class="lightbox" (click)="closeLightbox()">
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <button mat-icon-button class="lightbox-close" (click)="closeLightbox()">
          <mat-icon>close</mat-icon>
        </button>
        <img [src]="mediaUrl" [alt]="fileName" class="lightbox-image" />
        <div class="lightbox-info">
          <p>{{ fileName }}</p>
          <a [href]="mediaUrl" [download]="fileName" target="_blank">
            <button mat-icon-button>
              <mat-icon>download</mat-icon>
            </button>
          </a>
        </div>
      </div>
    </div>
  `, styles: ["\n    .media-viewer {\n      width: 100%;\n      position: relative;\n    }\n\n    .media-container {\n      position: relative;\n      width: 100%;\n      background: #f5f5f5;\n      border-radius: 8px;\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      min-height: 200px;\n\n      &.image-container {\n        aspect-ratio: 16 / 9;\n        cursor: zoom-in;\n        background: #000;\n      }\n\n      &.video-container {\n        aspect-ratio: 16 / 9;\n        flex-direction: column;\n        background: #000;\n      }\n\n      &.audio-container {\n        min-height: auto;\n        padding: 16px;\n      }\n\n      &.document-container {\n        min-height: 120px;\n      }\n    }\n\n    .media-image {\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n      max-width: 100%;\n      max-height: 100%;\n    }\n\n    .media-video {\n      width: 100%;\n      height: 100%;\n      max-width: 100%;\n      max-height: 100%;\n    }\n\n    .media-audio {\n      width: 100%;\n      max-width: 500px;\n    }\n\n    .zoom-button {\n      position: absolute;\n      top: 12px;\n      right: 12px;\n      background: rgba(255, 255, 255, 0.9);\n      color: #333;\n      transition: all 0.3s ease;\n\n      &:hover {\n        background: #fff;\n        color: #ff6900;\n      }\n    }\n\n    .media-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      background: rgba(0, 0, 0, 0.6);\n      color: white;\n      padding: 8px 12px;\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      font-size: 12px;\n      animation: slideUp 0.3s ease;\n\n      mat-icon {\n        font-size: 16px;\n        width: 16px;\n        height: 16px;\n      }\n\n      span {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n    }\n\n    .document-preview {\n      width: 100%;\n      display: flex;\n      align-items: center;\n      gap: 16px;\n      padding: 16px;\n    }\n\n    .document-icon {\n      font-size: 48px;\n      width: 48px;\n      height: 48px;\n      color: #ff6900;\n      flex-shrink: 0;\n    }\n\n    .document-details {\n      flex: 1;\n    }\n\n    .document-name {\n      margin: 0;\n      font-weight: 600;\n      color: #333;\n      word-break: break-all;\n    }\n\n    .document-size {\n      margin: 4px 0;\n      color: #999;\n      font-size: 12px;\n    }\n\n    .download-link {\n      text-decoration: none;\n      display: inline-block;\n\n      button {\n        margin-top: 8px;\n      }\n    }\n\n    .media-error {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-height: 200px;\n      color: #999;\n\n      mat-icon {\n        font-size: 48px;\n        width: 48px;\n        height: 48px;\n        margin-bottom: 12px;\n      }\n    }\n\n    .media-loading {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    /* LIGHTBOX */\n    .lightbox {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background: rgba(0, 0, 0, 0.95);\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      z-index: 1000;\n      animation: fadeIn 0.3s ease;\n    }\n\n    .lightbox-content {\n      position: relative;\n      max-width: 90vw;\n      max-height: 90vh;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .lightbox-close {\n      position: absolute;\n      top: -40px;\n      right: 0;\n      color: white;\n      z-index: 1001;\n\n      &:hover {\n        color: #ff6900;\n      }\n    }\n\n    .lightbox-image {\n      max-width: 100%;\n      max-height: 85vh;\n      object-fit: contain;\n      animation: slideUp 0.3s ease;\n    }\n\n    .lightbox-info {\n      margin-top: 16px;\n      color: white;\n      text-align: center;\n      display: flex;\n      align-items: center;\n      gap: 12px;\n\n      p {\n        margin: 0;\n        font-size: 14px;\n        max-width: 400px;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      button {\n        color: white;\n\n        &:hover {\n          color: #ff6900;\n        }\n      }\n    }\n\n    @keyframes fadeIn {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    @keyframes slideUp {\n      from {\n        transform: translateY(20px);\n        opacity: 0;\n      }\n      to {\n        transform: translateY(0);\n        opacity: 1;\n      }\n    }\n\n    @media (max-width: 768px) {\n      .media-container {\n        min-height: 150px;\n\n        &.image-container {\n          aspect-ratio: 1 / 1;\n        }\n\n        &.video-container {\n          aspect-ratio: 1 / 1;\n        }\n      }\n\n      .document-preview {\n        flex-direction: column;\n        text-align: center;\n      }\n\n      .lightbox-content {\n        max-width: 95vw;\n        max-height: 95vh;\n      }\n\n      .lightbox-image {\n        max-height: 80vh;\n      }\n    }\n  "] }]
    }], null, { fileName: [{
            type: Input
        }], attachmentFileUrl: [{
            type: Input
        }], attachmentFileType: [{
            type: Input
        }], attachmentFileSize: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MediaViewerComponent, { className: "MediaViewerComponent", filePath: "app\\shared\\components\\media-viewer\\media-viewer.component.ts", lineNumber: 393 }); })();
//# sourceMappingURL=media-viewer.component.js.map