import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertService } from '../../../core/services/alert.service';
import { FreelanceService } from '../../../core/services/freelance.service';
import { AuthService } from '../../../core/services/auth.service';
import { FreelanceProject, ProjectBid, BidStatus } from '../../../core/models/models';

@Component({
  selector: 'app-freelance',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
    MatMenuModule, MatProgressSpinnerModule, MatTabsModule, MatChipsModule, MatTooltipModule
  ],
  template: `
<div class="page-wrapper">
  <section class="hero-card">
    <div class="hero-copy">
      <span class="hero-eyebrow">Projets freelance</span>
      <h1 class="page-title">Espace Freelance</h1>
      <p class="page-subtitle">Trouvez des projets, soumettez vos offres et gerez vos negociations dans une interface plus claire et plus moderne.</p>
    </div>

    <div class="hero-stats">
      <div class="stat-pill">
        <strong>{{ projects.length }}</strong>
        <span>projets explores</span>
      </div>
      <div class="stat-pill accent">
        <strong>{{ myBids.length }}</strong>
        <span>offres envoyees</span>
      </div>
      <div class="stat-pill">
        <strong>{{ myProjects.length }}</strong>
        <span>projets publies</span>
      </div>
    </div>
  </section>

  <mat-tab-group class="freelance-tabs" [selectedIndex]="activeTab" (selectedIndexChange)="onTabChange($event)">
    <mat-tab label="Explorer">
      <div class="surface-card filter-panel">
        <div class="panel-copy">
          <h3>Recherche de projets</h3>
          <p>Filtrez rapidement les projets par titre et competences pour trouver les missions les plus pertinentes.</p>
        </div>

        <div class="filters-row">
          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>Titre du projet</mat-label>
            <input matInput [(ngModel)]="filterTitle" (keyup.enter)="search()">
          </mat-form-field>

          <mat-form-field appearance="outline" class="filter-field">
            <mat-label>Competences</mat-label>
            <input matInput [(ngModel)]="filterSkills" (keyup.enter)="search()">
          </mat-form-field>

          <button type="button" class="btn-primary btn-search" (click)="search()">
            <mat-icon>search</mat-icon>
            <span>Rechercher</span>
          </button>
        </div>
      </div>

      @if (loadingProjects) {
        <div class="center-spinner"><mat-spinner></mat-spinner></div>
      }

      <div class="projects-grid">
        @for (p of projects; track p.id) {
          <article class="project-card clickable-card" (click)="selectProject(p)">
            <div class="project-card-top">
              <span class="project-status-chip" [ngClass]="statusClass(p.status)">{{ statusLabel(p.status) }}</span>
              <span class="mini-counter">{{ p.bidCount || 0 }} offre(s)</span>
            </div>

            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.description | slice:0:140 }}{{ p.description.length > 140 ? '...' : '' }}</p>

            @if (skillsOf(p.requiredSkills, 4).length) {
              <div class="skills-row">
                @for (sk of skillsOf(p.requiredSkills, 4); track sk) {
                  <span class="skill-chip">{{ sk }}</span>
                }
              </div>
            }

            <div class="project-meta-grid">
              <span class="meta-chip">
                <mat-icon>payments</mat-icon>
                {{ p.budgetMin || 0 | number }} - {{ p.budgetMax || '?' }} EUR
              </span>
              <span class="meta-chip">
                <mat-icon>schedule</mat-icon>
                {{ p.durationDays || '?' }} jours
              </span>
              @if (p.deadlineDate) {
                <span class="meta-chip">
                  <mat-icon>event</mat-icon>
                  {{ p.deadlineDate | date:'dd/MM/yyyy' }}
                </span>
              }
              <span class="meta-chip">
                <mat-icon>person</mat-icon>
                {{ p.postedBy.fullName }}
              </span>
            </div>

            <div class="project-footer">
              <span class="project-cta">
                Voir le projet
                <mat-icon>arrow_forward</mat-icon>
              </span>
            </div>
          </article>
        }
      </div>

      @if (!loadingProjects && projects.length === 0) {
        <div class="surface-card empty-state">
          <mat-icon>work_off</mat-icon>
          <h3>Aucun projet disponible</h3>
          <p>Essayez un autre filtre ou revenez plus tard pour decouvrir de nouvelles missions.</p>
        </div>
      }

      @if (!loadingProjects && !lastPage) {
        <div class="load-more">
          <button type="button" class="btn-outline" (click)="loadMore()">
            <mat-icon>expand_more</mat-icon>
            <span>Voir plus</span>
          </button>
        </div>
      }
    </mat-tab>

    <mat-tab label="Mes offres">
      @if (loadingBids) {
        <div class="center-spinner"><mat-spinner></mat-spinner></div>
      }

      <div class="stack-list">
        @for (bid of myBids; track bid.id) {
          <article class="surface-card bid-card">
            <div class="bid-header">
              <div class="bid-header-left">
                <span class="bid-status" [ngClass]="bidStatusClass(bid.status)">{{ bidStatusLabel(bid.status) }}</span>
                <span class="bid-amount-pill">{{ bid.proposedAmount | number }} EUR</span>
              </div>
              <span class="bid-duration">{{ bid.proposedDurationDays }} jours</span>
            </div>

            <p class="bid-text">{{ bid.coverLetter || 'Aucune lettre de motivation ajoutee pour cette offre.' }}</p>

            @if (bid.status === 'NEGOTIATING' && bid.counterAmount) {
              <div class="counter-offer">
                <div class="counter-header">
                  <mat-icon>swap_horiz</mat-icon>
                  <strong>Contre-offre recue</strong>
                </div>
                <p>{{ bid.counterAmount | number }} EUR pour {{ bid.counterDurationDays }} jours</p>
                @if (bid.negotiationNote) {
                  <p class="counter-note">{{ bid.negotiationNote }}</p>
                }
                <div class="button-row">
                  <button type="button" class="btn-primary" (click)="acceptCounter(bid)">
                    <mat-icon>check</mat-icon>
                    <span>Accepter</span>
                  </button>
                  <button type="button" class="btn-danger-outline" (click)="declineCounter(bid)">
                    <mat-icon>close</mat-icon>
                    <span>Decliner</span>
                  </button>
                </div>
              </div>
            }

            @if (bid.status === 'PENDING' || bid.status === 'NEGOTIATING') {
              <div class="bid-footer">
                <button type="button" class="btn-danger-outline" (click)="withdrawBid(bid)">
                  <mat-icon>undo</mat-icon>
                  <span>Retirer mon offre</span>
                </button>
              </div>
            }
          </article>
        }
      </div>

      @if (!loadingBids && myBids.length === 0) {
        <div class="surface-card empty-state">
          <mat-icon>gavel</mat-icon>
          <h3>Aucune offre envoyee</h3>
          <p>Parcourez les projets disponibles et soumettez votre premiere proposition.</p>
        </div>
      }
    </mat-tab>

    <mat-tab label="Mes projets">
      <div class="my-projects-header">
        <div>
          <h3>Gestion de mes projets</h3>
          <p>Publiez une mission, suivez les offres recues et negociez depuis le meme espace.</p>
        </div>

        <button type="button" class="btn-primary" (click)="toggleProjectForm()">
          <mat-icon>{{ showProjectForm && !editingProject ? 'close' : 'add' }}</mat-icon>
          <span>{{ showProjectForm && !editingProject ? 'Fermer' : 'Publier un projet' }}</span>
        </button>
      </div>

      @if (showProjectForm) {
        <form [formGroup]="projectForm" (ngSubmit)="createProject()" class="surface-card project-form">
          <div class="form-head">
            <div>
              <span class="section-eyebrow">Edition</span>
              <h3>{{ editingProject ? 'Modifier le projet' : 'Nouveau projet freelance' }}</h3>
            </div>
          </div>

          <div class="form-grid">
            <mat-form-field appearance="outline" class="full-width form-span-2">
              <mat-label>Titre *</mat-label>
              <input matInput formControlName="title">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width form-span-2">
              <mat-label>Description *</mat-label>
              <textarea matInput formControlName="description" rows="5"></textarea>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width form-span-2">
              <mat-label>Competences requises</mat-label>
              <input matInput formControlName="requiredSkills" placeholder="Angular, Java, UX, SQL">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Duree (jours)</mat-label>
              <input matInput type="number" formControlName="durationDays">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Date limite</mat-label>
              <input matInput type="date" formControlName="deadlineDate">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Budget min (EUR)</mat-label>
              <input matInput type="number" formControlName="budgetMin">
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Budget max (EUR)</mat-label>
              <input matInput type="number" formControlName="budgetMax">
            </mat-form-field>
          </div>

          <div class="form-actions">
            <button type="button" class="btn-soft" (click)="cancelProjectForm()">Annuler</button>
            <button type="submit" class="btn-primary" [disabled]="projectForm.invalid || creatingProject">
              @if (creatingProject) {
                <mat-spinner diameter="18"></mat-spinner>
                <span>Enregistrement...</span>
              } @else {
                <mat-icon>save</mat-icon>
                <span>{{ editingProject ? 'Mettre a jour' : 'Publier' }}</span>
              }
            </button>
          </div>
        </form>
      }

      @if (loadingMyProjects) {
        <div class="center-spinner"><mat-spinner></mat-spinner></div>
      }

      <div class="stack-list">
        @for (p of myProjects; track p.id) {
          <article class="surface-card project-card my-project">
            <div class="project-card-top">
              <span class="project-status-chip" [ngClass]="statusClass(p.status)">{{ statusLabel(p.status) }}</span>
              <span class="mini-counter">{{ p.bidCount || 0 }} offre(s) recue(s)</span>
            </div>

            <h3>{{ p.title }}</h3>
            <p class="project-desc">{{ p.description | slice:0:120 }}{{ p.description.length > 120 ? '...' : '' }}</p>

            @if (skillsOf(p.requiredSkills, 5).length) {
              <div class="skills-row">
                @for (sk of skillsOf(p.requiredSkills, 5); track sk) {
                  <span class="skill-chip">{{ sk }}</span>
                }
              </div>
            }

            <div class="project-meta-grid">
              <span class="meta-chip">
                <mat-icon>payments</mat-icon>
                {{ p.budgetMin || 0 | number }} - {{ p.budgetMax || '?' }} EUR
              </span>
              <span class="meta-chip">
                <mat-icon>schedule</mat-icon>
                {{ p.durationDays || '?' }} jours
              </span>
            </div>

            <div class="project-actions-row">
              <div class="inline-actions">
                <button type="button" class="icon-action" (click)="editProject(p)" matTooltip="Modifier">
                  <mat-icon>edit</mat-icon>
                </button>
                <button type="button" class="icon-action danger" (click)="deleteProject(p)" matTooltip="Supprimer">
                  <mat-icon>delete</mat-icon>
                </button>
              </div>

              <button type="button" class="btn-outline" (click)="viewBids(p)">
                <mat-icon>{{ selectedProjectBids[p.id] ? 'expand_less' : 'visibility' }}</mat-icon>
                <span>{{ selectedProjectBids[p.id] ? 'Masquer les offres' : 'Voir les offres' }}</span>
              </button>
            </div>

            @if (selectedProjectBids[p.id]) {
              <div class="bids-list">
                @if (selectedProjectBids[p.id].length === 0) {
                  <div class="empty-inline">
                    <mat-icon>inbox</mat-icon>
                    <span>Aucune offre recue pour ce projet.</span>
                  </div>
                }

                @for (bid of selectedProjectBids[p.id]; track bid.id) {
                  <div class="bid-item">
                    <div class="bid-item-main">
                      <div class="bid-user">
                        <div class="user-badge">{{ initials(bid.freelancer.fullName) }}</div>
                        <div>
                          <strong>{{ bid.freelancer.fullName }}</strong>
                          <p>{{ bid.proposedAmount | number }} EUR / {{ bid.proposedDurationDays }} jours</p>
                        </div>
                      </div>

                      <span class="bid-status" [ngClass]="bidStatusClass(bid.status)">{{ bidStatusLabel(bid.status) }}</span>
                    </div>

                    @if (bid.coverLetter) {
                      <p class="bid-note">{{ bid.coverLetter | slice:0:180 }}{{ bid.coverLetter.length > 180 ? '...' : '' }}</p>
                    }

                    @if (bid.status === 'PENDING') {
                      <div class="button-row compact">
                        <button type="button" class="btn-primary" (click)="acceptBid(bid)">
                          <mat-icon>check</mat-icon>
                          <span>Accepter</span>
                        </button>
                        <button type="button" class="btn-danger-outline" (click)="rejectBid(bid)">
                          <mat-icon>close</mat-icon>
                          <span>Rejeter</span>
                        </button>
                        <button type="button" class="btn-soft" (click)="openNegotiateDialog(bid, p.id)">
                          <mat-icon>swap_horiz</mat-icon>
                          <span>Negocier</span>
                        </button>
                      </div>
                    }
                  </div>
                }
              </div>
            }
          </article>
        }
      </div>
    </mat-tab>
  </mat-tab-group>
</div>

@if (selectedProject) {
  <div class="detail-overlay" (click)="closeProject()">
    <div class="detail-panel" (click)="$event.stopPropagation()">
      <button type="button" class="close-btn" mat-icon-button (click)="closeProject()">
        <mat-icon>close</mat-icon>
      </button>

      <div class="detail-header">
        <div>
          <span class="section-eyebrow">Projet selectionne</span>
          <h2>{{ selectedProject.title }}</h2>
          <p>{{ selectedProject.description }}</p>
        </div>
        <span class="project-status-chip" [ngClass]="statusClass(selectedProject.status)">{{ statusLabel(selectedProject.status) }}</span>
      </div>

      @if (skillsOf(selectedProject.requiredSkills).length) {
        <div class="skills-row detail-skills">
          @for (sk of skillsOf(selectedProject.requiredSkills); track sk) {
            <span class="skill-chip">{{ sk }}</span>
          }
        </div>
      }

      <div class="detail-meta-grid">
        <span class="meta-chip">
          <mat-icon>payments</mat-icon>
          {{ selectedProject.budgetMin || 0 | number }} - {{ selectedProject.budgetMax || '?' }} EUR
        </span>
        <span class="meta-chip">
          <mat-icon>schedule</mat-icon>
          {{ selectedProject.durationDays || '?' }} jours
        </span>
        @if (selectedProject.deadlineDate) {
          <span class="meta-chip">
            <mat-icon>event</mat-icon>
            {{ selectedProject.deadlineDate | date:'dd/MM/yyyy' }}
          </span>
        }
        <span class="meta-chip">
          <mat-icon>person</mat-icon>
          {{ selectedProject.postedBy.fullName }}
        </span>
      </div>

      @if (selectedProject.postedBy.id !== auth.currentUser?.id && selectedProject.status === 'OPEN') {
        <div class="detail-callout">
          <h4>Proposer votre offre</h4>
          <p>Envoyez une proposition claire avec votre montant, votre delai et un court message de motivation.</p>
        </div>

        @if (!showBidForm) {
          <button type="button" class="btn-primary detail-action" (click)="showBidForm = true">
            <mat-icon>send</mat-icon>
            <span>Soumettre une offre</span>
          </button>
        } @else {
          <form [formGroup]="bidForm" (ngSubmit)="submitBid()" class="surface-card bid-form">
            <h4>Mon offre</h4>

            <div class="form-grid">
              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Montant propose (EUR) *</mat-label>
                <input matInput type="number" formControlName="proposedAmount">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Duree proposee (jours) *</mat-label>
                <input matInput type="number" formControlName="proposedDurationDays">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width form-span-2">
                <mat-label>Lettre de motivation</mat-label>
                <textarea matInput formControlName="coverLetter" rows="4"></textarea>
              </mat-form-field>
            </div>

            <div class="form-actions">
              <button type="button" class="btn-soft" (click)="showBidForm = false">Annuler</button>
              <button type="submit" class="btn-primary" [disabled]="bidForm.invalid || submittingBid">
                @if (submittingBid) {
                  <mat-spinner diameter="18"></mat-spinner>
                  <span>Envoi...</span>
                } @else {
                  <mat-icon>bolt</mat-icon>
                  <span>Soumettre</span>
                }
              </button>
            </div>
          </form>
        }
      }
    </div>
  </div>
}

@if (negotiatingBid) {
  <div class="detail-overlay" (click)="cancelNegotiate()">
    <div class="detail-panel compact-panel" (click)="$event.stopPropagation()">
      <button type="button" class="close-btn" mat-icon-button (click)="cancelNegotiate()">
        <mat-icon>close</mat-icon>
      </button>

      <div class="detail-header compact">
        <div>
          <span class="section-eyebrow">Negociation</span>
          <h3>Envoyer une contre-offre</h3>
          <p>Ajustez le montant, la duree et ajoutez une note claire pour cadrer la suite.</p>
        </div>
      </div>

      <form [formGroup]="negotiateForm" (ngSubmit)="sendCounterOffer()" class="surface-card bid-form no-shadow">
        <div class="form-grid">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contre-montant (EUR)</mat-label>
            <input matInput type="number" formControlName="counterAmount">
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Contre-duree (jours)</mat-label>
            <input matInput type="number" formControlName="counterDurationDays">
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width form-span-2">
            <mat-label>Note de negociation</mat-label>
            <textarea matInput formControlName="negotiationNote" rows="3"></textarea>
          </mat-form-field>
        </div>

        <div class="form-actions">
          <button type="button" class="btn-soft" (click)="cancelNegotiate()">Annuler</button>
          <button type="submit" class="btn-primary">
            <mat-icon>send</mat-icon>
            <span>Envoyer</span>
          </button>
        </div>
      </form>
    </div>
  </div>
}
  `,
  styles: [`
    :host {
      --accent: #ff8c00;
      --accent-dark: #e67600;
      --accent-light: #ffb347;
      --accent-soft: rgba(255, 140, 0, 0.1);
      --surface: #fffaf4;
      --surface-strong: #fff3df;
      --ink: #1f2937;
      --muted: #6b7280;
      --line: rgba(31, 41, 55, 0.08);
      --shadow-soft: 0 14px 32px rgba(15, 23, 42, 0.08);
      --shadow-strong: 0 22px 40px rgba(255, 140, 0, 0.12);
      --success-bg: #dcfce7;
      --success-text: #166534;
      --info-bg: #dbeafe;
      --info-text: #1d4ed8;
      --warn-bg: #fef3c7;
      --warn-text: #b45309;
      --danger-bg: #fee2e2;
      --danger-text: #b91c1c;
      --neutral-bg: #f3f4f6;
      --neutral-text: #4b5563;
    }

    .page-wrapper {
      padding: 24px;
      max-width: 1240px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 22px;
      background:
        radial-gradient(circle at top right, rgba(255, 179, 71, 0.14), transparent 24%),
        linear-gradient(180deg, #fffdf9 0%, #fff7ef 100%);
      min-height: 100vh;
    }

    .hero-card,
    .surface-card,
    .project-card,
    .detail-panel {
      background: rgba(255, 255, 255, 0.96);
      border: 1px solid var(--line);
      box-shadow: var(--shadow-soft);
      backdrop-filter: blur(12px);
    }

    .hero-card {
      border-radius: 28px;
      padding: 28px;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 22px;
      background:
        linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.03)),
        #fff;
      position: relative;
      overflow: hidden;
    }

    .hero-card::after {
      content: '';
      position: absolute;
      inset: auto -48px -48px auto;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 179, 71, 0.28), transparent 65%);
      pointer-events: none;
    }

    .hero-copy {
      position: relative;
      z-index: 1;
      max-width: 640px;
    }

    .hero-eyebrow,
    .section-eyebrow {
      display: inline-flex;
      align-items: center;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.12);
      color: var(--accent-dark);
      font-size: 0.76rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .page-title {
      font-size: clamp(1.9rem, 3vw, 2.5rem);
      font-weight: 800;
      color: var(--ink);
      margin: 12px 0 8px;
      line-height: 1.1;
    }

    .page-subtitle {
      color: var(--muted);
      margin: 0;
      line-height: 1.65;
      font-size: 0.97rem;
    }

    .hero-stats {
      display: grid;
      gap: 12px;
      min-width: 230px;
      position: relative;
      z-index: 1;
    }

    .stat-pill {
      padding: 16px 18px;
      border-radius: 20px;
      background: rgba(255, 255, 255, 0.92);
      border: 1px solid rgba(255, 140, 0, 0.08);
      box-shadow: 0 10px 22px rgba(255, 140, 0, 0.08);
    }

    .stat-pill.accent {
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.15), rgba(255, 179, 71, 0.08));
    }

    .stat-pill strong {
      display: block;
      font-size: 1.28rem;
      margin-bottom: 4px;
      color: var(--ink);
    }

    .stat-pill span {
      display: block;
      color: var(--muted);
      font-size: 0.84rem;
    }

    .surface-card {
      border-radius: 24px;
      padding: 22px;
    }

    .filter-panel {
      display: flex;
      flex-direction: column;
      gap: 18px;
      margin-top: 18px;
    }

    .panel-copy h3,
    .my-projects-header h3,
    .form-head h3 {
      margin: 0 0 6px;
      color: var(--ink);
      font-size: 1.16rem;
    }

    .panel-copy p,
    .my-projects-header p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
    }

    .filters-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) auto;
      gap: 12px;
      align-items: center;
    }

    .filter-field,
    .full-width {
      width: 100%;
    }

    .btn-primary,
    .btn-outline,
    .btn-soft,
    .btn-danger-outline {
      border-radius: 14px;
      font-weight: 700;
      border: 1px solid transparent;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      text-decoration: none;
      min-height: 46px;
      padding: 0 18px;
      font-size: 0.92rem;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--accent), var(--accent-dark));
      color: #fff;
      box-shadow: 0 14px 28px rgba(255, 140, 0, 0.22);
    }

    .btn-primary:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 18px 34px rgba(255, 140, 0, 0.28);
    }

    .btn-primary:disabled {
      opacity: 0.65;
      cursor: not-allowed;
      box-shadow: none;
    }

    .btn-primary mat-spinner {
      --mdc-circular-progress-active-indicator-color: #fff;
    }

    .btn-outline {
      background: #fff;
      color: var(--accent-dark);
      border-color: rgba(255, 140, 0, 0.22);
      box-shadow: 0 10px 20px rgba(255, 140, 0, 0.08);
    }

    .btn-outline:hover {
      transform: translateY(-1px);
      background: rgba(255, 140, 0, 0.08);
    }

    .btn-soft {
      background: #fff;
      color: var(--muted);
      border-color: rgba(31, 41, 55, 0.12);
    }

    .btn-soft:hover {
      transform: translateY(-1px);
      background: #f8fafc;
      color: var(--ink);
    }

    .btn-danger-outline {
      background: #fff;
      color: var(--danger-text);
      border-color: rgba(185, 28, 28, 0.18);
    }

    .btn-danger-outline:hover {
      transform: translateY(-1px);
      background: rgba(185, 28, 28, 0.06);
    }

    .btn-search {
      min-width: 160px;
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
      gap: 18px;
      padding: 18px 0 8px;
    }

    .project-card {
      border-radius: 24px;
      padding: 22px;
      position: relative;
      overflow: hidden;
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    }

    .project-card::before {
      content: '';
      position: absolute;
      inset: 0 0 auto 0;
      height: 4px;
      background: linear-gradient(90deg, var(--accent), var(--accent-light));
      opacity: 0.85;
    }

    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-strong);
      border-color: rgba(255, 140, 0, 0.14);
    }

    .clickable-card {
      cursor: pointer;
    }

    .project-card.my-project {
      cursor: default;
    }

    .project-card-top,
    .project-actions-row,
    .bid-header,
    .bid-item-main {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .project-status-chip,
    .bid-status,
    .mini-counter {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 7px 12px;
      border-radius: 999px;
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.03em;
    }

    .mini-counter {
      background: rgba(255, 140, 0, 0.08);
      color: var(--accent-dark);
    }

    .status-open { background: var(--success-bg); color: var(--success-text); }
    .status-in_progress { background: var(--info-bg); color: var(--info-text); }
    .status-completed { background: var(--neutral-bg); color: var(--neutral-text); }
    .status-cancelled { background: var(--danger-bg); color: var(--danger-text); }

    .bid-pending { background: var(--warn-bg); color: var(--warn-text); }
    .bid-accepted { background: var(--success-bg); color: var(--success-text); }
    .bid-rejected { background: var(--danger-bg); color: var(--danger-text); }
    .bid-negotiating { background: var(--info-bg); color: var(--info-text); }
    .bid-withdrawn { background: var(--neutral-bg); color: var(--neutral-text); }

    .project-card h3 {
      margin: 16px 0 10px;
      font-size: 1.08rem;
      color: var(--ink);
      line-height: 1.35;
    }

    .project-desc,
    .bid-text,
    .detail-header p,
    .counter-note,
    .bid-note,
    .detail-callout p {
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
      font-size: 0.92rem;
      white-space: pre-line;
    }

    .skills-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin: 16px 0 0;
    }

    .detail-skills {
      margin-top: 0;
    }

    .skill-chip {
      display: inline-flex;
      align-items: center;
      padding: 7px 11px;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.08);
      color: var(--accent-dark);
      font-size: 0.78rem;
      font-weight: 700;
    }

    .project-meta-grid,
    .detail-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 10px;
      margin-top: 18px;
    }

    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-height: 42px;
      padding: 0 12px;
      border-radius: 14px;
      background: #fff;
      border: 1px solid rgba(31, 41, 55, 0.08);
      color: var(--ink);
      font-size: 0.84rem;
      font-weight: 600;
    }

    .meta-chip mat-icon {
      color: var(--accent);
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .project-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 18px;
    }

    .project-cta {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--accent-dark);
      font-weight: 700;
      font-size: 0.86rem;
    }

    .project-actions-row {
      margin-top: 18px;
    }

    .inline-actions {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .icon-action {
      width: 42px;
      height: 42px;
      border-radius: 14px;
      border: 1px solid rgba(255, 140, 0, 0.14);
      background: rgba(255, 140, 0, 0.06);
      color: var(--accent-dark);
      display: inline-grid;
      place-items: center;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease;
    }

    .icon-action:hover {
      transform: translateY(-1px);
      background: rgba(255, 140, 0, 0.12);
    }

    .icon-action.danger {
      border-color: rgba(185, 28, 28, 0.14);
      background: rgba(185, 28, 28, 0.05);
      color: var(--danger-text);
    }

    .icon-action.danger:hover {
      background: rgba(185, 28, 28, 0.1);
    }

    .stack-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 18px;
    }

    .bid-card {
      border-radius: 22px;
    }

    .bid-header-left {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .bid-amount-pill {
      display: inline-flex;
      align-items: center;
      padding: 7px 12px;
      border-radius: 999px;
      background: rgba(255, 140, 0, 0.08);
      color: var(--accent-dark);
      font-weight: 800;
      font-size: 0.82rem;
    }

    .bid-duration {
      color: var(--muted);
      font-weight: 600;
      font-size: 0.86rem;
    }

    .counter-offer {
      margin-top: 16px;
      padding: 18px;
      border-radius: 18px;
      background: linear-gradient(135deg, rgba(255, 140, 0, 0.08), rgba(255, 179, 71, 0.04));
      border: 1px solid rgba(255, 140, 0, 0.12);
    }

    .counter-header {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--accent-dark);
      margin-bottom: 8px;
    }

    .button-row {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 14px;
    }

    .button-row.compact .btn-primary,
    .button-row.compact .btn-danger-outline,
    .button-row.compact .btn-soft {
      min-height: 42px;
      padding: 0 14px;
      font-size: 0.84rem;
    }

    .bid-footer {
      margin-top: 16px;
      display: flex;
      justify-content: flex-end;
    }

    .my-projects-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 20px 0 4px;
      flex-wrap: wrap;
    }

    .project-form {
      margin-top: 18px;
    }

    .form-head {
      margin-bottom: 18px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }

    .form-span-2 {
      grid-column: span 2;
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 18px;
    }

    .bids-list {
      margin-top: 18px;
      padding-top: 18px;
      border-top: 1px solid rgba(31, 41, 55, 0.08);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .bid-item {
      padding: 16px;
      border-radius: 18px;
      background: linear-gradient(180deg, #fff, var(--surface));
      border: 1px solid rgba(255, 140, 0, 0.08);
    }

    .bid-user {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .user-badge {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent-dark));
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      box-shadow: 0 12px 24px rgba(255, 140, 0, 0.18);
      flex-shrink: 0;
    }

    .bid-user strong {
      display: block;
      color: var(--ink);
      margin-bottom: 2px;
    }

    .bid-user p {
      margin: 0;
      color: var(--muted);
      font-size: 0.84rem;
    }

    .empty-inline {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--muted);
      padding: 10px 0 2px;
    }

    .empty-inline mat-icon {
      color: var(--accent);
    }

    .empty-state {
      text-align: center;
      margin-top: 18px;
    }

    .empty-state mat-icon {
      font-size: 52px;
      width: 52px;
      height: 52px;
      color: var(--accent);
      margin-bottom: 12px;
    }

    .empty-state h3 {
      margin: 0 0 8px;
      color: var(--ink);
    }

    .empty-state p {
      margin: 0;
      color: var(--muted);
      line-height: 1.6;
    }

    .load-more,
    .center-spinner {
      display: flex;
      justify-content: center;
      padding: 20px 0 4px;
    }

    .detail-overlay {
      position: fixed;
      inset: 0;
      background: rgba(17, 24, 39, 0.46);
      backdrop-filter: blur(6px);
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }

    .detail-panel {
      width: min(860px, 100%);
      max-height: 92vh;
      overflow-y: auto;
      border-radius: 28px;
      padding: 28px;
      position: relative;
      background:
        linear-gradient(180deg, #ffffff, #fffaf3);
    }

    .compact-panel {
      width: min(620px, 100%);
    }

    .no-shadow {
      box-shadow: none;
      border: none;
      padding: 0;
      background: transparent;
    }

    .close-btn {
      position: absolute;
      top: 16px;
      right: 16px;
      color: var(--muted) !important;
    }

    .detail-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 18px;
      margin-bottom: 18px;
      padding-right: 36px;
    }

    .detail-header.compact {
      padding-right: 0;
    }

    .detail-header h2,
    .detail-header h3 {
      margin: 12px 0 8px;
      color: var(--ink);
      line-height: 1.2;
    }

    .detail-callout {
      margin-top: 20px;
      padding: 18px 20px;
      border-radius: 20px;
      background: rgba(255, 140, 0, 0.08);
      border: 1px solid rgba(255, 140, 0, 0.12);
    }

    .detail-callout h4 {
      margin: 0 0 6px;
      color: var(--ink);
    }

    .detail-action {
      margin-top: 18px;
    }

    .bid-form {
      margin-top: 18px;
    }

    ::ng-deep .freelance-tabs .mat-mdc-tab-header {
      border-bottom: none;
      margin-top: 8px;
    }

    ::ng-deep .freelance-tabs .mdc-tab {
      min-width: 120px;
    }

    ::ng-deep .freelance-tabs .mdc-tab__text-label {
      font-weight: 700;
      color: var(--muted) !important;
    }

    ::ng-deep .freelance-tabs .mdc-tab-indicator__content--underline {
      border-color: var(--accent) !important;
      border-top-width: 3px !important;
      border-radius: 999px;
    }

    ::ng-deep .freelance-tabs .mdc-tab--active .mdc-tab__text-label {
      color: var(--accent-dark) !important;
    }

    ::ng-deep .freelance-tabs .mat-mdc-tab-body-content {
      overflow: visible;
    }

    ::ng-deep .page-wrapper .mat-mdc-form-field-subscript-wrapper {
      display: none;
    }

    ::ng-deep .page-wrapper .mat-mdc-text-field-wrapper {
      border-radius: 18px !important;
      background: #fff !important;
    }

    ::ng-deep .page-wrapper .mdc-notched-outline__leading,
    ::ng-deep .page-wrapper .mdc-notched-outline__notch,
    ::ng-deep .page-wrapper .mdc-notched-outline__trailing {
      border-color: rgba(255, 140, 0, 0.14) !important;
    }

    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__leading,
    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__notch,
    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mdc-notched-outline__trailing {
      border-color: var(--accent) !important;
    }

    ::ng-deep .page-wrapper .mat-mdc-form-field.mat-focused .mat-mdc-floating-label {
      color: var(--accent) !important;
    }

    @media (max-width: 980px) {
      .hero-card {
        flex-direction: column;
      }

      .hero-stats {
        width: 100%;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      }

      .filters-row {
        grid-template-columns: 1fr 1fr;
      }

      .btn-search {
        grid-column: span 2;
        width: 100%;
      }
    }

    @media (max-width: 760px) {
      .page-wrapper {
        padding: 16px 12px 28px;
      }

      .hero-card,
      .surface-card,
      .project-card,
      .detail-panel {
        border-radius: 22px;
      }

      .projects-grid {
        grid-template-columns: 1fr;
      }

      .form-grid {
        grid-template-columns: 1fr;
      }

      .form-span-2 {
        grid-column: span 1;
      }

      .detail-header {
        flex-direction: column;
      }
    }

    @media (max-width: 560px) {
      .filters-row {
        grid-template-columns: 1fr;
      }

      .btn-search {
        grid-column: span 1;
      }

      .project-card-top,
      .project-actions-row,
      .bid-header,
      .bid-item-main,
      .my-projects-header {
        align-items: stretch;
      }

      .button-row,
      .form-actions {
        flex-direction: column;
      }

      .button-row .btn-primary,
      .button-row .btn-danger-outline,
      .button-row .btn-soft,
      .form-actions .btn-primary,
      .form-actions .btn-soft,
      .bid-footer .btn-danger-outline,
      .project-actions-row .btn-outline {
        width: 100%;
      }

      .detail-overlay {
        padding: 12px;
      }

      .detail-panel {
        padding: 22px 18px;
      }
    }
  `]
})
export class FreelanceComponent implements OnInit {
  readonly auth = inject(AuthService);
  private readonly freelanceSvc = inject(FreelanceService);
  private readonly alertSvc = inject(AlertService);
  private readonly fb = inject(FormBuilder);

