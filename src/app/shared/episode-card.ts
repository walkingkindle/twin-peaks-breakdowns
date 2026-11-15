import { Component, computed, input } from '@angular/core';
import type { BreakdownPoint, Episode } from '../data/models';
import { SourceBadges } from './source-badges';

interface PointGroup {
  segment?: string;
  points: BreakdownPoint[];
}

/** The Season 2 finale’s title turns into its doppelgänger on hover. */
const DOPPELGANGER_EPISODE = 's2e22';

@Component({
  selector: 'app-episode-card',
  imports: [SourceBadges],
  templateUrl: './episode-card.html',
  styleUrl: './episode-card.css',
})
export class EpisodeCard {
  readonly episode = input.required<Episode>();

  protected readonly groups = computed(() => {
    const groups: PointGroup[] = [];
    for (const point of this.episode().points) {
      const last = groups.at(-1);
      if (last && last.segment === point.segment) {
        last.points.push(point);
      } else {
        groups.push({ segment: point.segment, points: [point] });
      }
    }
    return groups;
  });

  protected readonly hasSegments = computed(() => this.groups().some((group) => group.segment));

  protected readonly isDoppelganger = computed(() => this.episode().id === DOPPELGANGER_EPISODE);

  protected isApplied(point: BreakdownPoint): boolean {
    return point.sources[0] === 'applied';
  }
}
