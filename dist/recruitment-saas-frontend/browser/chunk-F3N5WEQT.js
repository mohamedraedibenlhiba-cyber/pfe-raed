import {
  CvService
} from "./chunk-DUY2VADM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-FNKFVHAE.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-K3CFEA6O.js";
import "./chunk-XXJRWQFV.js";
import "./chunk-T243Z5LV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-M2YTZW2R.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-JTYJI43T.js";
import {
  CommonModule,
  DatePipe,
  DomSanitizer,
  MatButton,
  MatButtonModule,
  MatIconButton,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/candidate/cvs/my-cvs.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MyCvsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 9);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "Upload en cours...");
    \u0275\u0275elementEnd();
  }
}
function MyCvsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Ajouter un CV");
    \u0275\u0275elementEnd();
  }
}
function MyCvsComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementEnd();
  }
}
function MyCvsComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4, "Aucun CV ajout\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6, "Importez votre premier CV pour commencer \xE0 postuler");
    \u0275\u0275elementEnd()();
  }
}
function MyCvsComponent_Conditional_17_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "span", 6);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Par d\xE9faut ");
    \u0275\u0275elementEnd();
  }
}
function MyCvsComponent_Conditional_17_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function MyCvsComponent_Conditional_17_For_2_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const cv_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setDefault(cv_r2));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "star_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9finir par d\xE9faut ");
    \u0275\u0275elementEnd();
  }
}
function MyCvsComponent_Conditional_17_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275template(1, MyCvsComponent_Conditional_17_For_2_Conditional_1_Template, 4, 0, "div", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 23)(12, "button", 24);
    \u0275\u0275listener("click", function MyCvsComponent_Conditional_17_For_2_Template_button_click_12_listener() {
      const cv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.viewCV(cv_r2));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Voir ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, MyCvsComponent_Conditional_17_For_2_Conditional_16_Template, 4, 0, "button", 25);
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function MyCvsComponent_Conditional_17_For_2_Template_button_click_17_listener() {
      const cv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.delete(cv_r2));
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const cv_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("default", cv_r2.defaultCv);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, cv_r2.defaultCv ? 1 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(cv_r2.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r2.fileSize(cv_r2.fileSize), " \u2022 Import\xE9 le ", \u0275\u0275pipeBind2(10, 7, cv_r2.uploadedAt, "dd/MM/yyyy"), "");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(16, !cv_r2.defaultCv ? 16 : -1);
  }
}
function MyCvsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, MyCvsComponent_Conditional_17_For_2_Template, 20, 10, "div", 16, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.cvs);
  }
}
function MyCvsComponent_Conditional_18_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275element(1, "mat-spinner", 34);
    \u0275\u0275elementEnd();
  }
}
function MyCvsComponent_Conditional_18_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 35);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r2.viewerUrl, \u0275\u0275sanitizeResourceUrl);
  }
}
function MyCvsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275listener("click", function MyCvsComponent_Conditional_18_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeViewer());
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275listener("click", function MyCvsComponent_Conditional_18_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "span", 31)(4, "span", 6);
    \u0275\u0275text(5, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 32);
    \u0275\u0275listener("click", function MyCvsComponent_Conditional_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeViewer());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, MyCvsComponent_Conditional_18_Conditional_10_Template, 2, 0, "div", 33)(11, MyCvsComponent_Conditional_18_Conditional_11_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.viewerName, " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(10, ctx_r2.viewerLoading ? 10 : 11);
  }
}
var MyCvsComponent = class _MyCvsComponent {
  constructor() {
    this.cvSvc = inject(CvService);
    this.snack = inject(MatSnackBar);
    this.sanitizer = inject(DomSanitizer);
    this.loading = true;
    this.uploading = false;
    this.cvs = [];
    this.viewerUrl = null;
    this.viewerName = "";
    this.viewerLoading = false;
    this.viewerObjectUrl = null;
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.cvSvc.getMyCvs().subscribe({
      next: (res) => {
        this.cvs = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onFileSelect(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (!["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      this.snack.open("Seuls les fichiers PDF et Word sont accept\xE9s", "OK", { panelClass: "error-snack" });
      return;
    }
    this.uploading = true;
    this.cvSvc.upload(file).subscribe({
      next: (res) => {
        this.cvs.unshift(res.data);
        this.uploading = false;
        this.snack.open("CV upload\xE9 avec succ\xE8s", "OK", { panelClass: "success-snack" });
      },
      error: (err) => {
        this.uploading = false;
        this.snack.open(err.error?.message || "Erreur upload", "OK", { panelClass: "error-snack" });
      }
    });
  }
  setDefault(cv) {
    this.cvSvc.setDefault(cv.id).subscribe({
      next: () => {
        this.cvs.forEach((c) => c.defaultCv = c.id === cv.id);
        this.snack.open("CV d\xE9fini comme CV par d\xE9faut", "OK", { panelClass: "success-snack" });
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  delete(cv) {
    if (!confirm("Supprimer ce CV ?"))
      return;
    this.cvSvc.delete(cv.id).subscribe({
      next: () => {
        if (this.viewerObjectUrl) {
          this.closeViewer();
        }
        this.cvs = this.cvs.filter((c) => c.id !== cv.id);
        this.snack.open("CV supprim\xE9", "OK", { panelClass: "success-snack" });
      },
      error: (err) => this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" })
    });
  }
  viewCV(cv) {
    this.viewerLoading = true;
    this.viewerName = cv.fileName;
    this.viewerUrl = null;
    this.cvSvc.getContent(cv.id).subscribe({
      next: (blob) => {
        if (this.viewerObjectUrl) {
          URL.revokeObjectURL(this.viewerObjectUrl);
        }
        this.viewerObjectUrl = URL.createObjectURL(blob);
        this.viewerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewerObjectUrl);
        this.viewerLoading = false;
      },
      error: () => {
        this.viewerLoading = false;
        this.snack.open("Impossible de charger le CV", "OK", { panelClass: "error-snack" });
      }
    });
  }
  closeViewer() {
    this.viewerUrl = null;
    this.viewerName = "";
    if (this.viewerObjectUrl) {
      URL.revokeObjectURL(this.viewerObjectUrl);
      this.viewerObjectUrl = null;
    }
  }
  fileSize(bytes) {
    if (bytes < 1024)
      return bytes + " B";
    if (bytes < 1048576)
      return (bytes / 1024).toFixed(1) + " Ko";
    return (bytes / 1048576).toFixed(1) + " Mo";
  }
  static {
    this.\u0275fac = function MyCvsComponent_Factory(t) {
      return new (t || _MyCvsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyCvsComponent, selectors: [["app-my-cvs"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 19, vars: 7, consts: [[1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "upload-btn"], ["type", "file", "accept", ".pdf,.docx", "hidden", "", 3, "change", "disabled"], [1, "info-banner"], [1, "material-icons-round"], [1, "loading-center"], [1, "cv-viewer-overlay"], ["diameter", "20"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "cvs-grid"], [1, "cv-card", "card", 3, "default"], [1, "cv-card", "card"], [1, "default-badge"], [1, "cv-icon-wrap"], [1, "material-icons-round", "cv-icon"], [1, "cv-details"], [1, "cv-meta"], [1, "cv-actions"], ["mat-button", "", "matTooltip", "Visualiser le CV", 1, "btn-view", 3, "click"], ["mat-button", "", "matTooltip", "D\xE9finir comme CV par d\xE9faut", 1, "btn-default"], ["mat-icon-button", "", "matTooltip", "Supprimer", 1, "btn-delete", 3, "click"], ["mat-button", "", "matTooltip", "D\xE9finir comme CV par d\xE9faut", 1, "btn-default", 3, "click"], [1, "cv-viewer-overlay", 3, "click"], [1, "cv-viewer-modal", 3, "click"], [1, "cv-viewer-header"], [1, "cv-viewer-title"], ["mat-icon-button", "", "matTooltip", "Fermer", 3, "click"], [1, "viewer-loading"], ["diameter", "48"], [1, "cv-iframe", 3, "src"]], template: function MyCvsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
        \u0275\u0275text(3, "Mes CVs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 2);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "label", 3);
        \u0275\u0275template(7, MyCvsComponent_Conditional_7_Template, 3, 0)(8, MyCvsComponent_Conditional_8_Template, 4, 0);
        \u0275\u0275elementStart(9, "input", 4);
        \u0275\u0275listener("change", function MyCvsComponent_Template_input_change_9_listener($event) {
          return ctx.onFileSelect($event);
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 5)(11, "span", 6);
        \u0275\u0275text(12, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Importez votre CV au format PDF ou Word. L'IA analysera vos comp\xE9tences pour le matching avec les offres.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(15, MyCvsComponent_Conditional_15_Template, 2, 0, "div", 7)(16, MyCvsComponent_Conditional_16_Template, 7, 0)(17, MyCvsComponent_Conditional_17_Template, 3, 0)(18, MyCvsComponent_Conditional_18_Template, 12, 2, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("", ctx.cvs.length, " CV(s) dans votre profil");
        \u0275\u0275advance();
        \u0275\u0275classProp("loading", ctx.uploading);
        \u0275\u0275advance();
        \u0275\u0275conditional(7, ctx.uploading ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", ctx.uploading);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(15, ctx.loading ? 15 : !ctx.cvs.length ? 16 : 17);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(18, ctx.viewerUrl || ctx.viewerLoading ? 18 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, MatProgressSpinnerModule, MatProgressSpinner, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, MatSnackBarModule, MatTooltipModule, MatTooltip], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 16px;\n}\n.upload-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  padding: 10px 20px;\n  background: var(--primary-light);\n  color: #fff;\n  border-radius: 10px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  border: none;\n  transition: all 0.2s ease;\n}\n.upload-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.upload-btn[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);\n}\n.upload-btn.loading[_ngcontent-%COMP%] {\n  background: #94a3b8;\n  cursor: not-allowed;\n}\n.info-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #eff6ff;\n  border: 1px solid #bfdbfe;\n  border-radius: 10px;\n  padding: 12px 16px;\n  margin-bottom: 20px;\n}\n.info-banner[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  color: var(--info);\n  font-size: 18px;\n  flex-shrink: 0;\n}\n.info-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #1e40af;\n  margin: 0;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.cvs-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 16px;\n}\n.cv-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  position: relative;\n  transition: all 0.2s ease;\n}\n.cv-card.default[_ngcontent-%COMP%] {\n  border-color: #c7d2fe;\n  background:\n    linear-gradient(\n      135deg,\n      #fff,\n      #eef2ff);\n}\n.default-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -1px;\n  right: 12px;\n  background: var(--primary-light);\n  color: #fff;\n  padding: 4px 12px;\n  border-radius: 0 0 8px 8px;\n  font-size: 0.72rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.default-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.cv-icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 8px;\n}\n.cv-icon[_ngcontent-%COMP%] {\n  font-size: 48px !important;\n  color: var(--primary-light);\n}\n.cv-details[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.cv-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cv-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n  margin: 0 0 6px;\n}\n.analyzed-chip[_ngcontent-%COMP%] {\n  font-size: 0.72rem !important;\n  padding: 2px 8px !important;\n}\n.cv-skills[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-secondary);\n  background: #f8fafc;\n  border-radius: 6px;\n  padding: 8px;\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.cv-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n}\n.btn-view[_ngcontent-%COMP%] {\n  color: #0ea5e9 !important;\n  font-size: 0.8rem !important;\n}\n.btn-default[_ngcontent-%COMP%] {\n  color: var(--primary-light) !important;\n  font-size: 0.8rem !important;\n}\n.btn-delete[_ngcontent-%COMP%] {\n  color: var(--danger) !important;\n}\n.cv-viewer-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.6);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.cv-viewer-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  width: 90vw;\n  max-width: 900px;\n  height: 88vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.cv-viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  background: #f8fafc;\n  flex-shrink: 0;\n}\n.cv-viewer-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #334155;\n}\n.cv-viewer-title[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--primary-light);\n}\n.cv-iframe[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  border: none;\n}\n.viewer-loading[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=my-cvs.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyCvsComponent, { className: "MyCvsComponent", filePath: "src\\app\\features\\candidate\\cvs\\my-cvs.component.ts", lineNumber: 19 });
})();
export {
  MyCvsComponent
};
//# sourceMappingURL=chunk-F3N5WEQT.js.map
