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
}
