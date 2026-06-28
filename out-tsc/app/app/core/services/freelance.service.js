import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class FreelanceService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/freelance`;
    }
    // ── Projets ───────────────────────────────────────────────────────────────
    createProject(req) {
        return this.http.post(`${this.API}/projects`, req);
    }
    updateProject(id, req) {
        return this.http.put(`${this.API}/projects/${id}`, req);
    }
    deleteProject(id) {
        return this.http.delete(`${this.API}/projects/${id}`);
    }
    search(title, skills, page = 0, size = 12) {
        let params = new HttpParams().set('page', page).set('size', size);
        if (title)
            params = params.set('title', title);
        if (skills)
            params = params.set('skills', skills);
        return this.http.get(`${this.API}/projects`, { params });
    }
    getById(id) {
        return this.http.get(`${this.API}/projects/${id}`);
    }
    getMyProjects(page = 0, size = 12) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/projects/mine`, { params });
    }
    // ── Offres (bids) ─────────────────────────────────────────────────────────
    submitBid(projectId, req) {
        return this.http.post(`${this.API}/projects/${projectId}/bids`, req);
    }
    updateBid(bidId, req) {
        return this.http.put(`${this.API}/bids/${bidId}`, req);
    }
    withdrawBid(bidId) {
        return this.http.post(`${this.API}/bids/${bidId}/withdraw`, {});
    }
    negotiate(bidId, req) {
        return this.http.patch(`${this.API}/bids/${bidId}/negotiate`, req);
    }
    getProjectBids(projectId) {
        return this.http.get(`${this.API}/projects/${projectId}/bids`);
    }
    getMyBids() {
        return this.http.get(`${this.API}/bids/mine`);
    }
    static { this.ɵfac = function FreelanceService_Factory(t) { return new (t || FreelanceService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FreelanceService, factory: FreelanceService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FreelanceService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=freelance.service.js.map