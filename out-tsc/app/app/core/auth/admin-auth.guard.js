import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const adminAuthGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    if (auth.isLoggedIn && auth.isAdmin)
        return true;
    router.navigate(['/auth/login']);
    return false;
};
//# sourceMappingURL=admin-auth.guard.js.map