import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import * as i0 from "@angular/core";
export class ConfigService {
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
    getApiUrl() {
        return this.apiUrl;
    }
    /**
     * Construit l'URL complète pour un média
     * Le backend retourne: "/api/posts/attachments/uuid-filename.jpg"
     */
    getMediaUrl(fileUrlOrFilename) {
        if (!fileUrlOrFilename)
            return '';
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
    getMediaBaseUrl() {
        return `${this.apiUrl}/api/posts/attachments`;
    }
    static { this.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [], null); })();
//# sourceMappingURL=config.service.js.map