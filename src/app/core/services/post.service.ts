import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Comment, Page, Post } from '../models/models';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/posts`;

  getFeed(page = 0, size = 10): Observable<ApiResponse<Page<Post>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Post>>>(`${this.API}/feed`, { params });
  }

  getById(id: number): Observable<ApiResponse<Post>> {
    return this.http.get<ApiResponse<Post>>(`${this.API}/${id}`);
  }

  getByUser(userId: number, page = 0, size = 10): Observable<ApiResponse<Page<Post>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Post>>>(`${this.API}/user/${userId}`, { params });
  }

  create(content: string, mediaUrl?: string, mediaType?: string): Observable<ApiResponse<Post>> {
    return this.http.post<ApiResponse<Post>>(this.API, { content, mediaUrl, mediaType });
  }

  update(id: number, content: string): Observable<ApiResponse<Post>> {
    return this.http.put<ApiResponse<Post>>(`${this.API}/${id}`, { content });
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${id}`);
  }

  getComments(postId: number): Observable<ApiResponse<Comment[]>> {
    return this.http.get<ApiResponse<Comment[]>>(`${this.API}/${postId}/comments`);
  }

  addComment(postId: number, content: string, parentCommentId?: number): Observable<ApiResponse<Comment>> {
    return this.http.post<ApiResponse<Comment>>(`${this.API}/comments`, { postId, content, parentCommentId });
  }

  deleteComment(commentId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/comments/${commentId}`);
  }

  react(postId: number, type: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/${postId}/react`, { type });
  }

  removeReaction(postId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${postId}/react`);
  }

  // ✨ Alias for public user posts (same as getByUser)
  getPublicUserPosts(userId: number, page = 0, size = 10): Observable<ApiResponse<Page<Post>>> {
    return this.getByUser(userId, page, size);
  }
}
