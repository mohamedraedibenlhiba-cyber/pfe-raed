import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from '../../../core/services/user.service';
import { UserProfile } from '../../../core/models/models';

@Component({
  selector: 'app-candidate-profile',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatButtonModule,
    MatIconModule, MatCheckboxModule,
    MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.scss']
})
export class CandidateProfileComponent implements OnInit {
  private readonly userSvc = inject(UserService);
  private readonly snack = inject(MatSnackBar);
  private readonly fb = inject(FormBuilder);

  loading = true;
  saving = false;
  uploadingPhoto = false;
  profile: UserProfile | null = null;

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
        this.snack.open('Profil mis à jour', 'OK', { panelClass: 'success-snack' });
      },
      error: err => {
        this.saving = false;
        this.snack.open(err.error?.message || 'Erreur lors de la mise à jour', 'OK', { panelClass: 'error-snack' });
      }
    });
  }

  onPhotoSelect(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      this.snack.open('Seules les images sont acceptées', 'OK', { panelClass: 'error-snack' }); return;
    }
    this.uploadingPhoto = true;
    this.userSvc.uploadProfilePicture(file).subscribe({
      next: res => {
        this.profile = res.data;
        this.uploadingPhoto = false;
        this.snack.open('Photo de profil mise à jour', 'OK', { panelClass: 'success-snack' });
      },
      error: err => {
        this.uploadingPhoto = false;
        this.snack.open(err.error?.message || 'Erreur upload photo', 'OK', { panelClass: 'error-snack' });
      }
    });
  }
}
