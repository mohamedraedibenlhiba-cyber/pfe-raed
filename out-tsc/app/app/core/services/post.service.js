import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class PostService {
    constructor() {
        this.http = inject(HttpClient);
        this.API = `${environment.apiUrl}/posts`;
    }
    getFeed(page = 0, size = 10) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/feed`, { params });
    }
    getById(id) {
        return this.http.get(`${this.API}/${id}`);
    }
    getByUser(userId, page = 0, size = 10) {
        const params = new HttpParams().set('page', page).set('size', size);
        return this.http.get(`${this.API}/user/${userId}`, { params });
    }
    create(content, mediaUrl, mediaType) {
        return this.http.post(this.API, { content, mediaUrl, mediaType });
    }
    update(id, content) {
        return this.http.put(`${this.API}/${id}`, { content });
    }
    delete(id) {
        return this.http.delete(`${this.API}/${id}`);
    }
    getComments(postId) {
        return this.http.get(`${this.API}/${postId}/comments`);
    }
    addComment(postId, content, parentCommentId) {
        return this.http.post(`${this.API}/comments`, { postId, content, parentCommentId });
    }
    deleteComment(commentId) {
        return this.http.delete(`${this.API}/comments/${commentId}`);
    }
    react(postId, type) {
        return this.http.post(`${this.API}/${postId}/react`, { type });
    }
    removeReaction(postId) {
        return this.http.delete(`${this.API}/${postId}/react`);
    }
    // ✨ Attachements
    uploadPostAttachment(postId, file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.API}/${postId}/attachment`, formData);
    }
    removePostAttachment(postId) {
        return this.http.delete(`${this.API}/${postId}/attachment`);
    }
    uploadCommentAttachment(commentId, file) {
        const formData = new FormData();
        formData.append('file', file);
        return this.http.post(`${this.API}/comments/${commentId}/attachment`, formData);
    }
    removeCommentAttachment(commentId) {
        return this.http.delete(`${this.API}/comments/${commentId}/attachment`);
    }
    getPublicUserPosts(userId, page = 0, size = 10) {
        return this.getByUser(userId, page, size);
    }
    static { this.ɵfac = function PostService_Factory(t) { return new (t || PostService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=post.service.js.map