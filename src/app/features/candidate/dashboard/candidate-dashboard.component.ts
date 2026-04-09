import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ApplicationService } from '../../../core/services/application.service';
import { CvService } from '../../../core/services/cv.service';
import { AuthService } from '../../../core/services/auth.service';
import { Application } from '../../../core/models/models';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule, MatProgressSpinnerModule],
  templateUrl: './candidate-dashboard.component.html',
  styleUrls: ['./candidate-dashboard.component.scss']
})
export class CandidateDashboardComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly appSvc = inject(ApplicationService);
  private readonly cvSvc  = inject(CvService);

  loading = true;
  applications: Application[] = [];
  cvCount = 0;

  get pendingCount():    number { return this.applications.filter(a => a.status === 'PENDING').length; }
  get shortlistCount():  number { return this.applications.filter(a => a.status === 'SHORTLISTED').length; }
  get interviewCount():  number { return this.applications.filter(a => a.status === 'INTERVIEW').length; }

  appStatusClass(status: string): string {
    const map: Record<string, string> = {
      PENDING: 'chip-gray', REVIEWED: 'chip-info', AI_ANALYZED: 'chip-accent',
      SHORTLISTED: 'chip-primary', INTERVIEW: 'chip-warning', ACCEPTED: 'chip-success', REJECTED: 'chip-danger'
    };
    return map[status] ?? 'chip-gray';
  }

  ngOnInit(): void {
    this.appSvc.getMyApplications().subscribe({
      next: res => { this.applications = res.data; this.loading = false; },
      error: () => { this.loading = false; }
    });
    this.cvSvc.getMyCvs().subscribe({ next: res => this.cvCount = res.data.length });
  }
}
