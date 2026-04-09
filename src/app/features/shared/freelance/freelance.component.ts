import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { FreelanceService } from '../../../core/services/freelance.service';
import { AuthService } from '../../../core/services/auth.service';
import { FreelanceProject, ProjectBid, BidStatus } from '../../../core/models/models';

@Component({
  selector: 'app-freelance',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule, MatSnackBarModule, MatTabsModule, MatChipsModule
  ],
  template: `
<div class="page-wrapper">
  <div class="page-header">
    <h1 class="page-title">Espace Freelance</h1>
    <p class="page-subtitle">Trouvez des projets, soumettez vos offres et négociez</p>
  </div>

  <mat-tab-group [selectedIndex]="activeTab" (selectedIndexChange)="onTabChange($event)">

    <!-- ── Explorer des projets ── -->
    <mat-tab label="Explorer">
      <!-- Filtres -->
      <div class="filters-row">
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>Titre du projet</mat-label>
          <input matInput [(ngModel)]="filterTitle" (keyup.enter)="search()">
        </mat-form-field>
        <mat-form-field appearance="outline" class="filter-field">
          <mat-label>Compétences</mat-label>
          <input matInput [(ngModel)]="filterSkills" (keyup.enter)="search()">
        </mat-form-field>
        <button mat-raised-button color="primary" (click)="search()">
          <mat-icon>search</mat-icon> Rechercher
        </button>
      </div>

      @if(loadingProjects){<div class="center-spinner"><mat-spinner></mat-spinner></div>}
      <div class="projects-grid">
        @for(p of projects; track p.id) {
          <div class="project-card" (click)="selectProject(p)">
            <div class="project-status-chip" [ngClass]="statusClass(p.status)">{{ p.status }}</div>
            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.description | slice:0:120 }}{{ p.description.length>120?'…':'' }}</p>
            @if(p.requiredSkills) {
              <div class="skills-row">
                @for(sk of (p.requiredSkills.split(',').slice(0,4)); track sk) {
                  <span class="skill-chip">{{ sk.trim() }}</span>
                }
              </div>
            }
            <div class="project-footer">
              <span class="budget">
                @if(p.budgetMin||p.budgetMax){💰 {{ p.budgetMin||0 | number }} – {{ p.budgetMax || '?' }} €}
              </span>
              <span class="bids">{{ p.bidCount || 0 }} offre(s)</span>
            </div>
          </div>
        }
      </div>
      @if(!loadingProjects && projects.length===0) {
        <div class="empty-state"><mat-icon>work_off</mat-icon><p>Aucun projet disponible.</p></div>
      }
      @if(!loadingProjects && !lastPage) {
        <div class="load-more"><button mat-stroked-button (click)="loadMore()">Voir plus</button></div>
      }
    </mat-tab>

    <!-- ── Mes offres soumises ── -->
    <mat-tab label="Mes offres">
      @if(loadingBids){<div class="center-spinner"><mat-spinner></mat-spinner></div>}
      @for(bid of myBids; track bid.id) {
        <div class="bid-card">
          <div class="bid-header">
            <span class="bid-status" [ngClass]="bidStatusClass(bid.status)">{{ bid.status }}</span>
            <span class="bid-amount">{{ bid.proposedAmount | number }} € — {{ bid.proposedDurationDays }} j</span>
          </div>
          <p>{{ bid.coverLetter | slice:0:100 }}{{ (bid.coverLetter?.length||0)>100?'…':'' }}</p>
          @if(bid.status==='NEGOTIATING' && bid.counterAmount) {
            <div class="counter-offer">
              <b>Contre-offre :</b> {{ bid.counterAmount | number }} € — {{ bid.counterDurationDays }} j
              @if(bid.negotiationNote){ <p>{{ bid.negotiationNote }}</p> }
              <div class="negotiate-actions">
                <button mat-raised-button color="primary" (click)="acceptCounter(bid)">Accepter</button>
                <button mat-stroked-button color="warn" (click)="declineCounter(bid)">Décliner</button>
              </div>
            </div>
          }
          @if(bid.status==='PENDING' || bid.status==='NEGOTIATING') {
            <button mat-stroked-button color="warn" (click)="withdrawBid(bid)">Retirer mon offre</button>
          }
        </div>
      }
      @if(!loadingBids && myBids.length===0) {
        <div class="empty-state"><mat-icon>gavel</mat-icon><p>Vous n'avez pas encore soumis d'offres.</p></div>
      }
    </mat-tab>

    <!-- ── Mes projets publiés ── -->
    <mat-tab label="Mes projets">
      <div class="my-projects-header">
        <button mat-raised-button color="primary" (click)="showProjectForm=!showProjectForm">
          <mat-icon>add</mat-icon> Publier un projet
        </button>
      </div>
      @if(showProjectForm) {
        <form [formGroup]="projectForm" (ngSubmit)="createProject()" class="project-form card">
          <h3>{{ editingProject ? 'Modifier le projet' : 'Nouveau projet' }}</h3>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Titre *</mat-label>
            <input matInput formControlName="title">
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Description *</mat-label>
            <textarea matInput formControlName="description" rows="4"></textarea>
          </mat-form-field>
          <div class="two-col">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Compétences (CSV)</mat-label>
              <input matInput formControlName="requiredSkills">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Durée (jours)</mat-label>
              <input matInput type="number" formControlName="durationDays">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Budget min (€)</mat-label>
              <input matInput type="number" formControlName="budgetMin">
            </mat-form-field>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Budget max (€)</mat-label>
              <input matInput type="number" formControlName="budgetMax">
            </mat-form-field>
          </div>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Date limite</mat-label>
            <input matInput type="date" formControlName="deadlineDate">
          </mat-form-field>
          <div class="form-actions">
            <button mat-button type="button" (click)="cancelProjectForm()">Annuler</button>
            <button mat-raised-button color="primary" type="submit" [disabled]="projectForm.invalid||creatingProject">
              {{ editingProject ? 'Mettre à jour' : 'Publier' }}
            </button>
          </div>
        </form>
      }
      @if(loadingMyProjects){<div class="center-spinner"><mat-spinner></mat-spinner></div>}
      @for(p of myProjects; track p.id) {
        <div class="project-card my-project">
          <div class="project-status-chip" [ngClass]="statusClass(p.status)">{{ p.status }}</div>
          <h3>{{ p.title }}</h3>
          <p class="project-desc">{{ p.description | slice:0:100 }}…</p>
          <div class="project-footer">
            <span class="bids">{{ p.bidCount || 0 }} offre(s) reçue(s)</span>
            <div class="actions">
              <button mat-icon-button (click)="editProject(p)"><mat-icon>edit</mat-icon></button>
              <button mat-icon-button color="warn" (click)="deleteProject(p)"><mat-icon>delete</mat-icon></button>
              <button mat-stroked-button (click)="viewBids(p)">Voir les offres</button>
            </div>
          </div>
          @if(selectedProjectBids[p.id]) {
            <div class="bids-list">
              @for(bid of selectedProjectBids[p.id]; track bid.id) {
                <div class="bid-item">
                  <span><b>{{ bid.freelancer.fullName }}</b> — {{ bid.proposedAmount | number }} € / {{ bid.proposedDurationDays }} j</span>
                  <span class="bid-status" [ngClass]="bidStatusClass(bid.status)">{{ bid.status }}</span>
                  @if(bid.status==='PENDING') {
                    <button mat-stroked-button color="primary" (click)="acceptBid(bid)">Accepter</button>
                    <button mat-stroked-button color="warn" (click)="rejectBid(bid)">Rejeter</button>
                    <button mat-icon-button (click)="openNegotiateDialog(bid, p.id)"><mat-icon>swap_horiz</mat-icon></button>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
    </mat-tab>

  </mat-tab-group>
</div>

<!-- Project Detail Panel -->
@if(selectedProject) {
  <div class="detail-overlay" (click)="closeProject()">
    <div class="detail-panel" (click)="$event.stopPropagation()">
      <button class="close-btn" mat-icon-button (click)="closeProject()"><mat-icon>close</mat-icon></button>
      <h2>{{ selectedProject.title }}</h2>
      <div class="project-status-chip" [ngClass]="statusClass(selectedProject.status)">{{ selectedProject.status }}</div>
      <p>{{ selectedProject.description }}</p>
      @if(selectedProject.requiredSkills) {
        <div class="skills-row">
          @for(sk of selectedProject.requiredSkills.split(','); track sk) {
            <span class="skill-chip">{{ sk.trim() }}</span>
          }
        </div>
      }
      <div class="detail-meta">
        <span>💰 {{ selectedProject.budgetMin||(0) | number }} – {{ selectedProject.budgetMax || '?' }} €</span>
        <span>⏱ {{ selectedProject.durationDays || '?' }} jours</span>
        <span>📅 Deadline: {{ selectedProject.deadlineDate | date:'dd/MM/yy' }}</span>
        <span>👤 {{ selectedProject.postedBy.fullName }}</span>
      </div>
      @if(selectedProject.postedBy.id !== auth.currentUser?.id && selectedProject.status==='OPEN') {
        @if(!showBidForm) {
          <button mat-raised-button color="primary" (click)="showBidForm=true">Soumettre une offre</button>
        } @else {
          <form [formGroup]="bidForm" (ngSubmit)="submitBid()" class="bid-form">
            <h4>Mon offre</h4>
            <div class="two-col">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Montant proposé (€) *</mat-label>
                <input matInput type="number" formControlName="proposedAmount">
              </mat-form-field>
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Durée proposée (jours) *</mat-label>
                <input matInput type="number" formControlName="proposedDurationDays">
              </mat-form-field>
            </div>
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Lettre de motivation</mat-label>
              <textarea matInput formControlName="coverLetter" rows="4"></textarea>
            </mat-form-field>
            <div class="form-actions">
              <button mat-button type="button" (click)="showBidForm=false">Annuler</button>
              <button mat-raised-button color="primary" type="submit" [disabled]="bidForm.invalid||submittingBid">Soumettre</button>
            </div>
          </form>
        }
      }
    </div>
  </div>
}

<!-- Negotiate dialog -->
@if(negotiatingBid) {
  <div class="detail-overlay" (click)="cancelNegotiate()">
    <div class="detail-panel" style="max-width:480px" (click)="$event.stopPropagation()">
      <button class="close-btn" mat-icon-button (click)="cancelNegotiate()"><mat-icon>close</mat-icon></button>
      <h3>Envoyer une contre-offre</h3>
      <form [formGroup]="negotiateForm" (ngSubmit)="sendCounterOffer()" class="bid-form">
        <div class="two-col">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contre-montant (€)</mat-label>
            <input matInput type="number" formControlName="counterAmount">
          </mat-form-field>
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contre-durée (jours)</mat-label>
            <input matInput type="number" formControlName="counterDurationDays">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Note de négociation</mat-label>
          <textarea matInput formControlName="negotiationNote" rows="3"></textarea>
        </mat-form-field>
        <div class="form-actions">
          <button mat-button type="button" (click)="cancelNegotiate()">Annuler</button>
          <button mat-raised-button color="primary" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
}
  `,
  styles: [`
.page-wrapper{padding:20px;max-width:1200px;margin:0 auto}
.page-header{margin-bottom:24px}
.page-title{font-size:24px;font-weight:700;color:#1e293b;margin:0}
.page-subtitle{color:#64748b;margin:4px 0 0}
.filters-row{display:flex;gap:12px;align-items:center;padding:16px 0}
.filter-field{min-width:200px}
.projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px;padding:8px 0 16px}
.project-card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 4px rgba(0,0,0,.08);cursor:pointer;transition:box-shadow .2s;position:relative}
.project-card:hover{box-shadow:0 4px 12px rgba(0,0,0,.12)}
.project-card.my-project{cursor:default}
.project-status-chip{display:inline-block;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600;margin-bottom:8px}
.status-open{background:#dcfce7;color:#166534}.status-in_progress{background:#dbeafe;color:#1e40af}.status-completed{background:#f3f4f6;color:#374151}.status-cancelled{background:#fef2f2;color:#991b1b}
.project-card h3{font-size:15px;font-weight:700;color:#1e293b;margin:0 0 8px}
.project-desc{font-size:13px;color:#64748b;line-height:1.5;margin-bottom:12px}
.skills-row{display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px}
.skill-chip{background:#ede9fe;color:#6d28d9;font-size:12px;padding:3px 8px;border-radius:12px}
.project-footer{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#64748b}
.budget{font-weight:600;color:#1e293b}
.center-spinner{display:flex;justify-content:center;padding:40px}
.empty-state{text-align:center;padding:48px;color:#94a3b8}
.empty-state mat-icon{font-size:48px;width:48px;height:48px}
.load-more{text-align:center;margin:16px 0}
.bid-card{background:#fff;border-radius:12px;padding:16px;box-shadow:0 1px 4px rgba(0,0,0,.08);margin-bottom:12px}
.bid-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.bid-status{padding:3px 10px;border-radius:20px;font-size:12px;font-weight:600}
.bid-pending{background:#fef9c3;color:#854d0e}.bid-accepted{background:#dcfce7;color:#166534}.bid-rejected{background:#fef2f2;color:#991b1b}.bid-negotiating{background:#dbeafe;color:#1e40af}.bid-withdrawn{background:#f1f5f9;color:#64748b}
.bid-amount{font-weight:700;color:#1e293b}
.counter-offer{background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px;margin:8px 0}
.negotiate-actions{display:flex;gap:8px;margin-top:8px}
.my-projects-header{padding:16px 0}
.project-form{margin-bottom:16px}
.card{background:#fff;border-radius:12px;padding:20px;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.full-width{width:100%}
.form-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:8px}
.actions{display:flex;gap:4px;align-items:center}
.bids-list{margin-top:12px;border-top:1px solid #f1f5f9;padding-top:12px;display:flex;flex-direction:column;gap:8px}
.bid-item{display:flex;align-items:center;gap:8px;flex-wrap:wrap;background:#f8fafc;border-radius:8px;padding:8px 12px;font-size:13px}
.detail-overlay{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:1000;display:flex;align-items:center;justify-content:center}
.detail-panel{background:#fff;border-radius:16px;padding:28px;max-width:600px;width:90%;max-height:90vh;overflow-y:auto;position:relative}
.close-btn{position:absolute;top:12px;right:12px}
.detail-meta{display:flex;flex-wrap:wrap;gap:12px;margin:12px 0;font-size:13px;color:#64748b}
.bid-form{margin-top:16px;display:flex;flex-direction:column;gap:12px}
.skills-row{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0}
  `]
})
export class FreelanceComponent implements OnInit {
  readonly auth      = inject(AuthService);
  private readonly freelanceSvc = inject(FreelanceService);
  private readonly snack        = inject(MatSnackBar);
  private readonly fb           = inject(FormBuilder);

