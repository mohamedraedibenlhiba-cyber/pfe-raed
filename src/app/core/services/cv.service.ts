import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, CV } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CvService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/cvs`;

  upload(file: File): Observable<ApiResponse<CV>> {
    const form = new FormData();
    form.append('file', file);
    return this.http.post<ApiResponse<CV>>(`${this.API}/upload`, form);
  }

  getMyCvs(): Observable<ApiResponse<CV[]>> {
    return this.http.get<ApiResponse<CV[]>>(this.API);
  }

  setDefault(id: number): Observable<ApiResponse<CV>> {
    return this.http.patch<ApiResponse<CV>>(`${this.API}/${id}/default`, {});
  }

  delete(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${id}`);
  }

  getContent(id: number): Observable<Blob> {
    return this.http.get(`${this.API}/${id}/view`, { responseType: 'blob' });
  }
}
