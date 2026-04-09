import {
  MatBadgeModule
} from "./chunk-YT662Q5B.js";
import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-CIKWQEPB.js";
import {
  MatMenuModule
} from "./chunk-WUAYRPG3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-K3CFEA6O.js";
import "./chunk-XXJRWQFV.js";
import "./chunk-T243Z5LV.js";
import {
  MatIconModule
} from "./chunk-JTYJI43T.js";
import {
  CommonModule,
  MatButtonModule,
  MatIconButton,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/layouts/admin-layout/admin-layout.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function AdminLayoutComponent_For_16_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r1.badge);
  }
}
function AdminLayoutComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminLayoutComponent_For_16_Conditional_5_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r1.route)("matTooltip", !ctx_r1.sidebarOpen() ? item_r1.label : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(5, item_r1.badge ? 5 : -1);
  }
}
var AdminLayoutComponent = class _AdminLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.router = inject(Router);
    this.sidebarOpen = signal(true);
    this.navItems = [
      { label: "Tableau de bord", icon: "dashboard", route: "/admin/dashboard" },
      { label: "Utilisateurs", icon: "people", route: "/admin/users" },
      { label: "R\xE9clamations", icon: "report_problem", route: "/admin/reclamations" },
      { label: "Offres d'emploi", icon: "work_outline", route: "/admin/offers" }
    ];
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  logout() {
    this.auth.logout();
  }
  static {
    this.\u0275fac = function AdminLayoutComponent_Factory(t) {
      return new (t || _AdminLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminLayoutComponent, selectors: [["app-admin-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 7, consts: [[1, "admin-shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "logo-icon"], [1, "material-icons-round"], [1, "logo-text"], [1, "toggle-btn", 3, "click"], [1, "sidebar-section-label"], [1, "sidebar-nav"], ["routerLinkActive", "active", "matTooltipPosition", "after", 1, "nav-item", 3, "routerLink", "matTooltip"], [1, "sidebar-divider"], ["routerLink", "/admin/dashboard", "matTooltipPosition", "after", 1, "nav-item", 3, "matTooltip"], [1, "material-icons-round", "nav-icon"], [1, "nav-label"], [1, "sidebar-user"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], [1, "user-role"], ["mat-icon-button", "", "matTooltip", "D\xE9connexion", 1, "logout-btn", 3, "click"], [1, "main-area"], [1, "topbar"], [1, "topbar-left"], [1, "page-breadcrumb"], [1, "topbar-right"], [1, "admin-badge"], [1, "admin-avatar"], [1, "page-content"], [1, "nav-badge"]], template: function AdminLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6, "work");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "span", 6);
        \u0275\u0275text(8, "RecruitPro");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 7);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_9_listener() {
          return ctx.toggleSidebar();
        });
        \u0275\u0275elementStart(10, "span", 5);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275text(13, "Administration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "nav", 9);
        \u0275\u0275repeaterCreate(15, AdminLayoutComponent_For_16_Template, 6, 5, "a", 10, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "div", 11);
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19, "Param\xE8tres");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "nav", 9)(21, "a", 12)(22, "span", 13);
        \u0275\u0275text(23, "settings");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "span", 14);
        \u0275\u0275text(25, "Param\xE8tres");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 17)(30, "span", 18);
        \u0275\u0275text(31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 19);
        \u0275\u0275text(33, "Super Administrateur");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "button", 20);
        \u0275\u0275listener("click", function AdminLayoutComponent_Template_button_click_34_listener() {
          return ctx.logout();
        });
        \u0275\u0275elementStart(35, "span", 5);
        \u0275\u0275text(36, "logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(37, "div", 21)(38, "header", 22)(39, "div", 23)(40, "h3", 24);
        \u0275\u0275text(41, "Administration");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 25)(43, "div", 26)(44, "span", 5);
        \u0275\u0275text(45, "shield");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span");
        \u0275\u0275text(47, "Admin");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 27);
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "main", 28);
        \u0275\u0275element(51, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("sidebar-collapsed", !ctx.sidebarOpen());
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.sidebarOpen() ? "menu_open" : "menu");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(6);
        \u0275\u0275property("matTooltip", !ctx.sidebarOpen() ? "Param\xE8tres" : "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName == null ? null : ctx.auth.currentUser.fullName[0] == null ? null : ctx.auth.currentUser.fullName[0].toUpperCase());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName);
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName == null ? null : ctx.auth.currentUser.fullName[0] == null ? null : ctx.auth.currentUser.fullName[0].toUpperCase());
      }
    }, dependencies: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, MatIconButton, MatTooltipModule, MatTooltip, MatBadgeModule, MatMenuModule], styles: ["\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--content-bg);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  min-height: 100vh;\n  background: var(--sidebar-bg);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  transition: width 0.25s ease;\n  overflow: hidden;\n  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n  min-height: 64px;\n  flex-shrink: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  overflow: hidden;\n}\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: #fff;\n  white-space: nowrap;\n  letter-spacing: -0.01em;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--sidebar-text);\n  transition: background 0.25s ease;\n  flex-shrink: 0;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover);\n}\n.toggle-btn[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.sidebar-section-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 600;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.3);\n  padding: 16px 20px 6px;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  text-decoration: none;\n  color: var(--sidebar-text);\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 2px;\n  transition: all 0.25s ease;\n  white-space: nowrap;\n  overflow: hidden;\n  cursor: pointer;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n  transition: color 0.25s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  transition: opacity 0.25s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  flex-shrink: 0;\n  background: #dc2626;\n  color: #fff;\n  border-radius: 999px;\n  padding: 1px 7px;\n  font-size: 0.7rem;\n  font-weight: 700;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: var(--sidebar-hover);\n  color: #fff;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: var(--sidebar-active);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.35);\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  margin: 12px 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.06);\n  padding: 14px 14px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info[_ngcontent-%COMP%]   .user-role[_ngcontent-%COMP%] {\n  display: block;\n  color: rgba(255, 255, 255, 0.45);\n  font-size: 0.72rem;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: rgba(255, 255, 255, 0.45) !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: #fff !important;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 68px;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%], .admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .nav-badge[_ngcontent-%COMP%], .admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-section-label[_ngcontent-%COMP%], .admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: none;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-user[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-user[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 260px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left 0.25s ease;\n}\n.admin-shell.sidebar-collapsed[_ngcontent-%COMP%]   .main-area[_ngcontent-%COMP%] {\n  margin-left: 68px;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 28px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  box-shadow: 0 1px 0 var(--border-color);\n}\n.page-breadcrumb[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.admin-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #e0e7ff;\n  color: #3730a3;\n  padding: 5px 12px;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.admin-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.admin-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 28px;\n  max-width: 1400px;\n}\n/*# sourceMappingURL=admin-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminLayoutComponent, { className: "AdminLayoutComponent", filePath: "src\\app\\layouts\\admin-layout\\admin-layout.component.ts", lineNumber: 25 });
})();
export {
  AdminLayoutComponent
};
//# sourceMappingURL=chunk-5Y4UQELA.js.map
