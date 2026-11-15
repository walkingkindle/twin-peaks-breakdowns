import type { SectionId } from './models';

/**
 * Lightweight section metadata for navigation, titles and route matching.
 * The full breakdowns live in `sections.ts`, which is only loaded lazily.
 */
export interface SectionLink {
  id: SectionId;
  title: string;
  years: string;
  count: string;
  blurb: string;
}

export const SECTION_LINKS: readonly SectionLink[] = [
  {
    id: 'season-1',
    title: 'Season 1',
    years: '1990',
    count: 'Pilot + 7 episodes',
    blurb: 'A girl is found wrapped in plastic, and a town’s secrets begin to wake up.',
  },
  {
    id: 'season-2',
    title: 'Season 2',
    years: '1990–91',
    count: '22 episodes',
    blurb:
      'The killer is revealed, Lynch walks away, and the show loses its centre — until the finale.',
  },
  {
    id: 'fire-walk-with-me',
    title: 'Fire Walk With Me',
    years: '1992',
    count: 'Feature film',
    blurb: 'The last seven days of Laura Palmer — and, says Twin Perfect, the key to everything.',
  },
  {
    id: 'the-return',
    title: 'The Return',
    years: '2017',
    count: '18 parts',
    blurb:
      'Twenty-five years later, the show comes back for answers. Be careful what you wish for.',
  },
];

export function isSectionId(value: string): value is SectionId {
  return SECTION_LINKS.some((link) => link.id === value);
}

export function findSectionLink(id: string): SectionLink | undefined {
  return SECTION_LINKS.find((link) => link.id === id);
}
