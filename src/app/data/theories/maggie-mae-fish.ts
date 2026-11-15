import type { Theorist } from '../models';

const PART_1 = 'CxfFAGJaKjg';
const PART_2 = 'UY6vIVAEFxo';

export const MAGGIE_MAE_FISH: Theorist = {
  name: 'Maggie Mae Fish',
  thesis:
    'Twin Peaks answers the TV of its day: the original series is a soap opera about soap operas, the film a psychological thriller about psychological thrillers, The Return a prestige drama about prestige dramas. Its dream logic is emotional, not logical, and it isn’t only about TV — it is about us. She rejects any single “answer”, Twin Perfect’s included.',
  videos: [
    {
      id: PART_1,
      title: 'David Lynch & Twin Peaks: FIRE WALK WITH ME | Part 1 of 2',
      length: '45:03',
    },
    { id: PART_2, title: 'David Lynch & Twin Peaks: THE RETURN | Part 2 of 2', length: '1:01:12' },
  ],
  notes: [
    {
      episode: 's1e01',
      video: PART_2,
      title: 'Not jealous — connected',
      moment:
        'Audrey wrecks her father’s pitch by telling the Norwegians about Laura, then dances alone in her room.',
      reading:
        'Twin Perfect reads Audrey, and later Ronette, as wanting attention: a shallow, lightly misogynist trope, she argues, in a show built to break tropes down. Nobody says Cooper wants to solve the case to be seen. Audrey may feel connected to Laura because both are daughters of terrible men who run the town.',
      disagrees: true,
    },
    {
      episode: 's1e03',
      video: PART_1,
      title: 'We all did',
      moment:
        'At Laura’s funeral Bobby turns on the mourners: everybody knew she was in trouble, and nobody did anything.',
      quote: 'You did. We all did.',
      reading:
        'Where a soap like Dynasty gets grief over within a commercial break, Twin Peaks lets it linger, and spreads the blame across the whole town. Laura’s death is not a faceless event; it is everyone’s failure to look.',
    },
    {
      episode: 's2e01',
      video: PART_1,
      title: 'The owls were Frost’s idea',
      moment: 'The Giant warns Cooper that the owls are not what they seem.',
      reading:
        'Asked about the owls, Lynch said they were Mark Frost’s idea, so he didn’t know. They matter for the feeling they give — of being watched — not as a code. Twin Perfect reads them as the plot itself.',
      disagrees: true,
    },
    {
      episode: 's2e07',
      video: PART_1,
      title: 'Dynasty, flipped',
      moment: 'Leland looks into the mirror and Bob looks back.',
      reading:
        'Eighties TV taught “stranger danger”: evil is the creepy man outside. Twin Peaks gives us that stranger in Bob, then reveals the predator was the father down the hall — the soap-opera patriarch turned inside out.',
    },
    {
      episode: 's2e09',
      video: PART_2,
      title: 'Father and abuser, at once',
      moment:
        'Bob leaves Leland in the interrogation room; Leland remembers what he did, and dies in Cooper’s arms.',
      reading:
        'Leland is not an innocent vessel for Bob but a victim of childhood abuse who goes on to abuse — both things at once. Writing off his agency is what harmful powerful men like to claim, and blaming Sarah forgets she was his victim too. She faults Twin Perfect for putting the characters back into one-dimensional boxes.',
      disagrees: true,
    },
    {
      episode: 'fwwm',
      video: PART_1,
      title: 'An answer to The Silence of the Lambs',
      moment:
        'Teresa Banks’ autopsy keeps cutting to her face — an eye, a mouth — and Lil delivers her riddle in mime.',
      reading:
        'A year after Lambs, Lynch makes a psychological thriller about psychological thrillers. Lambs treats its victim as evidence; here the victim stays a person, and Lil’s riddle parodies Hannibal’s. Then the film hands itself to Laura: she, not Cooper, is the protagonist.',
    },
    {
      episode: 's3e02',
      video: PART_2,
      title: 'An antihero with no excuse',
      moment: 'Mr C corrects Ray: he wants, he doesn’t need.',
      quote: 'If there’s one thing you should know about me, Ray, it’s that I don’t need anything.',
      reading:
        'The Return is a prestige drama about prestige dramas. Tony Soprano and Walter White always have a “for my family” excuse; Mr C admits he has none. Lynch splits Cooper into Mr C, Dougie and the real Cooper so no charming antihero is left to root for.',
    },
    {
      episode: 's3e04',
      video: PART_2,
      title: 'Fix your hearts or die',
      moment: 'Gordon remembers what he told the FBI when Denise transitioned.',
      quote:
        'And when you became Denise, I told all of your colleagues, those clown comics, to fix their hearts or die.',
      reading:
        'Denise was one of TV’s rare dignified trans characters in 1990, with no plot reason except that trans people exist. It is the audience that has to change if we can’t see the humanity in others.',
    },
    {
      episode: 's3e06',
      video: PART_2,
      title: 'A scream that reaches us',
      moment:
        'A mother plays chase with her son in the park, until Richard Horne’s truck hits the boy.',
      reading:
        'The casting call read “mom whose scream will affect the whole world”. Her grief is so real it cuts through the surreal show and the screen between us. A happy loop is broken by violence, and a new cycle of violence begins.',
    },
    {
      episode: 's3e07',
      video: PART_2,
      title: 'Restraint',
      moment: 'Ike the Spike attacks, and the Arm urges Dougie on.',
      quote: 'Squeeze his hand off.',
      reading:
        'Dougie’s first real choice of the season is restraint: he stops the attack and takes no revenge, a Buddhist non-action no prestige-TV cop’s ego would allow.',
    },
    {
      episode: 's3e15',
      video: PART_2,
      title: 'Character and actor, at once',
      moment: 'The Log Lady calls Hawk one last time.',
      quote: 'I’m dying.',
      reading:
        'Catherine Coulson — Lynch’s collaborator since Eraserhead — really was dying of cancer, and passed away days after filming. She says goodbye as the Log Lady and as herself: TV human and real human, no longer separable.',
    },
    {
      episode: 's3e17',
      video: PART_2,
      title: 'A punch doesn’t end it',
      moment: 'Freddie, a stranger with a magic green glove, punches Bob to pieces.',
      reading:
        'Prestige TV and comic-book movies solve everything with a punch, and Freddie shows how absurd that hope is. A whole extra part follows Bob’s defeat because a punch can win a fight without resolving the conflict.',
    },
    {
      episode: 's3e18',
      video: PART_2,
      title: 'Will we hear her this time?',
      moment: 'The series ends on Laura’s scream.',
      reading:
        'Laura screamed at the end of the original series and of the film, and audiences only asked about Cooper. Lynch centres the victim’s pain once more. Twin Perfect stops at the TV screen; the show is about us, and how much more complex people are than the stories we flatten them into.',
      disagrees: true,
    },
  ],
};
