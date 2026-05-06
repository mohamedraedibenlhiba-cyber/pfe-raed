import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  /**
   * Affiche une notification de succès
   */
  success(title: string, message?: string, timer: number = 3000): Promise<any> {
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
  error(title: string, message?: string, timer: number = 4000): Promise<any> {
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
  warning(title: string, message?: string, timer: number = 3500): Promise<any> {
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
  info(title: string, message?: string, timer: number = 3000): Promise<any> {
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
  confirm(
    title: string,
    message?: string,
    confirmText: string = 'Oui',
    cancelText: string = 'Non'
  ): Promise<boolean> {
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
  alert(
    title: string,
    message?: string,
    icon: 'success' | 'error' | 'warning' | 'info' | 'question' = 'info'
  ): Promise<any> {
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
  html(
    title: string,
    htmlContent: string,
    confirmText: string = 'OK',
    showCancel: boolean = false
  ): Promise<boolean> {
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
}
