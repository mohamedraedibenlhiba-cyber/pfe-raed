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
  MatIconButton,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/core/services/post.service.ts
var PostService = class _PostService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/posts`;
  }
  getFeed(page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/feed`, { params });
  }
  getById(id) {
    return this.http.get(`${this.API}/${id}`);
  }
  getByUser(userId, page = 0, size = 10) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/user/${userId}`, { params });
  }
  create(content, mediaUrl, mediaType) {
    return this.http.post(this.API, { content, mediaUrl, mediaType });
  }
  update(id, content) {
    return this.http.put(`${this.API}/${id}`, { content });
  }
  delete(id) {
    return this.http.delete(`${this.API}/${id}`);
  }
  getComments(postId) {
    return this.http.get(`${this.API}/${postId}/comments`);
  }
  addComment(postId, content, parentCommentId) {
    return this.http.post(`${this.API}/comments`, { postId, content, parentCommentId });
  }
  deleteComment(commentId) {
    return this.http.delete(`${this.API}/comments/${commentId}`);
  }
  react(postId, type) {
    return this.http.post(`${this.API}/${postId}/react`, { type });
  }
  removeReaction(postId) {
    return this.http.delete(`${this.API}/${postId}/react`);
  }
  static {
    this.\u0275fac = function PostService_Factory(t) {
      return new (t || _PostService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PostService, factory: _PostService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/services/follow.service.ts
var FollowService = class _FollowService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/follows`;
  }
  follow(userId) {
    return this.http.post(`${this.API}/${userId}`, {});
  }
  unfollow(userId) {
    return this.http.delete(`${this.API}/${userId}`);
  }
  getStatus(userId) {
    return this.http.get(`${this.API}/${userId}/status`);
  }
  getFollowers(userId) {
    return this.http.get(`${this.API}/${userId}/followers`);
  }
  getFollowing(userId) {
    return this.http.get(`${this.API}/${userId}/following`);
  }
  static {
    this.\u0275fac = function FollowService_Factory(t) {
      return new (t || _FollowService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FollowService, factory: _FollowService.\u0275fac, providedIn: "root" });
  }
};

