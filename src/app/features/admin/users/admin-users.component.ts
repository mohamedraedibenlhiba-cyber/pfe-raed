import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { AlertService } from '../../../core/services/alert.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AdminService } from '../../../core/services/admin.service';
import { User } from '../../../core/models/models';
import { UserDetailModalComponent } from '../../../shared/components/user-detail-modal/user-detail-modal.component';

@Component({
  selector: 'app-admin-users',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatCardModule, MatTableModule,
    MatPaginatorModule, MatButtonModule, MatIconModule, MatInputModule,
    MatFormFieldModule, MatChipsModule, MatMenuModule, MatDialogModule,
    MatProgressSpinnerModule, MatTooltipModule, MatSlideToggleModule,
    UserDetailModalComponent
  ],
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
  private readonly adminSvc = inject(AdminService);
  private readonly alertSvc = inject(AlertService);
  private readonly dialog   = inject(MatDialog);

  displayedColumns = ['avatar', 'name', 'email', 'role', 'city', 'status', 'createdAt', 'actions'];
  users: User[] = [];
  totalElements = 0;
  pageSize = 20;
  currentPage = 0;
  loading = true;
  searchValue = '';

  get filteredUsers(): User[] {
    if (!this.searchValue) return this.users;
    const q = this.searchValue.toLowerCase();
    return this.users.filter(u => u.fullName?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.adminSvc.getUsers(this.currentPage, this.pageSize).subscribe({
      next: res => {
        this.users = res.data.content;
        this.totalElements = res.data.totalElements;
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  onPage(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.load();
  }

  toggle(user: User): void {
    this.adminSvc.toggleUserActive(user.id).subscribe({
      next: () => {
        user.active = !user.active;
        this.alertSvc.success(`Compte ${user.active ? 'activé' : 'désactivé'}`);
      },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  delete(user: User): void {
    if (!confirm(`Supprimer définitivement le compte de ${user.fullName} ?`)) return;
    this.adminSvc.deleteUser(user.id).subscribe({
      next: () => { this.users = this.users.filter(u => u.id !== user.id); this.alertSvc.success('Utilisateur supprimé'); },
      error: err => this.alertSvc.error('Erreur', err.error?.message || 'Erreur', )
    });
  }

  roleLabel(role: string): string {
    return { ROLE_ADMIN: 'Admin', ROLE_ENTERPRISE: 'Entreprise', ROLE_CANDIDATE: 'Candidat' }[role] ?? role;
  }

  roleClass(role: string): string {
    return { ROLE_ADMIN: 'chip-primary', ROLE_ENTERPRISE: 'chip-info', ROLE_CANDIDATE: 'chip-accent' }[role] ?? 'chip-gray';
  }

  initials(name: string): string {
    return name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  openUserDetails(user: User): void {
    this.dialog.open(UserDetailModalComponent, {
      data: user,
      width: '500px',
      maxHeight: '90vh',
      disableClose: false
    });
  }
}
