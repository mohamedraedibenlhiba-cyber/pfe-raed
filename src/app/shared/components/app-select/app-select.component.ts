import { Component, Input, Output, EventEmitter, forwardRef, HostListener, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption { value: any; label: string; }

@Component({
  selector: 'app-select',
  standalone: true,
  templateUrl: './app-select.component.html',
  styleUrls: ['./app-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AppSelectComponent),
    multi: true
  }]
})
export class AppSelectComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = 'Sélectionner...';
  @Input() options: SelectOption[] = [];
  @Output() selectionChange = new EventEmitter<any>();

  isOpen = false;
  currentValue: any = null;
  isDisabled = false;

  private _onChange: (v: any) => void = () => {};
  private _onTouched: () => void = () => {};

  constructor(private el: ElementRef) {}

  get selectedLabel(): string {
    return this.options.find(o => o.value === this.currentValue)?.label ?? '';
  }

  @HostListener('document:click', ['$event'])
  onDocClick(e: MouseEvent) {
    if (!this.el.nativeElement.contains(e.target)) this.isOpen = false;
  }

  toggle() {
    if (!this.isDisabled) { this.isOpen = !this.isOpen; this._onTouched(); }
  }

  select(opt: SelectOption) {
    this.currentValue = opt.value;
    this._onChange(opt.value);
    this.selectionChange.emit(opt.value);
    this.isOpen = false;
  }

  writeValue(v: any) { this.currentValue = v; }
  registerOnChange(fn: any) { this._onChange = fn; }
  registerOnTouched(fn: any) { this._onTouched = fn; }
  setDisabledState(d: boolean) { this.isDisabled = d; }
}
