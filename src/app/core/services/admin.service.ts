import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AdminDashboard, ApiResponse, JobOffer, Page, User } from '../models/models';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/admin`;

  getDashboard(): Observable<ApiResponse<AdminDashboard>> {
    return this.http.get<ApiResponse<AdminDashboard>>(`${this.API}/dashboard`);
  }

  getUsers(page = 0, size = 20): Observable<ApiResponse<Page<User>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<User>>>(`${this.API}/users`, { params });
  }

  getUserById(id: number): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(`${this.API}/users/${id}`);
  }

  toggleUserActive(id: number): Observable<ApiResponse<void>> {
    return this.http.patch<ApiResponse<void>>(`${this.API}/users/${id}/toggle-active`, {});
  }

  deleteUser(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/users/${id}`);
  }

  getOffers(status?: string, page = 0, size = 20): Observable<ApiResponse<Page<JobOffer>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (status) params = params.set('status', status);
    return this.http.get<ApiResponse<Page<JobOffer>>>(`${this.API}/offers`, { params });
  }
}
