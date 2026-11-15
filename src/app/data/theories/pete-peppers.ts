import type { Theorist } from '../models';

const TOP_THEORIES = 'K3w2rXUlaXs';

export const PETE_PEPPERS: Theorist = {
  name: 'Pete Peppers',
  thesis:
    'A round-up of the finale theories with the most traction in 2017 — Laura’s dream, Richard as the dreamer, the synced-episodes theory, the show as our shared tulpa — ending on his favourite: David Auerbach’s reading of Part 18 as a trap for Judy.',
  videos: [
    {
      id: TOP_THEORIES,
      title: 'Top Theories Season 3 | The Return Finale Theories Explained',
      length: '18:57',
    },
  ],
  notes: [
    {
      episode: 's3e16',
      video: TOP_THEORIES,
      title: 'Our world leaks in',
      moment:
        'The Roadhouse emcee introduces “Edward Louis Severson” — Eddie Vedder’s real name — and later announces “Audrey’s Dance”, the song’s real-world title.',
      reading:
        'One popular theory counts three realities — Twin Peaks, the Lodges, and ours — and catalogues the places where ours bleeds through: real names, real titles, Gordon meeting the real Monica Bellucci. The series becomes a tulpa, our shared dream. Very close to Twin Perfect’s reading.',
    },
    {
      episode: 's3e17',
      video: TOP_THEORIES,
      title: 'Play Parts 17 and 18 together',
      moment:
        'Naido turns back into Diane at the sheriff’s station, and Cooper looks on knowingly.',
      reading:
        'A much-hyped Reddit theory said the last two parts were made to be watched side by side, and that Naido’s change is Diane returning from the Richard-and-Linda world after Judy has been beaten there. Executive producer Sabrina Sutherland said that was never the intention.',
    },
    {
      episode: 's3e18',
      video: TOP_THEORIES,
      title: 'Whose dream?',
      moment:
        'Carrie Page screams when she hears Sarah Palmer call “Laura”, a call first heard in the Pilot.',
      reading:
        'Two popular answers: the Carrie Page world is Laura’s dream, and she wakes on the morning she should have died; or Richard is the real dreamer and Agent Cooper never existed. Pete isn’t convinced by either — the Fireman named Richard and Linda back in Part 1.',
      disagrees: true,
    },
    {
      episode: 's3e18',
      video: TOP_THEORIES,
      title: 'A trap for Judy',
      moment:
        'Cooper and Diane cross into a world where they are Richard and Linda, and Cooper brings “Laura” home.',
      reading:
        'Pete’s favourite, from David Auerbach’s essay (retweeted by Kyle MacLachlan): Judy, not Mr C, is the real enemy, and the White Lodge built this pocket world as a trap. Laura is the bait that draws Judy in, so she can be destroyed without destroying our world — a suicide mission for Cooper and Laura.',
      disagrees: true,
    },
  ],
};
