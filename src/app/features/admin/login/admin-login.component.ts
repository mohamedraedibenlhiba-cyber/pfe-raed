import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule
  ],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  private readonly auth   = inject(AuthService);
  private readonly router = inject(Router);

  username = '';
  password = '';
  hidePassword = true;
  loading = false;
  errorMsg = '';

  ngOnInit(): void {
    if (this.auth.isLoggedIn && this.auth.isAdmin) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  login(): void {
    if (!this.username || !this.password) {
      this.errorMsg = 'Veuillez remplir tous les champs';
      return;
    }
    this.loading = true;
    this.errorMsg = '';
    this.auth.login({ email: this.username, password: this.password }).subscribe({
      next: res => {
        this.loading = false;
        if (res.success && res.data?.role === 'ROLE_ADMIN') {
          this.router.navigate(['/admin/dashboard']);
        } else {
          this.auth.clearSession();
          this.errorMsg = 'Accès réservé aux administrateurs';
        }
      },
      error: err => {
        this.loading = false;
        this.errorMsg = err.error?.message || 'Identifiants incorrects';
      }
    });
  }
}
