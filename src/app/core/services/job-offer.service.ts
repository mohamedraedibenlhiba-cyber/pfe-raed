import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, JobOffer, JobOfferRequest, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class JobOfferService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/offers`;

  searchPublic(title?: string, location?: string, contractType?: string, page = 0, size = 10): Observable<ApiResponse<Page<JobOffer>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (title)        params = params.set('title', title);
    if (location)     params = params.set('location', location);
    if (contractType) params = params.set('contractType', contractType);
    return this.http.get<ApiResponse<Page<JobOffer>>>(`${this.API}/public`, { params });
  }

  getByToken(token: string): Observable<ApiResponse<JobOffer>> {
    return this.http.get<ApiResponse<JobOffer>>(`${this.API}/public/token/${token}`);
  }

  getMyOffers(): Observable<ApiResponse<JobOffer[]>> {
    return this.http.get<ApiResponse<JobOffer[]>>(`${this.API}/mine`);
  }

  getById(id: number): Observable<ApiResponse<JobOffer>> {
    return this.http.get<ApiResponse<JobOffer>>(`${this.API}/${id}`);
  }

  create(req: JobOfferRequest): Observable<ApiResponse<JobOffer>> {
    return this.http.post<ApiResponse<JobOffer>>(this.API, req);
  }

  update(id: number, req: JobOfferRequest): Observable<ApiResponse<JobOffer>> {
    return this.http.put<ApiResponse<JobOffer>>(`${this.API}/${id}`, req);
  }

  publish(id: number): Observable<ApiResponse<JobOffer>> {
    return this.http.post<ApiResponse<JobOffer>>(`${this.API}/${id}/publish`, {});
  }

  close(id: number): Observable<ApiResponse<JobOffer>> {
    return this.http.post<ApiResponse<JobOffer>>(`${this.API}/${id}/close`, {});
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${id}`);
  }

  exportExcel(id: number): Observable<Blob> {
    return this.http.get(`${this.API}/${id}/export/excel`, { responseType: 'blob' });
  }

  exportWord(id: number): Observable<Blob> {
    return this.http.get(`${this.API}/${id}/export/word`, { responseType: 'blob' });
  }
}
