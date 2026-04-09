import {
  HttpClient,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/user.service.ts
var UserService = class _UserService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/users`;
  }
  getProfile() {
    return this.http.get(`${this.API}/me`);
  }
  updateProfile(req) {
    return this.http.put(`${this.API}/me`, req);
  }
  uploadProfilePicture(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.API}/me/profile-picture`, form);
  }
  static {
    this.\u0275fac = function UserService_Factory(t) {
      return new (t || _UserService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
  }
};

export {
  UserService
};
//# sourceMappingURL=chunk-EBWDBHD2.js.map
