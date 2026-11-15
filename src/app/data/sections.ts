import { FIRE_WALK_WITH_ME } from './fire-walk-with-me';
import type { EpisodeExtra, Section, Theorist } from './models';
import { SEASON_1 } from './season-1';
import { SEASON_2 } from './season-2';
import { THE_RETURN } from './the-return';
import { THEORISTS } from './theories';

/** Hangs every theorist's notes on the episodes they discuss. */
export function attachExtras(
  sections: readonly Section[],
  theorists: readonly Theorist[],
): Section[] {
  const extras = new Map<string, EpisodeExtra[]>();
  for (const theorist of theorists) {
    for (const note of theorist.notes) {
      const videoTitle = theorist.videos.find((video) => video.id === note.video)?.title ?? '';
      const list = extras.get(note.episode) ?? [];
      list.push({ ...note, theorist: theorist.name, videoTitle });
      extras.set(note.episode, list);
    }
  }
  return sections.map((section) => ({
    ...section,
    episodes: section.episodes.map((episode) => {
      const notes = extras.get(episode.id);
      return notes ? { ...episode, extras: notes } : episode;
    }),
  }));
}

/** Every section, in viewing order. */
export const SECTIONS: readonly Section[] = attachExtras(
  [SEASON_1, SEASON_2, FIRE_WALK_WITH_ME, THE_RETURN],
  THEORISTS,
);

export function findSection(id: string): Section | undefined {
  return SECTIONS.find((section) => section.id === id);
}