  activeTab = 0;
  projects:  FreelanceProject[] = [];
  myProjects: FreelanceProject[] = [];
  myBids:    ProjectBid[] = [];
  selectedProjectBids: Record<number, ProjectBid[]> = {};

  loadingProjects = true;
  loadingMyProjects = false;
  loadingBids = false;
  creatingProject = false;
  submittingBid = false;

  filterTitle = '';
  filterSkills = '';
  page = 0;
  lastPage = false;

  showProjectForm = false;
  showBidForm = false;
  editingProject: FreelanceProject | null = null;
  selectedProject: FreelanceProject | null = null;
  negotiatingBid:  ProjectBid | null = null;
  negotiatingProjectId: number | null = null;

  projectForm = this.fb.group({
    title:         ['', Validators.required],
    description:   ['', Validators.required],
    requiredSkills: [''],
    durationDays:  [null as number|null],
    budgetMin:     [null as number|null],
    budgetMax:     [null as number|null],
    deadlineDate:  ['']
  });

  bidForm = this.fb.group({
    proposedAmount:      [null as number|null, [Validators.required, Validators.min(1)]],
    proposedDurationDays:[null as number|null, [Validators.required, Validators.min(1)]],
    coverLetter:         ['']
  });

  negotiateForm = this.fb.group({
    counterAmount:       [null as number|null],
    counterDurationDays: [null as number|null],
    negotiationNote:     ['']
  });

