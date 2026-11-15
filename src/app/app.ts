import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SECTION_LINKS } from './data/section-links';
import { EasterEggs } from './easter-eggs/easter-eggs';
import { Owl } from './easter-eggs/owl';
import { Theme } from './easter-eggs/theme';
import { ToastStack } from './easter-eggs/toast-stack';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Owl, ToastStack],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  host: {
    '(document:keydown)': 'eggs.handleKey($event)',
    '[class.fire-walk]': 'eggs.flickering()',
  },
})
export class App {
  protected readonly sections = SECTION_LINKS;
  protected readonly eggs = inject(EasterEggs);
  protected readonly theme = inject(Theme);

  /** On phones the nav scrolls sideways, so centre the current section’s link if it’s cut off. */
  protected reveal(nav: HTMLElement, link: HTMLElement): void {
    const strip = nav.getBoundingClientRect();
    const box = link.getBoundingClientRect();
    if (box.left < strip.left || box.right > strip.right) {
      nav.scrollBy({ left: box.left + box.width / 2 - (strip.left + strip.width / 2) });
    }
  }
}
