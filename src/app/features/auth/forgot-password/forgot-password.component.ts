import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
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
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly auth = inject(AuthService);
  private readonly alert = inject(AlertService);
  private readonly router = inject(Router);

  form!: FormGroup;
  loading = false;
  submitted = false;
  successMessage = '';

  ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/']);
      return;
    }

    this.form = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    const email = this.form.get('email')?.value;

    this.auth.forgotPassword(email).subscribe({
      next: () => {
        this.loading = false;
        this.submitted = true;
        this.successMessage = `Email de réinitialisation envoyé à ${email}. Vérifiez votre boîte de réception et suivez le lien pour réinitialiser votre mot de passe.`;
        this.form.reset();
        setTimeout(() => this.router.navigate(['/auth/login']), 5000);
      },
      error: err => {
        this.loading = false;
        this.alert.error('Erreur', getApiErrorMessage(err, 'Email non trouvé'));
      }
    });
  }

  backToLogin(): void {
    this.router.navigate(['/auth/login']);
  }
}