  ngOnInit(): void {
    this.loadProjects();
  }

  onTabChange(idx: number): void {
    this.activeTab = idx;
    if (idx === 1 && this.myBids.length === 0) this.loadMyBids();
    if (idx === 2 && this.myProjects.length === 0) this.loadMyProjects();
  }

  search(): void { this.page = 0; this.projects = []; this.loadProjects(); }
  loadMore(): void { this.page++; this.loadProjects(); }

  loadProjects(): void {
    this.loadingProjects = true;
    this.freelanceSvc.search(this.filterTitle||undefined, this.filterSkills||undefined, this.page).subscribe({
      next: res => {
        this.projects.push(...res.data.content);
        this.lastPage = res.data.last; this.loadingProjects = false;
      },
      error: () => { this.loadingProjects = false; }
    });
  }

  loadMyBids(): void {
    this.loadingBids = true;
    this.freelanceSvc.getMyBids().subscribe({
      next: res => { this.myBids = res.data; this.loadingBids = false; },
      error: () => { this.loadingBids = false; }
    });
  }

  loadMyProjects(): void {
    this.loadingMyProjects = true;
    this.freelanceSvc.getMyProjects().subscribe({
      next: res => { this.myProjects = res.data.content; this.loadingMyProjects = false; },
      error: () => { this.loadingMyProjects = false; }
    });
  }

