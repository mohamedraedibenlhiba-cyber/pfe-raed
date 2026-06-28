import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/button";
function AttachmentUploaderComponent_div_11_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 17);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.selectedFile.url, i0.ɵɵsanitizeUrl);
} }
function AttachmentUploaderComponent_div_11_video_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "video", 18);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.selectedFile.url, i0.ɵɵsanitizeUrl);
} }
function AttachmentUploaderComponent_div_11_audio_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "audio", 19);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r3.selectedFile.url, i0.ɵɵsanitizeUrl);
} }
function AttachmentUploaderComponent_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "mat-icon");
    i0.ɵɵtext(2, "description");
    i0.ɵɵelementEnd()();
} }
function AttachmentUploaderComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵtemplate(2, AttachmentUploaderComponent_div_11_img_2_Template, 1, 1, "img", 9)(3, AttachmentUploaderComponent_div_11_video_3_Template, 1, 1, "video", 10)(4, AttachmentUploaderComponent_div_11_audio_4_Template, 1, 1, "audio", 11)(5, AttachmentUploaderComponent_div_11_div_5_Template, 3, 0, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 13)(7, "p", 14);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p", 15);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 16);
    i0.ɵɵlistener("click", function AttachmentUploaderComponent_div_11_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r3); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.clearFile()); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "close");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFile.type === "image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFile.type === "video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFile.type === "audio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.selectedFile.type === "document");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.selectedFile.file.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r3.formatFileSize(ctx_r3.selectedFile.file.size));
} }
export class AttachmentUploaderComponent {
    constructor() {
        this.maxSizeMb = 50;
        this.acceptTypes = 'all';
        this.fileSelected = new EventEmitter();
        this.selectedFile = null;
        this.isDragging = false;
        this.fileTypesConfig = {
            all: {
                accept: 'image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt',
                label: 'Images, Vidéos, Audio, Documents'
            },
            media: {
                accept: 'image/*,video/*,audio/*',
                label: 'Images, Vidéos, Audio'
            },
            images: {
                accept: 'image/*',
                label: 'Images'
            }
        };
    }
    get allowedFileTypes() {
        return this.fileTypesConfig[this.acceptTypes].accept;
    }
    get fileTypesLabel() {
        return this.fileTypesConfig[this.acceptTypes].label;
    }
    onFileSelected(event) {
        const input = event.target;
        const files = input.files;
        if (files && files.length > 0) {
            this.processFile(files[0]);
        }
    }
    onDragOver(event) {
        event.preventDefault();
        this.isDragging = true;
    }
    onDragLeave(event) {
        event.preventDefault();
        this.isDragging = false;
    }
    onDrop(event) {
        event.preventDefault();
        this.isDragging = false;
        const files = event.dataTransfer?.files;
        if (files && files.length > 0) {
            this.processFile(files[0]);
        }
    }
    processFile(file) {
        const fileSizeInMb = file.size / (1024 * 1024);
        if (fileSizeInMb > this.maxSizeMb) {
            alert(`Fichier trop volumineux. Max ${this.maxSizeMb}MB`);
            return;
        }
        const type = this.getFileType(file);
        const url = this.getPreviewUrl(file, type);
        this.selectedFile = {
            file,
            url,
            type
        };
        this.fileSelected.emit(this.selectedFile);
    }
    getFileType(file) {
        if (file.type.startsWith('image/'))
            return 'image';
        if (file.type.startsWith('video/'))
            return 'video';
        if (file.type.startsWith('audio/'))
            return 'audio';
        return 'document';
    }
    getPreviewUrl(file, type) {
        if (type === 'image' || type === 'video' || type === 'audio') {
            return URL.createObjectURL(file);
        }
        return null;
    }
    formatFileSize(bytes) {
        if (bytes === 0)
            return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    }
    clearFile() {
        if (this.selectedFile?.url) {
            URL.revokeObjectURL(this.selectedFile.url);
        }
        this.selectedFile = null;
    }
    static { this.ɵfac = function AttachmentUploaderComponent_Factory(t) { return new (t || AttachmentUploaderComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttachmentUploaderComponent, selectors: [["app-attachment-uploader"]], inputs: { maxSizeMb: "maxSizeMb", acceptTypes: "acceptTypes" }, outputs: { fileSelected: "fileSelected" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 12, vars: 6, consts: [["fileInput", ""], [1, "attachment-uploader", 3, "dragover", "drop", "dragleave"], ["type", "file", "hidden", "", 3, "change", "accept"], [1, "upload-zone"], ["mat-icon-button", "", 1, "upload-button", 3, "click"], [1, "upload-text"], ["class", "preview-section", 4, "ngIf"], [1, "preview-section"], [1, "preview-container"], ["alt", "Preview", "class", "preview-image", 3, "src", 4, "ngIf"], ["class", "preview-video", "controls", "", 3, "src", 4, "ngIf"], ["class", "preview-audio", "controls", "", 3, "src", 4, "ngIf"], ["class", "preview-document", 4, "ngIf"], [1, "preview-info"], [1, "file-name"], [1, "file-size"], ["mat-icon-button", "", 1, "clear-button", 3, "click"], ["alt", "Preview", 1, "preview-image", 3, "src"], ["controls", "", 1, "preview-video", 3, "src"], ["controls", "", 1, "preview-audio", 3, "src"], [1, "preview-document"]], template: function AttachmentUploaderComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1);
            i0.ɵɵlistener("dragover", function AttachmentUploaderComponent_Template_div_dragover_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragOver($event)); })("drop", function AttachmentUploaderComponent_Template_div_drop_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDrop($event)); })("dragleave", function AttachmentUploaderComponent_Template_div_dragleave_0_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onDragLeave($event)); });
            i0.ɵɵelementStart(1, "input", 2, 0);
            i0.ɵɵlistener("change", function AttachmentUploaderComponent_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.onFileSelected($event)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 3)(4, "button", 4);
            i0.ɵɵlistener("click", function AttachmentUploaderComponent_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const fileInput_r2 = i0.ɵɵreference(2); return i0.ɵɵresetView(fileInput_r2.click()); });
            i0.ɵɵelementStart(5, "mat-icon");
            i0.ɵɵtext(6, "cloud_upload");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, "Cliquez ou glissez un fichier");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "small");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(11, AttachmentUploaderComponent_div_11_Template, 14, 6, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("accept", ctx.allowedFileTypes);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("dragging", ctx.isDragging);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate2("Max ", ctx.maxSizeMb, "MB - ", ctx.fileTypesLabel, "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.selectedFile);
        } }, dependencies: [CommonModule, i1.NgIf, MatIconModule, i2.MatIcon, MatButtonModule, i3.MatIconButton], styles: [".attachment-uploader[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .upload-zone[_ngcontent-%COMP%] {\n      border: 2px dashed #ccc;\n      border-radius: 8px;\n      padding: 24px;\n      text-align: center;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      background-color: #fafafa;\n\n      &:hover {\n        border-color: #ff6900;\n        background-color: #fff8f0;\n      }\n\n      &.dragging {\n        border-color: #ff6900;\n        background-color: #fff0e6;\n        box-shadow: 0 0 12px rgba(255, 105, 0, 0.2);\n      }\n    }\n\n    .upload-button[_ngcontent-%COMP%] {\n      color: #ff6900;\n      font-size: 32px;\n      width: 48px;\n      height: 48px;\n    }\n\n    .upload-text[_ngcontent-%COMP%] {\n      margin: 12px 0 4px 0;\n      font-weight: 500;\n      color: #333;\n    }\n\n    small[_ngcontent-%COMP%] {\n      color: #999;\n      display: block;\n    }\n\n    .preview-section[_ngcontent-%COMP%] {\n      margin-top: 16px;\n      padding: 12px;\n      background: #f5f5f5;\n      border-radius: 8px;\n      display: flex;\n      gap: 12px;\n      align-items: flex-start;\n    }\n\n    .preview-container[_ngcontent-%COMP%] {\n      flex-shrink: 0;\n      width: 80px;\n      height: 80px;\n      border-radius: 6px;\n      overflow: hidden;\n      background: white;\n      border: 1px solid #ddd;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .preview-image[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .preview-video[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .preview-audio[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .preview-document[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #ff6900;\n      font-size: 32px;\n    }\n\n    .preview-info[_ngcontent-%COMP%] {\n      flex: 1;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .file-name[_ngcontent-%COMP%] {\n      margin: 0;\n      font-weight: 500;\n      color: #333;\n      word-break: break-all;\n      flex: 1;\n    }\n\n    .file-size[_ngcontent-%COMP%] {\n      margin: 4px 0 0 0;\n      color: #999;\n      font-size: 12px;\n    }\n\n    .clear-button[_ngcontent-%COMP%] {\n      color: #999;\n      flex-shrink: 0;\n\n      &:hover {\n        color: #ff6900;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttachmentUploaderComponent, [{
        type: Component,
        args: [{ selector: 'app-attachment-uploader', standalone: true, imports: [CommonModule, MatIconModule, MatButtonModule], template: `
    <div class="attachment-uploader" (dragover)="onDragOver($event)" (drop)="onDrop($event)" (dragleave)="onDragLeave($event)">
      <input
        #fileInput
        type="file"
        hidden
        [accept]="allowedFileTypes"
        (change)="onFileSelected($event)"
      />

      <div class="upload-zone" [class.dragging]="isDragging">
        <button
          mat-icon-button
          (click)="fileInput.click()"
          class="upload-button"
        >
          <mat-icon>cloud_upload</mat-icon>
        </button>
        <p class="upload-text">Cliquez ou glissez un fichier</p>
        <small>Max {{ maxSizeMb }}MB - {{ fileTypesLabel }}</small>
      </div>

      <div *ngIf="selectedFile" class="preview-section">
        <div class="preview-container">
          <img
            *ngIf="selectedFile.type === 'image'"
            [src]="selectedFile.url"
            alt="Preview"
            class="preview-image"
          />
          <video
            *ngIf="selectedFile.type === 'video'"
            [src]="selectedFile.url"
            class="preview-video"
            controls
          ></video>
          <audio
            *ngIf="selectedFile.type === 'audio'"
            [src]="selectedFile.url"
            class="preview-audio"
            controls
          ></audio>
          <div *ngIf="selectedFile.type === 'document'" class="preview-document">
            <mat-icon>description</mat-icon>
          </div>
        </div>
        <div class="preview-info">
          <p class="file-name">{{ selectedFile.file.name }}</p>
          <p class="file-size">{{ formatFileSize(selectedFile.file.size) }}</p>
          <button
            mat-icon-button
            (click)="clearFile()"
            class="clear-button"
          >
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["\n    .attachment-uploader {\n      width: 100%;\n    }\n\n    .upload-zone {\n      border: 2px dashed #ccc;\n      border-radius: 8px;\n      padding: 24px;\n      text-align: center;\n      cursor: pointer;\n      transition: all 0.3s ease;\n      background-color: #fafafa;\n\n      &:hover {\n        border-color: #ff6900;\n        background-color: #fff8f0;\n      }\n\n      &.dragging {\n        border-color: #ff6900;\n        background-color: #fff0e6;\n        box-shadow: 0 0 12px rgba(255, 105, 0, 0.2);\n      }\n    }\n\n    .upload-button {\n      color: #ff6900;\n      font-size: 32px;\n      width: 48px;\n      height: 48px;\n    }\n\n    .upload-text {\n      margin: 12px 0 4px 0;\n      font-weight: 500;\n      color: #333;\n    }\n\n    small {\n      color: #999;\n      display: block;\n    }\n\n    .preview-section {\n      margin-top: 16px;\n      padding: 12px;\n      background: #f5f5f5;\n      border-radius: 8px;\n      display: flex;\n      gap: 12px;\n      align-items: flex-start;\n    }\n\n    .preview-container {\n      flex-shrink: 0;\n      width: 80px;\n      height: 80px;\n      border-radius: 6px;\n      overflow: hidden;\n      background: white;\n      border: 1px solid #ddd;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .preview-image {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .preview-video {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n\n    .preview-audio {\n      width: 100%;\n    }\n\n    .preview-document {\n      width: 100%;\n      height: 100%;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: #ff6900;\n      font-size: 32px;\n    }\n\n    .preview-info {\n      flex: 1;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      gap: 8px;\n    }\n\n    .file-name {\n      margin: 0;\n      font-weight: 500;\n      color: #333;\n      word-break: break-all;\n      flex: 1;\n    }\n\n    .file-size {\n      margin: 4px 0 0 0;\n      color: #999;\n      font-size: 12px;\n    }\n\n    .clear-button {\n      color: #999;\n      flex-shrink: 0;\n\n      &:hover {\n        color: #ff6900;\n      }\n    }\n  "] }]
    }], null, { maxSizeMb: [{
            type: Input
        }], acceptTypes: [{
            type: Input
        }], fileSelected: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AttachmentUploaderComponent, { className: "AttachmentUploaderComponent", filePath: "app\\shared\\components\\attachment-uploader\\attachment-uploader.component.ts", lineNumber: 201 }); })();
//# sourceMappingURL=attachment-uploader.component.js.map