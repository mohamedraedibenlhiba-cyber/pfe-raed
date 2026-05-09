import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthService } from '../../core/services/auth.service';
import { ConnectionRequestService } from '../../core/services/connection-request.service';
import { MessagingService } from '../../core/services/messaging.service';
import { NotificationService } from '../../core/services/notification.service';
import { ConnectionRequestsModalComponent } from '../../features/shared/connection-requests-modal/connection-requests-modal.component';
import { ProjectChatbotComponent } from '../../features/shared/project-chatbot/project-chatbot.component';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule,
    ProjectChatbotComponent
  ],
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly notifSvc = inject(NotificationService);
  private readonly msgSvc = inject(MessagingService);
  private readonly connectionSvc = inject(ConnectionRequestService);
  private readonly dialog = inject(MatDialog);
  sidebarOpen = signal(true);
  unreadNotifications = 0;
  unreadMessages = 0;
  pendingConnectionRequests = 0;

  get isEnterprise(): boolean { return this.auth.isEnterprise; }
  get isCandidate(): boolean { return this.auth.isCandidate; }
  get basePath(): string { return this.isEnterprise ? '/enterprise' : '/candidate'; }

  enterpriseNav: NavItem[] = [
    { label: 'Tableau de bord', icon: 'dashboard', route: '/enterprise/dashboard' },
    { label: 'Mes offres', icon: 'work_outline', route: '/enterprise/offers' },
    { label: 'Messagerie', icon: 'chat_bubble_outline', route: '/enterprise/messages' },
    { label: 'Actualites', icon: 'newspaper', route: '/enterprise/feed' },
    { label: 'Freelance', icon: 'handyman', route: '/enterprise/freelance' },
    { label: 'Reclamations', icon: 'report_problem', route: '/enterprise/reclamations' },
  ];

  candidateNav: NavItem[] = [
    { label: 'Tableau de bord', icon: 'dashboard', route: '/candidate/dashboard' },
    { label: 'Decouvrir', icon: 'explore', route: '/candidate/discovery' },
    { label: 'Rechercher offres', icon: 'search', route: '/candidate/search' },
    { label: 'Mes candidatures', icon: 'send', route: '/candidate/applications' },
    { label: 'Mes CVs', icon: 'description', route: '/candidate/cvs' },
    { label: 'Messagerie', icon: 'chat_bubble_outline', route: '/candidate/messages' },
    { label: 'Actualites', icon: 'newspaper', route: '/candidate/feed' },
    { label: 'Freelance', icon: 'handyman', route: '/candidate/freelance' },
    { label: 'Reclamations', icon: 'report_problem', route: '/candidate/reclamations' },
  ];

  get navItems(): NavItem[] { return this.isEnterprise ? this.enterpriseNav : this.candidateNav; }
  get profileRoute(): string { return `${this.basePath}/profile`; }

  ngOnInit(): void {
    this.loadTopbarCounts();
    this.connectionSvc.requestChanges$.subscribe(() => this.loadConnectionRequestCount());
  }

  toggleSidebar(): void {
    this.sidebarOpen.update(value => !value);
  }

  logout(): void {
    this.auth.logout();
  }

  openConnectionRequests(): void {
    this.dialog.open(ConnectionRequestsModalComponent, {
      width: '820px',
      maxWidth: '95vw'
    });
  }

  initials(): string {
    return this.auth.currentUser?.fullName?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  private loadTopbarCounts(): void {
    this.notifSvc.getUnreadCount().subscribe(res => this.unreadNotifications = res.data);
    this.msgSvc.getUnreadCount().subscribe(res => this.unreadMessages = res.data);
    this.loadConnectionRequestCount();
  }

  private loadConnectionRequestCount(): void {
    this.connectionSvc.getPendingCount().subscribe(res => this.pendingConnectionRequests = res.data);
  }
}
