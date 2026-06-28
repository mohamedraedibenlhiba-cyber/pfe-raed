import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class ApplicationService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/applications`;
    }
    apply(req) {
        return this.http.post(this.API, req);
    }
    getMyApplications() {
        return this.http.get(`${this.API}/my`);
    }
    getByOffer(offerId, page = 0, size = 20) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/offer/${offerId}`, { params });
    }
    getRanked(offerId) {
        return this.http.get(`${this.API}/offer/${offerId}/ranked`);
    }
    getRankedWithDetails(offerId) {
        return this.http.get(`${this.API}/offer/${offerId}/ranked/with-details`);
    }
    updateStatus(id, status) {
        return this.http.patch(`${this.API}/${id}/status`, { status });
    }
    addNotes(id, recruiterNotes, recruiterRating) {
        return this.http.patch(`${this.API}/${id}/notes`, { note: recruiterNotes, rating: recruiterRating });
    }
    getById(id) {
        return this.http.get(`${this.API}/${id}`);
    }
    getApplicationCv(id) {
        return this.http.get(`${this.API}/${id}/cv`, { responseType: 'blob' });
    }
    static { this.ɵfac = function ApplicationService_Factory(t) { return new (t || ApplicationService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApplicationService, factory: ApplicationService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=application.service.js.map