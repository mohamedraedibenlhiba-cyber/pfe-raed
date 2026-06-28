import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
export class AdminOffersComponent {
    static { this.ɵfac = function AdminOffersComponent_Factory(t) { return new (t || AdminOffersComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminOffersComponent, selectors: [["app-admin-offers"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 27, vars: 0, consts: [[1, "powerbi-page"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["mat-stroked-button", "", "routerLink", "/admin/dashboard"], ["mat-flat-button", "", "href", "https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/e0724968b25e60c79522?experience=power-bi", "target", "_blank", "rel", "noopener noreferrer", 1, "btn-primary"], [1, "report-card"], [1, "report-card-header"], [1, "report-chip"], [1, "report-frame"], ["title", "powerbi-offres-admin", "src", i0.ɵɵtrustConstantResourceUrl `https://app.powerbi.com/reportEmbed?reportId=268cbfa1-d988-423e-b528-0620ead92157&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=e0724968b25e60c79522`, "frameborder", "0", "allowfullscreen", "true", "loading", "lazy"]], template: function AdminOffersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "h1", 2);
            i0.ɵɵtext(4, "Offres job");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p", 3);
            i0.ɵɵtext(6, "Vue Power BI dediee aux offres d'emploi de la plateforme.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 4)(8, "a", 5)(9, "mat-icon");
            i0.ɵɵtext(10, "arrow_back");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, " Accueil ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "a", 6)(13, "mat-icon");
            i0.ɵɵtext(14, "open_in_new");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(15, " Ouvrir dans Power BI ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "div", 7)(17, "div", 8)(18, "div")(19, "h2");
            i0.ɵɵtext(20, "Rapport offres job");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22, "Ce rapport reprend la page Power BI fournie pour le suivi des offres.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(23, "span", 9);
            i0.ɵɵtext(24, "Power BI");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "div", 10);
            i0.ɵɵelement(26, "iframe", 11);
            i0.ɵɵelementEnd()()();
        } }, dependencies: [CommonModule, RouterLink, MatButtonModule, i1.MatAnchor, MatIconModule, i2.MatIcon], styles: [".powerbi-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.report-card[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, #ffffff, #fffaf1);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 24px;\n  padding: 20px;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n}\n\n.report-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n\n  h2 {\n    margin: 0 0 6px;\n    font-size: 1.2rem;\n    color: var(--text-primary);\n  }\n\n  p {\n    margin: 0;\n    color: var(--text-secondary);\n  }\n}\n\n.report-chip[_ngcontent-%COMP%] {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.report-frame[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #fff;\n\n  iframe {\n    display: block;\n    width: 100%;\n    min-height: 76vh;\n    border: 0;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f97316, #f59e0b) !important;\n  color: #fff !important;\n}\n\n@media (max-width: 768px) {\n  .report-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n  .report-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    min-height: 68vh;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminOffersComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-offers', standalone: true, imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule], template: "<section class=\"powerbi-page\">\n  <div class=\"page-header\">\n    <div>\n      <h1 class=\"page-title\">Offres job</h1>\n      <p class=\"page-subtitle\">Vue Power BI dediee aux offres d'emploi de la plateforme.</p>\n    </div>\n\n    <div class=\"header-actions\">\n      <a mat-stroked-button routerLink=\"/admin/dashboard\">\n        <mat-icon>arrow_back</mat-icon>\n        Accueil\n      </a>\n      <a\n        mat-flat-button\n        class=\"btn-primary\"\n        href=\"https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/e0724968b25e60c79522?experience=power-bi\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\">\n        <mat-icon>open_in_new</mat-icon>\n        Ouvrir dans Power BI\n      </a>\n    </div>\n  </div>\n\n  <div class=\"report-card\">\n    <div class=\"report-card-header\">\n      <div>\n        <h2>Rapport offres job</h2>\n        <p>Ce rapport reprend la page Power BI fournie pour le suivi des offres.</p>\n      </div>\n      <span class=\"report-chip\">Power BI</span>\n    </div>\n\n    <div class=\"report-frame\">\n      <iframe\n        title=\"powerbi-offres-admin\"\n        src=\"https://app.powerbi.com/reportEmbed?reportId=268cbfa1-d988-423e-b528-0620ead92157&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&pageName=e0724968b25e60c79522\"\n        frameborder=\"0\"\n        allowfullscreen=\"true\"\n        loading=\"lazy\">\n      </iframe>\n    </div>\n  </div>\n</section>\n", styles: [".powerbi-page {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.report-card {\n  background: linear-gradient(180deg, #ffffff, #fffaf1);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 24px;\n  padding: 20px;\n  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08);\n}\n\n.report-card-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n\n  h2 {\n    margin: 0 0 6px;\n    font-size: 1.2rem;\n    color: var(--text-primary);\n  }\n\n  p {\n    margin: 0;\n    color: var(--text-secondary);\n  }\n}\n\n.report-chip {\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.report-frame {\n  overflow: hidden;\n  border-radius: 18px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #fff;\n\n  iframe {\n    display: block;\n    width: 100%;\n    min-height: 76vh;\n    border: 0;\n  }\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #f97316, #f59e0b) !important;\n  color: #fff !important;\n}\n\n@media (max-width: 768px) {\n  .report-card {\n    padding: 16px;\n  }\n\n  .report-frame iframe {\n    min-height: 68vh;\n  }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminOffersComponent, { className: "AdminOffersComponent", filePath: "app\\features\\admin\\offers-overview\\admin-offers.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=admin-offers.component.js.map