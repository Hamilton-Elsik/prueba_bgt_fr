import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),
    provideAnimations(),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-center',
      preventDuplicates: true,
    }),
  ],
};
