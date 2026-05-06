import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, UpdateProfileRequest, UserProfile, PublicProfileResponse, ConnectionStatusResponse, User, JobOffer, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/users`;
  private readonly OFFERS_API = `${environment.apiUrl}/offers`;

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

  // ✨ Public Profile & Connection Status
  getPublicProfile(userId: number): Observable<ApiResponse<PublicProfileResponse>> {
    return this.http.get<ApiResponse<PublicProfileResponse>>(`${this.API}/${userId}`);
  }

  getConnectionStatus(userId: number): Observable<ApiResponse<ConnectionStatusResponse>> {
    return this.http.get<ApiResponse<ConnectionStatusResponse>>(`${this.API}/${userId}/connection-status`);
  }

  // ✨ USER SEARCH & DISCOVERY
  /**
   * Search users with optional filters
   * @param query Search query (name, email, skills, company)
   * @param roles Array of roles to filter by ['CANDIDATE', 'ENTERPRISE']
   * @param page Page number (0-indexed)
   * @param size Page size
   */
  searchUsers(
    query?: string,
    roles?: string[],
    page: number = 0,
    size: number = 20
  ): Observable<Page<User>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (query) {
      params = params.set('q', query);
    }

    if (roles && roles.length > 0) {
      params = params.set('role', roles.join(','));
    }

    return this.http.get<Page<User>>(`${this.API}/search`, { params });
  }

  // ✨ PUBLIC JOB OFFERS SEARCH
  /**
   * Get public job offers with pagination
   * @param page Page number (0-indexed)
   * @param size Page size
   * @param title Filter by title
   * @param location Filter by location
   * @param contractType Filter by contract type
   */
  getPublicOffers(
    page: number = 0,
    size: number = 20,
    title?: string,
    location?: string,
    contractType?: string
  ): Observable<Page<JobOffer>> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (title) {
      params = params.set('title', title);
    }

    if (location) {
      params = params.set('location', location);
    }

    if (contractType) {
      params = params.set('contractType', contractType);
    }

    return this.http.get<Page<JobOffer>>(`${this.OFFERS_API}/public`, { params });
  }
}
