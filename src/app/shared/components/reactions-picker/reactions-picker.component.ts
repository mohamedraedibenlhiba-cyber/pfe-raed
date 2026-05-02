import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactionType } from '../../../core/models/models';

const REACTION_EMOJIS: { [key in ReactionType]: string } = {
  'LIKE': '👍',
  'LOVE': '❤️',
  'CELEBRATE': '🎉',
  'SUPPORT': '🙌',
  'INSIGHTFUL': '💡'
};

@Component({
  selector: 'app-reactions-picker',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatTooltipModule],
  template: `
    <div class="reactions-container">
      <button *ngFor="let type of reactionTypes"
              mat-icon-button
              (click)="selectReaction(type)"
              [matTooltip]="type"
              class="reaction-button">
        {{ REACTION_EMOJIS[type] }}
      </button>
    </div>
  `,
  styles: [`
    .reactions-container {
      display: flex;
      gap: 2px;
      padding: 4px 8px;
      background-color: #fff;
      border: 1px solid #e0e0e0;
      border-radius: 16px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .reaction-button {
      width: 32px;
      height: 32px;
      padding: 0 !important;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background-color: #f5f5f5;
        transform: scale(1.1);
      }
    }
  `]
})
export class ReactionsPickerComponent {
  @Output() reactionSelected = new EventEmitter<ReactionType>();

  reactionTypes: ReactionType[] = ['LIKE', 'LOVE', 'CELEBRATE', 'SUPPORT', 'INSIGHTFUL'];
  REACTION_EMOJIS = REACTION_EMOJIS;

  selectReaction(type: ReactionType): void {
    this.reactionSelected.emit(type);
  }
}
