import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, BidNegotiationRequest, FreelanceProject, FreelanceProjectRequest, Page, ProjectBid, ProjectBidRequest } from '../models/models';

@Injectable({ providedIn: 'root' })
export class FreelanceService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/freelance`;

  // ── Projets ───────────────────────────────────────────────────────────────
  createProject(req: FreelanceProjectRequest): Observable<ApiResponse<FreelanceProject>> {
    return this.http.post<ApiResponse<FreelanceProject>>(`${this.API}/projects`, req);
  }

  updateProject(id: number, req: FreelanceProjectRequest): Observable<ApiResponse<FreelanceProject>> {
    return this.http.put<ApiResponse<FreelanceProject>>(`${this.API}/projects/${id}`, req);
  }

  deleteProject(id: number): Observable<ApiResponse<void>> {
    return this.http.delete<ApiResponse<void>>(`${this.API}/projects/${id}`);
  }

  search(title?: string, skills?: string, page = 0, size = 12): Observable<ApiResponse<Page<FreelanceProject>>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (title) params = params.set('title', title);
    if (skills) params = params.set('skills', skills);
    return this.http.get<ApiResponse<Page<FreelanceProject>>>(`${this.API}/projects`, { params });
  }

  getById(id: number): Observable<ApiResponse<FreelanceProject>> {
    return this.http.get<ApiResponse<FreelanceProject>>(`${this.API}/projects/${id}`);
  }

  getMyProjects(page = 0, size = 12): Observable<ApiResponse<Page<FreelanceProject>>> {
    const params = new HttpParams().set('page', page).set('size', size);
    return this.http.get<ApiResponse<Page<FreelanceProject>>>(`${this.API}/projects/mine`, { params });
  }

  // ── Offres (bids) ─────────────────────────────────────────────────────────
  submitBid(projectId: number, req: ProjectBidRequest): Observable<ApiResponse<ProjectBid>> {
    return this.http.post<ApiResponse<ProjectBid>>(`${this.API}/projects/${projectId}/bids`, req);
  }

  updateBid(bidId: number, req: ProjectBidRequest): Observable<ApiResponse<ProjectBid>> {
    return this.http.put<ApiResponse<ProjectBid>>(`${this.API}/bids/${bidId}`, req);
  }

  withdrawBid(bidId: number): Observable<ApiResponse<void>> {
    return this.http.post<ApiResponse<void>>(`${this.API}/bids/${bidId}/withdraw`, {});
  }

  negotiate(bidId: number, req: BidNegotiationRequest): Observable<ApiResponse<ProjectBid>> {
    return this.http.patch<ApiResponse<ProjectBid>>(`${this.API}/bids/${bidId}/negotiate`, req);
  }

  getProjectBids(projectId: number): Observable<ApiResponse<ProjectBid[]>> {
    return this.http.get<ApiResponse<ProjectBid[]>>(`${this.API}/projects/${projectId}/bids`);
  }

  getMyBids(): Observable<ApiResponse<ProjectBid[]>> {
    return this.http.get<ApiResponse<ProjectBid[]>>(`${this.API}/bids/mine`);
  }
}
