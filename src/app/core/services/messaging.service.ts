import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ApiResponse, Conversation, Message, MessageRequest, Page, UserSearchResponse,
  MessageDetail, ReactionType, MessageAttachment, AttachmentType
} from '../models/models';

interface CanMessageResponse {
  canMessage: boolean;
  reason: string;
}

interface TypingUser {
  userId: number;
  userName: string;
}

@Injectable({ providedIn: 'root' })
export class MessagingService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/messages`;
  private readonly usersAPI = `${environment.apiUrl}/users`;

  // Observable pour les utilisateurs en train de taper
  private typingSubject = new Subject<TypingUser[]>();
  public typing$ = this.typingSubject.asObservable();

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

  canMessage(recipientId: number): Observable<ApiResponse<CanMessageResponse>> {
    return this.http.get<ApiResponse<CanMessageResponse>>(`${this.API}/can-message/${recipientId}`);
  }

  getOrCreateConversation(recipientId: number): Observable<ApiResponse<Conversation>> {
    return this.http.get<ApiResponse<Conversation>>(`${this.API}/conversation/${recipientId}`);
  }

  // ✨ RÉACTIONS
  addReaction(messageId: number, reactionType: ReactionType): Observable<ApiResponse<any>> {
    return this.http.post<ApiResponse<any>>(
      `${this.API}/${messageId}/reactions`,
      { reactionType }
    );
  }

  removeReaction(messageId: number, reactionType: ReactionType): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(
      `${this.API}/${messageId}/reactions/${reactionType.toUpperCase()}`
    );
  }

  // ✨ DÉTAILS DU MESSAGE
  getMessageDetail(messageId: number): Observable<ApiResponse<MessageDetail>> {
    return this.http.get<ApiResponse<MessageDetail>>(`${this.API}/${messageId}/detail`);
  }

  // ✨ SUPPRESSION (SOFT DELETE)
  deleteMessage(messageId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${messageId}`);
  }

  // ✨ ÉDITION
  editMessage(messageId: number, newContent: string): Observable<ApiResponse<Message>> {
    return this.http.put<ApiResponse<Message>>(
      `${this.API}/${messageId}`,
      { content: newContent }
    );
  }

  // ✨ UPLOAD D'ATTACHMENTS
  uploadAttachment(file: File): Observable<ApiResponse<MessageAttachment>> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<ApiResponse<MessageAttachment>>(
      `${this.API}/upload-attachment`,
      formData
    );
  }

  // ✨ TYPING INDICATORS
  notifyTyping(conversationId: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.API}/conversations/${conversationId}/typing`,
      {}
    );
  }

  notifyStoppedTyping(conversationId: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(
      `${this.API}/conversations/${conversationId}/stop-typing`,
      {}
    );
  }

  // Méthode pour simuler la réception de typing indicators (à adapter avec WebSocket si besoin)
  updateTypingUsers(users: TypingUser[]): void {
    this.typingSubject.next(users);
  }

  getTypingUsers$(): Observable<TypingUser[]> {
    return this.typing$;
  }
}

