import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { MessagingService } from '../../core/services/messaging.service';

interface NavItem { label: string; icon: string; route: string; }

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
            MatIconModule, MatButtonModule, MatBadgeModule, MatMenuModule,
            MatTooltipModule, MatDividerModule],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly notifSvc = inject(NotificationService);
  private readonly msgSvc   = inject(MessagingService);
  private readonly router   = inject(Router);

  sidebarOpen = signal(true);
  unreadNotifications = 0;
  unreadMessages = 0;

  get isEnterprise(): boolean { return this.auth.isEnterprise; }
  get isCandidate():  boolean { return this.auth.isCandidate; }
  get basePath():     string  { return this.isEnterprise ? '/enterprise' : '/candidate'; }

  enterpriseNav: NavItem[] = [
    { label: 'Tableau de bord', icon: 'dashboard',           route: '/enterprise/dashboard' },
    { label: 'Mes offres',      icon: 'work_outline',        route: '/enterprise/offers' },
    { label: 'Messagerie',      icon: 'chat_bubble_outline', route: '/enterprise/messages' },
    { label: 'Canaux',          icon: 'forum',               route: '/enterprise/channels' },
    { label: 'Actualités',      icon: 'newspaper',           route: '/enterprise/feed' },
    { label: 'Freelance',       icon: 'handyman',            route: '/enterprise/freelance' },
    { label: 'Réclamations',    icon: 'report_problem',      route: '/enterprise/reclamations' },
  ];

  candidateNav: NavItem[] = [
    { label: 'Tableau de bord',   icon: 'dashboard',           route: '/candidate/dashboard' },
    { label: 'Rechercher offres', icon: 'search',              route: '/candidate/search' },
    { label: 'Mes candidatures',  icon: 'send',                route: '/candidate/applications' },
    { label: 'Mes CVs',           icon: 'description',         route: '/candidate/cvs' },
    { label: 'Messagerie',        icon: 'chat_bubble_outline', route: '/candidate/messages' },
    { label: 'Canaux',            icon: 'forum',               route: '/candidate/channels' },
    { label: 'Actualités',        icon: 'newspaper',           route: '/candidate/feed' },
    { label: 'Freelance',         icon: 'handyman',            route: '/candidate/freelance' },
    { label: 'Réclamations',      icon: 'report_problem',      route: '/candidate/reclamations' },
  ];

  get navItems(): NavItem[] { return this.isEnterprise ? this.enterpriseNav : this.candidateNav; }
  get profileRoute(): string { return `${this.basePath}/profile`; }

  ngOnInit(): void {
    this.notifSvc.getUnreadCount().subscribe(res => this.unreadNotifications = res.data);
    this.msgSvc.getUnreadCount().subscribe(res => this.unreadMessages = res.data);
  }

  toggleSidebar(): void { this.sidebarOpen.update(v => !v); }
  logout(): void { this.auth.logout(); }

  initials(): string {
    return this.auth.currentUser?.fullName?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?';
  }
}
