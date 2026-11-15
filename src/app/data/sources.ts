import type { Source } from './models';

export interface SourceInfo {
  label: string;
  description: string;
}

export const SOURCES: Record<Source, SourceInfo> = {
  main: {
    label: 'Twin Perfect · main explainer',
    description: 'The 4.5-hour video that lays out the key.',
  },
  followUp: {
    label: 'Twin Perfect · follow-up',
    description:
      'More evidence and answers: Candie, Señorita Dido, a scene-by-scene run through the Pilot and Season 2, and the Log Lady intros.',
  },
  critics: {
    label: 'Twin Perfect · Responding to Critics',
    description: 'His answers to the most common objections.',
  },
  applied: {
    label: 'Applying the key',
    description:
      'Our own reading, using Twin Perfect’s method on a moment he doesn’t discuss. Not his words.',
  },
};
