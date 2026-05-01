import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserService } from '../../../core/services/user.service';
import { AuthService } from '../../../core/services/auth.service';
import { UserProfile } from '../../../core/models/models';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTabsModule, MatCardModule, MatDividerModule,
    MatChipsModule, MatTooltipModule
  ],
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {
  private readonly userSvc = inject(UserService);
  private readonly authSvc = inject(AuthService);
  private readonly alertSvc = inject(AlertService);
  private readonly fb = inject(FormBuilder);

  loading = true;
  saving = false;
  uploadingPhoto = false;
  changingPassword = false;
  showChangePassword = false;
  selectedTabIndex = 0;
  profile: UserProfile | null = null;

  // Stats placeholder (can be enhanced with actual data)
  profileStats = {
    applicationsCount: 0,
    messagesCount: 0,
    postsCount: 0,
    certificationsCount: 0
  };

  form: FormGroup = this.fb.group({
    fullName: [''],
    phoneNumber: [''],
    city: [''],
    country: [''],
    headline: [''],
    summary: [''],
    linkedinUrl: [''],
    githubUrl: [''],
    portfolioUrl: [''],
    yearsExperience: [null],
    skills: [''],
    languages: [''],
    education: [''],
    openToWork: [false],
    desiredSalary: ['']
  });

  changePasswordForm: FormGroup = this.fb.group({
    oldPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  ngOnInit(): void {
    this.userSvc.getProfile().subscribe({
      next: res => {
        this.profile = res.data;
        this.form.patchValue({
          fullName: res.data.fullName ?? '',
          phoneNumber: res.data.phoneNumber ?? '',
          city: res.data.city ?? '',
          country: res.data.country ?? '',
          headline: res.data.headline ?? '',
          summary: res.data.summary ?? '',
          linkedinUrl: res.data.linkedinUrl ?? '',
          githubUrl: res.data.githubUrl ?? '',
          portfolioUrl: res.data.portfolioUrl ?? '',
          yearsExperience: res.data.yearsExperience ?? null,
          skills: res.data.skills ?? '',
          languages: res.data.languages ?? '',
          education: res.data.education ?? '',
          openToWork: res.data.openToWork ?? false,
          desiredSalary: res.data.desiredSalary ?? ''
        });
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  save(): void {
    if (this.saving) return;
    this.saving = true;
    this.userSvc.updateProfile(this.form.value).subscribe({
      next: res => {
        this.profile = res.data;
        this.saving = false;
        this.alertSvc.success('Profil mis à jour');
      },
      error: err => {
        this.saving = false;
        this.alertSvc.error('Erreur', err.error?.message || 'Erreur lors de la mise à jour');
      }
    });
  }

  onPhotoSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.alertSvc.error('Seules les images sont acceptées'); return;
    }
    this.uploadingPhoto = true;
    this.userSvc.uploadProfilePicture(file).subscribe({
      next: res => {
        this.profile = res.data;
        this.uploadingPhoto = false;
        this.alertSvc.success('Photo de profil mise à jour');
      },
      error: err => {
        this.uploadingPhoto = false;
        this.alertSvc.error('Erreur', err.error?.message || 'Erreur upload photo');
      }
    });
  }

  changePassword(): void {
    if (this.changePasswordForm.invalid || this.changingPassword) return;

    const { oldPassword, newPassword, confirmPassword } = this.changePasswordForm.value;

    if (newPassword !== confirmPassword) {
      this.alertSvc.error('Les mots de passe ne correspondent pas');
      return;
    }

    this.changingPassword = true;
    this.authSvc.changePassword({
      oldPassword,
      newPassword,
      confirmPassword
    }).subscribe({
      next: () => {
        this.changingPassword = false;
        this.showChangePassword = false;
        this.changePasswordForm.reset();
        this.alertSvc.success('Mot de passe modifié avec succès');
      },
      error: err => {
        this.changingPassword = false;
        this.alertSvc.error('Erreur', err.error?.message || 'Erreur lors du changement de mot de passe');
      }
    });
  }

  // Helper methods for template
  get skillsArray(): string[] {
    const skills = this.form.get('skills')?.value || '';
    return skills ? skills.split(',').map((s: string) => s.trim()).filter((s: string) => s) : [];
  }

  get skillsPreview(): string[] {
    return this.skillsArray.slice(0, 6);
  }

  get hasMoreSkills(): boolean {
    return this.skillsArray.length > 6;
  }

  get experienceLevelBadge(): string {
    const years = this.form.get('yearsExperience')?.value || 0;
    if (years < 2) return 'JUNIOR';
    if (years < 5) return 'MID';
    if (years < 10) return 'SENIOR';
    return 'LEAD';
  }

  get experienceLevelColor(): string {
    const level = this.experienceLevelBadge;
    const colors: { [key: string]: string } = {
      'JUNIOR': 'badge-info',
      'MID': 'badge-primary',
      'SENIOR': 'badge-warning',
      'LEAD': 'badge-success'
    };
    return colors[level];
  }
}
