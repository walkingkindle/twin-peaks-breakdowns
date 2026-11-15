export type SectionId = 'season-1' | 'season-2' | 'fire-walk-with-me' | 'the-return';

/**
 * Where a reading comes from. The first three are Twin Perfect's videos;
 * `applied` marks a reading of our own that uses Twin Perfect's key on a
 * moment he doesn't cover.
 */
export type Source = 'main' | 'followUp' | 'critics' | 'applied';

export interface BreakdownPoint {
  title: string;
  /** Groups points under a sub-heading, e.g. "The European ending". */
  segment?: string;
  /** What happens on screen. */
  moment: string;
  /** A line spoken in the episode, verbatim. */
  quote?: string;
  /** The decode. */
  reading: string;
  sources: readonly Source[];
}

export interface Episode {
  /** Also the anchor id on the section page, e.g. `s1e02`. */
  id: string;
  label: string;
  title: string;
  altTitle?: string;
  /** The overall episode number used by the Log Lady introductions. */
  overall?: number;
  lynch?: 'directed' | 'absent';
  /** About 300 characters of plain plot, shown before the clues. */
  summary: string;
  /** An excerpt from the Log Lady's introduction (Seasons 1 and 2). */
  logLady?: string;
  points: readonly BreakdownPoint[];
  /** Other theorists' readings, filled in from `theories/` when the sections are assembled. */
  extras?: readonly EpisodeExtra[];
}

export interface TheoristVideo {
  /** The YouTube video id. */
  id: string;
  title: string;
  length: string;
}

/** Another theorist's reading of one episode, shown under “Other theories”. */
export interface TheoryNote {
  /** The episode id it belongs to, e.g. `s3e08`. */
  episode: string;
  /** The YouTube id of the video the reading comes from. */
  video: string;
  title: string;
  moment: string;
  quote?: string;
  reading: string;
  /** Set when the reading contradicts Twin Perfect's. */
  disagrees?: boolean;
}

export interface Theorist {
  name: string;
  /** Their overall reading of Twin Peaks, in a sentence or two. */
  thesis: string;
  videos: readonly TheoristVideo[];
  notes: readonly TheoryNote[];
}

/** A theory note ready to render on an episode card. */
export interface EpisodeExtra extends TheoryNote {
  theorist: string;
  videoTitle: string;
}

export interface Section {
  id: SectionId;
  title: string;
  years: string;
  intro: string;
  episodes: readonly Episode[];
}
