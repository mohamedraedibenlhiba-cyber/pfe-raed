import {
  Router
} from "./chunk-CIKWQEPB.js";
import {
  BehaviorSubject,
  HttpClient,
  environment,
  inject,
  tap,
  ɵɵdefineInjectable
} from "./chunk-2ECENSOK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/jwt-decode/build/esm/index.js
var InvalidTokenError = class extends Error {
};
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).replace(/(.)/g, (m, p) => {
    let code = p.charCodeAt(0).toString(16).toUpperCase();
    if (code.length < 2) {
      code = "0" + code;
    }
    return "%" + code;
  }));
}
function base64UrlDecode(str) {
  let output = str.replace(/-/g, "+").replace(/_/g, "/");
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += "==";
      break;
    case 3:
      output += "=";
      break;
    default:
      throw new Error("base64 string is not of the correct length");
  }
  try {
    return b64DecodeUnicode(output);
  } catch (err) {
    return atob(output);
  }
}
function jwtDecode(token, options) {
  if (typeof token !== "string") {
    throw new InvalidTokenError("Invalid token specified: must be a string");
  }
  options || (options = {});
  const pos = options.header === true ? 0 : 1;
  const part = token.split(".")[pos];
  if (typeof part !== "string") {
    throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
  }
  let decoded;
  try {
    decoded = base64UrlDecode(part);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
  }
  try {
    return JSON.parse(decoded);
  } catch (e) {
    throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
  }
}

// src/app/core/services/auth.service.ts
var AuthService = class _AuthService {
  constructor() {
    this.http = inject(HttpClient);
    this.router = inject(Router);
    this.API = `${environment.apiUrl}/auth`;
    this.TOKEN_KEY = "jwt_token";
    this.USER_KEY = "current_user";
    this._currentUser$ = new BehaviorSubject(this.loadUser());
    this.currentUser$ = this._currentUser$.asObservable();
  }
  // ─── HTTP calls ──────────────────────────────────────────────────────────────
  login(req) {
    return this.http.post(`${this.API}/login`, __spreadProps(__spreadValues({}, req), {
      email: this.normalizeEmail(req.email)
    })).pipe(tap((res) => {
      if (res.success && res.data)
        this.storeSession(res.data);
    }));
  }
  registerEnterprise(req) {
    return this.http.post(`${this.API}/register/enterprise`, __spreadProps(__spreadValues({}, req), {
      email: this.normalizeEmail(req.email)
    })).pipe(tap((res) => {
      if (res.success && res.data)
        this.storeSession(res.data);
    }));
  }
  registerCandidate(req) {
    return this.http.post(`${this.API}/register/candidate`, __spreadProps(__spreadValues({}, req), {
      email: this.normalizeEmail(req.email)
    })).pipe(tap((res) => {
      if (res.success && res.data)
        this.storeSession(res.data);
    }));
  }
  // ─── Session helpers ─────────────────────────────────────────────────────────
  storeSession(user) {
    localStorage.setItem(this.TOKEN_KEY, user.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    this._currentUser$.next(user);
  }
  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser$.next(null);
    this.router.navigate(["/auth/login"]);
  }
  /** Clear session without navigation (used when access is denied during login). */
  clearSession() {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this._currentUser$.next(null);
  }
  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  get currentUser() {
    return this._currentUser$.value;
  }
  get isLoggedIn() {
    const token = this.getToken();
    if (!token)
      return false;
    try {
      const decoded = jwtDecode(token);
      return Date.now() < decoded.exp * 1e3;
    } catch {
      return false;
    }
  }
  get isAdmin() {
    return this.currentUser?.role === "ROLE_ADMIN";
  }
  get isEnterprise() {
    return this.currentUser?.role === "ROLE_ENTERPRISE";
  }
  get isCandidate() {
    return this.currentUser?.role === "ROLE_CANDIDATE";
  }
  redirectToDashboard() {
    const role = this.currentUser?.role;
    if (role === "ROLE_ADMIN")
      this.router.navigate(["/admin/dashboard"]);
    else if (role === "ROLE_ENTERPRISE")
      this.router.navigate(["/enterprise/dashboard"]);
    else if (role === "ROLE_CANDIDATE")
      this.router.navigate(["/candidate/dashboard"]);
  }
  loadUser() {
    try {
      const raw = localStorage.getItem(this.USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
  normalizeEmail(email) {
    return email.trim().toLowerCase();
  }
  static {
    this.\u0275fac = function AuthService_Factory(t) {
      return new (t || _AuthService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
  }
};

export {
  AuthService
};
//# sourceMappingURL=chunk-RLFEX5HM.js.map
