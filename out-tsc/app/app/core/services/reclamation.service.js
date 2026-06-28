import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class ReclamationService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/reclamations`;
    }
    submit(req) {
        return this.http.post(this.API, req);
    }
    getMine() {
        return this.http.get(`${this.API}/my`);
    }
    getById(id) {
        return this.http.get(`${this.API}/${id}`);
    }
    // Admin
    getAll(page = 0, size = 15) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(this.API, { params });
    }
    getByStatus(status, page = 0, size = 15) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/status/${status}`, { params });
    }
    respond(id, req) {
        return this.http.patch(`${this.API}/${id}/respond`, req);
    }
    static { this.ɵfac = function ReclamationService_Factory(t) { return new (t || ReclamationService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ReclamationService, factory: ReclamationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReclamationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=reclamation.service.js.map