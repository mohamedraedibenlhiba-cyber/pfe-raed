import {
  MessagingService
} from "./chunk-WLVDILQ6.js";
import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import "./chunk-CIKWQEPB.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-CZTZ4ONH.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-GE2UJ6OD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FV7EZ2JQ.js";
import "./chunk-T243Z5LV.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-M2YTZW2R.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-JTYJI43T.js";
import {
  CommonModule,
  DatePipe,
  MatButtonModule,
  MatIconButton,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/shared/messaging/messaging.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function MessagingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function MessagingComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "span", 8);
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 9);
    \u0275\u0275text(4, "Aucune conversation");
    \u0275\u0275elementEnd()();
  }
}
function MessagingComponent_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function MessagingComponent_Conditional_7_For_1_Template_div_click_0_listener() {
      const conv_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conv_r2));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "p", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 15);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const conv_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", (ctx_r2.selectedConv == null ? null : ctx_r2.selectedConv.id) === conv_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.initials(ctx_r2.getOtherParticipant(conv_r2).fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.getOtherParticipant(conv_r2).fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 5, conv_r2.lastMessageAt, "dd/MM HH:mm"));
  }
}
function MessagingComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MessagingComponent_Conditional_7_For_1_Template, 9, 8, "div", 10, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.conversations);
  }
}
function MessagingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "span", 16);
    \u0275\u0275text(2, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 17);
    \u0275\u0275text(4, "S\xE9lectionnez une conversation");
    \u0275\u0275elementEnd()();
  }
}
function MessagingComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementEnd();
  }
}
function MessagingComponent_Conditional_10_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const msg_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("own", msg_r5.sender.id === (ctx_r2.auth.currentUser == null ? null : ctx_r2.auth.currentUser.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r5.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, msg_r5.sentAt, "HH:mm"));
  }
}
function MessagingComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MessagingComponent_Conditional_10_Conditional_7_For_1_Template, 6, 7, "div", 24, _forTrack0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.messages);
  }
}
function MessagingComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275template(6, MessagingComponent_Conditional_10_Conditional_6_Template, 2, 0, "div", 3)(7, MessagingComponent_Conditional_10_Conditional_7_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20)(9, "mat-form-field", 21)(10, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function MessagingComponent_Conditional_10_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newMessage, $event) || (ctx_r2.newMessage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function MessagingComponent_Conditional_10_Template_input_keyup_enter_10_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.send());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 23);
    \u0275\u0275listener("click", function MessagingComponent_Conditional_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.send());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.initials(ctx_r2.getOtherParticipant(ctx_r2.selectedConv).fullName));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.getOtherParticipant(ctx_r2.selectedConv).fullName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(6, ctx_r2.loadingMessages ? 6 : 7);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newMessage.trim() || ctx_r2.sending);
  }
}
var MessagingComponent = class _MessagingComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.msgSvc = inject(MessagingService);
    this.loading = true;
    this.conversations = [];
    this.selectedConv = null;
    this.messages = [];
    this.loadingMessages = false;
    this.newMessage = "";
    this.sending = false;
  }
  ngOnInit() {
    this.msgSvc.getConversations().subscribe({
      next: (res) => {
        this.conversations = res.data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  selectConversation(conv) {
    this.selectedConv = conv;
    this.loadingMessages = true;
    this.msgSvc.getMessages(conv.id).subscribe({
      next: (res) => {
        this.messages = res.data.content;
        this.loadingMessages = false;
        this.msgSvc.markRead(conv.id).subscribe();
      },
      error: () => {
        this.loadingMessages = false;
      }
    });
  }
  send() {
    if (!this.newMessage.trim() || !this.selectedConv || this.sending)
      return;
    const other = this.selectedConv.participant1.id === this.auth.currentUser?.id ? this.selectedConv.participant2 : this.selectedConv.participant1;
    this.sending = true;
    this.msgSvc.send({ recipientId: other.id, content: this.newMessage }).subscribe({
      next: (res) => {
        this.messages.push(res.data);
        this.newMessage = "";
        this.sending = false;
      },
      error: () => {
        this.sending = false;
      }
    });
  }
  getOtherParticipant(conv) {
    return conv.participant1.id === this.auth.currentUser?.id ? conv.participant2 : conv.participant1;
  }
  initials(name) {
    return name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  static {
    this.\u0275fac = function MessagingComponent_Factory(t) {
      return new (t || _MessagingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagingComponent, selectors: [["app-messaging"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 2, consts: [[1, "messaging-layout"], [1, "conversations-panel", "card"], [1, "conv-header"], [1, "loading-center"], [1, "chat-panel", "card"], [1, "no-conv-selected"], ["diameter", "30"], [1, "empty-state", "small"], [1, "material-icons-round", "empty-icon", 2, "font-size", "40px"], [1, "empty-title"], [1, "conv-item", 3, "active"], [1, "conv-item", 3, "click"], [1, "conv-avatar"], [1, "conv-info"], [1, "conv-name"], [1, "conv-date"], [1, "material-icons-round", 2, "font-size", "64px", "color", "#cbd5e1"], [2, "color", "#64748b", "margin-top", "12px"], [1, "chat-header"], [1, "messages-area"], [1, "message-input"], [1, "input-field"], ["matInput", "", "placeholder", "Saisissez votre message...", 3, "ngModelChange", "keyup.enter", "ngModel"], ["mat-icon-button", "", 1, "send-btn", 3, "click", "disabled"], [1, "message", 3, "own"], [1, "message"], [1, "bubble"], [1, "msg-time"]], template: function MessagingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        \u0275\u0275text(4, "Messagerie");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, MessagingComponent_Conditional_5_Template, 2, 0, "div", 3)(6, MessagingComponent_Conditional_6_Template, 5, 0)(7, MessagingComponent_Conditional_7_Template, 2, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 4);
        \u0275\u0275template(9, MessagingComponent_Conditional_9_Template, 5, 0, "div", 5)(10, MessagingComponent_Conditional_10_Template, 14, 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(5, ctx.loading ? 5 : !ctx.conversations.length ? 6 : 7);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(9, !ctx.selectedConv ? 9 : 10);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.messaging-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  gap: 16px;\n  height: calc(100vh - 120px);\n}\n@media (max-width: 768px) {\n  .messaging-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.conversations-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.conv-header[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  border-bottom: 1px solid var(--border-color);\n}\n.conv-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n}\n.conv-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--border-color);\n  transition: background 0.15s;\n}\n.conv-item[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n}\n.conv-item.active[_ngcontent-%COMP%] {\n  background: #eef2ff;\n}\n.conv-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #4f46e5,\n      #7c3aed);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.conv-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.conv-info[_ngcontent-%COMP%]   .conv-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  margin: 0 0 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.conv-info[_ngcontent-%COMP%]   .conv-date[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n.chat-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.no-conv-selected[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.chat-header[_ngcontent-%COMP%] {\n  padding: 14px 20px;\n  border-bottom: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.messages-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.message.own[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.bubble[_ngcontent-%COMP%] {\n  max-width: 70%;\n  padding: 10px 14px;\n  border-radius: 16px;\n  font-size: 0.875rem;\n  background: #f1f5f9;\n  color: var(--text-primary);\n}\n.message.own[_ngcontent-%COMP%]   .bubble[_ngcontent-%COMP%] {\n  background: var(--primary-light);\n  color: #fff;\n  border-radius: 16px 16px 0 16px;\n}\n.message[_ngcontent-%COMP%]:not(.own)   .bubble[_ngcontent-%COMP%] {\n  border-radius: 16px 16px 16px 0;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  margin-top: 2px;\n  padding: 0 4px;\n}\n.message-input[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-top: 1px solid var(--border-color);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.input-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.send-btn[_ngcontent-%COMP%] {\n  background: var(--primary-light) !important;\n  color: #fff !important;\n}\n/*# sourceMappingURL=messaging.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagingComponent, { className: "MessagingComponent", filePath: "src\\app\\features\\shared\\messaging\\messaging.component.ts", lineNumber: 20 });
})();
export {
  MessagingComponent
};
//# sourceMappingURL=chunk-BRARQHMT.js.map
