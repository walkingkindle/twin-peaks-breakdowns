import { TestBed } from '@angular/core/testing';
import { BROWSER_BAR, LODGE_STORAGE_KEY, Theme } from './theme';

describe('Theme', () => {
  beforeEach(() => {
    localStorage.clear();
    delete document.documentElement.dataset['lodge'];
  });

  it('starts in the Black Lodge', () => {
    const theme = TestBed.inject(Theme);
    expect(theme.lodge()).toBe('black');
    expect(document.documentElement.dataset['lodge']).toBe('black');
  });

  it('moves between the Lodges and remembers the choice', () => {
    TestBed.inject(Theme).toggle();
    expect(document.documentElement.dataset['lodge']).toBe('white');
    expect(localStorage.getItem(LODGE_STORAGE_KEY)).toBe('white');

    TestBed.resetTestingModule();
    expect(TestBed.inject(Theme).lodge()).toBe('white');
  });

  it('tints the phone’s browser bar to match', () => {
    const meta = document.head.appendChild(document.createElement('meta'));
    meta.name = 'theme-color';
    const theme = TestBed.inject(Theme);
    expect(meta.content).toBe(BROWSER_BAR.black);

    theme.toggle();
    expect(meta.content).toBe(BROWSER_BAR.white);
    meta.remove();
  });
});
