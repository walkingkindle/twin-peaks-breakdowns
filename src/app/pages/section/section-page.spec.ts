import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../app.routes';
import { SECTIONS } from '../../data/sections';
import { SectionPage } from './section-page';

describe('SectionPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes, withComponentInputBinding())],
    });
  });

  for (const section of SECTIONS) {
    it(`shows every title in ${section.title}, in order`, async () => {
      const harness = await RouterTestingHarness.create();
      await harness.navigateByUrl(`/${section.id}`, SectionPage);
      const element = harness.routeNativeElement!;

      expect(element.querySelector('h1')?.textContent).toContain(section.title);
      const titles = [...element.querySelectorAll('app-episode-card h2')].map((node) =>
        node.textContent?.trim(),
      );
      expect(titles).toEqual(section.episodes.map((episode) => episode.title));
    });
  }

  it('links to the neighbouring sections', async () => {
    const harness = await RouterTestingHarness.create();
    await harness.navigateByUrl('/fire-walk-with-me', SectionPage);
    const pager = harness.routeNativeElement!.querySelector('.pager')!.textContent;

    expect(pager).toContain('Season 2');
    expect(pager).toContain('The Return');
  });

  it('handles a section that does not exist', async () => {
    const fixture = TestBed.createComponent(SectionPage);
    fixture.componentRef.setInput('section', 'season-4');
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('not what it seems');
  });
});
