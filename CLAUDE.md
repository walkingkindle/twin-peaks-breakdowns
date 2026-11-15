# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Twin Peaks Breakdowns is an Angular 22 site that breaks down every episode in viewing order: Season 1, Season 2, Fire Walk With Me, then The Return. Each episode is decoded with the clues from Twin Perfect's explainer videos. It's live at https://twinpeaksbreakdowns.com.

## Commands

- **Dev server:** `npm start` serves http://localhost:4200. The maintainer often has one running already. If port 4200 is taken, use that server, or start your own with `npx ng serve --port 4300` and stop it when you're done.
- **Tests:** `npx ng test --watch=false` runs Vitest in jsdom through Angular's unit-test builder.
  - One file: `npx ng test --watch=false --include src/app/easter-eggs/theme.spec.ts`
  - By test name: `npx ng test --watch=false --filter "^Theme"`
- **Build:** `npx ng build` writes the production build to `dist/twin-peaks-breakdowns/browser/`. The bundle-size budgets apply.
- **Formatting:** `npx prettier --write <files>` (single quotes, 100 columns). There is no linter. Format only the files you touch, because some Angular scaffold files aren't Prettier-clean.

## What "done" means for a feature

A change is finished when it's live, not when it compiles.

1. **Implement** it in the style of the surrounding code: standalone components, signals, and typographic quotes (’ “ ”) in content.
2. **Test:** add or update specs until `npx ng test --watch=false` passes.
3. **Build:** `npx ng build` passes.
4. **Look at it** in a browser at phone width (390px) and desktop width, in both the Black Lodge and White Lodge themes. Nothing may scroll sideways.
5. **Commit** with a message that explains why, then **push to `main`**.
6. **CI:** the push runs `.github/workflows/ci.yml`: `npm ci`, then test, build and deploy. Find the run with `gh run list --limit 1` and follow it with `gh run watch <id> --exit-status`. While the run is red, the change isn't live.
7. **Check the live site** at https://twinpeaksbreakdowns.com. A normal reload is enough, because `index.html` is never cached and the bundles have hashed names.

Pull requests run the tests and the build in CI, but never deploy.

## Deployment

- **Server:** the site runs on a Hetzner server (Ubuntu 24.04, nginx) that also hosts another of the maintainer's sites. Never change that site's nginx config. On the maintainer's machine, the server's SSH alias is `server`.
- **Deploy step:** CI rsyncs `dist/twin-peaks-breakdowns/browser/` to `/var/www/twinpeaksbreakdowns.com/html` as the `deploy` user. rrsync restricts that key to the web root, so it can't run anything else. The step reads three repo secrets: `DEPLOY_HOST`, `DEPLOY_KNOWN_HOSTS` and `DEPLOY_SSH_KEY`.
- **To redeploy without a commit:** run `gh workflow run CI --ref main`.
- **nginx:** `deploy/nginx.conf` holds the site config.
  - **Unknown paths:** they fall back to `index.html`, so they render the Red Room page.
  - **Caching:** hashed `.js` and `.css` files are cached for a year, and everything else is `no-cache`.
  - **Editing it:** Certbot edited the installed copy, `/etc/nginx/sites-available/twinpeaksbreakdowns.com`, to add HTTPS. So apply any nginx change on the server by hand, and keep the repo copy in step.
  - **Testing a change:** you can test a server block without root by wrapping it in a minimal config and running `nginx -t -p <dir> -c <dir>/nginx.conf`. Quote any regex that contains `{}`.
- **One-time setup:** `deploy/setup-server.sh` creates the deploy user, the web root and the nginx site, then runs Certbot. It needs sudo, and sudo asks for a password. A `!` command in Claude Code can't answer that prompt, so the maintainer runs it in their own terminal: `ssh -t server sudo bash twinpeaksbreakdowns/setup-server.sh`.
- **HTTPS:** Let's Encrypt certificate, issued by Certbot and renewed by the server's Certbot timer.
- **DNS:** on Porkbun: an A record for the domain itself, and `www` as a CNAME pointing to it. The API keys exist only in the maintainer's shell environment. Never print or commit them.

## Architecture

