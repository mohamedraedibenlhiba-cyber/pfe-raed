import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const roleGuard = (route) => {
    const auth = inject(AuthService);
    const router = inject(Router);
    const required = route.data['role'];
    if (!required || auth.currentUser?.role === required)
        return true;
    // Redirect to appropriate dashboard
    auth.redirectToDashboard();
    return false;
};
//# sourceMappingURL=role.guard.js.map