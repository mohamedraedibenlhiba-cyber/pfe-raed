import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Interview, InterviewRequest } from '../models/models';

@Injectable({ providedIn: 'root' })
export class InterviewService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/interviews`;

  propose(req: InterviewRequest): Observable<ApiResponse<Interview>> {
    return this.http.post<ApiResponse<Interview>>(this.API, req);
  }

  confirm(id: number, note?: string): Observable<ApiResponse<Interview>> {
    return this.http.put<ApiResponse<Interview>>(`${this.API}/${id}/confirm`, note ? { note } : {});
  }

  cancel(id: number, reason?: string): Observable<ApiResponse<Interview>> {
    return this.http.put<ApiResponse<Interview>>(`${this.API}/${id}/cancel`, reason ? { reason } : {});
  }

  complete(id: number): Observable<ApiResponse<Interview>> {
    return this.http.put<ApiResponse<Interview>>(`${this.API}/${id}/complete`, {});
  }

  getMyInterviews(): Observable<ApiResponse<Interview[]>> {
    return this.http.get<ApiResponse<Interview[]>>(`${this.API}/mine`);
  }

  getByApplication(applicationId: number): Observable<ApiResponse<Interview>> {
    return this.http.get<ApiResponse<Interview>>(`${this.API}/application/${applicationId}`);
  }

  getById(id: number): Observable<ApiResponse<Interview>> {
    return this.http.get<ApiResponse<Interview>>(`${this.API}/${id}`);
  }
}
