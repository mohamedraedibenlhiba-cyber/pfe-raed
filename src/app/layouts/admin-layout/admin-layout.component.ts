import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '../../core/services/auth.service';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, MatIconModule, MatButtonModule, MatTooltipModule, MatBadgeModule, MatMenuModule],
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent {
  readonly auth = inject(AuthService);
  readonly router = inject(Router);

  sidebarOpen = signal(true);

  navItems: NavItem[] = [
    { label: 'Tableau de bord', icon: 'dashboard',         route: '/admin/dashboard' },
    { label: 'Utilisateurs',   icon: 'people',             route: '/admin/users' },
    { label: 'Réclamations',   icon: 'report_problem',     route: '/admin/reclamations' },
    { label: 'Offres d\'emploi', icon: 'work_outline',     route: '/admin/offers' },
  ];

  toggleSidebar(): void { this.sidebarOpen.update(v => !v); }
  logout(): void { this.auth.logout(); }
}
