import type { Theorist } from './models';
import { SEASON_1 } from './season-1';
import { SECTION_LINKS } from './section-links';
import { SECTIONS, attachExtras, findSection } from './sections';
import { SOURCES } from './sources';
import { THEORISTS } from './theories';

const episodes = SECTIONS.flatMap((section) => section.episodes);
const seasonTwo = findSection('season-2')!.episodes;

function ids(prefix: string, from: number, to: number): string[] {
  return Array.from(
    { length: to - from + 1 },
    (_, i) => `${prefix}${String(from + i).padStart(2, '0')}`,
  );
}

describe('breakdown data', () => {
  it('lists the sections in viewing order', () => {
    const order = ['season-1', 'season-2', 'fire-walk-with-me', 'the-return'];
    expect(SECTIONS.map((section) => section.id)).toEqual(order);
    expect(SECTION_LINKS.map((link) => link.id)).toEqual(order);
  });

  it('covers the Pilot and every episode, the film, and all eighteen parts', () => {
    expect(SECTIONS.map((section) => section.episodes.length)).toEqual([8, 22, 1, 18]);
  });

  it('gives every episode a unique id', () => {
    expect(new Set(episodes.map((episode) => episode.id)).size).toBe(episodes.length);
  });

  it('opens every episode with a summary of about 300 characters', () => {
    for (const episode of episodes) {
      expect(episode.summary.length, episode.id).toBeGreaterThanOrEqual(200);
      expect(episode.summary.length, episode.id).toBeLessThanOrEqual(420);
    }
  });

  it('gives every episode at least one clue, each with a known source', () => {
    for (const episode of episodes) {
      expect(episode.points.length, episode.id).toBeGreaterThan(0);
      for (const point of episode.points) {
        expect(point.title.trim(), episode.id).not.toBe('');
        expect(point.moment.trim(), point.title).not.toBe('');
        expect(point.reading.trim(), point.title).not.toBe('');
        expect(point.sources.length, point.title).toBeGreaterThan(0);
        for (const source of point.sources) {
          expect(Object.keys(SOURCES), point.title).toContain(source);
        }
      }
    }
  });

  it('introduces every Season 1 and 2 episode with the Log Lady', () => {
    const originalSeries = [...findSection('season-1')!.episodes, ...seasonTwo];
    expect(originalSeries).toHaveLength(30);
    for (const episode of originalSeries) {
      expect(episode.logLady, episode.id).toBeTruthy();
    }
  });

  it('numbers the original series the way the Log Lady does', () => {
    const season1 = findSection('season-1')!.episodes.map((episode) => episode.overall);
    expect(season1).toEqual([undefined, 1, 2, 3, 4, 5, 6, 7]);
    expect(seasonTwo.map((episode) => episode.overall)).toEqual(
      Array.from({ length: 22 }, (_, i) => i + 8),
    );
  });

  it('marks Season 2, Episodes 8 to 21 as Lynch absent and keeps the late ones short', () => {
    const absent = episodes.filter((episode) => episode.lynch === 'absent');
    expect(absent.map((episode) => episode.id)).toEqual(ids('s2e', 8, 21));
    for (const episode of seasonTwo.slice(9, 21)) {
      expect(episode.points.length, episode.id).toBeLessThanOrEqual(2);
    }
  });

  it('marks the episodes Lynch directed', () => {
    const directed = episodes.filter((episode) => episode.lynch === 'directed');
    expect(directed.map((episode) => episode.id)).toEqual([
      's1e00',
      's1e02',
      's2e01',
      's2e02',
      's2e07',
      's2e22',
      'fwwm',
      ...ids('s3e', 1, 18),
    ]);
  });
});

describe('other theorists', () => {
  const notes = THEORISTS.flatMap((theorist) => theorist.notes);

  it('gives every theorist a thesis, their videos and at least one note', () => {
    for (const theorist of THEORISTS) {
      expect(theorist.thesis.trim(), theorist.name).not.toBe('');
      expect(theorist.videos.length, theorist.name).toBeGreaterThan(0);
      expect(theorist.notes.length, theorist.name).toBeGreaterThan(0);
    }
    expect(new Set(THEORISTS.map((theorist) => theorist.name)).size).toBe(THEORISTS.length);
  });

  it('links every note to a real episode and to one of its theorist’s own videos', () => {
    const episodeIds = episodes.map((episode) => episode.id);
    for (const theorist of THEORISTS) {
      const videoIds = theorist.videos.map((video) => video.id);
      for (const note of theorist.notes) {
        expect(episodeIds, note.title).toContain(note.episode);
        expect(videoIds, note.title).toContain(note.video);
        expect(note.moment.trim(), note.title).not.toBe('');
        expect(note.reading.trim(), note.title).not.toBe('');
      }
    }
  });

  it('attaches every note to its episode without touching Twin Perfect’s clues', () => {
    const extras = episodes.flatMap((episode) => episode.extras ?? []);
    expect(extras).toHaveLength(notes.length);
    expect(extras.every((extra) => THEORISTS.some((t) => t.name === extra.theorist))).toBe(true);
  });

  it('labels each extra with its theorist and video title', () => {
    const theorist: Theorist = {
      name: 'Test Theorist',
      thesis: 'A thesis.',
      videos: [{ id: 'abc123', title: 'A video', length: '1:00' }],
      notes: [
        {
          episode: 's1e02',
          video: 'abc123',
          title: 'A note',
          moment: 'A moment.',
          reading: 'A reading.',
        },
      ],
    };
    const [season1] = attachExtras([SEASON_1], [theorist]);

    expect(
      season1.episodes.filter((episode) => episode.extras).map((episode) => episode.id),
    ).toEqual(['s1e02']);
    expect(season1.episodes[2].extras).toEqual([
      { ...theorist.notes[0], theorist: 'Test Theorist', videoTitle: 'A video' },
    ]);
    expect(season1.episodes[2].points).toBe(SEASON_1.episodes[2].points);
  });
});
