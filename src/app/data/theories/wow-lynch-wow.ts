import type { Theorist } from '../models';

const PART_8 = 'L-abk71EtPE';
const SARAH = 'jFP7804DLCQ';
const MR_C = 'GfLPkZZKEeY';

export const WOW_LYNCH_WOW: Theorist = {
  name: 'Wow Lynch Wow!',
  thesis:
    'Reads the show’s mythology literally, as a war among spirits: the Mother outranks Bob, the Fireman plays by strict rules, Sarah Palmer hosts something dark — and, in the end, Mr C may have won.',
  videos: [
    { id: PART_8, title: 'Twin Peaks - Trying to make sense of Part 8', length: '7:38' },
    { id: SARAH, title: 'Twin Peaks - What possessed Sarah Palmer?', length: '11:27' },
    { id: MR_C, title: 'Twin Peaks - Was Mr C victorious?', length: '32:09' },
  ],
  notes: [
    {
      episode: 's2e22',
      video: SARAH,
      title: 'A message for Major Briggs',
      moment:
        'In a strange voice, a possessed Sarah Palmer tells Major Briggs she is in the Black Lodge.',
      quote: 'I’m in the Black Lodge with Dale Cooper.',
      reading:
        'Not Windom Earle’s message, Wow Lynch Wow! argues — he had no reason to warn Briggs. This is the first time Sarah seems truly possessed, possibly by Laura’s doppelgänger, slipping out of the Lodge as Cooper went in.',
    },
    {
      episode: 's3e03',
      video: MR_C,
      title: 'Tricked by the eyeless woman?',
      moment:
        'Cooper is drawn by instinct to socket 15, but Naido leads him away; at socket 3 he swaps places with Dougie.',
      reading:
        'Mike later tells Cooper he was tricked — so who tricked him? Cooper’s instincts are usually good, which makes the eyeless woman suspicious, and she later becomes a version of Diane, who may trick him a second time at the motel. Twin Perfect sees her as Twin Peaks itself, steering us to the right episode.',
      disagrees: true,
    },
    {
      episode: 's3e08',
      video: PART_8,
      title: 'A hierarchy of evil',
      moment:
        'The creature from the glass box spews eggs, one carrying Bob; the Fireman answers with Laura.',
      reading:
        'The Mother is the true power of evil, and Bob a byproduct — what Morgoth is to Sauron. The Fireman and his companion are her opposite and outrank Bob, but they follow a strict code and reveal only what is permitted. Bob answers to no rules at all.',
    },
    {
      episode: 's3e08',
      video: PART_8,
      title: 'Who swallowed the frog-moth?',
      moment: 'In 1956, a frog-moth crawls into a sleeping girl’s mouth.',
      reading:
        'Is she a young Sarah Palmer? And which orb hatched — Bob’s or something else? Either way, Laura is the key that connects everything.',
    },
    {
      episode: 's3e14',
      video: SARAH,
      title: 'Whose face is behind Sarah’s?',
      moment:
        'Sarah pulls her face aside: a blackened ring finger, then a smile floating in darkness. Then she tears out a trucker’s throat.',
      reading:
        'Maybe the Mother — or maybe Laura’s doppelgänger, seducing her mother the way Bob seduced Leland. Laura and Sarah are the only two characters who open their faces: Laura’s is pure light, Sarah’s is darkness. Bringing them together might be Cooper’s “two birds with one stone”: two opposite essences cancelling out.',
      disagrees: true,
    },
    {
      episode: 's3e17',
      video: SARAH,
      title: 'Two realities',
      moment:
        'Cooper leads Laura away from her death: in the past, Pete goes fishing and finds no body; in the present, Sarah stabs at Laura’s homecoming photo.',
      reading:
        'Only part of the past changed. Ordinary people are rewritten at once, but large entities — Sarah, Mike, the Fireman, Mr C, who still burns in the Lodge — are not. Two realities now overlap, and Audrey may be caught halfway between them.',
      disagrees: true,
    },
    {
      episode: 's3e17',
      video: MR_C,
      title: 'The Fireman’s trap',
      moment:
        'Mr C reaches the coordinates near Jack Rabbit’s Palace, and is dropped instead into the sheriff’s station, where Lucy shoots him and Freddie smashes Bob.',
      reading:
        'The coordinates should have taken Mr C to the Palmer house and a union with Judy. The Fireman overrides them, and the trap he set with Freddie and his green glove springs.',
    },
    {
      episode: 's3e18',
      video: MR_C,
      title: 'Mr C won',
      moment:
        'The reunited Cooper orders coffee without a trace of joy, ignores a corpse in Carrie Page’s house, and drives her to the Palmer house.',
      reading:
        'Taking Laura to the house where Sarah hosts Judy is using her as bait — something the white-knight Cooper, who shared chips with Sonny Jim, would never do. When the two Coopers merged, the cold, calculating side took the wheel: a complete victory for Mr C. Twin Perfect sees a balanced Cooper instead.',
      disagrees: true,
    },
  ],
};
