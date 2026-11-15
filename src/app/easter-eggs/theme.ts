import { DOCUMENT, Injectable, inject, signal } from '@angular/core';

/** The site's two themes: the dark Black Lodge (default) and the cream White Lodge. */
export type Lodge = 'black' | 'white';

export const LODGE_STORAGE_KEY = 'twin-peaks-lodge';

@Injectable({ providedIn: 'root' })
export class Theme {
  private readonly document = inject(DOCUMENT);
  private readonly current = signal<Lodge>('black');

  readonly lodge = this.current.asReadonly();

  constructor() {
    this.apply(readStoredLodge());
  }

  toggle(): void {
    this.apply(this.current() === 'black' ? 'white' : 'black');
  }

  private apply(lodge: Lodge): void {
    this.current.set(lodge);
    this.document.documentElement.dataset['lodge'] = lodge;
    try {
      localStorage.setItem(LODGE_STORAGE_KEY, lodge);
    } catch {
      // Storage can be unavailable (private mode, blocked site data); the theme still works.
    }
  }
}

function readStoredLodge(): Lodge {
  try {
    return localStorage.getItem(LODGE_STORAGE_KEY) === 'white' ? 'white' : 'black';
  } catch {
    return 'black';
  }
}
