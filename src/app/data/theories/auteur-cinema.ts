import type { Theorist } from '../models';

const LAURA_IS_SPECIAL = 'N2IirNXGF3A';

export const AUTEUR_CINEMA: Theorist = {
  name: 'Auteur Cinema',
  thesis:
    'Laura Palmer is Lynch’s quintessential “woman in trouble”, and Fire Walk With Me his most socially important film: Bob is the mask that abuse wears, passed down a family, and Laura dies refusing to pass it on.',
  videos: [{ id: LAURA_IS_SPECIAL, title: 'Why Laura Palmer is Special', length: '14:46' }],
  notes: [
    {
      episode: 's2e03',
      video: LAURA_IS_SPECIAL,
      title: 'A summer home at Pearl Lakes',
      moment:
        'Leland recognises the man in the sketch from his childhood, when his grandfather had a summer home at Pearl Lakes.',
      reading:
        'Leland is a perpetrator and a victim of the same thing: Bob came to him through his grandfather’s house, years before Laura was born. Transgenerational trauma — a reading that sits well with Twin Perfect’s point that the show shows the suffering inside Leland too.',
    },
    {
      episode: 'fwwm',
      video: LAURA_IS_SPECIAL,
      title: 'Bob is a dissociation',
      moment:
        'Before he goes to Laura’s room, Leland faces the mirror; with his back to it, he weeps.',
      reading:
        'Bob is how Laura and Leland survive an unbearable truth — a nightmare that conceals the father who abuses her and the boy he once was. And “Is it future, or is it past?” is how abuse lives in a survivor’s mind: when did it start, when will it end? A far more literal Bob than Twin Perfect’s personification of TV violence.',
      disagrees: true,
    },
    {
      episode: 'fwwm',
      video: LAURA_IS_SPECIAL,
      title: 'A different Laura for everyone',
      moment:
        'Laura is tender with James, cruel to Bobby, guarded with Donna — honest only in her diary, whose pages are torn out.',
      reading:
        'Her shell keeps everyone she loves out of her darkness, and Bob violates even the one safe place she has. In the train car, living would mean letting Bob in and continuing the cycle of abuse; she puts on the ring and refuses. The angel she couldn’t find in life finally comes.',
    },
  ],
};
