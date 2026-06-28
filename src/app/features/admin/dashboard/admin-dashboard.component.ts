import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface DashboardView {
  id: 'overview' | 'reclamations' | 'jobs';
  label: string;
  icon: string;
  pageName: string;
  openUrl: string;
  headline: string;
  intro: string;
  summaryTitle: string;
  summaryBody: string;
  focusPoints: string[];
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  private readonly powerBiBaseUrl = 'https://app.powerbi.com/reportEmbed?reportId=268cbfa1-d988-423e-b528-0620ead92157&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';

  readonly views: DashboardView[] = [
    {
      id: 'overview',
      label: 'Accueil plateforme',
      icon: 'home',
      pageName: '91e572f3525931c6631b',
      openUrl: 'https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/91e572f3525931c6631b?experience=power-bi',
      headline: 'Vue globale et pilotage central',
      intro: 'Cette vue donne une lecture transverse de la plateforme pour verifier l activite generale et la sante des operations.',
      summaryTitle: 'Resume executif',
      summaryBody: 'Commencez par cette vue pour valider le rythme global de la plateforme, reperer les ecarts et decider rapidement ou concentrer votre attention.',
      focusPoints: ['activite generale', 'tendance globale', 'priorites du jour']
    },
    {
      id: 'reclamations',
      label: 'Statistiques reclamations',
      icon: 'assessment',
      pageName: 'df4b4805ae795e469eb9',
      openUrl: 'https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/df4b4805ae795e469eb9?experience=power-bi',
      headline: 'Qualite de service et suivi des incidents',
      intro: 'Cette vue sert a suivre les reclamations, les pics de demandes et la vitesse de resolution pour garder un service fiable.',
      summaryTitle: 'Ce qu il faut surveiller',
      summaryBody: 'Regardez les volumes ouverts, les retards de traitement et les categories les plus sensibles pour agir avant que l experience utilisateur ne se degrade.',
      focusPoints: ['demandes ouvertes', 'temps de resolution', 'causes recurrentes']
    },
    {
      id: 'jobs',
      label: 'Offres job',
      icon: 'business_center',
      pageName: 'e0724968b25e60c79522',
      openUrl: 'https://app.powerbi.com/groups/me/reports/268cbfa1-d988-423e-b528-0620ead92157/e0724968b25e60c79522?experience=power-bi',
      headline: 'Performance des offres et acquisition de talents',
      intro: 'Cette vue met l accent sur les offres d emploi, leur attractivite et la dynamique de candidature sur la plateforme.',
      summaryTitle: 'Action recommandee',
      summaryBody: 'Analysez les offres qui performent le mieux, identifiez les blocages de conversion et ajustez le contenu ou la diffusion des postes critiques.',
      focusPoints: ['offres actives', 'interet candidat', 'performance de diffusion']
    }
  ];

  activeView = this.views[0];
  safeEmbedUrl: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.safeEmbedUrl = this.buildEmbedUrl(this.activeView.pageName);
  }

  selectView(view: DashboardView): void {
    if (this.activeView.id === view.id) return;
    this.activeView = view;
    this.safeEmbedUrl = this.buildEmbedUrl(view.pageName);
  }

  private buildEmbedUrl(pageName: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`${this.powerBiBaseUrl}&pageName=${pageName}`);
  }
}
