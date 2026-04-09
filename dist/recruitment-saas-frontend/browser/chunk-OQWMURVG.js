import {
  MessagingService
} from "./chunk-WLVDILQ6.js";
import {
  MatBadge,
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
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-WUAYRPG3.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-2TZY33OT.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-K3CFEA6O.js";
import "./chunk-XXJRWQFV.js";
import "./chunk-T243Z5LV.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-JTYJI43T.js";
import {
  CommonModule,
  HttpClient,
  HttpParams,
  MatButton,
  MatButtonModule,
  MatIconButton,
  environment,
  inject,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/notifications`;
  }
  getAll(page = 0, size = 15) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(this.API, { params });
  }
  getUnreadCount() {
    return this.http.get(`${this.API}/unread-count`);
  }
  markAllRead() {
    return this.http.post(`${this.API}/mark-all-read`, {});
  }
  markRead(id) {
    return this.http.post(`${this.API}/${id}/read`, {});
  }
  static {
    this.\u0275fac = function NotificationService_Factory(t) {
      return new (t || _NotificationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};

// src/app/layouts/user-layout/user-layout.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function UserLayoutComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3, "Entreprise");
    \u0275\u0275elementEnd();
  }
}
function UserLayoutComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 33);
    \u0275\u0275text(3, "Candidat");
    \u0275\u0275elementEnd();
  }
}
function UserLayoutComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", item_r2.route)("matTooltip", !ctx_r2.sidebarOpen() ? item_r2.label : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.label);
  }
}
var UserLayoutComponent = class _UserLayoutComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.notifSvc = inject(NotificationService);
    this.msgSvc = inject(MessagingService);
    this.router = inject(Router);
    this.sidebarOpen = signal(true);
    this.unreadNotifications = 0;
    this.unreadMessages = 0;
    this.enterpriseNav = [
      { label: "Tableau de bord", icon: "dashboard", route: "/enterprise/dashboard" },
      { label: "Mes offres", icon: "work_outline", route: "/enterprise/offers" },
      { label: "Messagerie", icon: "chat_bubble_outline", route: "/enterprise/messages" },
      { label: "Canaux", icon: "forum", route: "/enterprise/channels" },
      { label: "Actualit\xE9s", icon: "newspaper", route: "/enterprise/feed" },
      { label: "Freelance", icon: "handyman", route: "/enterprise/freelance" },
      { label: "R\xE9clamations", icon: "report_problem", route: "/enterprise/reclamations" }
    ];
    this.candidateNav = [
      { label: "Tableau de bord", icon: "dashboard", route: "/candidate/dashboard" },
      { label: "Rechercher offres", icon: "search", route: "/candidate/search" },
      { label: "Mes candidatures", icon: "send", route: "/candidate/applications" },
      { label: "Mes CVs", icon: "description", route: "/candidate/cvs" },
      { label: "Messagerie", icon: "chat_bubble_outline", route: "/candidate/messages" },
      { label: "Canaux", icon: "forum", route: "/candidate/channels" },
      { label: "Actualit\xE9s", icon: "newspaper", route: "/candidate/feed" },
      { label: "Freelance", icon: "handyman", route: "/candidate/freelance" },
      { label: "R\xE9clamations", icon: "report_problem", route: "/candidate/reclamations" }
    ];
  }
  get isEnterprise() {
    return this.auth.isEnterprise;
  }
  get isCandidate() {
    return this.auth.isCandidate;
  }
  get basePath() {
    return this.isEnterprise ? "/enterprise" : "/candidate";
  }
  get navItems() {
    return this.isEnterprise ? this.enterpriseNav : this.candidateNav;
  }
  get profileRoute() {
    return `${this.basePath}/profile`;
  }
  ngOnInit() {
    this.notifSvc.getUnreadCount().subscribe((res) => this.unreadNotifications = res.data);
    this.msgSvc.getUnreadCount().subscribe((res) => this.unreadMessages = res.data);
  }
  toggleSidebar() {
    this.sidebarOpen.update((v) => !v);
  }
  logout() {
    this.auth.logout();
  }
  initials() {
    return this.auth.currentUser?.fullName?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  static {
    this.\u0275fac = function UserLayoutComponent_Factory(t) {
      return new (t || _UserLayoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserLayoutComponent, selectors: [["app-user-layout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 73, vars: 18, consts: [["userMenu", "matMenu"], [1, "app-shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "logo-icon"], [1, "material-icons-round"], [1, "logo-text"], [1, "toggle-btn", 3, "click"], [1, "role-badge"], [1, "sidebar-nav"], ["routerLinkActive", "active", "matTooltipPosition", "after", 1, "nav-item", 3, "routerLink", "matTooltip"], [1, "sidebar-divider"], [1, "material-icons-round", "nav-icon"], [1, "nav-label"], [1, "sidebar-user"], [1, "user-avatar-sidebar"], [1, "user-info"], [1, "user-name"], [1, "user-email"], ["mat-icon-button", "", "matTooltip", "D\xE9connexion", 1, "logout-btn", 3, "click"], [1, "main-area"], [1, "topbar"], [1, "topbar-left"], [1, "mobile-menu-btn", 3, "click"], [1, "topbar-right"], ["mat-icon-button", "", "matBadgeColor", "warn", "matBadgeSize", "small", 1, "icon-btn", 3, "routerLink", "matBadge"], ["mat-button", "", 1, "user-menu-btn", 3, "matMenuTriggerFor"], [1, "user-avatar-top"], [1, "topbar-username"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [1, "page-content"], [1, "role-label"]], template: function UserLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
        \u0275\u0275text(6, "work");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "span", 7);
        \u0275\u0275text(8, "RecruitPro");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 8);
        \u0275\u0275listener("click", function UserLayoutComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSidebar());
        });
        \u0275\u0275elementStart(10, "span", 6);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "div", 9);
        \u0275\u0275template(13, UserLayoutComponent_Conditional_13_Template, 4, 0)(14, UserLayoutComponent_Conditional_14_Template, 4, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "nav", 10);
        \u0275\u0275repeaterCreate(16, UserLayoutComponent_For_17_Template, 5, 4, "a", 11, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "div", 12);
        \u0275\u0275elementStart(19, "nav", 10)(20, "a", 11)(21, "span", 13);
        \u0275\u0275text(22, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "span", 14);
        \u0275\u0275text(24, "Mon profil");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "div", 15)(26, "div", 16);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 17)(29, "span", 18);
        \u0275\u0275text(30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span", 19);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "button", 20);
        \u0275\u0275listener("click", function UserLayoutComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementStart(34, "span", 6);
        \u0275\u0275text(35, "logout");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(36, "div", 21)(37, "header", 22)(38, "div", 23)(39, "button", 24);
        \u0275\u0275listener("click", function UserLayoutComponent_Template_button_click_39_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleSidebar());
        });
        \u0275\u0275elementStart(40, "span", 6);
        \u0275\u0275text(41, "menu");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 25)(43, "button", 26)(44, "mat-icon");
        \u0275\u0275text(45, "notifications_none");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "button", 26)(47, "mat-icon");
        \u0275\u0275text(48, "chat_bubble_outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "button", 27)(50, "div", 28);
        \u0275\u0275text(51);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "span", 29);
        \u0275\u0275text(53);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-icon");
        \u0275\u0275text(55, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "mat-menu", null, 0)(58, "a", 30)(59, "mat-icon");
        \u0275\u0275text(60, "account_circle");
        \u0275\u0275elementEnd();
        \u0275\u0275text(61, " Mon profil ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "a", 30)(63, "mat-icon");
        \u0275\u0275text(64, "report_problem");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " Mes r\xE9clamations ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "mat-divider");
        \u0275\u0275elementStart(67, "button", 31);
        \u0275\u0275listener("click", function UserLayoutComponent_Template_button_click_67_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.logout());
        });
        \u0275\u0275elementStart(68, "mat-icon");
        \u0275\u0275text(69, "logout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(70, " D\xE9connexion ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(71, "main", 32);
        \u0275\u0275element(72, "router-outlet");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const userMenu_r4 = \u0275\u0275reference(57);
        \u0275\u0275classProp("sidebar-collapsed", !ctx.sidebarOpen());
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(ctx.sidebarOpen() ? "menu_open" : "menu");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(13, ctx.isEnterprise ? 13 : 14);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.navItems);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", ctx.profileRoute)("matTooltip", !ctx.sidebarOpen() ? "Mon profil" : "");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.email);
        \u0275\u0275advance(11);
        \u0275\u0275property("routerLink", ctx.basePath + "/feed")("matBadge", ctx.unreadNotifications > 0 ? ctx.unreadNotifications : null);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", ctx.basePath + "/messages")("matBadge", ctx.unreadMessages > 0 ? ctx.unreadMessages : null);
        \u0275\u0275advance(3);
        \u0275\u0275property("matMenuTriggerFor", userMenu_r4);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.initials());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName);
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", ctx.profileRoute);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", ctx.basePath + "/reclamations");
      }
    }, dependencies: [
      CommonModule,
      RouterOutlet,
      RouterLink,
      RouterLinkActive,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatBadgeModule,
      MatBadge,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      MatDividerModule,
      MatDivider
    ], styles: ["\n\n.app-shell[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100vh;\n  background: var(--content-bg);\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 256px;\n  min-height: 100vh;\n  background: #fff;\n  border-right: 1px solid var(--border-color);\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 100;\n  transition: width 0.25s ease;\n  overflow: hidden;\n  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 14px;\n  border-bottom: 1px solid var(--border-color);\n  min-height: 64px;\n  flex-shrink: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  overflow: hidden;\n}\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #fff;\n}\n.logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--text-primary);\n  white-space: nowrap;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  transition: all 0.25s ease;\n}\n.toggle-btn[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: var(--text-primary);\n}\n.role-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 12px 14px 4px;\n  background:\n    linear-gradient(\n      135deg,\n      #eef2ff,\n      #ede9fe);\n  border-radius: 8px;\n  padding: 8px 12px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.role-badge[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--primary-light);\n  flex-shrink: 0;\n}\n.role-badge[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--primary-light);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  white-space: nowrap;\n}\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 11px;\n  border-radius: 9px;\n  text-decoration: none;\n  color: var(--text-secondary);\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  transition: all 0.25s ease;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  flex-shrink: 0;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: var(--primary-light);\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n  color: var(--primary-light);\n  font-weight: 600;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n.sidebar-divider[_ngcontent-%COMP%] {\n  margin: 8px 14px;\n  border-top: 1px solid var(--border-color);\n}\n.sidebar-user[_ngcontent-%COMP%] {\n  margin-top: auto;\n  border-top: 1px solid var(--border-color);\n  padding: 12px 14px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.user-avatar-sidebar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--text-primary);\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.logout-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--text-muted) !important;\n}\n.logout-btn[_ngcontent-%COMP%]:hover {\n  color: var(--danger) !important;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%] {\n  width: 66px;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%], .app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%], .app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .role-label[_ngcontent-%COMP%], .app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .role-badge[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 8px;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  gap: 0;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-user[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .sidebar-user[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: 256px;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left 0.25s ease;\n}\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .main-area[_ngcontent-%COMP%] {\n  margin-left: 66px;\n}\n.topbar[_ngcontent-%COMP%] {\n  height: 64px;\n  background: #fff;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  color: var(--text-secondary) !important;\n}\n.user-menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 40px !important;\n  padding: 4px 12px !important;\n}\n.user-avatar-top[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.topbar-username[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n}\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n  }\n  .sidebar.open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .main-area[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=user-layout.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserLayoutComponent, { className: "UserLayoutComponent", filePath: "src\\app\\layouts\\user-layout\\user-layout.component.ts", lineNumber: 25 });
})();
export {
  UserLayoutComponent
};
//# sourceMappingURL=chunk-OQWMURVG.js.map
