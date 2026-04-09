import {
  NG_VALUE_ACCESSOR
} from "./chunk-FV7EZ2JQ.js";
import {
  ElementRef,
  EventEmitter,
  forwardRef,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-2ECENSOK.js";

// src/app/shared/components/app-select/app-select.component.ts
var _forTrack0 = ($index, $item) => $item.value;
function AppSelectComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label);
  }
}
function AppSelectComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275listener("click", function AppSelectComponent_Conditional_7_For_2_Template_div_click_0_listener() {
      const opt_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.select(opt_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("cs-sel", opt_r3.value === ctx_r0.currentValue);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r3.label, " ");
  }
}
function AppSelectComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, AppSelectComponent_Conditional_7_For_2_Template, 2, 3, "div", 5, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.options);
  }
}
var AppSelectComponent = class _AppSelectComponent {
  constructor(el) {
    this.el = el;
    this.label = "";
    this.placeholder = "S\xE9lectionner...";
    this.options = [];
    this.selectionChange = new EventEmitter();
    this.isOpen = false;
    this.currentValue = null;
    this.isDisabled = false;
    this._onChange = () => {
    };
    this._onTouched = () => {
    };
  }
  get selectedLabel() {
    return this.options.find((o) => o.value === this.currentValue)?.label ?? "";
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
  writeValue(v) {
    this.currentValue = v;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(d) {
    this.isDisabled = d;
  }
  static {
    this.\u0275fac = function AppSelectComponent_Factory(t) {
      return new (t || _AppSelectComponent)(\u0275\u0275directiveInject(ElementRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSelectComponent, selectors: [["app-select"]], hostBindings: function AppSelectComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AppSelectComponent_click_HostBindingHandler($event) {
          return ctx.onDocClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, inputs: { label: "label", placeholder: "placeholder", options: "options" }, outputs: { selectionChange: "selectionChange" }, standalone: true, features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _AppSelectComponent),
      multi: true
    }]), \u0275\u0275StandaloneFeature], decls: 8, vars: 9, consts: [[1, "cs-wrap"], [1, "cs-label"], [1, "cs-trigger", 3, "click"], [1, "material-icons-round", "cs-chevron"], [1, "cs-panel"], [1, "cs-opt", 3, "cs-sel"], [1, "cs-opt", 3, "click"]], template: function AppSelectComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, AppSelectComponent_Conditional_1_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275listener("click", function AppSelectComponent_Template_div_click_2_listener() {
          return ctx.toggle();
        });
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 3);
        \u0275\u0275text(6, "expand_more");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, AppSelectComponent_Conditional_7_Template, 3, 0, "div", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("cs-open", ctx.isOpen)("cs-disabled", ctx.isDisabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(1, ctx.label ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("cs-ph", !ctx.selectedLabel);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.selectedLabel || ctx.placeholder);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(7, ctx.isOpen ? 7 : -1);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.cs-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 6px;\n  padding-left: 2px;\n  line-height: 1.2;\n  transition: color 0.15s;\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  padding: 0 14px;\n  height: 56px;\n  border: 1px solid rgba(0, 0, 0, 0.38);\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n  background: transparent;\n  transition: border-color 0.15s, border-width 0.05s;\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%]:hover {\n  border-color: rgba(0, 0, 0, 0.87);\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  flex: 1;\n  font-size: 0.9375rem;\n  color: rgba(0, 0, 0, 0.87);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%]   .cs-ph[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.42);\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%]   .cs-chevron[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: rgba(0, 0, 0, 0.54);\n  transition: transform 0.2s;\n  flex-shrink: 0;\n}\n.cs-wrap.cs-open[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%] {\n  border-color: #4f46e5;\n  border-width: 2px;\n  padding: 0 13px;\n}\n.cs-wrap.cs-open[_ngcontent-%COMP%]   .cs-label[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.cs-wrap.cs-open[_ngcontent-%COMP%]   .cs-chevron[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  color: #4f46e5;\n}\n.cs-wrap.cs-disabled[_ngcontent-%COMP%]   .cs-trigger[_ngcontent-%COMP%] {\n  opacity: 0.38;\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 2px);\n  left: 0;\n  right: 0;\n  z-index: 9999;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15), 0 1px 4px rgba(0, 0, 0, 0.08);\n  max-height: 260px;\n  overflow-y: auto;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-panel[_ngcontent-%COMP%]   .cs-opt[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  font-size: 0.9375rem;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: pointer;\n  transition: background 0.1s;\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-panel[_ngcontent-%COMP%]   .cs-opt[_ngcontent-%COMP%]:hover {\n  background: rgba(79, 70, 229, 0.07);\n}\n.cs-wrap[_ngcontent-%COMP%]   .cs-panel[_ngcontent-%COMP%]   .cs-opt.cs-sel[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.12);\n  color: #4f46e5;\n  font-weight: 500;\n}\n/*# sourceMappingURL=app-select.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSelectComponent, { className: "AppSelectComponent", filePath: "src\\app\\shared\\components\\app-select\\app-select.component.ts", lineNumber: 17 });
})();

export {
  AppSelectComponent
};
//# sourceMappingURL=chunk-TJQ44VG2.js.map
