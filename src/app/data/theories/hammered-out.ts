import type { Theorist } from '../models';

const WHY_ACCEPT = '6kIPjc4fM4Y';
const WHO_KILLED = 'ziZ8dzaXSEo';
const COOPER = 'SGD8IjUg_8k';
const CRIME = 'bBU6i2VvW70';
const BLUE_LINE = 'bIHIdHniMfY';

export const HAMMERED_OUT: Theorist = {
  name: 'Hammered Out',
  thesis:
    'Twin Peaks is symbolism about making and watching TV, and you can’t pick and choose what counts. Building on Twin Perfect, whom he defends against his critics, he reads the characters as audiences, creators and studio bosses. Many of them have “diegetic awareness”: they know, at least in part, that they are in a story. The red curtains are backstage.',
  videos: [
    {
      id: WHY_ACCEPT,
      title:
        '“Twin Peaks” Explained, part 1. Why should I accept anyone’s explanation of “Twin Peaks?”',
      length: '13:40',
    },
    {
      id: WHO_KILLED,
      title: '“Twin Peaks” Explained, part 2. That’s “Who Killed Laura Palmer,” Right?',
      length: '47:05',
    },
    {
      id: COOPER,
      title: '“Twin Peaks” Explained, part 3. Cooper Cooper Cooper',
      length: '1:03:12',
    },
    { id: CRIME, title: '“Twin Peaks” Explained, part 4. Crime in the City.', length: '1:08:37' },
    {
      id: BLUE_LINE,
      title: '“Twin Peaks” Explained, part 5. The Thin Blue Line.',
      length: '1:10:57',
    },
  ],
  notes: [
    {
      episode: 's1e00',
      video: BLUE_LINE,
      title: 'Truman expects a body',
      moment:
        'Pete phones the sheriff: she’s dead, wrapped in plastic. Truman doesn’t ask who, only where. Over the body, Andy starts to cry.',
      reading:
        'Truman knows he is in a murder mystery. He and his deputies are the audience’s concierges, there to keep the story moving and the doughnuts coming. Andy has no idea he’s in a story: to him this is a real dead girl, which is why he cries, and why he teaches us real grief.',
    },
    {
      episode: 's1e00',
      video: CRIME,
      title: 'Pete goes fishing',
      moment: 'Pete Martell heads out to fish and finds Laura’s body on the shore.',
      reading:
        'Lynch compares ideas to fish (his book is called Catching the Big Fish), so the fisherman who finds Laura is Lynch landing the idea for Twin Peaks. Pete is one of four Lynch stand-ins, with Big Ed, Pierre and Gordon Cole. When Pete later finds a fish in the percolator, two metaphors, ideas and investigation, mix and spoil each other.',
    },
    {
      episode: 's1e02',
      video: WHO_KILLED,
      title: 'Throwing rocks at our hunches',
      moment:
        'Cooper throws rocks at a bottle while names are read out. Most miss; the throw for Dr Jacoby hits it, and the one for Leo Johnson smashes it.',
      reading:
        'Nobody is investigating here. Cooper stands for us, so the rocks hit whoever the show has made us suspect so far. He only ever knows what we know: Truman’s affair with Josie, Ed’s love for Norma, James’s half of the necklace, all things we have just watched. He is confirming our hunches, not cracking the case.',
    },
    {
      episode: 's1e03',
      video: WHO_KILLED,
      title: 'Albert, the impatient viewer',
      moment:
        'Albert wants more tests on Laura’s body, which would hold up her funeral, and Truman flattens him with a single punch.',
      reading:
        'Albert is the viewer who wants quick, easy answers, ready to take Laura apart and the mystery with her. Taken literally he is the best investigator in the show, doing the off-screen work that actually moves the case. In a show where the journey is the point, that makes him the villain. Lynch still loves the grumps who keep watching, which is why Cole and Albert are friends.',
    },
    {
      episode: 's2e01',
      video: CRIME,
      title: 'The Major’s vision',
      moment:
        'Major Briggs tells Bobby about a vision he had in his sleep: a vast estate glowing with light from within, and his son there, happy and carefree.',
      reading:
        'The Major speaks as one of Bobby’s creators. The light from within is a TV set, and the new rooms that blend in seamlessly are the other writers reshaping the show. Bobby turns good because his creator wants him to: a one-dimensional bad boy can’t stay one-dimensional in a show this deep. In The Return the vision has come true, and Bobby is an honest cop.',
    },
    {
      episode: 's2e07',
      video: WHO_KILLED,
      title: 'Bob kills whoever changes their part',
      moment:
        'Maddy is ready to go home to Missoula, to her job and her apartment. Before she can leave, Leland, as Bob, kills her.',
      reading:
        'Bob kills women who change their role in Leland’s story: Teresa turns blackmailer, Laura won’t stay “clean”, Maddy stops being the stand-in daughter. Leland is the controlling viewer, or the network executive, who can’t bear characters who won’t play their part. And Laura is killed a second time because the forced reveal was killing Twin Peaks itself.',
    },
    {
      episode: 's2e22',
      video: COOPER,
      title: 'He can’t brush his teeth',
      moment:
        'Back at the Great Northern, the Cooper who came out of the Lodge wants to brush his teeth, and smashes his head into the mirror instead.',
      reading:
        'You brush your teeth before you sleep, sleep means dreaming, and in Twin Peaks dreaming means watching; even the opening titles tend a saw’s teeth before it saws logs. Mr C can’t dream. With the show over, there is nothing for the real Cooper to do, so he stays in the Lodge: only one of them can be out, just as Twin Peaks is either on the air or it isn’t.',
    },
    {
      episode: 'fwwm',
      video: WHO_KILLED,
      title: 'Laura steps into the picture',
      moment:
        'Laura hangs the picture of a doorway that Mrs Tremond gave her, then dreams she walks through it, into a shabby hallway with a red curtain beyond.',
      quote: 'God, why did I say that?',
      reading:
        'Laura’s last seven days are the story of her realising she is a character in a film. A picture in a frame is a prop; the same picture filling the screen is a frame of the film itself, and the red curtain is backstage. Soon she questions her own lines and sees scenes she wasn’t in. The Owl Ring turns its wearer into a stock role, here the murder victim, and Laura chooses to be aware even though it kills her.',
    },
    {
      episode: 's3e07',
      video: BLUE_LINE,
      title: 'Meet me at 4:30',
      moment:
        'The farmer whose truck Richard was driving won’t talk at home. He tells Andy to meet him in two hours on the logging road above Sparkwood and 21, then never shows. Andy checks his watch.',
      quote: '4:30, then.',
      reading:
        '430 is the number for leaving the story: the Fireman says it, and Cooper crosses over at mile 430. The farmer can only tell “the whole story” outside it, and Andy, who doesn’t know he’s in a story, can’t follow. But the watch in the close-up is a Rolex no deputy could afford: actor Harry Goaz’s own, worn on Lynch’s instructions. For one cut, we have left the story.',
    },
    {
      episode: 's3e14',
      video: BLUE_LINE,
      title: 'Andy wakes up',
      moment:
        'Following Major Briggs’ instructions, the deputies carry soil from Jack Rabbit’s Palace into the woods, find Naido, and Andy is taken up to the Fireman.',
      reading:
        'Jack Rabbit’s Palace is where Bobby and his father made up stories: rabbit ears, the old analog antenna, which is why the road there is gone. The soil carries the nutrients of good storytelling, and farmers are always the good guys in The Return. Andy, the deputy who never knew he was in a story, is the one the Fireman enlightens, and he comes back knowing where everyone has to be.',
    },
    {
      episode: 's3e15',
      video: COOPER,
      title: 'The fan with all the answers',
      moment:
        'Mr C reaches Jeffries through room 8 of the Dutchman’s motel, as the wall in front of him simply wipes away.',
      reading:
        'Jeffries is the fan who got the official explanation, Judy, and it drove him mad. To Lynch, a fan who has cracked the code isn’t a fan any more; Cole calls Jeffries someone who “doesn’t really exist anymore”. He sits behind the fourth wall, the part of us that knows it is watching characters who stand in for us, and he can’t even phone anyone inside the story.',
    },
    {
      episode: 's3e17',
      video: BLUE_LINE,
      title: 'We hijacked the ending',
      moment:
        'Everyone crowds into Truman’s office, Freddie smashes Bob, Naido becomes Diane, Cooper’s face hangs over the scene and the clock sticks at 2:53.',
      quote: 'It’s a good thing we made so many sandwiches.',
      reading:
        'The Fireman and Major Briggs set the pieces: Freddie jailed on the right night, Chad locked away, Naido safe in a cell. Then Cooper, meaning us, takes over. The superimposed face is ours, pressed up to the screen and grabbing the controls; Naido turns into the Diane we imagined; and the clock stops because we have hit pause. No wonder Gordon Cole looks worried.',
    },
    {
      episode: 's3e18',
      video: COOPER,
      title: 'A knock-off of Twin Peaks',
      moment:
        'In Odessa, Texas, Richard finds a Laura who isn’t Laura, working at a diner called Judy’s.',
      reading:
        'Twin Perfect says Cooper has crossed into our real world. Too many unreal things happen there for that: Odessa is a knock-off by someone who doesn’t understand Twin Peaks — “Twin Peaks, but in Texas”. Judy is just a diner, the white horse a figurine, the coffee just coffee. Richard has Cooper’s memories only because we are still watching and expecting Twin Peaks.',
      disagrees: true,
    },
  ],
};
