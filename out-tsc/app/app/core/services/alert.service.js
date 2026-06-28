import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import * as i0 from "@angular/core";
export class AlertService {
    /**
     * Affiche une notification de succès
     */
    success(title, message, timer = 3000) {
        return Swal.fire({
            icon: 'success',
            title: title,
            text: message || '',
            timer: timer,
            timerProgressBar: true,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            customClass: {
                container: 'swal-toast-container',
                popup: 'swal-toast-popup'
            }
        });
    }
    /**
     * Affiche une notification d'erreur
     */
    error(title, message, timer = 4000) {
        return Swal.fire({
            icon: 'error',
            title: title,
            text: message || '',
            timer: timer,
            timerProgressBar: true,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            customClass: {
                container: 'swal-toast-container',
                popup: 'swal-toast-popup'
            }
        });
    }
    /**
     * Affiche une notification d'avertissement
     */
    warning(title, message, timer = 3500) {
        return Swal.fire({
            icon: 'warning',
            title: title,
            text: message || '',
            timer: timer,
            timerProgressBar: true,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            customClass: {
                container: 'swal-toast-container',
                popup: 'swal-toast-popup'
            }
        });
    }
    /**
     * Affiche une notification d'info
     */
    info(title, message, timer = 3000) {
        return Swal.fire({
            icon: 'info',
            title: title,
            text: message || '',
            timer: timer,
            timerProgressBar: true,
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            customClass: {
                container: 'swal-toast-container',
                popup: 'swal-toast-popup'
            }
        });
    }
    /**
     * Affiche une boîte de dialogue de confirmation
     */
    confirm(title, message, confirmText = 'Oui', cancelText = 'Non') {
        return Swal.fire({
            icon: 'question',
            title: title,
            text: message || '',
            showCancelButton: true,
            confirmButtonText: confirmText,
            cancelButtonText: cancelText,
            confirmButtonColor: '#667eea',
            cancelButtonColor: '#cbd5e0',
            customClass: {
                container: 'swal-dialog-container',
                popup: 'swal-dialog-popup'
            }
        }).then(result => result.isConfirmed);
    }
    /**
     * Affiche une alerte custom
     */
    alert(title, message, icon = 'info') {
        return Swal.fire({
            icon: icon,
            title: title,
            text: message || '',
            confirmButtonText: 'OK',
            confirmButtonColor: '#667eea',
            customClass: {
                container: 'swal-dialog-container',
                popup: 'swal-dialog-popup'
            }
        });
    }
    /**
     * Affiche une boîte de dialogue avec HTML personnalisé
     */
    html(title, htmlContent, confirmText = 'OK', showCancel = false) {
        return Swal.fire({
            title: title,
            html: htmlContent,
            showCancelButton: showCancel,
            confirmButtonText: confirmText,
            confirmButtonColor: '#667eea',
            customClass: {
                container: 'swal-dialog-container',
                popup: 'swal-dialog-popup'
            }
        }).then(result => result.isConfirmed);
    }
    static { this.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=alert.service.js.map