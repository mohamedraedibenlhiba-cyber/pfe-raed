import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class AdminService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/admin`;
    }
    getDashboard() {
        return this.http.get(`${this.API}/dashboard`);
    }
    getUsers(page = 0, size = 20) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/users`, { params });
    }
    getUserById(id) {
        return this.http.get(`${this.API}/users/${id}`);
    }
    toggleUserActive(id) {
        return this.http.patch(`${this.API}/users/${id}/toggle-active`, {});
    }
    deleteUser(id) {
        return this.http.delete(`${this.API}/users/${id}`);
    }
    getOffers(status, page = 0, size = 20) {
        let params = new HttpParams().set('page', page).set('size', size);
        if (status)
            params = params.set('status', status);
        return this.http.get(`${this.API}/offers`, { params });
    }
    static { this.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AdminService, factory: AdminService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=admin.service.js.map