- **Content is data.** All the episode text lives in `src/app/data/`:
  - **Per section:** `season-1.ts`, `season-2.ts`, `fire-walk-with-me.ts` and `the-return.ts`, typed by `models.ts`.
  - **Assembly:** `sections.ts` puts the sections in viewing order (`SECTIONS`, `findSection`).
  - **Key page:** `key.ts` holds the thesis, the method and the symbol glossary.

  Components only render this data.

- **Episodes:** each `Episode` has:
  - a `summary` of about 300 characters, shown before everything else
  - an optional `logLady` intro, for Seasons 1 and 2
  - its `points`, the clues

  Each point has a `moment` (what happens on screen), an optional verbatim `quote`, a `reading` (the decode) and its `sources`.

- **Sources** (`sources.ts`): `main`, `followUp` and `critics` are Twin Perfect's three videos. `applied` marks our own reading made with his method. The site labels it "Applying the key".
- **Other theorists** are labelled extras, kept apart from Twin Perfect's clues.
  - **Files:** one per YouTube channel in `data/theories/`, registered in `theories/index.ts`.
  - **Attaching:** `attachExtras` in `sections.ts` adds each note to its episode as `episode.extras`.
  - **On the card:** they appear under "Other theories", with a link to the video and a `disagrees` flag where they contradict Twin Perfect.
- **Routes** (`app.routes.ts`):
  - `''` is the home page and `key` the Key page.
  - `:section` loads `SectionPage` lazily, which keeps the episode data out of the initial bundle.
  - `**` shows the Red Room 404 page.
- **Anchor scrolling:** Angular ignores CSS `scroll-margin-top` when it scrolls to an anchor. `app.config.ts` passes the target's `scroll-margin-top` to it instead, which keeps cards clear of the sticky jump list on phones.
- **EpisodeCard** (`shared/episode-card.*`) renders a card in this order:
  1. title and Lynch badge
  2. "The story" (the summary)
  3. Log Lady intro
  4. "Clues & breakdown" (the points, grouped by `segment`)
  5. "Other theories" (the extras)
- **Theming:** `src/styles.css` defines colour tokens on `:root` for the Black Lodge (the default) and on `:root[data-lodge='white']` for the White Lodge.
  - **Switching:** `easter-eggs/theme.ts` sets `data-lodge`, remembers the choice in localStorage, and updates the `theme-color` meta tag, which tints a phone's browser bar.
  - **Before Angular boots:** an inline script in `index.html` applies a remembered White Lodge, so the page doesn't flash dark.
  - **Fixed areas:** the header follows the theme. The heroes, curtains and footer are fixed sets and stay dark in both themes.
  - **Colours:** use tokens, not literal colours, for anything on a themed background.
  - **Forced dark mode:** the White Lodge declares `color-scheme: only light`. That keeps browsers with a "darken websites" mode from repainting it dark, which would make the toggle look as if it did nothing.
- **Easter eggs** (`easter-eggs/`): all of these must keep working:
  - typing coffee, diane or firewalkwithme
  - clicking the footer log
  - the header owl
  - the Red Room 404 page
  - the Lodge toggle
  - the mirrored S2E22 title

## Content rules

- **Source material:** the episode scripts and video transcripts live outside the repo, in `../episode-transcripts/` and `../explainer-videos/`, and are never committed.
  - **Season 1–2 scripts are drafts**, so aired dialogue can differ.
  - **Aired transcripts:** `glastonberrygrove.net/texts/episodeN.html`, where N is the overall episode number. Fetch them through web.archive.org, because the live site's certificate is broken.
- **Tests guard the data.** `sections.spec.ts` enforces:
  - summaries of 200–420 characters
  - viewing order and episode counts
  - the Lynch-absent badge on S2E08–E21
  - at most two clues each for S2E10–E21
- **Attribution:**
  - Never credit an `applied` reading to Twin Perfect.
  - Never put another theorist's note into Twin Perfect's `points`.
- **Quotes:** only quote lines you've checked against a script or transcript. If you can't place a line, describe the moment instead.
- **Order:** clues follow the aired order within each card.
- **Researching and adding a clue:** use the `interpret-clue` skill.
- **Numbering:** Twin Perfect counts the Pilot as Episode 1. The site uses the official numbering and also shows the Log Lady's overall episode number.
