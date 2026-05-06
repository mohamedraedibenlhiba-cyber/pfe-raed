import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Notification, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/notifications`;

  getAll(page = 0, size = 15): Observable<ApiResponse<Page<Notification>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Notification>>>(this.API, { params });
  }

  getUnreadCount(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(`${this.API}/unread-count`);
  }

  markAllRead(): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/mark-all-read`, {});
  }

  markRead(id: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/${id}/read`, {});
  }
}
