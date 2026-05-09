import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_SELECT_CONFIG } from '@angular/material/select';
import { routes } from './app.routes';
import { jwtInterceptor } from './core/auth/jwt.interceptor';
export const appConfig = {
    providers: [
        provideRouter(routes, withViewTransitions()),
        provideAnimations(),
        provideHttpClient(withInterceptors([jwtInterceptor])),
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 4000, verticalPosition: 'bottom', horizontalPosition: 'center' } },
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' } },
        { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
        { provide: MAT_SELECT_CONFIG, useValue: { disableOptionCentering: true } },
    ]
};
//# sourceMappingURL=app.config.js.map