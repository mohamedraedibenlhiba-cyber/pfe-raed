import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Conversation, Message, MessageRequest, Page, UserSearchResponse } from '../models/models';

interface CanMessageResponse {
  canMessage: boolean;
  reason: string;
}

@Injectable({ providedIn: 'root' })
export class MessagingService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/messages`;
  private readonly usersAPI = `${environment.apiUrl}/users`;

  send(req: MessageRequest): Observable<ApiResponse<Message>> {
    return this.http.post<ApiResponse<Message>>(this.API, req);
  }

  getConversations(): Observable<ApiResponse<Conversation[]>> {
    return this.http.get<ApiResponse<Conversation[]>>(`${this.API}/conversations`);
  }

  getMessages(convId: number, page = 0, size = 30): Observable<ApiResponse<Page<Message>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Message>>>(`${this.API}/conversations/${convId}/messages`, { params });
  }

  markRead(convId: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/conversations/${convId}/read`, {});
  }

  getUnreadCount(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(`${this.API}/unread/count`);
  }

  // ✨ ──────────────────────────────────────────────────────────────
  // ✨ Recherche d'utilisateurs et conversation
  // ✨ ──────────────────────────────────────────────────────────────

  /**
   * Cherche des utilisateurs pour la messagerie
   */
  searchUsers(query: string, role?: string, page = 0, size = 20): Observable<ApiResponse<Page<UserSearchResponse>>> {
    let params = new HttpParams()
      .set('q', query)
      .set('page', page.toString())
      .set('size', size.toString());

    if (role) {
      params = params.set('role', role);
    }

    return this.http.get<ApiResponse<Page<UserSearchResponse>>>(`${this.usersAPI}/search`, { params });
  }

  /**
   * Vérifie si je peux envoyer un message à cet utilisateur
   */
  canMessage(recipientId: number): Observable<ApiResponse<CanMessageResponse>> {
    return this.http.get<ApiResponse<CanMessageResponse>>(`${this.API}/can-message/${recipientId}`);
  }

  /**
   * Obtient ou crée une conversation avec un utilisateur
   */
  getOrCreateConversation(recipientId: number): Observable<ApiResponse<Conversation>> {
    return this.http.get<ApiResponse<Conversation>>(`${this.API}/conversation/${recipientId}`);
  }
}

