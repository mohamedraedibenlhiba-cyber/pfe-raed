import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class ConnectionRequestService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/connection-requests`;
        this.requestChangesSubject = new Subject();
        this.requestChanges$ = this.requestChangesSubject.asObservable();
    }
    /**
     * Send a connection request to a user
     */
    sendRequest(userId, message) {
        const req = { receiverId: userId, message };
        return this.http.post(`${this.API}`, req).pipe(tap(() => this.notifyRequestChanges()));
    }
    /**
     * Accept a pending connection request
     */
    acceptRequest(requestId) {
        return this.http.put(`${this.API}/${requestId}/accept`, {}).pipe(tap(() => this.notifyRequestChanges()));
    }
    /**
     * Reject a pending connection request
     */
    rejectRequest(requestId) {
        return this.http.put(`${this.API}/${requestId}/reject`, {}).pipe(tap(() => this.notifyRequestChanges()));
    }
    /**
     * Cancel a sent connection request
     */
    cancelRequest(requestId) {
        return this.http.delete(`${this.API}/${requestId}`).pipe(tap(() => this.notifyRequestChanges()));
    }
    /**
     * Get pending requests received by current user
     */
    getPendingRequests(page = 0, size = 10) {
        return this.http.get(`${this.API}/pending?page=${page}&size=${size}`);
    }
    /**
     * Get sent requests from current user
     */
    getSentRequests(page = 0, size = 10) {
        return this.http.get(`${this.API}/sent?page=${page}&size=${size}`);
    }
    /**
     * Get connection request status with a specific user
     */
    getRequestStatus(userId) {
        return this.http.get(`${this.API}/${userId}/status`);
    }
    /**
     * Get pending request count (for notification badge)
     */
    getPendingCount() {
        return this.http.get(`${this.API}/pending/count`);
    }
    /**
     * Get all accepted connections for current user
     */
    getAcceptedConnections() {
        return this.http.get(`${this.API}/accepted`);
    }
    notifyRequestChanges() {
        this.requestChangesSubject.next();
    }
    static { this.ɵfac = function ConnectionRequestService_Factory(t) { return new (t || ConnectionRequestService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConnectionRequestService, factory: ConnectionRequestService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConnectionRequestService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=connection-request.service.js.map