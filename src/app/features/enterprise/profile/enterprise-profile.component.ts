import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { UserService } from '../../../core/services/user.service';
import { UserProfile } from '../../../core/models/models';

@Component({
  selector: 'app-enterprise-profile',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, AppSelectComponent,
    MatButtonModule, MatIconModule,
    MatProgressSpinnerModule, MatSnackBarModule
  ],
  templateUrl: './enterprise-profile.component.html',
  styleUrls: ['./enterprise-profile.component.scss']
})
export class EnterpriseProfileComponent implements OnInit {
  private readonly userSvc = inject(UserService);
  private readonly snack = inject(MatSnackBar);
  private readonly fb = inject(FormBuilder);

  loading = true;
  saving = false;
  uploadingPhoto = false;
  profile: UserProfile | null = null;

  readonly sectors = [
    'Technologie & IT', 'Finance & Banque', 'Santé & Médical',
    'Éducation & Formation', 'Commerce & Distribution',
    'Industrie & Fabrication', 'Transport & Logistique',
    'Construction & Immobilier', 'Médias & Communication',
    'Conseil & Services', 'Agriculture & Agroalimentaire', 'Autre'
  ];

  readonly companySizes = [
    '1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'
  ];

  sectorOpts      = this.sectors.map(s => ({ value: s, label: s }));
  companySizeOpts = this.companySizes.map(s => ({ value: s, label: s + ' employés' }));

  form: FormGroup = this.fb.group({
    fullName: [''],
    phoneNumber: [''],
    city: [''],
    country: [''],
    companyName: [''],
    companyDescription: [''],
    companyWebsite: [''],
    companySector: [''],
    companySize: [''],
    siretNumber: [''],
    enterpriseLinkedinUrl: ['']
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
          companyName: res.data.companyName ?? '',
          companyDescription: res.data.companyDescription ?? '',
          companyWebsite: res.data.companyWebsite ?? '',
          companySector: res.data.companySector ?? '',
          companySize: res.data.companySize ?? '',
          siretNumber: res.data.siretNumber ?? '',
          enterpriseLinkedinUrl: res.data.enterpriseLinkedinUrl ?? ''
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
        this.snack.open('Logo mis à jour', 'OK', { panelClass: 'success-snack' });
      },
      error: err => {
        this.uploadingPhoto = false;
        this.snack.open(err.error?.message || 'Erreur upload logo', 'OK', { panelClass: 'error-snack' });
      }
    });
  }
}
