import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiResponse, JwtResponse, LoginRequest, RegisterCandidateRequest, RegisterEnterpriseRequest } from '../models/models';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly API = `${environment.apiUrl}/auth`;

  private readonly TOKEN_KEY = 'jwt_token';
  private readonly USER_KEY  = 'current_user';

  private _currentUser$ = new BehaviorSubject<JwtResponse | null>(this.loadUser());
  readonly currentUser$ = this._currentUser$.asObservable();

  // ─── HTTP calls ──────────────────────────────────────────────────────────────
  login(req: LoginRequest): Observable<ApiResponse<JwtResponse>> {
    return this.http.post<ApiResponse<JwtResponse>>(`${this.API}/login`, {
      ...req,
      email: this.normalizeEmail(req.email)
    }).pipe(
      tap(res => { if (res.success && res.data) this.storeSession(res.data); })
    );
  }

  registerEnterprise(req: RegisterEnterpriseRequest): Observable<ApiResponse<JwtResponse>> {
    return this.http.post<ApiResponse<JwtResponse>>(`${this.API}/register/enterprise`, {
      ...req,
      email: this.normalizeEmail(req.email)
    }).pipe(
      tap(res => { if (res.success && res.data) this.storeSession(res.data); })
    );
  }

  registerCandidate(req: RegisterCandidateRequest): Observable<ApiResponse<JwtResponse>> {
    return this.http.post<ApiResponse<JwtResponse>>(`${this.API}/register/candidate`, {
      ...req,
      email: this.normalizeEmail(req.email)
    }).pipe(
      tap(res => { if (res.success && res.data) this.storeSession(res.data); })
    );
  }

  changePassword(changePasswordData: any): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.API}/change-password`, changePasswordData);
  }

  forgotPassword(email: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.API}/forgot-password`, { email });
  }

  resetPassword(token: string, newPassword: string): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(`${this.API}/reset-password`, { token, newPassword });
  }

  validateResetToken(token: string): Observable<ApiResponse<string>> {
    return this.http.get<ApiResponse<string>>(`${this.API}/validate-reset-token/${token}`);
  }

  // ─── Session helpers ─────────────────────────────────────────────────────────
  private storeSession(user: JwtResponse): void {
    localStorage.setItem(this.TOKEN_KEY, user.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this._currentUser$.next(user);
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser$.next(null);
    this.router.navigate(['/auth/login']);
  }

  /** Clear session without navigation (used when access is denied during login). */
  clearSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser$.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get currentUser(): JwtResponse | null {
    return this._currentUser$.value;
  }

  get isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decoded: { exp: number } = jwtDecode(token);
      return Date.now() < decoded.exp * 1000;
    } catch { return false; }
  }

  get isAdmin(): boolean { return this.currentUser?.role === 'ROLE_ADMIN'; }
  get isEnterprise(): boolean { return this.currentUser?.role === 'ROLE_ENTERPRISE'; }
  get isCandidate(): boolean { return this.currentUser?.role === 'ROLE_CANDIDATE'; }

  redirectToDashboard(): void {
    const role = this.currentUser?.role;
    if (role === 'ROLE_ADMIN')       this.router.navigate(['/admin/dashboard']);
    else if (role === 'ROLE_ENTERPRISE') this.router.navigate(['/enterprise/dashboard']);
    else if (role === 'ROLE_CANDIDATE')  this.router.navigate(['/candidate/dashboard']);
  }

  private loadUser(): JwtResponse | null {
    try {
      const raw = localStorage.getItem(this.USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
  }
}
