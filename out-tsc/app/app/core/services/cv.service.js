import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class CvService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/cvs`;
    }
    upload(file) {
        const form = new FormData();
        form.append('file', file);
        return this.http.post(`${this.API}/upload`, form);
    }
    getMyCvs() {
        return this.http.get(this.API);
    }
    setDefault(id) {
        return this.http.patch(`${this.API}/${id}/default`, {});
    }
    delete(id) {
        return this.http.delete(`${this.API}/${id}`);
    }
    getContent(id) {
        return this.http.get(`${this.API}/${id}/view`, { responseType: 'blob' });
    }
    static { this.ɵfac = function CvService_Factory(t) { return new (t || CvService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CvService, factory: CvService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CvService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=cv.service.js.map