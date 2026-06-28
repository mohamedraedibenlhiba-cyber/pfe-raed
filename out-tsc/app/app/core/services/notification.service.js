import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class NotificationService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/notifications`;
    }
    getAll(page = 0, size = 15) {
        const params = new HttpParams().set('page', page).set('size', size);
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
    static { this.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=notification.service.js.map