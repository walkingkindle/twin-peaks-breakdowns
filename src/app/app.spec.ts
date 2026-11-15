import { TestBed } from '@angular/core/testing';
import { Router, provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes, withComponentInputBinding())],
    }).compileComponents();
  });

  it('links to every section and the key, in viewing order', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const nav = (fixture.nativeElement as HTMLElement).querySelector('.site-nav')!;

    const links = [...nav.querySelectorAll('a')].map((link) => link.textContent?.trim());
    expect(links).toEqual(['Season 1', 'Season 2', 'Fire Walk With Me', 'The Return', 'The Key']);
  });

  it('scrolls the nav to the current section when it is cut off on a phone', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const nav = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('.site-nav')!;
    const key = nav.querySelector<HTMLElement>('a:last-child')!;
    // A 320px strip with The Key hidden past its right edge.
    vi.spyOn(nav, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      right: 320,
      width: 320,
    } as DOMRect);
    vi.spyOn(key, 'getBoundingClientRect').mockReturnValue({
      left: 500,
      right: 580,
      width: 80,
    } as DOMRect);
    nav.scrollBy = vi.fn();

    await TestBed.inject(Router).navigateByUrl('/key');
    await fixture.whenStable();

    expect(nav.scrollBy).toHaveBeenCalledWith({ left: 380 });
  });

  it('opens the doors to the White Lodge', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const toggle = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      '.lodge-toggle',
    )!;
    const before = document.documentElement.dataset['lodge'];

    toggle.click();
    await fixture.whenStable();

    expect(document.documentElement.dataset['lodge']).not.toBe(before);
    toggle.click();
  });

  it('sends unknown addresses to the Red Room', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/fire-walk-with-you');

    const room = harness.routeNativeElement!;
    expect(room.querySelector('h1')?.getAttribute('aria-label')).toBe(
      'Is it future, or is it past?',
    );
    expect(room.textContent).toContain('Let’s rock');
  });
});
