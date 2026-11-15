import { TestBed } from '@angular/core/testing';
import { findSection } from '../data/sections';
import type { Episode } from '../data/models';
import { EpisodeCard } from './episode-card';

function episode(sectionId: string, id: string): Episode {
  return findSection(sectionId)!.episodes.find((candidate) => candidate.id === id)!;
}

async function render(ep: Episode): Promise<HTMLElement> {
  const fixture = TestBed.createComponent(EpisodeCard);
  fixture.componentRef.setInput('episode', ep);
  await fixture.whenStable();
  return fixture.nativeElement as HTMLElement;
}

describe('EpisodeCard', () => {
  it('tells the story before diving into the clues', async () => {
    const pilot = episode('season-1', 's1e00');
    const element = await render(pilot);

    const story = element.querySelector('.story')!;
    const clues = element.querySelector('.clues')!;
    expect(story.textContent).toContain(pilot.summary);
    expect(story.compareDocumentPosition(clues) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(element.querySelector('h2')?.textContent).toContain('Pilot');
  });

  it('shows the Log Lady, the Lynch badge and the segments of the Pilot', async () => {
    const element = await render(episode('season-1', 's1e00'));

    expect(element.querySelector('.log-lady')?.textContent).toContain('Laura is the one');
    expect(element.querySelector('.badge-lynch')?.textContent).toContain('Directed by David Lynch');
    const segments = [...element.querySelectorAll('.segment')].map((node) =>
      node.textContent?.trim(),
    );
    expect(segments).toEqual(['The broadcast pilot', 'The European ending']);
  });

  it('marks the Lynch-absent episodes and labels our own readings', async () => {
    const element = await render(episode('season-2', 's2e13'));

    expect(element.querySelector('.badge-absent')?.textContent).toContain('Lynch absent');
    expect(element.querySelector('.reading-label.applied')?.textContent).toContain(
      'Applying the key',
    );
  });

  it('renders every clue with its source', async () => {
    const zen = episode('season-1', 's1e02');
    const element = await render(zen);

    expect(element.querySelectorAll('.clues .point')).toHaveLength(zen.points.length);
    expect(element.querySelectorAll('app-source-badges')).toHaveLength(zen.points.length);
    expect(element.textContent).toContain('That gum you like is going to come back in style.');
  });

  it('adds other theorists after the clues, labelled, linked and flagged', async () => {
    const finale = episode('the-return', 's3e18');
    const extras = finale.extras!;
    const element = await render(finale);

    const others = element.querySelector('.others')!;
    const clues = element.querySelector('.clues')!;
    expect(clues.compareDocumentPosition(others) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(others.querySelectorAll('.point')).toHaveLength(extras.length);

    const badges = [...others.querySelectorAll<HTMLAnchorElement>('.theorist-badge')];
    expect(badges.map((badge) => badge.getAttribute('href'))).toEqual(
      extras.map((extra) => `https://youtu.be/${extra.video}`),
    );
    expect(badges[0].textContent).toContain(extras[0].theorist);
    expect(badges[0].getAttribute('title')).toBe(extras[0].videoTitle);
    expect(others.querySelectorAll('.disagrees')).toHaveLength(
      extras.filter((extra) => extra.disagrees).length,
    );
  });

  it('leaves the other theories out when nobody covers the episode', async () => {
    const quiet = findSection('season-2')!.episodes.find((candidate) => !candidate.extras)!;
    const element = await render(quiet);
    expect(element.querySelector('.others')).toBeNull();
  });

  it('gives the Season 2 finale a doppelgänger title', async () => {
    const element = await render(episode('season-2', 's2e22'));
    expect(element.querySelector('.doppelganger')?.getAttribute('title')).toBe('How’s Annie?');
  });
});
