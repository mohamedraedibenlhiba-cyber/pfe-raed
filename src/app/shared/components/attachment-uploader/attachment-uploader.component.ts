import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface FilePreview {
  file: File;
  url: string | null;
  type: 'image' | 'video' | 'document' | 'audio';
}

@Component({
  selector: 'app-attachment-uploader',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  template: `
    <div class="attachment-uploader" (dragover)="onDragOver($event)" (drop)="onDrop($event)" (dragleave)="onDragLeave($event)">
      <input
        #fileInput
        type="file"
        hidden
        [accept]="allowedFileTypes"
        (change)="onFileSelected($event)"
      />

      <div class="upload-zone" [class.dragging]="isDragging">
        <button
          mat-icon-button
          (click)="fileInput.click()"
          class="upload-button"
        >
          <mat-icon>cloud_upload</mat-icon>
        </button>
        <p class="upload-text">Cliquez ou glissez un fichier</p>
        <small>Max {{ maxSizeMb }}MB - {{ fileTypesLabel }}</small>
      </div>

      <div *ngIf="selectedFile" class="preview-section">
        <div class="preview-container">
          <img
            *ngIf="selectedFile.type === 'image'"
            [src]="selectedFile.url"
            alt="Preview"
            class="preview-image"
          />
          <video
            *ngIf="selectedFile.type === 'video'"
            [src]="selectedFile.url"
            class="preview-video"
            controls
          ></video>
          <audio
            *ngIf="selectedFile.type === 'audio'"
            [src]="selectedFile.url"
            class="preview-audio"
            controls
          ></audio>
          <div *ngIf="selectedFile.type === 'document'" class="preview-document">
            <mat-icon>description</mat-icon>
          </div>
        </div>
        <div class="preview-info">
          <p class="file-name">{{ selectedFile.file.name }}</p>
          <p class="file-size">{{ formatFileSize(selectedFile.file.size) }}</p>
          <button
            mat-icon-button
            (click)="clearFile()"
            class="clear-button"
          >
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .attachment-uploader {
      width: 100%;
    }

    .upload-zone {
      border: 2px dashed #ccc;
      border-radius: 8px;
      padding: 24px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: #fafafa;

      &:hover {
        border-color: #ff6900;
        background-color: #fff8f0;
      }

      &.dragging {
        border-color: #ff6900;
        background-color: #fff0e6;
        box-shadow: 0 0 12px rgba(255, 105, 0, 0.2);
      }
    }

    .upload-button {
      color: #ff6900;
      font-size: 32px;
      width: 48px;
      height: 48px;
    }

    .upload-text {
      margin: 12px 0 4px 0;
      font-weight: 500;
      color: #333;
    }

    small {
      color: #999;
      display: block;
    }

    .preview-section {
      margin-top: 16px;
      padding: 12px;
      background: #f5f5f5;
      border-radius: 8px;
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    .preview-container {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      border-radius: 6px;
      overflow: hidden;
      background: white;
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .preview-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .preview-video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .preview-audio {
      width: 100%;
    }

    .preview-document {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ff6900;
      font-size: 32px;
    }

    .preview-info {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .file-name {
      margin: 0;
      font-weight: 500;
      color: #333;
      word-break: break-all;
      flex: 1;
    }

    .file-size {
      margin: 4px 0 0 0;
      color: #999;
      font-size: 12px;
    }

    .clear-button {
      color: #999;
      flex-shrink: 0;

      &:hover {
        color: #ff6900;
      }
    }
  `]
})
export class AttachmentUploaderComponent {
  @Input() maxSizeMb = 50;
  @Input() acceptTypes: 'all' | 'media' | 'images' = 'all';
  @Output() fileSelected = new EventEmitter<FilePreview>();

  selectedFile: FilePreview | null = null;
  isDragging = false;

  private fileTypesConfig = {
    all: {
      accept: 'image/*,video/*,audio/*,.pdf,.doc,.docx,.xls,.xlsx,.txt',
      label: 'Images, Vidéos, Audio, Documents'
    },
    media: {
      accept: 'image/*,video/*,audio/*',
      label: 'Images, Vidéos, Audio'
    },
    images: {
      accept: 'image/*',
      label: 'Images'
    }
  };

  get allowedFileTypes(): string {
    return this.fileTypesConfig[this.acceptTypes].accept;
  }

  get fileTypesLabel(): string {
    return this.fileTypesConfig[this.acceptTypes].label;
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const files = input.files;
    if (files && files.length > 0) {
      this.processFile(files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.processFile(files[0]);
    }
  }

  private processFile(file: File): void {
    const fileSizeInMb = file.size / (1024 * 1024);
    if (fileSizeInMb > this.maxSizeMb) {
      alert(`Fichier trop volumineux. Max ${this.maxSizeMb}MB`);
      return;
    }

    const type = this.getFileType(file);
    const url = this.getPreviewUrl(file, type);

    this.selectedFile = {
      file,
      url,
      type
    };

    this.fileSelected.emit(this.selectedFile);
  }

  private getFileType(file: File): 'image' | 'video' | 'document' | 'audio' {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    if (file.type.startsWith('audio/')) return 'audio';
    return 'document';
  }

  private getPreviewUrl(file: File, type: string): string | null {
    if (type === 'image' || type === 'video' || type === 'audio') {
      return URL.createObjectURL(file);
    }
    return null;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  }

  clearFile(): void {
    if (this.selectedFile?.url) {
      URL.revokeObjectURL(this.selectedFile.url);
    }
    this.selectedFile = null;
  }
}
