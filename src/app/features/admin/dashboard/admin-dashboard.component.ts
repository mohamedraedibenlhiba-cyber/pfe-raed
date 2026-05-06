import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { Chart, registerables } from 'chart.js';
import { AdminService } from '../../../core/services/admin.service';
import { AdminDashboard } from '../../../core/models/models';

Chart.register(...registerables);

interface StatCard {
  label: string; value: number; icon: string;
  color: string; bgClass: string; trend?: string;
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule, BaseChartDirective],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  private readonly adminSvc = inject(AdminService);

  loading = true;
  stats: AdminDashboard | null = null;
  statCards: StatCard[] = [];

  // ── Charts ────────────────────────────────────────────────────────────────
  usersChartData: ChartData<'doughnut'> = { labels: [], datasets: [] };
  usersChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 16 } } },
    cutout: '70%'
  };

  offersChartData: ChartData<'bar'> = { labels: [], datasets: [] };
  offersChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, grid: { color: '#f1f5f9' }, ticks: { stepSize: 1 } },
      x: { grid: { display: false } }
    }
  };

  reclamationsChartData: ChartData<'pie'> = { labels: [], datasets: [] };
  reclamationsChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { position: 'bottom', labels: { usePointStyle: true, padding: 16 } } }
  };

  ngOnInit(): void {
    this.adminSvc.getDashboard().subscribe({
      next: res => {
        this.stats = res.data;
        this.buildStatCards();
        this.buildCharts();
        this.loading = false;
      },
      error: () => { this.loading = false; }
    });
  }

  private buildStatCards(): void {
    if (!this.stats) return;
    this.statCards = [
      { label: 'Utilisateurs totaux', value: this.stats.totalUsers,          icon: 'people',        bgClass: 'bg-primary', color: '#3730a3', trend: '+12% ce mois' },
      { label: 'Entreprises',         value: this.stats.totalEnterprises,     icon: 'business',      bgClass: 'bg-info',    color: '#2563eb', trend: '+5 ce mois' },
      { label: 'Candidats',           value: this.stats.totalCandidates,      icon: 'person_search', bgClass: 'bg-success', color: '#059669', trend: '+8% ce mois' },
      { label: 'Offres publiées',      value: this.stats.publishedOffers,      icon: 'work',          bgClass: 'bg-warning', color: '#d97706', trend: `/ ${this.stats.totalJobOffers} total` },
      { label: 'Candidatures',        value: this.stats.totalApplications,    icon: 'send',          bgClass: 'bg-accent',  color: '#0891b2', trend: `${this.stats.pendingApplications} en attente` },
      { label: 'Réclamations ouvertes', value: this.stats.openReclamations,  icon: 'report_problem', bgClass: 'bg-danger',  color: '#dc2626', trend: `/ ${this.stats.totalReclamations} total` },
    ];
  }

  private buildCharts(): void {
    if (!this.stats) return;

    this.usersChartData = {
      labels: ['Candidats', 'Entreprises'],
      datasets: [{
        data: [this.stats.totalCandidates, this.stats.totalEnterprises],
        backgroundColor: ['#4f46e5', '#0891b2'],
        hoverBackgroundColor: ['#3730a3', '#164e63'],
        borderWidth: 0
      }]
    };

    this.offersChartData = {
      labels: ['Total offres', 'Publiées', 'Candidatures', 'Analysées IA', 'Posts'],
      datasets: [{
        label: 'Activité',
        data: [
          this.stats.totalJobOffers, this.stats.publishedOffers,
          this.stats.totalApplications, this.stats.analyzedApplications,
          this.stats.totalPosts
        ],
        backgroundColor: ['#4f46e5', '#0891b2', '#059669', '#d97706', '#7c3aed'],
        borderRadius: 8,
        barThickness: 40
      }]
    };

    this.reclamationsChartData = {
      labels: ['Ouvertes', 'Résolues', 'Autres'],
      datasets: [{
        data: [
          this.stats.openReclamations,
          this.stats.resolvedReclamations,
          this.stats.totalReclamations - this.stats.openReclamations - this.stats.resolvedReclamations
        ],
        backgroundColor: ['#dc2626', '#059669', '#d97706'],
        borderWidth: 0
      }]
    };
  }

  get applicationRate(): number {
    if (!this.stats || !this.stats.totalApplications) return 0;
    return Math.round((this.stats.analyzedApplications / this.stats.totalApplications) * 100);
  }

  get reclamationResolutionRate(): number {
    if (!this.stats || !this.stats.totalReclamations) return 0;
    return Math.round((this.stats.resolvedReclamations / this.stats.totalReclamations) * 100);
  }
}
