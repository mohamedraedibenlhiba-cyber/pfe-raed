import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl: string;

  constructor() {
    let url = environment.apiUrl || '';

    // Développement: https://localhost:8080
    if (!url && typeof window !== 'undefined') {
      const protocol = window.location.protocol;
      const host = window.location.host;
      url = `${protocol}//${host}`;
    }

    // Enlever le trailing /api si présent
    if (url.endsWith('/api')) {
      url = url.slice(0, -4);
    }

    this.apiUrl = url;
  }

  getApiUrl(): string {
    return this.apiUrl;
  }

  /**
   * Construit l'URL complète pour un média
   * Le backend retourne: "/api/posts/attachments/uuid-filename.jpg"
   */
  getMediaUrl(fileUrlOrFilename: string): string {
    if (!fileUrlOrFilename) return '';

    // Si c'est déjà une URL complète (http://... ou https://...), la retourner
    if (fileUrlOrFilename.startsWith('http://') || fileUrlOrFilename.startsWith('https://')) {
      return fileUrlOrFilename;
    }

    // Si c'est un chemin API relatif (commence par /api/)
    if (fileUrlOrFilename.startsWith('/api/')) {
      return `${this.apiUrl}${fileUrlOrFilename}`;
    }

    // Sinon, c'est juste un filename - construire l'URL complète
    return `${this.apiUrl}/api/posts/attachments/${fileUrlOrFilename}`;
  }

  getMediaBaseUrl(): string {
    return `${this.apiUrl}/api/posts/attachments`;
  }
}




