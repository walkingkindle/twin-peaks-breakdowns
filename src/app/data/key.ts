export interface KeyEntry {
  title: string;
  text: string;
  quote?: string;
}

export interface SymbolEntry {
  term: string;
  meaning: string;
}

export interface SymbolGroup {
  name: string;
  symbols: readonly SymbolEntry[];
}

export const KEY_IDEA: readonly KeyEntry[] = [
  {
    title: 'Balance',
    text: 'Lynch doesn’t mix the macabre and the mundane to expose the rot under the white picket fence. He shows us darkness so we can recognise the light — and learn to love the mundane.',
    quote: 'The more darkness you can gather up, the more light you can see too.',
  },
  {
    title: 'TV was out of balance',
    text: 'In 1990, TV murder was “consumable”: faceless victims, no grief, the case closed before bedtime. Violence had been made entertaining, and the balance of good and evil was lost.',
    quote:
      'People think you get killed on television with zero pain and zero blood… That’s a real sick thing.',
  },
  {
    title: 'Laura was the antidote',
    text: 'An ongoing investigation shines light into Laura’s darkness — and the whole town’s. As long as the mystery stays open, the show keeps working on us. Forcing the answer turned Twin Peaks into the kind of TV it was built to cure, so Lynch walked away.',
  },
  {
    title: 'The meta is literal',
    text: 'Twin Peaks is a self-aware TV show about the balance of light and darkness on TV. Its spirits know they are on television, its detectives stand in for us, and its director plays the director.',
  },
];

export const KEY_METHOD: readonly KeyEntry[] = [
  {
    title: 'Watch what the director emphasises',
    text: 'In Fire Walk With Me, rookie Sam Stanley prices the furniture while pro Chet Desmond spots the blue rose. Stick to the obvious things shown in close-up; not every lamp matters.',
  },
  {
    title: 'Mean it like it sounds',
    text: 'Describe what you see, literally, and take the puns seriously. One hand in a pocket: someone is hiding something. A sawmill saws logs: snoring. A one-armed shoe salesman sells soles.',
    quote: 'I mean it like it is, like it sounds.',
  },
  {
    title: 'Be patient',
    text: 'If a clue stays obscure, wait — Lynch eventually answers, often in a way you could have worked out yourself. A tailored dress is code for drugs; the blue rose is explained in The Return.',
    quote: 'You think about that, Tammy.',
  },
];

export const KEY_SYMBOLS: readonly SymbolGroup[] = [
  {
    name: 'Forces',
    symbols: [
      {
        term: 'Bob',
        meaning:
          'The evil that men do for entertainment — consumable TV violence, wearing TV characters as masks.',
      },
      {
        term: 'Mike',
        meaning:
          'The spirit of television after a change of heart: he cut off his evil arm and now hunts Bob.',
      },
      {
        term: 'The Arm (the Little Man)',
        meaning:
          'TV’s evil side and Bob’s master. The small screen; the god of darkness, who meters the light.',
      },
      {
        term: 'The Giant (the Fireman)',
        meaning:
          'The spirit of film, who supplies the light. He lives in an old movie theatre on the sea of consciousness.',
      },
      {
        term: 'Laura Palmer',
        meaning:
          'Balance — good and bad in equal measure. “The One”, sent in answer to the birth of Bob.',
      },
      {
        term: 'Judy',
        meaning:
          'Explanation and closure. “Jowday” sounds like the Mandarin jiāodài: to explain, to account for, to finish.',
      },
    ],
  },
  {
    name: 'People',
    symbols: [
      {
        term: 'Gordon Cole',
        meaning:
          'David Lynch: the director from Philadelphia handing his detectives clue-packed surprises.',
      },
      {
        term: 'Dale Cooper',
        meaning:
          'The audience’s detective intuition. Wherever we can see past the curtains, he has to be there.',
      },
      {
        term: 'Diane',
        meaning:
          'The audience’s tulpa — the woman we only imagine. In The Return, Twin Peaks itself.',
      },
      {
        term: 'Major Briggs',
        meaning:
          'Possibly Mark Frost: a man who receives transmissions from beyond and translates them to the page.',
      },
    ],
  },
  {
    name: 'Fuels',
    symbols: [
      {
        term: 'Coffee and doughnuts',
        meaning: 'The fuel of investigation. Bitter and sweet — balanced.',
      },
      { term: 'Cherry pie', meaning: 'The fuel of love and companionship.' },
      {
        term: 'Scorched engine oil',
        meaning: 'The fuel of Bob’s fire; a pool of it marks the gateway at Glastonbury Grove.',
      },
      {
        term: 'Garmonbozia (creamed corn)',
        meaning: 'Pain and sorrow — and our attention to it, eaten off a TV dinner tray.',
      },
    ],
  },
  {
    name: 'Electricity',
    symbols: [
      {
        term: 'Fire and electricity',
        meaning:
          'TV’s power. It destroys or gives light depending on the intention behind it; AC current is perfectly balanced.',
      },
      {
        term: 'Wind',
        meaning: 'Mystery, and the Zeitgeist — the fear in the air — carried on the airwaves.',
      },
      {
        term: 'Trees',
        meaning: 'Telephone poles carrying the wires. Sycamore bark looks like TV static.',
      },
      {
        term: 'Owls',
        meaning:
          'The plot. Owls carry the electrical fire; in Part 18 the transmission towers look like owls.',
      },
      {
        term: 'Flickering light',
        meaning: 'The glow of a TV on our faces: vital information being transmitted.',
      },
    ],
  },
  {
    name: 'Places and objects',
    symbols: [
      {
        term: 'The Red Room',
        meaning:
          'The wings of a stage — the space between the red curtains, between the TV dream and the real world.',
      },
      { term: 'The zig-zag floor', meaning: 'Radio waves.' },
      { term: 'The Packard Sawmill', meaning: 'Sawing logs: snoring. The dream.' },
      {
        term: 'The Owl Ring',
        meaning:
          'The golden circle of appetite and satisfaction — a wedding ring to TV’s evil. Its green formica stone is an insulator.',
      },
      { term: 'Dirt mounds', meaning: 'Electrical ground: a return path to the Unified Field.' },
      { term: 'Shoes', meaning: 'Rubber soles insulate. Soles protect souls.' },
      {
        term: 'The white horse',
        meaning: 'Looking the other way: “the white of the eyes, and dark within.”',
      },
      {
        term: 'The purple sea',
        meaning: 'The Unified Field — pure consciousness, where ideas come from. Non-existence.',
      },
    ],
  },
];

export const KEY_CAVEATS: readonly KeyEntry[] = [
  {
    title: 'Fact and truth',
    text: 'From Responding to Critics: the plot is the story’s fact — Leland really did kill Laura — and the meta is its truth. One doesn’t cancel the other.',
  },
  {
    title: 'Not the only reading',
    text: 'Lynch also says every interpretation is valid. Twin Perfect claims to have found the idea the abstractions grew from, not to erase yours.',
  },
  {
    title: 'Numbering',
    text: 'Twin Perfect counts the Pilot as Episode 1, so his “dream at the end of Episode 3” is Season 1, Episode 2 here. This site uses the official numbering.',
  },
];
