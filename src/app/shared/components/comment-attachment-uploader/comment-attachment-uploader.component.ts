import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AlertService } from '../../../core/services/alert.service';

export interface FilePreview {
  file: File;
  url: string | null;
  type: 'image' | 'video' | 'document' | 'audio';
}

@Component({
  selector: 'app-comment-attachment-uploader',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatTooltipModule
  ],
  template: `
    <div class="uploader-container">
      @if(selectedFile) {
        <div class="file-preview">
          <div class="preview-content">
            @if(selectedFile.type === 'image') {
              <img [src]="selectedFile.url" class="image-preview" alt="preview">
            } @else if(selectedFile.type === 'video') {
              <video class="video-preview" controls>
                <source [src]="selectedFile.url" [type]="selectedFile.file.type">
              </video>
            } @else {
              <div class="doc-placeholder">
                <mat-icon>description</mat-icon>
              </div>
            }
          </div>
          <div class="preview-info">
            <p class="file-name">{{ selectedFile.file.name }}</p>
            <p class="file-size">{{ (selectedFile.file.size / 1024 / 1024).toFixed(2) }} MB</p>
          </div>
          <button mat-icon-button (click)="removeFile()" matTooltip="Retirer">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      }

      @if(!selectedFile) {
        <div class="drag-drop-zone"
             (dragover)="onDragOver($event)"
             (dragleave)="onDragLeave($event)"
             (drop)="onDrop($event)"
             [class.dragging]="isDragging">
          <div class="upload-icon">
            <mat-icon>cloud_upload</mat-icon>
          </div>
          <p class="upload-text">Glissez un fichier ou cliquez pour sélectionner</p>
          <button mat-raised-button color="primary" (click)="fileInput.click()">
            <mat-icon>attach_file</mat-icon>
            Ajouter un fichier
          </button>
          <p class="hint">Images, vidéos, PDF, documents (max 50 MB)</p>
        </div>
      }

      <input #fileInput type="file" hidden
             (change)="onFileSelected($event)"
             accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx">
    </div>
  `,
  styles: [`
    :host {
      --orange: #FF8C00;
      --orange-light: #FFA333;
      --gray-light: #F5F5F5;
      --gray-medium: #E0E0E0;
    }

    .uploader-container {
      padding: 16px;
      border: 1px solid var(--gray-medium);
      border-radius: 12px;
      background-color: var(--gray-light);
    }

    .drag-drop-zone {
      border: 2px dashed var(--orange);
      border-radius: 12px;
      padding: 32px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(135deg, rgba(255,140,0,0.05) 0%, rgba(255,140,0,0.02) 100%);
    }

    .drag-drop-zone.dragging {
      background-color: rgba(255,140,0,0.1);
      border-color: var(--orange-light);
      transform: scale(1.01);
    }

    .upload-icon {
      margin-bottom: 12px;
    }

    .upload-icon mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: var(--orange);
    }

    .upload-text {
      margin: 12px 0;
      color: #333;
      font-weight: 500;
      font-size: 15px;
    }

    .hint {
      font-size: 12px;
      color: #999;
      margin: 12px 0 0 0;
    }

    .file-preview {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      padding: 16px;
      background-color: #fff;
      border: 1px solid var(--gray-medium);
      border-radius: 8px;
    }

    .preview-content {
      flex-shrink: 0;
      width: 80px;
      height: 80px;
      background-color: var(--gray-light);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .image-preview, .video-preview {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .doc-placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, var(--orange), var(--orange-light));
      color: white;
    }

    .doc-placeholder mat-icon {
      font-size: 40px;
      width: 40px;
      height: 40px;
    }

    .preview-info {
      flex: 1;
    }

    .file-name {
      font-weight: 600;
      margin: 0 0 4px 0;
      word-break: break-word;
      color: #333;
    }

    .file-size {
      font-size: 12px;
      color: #999;
      margin: 0;
    }

    button {
      text-transform: none;
      font-weight: 500;
    }

    button mat-icon {
      margin-right: 8px;
    }
  `]
})
export class CommentAttachmentUploaderComponent {
  @Output() fileSelected = new EventEmitter<FilePreview>();

  private readonly alertService = inject(AlertService);

  selectedFile: FilePreview | null = null;
  isDragging = false;

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
      this.selectFile(files[0]);
    }
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectFile(input.files[0]);
    }
  }

  private selectFile(file: File): void {
    const maxSize = 50 * 1024 * 1024;
    if (file.size > maxSize) {
      this.alertService.error('Le fichier dépasse 50 MB');
      return;
    }

    const type = this.getFileType(file);

    if (type === 'image' || type === 'video') {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const url = e.target?.result as string;
        this.selectedFile = { file, url, type };
        this.fileSelected.emit(this.selectedFile);
      };
      reader.readAsDataURL(file);
    } else {
      this.selectedFile = { file, url: null, type };
      this.fileSelected.emit(this.selectedFile);
    }
  }

  private getFileType(file: File): 'image' | 'video' | 'document' | 'audio' {
    const type = file.type;
    if (type.startsWith('image/')) return 'image';
    if (type.startsWith('video/')) return 'video';
    if (type.startsWith('audio/')) return 'audio';
    return 'document';
  }

  removeFile(): void {
    this.selectedFile = null;
  }
}