  createProject(): void {
    if (this.projectForm.invalid) return;
    this.creatingProject = true;
    const req = { ...this.projectForm.value } as any;
    const obs = this.editingProject
      ? this.freelanceSvc.updateProject(this.editingProject.id, req)
      : this.freelanceSvc.createProject(req);
    obs.subscribe({
      next: res => {
        if (this.editingProject) {
          const i = this.myProjects.findIndex(p => p.id === this.editingProject!.id);
          if (i >= 0) this.myProjects[i] = res.data;
        } else {
          this.myProjects.unshift(res.data);
        }
        this.cancelProjectForm(); this.creatingProject = false;
        this.snack.open(this.editingProject ? 'Mis à jour' : 'Projet publié', 'OK', { duration: 2000 });
      },
      error: () => { this.creatingProject = false; }
    });
  }

  editProject(p: FreelanceProject): void {
    this.editingProject = p;
    this.showProjectForm = true;
    this.projectForm.patchValue({
      title: p.title, description: p.description, requiredSkills: p.requiredSkills,
      durationDays: p.durationDays ?? null, budgetMin: p.budgetMin ?? null, budgetMax: p.budgetMax ?? null,
      deadlineDate: p.deadlineDate ?? ''
    });
  }

  cancelProjectForm(): void { this.showProjectForm = false; this.editingProject = null; this.projectForm.reset(); }

