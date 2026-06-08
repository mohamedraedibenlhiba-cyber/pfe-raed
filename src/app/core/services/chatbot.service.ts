import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/models';

export interface ConversationEntry {
  role: 'user' | 'assistant';
  content: string;
}

export interface ChatbotMessageRequest {
  message: string;
  userRole: string;
  history: ConversationEntry[];
}

@Injectable({ providedIn: 'root' })
export class ChatbotService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/chatbot`;

  sendMessage(
    message: string,
    userRole: string,
    history: ConversationEntry[]
  ): Observable<ApiResponse<string>> {
    const body: ChatbotMessageRequest = { message, userRole, history };
    return this.http.post<ApiResponse<string>>(`${this.API}/message`, body);
  }
}
