import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/menu";
function EmojiPickerComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function EmojiPickerComponent_button_5_Template_button_click_0_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectEmoji(item_r2.emoji)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("title", item_r2.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r2.emoji, " ");
} }
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
export class EmojiPickerComponent {
    constructor() {
        this.emojiSelected = new EventEmitter();
        this.emojis = EMOJIS;
    }
    selectEmoji(emoji) {
        this.emojiSelected.emit(emoji);
    }
    static { this.ɵfac = function EmojiPickerComponent_Factory(t) { return new (t || EmojiPickerComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EmojiPickerComponent, selectors: [["app-emoji-picker"]], outputs: { emojiSelected: "emojiSelected" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 2, consts: [["emojiMenu", "matMenu"], ["mat-icon-button", "", 1, "emoji-button", 3, "matMenuTriggerFor"], [1, "emoji-menu"], [1, "emoji-grid"], ["class", "emoji-item", 3, "title", "click", 4, "ngFor", "ngForOf"], [1, "emoji-item", 3, "click", "title"]], template: function EmojiPickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 1);
            i0.ɵɵtext(1, " \uD83D\uDE00 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-menu", 2, 0)(4, "div", 3);
            i0.ɵɵtemplate(5, EmojiPickerComponent_button_5_Template, 2, 2, "button", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const emojiMenu_r4 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matMenuTriggerFor", emojiMenu_r4);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.emojis);
        } }, dependencies: [CommonModule, i1.NgForOf, MatButtonModule, i2.MatIconButton, MatMenuModule, i3.MatMenu, i3.MatMenuTrigger], styles: [".emoji-button[_ngcontent-%COMP%] {\n      margin-left: 4px;\n    }\n\n    .emoji-menu[_ngcontent-%COMP%] {\n      margin-top: 8px !important;\n    }\n\n    .emoji-grid[_ngcontent-%COMP%] {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 4px;\n      padding: 8px;\n      width: 200px;\n    }\n\n    .emoji-item[_ngcontent-%COMP%] {\n      width: 40px;\n      height: 40px;\n      padding: 0 !important;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 24px;\n      cursor: pointer;\n      border: none;\n      background: transparent;\n      border-radius: 4px;\n      transition: background-color 0.2s;\n\n      &:hover {\n        background-color: #f0f0f0;\n      }\n    }"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EmojiPickerComponent, [{
        type: Component,
        args: [{ selector: 'app-emoji-picker', standalone: true, imports: [CommonModule, MatButtonModule, MatMenuModule], template: `
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
  `, styles: ["\n    .emoji-button {\n      margin-left: 4px;\n    }\n\n    .emoji-menu {\n      margin-top: 8px !important;\n    }\n\n    .emoji-grid {\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 4px;\n      padding: 8px;\n      width: 200px;\n    }\n\n    .emoji-item {\n      width: 40px;\n      height: 40px;\n      padding: 0 !important;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 24px;\n      cursor: pointer;\n      border: none;\n      background: transparent;\n      border-radius: 4px;\n      transition: background-color 0.2s;\n\n      &:hover {\n        background-color: #f0f0f0;\n      }\n    }\n  "] }]
    }], null, { emojiSelected: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(EmojiPickerComponent, { className: "EmojiPickerComponent", filePath: "app\\shared\\components\\emoji-picker\\emoji-picker.component.ts", lineNumber: 82 }); })();
//# sourceMappingURL=emoji-picker.component.js.map