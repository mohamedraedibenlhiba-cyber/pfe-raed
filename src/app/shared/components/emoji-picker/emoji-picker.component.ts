import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

const EMOJIS = [
  { emoji: '😀', name: 'sourire' },
  { emoji: '😂', name: 'rire' },
  { emoji: '😍', name: 'amour' },
  { emoji: '🎉', name: 'célébration' },
  { emoji: '👍', name: 'pouce' },
  { emoji: '❤️', name: 'coeur' },
  { emoji: '😢', name: 'triste' },
  { emoji: '😡', name: 'colère' },
  { emoji: '😮', name: 'surpris' },
  { emoji: '🔥', name: 'feu' },
  { emoji: '💯', name: 'cent' },
  { emoji: '🙏', name: 'merci' },
  { emoji: '🎊', name: 'confettis' },
  { emoji: '🌟', name: 'étoile' },
  { emoji: '✨', name: 'étincelle' },
  { emoji: '🚀', name: 'fusée' }
];

@Component({
  selector: 'app-emoji-picker',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  template: `
    <button mat-icon-button [matMenuTriggerFor]="emojiMenu" class="emoji-button">
      😀
    </button>

    <mat-menu #emojiMenu="matMenu" class="emoji-menu">
      <div class="emoji-grid">
        <button *ngFor="let item of emojis"
                (click)="selectEmoji(item.emoji)"
                class="emoji-item"
                [title]="item.name">
          {{ item.emoji }}
        </button>
      </div>
    </mat-menu>
  `,
  styles: [`
    .emoji-button {
      margin-left: 4px;
    }

    .emoji-menu {
      margin-top: 8px !important;
    }

    .emoji-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
      padding: 8px;
      width: 200px;
    }

    .emoji-item {
      width: 40px;
      height: 40px;
      padding: 0 !important;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      border: none;
      background: transparent;
      border-radius: 4px;
      transition: background-color 0.2s;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  `]
})
export class EmojiPickerComponent {
  @Output() emojiSelected = new EventEmitter<string>();

  emojis = EMOJIS;

  selectEmoji(emoji: string): void {
    this.emojiSelected.emit(emoji);
  }
}
