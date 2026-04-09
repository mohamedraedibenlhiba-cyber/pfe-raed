import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Channel, ChannelMember, ChannelMessage, ChannelMessageRequest, ChannelRequest, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ChannelService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/channels`;

  // ── Channels ──────────────────────────────────────────────────────────────
  create(req: ChannelRequest): Observable<ApiResponse<Channel>> {
    return this.http.post<ApiResponse<Channel>>(this.API, req);
  }

  update(id: number, req: ChannelRequest): Observable<ApiResponse<Channel>> {
    return this.http.put<ApiResponse<Channel>>(`${this.API}/${id}`, req);
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${id}`);
  }

  search(q?: string, page = 0, size = 20): Observable<ApiResponse<Page<Channel>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (q) params = params.set('q', q);
    return this.http.get<ApiResponse<Page<Channel>>>(this.API, { params });
  }

  getMyChannels(page = 0, size = 20): Observable<ApiResponse<Page<Channel>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Channel>>>(`${this.API}/mine`, { params });
  }

  getById(id: number): Observable<ApiResponse<Channel>> {
    return this.http.get<ApiResponse<Channel>>(`${this.API}/${id}`);
  }

  // ── Membership ────────────────────────────────────────────────────────────
  join(id: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/${id}/join`, {});
  }

  leave(id: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/${id}/leave`, {});
  }

  getMembers(id: number): Observable<ApiResponse<ChannelMember[]>> {
    return this.http.get<ApiResponse<ChannelMember[]>>(`${this.API}/${id}/members`);
  }

  // ── Messages ──────────────────────────────────────────────────────────────
  sendMessage(id: number, req: ChannelMessageRequest): Observable<ApiResponse<ChannelMessage>> {
    return this.http.post<ApiResponse<ChannelMessage>>(`${this.API}/${id}/messages`, req);
  }

  getMessages(id: number, page = 0, size = 50): Observable<ApiResponse<Page<ChannelMessage>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<ChannelMessage>>>(`${this.API}/${id}/messages`, { params });
  }

  deleteMessage(messageId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/messages/${messageId}`);
  }

  // ── Réactions ─────────────────────────────────────────────────────────────
  react(messageId: number, type: string): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/messages/${messageId}/react`, { type });
  }

  removeReaction(messageId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/messages/${messageId}/react`);
  }
}