  activeTab = 0;
  projects: FreelanceProject[] = [];
  myProjects: FreelanceProject[] = [];
  myBids: ProjectBid[] = [];
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
  negotiatingBid: ProjectBid | null = null;
  negotiatingProjectId: number | null = null;

  projectForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    requiredSkills: [''],
    durationDays: [null as number | null],
    budgetMin: [null as number | null],
    budgetMax: [null as number | null],
    deadlineDate: ['']
  });

  bidForm = this.fb.group({
    proposedAmount: [null as number | null, [Validators.required, Validators.min(1)]],
    proposedDurationDays: [null as number | null, [Validators.required, Validators.min(1)]],
    coverLetter: ['']
  });

  negotiateForm = this.fb.group({
    counterAmount: [null as number | null],
    counterDurationDays: [null as number | null],
    negotiationNote: ['']
  });

  ngOnInit(): void {
    this.loadProjects();
  }

  onTabChange(idx: number): void {
    this.activeTab = idx;
    if (idx === 1 && this.myBids.length === 0) this.loadMyBids();
    if (idx === 2 && this.myProjects.length === 0) this.loadMyProjects();
  }

  search(): void {
    this.page = 0;
    this.projects = [];
    this.loadProjects();
  }

  loadMore(): void {
    this.page++;
    this.loadProjects();
  }

  loadProjects(): void {
    this.loadingProjects = true;
    this.freelanceSvc.search(this.filterTitle || undefined, this.filterSkills || undefined, this.page).subscribe({
      next: res => {
        this.projects.push(...res.data.content);
        this.lastPage = res.data.last;
        this.loadingProjects = false;
      },
      error: () => { this.loadingProjects = false; }
    });
  }

  loadMyBids(): void {
    this.loadingBids = true;
    this.freelanceSvc.getMyBids().subscribe({
      next: res => {
        this.myBids = res.data;
        this.loadingBids = false;
      },
      error: () => { this.loadingBids = false; }
    });
  }

  loadMyProjects(): void {
    this.loadingMyProjects = true;
    this.freelanceSvc.getMyProjects().subscribe({
      next: res => {
        this.myProjects = res.data.content;
        this.loadingMyProjects = false;
      },
      error: () => { this.loadingMyProjects = false; }
    });
  }

  toggleProjectForm(): void {
    if (this.showProjectForm && !this.editingProject) {
      this.cancelProjectForm();
      return;
    }

    this.showProjectForm = true;
    this.editingProject = null;
    this.projectForm.reset({
      title: '',
      description: '',
      requiredSkills: '',
      durationDays: null,
      budgetMin: null,
      budgetMax: null,
      deadlineDate: ''
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
        this.cancelProjectForm();
        this.creatingProject = false;
        this.alertSvc.success(this.editingProject ? 'Projet mis a jour' : 'Projet publie');
      },
      error: () => { this.creatingProject = false; }
    });
  }

  editProject(p: FreelanceProject): void {
    this.editingProject = p;
    this.showProjectForm = true;
    this.projectForm.patchValue({
      title: p.title,
      description: p.description,
      requiredSkills: p.requiredSkills,
      durationDays: p.durationDays ?? null,
      budgetMin: p.budgetMin ?? null,
      budgetMax: p.budgetMax ?? null,
      deadlineDate: p.deadlineDate ?? ''
    });
  }

  cancelProjectForm(): void {
    this.showProjectForm = false;
    this.editingProject = null;
    this.projectForm.reset({
      title: '',
      description: '',
      requiredSkills: '',
      durationDays: null,
      budgetMin: null,
      budgetMax: null,
      deadlineDate: ''
    });
  }

  deleteProject(p: FreelanceProject): void {
    this.freelanceSvc.deleteProject(p.id).subscribe(() => {
      this.myProjects = this.myProjects.filter(pr => pr.id !== p.id);
      this.alertSvc.success('Projet supprime');
    });
  }

  viewBids(p: FreelanceProject): void {
    if (this.selectedProjectBids[p.id]) {
      delete this.selectedProjectBids[p.id];
      return;
    }
    this.freelanceSvc.getProjectBids(p.id).subscribe(res => { this.selectedProjectBids[p.id] = res.data; });
  }

  selectProject(p: FreelanceProject): void {
    this.selectedProject = p;
    this.showBidForm = false;
  }

  closeProject(): void {
    this.selectedProject = null;
    this.showBidForm = false;
  }

  submitBid(): void {
    if (this.bidForm.invalid || !this.selectedProject) return;
    this.submittingBid = true;
    this.freelanceSvc.submitBid(this.selectedProject.id, this.bidForm.value as any).subscribe({
      next: res => {
        this.myBids.unshift(res.data);
        this.showBidForm = false;
        this.submittingBid = false;
        this.alertSvc.success('Offre soumise avec succes');
        this.closeProject();
        if (this.activeTab !== 1) this.activeTab = 1;
      },
      error: err => {
        this.submittingBid = false;
        this.alertSvc.error('Erreur', err.error?.message || 'Erreur');
      }
    });
  }

  withdrawBid(bid: ProjectBid): void {
    this.freelanceSvc.withdrawBid(bid.id).subscribe(() => {
      bid.status = 'WITHDRAWN';
      this.alertSvc.success('Offre retiree');
    });
  }

  acceptBid(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'ACCEPTED' }).subscribe(res => {
      bid.status = res.data.status;
      this.alertSvc.success('Offre acceptee');
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

  cancelNegotiate(): void {
    this.negotiatingBid = null;
    this.negotiatingProjectId = null;
    this.negotiateForm.reset();
  }

  sendCounterOffer(): void {
    if (!this.negotiatingBid || this.negotiatingProjectId === null) return;
    const req = { status: 'NEGOTIATING' as BidStatus, ...this.negotiateForm.value };
    this.freelanceSvc.negotiate(this.negotiatingBid.id, req as any).subscribe(res => {
      this.negotiatingBid!.status = res.data.status;
      const bids = this.selectedProjectBids[this.negotiatingProjectId!];
      if (bids) {
        const i = bids.findIndex(b => b.id === res.data.id);
        if (i >= 0) bids[i] = res.data;
      }
      this.cancelNegotiate();
      this.alertSvc.success('Contre-offre envoyee');
    });
  }

  acceptCounter(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'ACCEPTED' }).subscribe(res => {
      bid.status = res.data.status;
      this.alertSvc.success('Contre-offre acceptee');
    });
  }

  declineCounter(bid: ProjectBid): void {
    this.freelanceSvc.negotiate(bid.id, { status: 'REJECTED' }).subscribe(() => { bid.status = 'REJECTED'; });
  }

  skillsOf(raw?: string | null, limit?: number): string[] {
    const items = (raw || '')
      .split(',')
      .map(skill => skill.trim())
      .filter(Boolean);
    return typeof limit === 'number' ? items.slice(0, limit) : items;
  }

  initials(name?: string | null): string {
    return name?.split(' ').map(part => part[0]).slice(0, 2).join('').toUpperCase() || '?';
  }

  statusLabel(status: string): string {
    return {
      OPEN: 'Ouvert',
      IN_PROGRESS: 'En cours',
      COMPLETED: 'Termine',
      CANCELLED: 'Annule'
    }[status] ?? status;
  }

  bidStatusLabel(status: BidStatus): string {
    return {
      PENDING: 'En attente',
      ACCEPTED: 'Acceptee',
      REJECTED: 'Rejetee',
      NEGOTIATING: 'Negociation',
      WITHDRAWN: 'Retiree'
    }[status] ?? status;
  }

  statusClass(s: string): Record<string, boolean> {
    return {
      'status-open': s === 'OPEN',
      'status-in_progress': s === 'IN_PROGRESS',
      'status-completed': s === 'COMPLETED',
      'status-cancelled': s === 'CANCELLED'
    };
  }

  bidStatusClass(s: BidStatus): Record<string, boolean> {
    return {
      'bid-pending': s === 'PENDING',
      'bid-accepted': s === 'ACCEPTED',
      'bid-rejected': s === 'REJECTED',
      'bid-negotiating': s === 'NEGOTIATING',
      'bid-withdrawn': s === 'WITHDRAWN'
    };
  }
}
