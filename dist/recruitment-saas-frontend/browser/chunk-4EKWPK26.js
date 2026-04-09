import {
  CvService
} from "./chunk-DUY2VADM.js";
import {
  JobOfferService
} from "./chunk-XBWLOVK2.js";
import {
  ApplicationService
} from "./chunk-WKMMEWS2.js";
import {
  AppSelectComponent
} from "./chunk-TJQ44VG2.js";
import {
  MatDialogModule
} from "./chunk-5U2QUVSG.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ROGWU2VO.js";
import "./chunk-WTCVOHOR.js";
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
  MatPrefix
} from "./chunk-GE2UJ6OD.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-FV7EZ2JQ.js";
import "./chunk-K3CFEA6O.js";
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
  DecimalPipe,
  MatButton,
  MatButtonModule,
  MatIconButton,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-2ECENSOK.js";
import "./chunk-J4B6MK7R.js";

// src/app/features/candidate/search/job-search.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _c0 = () => [10, 20];
function JobSearchComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementEnd();
  }
}
function JobSearchComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 15);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
    \u0275\u0275text(4, "Aucune offre trouv\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6, "Modifiez vos filtres de recherche");
    \u0275\u0275elementEnd()();
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27)(1, "span", 36);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(offer_r3.location);
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(offer_r3.contractType);
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29)(1, "span", 36);
    \u0275\u0275text(2, "home");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "T\xE9l\xE9travail");
    \u0275\u0275elementEnd();
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", offer_r3.experienceRequired, "+ ans");
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(offer_r3.experienceLevel);
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27)(1, "span", 36);
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", offer_r3.numberOfPositions, " postes");
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 31)(1, "span", 36);
    \u0275\u0275text(2, "euro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 2, offer_r3.salaryMin), " \u2013 ", \u0275\u0275pipeBind1(5, 4, offer_r3.salaryMax), " \u20AC/an ");
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32)(1, "span", 37);
    \u0275\u0275text(2, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", offer_r3.techStack, "");
  }
}
function JobSearchComponent_Conditional_26_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const offer_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(offer_r3.requiredSkills);
  }
}
function JobSearchComponent_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 21)(2, "div", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 23)(5, "h3", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 25);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 26);
    \u0275\u0275template(10, JobSearchComponent_Conditional_26_For_2_Conditional_10_Template, 4, 1, "span", 27)(11, JobSearchComponent_Conditional_26_For_2_Conditional_11_Template, 2, 1, "span", 28)(12, JobSearchComponent_Conditional_26_For_2_Conditional_12_Template, 4, 0, "span", 29)(13, JobSearchComponent_Conditional_26_For_2_Conditional_13_Template, 2, 1, "span", 27)(14, JobSearchComponent_Conditional_26_For_2_Conditional_14_Template, 2, 1, "span", 30)(15, JobSearchComponent_Conditional_26_For_2_Conditional_15_Template, 4, 1, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, JobSearchComponent_Conditional_26_For_2_Conditional_16_Template, 6, 6, "p", 31)(17, JobSearchComponent_Conditional_26_For_2_Conditional_17_Template, 4, 1, "p", 32)(18, JobSearchComponent_Conditional_26_For_2_Conditional_18_Template, 2, 1, "p", 32);
    \u0275\u0275elementStart(19, "div", 33)(20, "span", 34);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 35);
    \u0275\u0275listener("click", function JobSearchComponent_Conditional_26_For_2_Template_button_click_23_listener() {
      const offer_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openApply(offer_r3));
    });
    \u0275\u0275text(24, " Postuler ");
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26, "arrow_forward");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const offer_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(offer_r3.enterprise == null ? null : offer_r3.enterprise.companyName == null ? null : offer_r3.enterprise.companyName[0] == null ? null : offer_r3.enterprise.companyName[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(offer_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(offer_r3.enterprise == null ? null : offer_r3.enterprise.companyName);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(10, offer_r3.location ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(11, offer_r3.contractType ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, offer_r3.remote ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, offer_r3.experienceRequired ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(14, offer_r3.experienceLevel ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(15, offer_r3.numberOfPositions && offer_r3.numberOfPositions > 1 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(16, offer_r3.salaryMin || offer_r3.salaryMax ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(17, offer_r3.techStack ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(18, offer_r3.requiredSkills ? 18 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 13, offer_r3.createdAt, "dd/MM/yyyy"));
  }
}
function JobSearchComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275repeaterCreate(1, JobSearchComponent_Conditional_26_For_2_Template, 27, 16, "div", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-paginator", 20);
    \u0275\u0275listener("page", function JobSearchComponent_Conditional_26_Template_mat_paginator_page_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.offers);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", ctx_r3.totalElements)("pageSize", ctx_r3.pageSize)("pageSizeOptions", \u0275\u0275pureFunction0(3, _c0));
  }
}
function JobSearchComponent_Conditional_27_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 48)(2, "mat-icon", 49);
    \u0275\u0275text(3, "card_giftcard");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Avantages");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.benefits);
  }
}
function JobSearchComponent_Conditional_27_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "p", 48)(2, "mat-icon", 49);
    \u0275\u0275text(3, "how_to_reg");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Processus d'entretien");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 50);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r3.selectedOffer.interviewProcess);
  }
}
function JobSearchComponent_Conditional_27_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 43)(1, "mat-icon", 49);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " D\xE9but souhait\xE9 : ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 1, ctx_r3.selectedOffer.startDate, "dd/MM/yyyy"));
  }
}
function JobSearchComponent_Conditional_27_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 47);
  }
}
function JobSearchComponent_Conditional_27_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Envoyer ma candidature ");
  }
}
function JobSearchComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function JobSearchComponent_Conditional_27_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedOffer = null);
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function JobSearchComponent_Conditional_27_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40)(3, "div")(4, "h3");
    \u0275\u0275text(5, "Postuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 41);
    \u0275\u0275listener("click", function JobSearchComponent_Conditional_27_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectedOffer = null);
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(11, JobSearchComponent_Conditional_27_Conditional_11_Template, 7, 1, "div", 42)(12, JobSearchComponent_Conditional_27_Conditional_12_Template, 7, 1, "div", 42)(13, JobSearchComponent_Conditional_27_Conditional_13_Template, 7, 4, "p", 43);
    \u0275\u0275elementStart(14, "app-select", 44);
    \u0275\u0275twoWayListener("ngModelChange", function JobSearchComponent_Conditional_27_Template_app_select_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.selectedCvId, $event) || (ctx_r3.selectedCvId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-form-field")(16, "mat-label");
    \u0275\u0275text(17, "Lettre de motivation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "textarea", 45);
    \u0275\u0275twoWayListener("ngModelChange", function JobSearchComponent_Conditional_27_Template_textarea_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.coverLetter, $event) || (ctx_r3.coverLetter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 46);
    \u0275\u0275listener("click", function JobSearchComponent_Conditional_27_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitApply());
    });
    \u0275\u0275template(20, JobSearchComponent_Conditional_27_Conditional_20_Template, 1, 0, "mat-spinner", 47)(21, JobSearchComponent_Conditional_27_Conditional_21_Template, 3, 0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", ctx_r3.selectedOffer.title, " \u2014 ", ctx_r3.selectedOffer.enterprise == null ? null : ctx_r3.selectedOffer.enterprise.companyName, "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(11, ctx_r3.selectedOffer.benefits ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(12, ctx_r3.selectedOffer.interviewProcess ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(13, ctx_r3.selectedOffer.startDate ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("options", ctx_r3.cvOpts);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.selectedCvId);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.coverLetter);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.applyLoading);
    \u0275\u0275advance();
    \u0275\u0275conditional(20, ctx_r3.applyLoading ? 20 : 21);
  }
}
var JobSearchComponent = class _JobSearchComponent {
  constructor() {
    this.offerSvc = inject(JobOfferService);
    this.appSvc = inject(ApplicationService);
    this.cvSvc = inject(CvService);
    this.snack = inject(MatSnackBar);
    this.loading = false;
    this.offers = [];
    this.totalElements = 0;
    this.currentPage = 0;
    this.pageSize = 10;
    this.titleFilter = "";
    this.locationFilter = "";
    this.contractFilter = "";
    this.selectedOffer = null;
    this.myCvs = [];
    this.applyLoading = false;
    this.coverLetter = "";
    this.contractTypes = ["CDI", "CDD", "STAGE", "FREELANCE", "ALTERNANCE", "TEMPS_PARTIEL"];
    this.contractTypeOpts = [
      { value: "", label: "Tous" },
      ...this.contractTypes.map((c) => ({ value: c, label: c }))
    ];
  }
  get cvOpts() {
    return [
      { value: void 0, label: "\u2014 Aucun CV \u2014" },
      ...this.myCvs.map((cv) => ({ value: cv.id, label: cv.fileName + (cv.defaultCv ? " (par d\xE9faut)" : "") }))
    ];
  }
  ngOnInit() {
    this.search();
    this.cvSvc.getMyCvs().subscribe((res) => this.myCvs = res.data);
  }
  search() {
    this.loading = true;
    this.offerSvc.searchPublic(this.titleFilter, this.locationFilter, this.contractFilter, this.currentPage, this.pageSize).subscribe({
      next: (res) => {
        this.offers = res.data.content;
        this.totalElements = res.data.totalElements;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  onPage(event) {
    this.currentPage = event.pageIndex;
    this.search();
  }
  openApply(offer) {
    this.selectedOffer = offer;
    this.selectedCvId = this.myCvs.find((cv) => cv.defaultCv)?.id;
    this.coverLetter = "";
  }
  submitApply() {
    if (!this.selectedOffer)
      return;
    this.applyLoading = true;
    this.appSvc.apply({ jobOfferId: this.selectedOffer.id, cvId: this.selectedCvId, coverLetter: this.coverLetter }).subscribe({
      next: () => {
        this.applyLoading = false;
        this.selectedOffer = null;
        this.snack.open("Candidature envoy\xE9e !", "OK", { panelClass: "success-snack" });
      },
      error: (err) => {
        this.applyLoading = false;
        this.snack.open(err.error?.message || "Erreur", "OK", { panelClass: "error-snack" });
      }
    });
  }
  static {
    this.\u0275fac = function JobSearchComponent_Factory(t) {
      return new (t || _JobSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JobSearchComponent, selectors: [["app-job-search"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 28, vars: 7, consts: [[1, "search-page"], [1, "search-header"], [1, "page-title"], [1, "page-subtitle"], [1, "search-bar", "card"], [1, "search-field"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matPrefix", ""], [1, "location-field"], ["label", "Type de contrat", 1, "contract-field", 3, "ngModelChange", "options", "ngModel"], ["mat-flat-button", "", 1, "btn-primary", "search-btn", 3, "click"], [1, "loading-center"], [1, "apply-overlay"], ["diameter", "40"], [1, "empty-state", "card"], [1, "material-icons-round", "empty-icon"], [1, "empty-title"], [1, "empty-desc"], [1, "offers-grid"], [1, "offer-card", "card"], [1, "paginator", 3, "page", "length", "pageSize", "pageSizeOptions"], [1, "offer-top"], [1, "offer-company-logo", "bg-primary"], [1, "offer-main"], [1, "offer-title"], [1, "offer-company"], [1, "offer-tags"], [1, "tag"], [1, "tag", "tag-contract"], [1, "tag", "tag-remote"], [1, "tag", "tag-level"], [1, "offer-salary"], [1, "offer-skills"], [1, "offer-footer"], [1, "offer-date"], ["mat-flat-button", "", 1, "btn-apply", 3, "click"], [1, "material-icons-round"], [1, "material-icons-round", 2, "font-size", "14px", "vertical-align", "middle"], [1, "apply-overlay", 3, "click"], [1, "apply-panel", "card", 3, "click"], [1, "panel-header"], ["mat-icon-button", "", 3, "click"], [1, "panel-detail-section"], [1, "panel-detail-label", 2, "margin-bottom", "12px"], ["label", "CV", 3, "ngModelChange", "options", "ngModel"], ["matInput", "", "rows", "5", "placeholder", "Pr\xE9sentez-vous et expliquez votre motivation...", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", 1, "btn-primary", "apply-submit", 3, "click", "disabled"], ["diameter", "18"], [1, "panel-detail-label"], [2, "font-size", "16px", "vertical-align", "middle"], [1, "panel-detail-text"]], template: function JobSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
        \u0275\u0275text(3, "Offres d'emploi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "p", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
        \u0275\u0275text(9, "Titre, poste, entreprise...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function JobSearchComponent_Template_input_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.titleFilter, $event) || (ctx.titleFilter = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function JobSearchComponent_Template_input_keyup_enter_10_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "mat-icon", 7);
        \u0275\u0275text(12, "search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-form-field", 8)(14, "mat-label");
        \u0275\u0275text(15, "Ville, r\xE9gion");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "input", 6);
        \u0275\u0275twoWayListener("ngModelChange", function JobSearchComponent_Template_input_ngModelChange_16_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.locationFilter, $event) || (ctx.locationFilter = $event);
          return $event;
        });
        \u0275\u0275listener("keyup.enter", function JobSearchComponent_Template_input_keyup_enter_16_listener() {
          return ctx.search();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-icon", 7);
        \u0275\u0275text(18, "place");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "app-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function JobSearchComponent_Template_app_select_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.contractFilter, $event) || (ctx.contractFilter = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 10);
        \u0275\u0275listener("click", function JobSearchComponent_Template_button_click_20_listener() {
          return ctx.search();
        });
        \u0275\u0275elementStart(21, "mat-icon");
        \u0275\u0275text(22, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(23, " Rechercher ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(24, JobSearchComponent_Conditional_24_Template, 2, 0, "div", 11)(25, JobSearchComponent_Conditional_25_Template, 7, 0)(26, JobSearchComponent_Conditional_26_Template, 4, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275template(27, JobSearchComponent_Conditional_27_Template, 22, 10, "div", 12);
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1("D\xE9couvrez ", ctx.totalElements, " offres disponibles");
        \u0275\u0275advance(5);
        \u0275\u0275twoWayProperty("ngModel", ctx.titleFilter);
        \u0275\u0275advance(6);
        \u0275\u0275twoWayProperty("ngModel", ctx.locationFilter);
        \u0275\u0275advance(3);
        \u0275\u0275property("options", ctx.contractTypeOpts);
        \u0275\u0275twoWayProperty("ngModel", ctx.contractFilter);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(24, ctx.loading ? 24 : !ctx.offers.length ? 25 : 26);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(27, ctx.selectedOffer ? 27 : -1);
      }
    }, dependencies: [CommonModule, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, AppSelectComponent, MatProgressSpinnerModule, MatProgressSpinner, MatSnackBarModule, MatDialogModule, MatPaginatorModule, MatPaginator], styles: ["\n\n.search-header[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.search-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n}\n.search-field[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 200px;\n}\n.location-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.contract-field[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.search-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: 10px !important;\n  white-space: nowrap;\n}\n.loading-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 80px;\n}\n.offers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 16px;\n}\n.offer-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.offer-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n.offer-company-logo[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.offer-title[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 0 0 3px;\n  color: var(--text-primary);\n}\n.offer-company[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n  margin: 0;\n  font-weight: 500;\n}\n.offer-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.75rem;\n  padding: 3px 9px;\n  border-radius: 6px;\n  background: #f1f5f9;\n  color: var(--text-secondary);\n}\n.tag[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.tag.tag-contract[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #3730a3;\n  font-weight: 600;\n}\n.tag.tag-remote[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.offer-salary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--success);\n  margin: 0;\n}\n.offer-salary[_ngcontent-%COMP%]   .material-icons-round[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.offer-skills[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  margin: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.offer-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: auto;\n}\n.offer-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-muted);\n}\n.btn-apply[_ngcontent-%COMP%] {\n  background: var(--primary-light) !important;\n  color: #fff !important;\n  border-radius: 8px !important;\n  font-size: 0.85rem !important;\n  gap: 4px;\n}\n.btn-apply[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px !important;\n}\n.paginator[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid var(--border-color);\n  border-radius: 12px;\n  margin-top: 16px;\n}\n.apply-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 200;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n.apply-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\n.panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 4px;\n}\n.panel-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-secondary);\n  margin: 0;\n}\n.apply-submit[_ngcontent-%COMP%] {\n  height: 48px;\n  border-radius: 10px !important;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  justify-content: center;\n}\n/*# sourceMappingURL=job-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JobSearchComponent, { className: "JobSearchComponent", filePath: "src\\app\\features\\candidate\\search\\job-search.component.ts", lineNumber: 26 });
})();
export {
  JobSearchComponent
};
//# sourceMappingURL=chunk-4EKWPK26.js.map