// src/app/features/shared/feed/feed.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [];
function FeedComponent_Conditional_7_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 18);
  }
}
function FeedComponent_Conditional_7_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, "Publier");
  }
}
function FeedComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11);
    \u0275\u0275listener("ngSubmit", function FeedComponent_Conditional_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.createPost());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 12)(2, "mat-label");
    \u0275\u0275text(3, "Votre publication");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "textarea", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 12)(6, "mat-label");
    \u0275\u0275text(7, "URL Media (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "button", 16);
    \u0275\u0275listener("click", function FeedComponent_Conditional_7_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreateForm = false);
    });
    \u0275\u0275text(11, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 17);
    \u0275\u0275template(13, FeedComponent_Conditional_7_Conditional_13_Template, 1, 0, "mat-spinner", 18)(14, FeedComponent_Conditional_7_Conditional_14_Template, 1, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.postForm);
    \u0275\u0275advance(12);
    \u0275\u0275property("disabled", ctx_r1.postForm.invalid || ctx_r1.creating);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r1.creating ? 13 : 14);
  }
}
function FeedComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementEnd();
  }
}
function FeedComponent_For_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function FeedComponent_For_10_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const post_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleFollow(post_r5.author.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("followed", ctx_r1.followingMap[post_r5.author.id]);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.followingMap[post_r5.author.id] ? "Abonn\xE9 \u2713" : "+ Suivre", " ");
  }
}
function FeedComponent_For_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32)(1, "mat-icon");
    \u0275\u0275text(2, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", null, 0)(5, "button", 33);
    \u0275\u0275listener("click", function FeedComponent_For_10_Conditional_11_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const post_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deletePost(post_r5));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Supprimer");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const postMenu_r7 = \u0275\u0275reference(4);
    \u0275\u0275property("matMenuTriggerFor", postMenu_r7);
  }
}
function FeedComponent_For_10_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 34);
    \u0275\u0275listener("error", function FeedComponent_For_10_Conditional_14_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", post_r5.mediaUrl, \u0275\u0275sanitizeUrl);
  }
}
function FeedComponent_For_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F44D} ", post_r5.reactionCount, "");
  }
}
function FeedComponent_For_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F4AC} ", post_r5.commentCount, " commentaire(s)");
  }
}
function FeedComponent_For_10_Conditional_35_For_2_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.initials(r_r12.author.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r12.author.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r12.content);
  }
}
function FeedComponent_For_10_Conditional_35_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41)(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function FeedComponent_For_10_Conditional_35_For_2_Template_button_click_8_listener() {
      const c_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const post_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setReply(post_r5.id, c_r11));
    });
    \u0275\u0275text(9, "R\xE9pondre");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(10, FeedComponent_For_10_Conditional_35_For_2_For_11_Template, 8, 3, "div", 44, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.initials(c_r11.author.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(c_r11.author.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r11.content);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(c_r11.replies || \u0275\u0275pureFunction0(3, _c0));
  }
}
function FeedComponent_For_10_Conditional_35_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function FeedComponent_For_10_Conditional_35_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const post_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearReply(post_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FeedComponent_For_10_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275repeaterCreate(1, FeedComponent_For_10_Conditional_35_For_2_Template, 12, 4, "div", 35, _forTrack0);
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 38)(7, "mat-label");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function FeedComponent_For_10_Conditional_35_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const post_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.commentText[post_r5.id], $event) || (ctx_r1.commentText[post_r5.id] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function FeedComponent_For_10_Conditional_35_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r9);
      const post_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submitComment(post_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FeedComponent_For_10_Conditional_35_Conditional_10_Template, 3, 0, "button", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const post_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.commentsMap[post_r5.id] || \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.initials(ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.replyTarget[post_r5.id] ? "R\xE9pondre \xE0 " + ctx_r1.replyTarget[post_r5.id].author.fullName : "Commenter\u2026");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.commentText[post_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275conditional(10, ctx_r1.replyTarget[post_r5.id] ? 10 : -1);
  }
}
function FeedComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 19)(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21)(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, FeedComponent_For_10_Conditional_10_Template, 2, 3, "button", 24)(11, FeedComponent_For_10_Conditional_11_Template, 9, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 25);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FeedComponent_For_10_Conditional_14_Template, 1, 1, "img", 26);
    \u0275\u0275elementStart(15, "div", 27);
    \u0275\u0275template(16, FeedComponent_For_10_Conditional_16_Template, 2, 1, "span")(17, FeedComponent_For_10_Conditional_17_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 28)(19, "button", 29);
    \u0275\u0275listener("click", function FeedComponent_For_10_Template_button_click_19_listener() {
      const post_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.react(post_r5, "LIKE"));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "thumb_up");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, "J'aime");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 29);
    \u0275\u0275listener("click", function FeedComponent_For_10_Template_button_click_23_listener() {
      const post_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.react(post_r5, "LOVE"));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "J'adore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 29);
    \u0275\u0275listener("click", function FeedComponent_For_10_Template_button_click_27_listener() {
      const post_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.react(post_r5, "CELEBRATE"));
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, "Bravo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 29);
    \u0275\u0275listener("click", function FeedComponent_For_10_Template_button_click_31_listener() {
      const post_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleComments(post_r5));
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "chat_bubble_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, "Commenter");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, FeedComponent_For_10_Conditional_35_Template, 11, 5, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const post_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.initials(post_r5.author.fullName));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r5.author.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 15, post_r5.createdAt, "dd/MM/yyyy HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, post_r5.author.id !== (ctx_r1.auth.currentUser == null ? null : ctx_r1.auth.currentUser.id) ? 10 : 11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r5.content);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, post_r5.mediaUrl ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, (post_r5.reactionCount || 0) > 0 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, (post_r5.commentCount || 0) > 0 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("reacted", post_r5.userReaction === "LIKE");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("reacted", post_r5.userReaction === "LOVE");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("reacted", post_r5.userReaction === "CELEBRATE");
    \u0275\u0275advance(8);
    \u0275\u0275conditional(35, ctx_r1.openComments[post_r5.id] ? 35 : -1);
  }
}
function FeedComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon");
    \u0275\u0275text(2, "newspaper");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Votre fil est vide. Suivez des utilisateurs pour voir leurs publications.");
    \u0275\u0275elementEnd()();
  }
}
function FeedComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 46);
    \u0275\u0275listener("click", function FeedComponent_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275text(2, "Voir plus");
    \u0275\u0275elementEnd()();
  }
}
var FeedComponent = class _FeedComponent {
  constructor() {
    this.auth = inject(AuthService);
    this.postSvc = inject(PostService);
    this.followSvc = inject(FollowService);
    this.snack = inject(MatSnackBar);
    this.fb = inject(FormBuilder);
    this.loading = true;
    this.creating = false;
    this.posts = [];
    this.page = 0;
    this.lastPage = false;
    this.showCreateForm = false;
    this.followingMap = {};
    this.openComments = {};
    this.commentsMap = {};
    this.commentText = {};
    this.replyTarget = {};
    this.postForm = this.fb.group({
      content: ["", [Validators.required, Validators.minLength(1)]],
      mediaUrl: [""]
    });
  }
  ngOnInit() {
    this.loadFeed();
  }
  loadFeed() {
    this.loading = true;
    this.postSvc.getFeed(this.page, 10).subscribe({
      next: (res) => {
        this.posts.push(...res.data.content);
        this.lastPage = res.data.last;
        this.loading = false;
        this.updateFollowMap();
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  loadMore() {
    this.page++;
    this.loadFeed();
  }
  createPost() {
    if (this.postForm.invalid)
      return;
    this.creating = true;
    const { content, mediaUrl } = this.postForm.value;
    this.postSvc.create(content, mediaUrl || void 0).subscribe({
      next: (res) => {
        this.posts.unshift(res.data);
        this.postForm.reset();
        this.showCreateForm = false;
        this.creating = false;
        this.snack.open("Publication cr\xE9\xE9e", "OK", { duration: 2e3 });
      },
      error: () => {
        this.creating = false;
      }
    });
  }
  deletePost(post) {
    this.postSvc.delete(post.id).subscribe({
      next: () => {
        this.posts = this.posts.filter((p) => p.id !== post.id);
        this.snack.open("Supprim\xE9e", "OK", { duration: 2e3 });
      }
    });
  }
  react(post, type) {
    if (post.userReaction === type) {
      this.postSvc.removeReaction(post.id).subscribe(() => {
        post.userReaction = void 0;
        post.reactionCount = Math.max(0, (post.reactionCount || 1) - 1);
      });
    } else {
      this.postSvc.react(post.id, type).subscribe(() => {
        if (!post.userReaction)
          post.reactionCount = (post.reactionCount || 0) + 1;
        post.userReaction = type;
      });
    }
  }
  toggleComments(post) {
    this.openComments[post.id] = !this.openComments[post.id];
    if (this.openComments[post.id] && !this.commentsMap[post.id]) {
      this.postSvc.getComments(post.id).subscribe((res) => {
        this.commentsMap[post.id] = res.data;
      });
    }
  }
  setReply(postId, c) {
    this.replyTarget[postId] = c;
  }
  clearReply(postId) {
    this.replyTarget[postId] = null;
  }
  submitComment(post) {
    const text = this.commentText[post.id]?.trim();
    if (!text)
      return;
    const parent = this.replyTarget[post.id];
    this.postSvc.addComment(post.id, text, parent?.id).subscribe((res) => {
      if (!this.commentsMap[post.id])
        this.commentsMap[post.id] = [];
      if (parent) {
        const p = this.commentsMap[post.id].find((c) => c.id === parent.id);
        if (p) {
          if (!p.replies)
            p.replies = [];
          p.replies.push(res.data);
        }
      } else {
        this.commentsMap[post.id].push(res.data);
        post.commentCount = (post.commentCount || 0) + 1;
      }
      this.commentText[post.id] = "";
      this.replyTarget[post.id] = null;
    });
  }
  toggleFollow(userId) {
    if (this.followingMap[userId]) {
      this.followSvc.unfollow(userId).subscribe(() => {
        this.followingMap[userId] = false;
      });
    } else {
      this.followSvc.follow(userId).subscribe(() => {
        this.followingMap[userId] = true;
      });
    }
  }
  updateFollowMap() {
    const myId = this.auth.currentUser?.id;
    const ids = [...new Set(this.posts.map((p) => p.author.id).filter((id) => id !== myId))];
    ids.forEach((id) => {
      if (this.followingMap[id] === void 0) {
        this.followSvc.getStatus(id).subscribe((res) => {
          this.followingMap[id] = res.data.isFollowing;
        });
      }
    });
  }
  onImgError(e) {
    e.target.style.display = "none";
  }
  initials(name) {
    return name?.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase() || "?";
  }
  static {
    this.\u0275fac = function FeedComponent_Factory(t) {
      return new (t || _FeedComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeedComponent, selectors: [["app-feed"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 5, consts: [["postMenu", ""], [1, "feed-layout"], [1, "card", "create-post-card"], [1, "post-author-row"], [1, "avatar-sm"], [1, "create-trigger", 3, "click"], [1, "post-form", 3, "formGroup"], [1, "center-spinner"], [1, "card", "post-card"], [1, "card", "empty-state"], [1, "load-more"], [1, "post-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "content", "rows", "4", "placeholder", "\xC9crivez votre publication\u2026"], ["matInput", "", "formControlName", "mediaUrl", "placeholder", "https://\u2026"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click"], ["mat-raised-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18"], [1, "post-header"], [1, "avatar"], [1, "post-meta"], [1, "author-name"], [1, "post-time"], ["mat-stroked-button", "", 1, "follow-btn", 3, "followed"], [1, "post-content"], ["alt", "media", 1, "post-media", 3, "src"], [1, "post-counts"], [1, "post-actions"], ["mat-button", "", 3, "click"], [1, "comments-section"], ["mat-stroked-button", "", 1, "follow-btn", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["alt", "media", 1, "post-media", 3, "error", "src"], [1, "comment"], [1, "comment-input-row"], [1, "avatar-xs"], ["appearance", "outline", 1, "comment-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matSuffix", "", "mat-icon-button", ""], [1, "comment-body"], [1, "comment-author"], ["mat-button", "", 1, "reply-btn", 3, "click"], [1, "reply"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["mat-stroked-button", "", 3, "click"]], template: function FeedComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 5);
        \u0275\u0275listener("click", function FeedComponent_Template_button_click_5_listener() {
          return ctx.showCreateForm = !ctx.showCreateForm;
        });
        \u0275\u0275text(6, " Partagez quelque chose\u2026 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, FeedComponent_Conditional_7_Template, 15, 3, "form", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FeedComponent_Conditional_8_Template, 2, 0, "div", 7);
        \u0275\u0275repeaterCreate(9, FeedComponent_For_10_Template, 36, 18, "div", 8, _forTrack0);
        \u0275\u0275template(11, FeedComponent_Conditional_11_Template, 5, 0, "div", 9)(12, FeedComponent_Conditional_12_Template, 3, 0, "div", 10);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.initials(ctx.auth.currentUser == null ? null : ctx.auth.currentUser.fullName));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(7, ctx.showCreateForm ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(8, ctx.loading ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.posts);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(11, !ctx.loading && ctx.posts.length === 0 ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(12, !ctx.loading && !ctx.lastPage && ctx.posts.length > 0 ? 12 : -1);
      }
    }, dependencies: [CommonModule, DatePipe, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, ReactiveFormsModule, FormGroupDirective, FormControlName, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule], styles: ["\n\n.feed-layout[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, .08);\n}\n.post-author-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.create-trigger[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f1f5f9;\n  border: 1px solid #e2e8f0;\n  border-radius: 24px;\n  padding: 10px 20px;\n  text-align: left;\n  cursor: pointer;\n  color: #64748b;\n  font-size: 14px;\n}\n.create-trigger[_ngcontent-%COMP%]:hover {\n  background: #e2e8f0;\n}\n.post-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  justify-content: flex-end;\n}\n.center-spinner[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n}\n.post-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.post-meta[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.author-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #1e293b;\n}\n.post-time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #94a3b8;\n}\n.follow-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 13px;\n}\n.follow-btn.followed[_ngcontent-%COMP%] {\n  color: #64748b;\n  border-color: #cbd5e1;\n}\n.post-content[_ngcontent-%COMP%] {\n  color: #334155;\n  line-height: 1.6;\n  margin-bottom: 12px;\n  white-space: pre-line;\n}\n.post-media[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  max-height: 400px;\n  object-fit: cover;\n  margin-bottom: 12px;\n}\n.post-counts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #64748b;\n  padding: 8px 0;\n  border-top: 1px solid #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n  margin-bottom: 8px;\n}\n.post-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n.post-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n}\n.post-actions[_ngcontent-%COMP%]   button.reacted[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.comments-section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  border-top: 1px solid #f1f5f9;\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.comment[_ngcontent-%COMP%], .reply[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: flex-start;\n}\n.reply[_ngcontent-%COMP%] {\n  margin-left: 32px;\n  margin-top: 8px;\n}\n.comment-body[_ngcontent-%COMP%] {\n  flex: 1;\n  background: #f8fafc;\n  border-radius: 8px;\n  padding: 8px 12px;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  display: block;\n}\n.comment-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 14px;\n  color: #334155;\n}\n.reply-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 0;\n  min-width: unset;\n  color: #6366f1;\n}\n.comment-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.comment-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 14px;\n  flex-shrink: 0;\n}\n.avatar-sm[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #8b5cf6);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.avatar-xs[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #64748b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 11px;\n  flex-shrink: 0;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  color: #94a3b8;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  width: 48px;\n  height: 48px;\n}\n.load-more[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=feed.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeedComponent, { className: "FeedComponent", filePath: "src\\app\\features\\shared\\feed\\feed.component.ts", lineNumber: 165 });
})();
export {
  FeedComponent
};
//# sourceMappingURL=chunk-7XZWN6AP.js.map
