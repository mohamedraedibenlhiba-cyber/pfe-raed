import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Application, ApplicationDetail, ApplicationRequest, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ApplicationService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/applications`;

  apply(req: ApplicationRequest): Observable<ApiResponse<Application>> {
    return this.http.post<ApiResponse<Application>>(this.API, req);
  }

  getMyApplications(): Observable<ApiResponse<Application[]>> {
    return this.http.get<ApiResponse<Application[]>>(`${this.API}/my`);
  }

  getByOffer(offerId: number, page = 0, size = 20): Observable<ApiResponse<Page<Application>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Application>>>(`${this.API}/offer/${offerId}`, { params });
  }

  getRanked(offerId: number): Observable<ApiResponse<Application[]>> {
    return this.http.get<ApiResponse<Application[]>>(`${this.API}/offer/${offerId}/ranked`);
  }

  getRankedWithDetails(offerId: number): Observable<ApiResponse<ApplicationDetail[]>> {
    return this.http.get<ApiResponse<ApplicationDetail[]>>(`${this.API}/offer/${offerId}/ranked/with-details`);
  }

  updateStatus(id: number, status: string): Observable<ApiResponse<Application>> {
    return this.http.patch<ApiResponse<Application>>(`${this.API}/${id}/status`, { status });
  }

  addNotes(id: number, recruiterNotes: string, recruiterRating: number): Observable<ApiResponse<Application>> {
    return this.http.patch<ApiResponse<Application>>(`${this.API}/${id}/notes`, { note: recruiterNotes, rating: recruiterRating });
  }

  getById(id: number): Observable<ApiResponse<Application>> {
    return this.http.get<ApiResponse<Application>>(`${this.API}/${id}`);
  }

  getApplicationCv(id: number): Observable<Blob> {
    return this.http.get(`${this.API}/${id}/cv`, { responseType: 'blob' });
  }
}
