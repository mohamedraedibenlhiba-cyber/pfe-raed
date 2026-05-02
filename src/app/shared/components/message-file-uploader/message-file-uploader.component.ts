import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MessagingService } from '../../../core/services/messaging.service';
import { MessageAttachment } from '../../../core/models/models';

@Component({
  selector: 'app-message-file-uploader',
  standalone: true,
  imports: [
    CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatTooltipModule
  ],
  template: `
    <div class="uploader-container">
      <!-- Fichiers sélectionnés -->
      <div *ngIf="selectedFiles.length > 0" class="selected-files">
        <div *ngFor="let file of selectedFiles" class="file-preview">
          <span>{{ file.name }}</span>
          <button mat-icon-button (click)="removeFile(file)" matTooltip="Retirer">
            <mat-icon>close</mat-icon>
          </button>
        </div>
      </div>

      <!-- Zone de drag-drop -->
      <div class="drag-drop-zone"
           (dragover)="onDragOver($event)"
           (dragleave)="onDragLeave($event)"
           (drop)="onDrop($event)"
           [class.dragging]="isDragging">
        <mat-icon>cloud_upload</mat-icon>
        <p>Glissez des fichiers ou</p>
        <button mat-raised-button color="primary" (click)="fileInput.click()">
          Sélectionner les fichiers
        </button>
      </div>

      <input #fileInput type="file" multiple hidden
             (change)="onFilesSelected($event)"
             accept="image/*,video/*,.pdf,.doc,.docx,.xls,.xlsx">

      <!-- Progression d'upload -->
      <mat-progress-bar *ngIf="isUploading" mode="indeterminate"></mat-progress-bar>
    </div>
  `,
  styles: [`
    .uploader-container {
      padding: 12px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      background-color: #f9f9f9;
    }

    .drag-drop-zone {
      border: 2px dashed #667eea;
      border-radius: 8px;
      padding: 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: #f5f7ff;
    }

    .drag-drop-zone.dragging {
      background-color: #e8eeff;
      border-color: #764ba2;
    }

    .drag-drop-zone mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #667eea;
      margin-bottom: 8px;
    }

    .drag-drop-zone p {
      margin: 8px 0;
      color: #666;
    }

    .selected-files {
      margin-bottom: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .file-preview {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 12px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
    }
  `]
})
export class MessageFileUploaderComponent {
  @Output() filesSelected = new EventEmitter<File[]>();
  @Output() attachmentUploaded = new EventEmitter<MessageAttachment>();

  private readonly messagingService = inject(MessagingService);

  selectedFiles: File[] = [];
  isDragging = false;
  isUploading = false;

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
    if (files) {
      this.handleFiles(files);
    }
  }

  onFilesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.handleFiles(input.files);
    }
  }

  private handleFiles(files: FileList): void {
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
    this.filesSelected.emit([...this.selectedFiles]);
  }

  removeFile(file: File): void {
    this.selectedFiles = this.selectedFiles.filter(f => f !== file);
    this.filesSelected.emit([...this.selectedFiles]);
  }

  uploadFiles(): void {
    if (this.selectedFiles.length === 0) return;

    this.isUploading = true;
    let uploadedCount = 0;

    this.selectedFiles.forEach(file => {
      this.messagingService.uploadAttachment(file).subscribe({
        next: (response: any) => {
          this.attachmentUploaded.emit(response.data);
          uploadedCount++;
          if (uploadedCount === this.selectedFiles.length) {
            this.isUploading = false;
            this.selectedFiles = [];
            this.filesSelected.emit([]);
          }
        },
        error: (error: any) => {
          console.error('Erreur lors de l\'upload:', error);
          this.isUploading = false;
        }
      });
    });
  }

  clearAll(): void {
    this.selectedFiles = [];
    this.filesSelected.emit([]);
  }
}
