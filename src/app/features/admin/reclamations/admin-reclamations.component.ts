import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { AppSelectComponent } from '../../../shared/components/app-select/app-select.component';
import { ReclamationService } from '../../../core/services/reclamation.service';
import { Reclamation, ReclamationStatus } from '../../../core/models/models';

@Component({
  selector: 'app-admin-reclamations',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule,
    MatCardModule, MatTableModule, MatPaginatorModule, MatButtonModule,
    MatIconModule, MatFormFieldModule, MatInputModule, AppSelectComponent,
    MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule,
    MatTabsModule, MatTooltipModule, MatDividerModule
  ],
  templateUrl: './admin-reclamations.component.html',
  styleUrls: ['./admin-reclamations.component.scss']
})
export class AdminReclamationsComponent implements OnInit {
  private readonly reclamSvc = inject(ReclamationService);
  private readonly snack     = inject(MatSnackBar);
  private readonly dialog    = inject(MatDialog);
  private readonly fb        = inject(FormBuilder);

  displayedColumns = ['id', 'user', 'type', 'subject', 'status', 'createdAt', 'actions'];
  reclamations: Reclamation[] = [];
  totalElements = 0;
  pageSize = 15;
  currentPage = 0;
  loading = true;
  activeTab: ReclamationStatus | 'ALL' = 'ALL';

  selectedReclamation: Reclamation | null = null;
  panelOpen = false;

  responseForm = this.fb.group({
    status:        ['IN_PROGRESS', Validators.required],
    adminResponse: ['']
  });

  statusOptions: { value: ReclamationStatus; label: string }[] = [
    { value: 'IN_PROGRESS', label: 'En cours' },
    { value: 'RESOLVED',    label: 'Résolu' },
    { value: 'CLOSED',      label: 'Fermé' },
    { value: 'REJECTED',    label: 'Rejeté' },
  ];

  tabs: { label: string; value: ReclamationStatus | 'ALL'; icon: string }[] = [
    { label: 'Toutes',    value: 'ALL',          icon: 'list'          },
    { label: 'Ouvertes',  value: 'OPEN',         icon: 'report_problem'},
    { label: 'En cours',  value: 'IN_PROGRESS',  icon: 'pending'       },
    { label: 'Résolues',  value: 'RESOLVED',     icon: 'check_circle'  },
    { label: 'Fermées',   value: 'CLOSED',       icon: 'lock'          },
  ];

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    const obs = this.activeTab === 'ALL'
      ? this.reclamSvc.getAll(this.currentPage, this.pageSize)
      : this.reclamSvc.getByStatus(this.activeTab, this.currentPage, this.pageSize);

    obs.subscribe({
      next: res => {
        this.reclamations = res.data.content;
        this.totalElements = res.data.totalElements;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  switchTab(value: ReclamationStatus | 'ALL'): void {
    this.activeTab = value;
    this.currentPage = 0;
    this.load();
  }

  onPage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }

  openDetail(r: Reclamation): void {
    this.selectedReclamation = r;
    this.responseForm.patchValue({ status: r.status, adminResponse: r.adminResponse ?? '' });
    this.panelOpen = true;
  }

  closePanel(): void { this.panelOpen = false; this.selectedReclamation = null; }

  submitResponse(): void {
    if (this.responseForm.invalid || !this.selectedReclamation) return;
    const { status, adminResponse } = this.responseForm.value;
    this.reclamSvc.respond(this.selectedReclamation.id, { status: status as ReclamationStatus, adminResponse: adminResponse ?? '' }).subscribe({
      next: res => {
        const idx = this.reclamations.findIndex(r => r.id === res.data.id);
        if (idx !== -1) this.reclamations[idx] = res.data;
        this.snack.open('Réclamation mise à jour', 'OK', { panelClass: 'success-snack' });
        this.closePanel();
      },
      error: err => this.snack.open(err.error?.message || 'Erreur', 'OK', { panelClass: 'error-snack' })
    });
  }

  statusChipClass(status: ReclamationStatus): string {
    const map: Record<ReclamationStatus, string> = {
      OPEN: 'chip-danger', IN_PROGRESS: 'chip-warning',
      RESOLVED: 'chip-success', CLOSED: 'chip-gray', REJECTED: 'chip-gray'
    };
    return map[status] ?? 'chip-gray';
  }

  statusLabel(status: ReclamationStatus): string {
    const map: Record<ReclamationStatus, string> = {
      OPEN: 'Ouvert', IN_PROGRESS: 'En cours', RESOLVED: 'Résolu', CLOSED: 'Fermé', REJECTED: 'Rejeté'
    };
    return map[status] ?? status;
  }

  typeLabel(type: string): string {
    const map: Record<string, string> = {
      TECHNICAL_ISSUE: 'Problème technique', ACCOUNT_PROBLEM: 'Compte',
      PAYMENT_ISSUE: 'Paiement', ABUSIVE_CONTENT: 'Contenu abusif',
      OFFER_FRAUD: 'Fraude offre', OTHER: 'Autre'
    };
    return map[type] ?? type;
  }

  initials(name: string | undefined): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
