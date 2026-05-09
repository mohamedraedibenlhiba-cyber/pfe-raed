import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { MessagingService } from '../../../core/services/messaging.service';
import { AuthService } from '../../../core/services/auth.service';
import { UserConnectionModalComponent } from '../../../shared/components/user-connection-modal/user-connection-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/progress-spinner";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/input";
import * as i8 from "@angular/material/tooltip";
const _forTrack0 = ($index, $item) => $item.id;
const _c0 = a0 => ["/enterprise/offers", a0, "applications"];
function EnterpriseDashboardComponent_Conditional_9_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "mat-spinner", 11);
    i0.ɵɵelementEnd();
} }
function EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22)(1, "mat-icon");
    i0.ɵɵtext(2, "location_on");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const user_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", user_r2.city, " ");
} }
function EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div", 13);
    i0.ɵɵlistener("click", function EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_Template_div_click_1_listener() { const user_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openUserModal(user_r2)); });
    i0.ɵɵelementStart(2, "div", 14);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 15)(5, "p", 16);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 17);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_p_9_Template, 4, 1, "p", 18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 19)(11, "button", 20);
    i0.ɵɵlistener("click", function EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_Template_button_click_11_listener() { const user_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openUserModal(user_r2)); });
    i0.ɵɵelementStart(12, "mat-icon");
    i0.ɵɵtext(13, "visibility");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 21);
    i0.ɵɵlistener("click", function EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_Template_button_click_14_listener() { const user_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.openUserModal(user_r2)); });
    i0.ɵɵelementStart(15, "mat-icon");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.initials(user_r2.fullName));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(user_r2.fullName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(user_r2.headline || "Candidat");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", user_r2.city);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTooltip", "Voir le profil");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(user_r2.canMessage ? "mail" : "person_add");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", user_r2.canMessage ? "Message" : "Contacter", " ");
} }
function EnterpriseDashboardComponent_Conditional_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, EnterpriseDashboardComponent_Conditional_9_Conditional_2_For_1_Template, 18, 7, "div", 12, _forTrack0);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r2.searchResults);
} }
function EnterpriseDashboardComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, EnterpriseDashboardComponent_Conditional_9_Conditional_1_Template, 2, 0, "div", 10)(2, EnterpriseDashboardComponent_Conditional_9_Conditional_2_Template, 2, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, ctx_r2.loadingSearch ? 1 : 2);
} }
function EnterpriseDashboardComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "mat-spinner", 23);
    i0.ɵɵelementEnd();
} }
function EnterpriseDashboardComponent_Conditional_21_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "span", 47);
    i0.ɵɵtext(2, "work_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 48);
    i0.ɵɵtext(4, "Aucune offre cr\u00E9\u00E9e");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p", 49);
    i0.ɵɵtext(6, "Publiez votre premi\u00E8re offre d'emploi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "a", 50)(8, "mat-icon");
    i0.ɵɵtext(9, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, " Cr\u00E9er une offre ");
    i0.ɵɵelementEnd()();
} }
function EnterpriseDashboardComponent_Conditional_21_Conditional_46_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "div", 53)(2, "span", 54);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 55);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 56)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "a", 57)(10, "mat-icon");
    i0.ɵɵtext(11, "people");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const offer_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(offer_r4.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", offer_r4.location || "Non pr\u00E9cis\u00E9", " \u2022 ", offer_r4.contractType, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("chip ", offer_r4.status === "PUBLISHED" ? "chip-success" : offer_r4.status === "DRAFT" ? "chip-warning" : "chip-gray", "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", offer_r4.status === "PUBLISHED" ? "Publi\u00E9e" : offer_r4.status === "DRAFT" ? "Brouillon" : "Ferm\u00E9e", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(8, _c0, offer_r4.id));
} }
function EnterpriseDashboardComponent_Conditional_21_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵrepeaterCreate(1, EnterpriseDashboardComponent_Conditional_21_Conditional_46_For_2_Template, 12, 10, "div", 52, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.offers.slice(0, 5));
} }
function EnterpriseDashboardComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 27);
    i0.ɵɵtext(4, "work");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 28)(6, "p", 29);
    i0.ɵɵtext(7, "Total offres");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h3", 30);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 25)(11, "div", 31)(12, "span", 27);
    i0.ɵɵtext(13, "public");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 28)(15, "p", 29);
    i0.ɵɵtext(16, "Publi\u00E9es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "h3", 30);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "div", 25)(20, "div", 32)(21, "span", 27);
    i0.ɵɵtext(22, "drafts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 28)(24, "p", 29);
    i0.ɵɵtext(25, "Brouillons");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "h3", 30);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "div", 25)(29, "div", 33)(30, "span", 27);
    i0.ɵɵtext(31, "archive");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div", 28)(33, "p", 29);
    i0.ɵɵtext(34, "Ferm\u00E9es");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "h3", 30);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(37, "div", 34)(38, "div", 35)(39, "h3");
    i0.ɵɵtext(40, "Offres r\u00E9centes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "a", 36);
    i0.ɵɵtext(42, " Voir toutes ");
    i0.ɵɵelementStart(43, "mat-icon");
    i0.ɵɵtext(44, "arrow_forward");
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(45, EnterpriseDashboardComponent_Conditional_21_Conditional_45_Template, 11, 0, "div", 37)(46, EnterpriseDashboardComponent_Conditional_21_Conditional_46_Template, 3, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "div", 38)(48, "a", 39)(49, "div", 40)(50, "span", 27);
    i0.ɵɵtext(51, "work_outline");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "span");
    i0.ɵɵtext(53, "G\u00E9rer les offres");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "a", 41)(55, "div", 42)(56, "span", 27);
    i0.ɵɵtext(57, "chat_bubble_outline");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "span");
    i0.ɵɵtext(59, "Messagerie");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "a", 43)(61, "div", 44)(62, "span", 27);
    i0.ɵɵtext(63, "newspaper");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "span");
    i0.ɵɵtext(65, "Actualit\u00E9s");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "a", 45)(67, "div", 46)(68, "span", 27);
    i0.ɵɵtext(69, "report_problem");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "span");
    i0.ɵɵtext(71, "R\u00E9clamations");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r2.offers.length);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r2.publishedCount);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r2.draftCount);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r2.closedCount);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(45, !ctx_r2.offers.length ? 45 : 46);
} }
export class EnterpriseDashboardComponent {
    constructor() {
        this.auth = inject(AuthService);
        this.offerSvc = inject(JobOfferService);
        this.msgSvc = inject(MessagingService);
        this.router = inject(Router);
        this.dialog = inject(MatDialog);
        this.loading = true;
        this.offers = [];
        // Search properties
        this.searchQuery = '';
        this.searchResults = [];
        this.showSearch = false;
        this.loadingSearch = false;
    }
    get publishedCount() { return this.offers.filter(o => o.status === 'PUBLISHED').length; }
    get draftCount() { return this.offers.filter(o => o.status === 'DRAFT').length; }
    get closedCount() { return this.offers.filter(o => o.status === 'CLOSED').length; }
    ngOnInit() {
        this.offerSvc.getMyOffers().subscribe({
            next: res => { this.offers = res.data; this.loading = false; },
            error: () => { this.loading = false; }
        });
    }
    // ✨ Search methods
    searchUsers() {
        this.showSearch = true;
        if (!this.searchQuery.trim()) {
            this.searchResults = [];
            this.showSearch = false;
            return;
        }
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.loadingSearch = true;
        this.searchTimeout = setTimeout(() => {
            this.msgSvc.searchUsers(this.searchQuery, 'CANDIDATE', 0, 20).subscribe({
                next: (res) => {
                    this.searchResults = res.data.content;
                    this.loadingSearch = false;
                },
                error: () => {
                    this.loadingSearch = false;
                    this.searchResults = [];
                }
            });
        }, 300);
    }
    startConversation(userId) {
        this.msgSvc.getOrCreateConversation(userId).subscribe({
            next: (res) => {
                this.router.navigate(['/enterprise/messages'], { queryParams: { convId: res.data.id } });
                this.clearSearch();
            },
            error: (err) => {
                console.error('Error starting conversation', err);
            }
        });
    }
    viewProfile(userId) {
        this.router.navigate(['/profile', userId]);
    }
    openUserModal(user) {
        this.dialog.open(UserConnectionModalComponent, {
            width: '760px',
            maxWidth: '95vw',
            data: { userId: user.id }
        });
    }
    clearSearch() {
        this.searchQuery = '';
        this.searchResults = [];
        this.showSearch = false;
    }
    initials(name) {
        return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
    }
    static { this.ɵfac = function EnterpriseDashboardComponent_Factory(t) { return new (t || EnterpriseDashboardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EnterpriseDashboardComponent, selectors: [["app-enterprise-dashboard"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 22, vars: 5, consts: [[1, "dashboard"], [1, "search-banner"], [1, "search-wrapper"], [1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Chercher un candidat...", 3, "ngModelChange", "input", "keyup.escape", "ngModel", "disabled"], [1, "search-results-dropdown"], [1, "welcome-banner"], [1, "welcome-text"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary"], [1, "loading-center"], ["diameter", "24"], [1, "search-result-item"], [1, "result-left", 3, "click"], [1, "avatar"], [1, "user-details"], [1, "name"], [1, "subtitle"], ["class", "location", 4, "ngIf"], [1, "result-actions"], ["mat-icon-button", "", 1, "action-btn", 3, "click", "matTooltip"], ["mat-raised-button", "", "color", "primary", 1, "msg-btn", 3, "click"], [1, "location"], ["diameter", "40"], [1, "stats-row"], [1, "stat-card"], [1, "stat-icon", "bg-primary"], [1, "material-icons-round"], [1, "stat-info"], [1, "stat-label"], [1, "stat-value"], [1, "stat-icon", "bg-success"], [1, "stat-icon", "bg-warning"], [1, "stat-icon", "bg-info"], [1, "card", "section-card"], [1, "section-header"], ["routerLink", "/enterprise/offers", "mat-button", "", 1, "view-all-btn"], [1, "empty-state"], [1, "quick-links-grid"], ["routerLink", "/enterprise/offers", 1, "quick-link-card"], [1, "ql-icon", "bg-primary"], ["routerLink", "/enterprise/messages", 1, "quick-link-card"], [1, "ql-icon", "bg-info"], ["routerLink", "/enterprise/feed", 1, "quick-link-card"], [1, "ql-icon", "bg-success"], ["routerLink", "/enterprise/reclamations", 1, "quick-link-card"], [1, "ql-icon", "bg-warning"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], ["mat-flat-button", "", "routerLink", "/enterprise/offers/new", 1, "btn-primary", 2, "margin-top", "12px"], [1, "offers-list"], [1, "offer-row"], [1, "offer-info"], [1, "offer-title"], [1, "offer-meta"], [1, "offer-badges"], ["mat-icon-button", "", "matTooltip", "Voir les candidatures", 3, "routerLink"]], template: function EnterpriseDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h2");
            i0.ɵɵtext(3, "Trouver des candidats");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-icon", 4);
            i0.ɵɵtext(7, "search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 5);
            i0.ɵɵtwoWayListener("ngModelChange", function EnterpriseDashboardComponent_Template_input_ngModelChange_8_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event); return $event; });
            i0.ɵɵlistener("input", function EnterpriseDashboardComponent_Template_input_input_8_listener() { return ctx.searchUsers(); })("keyup.escape", function EnterpriseDashboardComponent_Template_input_keyup_escape_8_listener() { return ctx.clearSearch(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(9, EnterpriseDashboardComponent_Conditional_9_Template, 3, 1, "div", 6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "div", 7)(11, "div", 8)(12, "h1");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "G\u00E9rez vos offres d'emploi et trouvez les meilleurs talents gr\u00E2ce \u00E0 l'IA.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "a", 9)(17, "mat-icon");
            i0.ɵɵtext(18, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(19, " Publier une offre ");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(20, EnterpriseDashboardComponent_Conditional_20_Template, 2, 0, "div", 10)(21, EnterpriseDashboardComponent_Conditional_21_Template, 72, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.searchQuery);
            i0.ɵɵproperty("disabled", ctx.loadingSearch);
            i0.ɵɵadvance();
            i0.ɵɵconditional(9, ctx.showSearch && ctx.searchQuery && ctx.searchResults.length > 0 ? 9 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("Bonjour, ", ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName, " \uD83D\uDC4B");
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(20, ctx.loading ? 20 : 21);
        } }, dependencies: [CommonModule, i1.NgIf, RouterLink,
            FormsModule, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, MatCardModule,
            MatButtonModule, i3.MatAnchor, i3.MatButton, i3.MatIconAnchor, i3.MatIconButton, MatIconModule, i4.MatIcon, MatProgressSpinnerModule, i5.MatProgressSpinner, MatFormFieldModule, i6.MatFormField, i6.MatPrefix, MatInputModule, i7.MatInput, MatTooltipModule, i8.MatTooltip, MatDialogModule], styles: [".welcome-banner[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #312e81 0%, #4f46e5 60%, #0891b2 100%);\n  border-radius: 16px; padding: 28px 32px;\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 24px; flex-wrap: wrap; gap: 16px;\n  .welcome-text h1 { color: #fff; font-size: 1.5rem; font-weight: 700; margin: 0 0 6px; }\n  .welcome-text p  { color: rgba(255,255,255,.8); margin: 0; font-size: 0.9rem; }\n  .btn-primary { background: rgba(255,255,255,.15)!important; color: #fff!important; backdrop-filter: blur(8px); border-radius: 10px!important; border: 1px solid rgba(255,255,255,.25)!important; }\n}\n\n.loading-center[_ngcontent-%COMP%] { display: flex; justify-content: center; padding: 60px; }\n\n.stats-row[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }\n\n.section-card[_ngcontent-%COMP%] { margin-bottom: 20px; }\n.section-header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; h3 { font-size: 1rem; font-weight: 600; margin: 0; } }\n.view-all-btn[_ngcontent-%COMP%] { color: var(--primary-light)!important; font-size: 0.8rem!important; mat-icon { font-size: 16px!important; } }\n\n.offers-list[_ngcontent-%COMP%] { display: flex; flex-direction: column; gap: 2px; }\n.offer-row[_ngcontent-%COMP%] {\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 8px; border-radius: 8px;\n  &:hover { background: #f8fafc; }\n}\n.offer-info[_ngcontent-%COMP%] { flex: 1; .offer-title { font-weight: 600; font-size: 0.9rem; display: block; } .offer-meta { font-size: 0.78rem; color: var(--text-secondary); } }\n.offer-badges[_ngcontent-%COMP%] { display: flex; gap: 6px; }\n\n.quick-links-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }\n.quick-link-card[_ngcontent-%COMP%] {\n  display: flex; flex-direction: column; align-items: center; gap: 10px;\n  padding: 20px 16px; background: #fff; border: 1px solid var(--border-color);\n  border-radius: 12px; text-decoration: none; color: var(--text-primary);\n  font-size: 0.875rem; font-weight: 500; text-align: center;\n  transition: all 0.2s ease;\n  &:hover { border-color: var(--primary-light); box-shadow: var(--card-shadow-hover); transform: translateY(-2px); }\n  .ql-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; .material-icons-round { font-size: 22px; color: #fff; } }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EnterpriseDashboardComponent, [{
        type: Component,
        args: [{ selector: 'app-enterprise-dashboard', standalone: true, imports: [
                    CommonModule,
                    RouterLink,
                    FormsModule,
                    MatCardModule,
                    MatButtonModule,
                    MatIconModule,
                    MatProgressSpinnerModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatTooltipModule,
                    MatDialogModule
                ], template: "<div class=\"dashboard\">\n  <!-- \u2728 Search Section -->\n  <div class=\"search-banner\">\n    <h2>Trouver des candidats</h2>\n    <div class=\"search-wrapper\">\n      <mat-form-field class=\"search-field\">\n        <mat-icon matPrefix>search</mat-icon>\n        <input matInput\n               placeholder=\"Chercher un candidat...\"\n               [(ngModel)]=\"searchQuery\"\n               (input)=\"searchUsers()\"\n               (keyup.escape)=\"clearSearch()\"\n               [disabled]=\"loadingSearch\" />\n      </mat-form-field>\n\n      <!-- Search Results -->\n      @if (showSearch && searchQuery && searchResults.length > 0) {\n        <div class=\"search-results-dropdown\">\n          @if (loadingSearch) {\n            <div class=\"loading-center\"><mat-spinner diameter=\"24\" /></div>\n          } @else {\n            @for (user of searchResults; track user.id) {\n              <div class=\"search-result-item\">\n                <div class=\"result-left\" (click)=\"openUserModal(user)\">\n                  <div class=\"avatar\">{{ initials(user.fullName) }}</div>\n                  <div class=\"user-details\">\n                    <p class=\"name\">{{ user.fullName }}</p>\n                    <p class=\"subtitle\">{{ user.headline || 'Candidat' }}</p>\n                    <p class=\"location\" *ngIf=\"user.city\">\n                      <mat-icon>location_on</mat-icon> {{ user.city }}\n                    </p>\n                  </div>\n                </div>\n                <div class=\"result-actions\">\n                  <button mat-icon-button\n                          (click)=\"openUserModal(user)\"\n                          [matTooltip]=\"'Voir le profil'\"\n                          class=\"action-btn\">\n                    <mat-icon>visibility</mat-icon>\n                  </button>\n                  <button mat-raised-button\n                          (click)=\"openUserModal(user)\"\n                          color=\"primary\"\n                          class=\"msg-btn\">\n                    <mat-icon>{{ user.canMessage ? 'mail' : 'person_add' }}</mat-icon>\n                    {{ user.canMessage ? 'Message' : 'Contacter' }}\n                  </button>\n                </div>\n              </div>\n            }\n          }\n        </div>\n      }\n    </div>\n  </div>\n\n  <!-- Welcome -->\n  <div class=\"welcome-banner\">\n    <div class=\"welcome-text\">\n      <h1>Bonjour, {{ auth.currentUser?.fullName }} \uD83D\uDC4B</h1>\n      <p>G\u00E9rez vos offres d'emploi et trouvez les meilleurs talents gr\u00E2ce \u00E0 l'IA.</p>\n    </div>\n    <a mat-flat-button routerLink=\"/enterprise/offers/new\" class=\"btn-primary\">\n      <mat-icon>add</mat-icon> Publier une offre\n    </a>\n  </div>\n\n  @if (loading) {\n    <div class=\"loading-center\"><mat-spinner diameter=\"40\" /></div>\n  } @else {\n\n    <!-- Stats row -->\n    <div class=\"stats-row\">\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-primary\"><span class=\"material-icons-round\">work</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">Total offres</p>\n          <h3 class=\"stat-value\">{{ offers.length }}</h3>\n        </div>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-success\"><span class=\"material-icons-round\">public</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">Publi\u00E9es</p>\n          <h3 class=\"stat-value\">{{ publishedCount }}</h3>\n        </div>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-warning\"><span class=\"material-icons-round\">drafts</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">Brouillons</p>\n          <h3 class=\"stat-value\">{{ draftCount }}</h3>\n        </div>\n      </div>\n      <div class=\"stat-card\">\n        <div class=\"stat-icon bg-info\"><span class=\"material-icons-round\">archive</span></div>\n        <div class=\"stat-info\">\n          <p class=\"stat-label\">Ferm\u00E9es</p>\n          <h3 class=\"stat-value\">{{ closedCount }}</h3>\n        </div>\n      </div>\n    </div>\n\n    <!-- Recent offers -->\n    <div class=\"card section-card\">\n      <div class=\"section-header\">\n        <h3>Offres r\u00E9centes</h3>\n        <a routerLink=\"/enterprise/offers\" mat-button class=\"view-all-btn\">\n          Voir toutes <mat-icon>arrow_forward</mat-icon>\n        </a>\n      </div>\n\n      @if (!offers.length) {\n        <div class=\"empty-state\">\n          <span class=\"material-icons-round empty-icon\">work_outline</span>\n          <p class=\"empty-title\">Aucune offre cr\u00E9\u00E9e</p>\n          <p class=\"empty-desc\">Publiez votre premi\u00E8re offre d'emploi</p>\n          <a mat-flat-button routerLink=\"/enterprise/offers/new\" class=\"btn-primary\" style=\"margin-top:12px\">\n            <mat-icon>add</mat-icon> Cr\u00E9er une offre\n          </a>\n        </div>\n      } @else {\n        <div class=\"offers-list\">\n          @for (offer of offers.slice(0, 5); track offer.id) {\n            <div class=\"offer-row\">\n              <div class=\"offer-info\">\n                <span class=\"offer-title\">{{ offer.title }}</span>\n                <span class=\"offer-meta\">{{ offer.location || 'Non pr\u00E9cis\u00E9' }} \u2022 {{ offer.contractType }}</span>\n              </div>\n              <div class=\"offer-badges\">\n                <span class=\"chip {{ offer.status === 'PUBLISHED' ? 'chip-success' : offer.status === 'DRAFT' ? 'chip-warning' : 'chip-gray' }}\">\n                  {{ offer.status === 'PUBLISHED' ? 'Publi\u00E9e' : offer.status === 'DRAFT' ? 'Brouillon' : 'Ferm\u00E9e' }}\n                </span>\n              </div>\n              <a mat-icon-button [routerLink]=\"['/enterprise/offers', offer.id, 'applications']\" matTooltip=\"Voir les candidatures\">\n                <mat-icon>people</mat-icon>\n              </a>\n            </div>\n          }\n        </div>\n      }\n    </div>\n\n    <!-- Quick links -->\n    <div class=\"quick-links-grid\">\n      <a routerLink=\"/enterprise/offers\" class=\"quick-link-card\">\n        <div class=\"ql-icon bg-primary\"><span class=\"material-icons-round\">work_outline</span></div>\n        <span>G\u00E9rer les offres</span>\n      </a>\n      <a routerLink=\"/enterprise/messages\" class=\"quick-link-card\">\n        <div class=\"ql-icon bg-info\"><span class=\"material-icons-round\">chat_bubble_outline</span></div>\n        <span>Messagerie</span>\n      </a>\n      <a routerLink=\"/enterprise/feed\" class=\"quick-link-card\">\n        <div class=\"ql-icon bg-success\"><span class=\"material-icons-round\">newspaper</span></div>\n        <span>Actualit\u00E9s</span>\n      </a>\n      <a routerLink=\"/enterprise/reclamations\" class=\"quick-link-card\">\n        <div class=\"ql-icon bg-warning\"><span class=\"material-icons-round\">report_problem</span></div>\n        <span>R\u00E9clamations</span>\n      </a>\n    </div>\n  }\n</div>\n", styles: [".welcome-banner {\n  background: linear-gradient(135deg, #312e81 0%, #4f46e5 60%, #0891b2 100%);\n  border-radius: 16px; padding: 28px 32px;\n  display: flex; align-items: center; justify-content: space-between;\n  margin-bottom: 24px; flex-wrap: wrap; gap: 16px;\n  .welcome-text h1 { color: #fff; font-size: 1.5rem; font-weight: 700; margin: 0 0 6px; }\n  .welcome-text p  { color: rgba(255,255,255,.8); margin: 0; font-size: 0.9rem; }\n  .btn-primary { background: rgba(255,255,255,.15)!important; color: #fff!important; backdrop-filter: blur(8px); border-radius: 10px!important; border: 1px solid rgba(255,255,255,.25)!important; }\n}\n\n.loading-center { display: flex; justify-content: center; padding: 60px; }\n\n.stats-row { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }\n\n.section-card { margin-bottom: 20px; }\n.section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; h3 { font-size: 1rem; font-weight: 600; margin: 0; } }\n.view-all-btn { color: var(--primary-light)!important; font-size: 0.8rem!important; mat-icon { font-size: 16px!important; } }\n\n.offers-list { display: flex; flex-direction: column; gap: 2px; }\n.offer-row {\n  display: flex; align-items: center; gap: 12px;\n  padding: 12px 8px; border-radius: 8px;\n  &:hover { background: #f8fafc; }\n}\n.offer-info { flex: 1; .offer-title { font-weight: 600; font-size: 0.9rem; display: block; } .offer-meta { font-size: 0.78rem; color: var(--text-secondary); } }\n.offer-badges { display: flex; gap: 6px; }\n\n.quick-links-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 12px; }\n.quick-link-card {\n  display: flex; flex-direction: column; align-items: center; gap: 10px;\n  padding: 20px 16px; background: #fff; border: 1px solid var(--border-color);\n  border-radius: 12px; text-decoration: none; color: var(--text-primary);\n  font-size: 0.875rem; font-weight: 500; text-align: center;\n  transition: all 0.2s ease;\n  &:hover { border-color: var(--primary-light); box-shadow: var(--card-shadow-hover); transform: translateY(-2px); }\n  .ql-icon { width: 44px; height: 44px; border-radius: 12px; display: flex; align-items: center; justify-content: center; .material-icons-round { font-size: 22px; color: #fff; } }\n}\n"] }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EnterpriseDashboardComponent, { className: "EnterpriseDashboardComponent", filePath: "app\\features\\enterprise\\dashboard\\enterprise-dashboard.component.ts", lineNumber: 38 }); })();
//# sourceMappingURL=enterprise-dashboard.component.js.map