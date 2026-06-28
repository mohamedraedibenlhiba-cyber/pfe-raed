import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ApiResponse, UserFriendSummaryDTO, Page } from '../models/models';

@Injectable({ providedIn: 'root' })
export class FriendshipService {
  private readonly http = inject(HttpClient);
  private readonly API = `${environment.apiUrl}/friends`;

  /**
   * Get friends of current authenticated user (paginated)
   * @param page Page number (0-indexed)
   * @param size Items per page
   * @returns Observable of paginated friend list
   */
  getFriends(page = 0, size = 10): Observable<ApiResponse<Page<UserFriendSummaryDTO>>> {
    return this.http.get<ApiResponse<Page<UserFriendSummaryDTO>>>(
      `${this.API}?page=${page}&size=${size}`
    ).pipe(
      catchError(error => this.handleError(error, 'Erreur lors de la récupération des amis'))
    );
  }

  /**
   * Get friends of a specific user (public endpoint - no auth required)
   * @param userId The user ID to fetch friends for
   * @param page Page number (0-indexed)
   * @param size Items per page
   * @returns Observable of paginated friend list
   */
  getUserFriends(userId: number, page = 0, size = 10): Observable<ApiResponse<Page<UserFriendSummaryDTO>>> {
    // Validate input
    if (!userId || userId <= 0) {
      return throwError(() => new Error('ID utilisateur invalide'));
    }

    return this.http.get<ApiResponse<Page<UserFriendSummaryDTO>>>(
      `${this.API}/${userId}?page=${page}&size=${size}`
    ).pipe(
      catchError(error => this.handleError(error, 'Erreur lors de la récupération des amis'))
    );
  }

  /**
   * Get count of friends for current user (useful for UI badges)
   * @returns Observable of friend count
   */
  getFriendsCount(): Observable<ApiResponse<number>> {
    return this.http.get<ApiResponse<number>>(`${this.API}/count`).pipe(
      catchError(error => this.handleError(error, 'Erreur lors du comptage des amis'))
    );
  }

  /**
   * Check if two users are friends
   * @param userId The user ID to check friendship with
   * @returns Observable of boolean indicating friendship status
   */
  isFriend(userId: number): Observable<ApiResponse<boolean>> {
    if (!userId || userId <= 0) {
      return throwError(() => new Error('ID utilisateur invalide'));
    }

    return this.http.get<ApiResponse<boolean>>(`${this.API}/${userId}/status`).pipe(
      catchError(error => this.handleError(error, 'Erreur lors de la vérification du statut d\'ami'))
    );
  }

  /**
   * Remove a friend from current user's friend list
   * @param userId The user ID to remove from friends
   * @returns Observable<void>
   */
  removeFriend(userId: number): Observable<ApiResponse<void>> {
    if (!userId || userId <= 0) {
      return throwError(() => new Error('ID utilisateur invalide'));
    }

    return this.http.delete<ApiResponse<void>>(`${this.API}/${userId}`).pipe(
      catchError(error => this.handleError(error, 'Erreur lors de la suppression de l\'ami'))
    );
  }

  /**
   * Handle HTTP errors consistently
   * @param error The HTTP error
   * @param defaultMessage Default error message
   * @returns Observable error
   */
  private handleError(error: any, defaultMessage: string): Observable<never> {
    console.error('[FriendshipService]', defaultMessage, error);

    let errorMessage = defaultMessage;

    if (error.status === 401) {
      errorMessage = 'Authentification requise. Veuillez vous connecter.';
      // Optional: redirect to login
      // this.router.navigate(['/auth/login']);
    } else if (error.status === 403) {
      errorMessage = 'Accès refusé.';
    } else if (error.status === 404) {
      errorMessage = 'Utilisateur non trouvé.';
    } else if (error.status === 400) {
      errorMessage = error.error?.message || 'Requête invalide.';
    } else if (error.status === 409) {
      errorMessage = error.error?.message || 'Conflit: action non autorisée.';
    } else if (error.status === 500) {
      errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
    } else if (error.status === 0) {
      errorMessage = 'Erreur de connexion au serveur.';
    }

    return throwError(() => new Error(errorMessage));
  }
}

