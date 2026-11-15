import { DOCUMENT, Injectable, inject, signal } from '@angular/core';
import { LOG_LINES } from './log-lines';

export type ToastKind = 'coffee' | 'diane' | 'fire' | 'log' | 'owl';

export interface Toast {
  id: number;
  kind: ToastKind;
  title: string;
  text?: string;
}

const TOAST_DURATION_MS = 7000;
const FLICKER_DURATION_MS = 1600;

/** Typed anywhere on the page (outside form fields). */
const SECRET_WORDS = ['coffee', 'diane', 'firewalkwithme'] as const;
type SecretWord = (typeof SECRET_WORDS)[number];
const LONGEST_WORD = Math.max(...SECRET_WORDS.map((word) => word.length));

@Injectable({ providedIn: 'root' })
export class EasterEggs {
  private readonly document = inject(DOCUMENT);
  private readonly toastList = signal<readonly Toast[]>([]);
  private readonly flicker = signal(false);
  private typed = '';
  private nextId = 1;
  private lastLogLine = -1;

  readonly toasts = this.toastList.asReadonly();
  /** True while the page lights flicker after someone types “fire walk with me”. */
  readonly flickering = this.flicker.asReadonly();

  handleKey(event: KeyboardEvent): void {
    if (event.ctrlKey || event.metaKey || event.altKey || isEditable(event.target)) {
      return;
    }
    const key = event.key.toLowerCase();
    if (!/^[a-z]$/.test(key)) {
      return;
    }
    this.typed = (this.typed + key).slice(-LONGEST_WORD);
    const word = SECRET_WORDS.find((secret) => this.typed.endsWith(secret));
    if (word) {
      this.typed = '';
      this.reveal(word);
    }
  }

  logMessage(): void {
    let index = Math.floor(Math.random() * LOG_LINES.length);
    if (index === this.lastLogLine) {
      index = (index + 1) % LOG_LINES.length;
    }
    this.lastLogLine = index;
    this.show('log', 'My log has a message for you:', LOG_LINES[index]);
  }

  owl(): void {
    this.show('owl', 'The owls are not what they seem.');
  }

  dismiss(id: number): void {
    this.toastList.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }

  private reveal(word: SecretWord): void {
    switch (word) {
      case 'coffee':
        this.show('coffee', 'Damn fine cup of coffee!', 'Black as midnight on a moonless night.');
        break;
      case 'diane':
        this.show(
          'diane',
          'Diane, 11:30 a.m., February 24th.',
          'Entering the town of Twin Peaks, five miles south of the Canadian border, twelve miles west of the state line. Never seen so many trees in my life.',
        );
        break;
      case 'firewalkwithme':
        this.walkWithFire();
        break;
    }
  }

  private walkWithFire(): void {
    if (this.prefersReducedMotion()) {
      this.show('fire', 'FIRE WALK WITH ME');
      return;
    }
    this.flicker.set(true);
    setTimeout(() => this.flicker.set(false), FLICKER_DURATION_MS);
  }

  private show(kind: ToastKind, title: string, text?: string): void {
    const toast: Toast = { id: this.nextId++, kind, title, text };
    this.toastList.update((toasts) => [...toasts.slice(-2), toast]);
    setTimeout(() => this.dismiss(toast.id), TOAST_DURATION_MS);
  }

  private prefersReducedMotion(): boolean {
    return (
      this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    );
  }
}

function isEditable(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}
