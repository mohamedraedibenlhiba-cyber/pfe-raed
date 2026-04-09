import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, UpdateProfileRequest, UserProfile } from '../models/models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/users`;

  getProfile(): Observable<ApiResponse<UserProfile>> {
    return this.http.get<ApiResponse<UserProfile>>(`${this.API}/me`);
  }

  updateProfile(req: UpdateProfileRequest): Observable<ApiResponse<UserProfile>> {
    return this.http.put<ApiResponse<UserProfile>>(`${this.API}/me`, req);
  }

  uploadProfilePicture(file: File): Observable<ApiResponse<UserProfile>> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<ApiResponse<UserProfile>>(`${this.API}/me/profile-picture`, form);
  }
}
