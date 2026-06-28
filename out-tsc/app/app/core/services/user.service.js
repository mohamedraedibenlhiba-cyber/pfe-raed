import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class UserService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/users`;
        this.OFFERS_API = `${environment.apiUrl}/offers`;
    }
    getProfile() {
        return this.http.get(`${this.API}/me`);
    }
    updateProfile(req) {
        return this.http.put(`${this.API}/me`, req);
    }
    uploadProfilePicture(file) {
        const form = new FormData();
        form.append('file', file);
        return this.http.post(`${this.API}/me/profile-picture`, form);
    }
    // ✨ Public Profile & Connection Status
    getPublicProfile(userId) {
        return this.http.get(`${this.API}/${userId}`);
    }
    getConnectionStatus(userId) {
        return this.http.get(`${this.API}/${userId}/connection-status`);
    }
    // ✨ USER SEARCH & DISCOVERY
    /**
     * Search users with optional filters
     * @param query Search query (name, email, skills, company)
     * @param roles Array of roles to filter by ['CANDIDATE', 'ENTERPRISE']
     * @param page Page number (0-indexed)
     * @param size Page size
     */
    searchUsers(query, roles, page = 0, size = 20) {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());
        if (query) {
            params = params.set('q', query);
        }
        if (roles && roles.length > 0) {
            params = params.set('role', roles.join(','));
        }
        return this.http.get(`${this.API}/search`, { params });
    }
    // ✨ PUBLIC JOB OFFERS SEARCH
    /**
     * Get public job offers with pagination
     * @param page Page number (0-indexed)
     * @param size Page size
     * @param title Filter by title
     * @param location Filter by location
     * @param contractType Filter by contract type
     */
    getPublicOffers(page = 0, size = 20, title, location, contractType) {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());
        if (title) {
            params = params.set('title', title);
        }
        if (location) {
            params = params.set('location', location);
        }
        if (contractType) {
            params = params.set('contractType', contractType);
        }
        return this.http.get(`${this.OFFERS_API}/public`, { params });
    }
    static { this.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UserService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=user.service.js.map