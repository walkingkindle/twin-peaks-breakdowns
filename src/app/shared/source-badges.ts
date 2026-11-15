import { Component, input } from '@angular/core';
import type { Source } from '../data/models';
import { SOURCES } from '../data/sources';

@Component({
  selector: 'app-source-badges',
  template: `
    <ul class="sources" aria-label="Sources">
      @for (source of sources(); track source) {
        <li class="source" [attr.data-source]="source" [title]="info[source].description">
          {{ info[source].label }}
        </li>
      }
    </ul>
  `,
  styles: `
    .sources {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }
    .source {
      font: 600 0.7rem/1 var(--font-sans);
      letter-spacing: 0.04em;
      padding: 0.36rem 0.6rem;
      border-radius: 999px;
      border: 1px solid var(--source-color);
      color: var(--source-color);
      --source-color: var(--muted);
    }
    .source[data-source='main'] {
      --source-color: var(--source-main);
    }
    .source[data-source='followUp'] {
      --source-color: var(--source-follow-up);
    }
    .source[data-source='critics'] {
      --source-color: var(--source-critics);
    }
    .source[data-source='applied'] {
      --source-color: var(--source-applied);
      border-style: dashed;
    }
  `,
})
export class SourceBadges {
  readonly sources = input.required<readonly Source[]>();

  protected readonly info = SOURCES;
}
