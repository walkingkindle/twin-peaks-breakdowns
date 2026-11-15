import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import type { Source } from '../../data/models';
import { SECTION_LINKS } from '../../data/section-links';
import { SOURCES } from '../../data/sources';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  protected readonly sections = SECTION_LINKS;
  protected readonly sources = (Object.keys(SOURCES) as Source[]).map((id) => ({
    id,
    ...SOURCES[id],
  }));
}
