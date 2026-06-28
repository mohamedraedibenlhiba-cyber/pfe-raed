import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, Validators, ReactiveFormsModule, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { AuthService } from '../../../core/services/auth.service';
import { getApiErrorMessage } from '../../../core/utils/api-error.util';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly alert = inject(AlertService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  form!: FormGroup;
  loading = false;
  validating = true;
  tokenValid = false;
  hidePassword = true;
  hideConfirm = true;

  ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/']);
      return;
    }

    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (!token) {
        this.alert.error('Erreur', 'Token de réinitialisation manquant');
        this.router.navigate(['/auth/forgot-password']);
        return;
      }

      // Validate token
      this.auth.validateResetToken(token).subscribe({
        next: () => {
          this.tokenValid = true;
          this.validating = false;
          this.form = this.fb.nonNullable.group({
            newPassword: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
          }, { validators: this.passwordMatchValidator });
        },
        error: () => {
          this.validating = false;
          this.alert.error('Erreur', 'Lien de réinitialisation expiré ou invalide');
          this.router.navigate(['/auth/forgot-password']);
        }
      });
    });
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('newPassword');
    const confirm = group.get('confirmPassword');
    return password && confirm && password.value === confirm.value ? null : { passwordMismatch: true };
  }

  submit(): void {
    if (!this.tokenValid || this.form.invalid) return;

    if (this.form.hasError('passwordMismatch')) {
      this.alert.error('Erreur', 'Les mots de passe ne correspondent pas');
      return;
    }

    this.loading = true;
    const token = this.route.snapshot.queryParams['token'];
    const newPassword = this.form.get('newPassword')?.value;

    this.auth.resetPassword(token, newPassword).subscribe({
      next: () => {
        this.loading = false;
        this.alert.success('Succès', 'Mot de passe réinitialisé avec succès!');
        setTimeout(() => this.router.navigate(['/auth/login']), 2000);
      },
      error: err => {
        this.loading = false;
        this.alert.error('Erreur', getApiErrorMessage(err, 'Erreur lors de la réinitialisation'));
      }
    });
  }

  backToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
