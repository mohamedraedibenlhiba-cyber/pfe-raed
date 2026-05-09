import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { jwtDecode } from 'jwt-decode';
import * as i0 from "@angular/core";
export class AuthService {
    constructor() {
        this.http = inject(HttpClient);
        this.router = inject(Router);
        this.API = `${environment.apiUrl}/auth`;
        this.TOKEN_KEY = 'jwt_token';
        this.USER_KEY = 'current_user';
        this._currentUser$ = new BehaviorSubject(this.loadUser());
        this.currentUser$ = this._currentUser$.asObservable();
    }
    // ─── HTTP calls ──────────────────────────────────────────────────────────────
    login(req) {
        return this.http.post(`${this.API}/login`, {
            ...req,
            email: this.normalizeEmail(req.email)
        }).pipe(tap(res => { if (res.success && res.data)
            this.storeSession(res.data); }));
    }
    registerEnterprise(req) {
        return this.http.post(`${this.API}/register/enterprise`, {
            ...req,
            email: this.normalizeEmail(req.email)
        }).pipe(tap(res => { if (res.success && res.data)
            this.storeSession(res.data); }));
    }
    registerCandidate(req) {
        return this.http.post(`${this.API}/register/candidate`, {
            ...req,
            email: this.normalizeEmail(req.email)
        }).pipe(tap(res => { if (res.success && res.data)
            this.storeSession(res.data); }));
    }
    changePassword(changePasswordData) {
        return this.http.post(`${this.API}/change-password`, changePasswordData);
    }
    forgotPassword(email) {
        return this.http.post(`${this.API}/forgot-password`, { email });
    }
    resetPassword(token, newPassword) {
        return this.http.post(`${this.API}/reset-password`, { token, newPassword });
    }
    validateResetToken(token) {
        return this.http.get(`${this.API}/validate-reset-token/${token}`);
    }
    // ─── Session helpers ─────────────────────────────────────────────────────────
    storeSession(user) {
        localStorage.setItem(this.TOKEN_KEY, user.token);
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this._currentUser$.next(user);
    }
    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        this._currentUser$.next(null);
        this.router.navigate(['/auth/login']);
    }
    /** Clear session without navigation (used when access is denied during login). */
    clearSession() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.USER_KEY);
        this._currentUser$.next(null);
    }
    getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }
    get currentUser() {
        return this._currentUser$.value;
    }
    get isLoggedIn() {
        const token = this.getToken();
        if (!token)
            return false;
        try {
            const decoded = jwtDecode(token);
            return Date.now() < decoded.exp * 1000;
        }
        catch {
            return false;
        }
    }
    get isAdmin() { return this.currentUser?.role === 'ROLE_ADMIN'; }
    get isEnterprise() { return this.currentUser?.role === 'ROLE_ENTERPRISE'; }
    get isCandidate() { return this.currentUser?.role === 'ROLE_CANDIDATE'; }
    redirectToDashboard() {
        const role = this.currentUser?.role;
        if (role === 'ROLE_ADMIN')
            this.router.navigate(['/admin/dashboard']);
        else if (role === 'ROLE_ENTERPRISE')
            this.router.navigate(['/enterprise/dashboard']);
        else if (role === 'ROLE_CANDIDATE')
            this.router.navigate(['/candidate/dashboard']);
    }
    loadUser() {
        try {
            const raw = localStorage.getItem(this.USER_KEY);
            return raw ? JSON.parse(raw) : null;
        }
        catch {
            return null;
        }
    }
    normalizeEmail(email) {
        return email.trim().toLowerCase();
    }
    static { this.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=auth.service.js.map