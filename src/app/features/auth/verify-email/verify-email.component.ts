import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { getApiErrorMessage } from '../../../core/utils/api-error.util';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [
    CommonModule, RouterLink,
    MatCardModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly alert = inject(AlertService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  verifying = true;
  verified = false;
  email = '';
  resendLoading = false;

  ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/']);
      return;
    }

    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (!token) {
        this.alert.error('Erreur', 'Token de vérification manquant');
        this.router.navigate(['/auth/login']);
        return;
      }

      this.auth.verifyEmail(token).subscribe({
        next: () => {
          this.verified = true;
          this.verifying = false;
          this.alert.success('Succès', 'Email vérifié avec succès!');
          setTimeout(() => this.router.navigate(['/auth/login']), 3000);
        },
        error: err => {
          this.verifying = false;
          this.alert.error('Erreur', getApiErrorMessage(err, 'Erreur lors de la vérification'));
          const errorMsg = err?.error?.message || '';
          if (errorMsg.includes('expiré')) {
            this.email = localStorage.getItem('registration_email') || '';
          }
        }
      });
    });
  }

  resendEmail(): void {
    if (!this.email) {
      this.alert.error('Erreur', 'Email non trouvé');
      return;
    }

    this.resendLoading = true;
    this.auth.resendVerificationEmail(this.email).subscribe({
      next: () => {
        this.resendLoading = false;
        this.alert.success('Succès', 'Email de vérification renvoyé!');
      },
      error: err => {
        this.resendLoading = false;
        this.alert.error('Erreur', getApiErrorMessage(err, 'Erreur lors de l\'envoi'));
      }
    });
  }

  backToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
