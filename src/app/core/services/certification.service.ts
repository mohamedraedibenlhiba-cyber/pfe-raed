import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, Certification, CertificationRequest } from '../models/models';

@Injectable({ providedIn: 'root' })
export class CertificationService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/certifications`;

  /**
   * Add a new certification
   */
  addCertification(req: CertificationRequest): Observable<ApiResponse<Certification>> {
    return this.http.post<ApiResponse<Certification>>(`${this.API}`, req);
  }

  /**
   * Update an existing certification
   */
  updateCertification(certId: number, req: CertificationRequest): Observable<ApiResponse<Certification>> {
    return this.http.put<ApiResponse<Certification>>(`${this.API}/${certId}`, req);
  }

  /**
   * Delete a certification
   */
  deleteCertification(certId: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/${certId}`);
  }

  /**
   * Get all certifications for a candidate (PUBLIC)
   */
  getCandidateCertifications(candidateId: number): Observable<ApiResponse<Certification[]>> {
    return this.http.get<ApiResponse<Certification[]>>(`${this.API}/candidate/${candidateId}`);
  }
}
