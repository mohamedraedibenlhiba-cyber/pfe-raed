import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AlertService } from '../../../core/services/alert.service';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { ReclamationService } from '../../../core/services/reclamation.service';
import { Reclamation, ReclamationStatus, ReclamationType } from '../../../core/models/models';

@Component({
  selector: 'app-my-reclamations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent, MatProgressSpinnerModule],
  templateUrl: './my-reclamations.component.html',
  styleUrls: ['./my-reclamations.component.scss']
})
export class MyReclamationsComponent implements OnInit {
  private readonly reclamSvc = inject(ReclamationService);
  private readonly alertSvc = inject(AlertService);
  private readonly fb        = inject(FormBuilder);

  loading = true;
  submitting = false;
  reclamations: Reclamation[] = [];
  showForm = false;

  form = this.fb.group({
    type:        ['', Validators.required],
    subject:     ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20)]]
  });

  typeOptions: { value: ReclamationType; label: string }[] = [
    { value: 'TECHNICAL_ISSUE',  label: 'Problème technique' },
    { value: 'ACCOUNT_PROBLEM',  label: 'Problème de compte' },
    { value: 'PAYMENT_ISSUE',    label: 'Problème de paiement' },
    { value: 'ABUSIVE_CONTENT',  label: 'Contenu abusif' },
    { value: 'OFFER_FRAUD',      label: 'Offre frauduleuse' },
    { value: 'OTHER',            label: 'Autre' },
  ];

  ngOnInit(): void {
    this.reclamSvc.getMine().subscribe({
      next: res => { this.reclamations = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
  }

  submit(): void {
    if (this.form.invalid) return;
    this.submitting = true;
    this.reclamSvc.submit(this.form.value as any).subscribe({
      next: res => {
        this.reclamations.unshift(res.data);
        this.form.reset(); this.showForm = false; this.submitting = false;
        this.alertSvc.success('Réclamation soumise avec succès');
      },
      error: err => { this.submitting = false; this.alertSvc.error('Erreur', err.error?.message || 'Erreur'); }
    });
  }

  statusClass(s: ReclamationStatus): string {
    return { OPEN: 'chip-danger', IN_PROGRESS: 'chip-warning', RESOLVED: 'chip-success', CLOSED: 'chip-gray', REJECTED: 'chip-gray' }[s] ?? 'chip-gray';
  }

  statusLabel(s: ReclamationStatus): string {
    return { OPEN: 'Ouvert', IN_PROGRESS: 'En cours', RESOLVED: 'Résolu', CLOSED: 'Fermé', REJECTED: 'Rejeté' }[s] ?? s;
  }

  getOpenCount(): number {
    return this.reclamations.filter(r => r.status === 'IN_PROGRESS' || r.status === 'OPEN').length;
  }

  getResolvedCount(): number {
    return this.reclamations.filter(r => r.status === 'RESOLVED').length;
  }
}
