import type { Theorist } from '../models';

const NOBODY_COULD_SAVE = 'chR0_7t12W4';

export const NIKA: Theorist = {
  name: 'Nika',
  thesis:
    'Twin Peaks runs on a closed electrical loop: the spirits travel the wires, pain is the fuel, and inside the loop nobody’s warning could ever have saved Laura — only her own choice of how to die.',
  videos: [
    {
      id: NOBODY_COULD_SAVE,
      title: 'Why Nobody Could Save Laura Palmer (Fire Walk With Me Theory)',
      length: '17:11',
    },
  ],
  notes: [
    {
      episode: 'fwwm',
      video: NOBODY_COULD_SAVE,
      title: 'Humming wires and a traffic light',
      moment:
        'Power lines buzz, lights short out, and the traffic light at Sparkwood and 21 keeps returning.',
      reading:
        'The hum is the sound of spirits moving through the wires, and the room above the convenience store is a waiting room on top of our world. The traffic light is a switch: green closes the circuit and lets them out, red holds them back.',
    },
    {
      episode: 'fwwm',
      video: NOBODY_COULD_SAVE,
      title: 'A closed loop',
      moment: 'In Laura’s dream, Cooper warns her not to take the ring.',
      quote: 'Don’t take the ring, Laura.',
      reading:
        'The Little Man says everything will proceed cyclically. In a loop, no warning changes anything — Cooper’s is just another blip on the track, and it is what puts the ring on Laura’s radar in the first place. It is also why “Is it future, or is it past?” has no answer: in a loop, everything happens at once.',
    },
    {
      episode: 'fwwm',
      video: NOBODY_COULD_SAVE,
      title: 'Perfect courage',
      moment:
        'In the train car the angel frees Ronette, not Laura. Laura puts on the ring, and Bob kills her instead of possessing her.',
      reading:
        'The ring is a shield and a trap at once: let the Lodge harvest your pain, or become a puppet like Leland. Where Cooper meets the Black Lodge with imperfect courage, Laura faces Bob with perfect courage and lets her angel go to Ronette. In the Red Room she cries for the girl who wasn’t saved, and laughs because she can finally stop running.',
    },
  ],
};
