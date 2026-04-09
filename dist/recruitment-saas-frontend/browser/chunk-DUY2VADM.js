import {
  HttpClient,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/cv.service.ts
var CvService = class _CvService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/cvs`;
  }
  upload(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.API}/upload`, form);
  }
  getMyCvs() {
    return this.http.get(this.API);
  }
  setDefault(id) {
    return this.http.patch(`${this.API}/${id}/default`, {});
  }
  delete(id) {
    return this.http.delete(`${this.API}/${id}`);
  }
  getContent(id) {
    return this.http.get(`${this.API}/${id}/view`, { responseType: "blob" });
  }
  static {
    this.\u0275fac = function CvService_Factory(t) {
      return new (t || _CvService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CvService, factory: _CvService.\u0275fac, providedIn: "root" });
  }
};

export {
  CvService
};
//# sourceMappingURL=chunk-DUY2VADM.js.map
