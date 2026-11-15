import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Episode } from '../../data/models';
import { SECTION_LINKS, type SectionLink } from '../../data/section-links';
import { findSection } from '../../data/sections';
import { EpisodeCard } from '../../shared/episode-card';

@Component({
  selector: 'app-section-page',
  imports: [RouterLink, EpisodeCard],
  templateUrl: './section-page.html',
  styleUrl: './section-page.css',
})
export class SectionPage {
  /** Bound from the `:section` route parameter. */
  readonly section = input.required<string>();

  protected readonly data = computed(() => findSection(this.section()));

  protected readonly previous = computed(() => this.neighbour(-1));
  protected readonly next = computed(() => this.neighbour(1));

  /** "Season 1 · Episode 2" → "Episode 2", "The Return · Part 8" → "Part 8". */
  protected shortLabel(episode: Episode): string {
    return episode.label.split(' · ').at(-1) ?? episode.label;
  }

  private neighbour(offset: number): SectionLink | undefined {
    const index = SECTION_LINKS.findIndex((link) => link.id === this.section());
    const target = index + offset;
    return index === -1 || target < 0 || target >= SECTION_LINKS.length
      ? undefined
      : SECTION_LINKS[target];
  }
}
