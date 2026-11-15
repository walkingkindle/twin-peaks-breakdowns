import type { Theorist } from '../models';

const PART_1 = '3rUfLiva0fg';
const PART_2 = 'vKon8jVo9Tw';
const ELECTRICITY = 'BniXu5BPRsc';
const GARMONBOZIA = 'MZccOSERCEA';

export const MALMROSE_PROJECTS: Theorist = {
  name: 'Malmrose Projects',
  thesis:
    'A political reading of Fire Walk With Me: the spirits are ghosts of modern America — of colonization, capitalism and Reagan-era traditionalism — and Laura is their most visible victim, the girl who came closest to exposing them. Meta, but not wholly meta.',
  videos: [
    {
      id: PART_1,
      title: 'Fire Walk With Me Analysis - Intro, Deer Meadow, and Philadelphia (Part 1)',
      length: '39:13',
    },
    {
      id: PART_2,
      title: 'Fire Walk With Me Analysis - Laura Palmer’s Story (Part 2)',
      length: '41:04',
    },
    {
      id: ELECTRICITY,
      title: 'Fire Walk With Me Analysis - Electricity, and The Postmodern Condition (Part 3)',
      length: '45:42',
    },
    {
      id: GARMONBOZIA,
      title: 'Fire Walk With Me Analysis - Garmonbozia and The Importance of Laura Palmer (Part 4)',
      length: '34:18',
    },
  ],
  notes: [
    {
      episode: 's2e22',
      video: ELECTRICITY,
      title: 'Ghosts of the new West',
      moment: 'Glastonbury Grove: a ring of sycamores around a pit of scorched engine oil.',
      reading:
        'Used motor oil seeping into the ground and sickening the trees is pollution, plainly. Every doorway to the spirit world — this grove, a gas-station convenience store, the abandoned motel of The Return — belongs to the dying road-travel economy of the American West. The spirits aren’t ancient; they are ghosts of the world modern America built and abandoned.',
    },
    {
      episode: 'fwwm',
      video: ELECTRICITY,
      title: 'The fan is a trigger',
      moment: 'Leland switches on the hallway fan before he goes to Laura’s room at night.',
      reading:
        'Its noise covers the abuse, and Laura has to pass it every night, so the fan becomes a trigger. Electricity is neutral, like fire, but in the Palmer house it is used for evil, so evil comes to live in it: Bob speaks to Laura through the fan.',
    },
    {
      episode: 'fwwm',
      video: GARMONBOZIA,
      title: 'Creamed corn is colonization',
      moment: 'Bob returns the stolen garmonbozia — pain and sorrow, in the form of creamed corn.',
      reading:
        'Corn is an Indigenous crop, taken by colonizers and processed into a 1950s convenience dish. Creamed corn is America’s history of extraction made edible, and the spirits feed on people the way the country fed on its land. Twin Perfect reads the same corn as the audience’s attention.',
      disagrees: true,
    },
    {
      episode: 'fwwm',
      video: ELECTRICITY,
      title: 'Meta, but not wholly meta',
      moment:
        'The film opens on TV static and a smashed television; later, Jeffries’ empty chair mirrors Laura’s empty seat in class.',
      reading:
        'The static is a signal that can cut out at any moment — Teresa, Jeffries, Laura, here and then gone. Malmrose takes aim at “that Twin Peaks explained video”: a reading like that could map onto any fiction. Lynch plays with the fourth wall — the red curtains are a backstage — but Twin Peaks isn’t wholly meta until the very end of The Return.',
      disagrees: true,
    },
    {
      episode: 'fwwm',
      video: GARMONBOZIA,
      title: 'Laura nearly exposed it all',
      moment:
        'Laura sees Bob, questions what he is, and confides in her secret diary, Harold and the Tremonds — before Cooper ever learns Bob’s name.',
      reading:
        'Seeing Bob is seeing that her father is the abuser, and she is on the verge of exposing it, which makes her murder a cover-up. But she leaves a trail of breadcrumbs — the diary, Annie’s message, the pages with Harold — that lets Cooper finally defeat Bob twenty-five years later.',
    },
    {
      episode: 's3e17',
      video: ELECTRICITY,
      title: 'The ring judges souls',
      moment: 'Cooper slips the Owl Cave ring onto the dead Mr C, who vanishes back to the Lodge.',
      reading:
        'Worn on the “spirit finger”, the ring marks its wearer for death and then judges the soul: it preserved Laura’s and destroyed Mr C’s. Malmrose speculates it was born when Mike tore off the arm that had corrupted his spirit.',
    },
  ],
};
