import {
  HttpClient,
  HttpParams,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/reclamation.service.ts
var ReclamationService = class _ReclamationService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/reclamations`;
  }
  submit(req) {
    return this.http.post(this.API, req);
  }
  getMine() {
    return this.http.get(`${this.API}/my`);
  }
  getById(id) {
    return this.http.get(`${this.API}/${id}`);
  }
  // Admin
  getAll(page = 0, size = 15) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(this.API, { params });
  }
  getByStatus(status, page = 0, size = 15) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/status/${status}`, { params });
  }
  respond(id, req) {
    return this.http.patch(`${this.API}/${id}/respond`, req);
  }
  static {
    this.\u0275fac = function ReclamationService_Factory(t) {
      return new (t || _ReclamationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReclamationService, factory: _ReclamationService.\u0275fac, providedIn: "root" });
  }
};

export {
  ReclamationService
};
//# sourceMappingURL=chunk-33GCIT4G.js.map
