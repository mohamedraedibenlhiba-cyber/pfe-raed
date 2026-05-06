import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-media-viewer',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule],
  template: `
    <div *ngIf="mediaUrl" class="media-viewer" [ngSwitch]="mediaType">
      <!-- IMAGE -->
      <div *ngSwitchCase="'IMAGE'" class="media-container image-container" (click)="openLightbox()">
        <img
          [src]="mediaUrl"
          [alt]="fileName"
          class="media-image"
          (load)="onMediaLoad()"
          (error)="onMediaError()"
        />
        <button mat-icon-button class="zoom-button" (click)="openLightbox(); $event.stopPropagation()">
          <mat-icon>zoom_in</mat-icon>
        </button>
      </div>

      <!-- VIDEO -->
      <div *ngSwitchCase="'VIDEO'" class="media-container video-container">
        <video
          [src]="mediaUrl"
          class="media-video"
          controls
          controlsList="nodownload"
          (loadstart)="onMediaLoad()"
          (error)="onMediaError()"
        ></video>
        <div *ngIf="fileName" class="media-info">
          <mat-icon>videocam</mat-icon>
          <span>{{ fileName }}</span>
        </div>
      </div>

      <!-- AUDIO -->
      <div *ngSwitchCase="'AUDIO'" class="media-container audio-container">
        <audio
          [src]="mediaUrl"
          class="media-audio"
          controls
          controlsList="nodownload"
          (loadstart)="onMediaLoad()"
          (error)="onMediaError()"
        ></audio>
        <div *ngIf="fileName" class="media-info">
          <mat-icon>music_note</mat-icon>
          <span>{{ fileName }}</span>
        </div>
      </div>

      <!-- DOCUMENT -->
      <div *ngSwitchCase="'DOCUMENT'" class="media-container document-container">
        <div class="document-preview">
          <mat-icon class="document-icon">description</mat-icon>
          <div class="document-details">
            <p class="document-name">{{ fileName }}</p>
            <p class="document-size">{{ formatFileSize(fileSize) }}</p>
            <a [href]="mediaUrl" [download]="fileName" class="download-link" target="_blank">
              <button mat-raised-button color="primary">
                <mat-icon>download</mat-icon>
                Télécharger
              </button>
            </a>
          </div>
        </div>
      </div>

      <!-- ERROR STATE -->
      <div *ngSwitchDefault class="media-error">
        <mat-icon>error_outline</mat-icon>
        <p>Impossible de charger le média</p>
      </div>

      <!-- LOADING -->
      <div *ngIf="isLoading" class="media-loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>
    </div>

    <!-- LIGHTBOX MODAL -->
    <div *ngIf="showLightbox" class="lightbox" (click)="closeLightbox()">
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <button mat-icon-button class="lightbox-close" (click)="closeLightbox()">
          <mat-icon>close</mat-icon>
        </button>
        <img [src]="mediaUrl" [alt]="fileName" class="lightbox-image" />
        <div class="lightbox-info">
          <p>{{ fileName }}</p>
          <a [href]="mediaUrl" [download]="fileName" target="_blank">
            <button mat-icon-button>
              <mat-icon>download</mat-icon>
            </button>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .media-viewer {
      width: 100%;
      position: relative;
    }

    .media-container {
      position: relative;
      width: 100%;
      background: #f5f5f5;
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 200px;

      &.image-container {
        aspect-ratio: 16 / 9;
        cursor: zoom-in;
        background: #000;
      }

      &.video-container {
        aspect-ratio: 16 / 9;
        flex-direction: column;
        background: #000;
      }

      &.audio-container {
        min-height: auto;
        padding: 16px;
      }

      &.document-container {
        min-height: 120px;
      }
    }

    .media-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-width: 100%;
      max-height: 100%;
    }

    .media-video {
      width: 100%;
      height: 100%;
      max-width: 100%;
      max-height: 100%;
    }

    .media-audio {
      width: 100%;
      max-width: 500px;
    }

    .zoom-button {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255, 255, 255, 0.9);
      color: #333;
      transition: all 0.3s ease;

      &:hover {
        background: #fff;
        color: #ff6900;
      }
    }

    .media-info {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      animation: slideUp 0.3s ease;

      mat-icon {
        font-size: 16px;
        width: 16px;
        height: 16px;
      }

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .document-preview {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px;
    }

    .document-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #ff6900;
      flex-shrink: 0;
    }

    .document-details {
      flex: 1;
    }

    .document-name {
      margin: 0;
      font-weight: 600;
      color: #333;
      word-break: break-all;
    }

    .document-size {
      margin: 4px 0;
      color: #999;
      font-size: 12px;
    }

    .download-link {
      text-decoration: none;
      display: inline-block;

      button {
        margin-top: 8px;
      }
    }

    .media-error {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 200px;
      color: #999;

      mat-icon {
        font-size: 48px;
        width: 48px;
        height: 48px;
        margin-bottom: 12px;
      }
    }

    .media-loading {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* LIGHTBOX */
    .lightbox {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: fadeIn 0.3s ease;
    }

    .lightbox-content {
      position: relative;
      max-width: 90vw;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .lightbox-close {
      position: absolute;
      top: -40px;
      right: 0;
      color: white;
      z-index: 1001;

      &:hover {
        color: #ff6900;
      }
    }

    .lightbox-image {
      max-width: 100%;
      max-height: 85vh;
      object-fit: contain;
      animation: slideUp 0.3s ease;
    }

    .lightbox-info {
      margin-top: 16px;
      color: white;
      text-align: center;
      display: flex;
      align-items: center;
      gap: 12px;

      p {
        margin: 0;
        font-size: 14px;
        max-width: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      button {
        color: white;

        &:hover {
          color: #ff6900;
        }
      }
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @media (max-width: 768px) {
      .media-container {
        min-height: 150px;

        &.image-container {
          aspect-ratio: 1 / 1;
        }

        &.video-container {
          aspect-ratio: 1 / 1;
        }
      }

      .document-preview {
        flex-direction: column;
        text-align: center;
      }

      .lightbox-content {
        max-width: 95vw;
        max-height: 95vh;
      }

      .lightbox-image {
        max-height: 80vh;
      }
    }
  `]
})
export class MediaViewerComponent implements OnInit {
  @Input() fileName: string = '';
  @Input() attachmentFileUrl: string = '';
  @Input() attachmentFileType: 'IMAGE' | 'VIDEO' | 'DOCUMENT' | 'AUDIO' = 'IMAGE';
  @Input() attachmentFileSize: number = 0;

  mediaUrl: string = '';
  mediaType: 'IMAGE' | 'VIDEO' | 'DOCUMENT' | 'AUDIO' = 'IMAGE';
  fileSize: number = 0;
  isLoading = true;
  showLightbox = false;

  private configService = inject(ConfigService);

  ngOnInit(): void {
    if (this.attachmentFileUrl) {
      this.mediaUrl = this.configService.getMediaUrl(this.attachmentFileUrl);
      console.log('📸 MediaViewer - Loading:', this.attachmentFileType, 'URL:', this.mediaUrl);
    }
    this.mediaType = this.attachmentFileType;
    this.fileSize = this.attachmentFileSize;
    if (this.mediaType === 'DOCUMENT') {
      this.isLoading = false;
    }
  }

  onMediaLoad(): void {
    console.log('✅ Media loaded successfully:', this.mediaType);
    this.isLoading = false;
  }

  onMediaError(): void {
    console.error('❌ Media loading failed:', this.mediaUrl);
    this.isLoading = false;
  }

  openLightbox(): void {
    if (this.mediaType === 'IMAGE') {
      this.showLightbox = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeLightbox(): void {
    this.showLightbox = false;
    document.body.style.overflow = 'auto';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }
}
