import { TestBed } from '@angular/core/testing';
import { EasterEggs } from './easter-eggs';
import { LOG_LINES } from './log-lines';

describe('EasterEggs', () => {
  let eggs: EasterEggs;
  let field: HTMLInputElement;

  beforeEach(() => {
    vi.useFakeTimers();
    eggs = TestBed.inject(EasterEggs);
    field = document.createElement('input');
    document.body.append(field);
  });

  afterEach(() => {
    field.remove();
    vi.useRealTimers();
  });

  /** Dispatches real keydown events so `event.target` is set like in a browser. */
  function type(text: string, target: HTMLElement = document.body, init: KeyboardEventInit = {}) {
    const forward = (event: Event) => eggs.handleKey(event as KeyboardEvent);
    target.addEventListener('keydown', forward);
    for (const key of text) {
      target.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, ...init }));
    }
    target.removeEventListener('keydown', forward);
  }

  it('serves coffee to anyone who types “coffee”', () => {
    type('coffee');
    expect(eggs.toasts().map((toast) => toast.kind)).toEqual(['coffee']);
    expect(eggs.toasts()[0].title).toContain('Damn fine cup of coffee');
  });

  it('starts a tape for Diane, even mid-sentence', () => {
    type('hello diane');
    expect(eggs.toasts().map((toast) => toast.kind)).toEqual(['diane']);
  });

  it('ignores typing in form fields and keyboard shortcuts', () => {
    type('coffee', field);
    type('coffee', document.body, { ctrlKey: true });
    expect(eggs.toasts()).toEqual([]);
  });

  it('makes the lights flicker for “fire walk with me”', () => {
    type('firewalkwithme');
    expect(eggs.flickering()).toBe(true);
    vi.advanceTimersByTime(1600);
    expect(eggs.flickering()).toBe(false);
  });

  it('shows a still message instead of flickering when motion is reduced', () => {
    const view = document.defaultView!;
    const original = view.matchMedia;
    view.matchMedia = ((query: string) => ({
      matches: true,
      media: query,
    })) as typeof view.matchMedia;
    try {
      type('firewalkwithme');
    } finally {
      view.matchMedia = original;
    }
    expect(eggs.flickering()).toBe(false);
    expect(eggs.toasts().map((toast) => toast.title)).toEqual(['FIRE WALK WITH ME']);
  });

  it('lets the log speak, never repeating itself twice in a row', () => {
    eggs.logMessage();
    eggs.logMessage();
    const [first, second] = eggs.toasts();
    expect(first.kind).toBe('log');
    expect(LOG_LINES).toContain(first.text);
    expect(second.text).not.toBe(first.text);
  });

  it('lets toasts fade away on their own or be dismissed', () => {
    eggs.owl();
    eggs.owl();
    eggs.dismiss(eggs.toasts()[0].id);
    expect(eggs.toasts()).toHaveLength(1);
    vi.advanceTimersByTime(7000);
    expect(eggs.toasts()).toEqual([]);
  });
});
