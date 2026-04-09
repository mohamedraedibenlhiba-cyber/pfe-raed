import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { roleGuard } from './core/auth/role.guard';
import { adminAuthGuard } from './core/auth/admin-auth.guard';

export const routes: Routes = [
  // ── Public ──────────────────────────────────────────────────────────────────
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  // ── Admin (protected) ────────────────────────────────────────────────────────
  {
    path: 'admin',
    loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent),
    canActivate: [adminAuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',    loadComponent: () => import('./features/admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent), title: 'Tableau de bord — Admin' },
      { path: 'users',        loadComponent: () => import('./features/admin/users/admin-users.component').then(m => m.AdminUsersComponent), title: 'Gestion des utilisateurs' },
      { path: 'reclamations', loadComponent: () => import('./features/admin/reclamations/admin-reclamations.component').then(m => m.AdminReclamationsComponent), title: 'Gestion des réclamations' },
      { path: 'offers',       loadComponent: () => import('./features/admin/offers-overview/admin-offers.component').then(m => m.AdminOffersComponent), title: 'Aperçu des offres' },
    ]
  },
  // ── Enterprise ───────────────────────────────────────────────────────────────
  {
    path: 'enterprise',
    loadComponent: () => import('./layouts/user-layout/user-layout.component').then(m => m.UserLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'ROLE_ENTERPRISE' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',               loadComponent: () => import('./features/enterprise/dashboard/enterprise-dashboard.component').then(m => m.EnterpriseDashboardComponent), title: 'Tableau de bord Entreprise' },
      { path: 'offers',                  loadComponent: () => import('./features/enterprise/offers/enterprise-offers.component').then(m => m.EnterpriseOffersComponent), title: 'Mes offres' },
      { path: 'offers/new',              loadComponent: () => import('./features/enterprise/offer-form/offer-form.component').then(m => m.OfferFormComponent), title: 'Nouvelle offre' },
      { path: 'offers/:id/edit',         loadComponent: () => import('./features/enterprise/offer-form/offer-form.component').then(m => m.OfferFormComponent), title: 'Modifier une offre' },
      { path: 'offers/:id/applications', loadComponent: () => import('./features/enterprise/applications/enterprise-applications.component').then(m => m.EnterpriseApplicationsComponent), title: 'Candidatures' },
      { path: 'messages',                loadComponent: () => import('./features/shared/messaging/messaging.component').then(m => m.MessagingComponent), title: 'Messagerie' },
      { path: 'channels',                loadComponent: () => import('./features/shared/channels/channels.component').then(m => m.ChannelsComponent), title: 'Canaux' },
      { path: 'feed',                    loadComponent: () => import('./features/shared/feed/feed.component').then(m => m.FeedComponent), title: "Fil d'actualité" },
      { path: 'freelance',               loadComponent: () => import('./features/shared/freelance/freelance.component').then(m => m.FreelanceComponent), title: 'Espace Freelance' },
      { path: 'reclamations',            loadComponent: () => import('./features/shared/reclamations/my-reclamations.component').then(m => m.MyReclamationsComponent), title: 'Mes réclamations' },
      { path: 'profile',                 loadComponent: () => import('./features/enterprise/profile/enterprise-profile.component').then(m => m.EnterpriseProfileComponent), title: 'Mon profil' },
    ]
  },
  // ── Candidate ────────────────────────────────────────────────────────────────
  {
    path: 'candidate',
    loadComponent: () => import('./layouts/user-layout/user-layout.component').then(m => m.UserLayoutComponent),
    canActivate: [authGuard, roleGuard],
    data: { role: 'ROLE_CANDIDATE' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard',   loadComponent: () => import('./features/candidate/dashboard/candidate-dashboard.component').then(m => m.CandidateDashboardComponent), title: 'Tableau de bord Candidat' },
      { path: 'search',      loadComponent: () => import('./features/candidate/search/job-search.component').then(m => m.JobSearchComponent), title: 'Rechercher des offres' },
      { path: 'applications',loadComponent: () => import('./features/candidate/applications/my-applications.component').then(m => m.MyApplicationsComponent), title: 'Mes candidatures' },
      { path: 'cvs',         loadComponent: () => import('./features/candidate/cvs/my-cvs.component').then(m => m.MyCvsComponent), title: 'Mes CVs' },
      { path: 'messages',    loadComponent: () => import('./features/shared/messaging/messaging.component').then(m => m.MessagingComponent), title: 'Messagerie' },
      { path: 'channels',    loadComponent: () => import('./features/shared/channels/channels.component').then(m => m.ChannelsComponent), title: 'Canaux' },
      { path: 'feed',        loadComponent: () => import('./features/shared/feed/feed.component').then(m => m.FeedComponent), title: "Fil d'actualité" },
      { path: 'freelance',   loadComponent: () => import('./features/shared/freelance/freelance.component').then(m => m.FreelanceComponent), title: 'Espace Freelance' },
      { path: 'reclamations',loadComponent: () => import('./features/shared/reclamations/my-reclamations.component').then(m => m.MyReclamationsComponent), title: 'Mes réclamations' },
      { path: 'profile',     loadComponent: () => import('./features/candidate/profile/candidate-profile.component').then(m => m.CandidateProfileComponent), title: 'Mon profil' },
    ]
  },
  // Fallback
  { path: '**', redirectTo: 'auth/login' }
];
