import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AlertService } from '../../../core/services/alert.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CvService } from '../../../core/services/cv.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/progress-spinner";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
const _forTrack0 = ($index, $item) => $item.id;
function MyCvsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner", 9);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Upload en cours...");
    i0.ɵɵelementEnd();
} }
function MyCvsComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1, "upload_file");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Ajouter un CV");
    i0.ɵɵelementEnd();
} }
function MyCvsComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "mat-spinner", 10);
    i0.ɵɵelementEnd();
} }
function MyCvsComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11)(1, "span", 12);
    i0.ɵɵtext(2, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 13);
    i0.ɵɵtext(4, "Aucun CV ajout\u00E9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 14);
    i0.ɵɵtext(6, "Importez votre premier CV pour commencer \u00E0 postuler");
    i0.ɵɵelementEnd()();
} }
function MyCvsComponent_Conditional_17_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18)(1, "span", 6);
    i0.ɵɵtext(2, "star");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, "Par d\u00E9faut ");
    i0.ɵɵelementEnd();
} }
function MyCvsComponent_Conditional_17_For_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 27);
    i0.ɵɵlistener("click", function MyCvsComponent_Conditional_17_For_2_Conditional_16_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const cv_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.setDefault(cv_r2)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "star_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " D\u00E9finir par d\u00E9faut ");
    i0.ɵɵelementEnd();
} }
function MyCvsComponent_Conditional_17_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, MyCvsComponent_Conditional_17_For_2_Conditional_1_Template, 4, 0, "div", 18);
    i0.ɵɵelementStart(2, "div", 19)(3, "span", 20);
    i0.ɵɵtext(4, "description");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 21)(6, "h4");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 22);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 23)(12, "button", 24);
    i0.ɵɵlistener("click", function MyCvsComponent_Conditional_17_For_2_Template_button_click_12_listener() { const cv_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.viewCV(cv_r2)); });
    i0.ɵɵelementStart(13, "mat-icon");
    i0.ɵɵtext(14, "visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " Voir ");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(16, MyCvsComponent_Conditional_17_For_2_Conditional_16_Template, 4, 0, "button", 25);
    i0.ɵɵelementStart(17, "button", 26);
    i0.ɵɵlistener("click", function MyCvsComponent_Conditional_17_For_2_Template_button_click_17_listener() { const cv_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.delete(cv_r2)); });
    i0.ɵɵelementStart(18, "mat-icon");
    i0.ɵɵtext(19, "delete_outline");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const cv_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("default", cv_r2.defaultCv);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, cv_r2.defaultCv ? 1 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(cv_r2.fileName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r2.fileSize(cv_r2.fileSize), " \u2022 Import\u00E9 le ", i0.ɵɵpipeBind2(10, 7, cv_r2.uploadedAt, "dd/MM/yyyy"), "");
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(16, !cv_r2.defaultCv ? 16 : -1);
} }
function MyCvsComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, MyCvsComponent_Conditional_17_For_2_Template, 20, 10, "div", 16, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.cvs);
} }
function MyCvsComponent_Conditional_18_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵelement(1, "mat-spinner", 34);
    i0.ɵɵelementEnd();
} }
function MyCvsComponent_Conditional_18_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 35);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r2.viewerUrl, i0.ɵɵsanitizeResourceUrl);
} }
function MyCvsComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function MyCvsComponent_Conditional_18_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeViewer()); });
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵlistener("click", function MyCvsComponent_Conditional_18_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r5); return i0.ɵɵresetView($event.stopPropagation()); });
    i0.ɵɵelementStart(2, "div", 30)(3, "span", 31)(4, "span", 6);
    i0.ɵɵtext(5, "description");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 32);
    i0.ɵɵlistener("click", function MyCvsComponent_Conditional_18_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeViewer()); });
    i0.ɵɵelementStart(8, "mat-icon");
    i0.ɵɵtext(9, "close");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(10, MyCvsComponent_Conditional_18_Conditional_10_Template, 2, 0, "div", 33)(11, MyCvsComponent_Conditional_18_Conditional_11_Template, 1, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.viewerName, " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(10, ctx_r2.viewerLoading ? 10 : 11);
} }
export class MyCvsComponent {
    constructor() {
        this.cvSvc = inject(CvService);
        this.alertSvc = inject(AlertService);
        this.sanitizer = inject(DomSanitizer);
        this.loading = true;
        this.uploading = false;
        this.cvs = [];
        this.viewerUrl = null;
        this.viewerName = '';
        this.viewerLoading = false;
        this.viewerObjectUrl = null;
    }
    ngOnInit() { this.load(); }
    load() {
        this.cvSvc.getMyCvs().subscribe({
            next: res => { this.cvs = res.data; this.loading = false; },
            error: () => { this.loading = false; }
        });
    }
    onFileSelect(event) {
        const file = event.target.files?.[0];
        if (!file)
            return;
        if (!['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
            this.alertSvc.error('Seuls les fichiers PDF et Word sont acceptés');
            return;
        }
        this.uploading = true;
        this.cvSvc.upload(file).subscribe({
            next: res => { this.cvs.unshift(res.data); this.uploading = false; this.alertSvc.success('CV uploadé avec succès'); },
            error: err => { this.uploading = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur upload'); }
        });
    }
    setDefault(cv) {
        this.cvSvc.setDefault(cv.id).subscribe({
            next: () => { this.cvs.forEach(c => c.defaultCv = c.id === cv.id); this.alertSvc.success('CV défini comme CV par défaut'); },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    delete(cv) {
        if (!confirm('Supprimer ce CV ?'))
            return;
        this.cvSvc.delete(cv.id).subscribe({
            next: () => {
                if (this.viewerObjectUrl) {
                    this.closeViewer();
                }
                this.cvs = this.cvs.filter(c => c.id !== cv.id);
                this.alertSvc.success('CV supprimé');
            },
            error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur')
        });
    }
    viewCV(cv) {
        this.viewerLoading = true;
        this.viewerName = cv.fileName;
        this.viewerUrl = null;
        this.cvSvc.getContent(cv.id).subscribe({
            next: blob => {
                if (this.viewerObjectUrl) {
                    URL.revokeObjectURL(this.viewerObjectUrl);
                }
                this.viewerObjectUrl = URL.createObjectURL(blob);
                this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewerObjectUrl);
                this.viewerLoading = false;
            },
            error: () => {
                this.viewerLoading = false;
                this.alertSvc.error('Impossible de charger le CV');
            }
        });
    }
    closeViewer() {
        this.viewerUrl = null;
        this.viewerName = '';
        if (this.viewerObjectUrl) {
            URL.revokeObjectURL(this.viewerObjectUrl);
            this.viewerObjectUrl = null;
        }
    }
    fileSize(bytes) {
        if (bytes < 1024)
            return bytes + ' B';
        if (bytes < 1048576)
            return (bytes / 1024).toFixed(1) + ' Ko';
        return (bytes / 1048576).toFixed(1) + ' Mo';
    }
    static { this.ɵfac = function MyCvsComponent_Factory(t) { return new (t || MyCvsComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyCvsComponent, selectors: [["app-my-cvs"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 19, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "upload-btn"], ["type", "file", "accept", ".pdf,.docx", "hidden", "", 3, "change", "disabled"], [1, "info-banner"], [1, "material-icons-round"], [1, "loading-center"], [1, "cv-viewer-overlay"], ["diameter", "20"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "cvs-grid"], [1, "cv-card", "card", 3, "default"], [1, "cv-card", "card"], [1, "default-badge"], [1, "cv-icon-wrap"], [1, "material-icons-round", "cv-icon"], [1, "cv-details"], [1, "cv-meta"], [1, "cv-actions"], ["mat-button", "", "matTooltip", "Visualiser le CV", 1, "btn-view", 3, "click"], ["mat-button", "", "matTooltip", "D\u00E9finir comme CV par d\u00E9faut", 1, "btn-default"], ["mat-icon-button", "", "matTooltip", "Supprimer", 1, "btn-delete", 3, "click"], ["mat-button", "", "matTooltip", "D\u00E9finir comme CV par d\u00E9faut", 1, "btn-default", 3, "click"], [1, "cv-viewer-overlay", 3, "click"], [1, "cv-viewer-modal", 3, "click"], [1, "cv-viewer-header"], [1, "cv-viewer-title"], ["mat-icon-button", "", "matTooltip", "Fermer", 3, "click"], [1, "viewer-loading"], ["diameter", "48"], [1, "cv-iframe", 3, "src"]], template: function MyCvsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div")(2, "h1", 1);
            i0.ɵɵtext(3, "Mes CVs");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "label", 3);
            i0.ɵɵtemplate(7, MyCvsComponent_Conditional_7_Template, 3, 0)(8, MyCvsComponent_Conditional_8_Template, 4, 0);
            i0.ɵɵelementStart(9, "input", 4);
            i0.ɵɵlistener("change", function MyCvsComponent_Template_input_change_9_listener($event) { return ctx.onFileSelect($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 5)(11, "span", 6);
            i0.ɵɵtext(12, "info");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "p");
            i0.ɵɵtext(14, "Importez votre CV au format PDF ou Word. L'IA analysera vos comp\u00E9tences pour le matching avec les offres.");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(15, MyCvsComponent_Conditional_15_Template, 2, 0, "div", 7)(16, MyCvsComponent_Conditional_16_Template, 7, 0)(17, MyCvsComponent_Conditional_17_Template, 3, 0)(18, MyCvsComponent_Conditional_18_Template, 12, 2, "div", 8);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", ctx.cvs.length, " CV(s) dans votre profil");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("loading", ctx.uploading);
            i0.ɵɵadvance();
            i0.ɵɵconditional(7, ctx.uploading ? 7 : 8);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.uploading);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(15, ctx.loading ? 15 : !ctx.cvs.length ? 16 : 17);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(18, ctx.viewerUrl || ctx.viewerLoading ? 18 : -1);
        } }, dependencies: [CommonModule, i1.DatePipe, MatProgressSpinnerModule, i2.MatProgressSpinner, MatIconModule, i3.MatIcon, MatButtonModule, i4.MatButton, i4.MatIconButton, MatTooltipModule, i5.MatTooltip], styles: [".page-header[_ngcontent-%COMP%] { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; gap: 16px; }\n\n.upload-btn[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px; cursor: pointer;\n  padding: 10px 20px; background: var(--primary-light); color: #fff;\n  border-radius: 10px; font-size: 0.875rem; font-weight: 600;\n  border: none; transition: all 0.2s ease;\n  .material-icons-round { font-size: 20px; }\n  &:hover { background: var(--primary-dark); box-shadow: 0 4px 12px rgba(79,70,229,0.3); }\n  &.loading { background: #94a3b8; cursor: not-allowed; }\n}\n\n.info-banner[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px;\n  padding: 12px 16px; margin-bottom: 20px;\n  .material-icons-round { color: var(--info); font-size: 18px; flex-shrink: 0; }\n  p { font-size: 0.85rem; color: #1e40af; margin: 0; }\n}\n\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 80px; }\n\n.cvs-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }\n\n.cv-card[_ngcontent-%COMP%] {\n  padding: 20px; display: flex; flex-direction: column; gap: 10px; position: relative;\n  transition: all 0.2s ease;\n  &.default { border-color: #c7d2fe; background: linear-gradient(135deg, #fff, #eef2ff); }\n}\n\n.default-badge[_ngcontent-%COMP%] {\n  position: absolute; top: -1px; right: 12px;\n  background: var(--primary-light); color: #fff;\n  padding: 4px 12px; border-radius: 0 0 8px 8px;\n  font-size: 0.72rem; font-weight: 600;\n  display: flex; align-items: center; gap: 4px;\n  .material-icons-round { font-size: 14px; }\n}\n\n.cv-icon-wrap[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 8px; }\n.cv-icon[_ngcontent-%COMP%] { font-size: 48px!important; color: var(--primary-light); }\n\n.cv-details[_ngcontent-%COMP%] { text-align: center; h4 { font-size: 0.9rem; font-weight: 600; margin: 0 0 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } }\n.cv-meta[_ngcontent-%COMP%] { font-size: 0.75rem; color: var(--text-muted); margin: 0 0 6px; }\n.analyzed-chip[_ngcontent-%COMP%] { font-size: 0.72rem!important; padding: 2px 8px !important; }\n\n.cv-skills[_ngcontent-%COMP%] { font-size: 0.78rem; color: var(--text-secondary); background: #f8fafc; border-radius: 6px; padding: 8px; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\n.cv-actions[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }\n.btn-view[_ngcontent-%COMP%]    { color: #0ea5e9!important; font-size: 0.8rem!important; }\n.btn-default[_ngcontent-%COMP%] { color: var(--primary-light)!important; font-size: 0.8rem!important; }\n.btn-delete[_ngcontent-%COMP%]  { color: var(--danger)!important; }\n\n//[_ngcontent-%COMP%]   \u2500\u2500[_ngcontent-%COMP%]   CV[_ngcontent-%COMP%]   Viewer[_ngcontent-%COMP%]   Overlay[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cv-viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.6);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 1000;\n}\n\n.cv-viewer-modal[_ngcontent-%COMP%] {\n  background: #fff; border-radius: 16px;\n  width: 90vw; max-width: 900px; height: 88vh;\n  display: flex; flex-direction: column;\n  box-shadow: 0 24px 64px rgba(0,0,0,0.3);\n  overflow: hidden;\n}\n\n.cv-viewer-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 12px 16px; border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc; flex-shrink: 0;\n}\n\n.cv-viewer-title[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  font-weight: 600; font-size: 0.9rem; color: #334155;\n  .material-icons-round { font-size: 20px; color: var(--primary-light); }\n}\n\n.cv-iframe[_ngcontent-%COMP%] { flex: 1; width: 100%; border: none; }\n\n.viewer-loading[_ngcontent-%COMP%] {\n  flex: 1; display: flex; align-items: center; justify-content: center;\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyCvsComponent, [{
        type: Component,
        args: [{ selector: 'app-my-cvs', standalone: true, imports: [CommonModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule, MatTooltipModule], template: "<div class=\"page-header\">\n  <div>\n    <h1 class=\"page-title\">Mes CVs</h1>\n    <p class=\"page-subtitle\">{{ cvs.length }} CV(s) dans votre profil</p>\n  </div>\n  <label class=\"upload-btn\" [class.loading]=\"uploading\">\n    @if (uploading) {\n      <mat-spinner diameter=\"20\" />\n      <span>Upload en cours...</span>\n    } @else {\n      <span class=\"material-icons-round\">upload_file</span>\n      <span>Ajouter un CV</span>\n    }\n    <input type=\"file\" accept=\".pdf,.docx\" (change)=\"onFileSelect($event)\" hidden [disabled]=\"uploading\" />\n  </label>\n</div>\n\n<div class=\"info-banner\">\n  <span class=\"material-icons-round\">info</span>\n  <p>Importez votre CV au format PDF ou Word. L'IA analysera vos comp\u00E9tences pour le matching avec les offres.</p>\n</div>\n\n@if (loading) {\n  <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n} @else if (!cvs.length) {\n  <div class=\"empty-state card\">\n    <span class=\"material-icons-round empty-icon\">description</span>\n    <p class=\"empty-title\">Aucun CV ajout\u00E9</p>\n    <p class=\"empty-desc\">Importez votre premier CV pour commencer \u00E0 postuler</p>\n  </div>\n} @else {\n  <div class=\"cvs-grid\">\n    @for (cv of cvs; track cv.id) {\n      <div class=\"cv-card card\" [class.default]=\"cv.defaultCv\">\n        @if (cv.defaultCv) {\n          <div class=\"default-badge\">\n            <span class=\"material-icons-round\">star</span>Par d\u00E9faut\n          </div>\n        }\n        <div class=\"cv-icon-wrap\">\n          <span class=\"material-icons-round cv-icon\">description</span>\n        </div>\n        <div class=\"cv-details\">\n          <h4>{{ cv.fileName }}</h4>\n          <p class=\"cv-meta\">{{ fileSize(cv.fileSize) }} \u2022 Import\u00E9 le {{ cv.uploadedAt | date:'dd/MM/yyyy' }}</p>\n        </div>\n        <div class=\"cv-actions\">\n          <button mat-button class=\"btn-view\" (click)=\"viewCV(cv)\" matTooltip=\"Visualiser le CV\">\n            <mat-icon>visibility</mat-icon> Voir\n          </button>\n          @if (!cv.defaultCv) {\n            <button mat-button class=\"btn-default\" (click)=\"setDefault(cv)\" matTooltip=\"D\u00E9finir comme CV par d\u00E9faut\">\n              <mat-icon>star_outline</mat-icon> D\u00E9finir par d\u00E9faut\n            </button>\n          }\n          <button mat-icon-button class=\"btn-delete\" (click)=\"delete(cv)\" matTooltip=\"Supprimer\">\n            <mat-icon>delete_outline</mat-icon>\n          </button>\n        </div>\n      </div>\n    }\n  </div>\n}\n\n<!-- CV Viewer Overlay -->\n@if (viewerUrl || viewerLoading) {\n  <div class=\"cv-viewer-overlay\" (click)=\"closeViewer()\">\n    <div class=\"cv-viewer-modal\" (click)=\"$event.stopPropagation()\">\n      <div class=\"cv-viewer-header\">\n        <span class=\"cv-viewer-title\">\n          <span class=\"material-icons-round\">description</span>\n          {{ viewerName }}\n        </span>\n        <button mat-icon-button (click)=\"closeViewer()\" matTooltip=\"Fermer\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </div>\n      @if (viewerLoading) {\n        <div class=\"viewer-loading\"><mat-spinner diameter=\"48\" /></div>\n      } @else {\n        <iframe [src]=\"viewerUrl\" class=\"cv-iframe\"></iframe>\n      }\n    </div>\n  </div>\n}\n", styles: [".page-header { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; gap: 16px; }\n\n.upload-btn {\n  display: flex; align-items: center; gap: 8px; cursor: pointer;\n  padding: 10px 20px; background: var(--primary-light); color: #fff;\n  border-radius: 10px; font-size: 0.875rem; font-weight: 600;\n  border: none; transition: all 0.2s ease;\n  .material-icons-round { font-size: 20px; }\n  &:hover { background: var(--primary-dark); box-shadow: 0 4px 12px rgba(79,70,229,0.3); }\n  &.loading { background: #94a3b8; cursor: not-allowed; }\n}\n\n.info-banner {\n  display: flex; align-items: center; gap: 10px;\n  background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px;\n  padding: 12px 16px; margin-bottom: 20px;\n  .material-icons-round { color: var(--info); font-size: 18px; flex-shrink: 0; }\n  p { font-size: 0.85rem; color: #1e40af; margin: 0; }\n}\n\n.loading-center { display: flex; justify-content: center; padding: 80px; }\n\n.cvs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }\n\n.cv-card {\n  padding: 20px; display: flex; flex-direction: column; gap: 10px; position: relative;\n  transition: all 0.2s ease;\n  &.default { border-color: #c7d2fe; background: linear-gradient(135deg, #fff, #eef2ff); }\n}\n\n.default-badge {\n  position: absolute; top: -1px; right: 12px;\n  background: var(--primary-light); color: #fff;\n  padding: 4px 12px; border-radius: 0 0 8px 8px;\n  font-size: 0.72rem; font-weight: 600;\n  display: flex; align-items: center; gap: 4px;\n  .material-icons-round { font-size: 14px; }\n}\n\n.cv-icon-wrap { display: flex; justify-content: center; padding: 8px; }\n.cv-icon { font-size: 48px!important; color: var(--primary-light); }\n\n.cv-details { text-align: center; h4 { font-size: 0.9rem; font-weight: 600; margin: 0 0 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; } }\n.cv-meta { font-size: 0.75rem; color: var(--text-muted); margin: 0 0 6px; }\n.analyzed-chip { font-size: 0.72rem!important; padding: 2px 8px !important; }\n\n.cv-skills { font-size: 0.78rem; color: var(--text-secondary); background: #f8fafc; border-radius: 6px; padding: 8px; margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n\n.cv-actions { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }\n.btn-view    { color: #0ea5e9!important; font-size: 0.8rem!important; }\n.btn-default { color: var(--primary-light)!important; font-size: 0.8rem!important; }\n.btn-delete  { color: var(--danger)!important; }\n\n// \u2500\u2500 CV Viewer Overlay \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.cv-viewer-overlay {\n  position: fixed; inset: 0; background: rgba(0,0,0,0.6);\n  display: flex; align-items: center; justify-content: center;\n  z-index: 1000;\n}\n\n.cv-viewer-modal {\n  background: #fff; border-radius: 16px;\n  width: 90vw; max-width: 900px; height: 88vh;\n  display: flex; flex-direction: column;\n  box-shadow: 0 24px 64px rgba(0,0,0,0.3);\n  overflow: hidden;\n}\n\n.cv-viewer-header {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 12px 16px; border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc; flex-shrink: 0;\n}\n\n.cv-viewer-title {\n  display: flex; align-items: center; gap: 8px;\n  font-weight: 600; font-size: 0.9rem; color: #334155;\n  .material-icons-round { font-size: 20px; color: var(--primary-light); }\n}\n\n.cv-iframe { flex: 1; width: 100%; border: none; }\n\n.viewer-loading {\n  flex: 1; display: flex; align-items: center; justify-content: center;\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyCvsComponent, { className: "MyCvsComponent", filePath: "app\\features\\candidate\\cvs\\my-cvs.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=my-cvs.component.js.map