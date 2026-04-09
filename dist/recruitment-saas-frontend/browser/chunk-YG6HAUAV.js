import {
  HttpClient,
  HttpParams,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/admin.service.ts
var AdminService = class _AdminService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/admin`;
  }
  getDashboard() {
    return this.http.get(`${this.API}/dashboard`);
  }
  getUsers(page = 0, size = 20) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/users`, { params });
  }
  getUserById(id) {
    return this.http.get(`${this.API}/users/${id}`);
  }
  toggleUserActive(id) {
    return this.http.patch(`${this.API}/users/${id}/toggle-active`, {});
  }
  deleteUser(id) {
    return this.http.delete(`${this.API}/users/${id}`);
  }
  getOffers(status, page = 0, size = 20) {
    let params = new HttpParams().set("page", page).set("size", size);
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.API}/offers`, { params });
  }
  static {
    this.\u0275fac = function AdminService_Factory(t) {
      return new (t || _AdminService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminService, factory: _AdminService.\u0275fac, providedIn: "root" });
  }
};

export {
  AdminService
};
//# sourceMappingURL=chunk-YG6HAUAV.js.map
