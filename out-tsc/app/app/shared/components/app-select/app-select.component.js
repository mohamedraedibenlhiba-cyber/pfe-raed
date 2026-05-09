import { Component, Input, Output, EventEmitter, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.value;
function AppSelectComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.label);
} }
function AppSelectComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵlistener("click", function AppSelectComponent_Conditional_7_For_2_Template_div_click_0_listener() { const opt_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.select(opt_r3)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("cs-sel", opt_r3.value === ctx_r0.currentValue);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r3.label, " ");
} }
function AppSelectComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵrepeaterCreate(1, AppSelectComponent_Conditional_7_For_2_Template, 2, 3, "div", 5, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.options);
} }
export class AppSelectComponent {
    constructor(el) {
        this.el = el;
        this.label = '';
        this.placeholder = 'Sélectionner...';
        this.options = [];
        this.selectionChange = new EventEmitter();
        this.isOpen = false;
        this.currentValue = null;
        this.isDisabled = false;
        this._onChange = () => { };
        this._onTouched = () => { };
    }
    get selectedLabel() {
        return this.options.find(o => o.value === this.currentValue)?.label ?? '';
    }
    onDocClick(e) {
        if (!this.el.nativeElement.contains(e.target))
            this.isOpen = false;
    }
    toggle() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
            this._onTouched();
        }
    }
    select(opt) {
        this.currentValue = opt.value;
        this._onChange(opt.value);
        this.selectionChange.emit(opt.value);
        this.isOpen = false;
    }
    writeValue(v) { this.currentValue = v; }
    registerOnChange(fn) { this._onChange = fn; }
    registerOnTouched(fn) { this._onTouched = fn; }
    setDisabledState(d) { this.isDisabled = d; }
    static { this.ɵfac = function AppSelectComponent_Factory(t) { return new (t || AppSelectComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppSelectComponent, selectors: [["app-select"]], hostBindings: function AppSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function AppSelectComponent_click_HostBindingHandler($event) { return ctx.onDocClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { label: "label", placeholder: "placeholder", options: "options" }, outputs: { selectionChange: "selectionChange" }, standalone: true, features: [i0.ɵɵProvidersFeature([{
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => AppSelectComponent),
                    multi: true
                }]), i0.ɵɵStandaloneFeature], decls: 8, vars: 9, consts: [[1, "cs-wrap"], [1, "cs-label"], [1, "cs-trigger", 3, "click"], [1, "material-icons-round", "cs-chevron"], [1, "cs-panel"], [1, "cs-opt", 3, "cs-sel"], [1, "cs-opt", 3, "click"]], template: function AppSelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, AppSelectComponent_Conditional_1_Template, 2, 1, "span", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵlistener("click", function AppSelectComponent_Template_div_click_2_listener() { return ctx.toggle(); });
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 3);
            i0.ɵɵtext(6, "expand_more");
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, AppSelectComponent_Conditional_7_Template, 3, 0, "div", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("cs-open", ctx.isOpen)("cs-disabled", ctx.isDisabled);
            i0.ɵɵadvance();
            i0.ɵɵconditional(1, ctx.label ? 1 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("cs-ph", !ctx.selectedLabel);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.selectedLabel || ctx.placeholder);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(7, ctx.isOpen ? 7 : -1);
        } }, styles: ["[_nghost-%COMP%] { display: block; width: 100%; }\n\n.cs-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n\n  .cs-label {\n    display: block;\n    font-size: .75rem;\n    font-weight: 500;\n    color: #abb8c3;\n    margin-bottom: 6px;\n    padding-left: 2px;\n    line-height: 1.2;\n    transition: color .15s;\n  }\n\n  .cs-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    padding: 0 14px;\n    height: 56px;\n    border: 1px solid #d9dfe5;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background: #f8f9fb;\n    transition: border-color .15s, border-width .05s, background-color .15s;\n\n    &:hover {\n      border-color: #fcb900;\n      background: rgba(252, 185, 0, 0.04);\n    }\n\n    span:first-child {\n      flex: 1;\n      font-size: .9375rem;\n      color: #000;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .cs-ph { color: #abb8c3; }\n\n    .cs-chevron {\n      font-size: 20px;\n      color: #abb8c3;\n      transition: transform .2s, color .15s;\n      flex-shrink: 0;\n    }\n  }\n\n  &.cs-open {\n    .cs-trigger {\n      border-color: #fcb900;\n      border-width: 2px;\n      padding: 0 13px; // compensate border-width change\n      background: rgba(252, 185, 0, 0.06);\n    }\n    .cs-label { color: #fcb900; }\n    .cs-chevron {\n      transform: rotate(180deg);\n      color: #fcb900;\n    }\n  }\n\n  &.cs-disabled .cs-trigger {\n    opacity: .38;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  .cs-panel {\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    right: 0;\n    z-index: 9999;\n    background: #fff;\n    border-radius: 4px;\n    box-shadow: 0 4px 20px rgba(0,0,0,.15), 0 1px 4px rgba(0,0,0,.08);\n    max-height: 260px;\n    overflow-y: auto;\n    border: 1px solid #d9dfe5;\n\n    .cs-opt {\n      padding: 11px 16px;\n      font-size: .9375rem;\n      color: #000;\n      cursor: pointer;\n      transition: background .1s;\n\n      &:hover {\n        background: rgba(252, 185, 0, 0.07);\n      }\n\n      &.cs-sel {\n        background: rgba(252, 185, 0, 0.12);\n        color: #fcb900;\n        font-weight: 500;\n      }\n    }\n  }\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppSelectComponent, [{
        type: Component,
        args: [{ selector: 'app-select', standalone: true, providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AppSelectComponent),
                        multi: true
                    }], template: "<div class=\"cs-wrap\" [class.cs-open]=\"isOpen\" [class.cs-disabled]=\"isDisabled\">\n  @if (label) {\n    <span class=\"cs-label\">{{ label }}</span>\n  }\n  <div class=\"cs-trigger\" (click)=\"toggle()\">\n    <span [class.cs-ph]=\"!selectedLabel\">{{ selectedLabel || placeholder }}</span>\n    <span class=\"material-icons-round cs-chevron\">expand_more</span>\n  </div>\n  @if (isOpen) {\n    <div class=\"cs-panel\">\n      @for (opt of options; track opt.value) {\n        <div class=\"cs-opt\" [class.cs-sel]=\"opt.value === currentValue\" (click)=\"select(opt)\">\n          {{ opt.label }}\n        </div>\n      }\n    </div>\n  }\n</div>\n", styles: [":host { display: block; width: 100%; }\n\n.cs-wrap {\n  position: relative;\n  width: 100%;\n\n  .cs-label {\n    display: block;\n    font-size: .75rem;\n    font-weight: 500;\n    color: #abb8c3;\n    margin-bottom: 6px;\n    padding-left: 2px;\n    line-height: 1.2;\n    transition: color .15s;\n  }\n\n  .cs-trigger {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n    padding: 0 14px;\n    height: 56px;\n    border: 1px solid #d9dfe5;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background: #f8f9fb;\n    transition: border-color .15s, border-width .05s, background-color .15s;\n\n    &:hover {\n      border-color: #fcb900;\n      background: rgba(252, 185, 0, 0.04);\n    }\n\n    span:first-child {\n      flex: 1;\n      font-size: .9375rem;\n      color: #000;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n\n    .cs-ph { color: #abb8c3; }\n\n    .cs-chevron {\n      font-size: 20px;\n      color: #abb8c3;\n      transition: transform .2s, color .15s;\n      flex-shrink: 0;\n    }\n  }\n\n  &.cs-open {\n    .cs-trigger {\n      border-color: #fcb900;\n      border-width: 2px;\n      padding: 0 13px; // compensate border-width change\n      background: rgba(252, 185, 0, 0.06);\n    }\n    .cs-label { color: #fcb900; }\n    .cs-chevron {\n      transform: rotate(180deg);\n      color: #fcb900;\n    }\n  }\n\n  &.cs-disabled .cs-trigger {\n    opacity: .38;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n\n  .cs-panel {\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    right: 0;\n    z-index: 9999;\n    background: #fff;\n    border-radius: 4px;\n    box-shadow: 0 4px 20px rgba(0,0,0,.15), 0 1px 4px rgba(0,0,0,.08);\n    max-height: 260px;\n    overflow-y: auto;\n    border: 1px solid #d9dfe5;\n\n    .cs-opt {\n      padding: 11px 16px;\n      font-size: .9375rem;\n      color: #000;\n      cursor: pointer;\n      transition: background .1s;\n\n      &:hover {\n        background: rgba(252, 185, 0, 0.07);\n      }\n\n      &.cs-sel {\n        background: rgba(252, 185, 0, 0.12);\n        color: #fcb900;\n        font-weight: 500;\n      }\n    }\n  }\n}\n"] }]
    }], () => [{ type: i0.ElementRef }], { label: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], options: [{
            type: Input
        }], selectionChange: [{
            type: Output
        }], onDocClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppSelectComponent, { className: "AppSelectComponent", filePath: "app\\shared\\components\\app-select\\app-select.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=app-select.component.js.map