  deleteProject(p: FreelanceProject): void {
    this.freelanceSvc.deleteProject(p.id).subscribe(() => {
      this.myProjects = this.myProjects.filter(pr => pr.id !== p.id);
      this.snack.open('Supprimé', 'OK', { duration: 2000 });
    });
  }

  viewBids(p: FreelanceProject): void {
    if (this.selectedProjectBids[p.id]) { delete this.selectedProjectBids[p.id]; return; }
    this.freelanceSvc.getProjectBids(p.id).subscribe(res => { this.selectedProjectBids[p.id] = res.data; });
  }

  selectProject(p: FreelanceProject): void { this.selectedProject = p; this.showBidForm = false; }
  closeProject(): void { this.selectedProject = null; this.showBidForm = false; }

  submitBid(): void {
    if (this.bidForm.invalid || !this.selectedProject) return;
    this.submittingBid = true;
    this.freelanceSvc.submitBid(this.selectedProject.id, this.bidForm.value as any).subscribe({
      next: res => {
        this.myBids.unshift(res.data); this.showBidForm = false; this.submittingBid = false;
        this.snack.open('Offre soumise avec succès', 'OK', { duration: 2000 });
        this.closeProject();
        if (this.activeTab !== 1) this.activeTab = 1;
      },
      error: err => {
        this.submittingBid = false;
        this.snack.open(err.error?.message || 'Erreur', 'OK', { duration: 3000 });
      }
    });
  }

