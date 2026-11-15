---
name: interpret-clue
description: Research and interpret a Twin Peaks scene, symbol or line of dialogue, and add the interpretation to the site's episode cards when asked. Use this whenever the user asks what a moment in Twin Peaks, Fire Walk With Me or The Return means, or describes a scene they want explained ("there's a scene where Harry and Coop…"). Also use it when they ask for interpretations or theories about an episode, or want a clue, reading or theorist's note added to a card. This applies even if they don't name the episode exactly or use the word "clue".
---

# Interpret a clue

This site decodes Twin Peaks through Twin Perfect's key. His thesis is that Twin Peaks is a self-aware TV show about the balance of light and darkness on TV, and that its symbols mean exactly what they say. The Key page (`src/app/data/key.ts`) sets out the details.

A reading is only useful here if readers can trust where it came from. So most of this workflow is about finding the exact scene and being honest about who reads it which way.

Two helper scripts live in this skill's folder. Run them with `python3 -I`:

- `scripts/find_in_sources.py` searches every local source at once.
- `scripts/aired_transcript.py` fetches what was actually broadcast.

## 1. Find the exact scene

Turn the user's description into an episode and a scene before interpreting anything. Memories of Twin Peaks are unreliable, and scenes are easy to put in the wrong episode.

- **Episode ids and numbering:**
  - Ids are `s1e00` (the Pilot) to `s1e07`, `s2e01` to `s2e22`, `fwwm`, and `s3e01` to `s3e18`.
  - The cards also show the Log Lady's overall number: S1E01 is 1, S1E07 is 7, S2E01 is 8 and S2E22 is 29.
  - Twin Perfect counts the Pilot as Episode 1, so his episode numbers run one higher than the overall numbers.
- **Season 1–2 scripts are drafts.** They live in `../episode-transcripts/`, and scenes were added and changed for broadcast. For example, _Coma_'s stool scene at Ronette's bedside isn't in its draft at all. So check the aired version with `aired_transcript.py <pilot|1-29> [pattern]`.
  - Without a pattern, the script lists the episode's scenes. With one, it prints the matching passages.
  - Its source, Glastonberry Grove, only has some episodes. When an episode is missing, fall back to the draft script, and describe the moment rather than quoting lines you can't confirm.
- **Fire Walk With Me and The Return:** use the film's subtitles and The Return's transcripts in `../episode-transcripts/`. Both match what aired.
- **When the aired scene differs from the draft,** note what was added. Material added during filming, often by Lynch, is itself evidence of what the director chose to emphasise.

## 2. Find out who already reads it

`find_in_sources.py '<regex>'` searches all of these at once:

- Twin Perfect's three videos
- the other theorists' videos
- the scripts
- the film's subtitles
- The Return's transcripts

Theorists rarely name episodes, so search for the scene's distinctive words: props, names or a line of dialogue (for example `'stool|operating instructions'` or `'creamed corn'`). Add `--only 'Twin Perfect'` to search a single channel.

Then read what the site already says about the episode, so you don't repeat it:

- its card in `src/app/data/<section>.ts` (the `points`)
- other theorists' notes for that episode in `src/app/data/theories/*.ts`

Who made the reading decides how it's labelled:

- **Twin Perfect:** label it with the video it came from: `main` (the main explainer), `followUp` (the follow-up) or `critics` ("Responding to Critics").
- **Another YouTube theorist:** add it as a `TheoryNote` in that theorist's file under `data/theories/`, never as a point. Add `disagrees: true` when they contradict Twin Perfect.
- **Nobody:** it's our own reading. Label it `applied`; the site shows that as "Applying the key".

## 3. Interpret with the key

Read `src/app/data/key.ts` before writing a reading. It holds `KEY_IDEA` (the thesis), `KEY_METHOD` (the method) and `KEY_SYMBOLS` (the glossary). A good reading usually uses all three steps of the method:

1. **Watch what the director emphasises:** close-ups, held shots, and scenes that run long for no reason the plot needs. Twin Perfect mocks viewers who ascribe value to "every last lamp, chair, and choice of wallpaper". So explain why this detail is emphasised, not just that it's there.
2. **Mean it like it sounds:** describe the moment literally and take puns seriously. A sawmill saws logs, which means snoring; a one-armed shoe salesman sells soles, which are souls.
3. **Be patient:** the show rewards waiting, so readings about delay, patience and closure often hit the point.

Ground each reading in the glossary (for example, light is investigation and creamed corn is the audience's attention) and in Twin Perfect's thesis. Rank readings by how well they're grounded, and drop or flag the stretches. One solid reading beats three clever ones.

## 4. Answer

1. **Start with the scene:** where it happens, who is in it, what happens, and a short verbatim line.
2. **Say who covers it,** and who doesn't.
3. **Give the readings:**
   - Twin Perfect's, credited to the right video.
   - Other theorists', credited by name, with any disagreements flagged.
   - Ours, clearly labelled as applying the key and never credited to Twin Perfect.
4. **Link any web sources** you used, such as the transcript page or reviews.
5. **Offer to add the scene to its card,** unless the user has already asked.

## 5. Add it to the card (when asked)

Write the point in the site's style. This is the _Coma_ clue:

```ts
{
  title: 'Read the instructions first',
  moment:
    'At Ronette’s bedside, Cooper and Harry can’t lower their stools until Harry reads the label aloud. Then they show her the sketches, and at Bob’s face she smashes the lamp.',
  quote: 'Stop. Read operating instructions beneath seat before using.',
  reading:
    'Not every chair matters, but Lynch stops the scene for this one, and it isn’t in the draft script. It is the method in miniature: watch what he emphasises, read the words literally, be patient — to lower the seat, first pull it all the way up. Then Ronette sees the killer and smashes the light: an open investigation shines light, and an answer puts it out.',
  sources: ['applied'],
},
```

- **Lengths:**
  - The `moment` says what happens on screen in plain words, in roughly 100–200 characters.
  - The `reading` is the decode, up to about 350 characters.
  - Compare both with the card's other points, which readers see side by side.
- **Punctuation:** use typographic quotes and apostrophes (’ “ ”), like the rest of the data.
- **Quotes:** the `quote` must be verbatim from a script, the subtitles or a transcript. If it only comes from the fan transcript of the aired episode, tell the user so they can check it next time they watch.
- **Placement:** put the point where the scene falls in the aired episode, because cards follow broadcast order.
- **The Lynch-absent episodes S2E10–E21** hold at most two points each, and a test enforces this. Replace a weaker point instead of adding a third.
- **Other theorists' readings** go in their own file under `data/theories/` as a `TheoryNote`. It needs the episode id, the video id, a title, the moment and the reading, plus an optional quote and `disagrees` flag.

Then finish the change the way CLAUDE.md defines "done":

1. Run the tests and the build.
2. Look at the card at phone and desktop widths, in both Lodge themes.
3. Commit and push to `main`.
4. Watch CI deploy it.
5. Check the live site.
