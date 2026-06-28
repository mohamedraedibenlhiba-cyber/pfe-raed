import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';
import { ConnectionRequestService } from '../../core/services/connection-request.service';
import { MessagingService } from '../../core/services/messaging.service';
import { NotificationService } from '../../core/services/notification.service';
import { ConnectionRequestsModalComponent } from '../../features/shared/connection-requests-modal/connection-requests-modal.component';
import { ProjectChatbotComponent } from '../../features/shared/project-chatbot/project-chatbot.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/badge";
import * as i4 from "@angular/material/menu";
import * as i5 from "@angular/material/tooltip";
import * as i6 from "@angular/material/divider";
const _forTrack0 = ($index, $item) => $item.route;
function UserLayoutComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1, "business");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 34);
    i0.ɵɵtext(3, "Entreprise");
    i0.ɵɵelementEnd();
} }
function UserLayoutComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1, "person");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 34);
    i0.ɵɵtext(3, "Candidat");
    i0.ɵɵelementEnd();
} }
function UserLayoutComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 11)(1, "span", 13);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 14);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", item_r2.route)("matTooltip", !ctx_r2.sidebarOpen() ? item_r2.label : "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.icon);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
} }
export class UserLayoutComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.notifSvc = inject(NotificationService);
        this.msgSvc = inject(MessagingService);
        this.connectionSvc = inject(ConnectionRequestService);
        this.dialog = inject(MatDialog);
        this.sidebarOpen = signal(true);
        this.unreadNotifications = 0;
        this.unreadMessages = 0;
        this.pendingConnectionRequests = 0;
        this.enterpriseNav = [
            { label: 'Tableau de bord', icon: 'dashboard', route: '/enterprise/dashboard' },
            { label: 'Mes offres', icon: 'work_outline', route: '/enterprise/offers' },
            { label: 'Messagerie', icon: 'chat_bubble_outline', route: '/enterprise/messages' },
            { label: 'Actualites', icon: 'newspaper', route: '/enterprise/feed' },
            { label: 'Freelance', icon: 'handyman', route: '/enterprise/freelance' },
            { label: 'Reclamations', icon: 'report_problem', route: '/enterprise/reclamations' },
        ];
        this.candidateNav = [
            { label: 'Tableau de bord', icon: 'dashboard', route: '/candidate/dashboard' },
            { label: 'Decouvrir', icon: 'explore', route: '/candidate/discovery' },
            { label: 'Rechercher offres', icon: 'search', route: '/candidate/search' },
            { label: 'Mes candidatures', icon: 'send', route: '/candidate/applications' },
            { label: 'Mes CVs', icon: 'description', route: '/candidate/cvs' },
            { label: 'Messagerie', icon: 'chat_bubble_outline', route: '/candidate/messages' },
            { label: 'Actualites', icon: 'newspaper', route: '/candidate/feed' },
            { label: 'Freelance', icon: 'handyman', route: '/candidate/freelance' },
            { label: 'Reclamations', icon: 'report_problem', route: '/candidate/reclamations' },
        ];
    }
    get isEnterprise() { return this.auth.isEnterprise; }
    get isCandidate() { return this.auth.isCandidate; }
    get basePath() { return this.isEnterprise ? '/enterprise' : '/candidate'; }
    get navItems() { return this.isEnterprise ? this.enterpriseNav : this.candidateNav; }
    get profileRoute() { return `${this.basePath}/profile`; }
    ngOnInit() {
        this.loadTopbarCounts();
        this.connectionSvc.requestChanges$.subscribe(() => this.loadConnectionRequestCount());
    }
    toggleSidebar() {
        this.sidebarOpen.update(value => !value);
    }
    logout() {
        this.auth.logout();
    }
    openConnectionRequests() {
        this.dialog.open(ConnectionRequestsModalComponent, {
            width: '820px',
            maxWidth: '95vw'
        });
    }
    initials() {
        return this.auth.currentUser?.fullName?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    loadTopbarCounts() {
        this.notifSvc.getUnreadCount().subscribe(res => this.unreadNotifications = res.data);
        this.msgSvc.getUnreadCount().subscribe(res => this.unreadMessages = res.data);
        this.loadConnectionRequestCount();
    }
    loadConnectionRequestCount() {
        this.connectionSvc.getPendingCount().subscribe(res => this.pendingConnectionRequests = res.data);
    }
    static { this.ɵfac = function UserLayoutComponent_Factory(t) { return new (t || UserLayoutComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UserLayoutComponent, selectors: [["app-user-layout"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 77, vars: 19, consts: [["userMenu", "matMenu"], [1, "app-shell"], [1, "sidebar"], [1, "sidebar-header"], [1, "logo"], [1, "logo-icon"], [1, "material-icons-round"], [1, "logo-text"], [1, "toggle-btn", 3, "click"], [1, "role-badge"], [1, "sidebar-nav"], ["routerLinkActive", "active", "matTooltipPosition", "after", 1, "nav-item", 3, "routerLink", "matTooltip"], [1, "sidebar-divider"], [1, "material-icons-round", "nav-icon"], [1, "nav-label"], [1, "sidebar-user"], [1, "user-avatar-sidebar"], [1, "user-info"], [1, "user-name"], [1, "user-email"], ["mat-icon-button", "", "matTooltip", "Deconnexion", 1, "logout-btn", 3, "click"], [1, "main-area"], [1, "topbar"], [1, "topbar-left"], [1, "mobile-menu-btn", 3, "click"], [1, "topbar-right"], ["mat-icon-button", "", "matBadgeColor", "warn", "matBadgeSize", "small", 1, "icon-btn", 3, "routerLink", "matBadge"], ["mat-icon-button", "", "matBadgeColor", "warn", "matBadgeSize", "small", 1, "icon-btn", 3, "click", "matBadge"], ["mat-button", "", 1, "user-menu-btn", 3, "matMenuTriggerFor"], [1, "user-avatar-top"], [1, "topbar-username"], ["mat-menu-item", "", 3, "routerLink"], ["mat-menu-item", "", 3, "click"], [1, "page-content"], [1, "role-label"]], template: function UserLayoutComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 1)(1, "aside", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
            i0.ɵɵtext(6, "rocket_launch");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "span", 7);
            i0.ɵɵtext(8, "NeoHire");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "button", 8);
            i0.ɵɵlistener("click", function UserLayoutComponent_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggleSidebar()); });
            i0.ɵɵelementStart(10, "span", 6);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "div", 9);
            i0.ɵɵtemplate(13, UserLayoutComponent_Conditional_13_Template, 4, 0)(14, UserLayoutComponent_Conditional_14_Template, 4, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "nav", 10);
            i0.ɵɵrepeaterCreate(16, UserLayoutComponent_For_17_Template, 5, 4, "a", 11, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "div", 12);
            i0.ɵɵelementStart(19, "nav", 10)(20, "a", 11)(21, "span", 13);
            i0.ɵɵtext(22, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 14);
            i0.ɵɵtext(24, "Mon profil");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "div", 15)(26, "div", 16);
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 17)(29, "span", 18);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "span", 19);
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "button", 20);
            i0.ɵɵlistener("click", function UserLayoutComponent_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.logout()); });
            i0.ɵɵelementStart(34, "span", 6);
            i0.ɵɵtext(35, "logout");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(36, "div", 21)(37, "header", 22)(38, "div", 23)(39, "button", 24);
            i0.ɵɵlistener("click", function UserLayoutComponent_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.toggleSidebar()); });
            i0.ɵɵelementStart(40, "span", 6);
            i0.ɵɵtext(41, "menu");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "div", 25)(43, "button", 26)(44, "mat-icon");
            i0.ɵɵtext(45, "notifications_none");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "button", 26)(47, "mat-icon");
            i0.ɵɵtext(48, "chat_bubble_outline");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "button", 27);
            i0.ɵɵlistener("click", function UserLayoutComponent_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.openConnectionRequests()); });
            i0.ɵɵelementStart(50, "mat-icon");
            i0.ɵɵtext(51, "person_add");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(52, "button", 28)(53, "div", 29);
            i0.ɵɵtext(54);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "span", 30);
            i0.ɵɵtext(56);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "mat-icon");
            i0.ɵɵtext(58, "expand_more");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "mat-menu", null, 0)(61, "a", 31)(62, "mat-icon");
            i0.ɵɵtext(63, "account_circle");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(64, " Mon profil ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "a", 31)(66, "mat-icon");
            i0.ɵɵtext(67, "report_problem");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(68, " Mes reclamations ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(69, "mat-divider");
            i0.ɵɵelementStart(70, "button", 32);
            i0.ɵɵlistener("click", function UserLayoutComponent_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r1); return i0.ɵɵresetView(ctx.logout()); });
            i0.ɵɵelementStart(71, "mat-icon");
            i0.ɵɵtext(72, "logout");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(73, " Deconnexion ");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(74, "main", 33);
            i0.ɵɵelement(75, "router-outlet");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(76, "app-project-chatbot");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const userMenu_r4 = i0.ɵɵreference(60);
            i0.ɵɵclassProp("sidebar-collapsed", !ctx.sidebarOpen());
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.sidebarOpen() ? "menu_open" : "menu");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(13, ctx.isEnterprise ? 13 : 14);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.navItems);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", ctx.profileRoute)("matTooltip", !ctx.sidebarOpen() ? "Mon profil" : "");
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.initials());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.email);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("routerLink", ctx.basePath + "/feed")("matBadge", ctx.unreadNotifications > 0 ? ctx.unreadNotifications : null);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("routerLink", ctx.basePath + "/messages")("matBadge", ctx.unreadMessages > 0 ? ctx.unreadMessages : null);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matBadge", ctx.pendingConnectionRequests > 0 ? ctx.pendingConnectionRequests : null);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matMenuTriggerFor", userMenu_r4);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.initials());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("routerLink", ctx.profileRoute);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("routerLink", ctx.basePath + "/reclamations");
        } }, dependencies: [CommonModule,
            RouterOutlet,
            RouterLink,
            RouterLinkActive,
            MatIconModule, i1.MatIcon, MatButtonModule, i2.MatButton, i2.MatIconButton, MatBadgeModule, i3.MatBadge, MatMenuModule, i4.MatMenu, i4.MatMenuItem, i4.MatMenuTrigger, MatTooltipModule, i5.MatTooltip, MatDividerModule, i6.MatDivider, MatDialogModule,
            ProjectChatbotComponent], styles: ["@import '../../shared/styles/_design-system';\n\n$sidebar-w[_ngcontent-%COMP%]:   256px[_ngcontent-%COMP%];\n$sidebar-collapsed-w[_ngcontent-%COMP%]:   66px[_ngcontent-%COMP%];\n$topbar-h[_ngcontent-%COMP%]:   64px[_ngcontent-%COMP%];\n$transition[_ngcontent-%COMP%]:   0.25s[_ngcontent-%COMP%]   ease[_ngcontent-%COMP%];\n\n.app-shell[_ngcontent-%COMP%] { display: flex; min-height: 100vh; background: var(--content-bg); }\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Sidebar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.sidebar[_ngcontent-%COMP%] {\n  width: $sidebar-w; min-height: 100vh;\n  background: $color-bg;\n  border-right: 1px solid var(--border-color);\n  display: flex; flex-direction: column;\n  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100;\n  transition: width $transition; overflow: hidden;\n  box-shadow: 2px 0 4px rgba(0,0,0,0.04);\n}\n\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 16px 14px; border-bottom: 1px solid var(--border-color);\n  min-height: $topbar-h; flex-shrink: 0;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px; overflow: hidden;\n  .logo-icon {\n    width: 34px; height: 34px; flex-shrink: 0;\n    background: $color-primary;\n    border-radius: 6px; display: flex; align-items: center; justify-content: center;\n    .material-icons-round { font-size: 18px; color: #fff; }\n  }\n  .logo-text {\n    font-size: 1.05rem;\n    font-weight: 700;\n    color: $color-primary;\n    white-space: nowrap;\n  }\n}\n\n.toggle-btn[_ngcontent-%COMP%] {\n  background: none; border: none; cursor: pointer; flex-shrink: 0;\n  width: 30px; height: 30px; border-radius: 6px;\n  display: flex; align-items: center; justify-content: center;\n  color: $color-text-secondary;\n  transition: all $transition;\n  &:hover {\n    background: $color-primary-light;\n    color: $color-primary;\n  }\n}\n\n.role-badge[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 8px;\n  margin: 12px 14px 4px;\n  background: $color-primary-light;\n  border-radius: 6px;\n  padding: 8px 12px;\n  overflow: hidden; flex-shrink: 0;\n  .material-icons-round {\n    font-size: 16px;\n    color: $color-primary;\n    flex-shrink: 0;\n  }\n  .role-label {\n    font-size: 0.75rem;\n    font-weight: 700;\n    color: $color-primary;\n    text-transform: uppercase;\n    letter-spacing: .06em;\n    white-space: nowrap;\n  }\n}\n\n.sidebar-nav[_ngcontent-%COMP%] {\n  padding: 8px 10px;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 12px; border-radius: 6px;\n  text-decoration: none;\n  color: $color-text-secondary;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 2px;\n  overflow: hidden; white-space: nowrap;\n  transition: all $transition;\n  .nav-icon {\n    font-size: 20px;\n    flex-shrink: 0;\n  }\n  .nav-label {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  &:hover {\n    background: $color-primary-light;\n    color: $color-primary;\n    .nav-icon {\n      color: $color-primary;\n    }\n  }\n  &.active {\n    background: $color-primary;\n    color: #fff;\n    font-weight: 600;\n    .nav-icon {\n      color: #fff;\n    }\n  }\n}\n\n.sidebar-divider[_ngcontent-%COMP%] {\n  margin: 8px 14px;\n  border-top: 1px solid var(--border-color);\n}\n\n.sidebar-user[_ngcontent-%COMP%] {\n  margin-top: auto; border-top: 1px solid var(--border-color);\n  padding: 12px 14px;\n  display: flex; align-items: center; gap: 8px;\n  overflow: hidden; flex-shrink: 0;\n  background: #fff;\n}\n\n.user-avatar-sidebar[_ngcontent-%COMP%] {\n  width: 34px; height: 34px; flex-shrink: 0;\n  border-radius: 50%;\n  background: $color-primary;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex; align-items: center; justify-content: center;\n}\n\n.user-info[_ngcontent-%COMP%] {\n  flex: 1; overflow: hidden; min-width: 0;\n  .user-name {\n    display: block;\n    font-size: 0.85rem;\n    font-weight: 600;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--text-primary);\n  }\n  .user-email {\n    display: block;\n    font-size: 0.72rem;\n    color: var(--text-muted);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n\n.logout-btn[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: var(--text-muted)!important;\n  &:hover {\n    color: $color-error!important;\n  }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Collapsed[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%] {\n  .sidebar { width: $sidebar-collapsed-w; }\n  .logo-text, .nav-label, .role-label, .user-info { display: none; }\n  .role-badge { justify-content: center; padding: 8px; }\n  .logo { gap: 0; }\n  .sidebar-user { justify-content: center; .logout-btn { display: none; } }\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Main[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.main-area[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-left: $sidebar-w;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left $transition;\n}\n\n.app-shell.sidebar-collapsed[_ngcontent-%COMP%]   .main-area[_ngcontent-%COMP%] {\n  margin-left: $sidebar-collapsed-w;\n}\n\n//[_ngcontent-%COMP%]   \u2500\u2500\u2500[_ngcontent-%COMP%]   Topbar[_ngcontent-%COMP%]   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.topbar[_ngcontent-%COMP%] {\n  height: $topbar-h;\n  background: #fff;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n}\n\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.icon-btn[_ngcontent-%COMP%] {\n  color: $color-text-secondary!important;\n  transition: color $transition;\n  &:hover {\n    color: $color-primary!important;\n  }\n}\n\n.user-menu-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 40px!important;\n  padding: 4px 12px!important;\n  transition: background-color $transition;\n  &:hover {\n    background-color: $color-primary-light!important;\n  }\n}\n\n.user-avatar-top[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: $color-primary;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.topbar-username[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n}\n\n.page-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 24px;\n}\n\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    &.open {\n      transform: translateX(0);\n    }\n  }\n  .main-area[_ngcontent-%COMP%] { margin-left: 0!important; }\n  .mobile-menu-btn[_ngcontent-%COMP%] { display: flex; }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserLayoutComponent, [{
        type: Component,
        args: [{ selector: 'app-user-layout', standalone: true, imports: [
                    CommonModule,
                    RouterOutlet,
                    RouterLink,
                    RouterLinkActive,
                    MatIconModule,
                    MatButtonModule,
                    MatBadgeModule,
                    MatMenuModule,
                    MatTooltipModule,
                    MatDividerModule,
                    MatDialogModule,
                    ProjectChatbotComponent
                ], template: "<div class=\"app-shell\" [class.sidebar-collapsed]=\"!sidebarOpen()\">\n  <aside class=\"sidebar\">\n    <div class=\"sidebar-header\">\n      <div class=\"logo\">\n        <div class=\"logo-icon\"><span class=\"material-icons-round\">rocket_launch</span></div>\n        <span class=\"logo-text\">NeoHire</span>\n      </div>\n      <button class=\"toggle-btn\" (click)=\"toggleSidebar()\">\n        <span class=\"material-icons-round\">{{ sidebarOpen() ? 'menu_open' : 'menu' }}</span>\n      </button>\n    </div>\n\n    <div class=\"role-badge\">\n      @if (isEnterprise) {\n        <span class=\"material-icons-round\">business</span>\n        <span class=\"role-label\">Entreprise</span>\n      } @else {\n        <span class=\"material-icons-round\">person</span>\n        <span class=\"role-label\">Candidat</span>\n      }\n    </div>\n\n    <nav class=\"sidebar-nav\">\n      @for (item of navItems; track item.route) {\n        <a\n          class=\"nav-item\"\n          [routerLink]=\"item.route\"\n          routerLinkActive=\"active\"\n          [matTooltip]=\"!sidebarOpen() ? item.label : ''\"\n          matTooltipPosition=\"after\">\n          <span class=\"material-icons-round nav-icon\">{{ item.icon }}</span>\n          <span class=\"nav-label\">{{ item.label }}</span>\n        </a>\n      }\n    </nav>\n\n    <div class=\"sidebar-divider\"></div>\n\n    <nav class=\"sidebar-nav\">\n      <a\n        class=\"nav-item\"\n        [routerLink]=\"profileRoute\"\n        routerLinkActive=\"active\"\n        [matTooltip]=\"!sidebarOpen() ? 'Mon profil' : ''\"\n        matTooltipPosition=\"after\">\n        <span class=\"material-icons-round nav-icon\">account_circle</span>\n        <span class=\"nav-label\">Mon profil</span>\n      </a>\n    </nav>\n\n    <div class=\"sidebar-user\">\n      <div class=\"user-avatar-sidebar\">{{ initials() }}</div>\n      <div class=\"user-info\">\n        <span class=\"user-name\">{{ auth.currentUser?.fullName }}</span>\n        <span class=\"user-email\">{{ auth.currentUser?.email }}</span>\n      </div>\n      <button mat-icon-button class=\"logout-btn\" (click)=\"logout()\" matTooltip=\"Deconnexion\">\n        <span class=\"material-icons-round\">logout</span>\n      </button>\n    </div>\n  </aside>\n\n  <div class=\"main-area\">\n    <header class=\"topbar\">\n      <div class=\"topbar-left\">\n        <button class=\"mobile-menu-btn\" (click)=\"toggleSidebar()\">\n          <span class=\"material-icons-round\">menu</span>\n        </button>\n      </div>\n\n      <div class=\"topbar-right\">\n        <button\n          mat-icon-button\n          class=\"icon-btn\"\n          [routerLink]=\"basePath + '/feed'\"\n          [matBadge]=\"unreadNotifications > 0 ? unreadNotifications : null\"\n          matBadgeColor=\"warn\"\n          matBadgeSize=\"small\">\n          <mat-icon>notifications_none</mat-icon>\n        </button>\n\n        <button\n          mat-icon-button\n          class=\"icon-btn\"\n          [routerLink]=\"basePath + '/messages'\"\n          [matBadge]=\"unreadMessages > 0 ? unreadMessages : null\"\n          matBadgeColor=\"warn\"\n          matBadgeSize=\"small\">\n          <mat-icon>chat_bubble_outline</mat-icon>\n        </button>\n\n        <button\n          mat-icon-button\n          class=\"icon-btn\"\n          (click)=\"openConnectionRequests()\"\n          [matBadge]=\"pendingConnectionRequests > 0 ? pendingConnectionRequests : null\"\n          matBadgeColor=\"warn\"\n          matBadgeSize=\"small\">\n          <mat-icon>person_add</mat-icon>\n        </button>\n\n        <button mat-button class=\"user-menu-btn\" [matMenuTriggerFor]=\"userMenu\">\n          <div class=\"user-avatar-top\">{{ initials() }}</div>\n          <span class=\"topbar-username\">{{ auth.currentUser?.fullName }}</span>\n          <mat-icon>expand_more</mat-icon>\n        </button>\n\n        <mat-menu #userMenu=\"matMenu\">\n          <a mat-menu-item [routerLink]=\"profileRoute\">\n            <mat-icon>account_circle</mat-icon> Mon profil\n          </a>\n          <a mat-menu-item [routerLink]=\"basePath + '/reclamations'\">\n            <mat-icon>report_problem</mat-icon> Mes reclamations\n          </a>\n          <mat-divider />\n          <button mat-menu-item (click)=\"logout()\">\n            <mat-icon>logout</mat-icon> Deconnexion\n          </button>\n        </mat-menu>\n      </div>\n    </header>\n\n    <main class=\"page-content\">\n      <router-outlet />\n    </main>\n  </div>\n\n  <app-project-chatbot />\n</div>\n", styles: ["@import '../../shared/styles/_design-system';\n\n$sidebar-w: 256px;\n$sidebar-collapsed-w: 66px;\n$topbar-h: 64px;\n$transition: 0.25s ease;\n\n.app-shell { display: flex; min-height: 100vh; background: var(--content-bg); }\n\n// \u2500\u2500\u2500 Sidebar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.sidebar {\n  width: $sidebar-w; min-height: 100vh;\n  background: $color-bg;\n  border-right: 1px solid var(--border-color);\n  display: flex; flex-direction: column;\n  position: fixed; top: 0; left: 0; bottom: 0; z-index: 100;\n  transition: width $transition; overflow: hidden;\n  box-shadow: 2px 0 4px rgba(0,0,0,0.04);\n}\n\n.sidebar-header {\n  display: flex; align-items: center; justify-content: space-between;\n  padding: 16px 14px; border-bottom: 1px solid var(--border-color);\n  min-height: $topbar-h; flex-shrink: 0;\n}\n\n.logo {\n  display: flex; align-items: center; gap: 10px; overflow: hidden;\n  .logo-icon {\n    width: 34px; height: 34px; flex-shrink: 0;\n    background: $color-primary;\n    border-radius: 6px; display: flex; align-items: center; justify-content: center;\n    .material-icons-round { font-size: 18px; color: #fff; }\n  }\n  .logo-text {\n    font-size: 1.05rem;\n    font-weight: 700;\n    color: $color-primary;\n    white-space: nowrap;\n  }\n}\n\n.toggle-btn {\n  background: none; border: none; cursor: pointer; flex-shrink: 0;\n  width: 30px; height: 30px; border-radius: 6px;\n  display: flex; align-items: center; justify-content: center;\n  color: $color-text-secondary;\n  transition: all $transition;\n  &:hover {\n    background: $color-primary-light;\n    color: $color-primary;\n  }\n}\n\n.role-badge {\n  display: flex; align-items: center; gap: 8px;\n  margin: 12px 14px 4px;\n  background: $color-primary-light;\n  border-radius: 6px;\n  padding: 8px 12px;\n  overflow: hidden; flex-shrink: 0;\n  .material-icons-round {\n    font-size: 16px;\n    color: $color-primary;\n    flex-shrink: 0;\n  }\n  .role-label {\n    font-size: 0.75rem;\n    font-weight: 700;\n    color: $color-primary;\n    text-transform: uppercase;\n    letter-spacing: .06em;\n    white-space: nowrap;\n  }\n}\n\n.sidebar-nav {\n  padding: 8px 10px;\n}\n\n.nav-item {\n  display: flex; align-items: center; gap: 10px;\n  padding: 10px 12px; border-radius: 6px;\n  text-decoration: none;\n  color: $color-text-secondary;\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 2px;\n  overflow: hidden; white-space: nowrap;\n  transition: all $transition;\n  .nav-icon {\n    font-size: 20px;\n    flex-shrink: 0;\n  }\n  .nav-label {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  &:hover {\n    background: $color-primary-light;\n    color: $color-primary;\n    .nav-icon {\n      color: $color-primary;\n    }\n  }\n  &.active {\n    background: $color-primary;\n    color: #fff;\n    font-weight: 600;\n    .nav-icon {\n      color: #fff;\n    }\n  }\n}\n\n.sidebar-divider {\n  margin: 8px 14px;\n  border-top: 1px solid var(--border-color);\n}\n\n.sidebar-user {\n  margin-top: auto; border-top: 1px solid var(--border-color);\n  padding: 12px 14px;\n  display: flex; align-items: center; gap: 8px;\n  overflow: hidden; flex-shrink: 0;\n  background: #fff;\n}\n\n.user-avatar-sidebar {\n  width: 34px; height: 34px; flex-shrink: 0;\n  border-radius: 50%;\n  background: $color-primary;\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex; align-items: center; justify-content: center;\n}\n\n.user-info {\n  flex: 1; overflow: hidden; min-width: 0;\n  .user-name {\n    display: block;\n    font-size: 0.85rem;\n    font-weight: 600;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    color: var(--text-primary);\n  }\n  .user-email {\n    display: block;\n    font-size: 0.72rem;\n    color: var(--text-muted);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n\n.logout-btn {\n  flex-shrink: 0;\n  color: var(--text-muted)!important;\n  &:hover {\n    color: $color-error!important;\n  }\n}\n\n// \u2500\u2500\u2500 Collapsed \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.app-shell.sidebar-collapsed {\n  .sidebar { width: $sidebar-collapsed-w; }\n  .logo-text, .nav-label, .role-label, .user-info { display: none; }\n  .role-badge { justify-content: center; padding: 8px; }\n  .logo { gap: 0; }\n  .sidebar-user { justify-content: center; .logout-btn { display: none; } }\n}\n\n// \u2500\u2500\u2500 Main \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.main-area {\n  flex: 1;\n  margin-left: $sidebar-w;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left $transition;\n}\n\n.app-shell.sidebar-collapsed .main-area {\n  margin-left: $sidebar-collapsed-w;\n}\n\n// \u2500\u2500\u2500 Topbar \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n.topbar {\n  height: $topbar-h;\n  background: #fff;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 24px;\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n}\n\n.topbar-right {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.icon-btn {\n  color: $color-text-secondary!important;\n  transition: color $transition;\n  &:hover {\n    color: $color-primary!important;\n  }\n}\n\n.user-menu-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 40px!important;\n  padding: 4px 12px!important;\n  transition: background-color $transition;\n  &:hover {\n    background-color: $color-primary-light!important;\n  }\n}\n\n.user-avatar-top {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: $color-primary;\n  color: #fff;\n  font-size: 0.75rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.topbar-username {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: var(--text-primary);\n}\n\n.mobile-menu-btn {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--text-secondary);\n}\n\n.page-content {\n  flex: 1;\n  padding: 24px;\n}\n\n@media (max-width: 768px) {\n  .sidebar {\n    transform: translateX(-100%);\n    &.open {\n      transform: translateX(0);\n    }\n  }\n  .main-area { margin-left: 0!important; }\n  .mobile-menu-btn { display: flex; }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UserLayoutComponent, { className: "UserLayoutComponent", filePath: "app\\layouts\\user-layout\\user-layout.component.ts", lineNumber: 44 }); })();
//# sourceMappingURL=user-layout.component.js.map