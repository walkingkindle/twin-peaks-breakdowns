import type { Theorist } from '../models';

const DREAMERS = '6K4dXhjfhTI';
const THE_RING = 'ujXcfvZOdoU';

export const TAKE_THE_RING: Theorist = {
  name: 'Take The Ring',
  thesis:
    'Treats “Who is the dreamer?” as The Return’s central question and weighs three answers: Gordon Cole as Lynch’s stand-in, Tim Kreider’s reading of Cooper as a dreamer hiding his own guilt, and Laura as the dreamer whose scream restarts the story.',
  videos: [
    {
      id: DREAMERS,
      title: 'Talk About Judy • Dreamers • Twin Peaks: The Return Theory',
      length: '25:38',
    },
    { id: THE_RING, title: 'Episode 1 • The Ring • Twin Peaks Analysis', length: '11:01' },
  ],
  notes: [
    {
      episode: 's2e07',
      video: DREAMERS,
      title: 'Gordon Cole leaves the room',
      moment:
        'Just as the team is about to learn who killed Laura, Gordon Cole bows out for unrelated business in Bend, Oregon.',
      reading:
        'An old fan theory says Gordon Cole is Lynch’s avatar: he steps aside exactly when David Lynch has to direct the reveal himself. Twin Perfect makes the same identification — Cole is the director.',
    },
    {
      episode: 's2e09',
      video: THE_RING,
      title: 'The circle closes',
      moment: 'The Giant returns Cooper’s ring the night Laura’s killer is revealed.',
      reading:
        'Rings and completed circles run through the whole show — the candles around Bob, the sycamores of Glastonbury Grove, Dougie’s wedding ring found in Major Briggs’ stomach. Cooper’s ring comes back when the circle of the case is complete.',
    },
    {
      episode: 'fwwm',
      video: THE_RING,
      title: 'A ring for garmonbozia',
      moment:
        'Mike throws the Owl Cave ring into the train car, and Laura puts it on before Bob kills her.',
      reading:
        'Bob wants to possess Laura; Mike and the Arm say Bob owes them garmonbozia, which they can only harvest if she dies. With the ring on, Bob can’t possess her, so he kills her, her spirit goes to the Red Room, and the spirits get their pain and sorrow. A deal among spirits — not the plan to start an investigation that Twin Perfect sees.',
      disagrees: true,
    },
    {
      episode: 's3e07',
      video: DREAMERS,
      title: 'A bomb on the director’s wall',
      moment:
        'Gordon daydreams in front of the photograph of an atomic explosion that hangs in his office.',
      reading:
        'The picture is the centerpiece of his office and becomes the centerpiece of Part 8’s origin story. The director knows more about Judy than he lets on — and cues us a part early.',
    },
    {
      episode: 's3e14',
      video: DREAMERS,
      title: 'Like the dreamer, not the dreamer',
      moment:
        'Monica Bellucci tells Gordon — and the camera — that we are like the dreamer who dreams and then lives inside the dream.',
      quote: 'We are like the dreamer who dreams and then lives inside the dream.',
      reading:
        'The popular answer is “we are the dreamer”, but the line says we are “like” the dreamer, so the dreamer is someone else. Take The Ring weighs three candidates: Gordon Cole as Lynch, Dale Cooper, and Laura Palmer.',
    },
    {
      episode: 's3e17',
      video: DREAMERS,
      title: 'The dreamer shows his face',
      moment: 'Cooper’s face hangs superimposed over the climax at the sheriff’s station.',
      reading:
        'Following Tim Kreider’s 2018 essay, the face is the dreamer revealing himself: a real-world Cooper who built Twin Peaks as an escape fantasy — like Fred in Lost Highway or Diane in Mulholland Drive — to hide that he killed, or failed to save, a woman. Mr C and Dougie are his split halves.',
      disagrees: true,
    },
    {
      episode: 's3e18',
      video: DREAMERS,
      title: 'Laura wakes up',
      moment:
        'Asked what year it is, Carrie Page hears Sarah Palmer’s voice from inside the house and screams.',
      reading:
        'Carrie remembers she is Laura. The scream echoes the one in Fire Walk With Me when she learns Bob is her father — doubled audio, an electric flash, a cut to black — and the story loops like a Möbius strip, maybe with Laura now facing her mother’s part in the abuse. Kreider’s version: Richard is the Cooper closest to the real dreamer, and Laura’s whispered secret was “you killed me”.',
      disagrees: true,
    },
  ],
};
