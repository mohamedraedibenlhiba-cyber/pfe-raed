import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from '../../../environments/environment';

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  // Exclure les endpoints d'auth du token JWT
  const isAuthEndpoint = req.url.includes('/auth/login') ||
                         req.url.includes('/auth/register') ||
                         req.url.includes('/auth/init-admin');

  // N'attacher le token qu'aux requêtes vers l'API (pas vers des services tiers)
  // ET jamais aux endpoints d'authentification
  if (token && req.url.startsWith(environment.apiUrl) && !isAuthEndpoint) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // Déconnexion automatique si le token est expiré ou invalide côté serveur
      if (err.status === 401) {
        auth.logout();
      }
      return throwError(() => err);
    })
  );
};
