import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertService } from '../../../core/services/alert.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { JobOfferService } from '../../../core/services/job-offer.service';
import { ContractType, ExperienceLevel, JobOfferRequest } from '../../../core/models/models';

@Component({
  selector: 'app-offer-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent, MatCheckboxModule, MatProgressSpinnerModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './offer-form.component.html',
  styleUrls: ['./offer-form.component.scss']
})
export class OfferFormComponent implements OnInit {
  private readonly fb       = inject(FormBuilder);
  private readonly offerSvc = inject(JobOfferService);
  private readonly router   = inject(Router);
  private readonly route    = inject(ActivatedRoute);
  private readonly alertSvc = inject(AlertService);

  loading = false;
  saving = false;
  editId?: number;
  isEdit = false;

  contractTypes: ContractType[] = ['CDI', 'CDD', 'STAGE', 'FREELANCE', 'ALTERNANCE', 'TEMPS_PARTIEL'];
  contractTypeOpts = this.contractTypes.map(c => ({ value: c, label: c }));

  experienceLevels: ExperienceLevel[] = ['JUNIOR', 'MID', 'SENIOR', 'LEAD'];
  experienceLevelOpts = this.experienceLevels.map(e => ({ value: e, label: e }));

  form = this.fb.group({
    title:              ['', Validators.required],
    description:        ['', [Validators.required, Validators.minLength(50)]],
    requirements:       [''],
    requiredSkills:     [''],
    location:           [''],
    remote:             [false],
    contractType:       ['' as ContractType | ''],
    salaryMin:          [null as number | null],
    salaryMax:          [null as number | null],
    experienceRequired: [null as number | null],
    deadlineDate:       [null as string | null],
    techStack:          [''],
    experienceLevel:    [null as ExperienceLevel | null],
    numberOfPositions:  [1],
    benefits:           [''],
    interviewProcess:   [''],
    startDate:          [null as string | null],
  });

  ngOnInit(): void {
    this.editId = this.route.snapshot.paramMap.get('id') ? +this.route.snapshot.paramMap.get('id')! : undefined;
    this.isEdit = !!this.editId;
    if (this.isEdit && this.editId) {
      this.loading = true;
      this.offerSvc.getById(this.editId).subscribe({
        next: res => { this.form.patchValue(res.data as any); this.loading = false; },
        error: () => { this.loading = false; }
      });
    }
  }

  submit(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const raw = this.form.value;
    // Conversion Date → ISO string (MatDatepicker retourne un objet Date)
    const req: JobOfferRequest = {
      ...raw,
      deadlineDate: (raw.deadlineDate as unknown) instanceof Date
        ? (raw.deadlineDate as unknown as Date).toISOString().split('T')[0]
        : (raw.deadlineDate ?? null),
      startDate: (raw.startDate as unknown) instanceof Date
        ? (raw.startDate as unknown as Date).toISOString().split('T')[0]
        : (raw.startDate ?? null)
    } as JobOfferRequest;
    const obs = this.isEdit && this.editId
      ? this.offerSvc.update(this.editId, req)
      : this.offerSvc.create(req);
    obs.subscribe({
      next: () => {
        this.saving = false;
        this.alertSvc.success(this.isEdit ? 'Offre mise à jour' : 'Offre créée');
        this.router.navigate(['/enterprise/offers']);
      },
      error: err => { this.saving = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur'); }
    });
  }
}