  withdrawBid(bid: ProjectBid): void {
    this.freelanceSvc.withdrawBid(bid.id).subscribe(() => {
      bid.status = 'WITHDRAWN'; this.snack.open('Offre retirée', 'OK', { duration: 2000 });
    });
  }

  acceptBid(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'ACCEPTED' }).subscribe(res => {
      bid.status = res.data.status;
      this.snack.open('Offre acceptée', 'OK', { duration: 2000 });
    });
  }

  rejectBid(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'REJECTED' }).subscribe(res => {
      bid.status = res.data.status;
    });
  }

  openNegotiateDialog(bid: ProjectBid, projectId: number): void {
    this.negotiatingBid = bid;
    this.negotiatingProjectId = projectId;
  }
  cancelNegotiate(): void { this.negotiatingBid = null; this.negotiatingProjectId = null; this.negotiateForm.reset(); }

  sendCounterOffer(): void {
    if (!this.negotiatingBid || this.negotiatingProjectId === null) return;
    const req = { status: 'NEGOTIATING' as BidStatus, ...this.negotiateForm.value };
    this.freelanceSvc.negotiate(this.negotiatingBid.id, req as any).subscribe(res => {
      this.negotiatingBid!.status = res.data.status;
      const bids = this.selectedProjectBids[this.negotiatingProjectId!];
      if (bids) { const i = bids.findIndex(b => b.id === res.data.id); if (i >= 0) bids[i] = res.data; }
      this.cancelNegotiate();
      this.snack.open('Contre-offre envoyée', 'OK', { duration: 2000 });
    });
  }

  acceptCounter(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'ACCEPTED' }).subscribe(res => {
      bid.status = res.data.status;
      this.snack.open('Contre-offre acceptée', 'OK', { duration: 2000 });
    });
  }

  declineCounter(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'REJECTED' }).subscribe(() => { bid.status = 'REJECTED'; });
  }

  statusClass(s: string): Record<string,boolean> {
    return { 'status-open': s==='OPEN', 'status-in_progress': s==='IN_PROGRESS', 'status-completed': s==='COMPLETED', 'status-cancelled': s==='CANCELLED' };
  }
  bidStatusClass(s: BidStatus): Record<string,boolean> {
    return { 'bid-pending': s==='PENDING', 'bid-accepted': s==='ACCEPTED', 'bid-rejected': s==='REJECTED', 'bid-negotiating': s==='NEGOTIATING', 'bid-withdrawn': s==='WITHDRAWN' };
  }
}
