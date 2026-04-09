import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Page, Reclamation, ReclamationRequest, ReclamationResponseRequest, ReclamationStatus } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ReclamationService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/reclamations`;

  submit(req: ReclamationRequest): Observable<ApiResponse<Reclamation>> {
    return this.http.post<ApiResponse<Reclamation>>(this.API, req);
  }

  getMine(): Observable<ApiResponse<Reclamation[]>> {
    return this.http.get<ApiResponse<Reclamation[]>>(`${this.API}/my`);
  }

  getById(id: number): Observable<ApiResponse<Reclamation>> {
    return this.http.get<ApiResponse<Reclamation>>(`${this.API}/${id}`);
  }

  // Admin
  getAll(page = 0, size = 15): Observable<ApiResponse<Page<Reclamation>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Reclamation>>>(this.API, { params });
  }

  getByStatus(status: ReclamationStatus, page = 0, size = 15): Observable<ApiResponse<Page<Reclamation>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<Reclamation>>>(`${this.API}/status/${status}`, { params });
  }

  respond(id: number, req: ReclamationResponseRequest): Observable<ApiResponse<Reclamation>> {
    return this.http.patch<ApiResponse<Reclamation>>(`${this.API}/${id}/respond`, req);
  }
}
