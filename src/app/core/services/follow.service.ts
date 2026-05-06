import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Follow, FollowStatus } from '../models/models';

@Injectable({ providedIn: 'root' })
export class FollowService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/follows`;

  follow(userId: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/${userId}`, {});
  }

  unfollow(userId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${userId}`);
  }

  getStatus(userId: number): Observable<ApiResponse<FollowStatus>> {
    return this.http.get<ApiResponse<FollowStatus>>(`${this.API}/${userId}/status`);
  }

  getFollowers(userId: number): Observable<ApiResponse<Follow[]>> {
    return this.http.get<ApiResponse<Follow[]>>(`${this.API}/${userId}/followers`);
  }

  getFollowing(userId: number): Observable<ApiResponse<Follow[]>> {
    return this.http.get<ApiResponse<Follow[]>>(`${this.API}/${userId}/following`);
  }
}
