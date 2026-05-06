import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { MatTabsModule } from '@angular/material/tabs';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { AuthService } from '../../../core/services/auth.service';
import { getApiErrorMessage } from '../../../core/utils/api-error.util';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, RouterLink,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatProgressSpinnerModule,
    MatTabsModule, AppSelectComponent
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private readonly fb    = inject(FormBuilder);
  private readonly auth  = inject(AuthService);
  private readonly alertSvc = inject(AlertService);

  loading = false;
  hidePassword = true;
  selectedTab = 0;

  enterpriseForm!: FormGroup;
  candidateForm!: FormGroup;

  companySizes = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'];
  sectors = [
    'Technologie & IT', 'Finance & Banque', 'Santé & Médical',
    'Éducation & Formation', 'Commerce & Distribution',
    'Industrie & Fabrication', 'Transport & Logistique',
    'Construction & Immobilier', 'Médias & Communication',
    'Conseil & Services', 'Agriculture & Agroalimentaire', 'Autre'
  ];

  sectorOpts      = this.sectors.map(s => ({ value: s, label: s }));
  companySizeOpts = this.companySizes.map(s => ({ value: s, label: s + ' employés' }));

  ngOnInit(): void {
    this.enterpriseForm = this.fb.group({
      email:              ['', [Validators.required, Validators.email]],
      password:           ['', [Validators.required, Validators.minLength(8)]],
      fullName:           ['', Validators.required],
      companyName:        ['', Validators.required],
      companyDescription: [''],
      companyWebsite:     [''],
      companySector:      [''],
      companySize:        [''],
      siretNumber:        [''],
      phoneNumber:        [''],
      city:               [''],
      country:            [''],
    });

    this.candidateForm = this.fb.group({
      email:          ['', [Validators.required, Validators.email]],
      password:       ['', [Validators.required, Validators.minLength(8)]],
      fullName:       ['', Validators.required],
      headline:       [''],
      summary:        [''],
      skills:         [''],
      linkedinUrl:    [''],
      githubUrl:      [''],
      yearsExperience: [0, [Validators.min(0)]],
      phoneNumber:    [''],
      city:           [''],
      country:        [''],
    });
  }

  submitEnterprise(): void {
    if (this.enterpriseForm.invalid) return;
    this.loading = true;
    this.auth.registerEnterprise(this.enterpriseForm.value).subscribe({
      next: () => this.auth.redirectToDashboard(),
      error: err => {
        this.loading = false;
        this.alertSvc.error('Erreur', getApiErrorMessage(err, 'Erreur lors de l\'inscription'));
      }
    });
  }

  submitCandidate(): void {
    if (this.candidateForm.invalid) return;
    this.loading = true;
    this.auth.registerCandidate(this.candidateForm.value).subscribe({
      next: () => this.auth.redirectToDashboard(),
      error: err => {
        this.loading = false;
        this.alertSvc.error('Erreur', getApiErrorMessage(err, 'Erreur lors de l\'inscription'));
      }
    });
  }
}
