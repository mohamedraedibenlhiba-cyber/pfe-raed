import {
  HttpClient,
  HttpParams,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/job-offer.service.ts
var JobOfferService = class _JobOfferService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/offers`;
  }
  searchPublic(title, location, contractType, page = 0, size = 10) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (title)
      params = params.set("title", title);
    if (location)
      params = params.set("location", location);
    if (contractType)
      params = params.set("contractType", contractType);
    return this.http.get(`${this.API}/public`, { params });
  }
  getByToken(token) {
    return this.http.get(`${this.API}/public/token/${token}`);
  }
  getMyOffers() {
    return this.http.get(`${this.API}/mine`);
  }
  getById(id) {
    return this.http.get(`${this.API}/${id}`);
  }
  create(req) {
    return this.http.post(this.API, req);
  }
  update(id, req) {
    return this.http.put(`${this.API}/${id}`, req);
  }
  publish(id) {
    return this.http.post(`${this.API}/${id}/publish`, {});
  }
  close(id) {
    return this.http.post(`${this.API}/${id}/close`, {});
  }
  delete(id) {
    return this.http.delete(`${this.API}/${id}`);
  }
  exportExcel(id) {
    return this.http.get(`${this.API}/${id}/export/excel`, { responseType: "blob" });
  }
  exportWord(id) {
    return this.http.get(`${this.API}/${id}/export/word`, { responseType: "blob" });
  }
  static {
    this.\u0275fac = function JobOfferService_Factory(t) {
      return new (t || _JobOfferService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobOfferService, factory: _JobOfferService.\u0275fac, providedIn: "root" });
  }
};

export {
  JobOfferService
};
//# sourceMappingURL=chunk-XBWLOVK2.js.map
