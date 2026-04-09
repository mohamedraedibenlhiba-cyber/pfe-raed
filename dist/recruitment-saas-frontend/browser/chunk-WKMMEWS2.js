import {
  HttpClient,
  HttpParams,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/application.service.ts
var ApplicationService = class _ApplicationService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/applications`;
  }
  apply(req) {
    return this.http.post(this.API, req);
  }
  getMyApplications() {
    return this.http.get(`${this.API}/my`);
  }
  getByOffer(offerId, page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/offer/${offerId}`, { params });
  }
  getRanked(offerId) {
    return this.http.get(`${this.API}/offer/${offerId}/ranked`);
  }
  updateStatus(id, status) {
    return this.http.patch(`${this.API}/${id}/status`, { status });
  }
  addNotes(id, recruiterNotes, recruiterRating) {
    return this.http.patch(`${this.API}/${id}/notes`, { recruiterNotes, recruiterRating });
  }
  getById(id) {
    return this.http.get(`${this.API}/${id}`);
  }
  static {
    this.\u0275fac = function ApplicationService_Factory(t) {
      return new (t || _ApplicationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationService, factory: _ApplicationService.\u0275fac, providedIn: "root" });
  }
};

export {
  ApplicationService
};
//# sourceMappingURL=chunk-WKMMEWS2.js.map
