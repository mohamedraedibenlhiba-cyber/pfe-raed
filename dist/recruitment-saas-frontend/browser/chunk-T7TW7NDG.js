import {
  AuthService
} from "./chunk-RLFEX5HM.js";
import "./chunk-CIKWQEPB.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-WUAYRPG3.js";
import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-QDUAY4BZ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-CZTZ4ONH.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-FNKFVHAE.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
} from "./chunk-GE2UJ6OD.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-FV7EZ2JQ.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-K3CFEA6O.js";
import "./chunk-XXJRWQFV.js";
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
  HttpClient,
  HttpParams,
  MatButton,
  MatButtonModule,
  MatFabButton,
  MatIconButton,
  SlicePipe,
  environment,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-2ECENSOK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// src/app/core/services/channel.service.ts
var ChannelService = class _ChannelService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/channels`;
  }
  // ── Channels ──────────────────────────────────────────────────────────────
  create(req) {
    return this.http.post(this.API, req);
  }
  update(id, req) {
    return this.http.put(`${this.API}/${id}`, req);
  }
  delete(id) {
    return this.http.delete(`${this.API}/${id}`);
  }
  search(q, page = 0, size = 20) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (q)
      params = params.set("q", q);
    return this.http.get(this.API, { params });
  }
  getMyChannels(page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/mine`, { params });
  }
  getById(id) {
    return this.http.get(`${this.API}/${id}`);
  }
  // ── Membership ────────────────────────────────────────────────────────────
  join(id) {
    return this.http.post(`${this.API}/${id}/join`, {});
  }
  leave(id) {
    return this.http.post(`${this.API}/${id}/leave`, {});
  }
  getMembers(id) {
    return this.http.get(`${this.API}/${id}/members`);
  }
  // ── Messages ──────────────────────────────────────────────────────────────
  sendMessage(id, req) {
    return this.http.post(`${this.API}/${id}/messages`, req);
  }
  getMessages(id, page = 0, size = 50) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/${id}/messages`, { params });
  }
  deleteMessage(messageId) {
    return this.http.delete(`${this.API}/messages/${messageId}`);
  }
  // ── Réactions ─────────────────────────────────────────────────────────────
  react(messageId, type) {
    return this.http.post(`${this.API}/messages/${messageId}/react`, { type });
  }
  removeReaction(messageId) {
    return this.http.delete(`${this.API}/messages/${messageId}/react`);
  }
  static {
    this.\u0275fac = function ChannelService_Factory(t) {
      return new (t || _ChannelService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChannelService, factory: _ChannelService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/shared/channels/channels.component.ts
var _c0 = ["msgContainer"];
var _forTrack0 = ($index, $item) => $item.id;
function ChannelsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 17);
    \u0275\u0275listener("ngSubmit", function ChannelsComponent_Conditional_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createChannel());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 18)(2, "mat-label");
    \u0275\u0275text(3, "Nom du canal");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 18)(6, "mat-label");
    \u0275\u0275text(7, "Description (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "label", 21);
    \u0275\u0275element(10, "input", 22);
    \u0275\u0275text(11, " Canal public ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 23)(13, "button", 24);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_8_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showNewChannel = false);
    });
    \u0275\u0275text(14, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 25);
    \u0275\u0275text(16, "Cr\xE9er");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.channelForm);
    \u0275\u0275advance(15);
    \u0275\u0275property("disabled", ctx_r1.channelForm.invalid || ctx_r1.creating);
  }
}
function ChannelsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function ChannelsComponent_For_19_Template_div_click_0_listener() {
      const ch_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectChannel(ch_r4));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ch_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r1.selectedChannel == null ? null : ctx_r1.selectedChannel.id) === ch_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ch_r4.name[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ch_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ch_r4.memberCount, " membres");
  }
}
function ChannelsComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Vous n'avez rejoint aucun canal.");
    \u0275\u0275elementEnd();
  }
}
function ChannelsComponent_For_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ChannelsComponent_For_23_Conditional_8_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ch_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.join(ch_r6, $event));
    });
    \u0275\u0275text(1, "Rejoindre");
    \u0275\u0275elementEnd();
  }
}
function ChannelsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275listener("click", function ChannelsComponent_For_23_Template_div_click_0_listener() {
      const ch_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectChannel(ch_r6));
    });
    \u0275\u0275elementStart(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28)(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ChannelsComponent_For_23_Conditional_8_Template, 2, 0, "button", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ch_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r1.selectedChannel == null ? null : ctx_r1.selectedChannel.id) === ch_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ch_r6.name[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ch_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ch_r6.memberCount, " membres");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, !ch_r6.isMember ? 8 : -1);
  }
}
function ChannelsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "forum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "S\xE9lectionnez un canal pour commencer \xE0 discuter");
    \u0275\u0275elementEnd()();
  }
}
function ChannelsComponent_Conditional_26_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.joinSelected());
    });
    \u0275\u0275text(1, "Rejoindre");
    \u0275\u0275elementEnd();
  }
}
function ChannelsComponent_Conditional_26_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.leaveSelected());
    });
    \u0275\u0275text(1, "Quitter");
    \u0275\u0275elementEnd();
  }
}
function ChannelsComponent_Conditional_26_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "mat-spinner", 40);
    \u0275\u0275elementEnd();
  }
}
function ChannelsComponent_Conditional_26_For_14_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.initials(msg_r11.sender.fullName));
  }
}
function ChannelsComponent_Conditional_26_For_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(msg_r11.sender.fullName);
  }
}
function ChannelsComponent_Conditional_26_For_14_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const msg_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u21A9 ", \u0275\u0275pipeBind3(2, 1, msg_r11.replyTo.content, 0, 60), "\u2026");
  }
}
function ChannelsComponent_Conditional_26_For_14_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_For_14_Conditional_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const msg_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteMsg(msg_r11));
    });
    \u0275\u0275text(1, "\u{1F5D1} Supprimer");
    \u0275\u0275elementEnd();
  }
}
function ChannelsComponent_Conditional_26_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275template(1, ChannelsComponent_Conditional_26_For_14_Conditional_1_Template, 2, 1, "div", 42);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275template(3, ChannelsComponent_Conditional_26_For_14_Conditional_3_Template, 2, 1, "span", 44)(4, ChannelsComponent_Conditional_26_For_14_Conditional_4_Template, 3, 5, "div", 45);
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 46)(8, "span", 47);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 48);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_For_14_Template_button_click_11_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(12, "mat-icon", 49);
    \u0275\u0275text(13, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "mat-menu", null, 1)(16, "button", 50);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_For_14_Template_button_click_16_listener() {
      const msg_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setReplyTo(msg_r11));
    });
    \u0275\u0275text(17, "\u21A9 R\xE9pondre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 50);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_For_14_Template_button_click_18_listener() {
      const msg_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactMsg(msg_r11, "LIKE"));
    });
    \u0275\u0275text(19, "\u{1F44D} J'aime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 50);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_For_14_Template_button_click_20_listener() {
      const msg_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reactMsg(msg_r11, "LOVE"));
    });
    \u0275\u0275text(21, "\u2764\uFE0F J'adore");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, ChannelsComponent_Conditional_26_For_14_Conditional_22_Template, 2, 0, "button", 51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const msg_r11 = ctx.$implicit;
    const msgMenu_r13 = \u0275\u0275reference(15);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("mine", msg_r11.sender.id === (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(1, msg_r11.sender.id !== (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mine", msg_r11.sender.id === (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(3, msg_r11.sender.id !== (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(4, msg_r11.replyTo ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(msg_r11.content);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(10, 11, msg_r11.sentAt, "HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", msgMenu_r13);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(22, msg_r11.sender.id === (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 22 : -1);
  }
}
function ChannelsComponent_Conditional_26_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1, " \u21A9 R\xE9ponse \xE0 ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementStart(6, "button", 55);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_Conditional_15_Conditional_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.replyingTo = null);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.replyingTo.sender.fullName);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(": ", \u0275\u0275pipeBind3(5, 2, ctx_r1.replyingTo.content, 0, 50), " ");
  }
}
function ChannelsComponent_Conditional_26_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ChannelsComponent_Conditional_26_Conditional_15_Conditional_1_Template, 9, 6, "div", 52);
    \u0275\u0275elementStart(2, "mat-form-field", 53)(3, "mat-label");
    \u0275\u0275text(4, "Message\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function ChannelsComponent_Conditional_26_Conditional_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newMsg, $event) || (ctx_r1.newMsg = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function ChannelsComponent_Conditional_26_Conditional_15_Template_input_keyup_enter_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 54);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_Conditional_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.sendMessage());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "send");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(1, ctx_r1.replyingTo ? 1 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newMsg);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.newMsg.trim() || ctx_r1.sending);
  }
}
function ChannelsComponent_Conditional_26_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56)(1, "button", 39);
    \u0275\u0275listener("click", function ChannelsComponent_Conditional_26_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.joinSelected());
    });
    \u0275\u0275text(2, "Rejoindre pour participer");
    \u0275\u0275elementEnd()();
  }
}
function ChannelsComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 29);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ChannelsComponent_Conditional_26_Conditional_8_Template, 2, 0, "button", 34)(9, ChannelsComponent_Conditional_26_Conditional_9_Template, 2, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 35, 0);
    \u0275\u0275template(12, ChannelsComponent_Conditional_26_Conditional_12_Template, 2, 0, "div", 36);
    \u0275\u0275repeaterCreate(13, ChannelsComponent_Conditional_26_For_14_Template, 23, 14, "div", 37, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ChannelsComponent_Conditional_26_Conditional_15_Template, 9, 3, "div", 38)(16, ChannelsComponent_Conditional_26_Conditional_16_Template, 3, 0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.selectedChannel.name[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedChannel.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedChannel.memberCount, " membres");
    \u0275\u0275advance();
    \u0275\u0275conditional(8, !ctx_r1.selectedChannel.isMember ? 8 : ctx_r1.selectedChannel.owner.id !== (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(12, ctx_r1.loadingMessages ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.messages);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(15, ctx_r1.selectedChannel.isMember ? 15 : 16);
  }
}
var ChannelsComponent = class _ChannelsComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.channelSvc = inject(ChannelService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.myChannels = [];
    this.publicChannels = [];
    this.selectedChannel = null;
    this.messages = [];
    this.loadingChannels = true;
    this.loadingMessages = false;
    this.creating = false;
    this.sending = false;
    this.showNewChannel = false;
    this.searchQ = "";
    this.newMsg = "";
    this.replyingTo = null;
    this.activeTab = 0;
    this.channelForm = this.fb.group({
      name: ["", Validators.required],
      description: [""],
      publicChannel: [true]
    });
  }
  ngOnInit() {
    this.loadMyChannels();
    this.loadPublicChannels();
  }
  onTabChange(idx) {
    this.activeTab = idx;
    if (idx === 1 && this.publicChannels.length === 0)
      this.loadPublicChannels();
  }
  loadMyChannels() {
    this.channelSvc.getMyChannels().subscribe({
      next: (res) => {
        this.myChannels = res.data.content;
        this.loadingChannels = false;
      },
      error: () => {
        this.loadingChannels = false;
      }
    });
  }
  loadPublicChannels() {
    this.channelSvc.search(this.searchQ || void 0).subscribe({
      next: (res) => {
        this.publicChannels = res.data.content;
      }
    });
  }
  searchChannels() {
    this.loadPublicChannels();
  }
  createChannel() {
    if (this.channelForm.invalid)
      return;
    this.creating = true;
    this.channelSvc.create(this.channelForm.value).subscribe({
      next: (res) => {
        this.myChannels.unshift(__spreadProps(__spreadValues({}, res.data), { isMember: true, memberCount: 1 }));
        this.channelForm.reset({ publicChannel: true });
        this.showNewChannel = false;
        this.creating = false;
        this.snack.open("Canal cr\xE9\xE9", "OK", { duration: 2e3 });
      },
      error: () => {
        this.creating = false;
      }
    });
  }
  selectChannel(ch) {
    this.selectedChannel = ch;
    this.messages = [];
    this.loadMessages(ch.id);
  }
  loadMessages(channelId) {
    this.loadingMessages = true;
    this.channelSvc.getMessages(channelId).subscribe({
      next: (res) => {
        this.messages = res.data.content;
        this.loadingMessages = false;
        this.scrollToBottom();
      },
      error: () => {
        this.loadingMessages = false;
      }
    });
  }
  sendMessage() {
    if (!this.newMsg.trim() || !this.selectedChannel || this.sending)
      return;
    this.sending = true;
    const req = { content: this.newMsg, replyToId: this.replyingTo?.id };
    this.channelSvc.sendMessage(this.selectedChannel.id, req).subscribe({
      next: (res) => {
        this.messages.push(res.data);
        this.newMsg = "";
        this.replyingTo = null;
        this.sending = false;
        this.scrollToBottom();
      },
      error: () => {
        this.sending = false;
      }
    });
  }
  deleteMsg(msg) {
    this.channelSvc.deleteMessage(msg.id).subscribe(() => {
      this.messages = this.messages.filter((m) => m.id !== msg.id);
    });
  }
  reactMsg(msg, type) {
    this.channelSvc.react(msg.id, type).subscribe(() => {
      msg.reactionCount = (msg.reactionCount || 0) + 1;
    });
  }
  setReplyTo(msg) {
    this.replyingTo = msg;
  }
  join(ch, e) {
    e.stopPropagation();
    this.channelSvc.join(ch.id).subscribe(() => {
      ch.isMember = true;
      ch.memberCount = (ch.memberCount || 0) + 1;
      if (!this.myChannels.find((c) => c.id === ch.id))
        this.myChannels.push(ch);
      this.snack.open("Vous avez rejoint " + ch.name, "OK", { duration: 2e3 });
    });
  }
  joinSelected() {
    if (!this.selectedChannel)
      return;
    this.channelSvc.join(this.selectedChannel.id).subscribe(() => {
      this.selectedChannel.isMember = true;
      this.selectedChannel.memberCount = (this.selectedChannel.memberCount || 0) + 1;
      this.loadMessages(this.selectedChannel.id);
      this.snack.open("Vous avez rejoint le canal", "OK", { duration: 2e3 });
    });
  }
  leaveSelected() {
    if (!this.selectedChannel)
      return;
    this.channelSvc.leave(this.selectedChannel.id).subscribe(() => {
      this.myChannels = this.myChannels.filter((c) => c.id !== this.selectedChannel.id);
      this.selectedChannel.isMember = false;
      this.messages = [];
      this.snack.open("Vous avez quitt\xE9 le canal", "OK", { duration: 2e3 });
    });
  }
  initials(name) {
    return name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  scrollToBottom() {
    setTimeout(() => {
      const el = this.msgContainer?.nativeElement;
      if (el)
        el.scrollTop = el.scrollHeight;
    }, 60);
  }
  static {
    this.\u0275fac = function ChannelsComponent_Factory(t) {
      return new (t || _ChannelsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChannelsComponent, selectors: [["app-channels"]], viewQuery: function ChannelsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.msgContainer = _t.first);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 27, vars: 4, consts: [["msgContainer", ""], ["msgMenu", ""], [1, "channels-layout"], [1, "sidebar"], [1, "sidebar-header"], ["mat-icon-button", "", "matTooltip", "Cr\xE9er un canal", 3, "click"], [1, "new-channel-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width", "search-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], [3, "selectedIndexChange"], ["label", "Mes canaux"], [1, "channel-item", 3, "active"], [1, "empty-hint"], ["label", "Explorer"], [1, "chat-zone"], [1, "chat-placeholder"], [1, "new-channel-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "description"], [1, "public-toggle"], ["type", "checkbox", "formControlName", "publicChannel"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "channel-item", 3, "click"], [1, "ch-avatar"], [1, "ch-info"], [1, "ch-name"], [1, "ch-members"], ["mat-stroked-button", ""], ["mat-stroked-button", "", 3, "click"], [1, "chat-header"], ["mat-raised-button", "", "color", "primary"], [1, "messages-container"], [1, "center-spinner"], [1, "msg", 3, "mine"], [1, "compose"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["diameter", "32"], [1, "msg"], [1, "avatar-xs"], [1, "msg-bubble"], [1, "msg-sender"], [1, "reply-preview"], [1, "msg-actions"], [1, "msg-time"], ["mat-icon-button", "", 1, "tiny-btn", 3, "click", "matMenuTriggerFor"], [2, "font-size", "16px"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [1, "reply-bar"], ["appearance", "outline", 1, "compose-field"], ["mat-fab", "", "color", "primary", 3, "click", "disabled"], ["mat-icon-button", "", 3, "click"], [1, "join-prompt"]], template: function ChannelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3");
        \u0275\u0275text(4, "Canaux");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function ChannelsComponent_Template_button_click_5_listener() {
          return ctx.showNewChannel = !ctx.showNewChannel;
        });
        \u0275\u0275elementStart(6, "mat-icon");
        \u0275\u0275text(7, "add");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(8, ChannelsComponent_Conditional_8_Template, 17, 2, "form", 6);
        \u0275\u0275elementStart(9, "mat-form-field", 7)(10, "mat-label");
        \u0275\u0275text(11, "Rechercher");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "input", 8);
        \u0275\u0275twoWayListener("ngModelChange", function ChannelsComponent_Template_input_ngModelChange_12_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchQ, $event) || (ctx.searchQ = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function ChannelsComponent_Template_input_keyup_enter_12_listener() {
          return ctx.searchChannels();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 9);
        \u0275\u0275listener("click", function ChannelsComponent_Template_button_click_13_listener() {
          return ctx.searchChannels();
        });
        \u0275\u0275elementStart(14, "mat-icon");
        \u0275\u0275text(15, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "mat-tab-group", 10);
        \u0275\u0275listener("selectedIndexChange", function ChannelsComponent_Template_mat_tab_group_selectedIndexChange_16_listener($event) {
          return ctx.onTabChange($event);
        });
        \u0275\u0275elementStart(17, "mat-tab", 11);
        \u0275\u0275repeaterCreate(18, ChannelsComponent_For_19_Template, 8, 5, "div", 12, _forTrack0);
        \u0275\u0275template(20, ChannelsComponent_Conditional_20_Template, 2, 0, "p", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "mat-tab", 14);
        \u0275\u0275repeaterCreate(22, ChannelsComponent_For_23_Template, 9, 6, "div", 12, _forTrack0);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "div", 15);
        \u0275\u0275template(25, ChannelsComponent_Conditional_25_Template, 5, 0, "div", 16)(26, ChannelsComponent_Conditional_26_Template, 17, 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275conditional(8, ctx.showNewChannel ? 8 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchQ);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.myChannels);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(20, ctx.myChannels.length === 0 && !ctx.loadingChannels ? 20 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.publicChannels);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(25, !ctx.selectedChannel ? 25 : 26);
      }
    }, dependencies: [CommonModule, SlicePipe, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatIconButton, MatFabButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule, MatTabsModule, MatTab, MatTabGroup, MatTooltipModule, MatTooltip], styles: ["\n\n.channels-layout[_ngcontent-%COMP%] {\n  display: flex;\n  height: calc(100vh - 80px);\n  background: #f8fafc;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.sidebar[_ngcontent-%COMP%] {\n  width: 300px;\n  background: #fff;\n  border-right: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  flex-shrink: 0;\n}\n.sidebar-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-bottom: 1px solid #e2e8f0;\n}\n.sidebar-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1e293b;\n}\n.search-field[_ngcontent-%COMP%] {\n  margin: 8px 12px 0;\n  width: calc(100% - 24px);\n}\n.new-channel-form[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.public-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n  cursor: pointer;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.channel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f1f5f9;\n  transition: background .15s;\n}\n.channel-item[_ngcontent-%COMP%]:hover, .channel-item.active[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n}\n.ch-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.ch-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.ch-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #1e293b;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.ch-members[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.empty-hint[_ngcontent-%COMP%] {\n  padding: 16px;\n  color: #94a3b8;\n  font-size: 13px;\n  text-align: center;\n}\n.chat-zone[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.chat-placeholder[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #94a3b8;\n}\n.chat-placeholder[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  margin-bottom: 12px;\n}\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 20px;\n  background: #fff;\n  border-bottom: 1px solid #e2e8f0;\n}\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.center-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px;\n}\n.msg[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-end;\n}\n.msg.mine[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.msg-bubble[_ngcontent-%COMP%] {\n  max-width: 72%;\n  background: #f1f5f9;\n  border-radius: 12px;\n  padding: 8px 12px;\n  position: relative;\n}\n.msg-bubble.mine[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: #fff;\n}\n.msg-sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 12px;\n  color: #6366f1;\n  display: block;\n  margin-bottom: 4px;\n}\n.msg-bubble.mine[_ngcontent-%COMP%]   .msg-sender[_ngcontent-%COMP%] {\n  color: #c7d2fe;\n}\n.msg-bubble[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.5;\n  word-break: break-word;\n}\n.reply-preview[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, .08);\n  border-radius: 6px;\n  padding: 4px 8px;\n  font-size: 12px;\n  margin-bottom: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.msg-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 4px;\n  margin-top: 4px;\n}\n.msg-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: .7;\n}\n.tiny-btn[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.compose[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.reply-bar[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-left: 3px solid #6366f1;\n  padding: 6px 10px;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 4px;\n  flex: 1;\n}\n.compose-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.join-prompt[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n  background: #fff;\n  border-top: 1px solid #e2e8f0;\n}\n/*# sourceMappingURL=channels.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChannelsComponent, { className: "ChannelsComponent", filePath: "src\\app\\features\\shared\\channels\\channels.component.ts", lineNumber: 221 });
})();
export {
  ChannelsComponent
};
//# sourceMappingURL=chunk-T7TW7NDG.js.map
