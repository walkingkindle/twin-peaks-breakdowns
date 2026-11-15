import type { CanMatchFn, ResolveFn, Routes } from '@angular/router';
import { findSectionLink, isSectionId } from './data/section-links';
import { HomePage } from './pages/home/home-page';
import { RedRoomPage } from './pages/red-room/red-room-page';

const SITE_NAME = 'Twin Peaks Breakdowns';

const knownSection: CanMatchFn = (_route, segments) => isSectionId(segments[0]?.path ?? '');

const sectionTitle: ResolveFn<string> = (route) => {
  const link = findSectionLink(route.paramMap.get('section') ?? '');
  return link ? `${link.title} · ${SITE_NAME}` : SITE_NAME;
};

export const routes: Routes = [
  { path: '', component: HomePage, title: SITE_NAME },
  {
    path: 'key',
    loadComponent: () => import('./pages/key/key-page').then((m) => m.KeyPage),
    title: `The Key · ${SITE_NAME}`,
  },
  {
    path: ':section',
    canMatch: [knownSection],
    loadComponent: () => import('./pages/section/section-page').then((m) => m.SectionPage),
    title: sectionTitle,
  },
  { path: '**', component: RedRoomPage, title: `The Red Room · ${SITE_NAME}` },
];
