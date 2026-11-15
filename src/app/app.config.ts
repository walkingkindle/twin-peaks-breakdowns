import { ViewportScroller } from '@angular/common';
import {
  ApplicationConfig,
  DOCUMENT,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  Router,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';

/** Angular’s anchor scrolling ignores CSS scroll-margin-top, so read it off the target. */
function honourScrollMargin(): void {
  const document = inject(DOCUMENT);
  const router = inject(Router);
  inject(ViewportScroller).setOffset(() => {
    const id = router.parseUrl(router.url).fragment;
    const target = id ? document.getElementById(id) : null;
    const margin = target ? parseFloat(getComputedStyle(target).scrollMarginTop) : 0;
    return [0, margin || 0];
  });
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
    ),
    provideAppInitializer(honourScrollMargin),
  ],
};
