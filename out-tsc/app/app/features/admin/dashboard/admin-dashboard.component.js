import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const _forTrack0 = ($index, $item) => $item.id;
function AdminDashboardComponent_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const point_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(point_r1);
} }
function AdminDashboardComponent_For_42_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function AdminDashboardComponent_For_42_Template_button_click_0_listener() { const view_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.selectView(view_r3)); });
    i0.ɵɵelementStart(1, "span", 31);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 32)(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const view_r3 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", ctx_r3.activeView.id === view_r3.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(view_r3.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(view_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(view_r3.headline);
} }
export class AdminDashboardComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.powerBiBaseUrl = 'https://app.powerbi.com/reportEmbed?reportId=268cbfa1-d988-423e-b528-0620ead92157&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
        this.views = [
            {
                id: 'overview',
                label: 'Accueil plateforme',
                icon: 'home',
                pageName: '91e572f3525931c6631b',
                openUrl: 'https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/91e572f3525931c6631b?experience=power-bi',
                headline: 'Vue globale et pilotage central',
                intro: 'Cette vue donne une lecture transverse de la plateforme pour verifier l activite generale et la sante des operations.',
                summaryTitle: 'Resume executif',
                summaryBody: 'Commencez par cette vue pour valider le rythme global de la plateforme, reperer les ecarts et decider rapidement ou concentrer votre attention.',
                focusPoints: ['activite generale', 'tendance globale', 'priorites du jour']
            },
            {
                id: 'reclamations',
                label: 'Statistiques reclamations',
                icon: 'assessment',
                pageName: 'df4b4805ae795e469eb9',
                openUrl: 'https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/df4b4805ae795e469eb9?experience=power-bi',
                headline: 'Qualite de service et suivi des incidents',
                intro: 'Cette vue sert a suivre les reclamations, les pics de demandes et la vitesse de resolution pour garder un service fiable.',
                summaryTitle: 'Ce qu il faut surveiller',
                summaryBody: 'Regardez les volumes ouverts, les retards de traitement et les categories les plus sensibles pour agir avant que l experience utilisateur ne se degrade.',
                focusPoints: ['demandes ouvertes', 'temps de resolution', 'causes recurrentes']
            },
            {
                id: 'jobs',
                label: 'Offres job',
                icon: 'business_center',
                pageName: 'e0724968b25e60c79522',
                openUrl: 'https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/e0724968b25e60c79522?experience=power-bi',
                headline: 'Performance des offres et acquisition de talents',
                intro: 'Cette vue met l accent sur les offres d emploi, leur attractivite et la dynamique de candidature sur la plateforme.',
                summaryTitle: 'Action recommandee',
                summaryBody: 'Analysez les offres qui performent le mieux, identifiez les blocages de conversion et ajustez le contenu ou la diffusion des postes critiques.',
                focusPoints: ['offres actives', 'interet candidat', 'performance de diffusion']
            }
        ];
        this.activeView = this.views[0];
        this.safeEmbedUrl = this.buildEmbedUrl(this.activeView.pageName);
    }
    selectView(view) {
        if (this.activeView.id === view.id)
            return;
        this.activeView = view;
        this.safeEmbedUrl = this.buildEmbedUrl(view.pageName);
    }
    buildEmbedUrl(pageName) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.powerBiBaseUrl}&pageName=${pageName}`);
    }
    static { this.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 83, vars: 12, consts: [[1, "admin-hub"], [1, "page-header"], [1, "header-copy"], [1, "eyebrow"], [1, "page-title"], [1, "page-subtitle"], [1, "header-actions"], ["mat-stroked-button", "", "routerLink", "/admin/users"], ["mat-stroked-button", "", "routerLink", "/admin/reclamations"], [1, "summary-grid"], [1, "summary-card", "hero-card"], [1, "summary-icon", "material-icons-round"], [1, "summary-content"], [1, "summary-kicker"], [1, "summary-card"], [1, "mini-title"], [1, "summary-text"], [1, "focus-pills"], [1, "focus-pill"], [1, "dashboard-switcher"], ["type", "button", 1, "switcher-btn", 3, "active"], [1, "report-shell"], [1, "report-toolbar"], [1, "toolbar-kicker"], ["mat-flat-button", "", "target", "_blank", "rel", "noopener noreferrer", 1, "btn-primary", 3, "href"], [1, "report-summary"], [1, "report-summary-card"], [1, "material-icons-round"], [1, "report-frame"], ["title", "powerbi-admin-hub", "frameborder", "0", "allowfullscreen", "true", "loading", "lazy", 3, "src"], ["type", "button", 1, "switcher-btn", 3, "click"], [1, "material-icons-round", "switcher-icon"], [1, "switcher-copy"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
            i0.ɵɵtext(4, "Pilotage Power BI");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1", 4);
            i0.ɵɵtext(6, "Accueil admin");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 5);
            i0.ɵɵtext(8, " Une seule page pour naviguer entre vos dashboards Power BI et garder une lecture claire des priorites. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 6)(10, "a", 7)(11, "mat-icon");
            i0.ɵɵtext(12, "people");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(13, " Utilisateurs ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "a", 8)(15, "mat-icon");
            i0.ɵɵtext(16, "report_problem");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(17, " Reclamations ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "div", 9)(19, "article", 10)(20, "span", 11);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 12)(23, "p", 13);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "h2");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p");
            i0.ɵɵtext(28);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(29, "article", 14)(30, "p", 15);
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "p", 16);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "article", 14)(35, "p", 15);
            i0.ɵɵtext(36, "Points de lecture");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 17);
            i0.ɵɵrepeaterCreate(38, AdminDashboardComponent_For_39_Template, 2, 1, "span", 18, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 19);
            i0.ɵɵrepeaterCreate(41, AdminDashboardComponent_For_42_Template, 8, 5, "button", 20, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 21)(44, "div", 22)(45, "div")(46, "p", 23);
            i0.ɵɵtext(47, "Dashboard actif");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "h2");
            i0.ɵɵtext(49);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "p");
            i0.ɵɵtext(51);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "a", 24)(53, "mat-icon");
            i0.ɵɵtext(54, "open_in_new");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(55, " Ouvrir dans Power BI ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(56, "div", 25)(57, "div", 26)(58, "span", 27);
            i0.ɵɵtext(59, "insights");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div")(61, "strong");
            i0.ɵɵtext(62, "Lecture rapide");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "p");
            i0.ɵɵtext(64);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(65, "div", 26)(66, "span", 27);
            i0.ɵɵtext(67, "track_changes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div")(69, "strong");
            i0.ɵɵtext(70, "Ce que cette vue pilote");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "p");
            i0.ɵɵtext(72);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(73, "div", 26)(74, "span", 27);
            i0.ɵɵtext(75, "rocket_launch");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "div")(77, "strong");
            i0.ɵɵtext(78, "Conseil d usage");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "p");
            i0.ɵɵtext(80, "Utilisez les onglets ci dessus pour changer de perspective sans quitter l accueil admin.");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(81, "div", 28);
            i0.ɵɵelement(82, "iframe", 29);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(21);
            i0.ɵɵtextInterpolate(ctx.activeView.icon);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.activeView.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.activeView.headline);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.activeView.summaryBody);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.activeView.summaryTitle);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.activeView.intro);
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.activeView.focusPoints);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.views);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.activeView.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.activeView.intro);
            i0.ɵɵadvance();
            i0.ɵɵproperty("href", ctx.activeView.openUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.activeView.summaryBody);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.activeView.headline);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("src", ctx.safeEmbedUrl, i0.ɵɵsanitizeResourceUrl);
        } }, dependencies: [CommonModule, RouterLink, MatButtonModule, i2.MatAnchor, MatIconModule, i3.MatIcon], styles: [".admin-hub[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n\n.header-copy[_ngcontent-%COMP%] {\n  max-width: 760px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.page-title[_ngcontent-%COMP%] {\n  margin: 12px 0 8px;\n}\n\n.page-subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary);\n  max-width: 640px;\n  line-height: 1.6;\n}\n\n.header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr;\n  gap: 16px;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: linear-gradient(180deg, #ffffff, #fff9f1);\n  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.06);\n}\n\n.hero-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  align-items: flex-start;\n  background:\n    radial-gradient(circle at top right, rgba(252, 185, 0, 0.22), transparent 36%),\n    linear-gradient(180deg, #fffdf8, #ffffff);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #f97316, #fcb900);\n  color: #fff;\n  font-size: 28px;\n  flex-shrink: 0;\n  box-shadow: 0 18px 28px rgba(249, 115, 22, 0.25);\n}\n\n.summary-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 1.35rem;\n  color: var(--text-primary);\n}\n\n.summary-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n\n.summary-kicker[_ngcontent-%COMP%], .toolbar-kicker[_ngcontent-%COMP%], .mini-title[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #c2410c;\n}\n\n.summary-text[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n\n.focus-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.focus-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 999px;\n  background: rgba(252, 185, 0, 0.16);\n  color: #92400e;\n  font-weight: 600;\n  font-size: 0.88rem;\n}\n\n.dashboard-switcher[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.switcher-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  width: 100%;\n  text-align: left;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #ffffff;\n  border-radius: 22px;\n  padding: 18px;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.05);\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 20px 38px rgba(15, 23, 42, 0.08);\n  }\n\n  &.active {\n    border-color: rgba(249, 115, 22, 0.34);\n    background: linear-gradient(180deg, #fffaf2, #ffffff);\n    box-shadow: 0 22px 40px rgba(249, 115, 22, 0.12);\n  }\n}\n\n.switcher-icon[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: rgba(252, 185, 0, 0.18);\n  color: #c2410c;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.switcher-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  strong {\n    color: var(--text-primary);\n    font-size: 1rem;\n  }\n\n  span:last-child {\n    color: var(--text-secondary);\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n}\n\n.report-shell[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 28px;\n  background:\n    radial-gradient(circle at top right, rgba(252, 185, 0, 0.18), transparent 28%),\n    linear-gradient(180deg, #ffffff, #fff9f3);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 24px 44px rgba(15, 23, 42, 0.08);\n}\n\n.report-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n\n  h2 {\n    margin: 0 0 8px;\n    color: var(--text-primary);\n    font-size: 1.35rem;\n  }\n\n  p {\n    margin: 0;\n    max-width: 760px;\n    color: var(--text-secondary);\n    line-height: 1.6;\n  }\n}\n\n.report-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.report-summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.06);\n  background: rgba(255, 255, 255, 0.85);\n\n  .material-icons-round {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n    display: grid;\n    place-items: center;\n    background: rgba(249, 115, 22, 0.14);\n    color: #c2410c;\n    font-size: 20px;\n    flex-shrink: 0;\n  }\n\n  strong {\n    display: block;\n    margin-bottom: 4px;\n    color: var(--text-primary);\n  }\n\n  p {\n    margin: 0;\n    color: var(--text-secondary);\n    line-height: 1.55;\n    font-size: 0.92rem;\n  }\n}\n\n.report-frame[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #fff;\n\n  iframe {\n    display: block;\n    width: 100%;\n    min-height: 76vh;\n    border: 0;\n  }\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #f97316, #fcb900) !important;\n  color: #fff !important;\n}\n\n@media (max-width: 1120px) {\n  .summary-grid[_ngcontent-%COMP%], .report-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .dashboard-switcher[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .summary-card[_ngcontent-%COMP%], .report-shell[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n\n  .hero-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .report-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    min-height: 64vh;\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-admin-dashboard', standalone: true, imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule], template: "<section class=\"admin-hub\">\n  <div class=\"page-header\">\n    <div class=\"header-copy\">\n      <span class=\"eyebrow\">Pilotage Power BI</span>\n      <h1 class=\"page-title\">Accueil admin</h1>\n      <p class=\"page-subtitle\">\n        Une seule page pour naviguer entre vos dashboards Power BI et garder une lecture claire des priorites.\n      </p>\n    </div>\n\n    <div class=\"header-actions\">\n      <a mat-stroked-button routerLink=\"/admin/users\">\n        <mat-icon>people</mat-icon>\n        Utilisateurs\n      </a>\n      <a mat-stroked-button routerLink=\"/admin/reclamations\">\n        <mat-icon>report_problem</mat-icon>\n        Reclamations\n      </a>\n    </div>\n  </div>\n\n  <div class=\"summary-grid\">\n    <article class=\"summary-card hero-card\">\n      <span class=\"summary-icon material-icons-round\">{{ activeView.icon }}</span>\n      <div class=\"summary-content\">\n        <p class=\"summary-kicker\">{{ activeView.label }}</p>\n        <h2>{{ activeView.headline }}</h2>\n        <p>{{ activeView.summaryBody }}</p>\n      </div>\n    </article>\n\n    <article class=\"summary-card\">\n      <p class=\"mini-title\">{{ activeView.summaryTitle }}</p>\n      <p class=\"summary-text\">{{ activeView.intro }}</p>\n    </article>\n\n    <article class=\"summary-card\">\n      <p class=\"mini-title\">Points de lecture</p>\n      <div class=\"focus-pills\">\n        @for (point of activeView.focusPoints; track point) {\n          <span class=\"focus-pill\">{{ point }}</span>\n        }\n      </div>\n    </article>\n  </div>\n\n  <div class=\"dashboard-switcher\">\n    @for (view of views; track view.id) {\n      <button\n        type=\"button\"\n        class=\"switcher-btn\"\n        [class.active]=\"activeView.id === view.id\"\n        (click)=\"selectView(view)\">\n        <span class=\"material-icons-round switcher-icon\">{{ view.icon }}</span>\n        <span class=\"switcher-copy\">\n          <strong>{{ view.label }}</strong>\n          <span>{{ view.headline }}</span>\n        </span>\n      </button>\n    }\n  </div>\n\n  <div class=\"report-shell\">\n    <div class=\"report-toolbar\">\n      <div>\n        <p class=\"toolbar-kicker\">Dashboard actif</p>\n        <h2>{{ activeView.label }}</h2>\n        <p>{{ activeView.intro }}</p>\n      </div>\n\n      <a\n        mat-flat-button\n        class=\"btn-primary\"\n        [href]=\"activeView.openUrl\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\">\n        <mat-icon>open_in_new</mat-icon>\n        Ouvrir dans Power BI\n      </a>\n    </div>\n\n    <div class=\"report-summary\">\n      <div class=\"report-summary-card\">\n        <span class=\"material-icons-round\">insights</span>\n        <div>\n          <strong>Lecture rapide</strong>\n          <p>{{ activeView.summaryBody }}</p>\n        </div>\n      </div>\n\n      <div class=\"report-summary-card\">\n        <span class=\"material-icons-round\">track_changes</span>\n        <div>\n          <strong>Ce que cette vue pilote</strong>\n          <p>{{ activeView.headline }}</p>\n        </div>\n      </div>\n\n      <div class=\"report-summary-card\">\n        <span class=\"material-icons-round\">rocket_launch</span>\n        <div>\n          <strong>Conseil d usage</strong>\n          <p>Utilisez les onglets ci dessus pour changer de perspective sans quitter l accueil admin.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"report-frame\">\n      <iframe\n        title=\"powerbi-admin-hub\"\n        [src]=\"safeEmbedUrl\"\n        frameborder=\"0\"\n        allowfullscreen=\"true\"\n        loading=\"lazy\">\n      </iframe>\n    </div>\n  </div>\n</section>\n", styles: [".admin-hub {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n\n.header-copy {\n  max-width: 760px;\n}\n\n.eyebrow {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px 12px;\n  border-radius: 999px;\n  background: rgba(249, 115, 22, 0.12);\n  color: #c2410c;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n\n.page-title {\n  margin: 12px 0 8px;\n}\n\n.page-subtitle {\n  margin: 0;\n  color: var(--text-secondary);\n  max-width: 640px;\n  line-height: 1.6;\n}\n\n.header-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.summary-grid {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr;\n  gap: 16px;\n}\n\n.summary-card {\n  padding: 22px;\n  border-radius: 24px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: linear-gradient(180deg, #ffffff, #fff9f1);\n  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.06);\n}\n\n.hero-card {\n  display: flex;\n  gap: 18px;\n  align-items: flex-start;\n  background:\n    radial-gradient(circle at top right, rgba(252, 185, 0, 0.22), transparent 36%),\n    linear-gradient(180deg, #fffdf8, #ffffff);\n}\n\n.summary-icon {\n  width: 58px;\n  height: 58px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #f97316, #fcb900);\n  color: #fff;\n  font-size: 28px;\n  flex-shrink: 0;\n  box-shadow: 0 18px 28px rgba(249, 115, 22, 0.25);\n}\n\n.summary-content h2 {\n  margin: 0 0 8px;\n  font-size: 1.35rem;\n  color: var(--text-primary);\n}\n\n.summary-content p {\n  margin: 0;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n\n.summary-kicker,\n.toolbar-kicker,\n.mini-title {\n  margin: 0 0 10px;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #c2410c;\n}\n\n.summary-text {\n  margin: 0;\n  color: var(--text-secondary);\n  line-height: 1.65;\n}\n\n.focus-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.focus-pill {\n  display: inline-flex;\n  align-items: center;\n  padding: 10px 14px;\n  border-radius: 999px;\n  background: rgba(252, 185, 0, 0.16);\n  color: #92400e;\n  font-weight: 600;\n  font-size: 0.88rem;\n}\n\n.dashboard-switcher {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n\n.switcher-btn {\n  display: flex;\n  align-items: flex-start;\n  gap: 14px;\n  width: 100%;\n  text-align: left;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #ffffff;\n  border-radius: 22px;\n  padding: 18px;\n  cursor: pointer;\n  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.05);\n\n  &:hover {\n    transform: translateY(-2px);\n    box-shadow: 0 20px 38px rgba(15, 23, 42, 0.08);\n  }\n\n  &.active {\n    border-color: rgba(249, 115, 22, 0.34);\n    background: linear-gradient(180deg, #fffaf2, #ffffff);\n    box-shadow: 0 22px 40px rgba(249, 115, 22, 0.12);\n  }\n}\n\n.switcher-icon {\n  width: 46px;\n  height: 46px;\n  border-radius: 14px;\n  display: grid;\n  place-items: center;\n  background: rgba(252, 185, 0, 0.18);\n  color: #c2410c;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.switcher-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  strong {\n    color: var(--text-primary);\n    font-size: 1rem;\n  }\n\n  span:last-child {\n    color: var(--text-secondary);\n    font-size: 0.9rem;\n    line-height: 1.5;\n  }\n}\n\n.report-shell {\n  padding: 22px;\n  border-radius: 28px;\n  background:\n    radial-gradient(circle at top right, rgba(252, 185, 0, 0.18), transparent 28%),\n    linear-gradient(180deg, #ffffff, #fff9f3);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  box-shadow: 0 24px 44px rgba(15, 23, 42, 0.08);\n}\n\n.report-toolbar {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 18px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n\n  h2 {\n    margin: 0 0 8px;\n    color: var(--text-primary);\n    font-size: 1.35rem;\n  }\n\n  p {\n    margin: 0;\n    max-width: 760px;\n    color: var(--text-secondary);\n    line-height: 1.6;\n  }\n}\n\n.report-summary {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n  margin-bottom: 18px;\n}\n\n.report-summary-card {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  padding: 16px;\n  border-radius: 20px;\n  border: 1px solid rgba(15, 23, 42, 0.06);\n  background: rgba(255, 255, 255, 0.85);\n\n  .material-icons-round {\n    width: 40px;\n    height: 40px;\n    border-radius: 12px;\n    display: grid;\n    place-items: center;\n    background: rgba(249, 115, 22, 0.14);\n    color: #c2410c;\n    font-size: 20px;\n    flex-shrink: 0;\n  }\n\n  strong {\n    display: block;\n    margin-bottom: 4px;\n    color: var(--text-primary);\n  }\n\n  p {\n    margin: 0;\n    color: var(--text-secondary);\n    line-height: 1.55;\n    font-size: 0.92rem;\n  }\n}\n\n.report-frame {\n  overflow: hidden;\n  border-radius: 22px;\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  background: #fff;\n\n  iframe {\n    display: block;\n    width: 100%;\n    min-height: 76vh;\n    border: 0;\n  }\n}\n\n.btn-primary {\n  background: linear-gradient(135deg, #f97316, #fcb900) !important;\n  color: #fff !important;\n}\n\n@media (max-width: 1120px) {\n  .summary-grid,\n  .report-summary {\n    grid-template-columns: 1fr;\n  }\n\n  .dashboard-switcher {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 768px) {\n  .summary-card,\n  .report-shell {\n    padding: 18px;\n  }\n\n  .hero-card {\n    flex-direction: column;\n  }\n\n  .report-frame iframe {\n    min-height: 64vh;\n  }\n}\n"] }]
    }], () => [{ type: i1.DomSanitizer }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "app\\features\\admin\\dashboard\\admin-dashboard.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=admin-dashboard.component.js.map