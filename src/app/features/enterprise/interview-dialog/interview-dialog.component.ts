import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InterviewService } from '../../../core/services/interview.service';
import { AlertService } from '../../../core/services/alert.service';
import { InterviewType } from '../../../core/models/models';

export interface InterviewDialogData {
  applicationId: number;
  candidateName: string;
  jobTitle: string;
}

@Component({
  selector: 'app-interview-dialog',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatDialogModule,
    MatButtonModule, MatIconModule, MatInputModule,
    MatSelectModule, MatFormFieldModule, MatProgressSpinnerModule
  ],
  templateUrl: './interview-dialog.component.html',
  styleUrls: ['./interview-dialog.component.scss']
})
export class InterviewDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef<InterviewDialogComponent>);
  readonly data: InterviewDialogData = inject(MAT_DIALOG_DATA);
  private readonly interviewSvc = inject(InterviewService);
  private readonly alertSvc = inject(AlertService);

  saving = false;

  form = this.fb.group({
    scheduledAt: ['', [Validators.required, this.futureDate]],
    durationMinutes: [60, [Validators.required, Validators.min(15), Validators.max(480)]],
    type: ['VIDEO' as InterviewType, Validators.required],
    meetingLink: [''],
    location: [''],
    enterpriseNotes: ['']
  });

  get isVideo(): boolean { return this.form.value.type === 'VIDEO'; }
  get isInPerson(): boolean { return this.form.value.type === 'IN_PERSON'; }

  typeOptions: { value: InterviewType; label: string; icon: string }[] = [
    { value: 'VIDEO', label: 'Visioconférence', icon: 'videocam' },
    { value: 'IN_PERSON', label: 'Présentiel', icon: 'location_on' },
    { value: 'PHONE', label: 'Téléphone', icon: 'phone' }
  ];

  durationOptions = [
    { value: 15, label: '15 min' },
    { value: 30, label: '30 min' },
    { value: 45, label: '45 min' },
    { value: 60, label: '1h' },
    { value: 90, label: '1h30' },
    { value: 120, label: '2h' }
  ];

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;

    // Convert local datetime-local string to ISO
    const scheduledAt = new Date(v.scheduledAt!).toISOString();

    this.saving = true;
    this.interviewSvc.propose({
      applicationId: this.data.applicationId,
      scheduledAt,
      durationMinutes: v.durationMinutes ?? 60,
      type: v.type as InterviewType,
      meetingLink: v.meetingLink || undefined,
      location: v.location || undefined,
      enterpriseNotes: v.enterpriseNotes || undefined
    }).subscribe({
      next: res => {
        this.saving = false;
        this.alertSvc.success('Entretien proposé ! Un email a été envoyé au candidat.');
        this.dialogRef.close(res.data);
      },
      error: err => {
        this.saving = false;
        this.alertSvc.error('Erreur', err.error?.message || 'Impossible de proposer l\'entretien');
      }
    });
  }

  private futureDate(control: AbstractControl) {
    if (!control.value) return null;
    const d = new Date(control.value);
    return d > new Date() ? null : { pastDate: true };
  }
}
