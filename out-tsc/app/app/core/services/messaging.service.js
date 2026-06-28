import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class MessagingService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/messages`;
        this.usersAPI = `${environment.apiUrl}/users`;
        // Observable pour les utilisateurs en train de taper
        this.typingSubject = new Subject();
        this.typing$ = this.typingSubject.asObservable();
    }
    send(req) {
        return this.http.post(this.API, req);
    }
    getConversations() {
        return this.http.get(`${this.API}/conversations`);
    }
    getMessages(convId, page = 0, size = 30) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/conversations/${convId}/messages`, { params });
    }
    markRead(convId) {
        return this.http.post(`${this.API}/conversations/${convId}/read`, {});
    }
    getUnreadCount() {
        return this.http.get(`${this.API}/unread/count`);
    }
    searchUsers(query, role, page = 0, size = 20) {
        let params = new HttpParams()
            .set('q', query)
            .set('page', page.toString())
            .set('size', size.toString());
        if (role) {
            params = params.set('role', role);
        }
        return this.http.get(`${this.usersAPI}/search`, { params });
    }
    canMessage(recipientId) {
        return this.http.get(`${this.API}/can-message/${recipientId}`);
    }
    getOrCreateConversation(recipientId) {
        return this.http.get(`${this.API}/conversation/${recipientId}`);
    }
    // ✨ RÉACTIONS
    addReaction(messageId, reactionType) {
        return this.http.post(`${this.API}/${messageId}/reactions`, { reactionType });
    }
    removeReaction(messageId, reactionType) {
        return this.http.delete(`${this.API}/${messageId}/reactions/${reactionType.toUpperCase()}`);
    }
    // ✨ DÉTAILS DU MESSAGE
    getMessageDetail(messageId) {
        return this.http.get(`${this.API}/${messageId}/detail`);
    }
    // ✨ SUPPRESSION (SOFT DELETE)
    deleteMessage(messageId) {
        return this.http.delete(`${this.API}/${messageId}`);
    }
    // ✨ ÉDITION
    editMessage(messageId, newContent) {
        return this.http.put(`${this.API}/${messageId}`, { content: newContent });
    }
    // ✨ UPLOAD D'ATTACHMENTS
    uploadAttachment(file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.API}/upload-attachment`, formData);
    }
    // ✨ TYPING INDICATORS
    notifyTyping(conversationId) {
        return this.http.post(`${this.API}/conversations/${conversationId}/typing`, {});
    }
    notifyStoppedTyping(conversationId) {
        return this.http.post(`${this.API}/conversations/${conversationId}/stop-typing`, {});
    }
    // Méthode pour simuler la réception de typing indicators (à adapter avec WebSocket si besoin)
    updateTypingUsers(users) {
        this.typingSubject.next(users);
    }
    getTypingUsers$() {
        return this.typing$;
    }
    static { this.ɵfac = function MessagingService_Factory(t) { return new (t || MessagingService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MessagingService, factory: MessagingService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MessagingService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=messaging.service.js.map