import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Conversation, Message, MessageRequest, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class MessagingService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/messages`;

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
}
