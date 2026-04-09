import {
  HttpClient,
  HttpParams,
  environment,
  inject,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";

// src/app/core/services/messaging.service.ts
var MessagingService = class _MessagingService {
  constructor() {
    this.http = inject(HttpClient);
    this.API = `${environment.apiUrl}/messages`;
  }
  send(req) {
    return this.http.post(this.API, req);
  }
  getConversations() {
    return this.http.get(`${this.API}/conversations`);
  }
  getMessages(convId, page = 0, size = 30) {
    const params = new HttpParams().set("page", page).set("size", size);
    return this.http.get(`${this.API}/conversations/${convId}/messages`, { params });
  }
  markRead(convId) {
    return this.http.post(`${this.API}/conversations/${convId}/read`, {});
  }
  getUnreadCount() {
    return this.http.get(`${this.API}/unread/count`);
  }
  static {
    this.\u0275fac = function MessagingService_Factory(t) {
      return new (t || _MessagingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MessagingService, factory: _MessagingService.\u0275fac, providedIn: "root" });
  }
};

export {
  MessagingService
};
//# sourceMappingURL=chunk-WLVDILQ6.js.map
