import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ApiResponse,
  ConnectionRequest,
  ConnectionRequestSendRequest,
  ConnectionRequestResponse,
  ConnectionRequestStatus,
  User,
  Page
} from '../models/models';

@Injectable({ providedIn: 'root' })
export class ConnectionRequestService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/connection-requests`;

  /**
   * Send a connection request to a user
   */
  sendRequest(userId: number, message?: string): Observable<ApiResponse<ConnectionRequest>> {
    const req: ConnectionRequestSendRequest = { receiverId: userId, message };
    return this.http.post<ApiResponse<ConnectionRequest>>(`${this.API}`, req);
  }

  /**
   * Accept a pending connection request
   */
  acceptRequest(requestId: number): Observable<ApiResponse<ConnectionRequest>> {
    return this.http.put<ApiResponse<ConnectionRequest>>(`${this.API}/${requestId}/accept`, {});
  }

  /**
   * Reject a pending connection request
   */
  rejectRequest(requestId: number): Observable<ApiResponse<void>> {
    return this.http.put<ApiResponse<void>>(`${this.API}/${requestId}/reject`, {});
  }

  /**
   * Cancel a sent connection request
   */
  cancelRequest(requestId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${requestId}`);
  }

  /**
   * Get pending requests received by current user
   */
  getPendingRequests(page = 0, size = 10): Observable<ApiResponse<Page<ConnectionRequest>>> {
    return this.http.get<ApiResponse<Page<ConnectionRequest>>>(
      `${this.API}/pending?page=${page}&size=${size}`
    );
  }

  /**
   * Get sent requests from current user
   */
  getSentRequests(page = 0, size = 10): Observable<ApiResponse<Page<ConnectionRequest>>> {
    return this.http.get<ApiResponse<Page<ConnectionRequest>>>(
      `${this.API}/sent?page=${page}&size=${size}`
    );
  }

  /**
   * Get connection request status with a specific user
   */
  getRequestStatus(userId: number): Observable<ApiResponse<ConnectionRequestStatus>> {
    return this.http.get<ApiResponse<ConnectionRequestStatus>>(`${this.API}/${userId}/status`);
  }

  /**
   * Get pending request count (for notification badge)
   */
  getPendingCount(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(`${this.API}/pending/count`);
  }

  /**
   * Get all accepted connections for current user
   */
  getAcceptedConnections(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${this.API}/accepted`);
  }
}
