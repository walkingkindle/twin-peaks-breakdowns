import type { Theorist } from '../models';

const FINALE = 'FPTfaQu5Ju8';

export const OLD_TIN_MAN: Theorist = {
  name: 'Old Tin Man',
  thesis:
    'A parallel-dimensions reading of the finale: Cooper really does save Laura, but the rescue traps him in a loop of near-identical realities where he must save her again and again.',
  videos: [
    {
      id: FINALE,
      title: 'Twin Peaks: The Return | Finale Explained & Parallel Dimensions Theory',
      length: '8:58',
    },
  ],
  notes: [
    {
      episode: 's3e01',
      video: FINALE,
      title: 'A deal with the Fireman',
      moment: 'The Fireman tells Cooper to listen to the sounds, and Cooper says he understands.',
      reading:
        'Cooper is agreeing to a sacrifice. The sound from the phonograph is the same one heard when Laura vanishes in Part 18 — a reset that wipes his memory each time the loop starts over. Twin Perfect reads “I understand” as a rewatching audience instead.',
      disagrees: true,
    },
    {
      episode: 's3e13',
      video: FINALE,
      title: 'The timeline is out of order',
      moment:
        'Dougie plays catch with Sonny Jim in Part 12, yet here Janey-E asks where he has been since he met the Mitchum brothers in Part 11.',
      reading:
        'The parts don’t run in chronological order — a hint that the season is happening across more than one reality.',
    },
    {
      episode: 's3e18',
      video: FINALE,
      title: 'Saving Laura, again and again',
      moment:
        'Cooper and Diane cross into a world where they are Richard and Linda; he finds Laura living as Carrie Page.',
      reading:
        'Cooper’s first rescue worked — Laura lived — but it cost him his mind and sent him through parallel dimensions where he must save her again on a new route each time. Carrie Page is Laura’s identity in this one. The past changed the future, which is why the other storylines never resolve. Twin Perfect rejects this kind of timeline reading.',
      disagrees: true,
    },
  ],
};
