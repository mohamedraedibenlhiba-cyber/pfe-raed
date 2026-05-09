import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class JobOfferService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/offers`;
    }
    searchPublic(title, location, contractType, page = 0, size = 10) {
        let params = new HttpParams().set('page', page).set('size', size);
        if (title)
            params = params.set('title', title);
        if (location)
            params = params.set('location', location);
        if (contractType)
            params = params.set('contractType', contractType);
        return this.http.get(`${this.API}/public`, { params });
    }
    getByToken(token) {
        return this.http.get(`${this.API}/public/token/${token}`);
    }
    getMyOffers() {
        return this.http.get(`${this.API}/mine`);
    }
    getById(id) {
        return this.http.get(`${this.API}/${id}`);
    }
    create(req) {
        return this.http.post(this.API, req);
    }
    update(id, req) {
        return this.http.put(`${this.API}/${id}`, req);
    }
    publish(id) {
        return this.http.post(`${this.API}/${id}/publish`, {});
    }
    close(id) {
        return this.http.post(`${this.API}/${id}/close`, {});
    }
    delete(id) {
        return this.http.delete(`${this.API}/${id}`);
    }
    exportExcel(id) {
        return this.http.get(`${this.API}/${id}/export/excel`, { responseType: 'blob' });
    }
    exportWord(id) {
        return this.http.get(`${this.API}/${id}/export/word`, { responseType: 'blob' });
    }
    static { this.ɵfac = function JobOfferService_Factory(t) { return new (t || JobOfferService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: JobOfferService, factory: JobOfferService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JobOfferService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=job-offer.service.js.map