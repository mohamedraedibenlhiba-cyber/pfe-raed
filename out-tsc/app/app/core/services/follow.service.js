import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class FollowService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/follows`;
    }
    follow(userId) {
        return this.http.post(`${this.API}/${userId}`, {});
    }
    unfollow(userId) {
        return this.http.delete(`${this.API}/${userId}`);
    }
    getStatus(userId) {
        return this.http.get(`${this.API}/${userId}/status`);
    }
    getFollowers(userId) {
        return this.http.get(`${this.API}/${userId}/followers`);
    }
    getFollowing(userId) {
        return this.http.get(`${this.API}/${userId}/following`);
    }
    static { this.ɵfac = function FollowService_Factory(t) { return new (t || FollowService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FollowService, factory: FollowService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FollowService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=follow.service.js.map