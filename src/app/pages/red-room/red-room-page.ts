import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Shown for any URL that doesn't exist. */
@Component({
  selector: 'app-red-room-page',
  imports: [RouterLink],
  template: `
    <section class="red-room" aria-labelledby="red-room-title">
      <div class="room">
        <p class="eyebrow">You have wandered into the Red Room</p>
        <h1 id="red-room-title" aria-label="Is it future, or is it past?">
          <span class="backwards" aria-hidden="true">Is it future, or is it past?</span>
        </h1>
        <p
          class="whisper"
          aria-label="Where we’re from, the birds sing a pretty song, and there’s always music in the air."
        >
          <span class="backwards" aria-hidden="true">
            Where we’re from, the birds sing a pretty song, and there’s always music in the air.
          </span>
        </p>
        <p class="plain">
          This page doesn’t exist. Or maybe it does, somewhere between the curtains.
        </p>
        <a class="button button-primary" routerLink="/">Let’s rock</a>
      </div>
      <div class="floor" aria-hidden="true"></div>
    </section>
  `,
  styles: `
    .red-room {
      position: relative;
      display: grid;
      grid-template-rows: 1fr auto;
      min-height: 80vh;
      overflow: hidden;
      color: #fbefe2;
      background: var(--curtain-folds);
      perspective: 600px;
    }
    .room {
      align-self: center;
      max-width: 42rem;
      margin: 0 auto;
      padding: 4rem 1rem 2rem;
      text-align: center;
    }
    .eyebrow {
      margin: 0;
      font: 700 0.78rem/1.2 var(--font-sans);
      letter-spacing: 0.28em;
      text-transform: uppercase;
      opacity: 0.85;
    }
    h1 {
      margin: 1rem 0;
      font: 700 clamp(2rem, 6vw, 3.4rem) / 1.15 var(--font-serif);
      text-shadow: 0 3px 20px rgb(0 0 0 / 0.5);
    }
    .backwards {
      display: inline-block;
      transform: scaleX(-1);
    }
    .whisper {
      margin: 0 0 1.5rem;
      font: italic 1.2rem/1.5 var(--font-serif);
      opacity: 0.9;
    }
    .plain {
      margin: 0 0 1.75rem;
      opacity: 0.85;
    }
    .floor {
      height: 34vh;
      margin: 0 -20%;
      transform: rotateX(62deg);
      transform-origin: top;
      background:
        linear-gradient(135deg, #efe6d0 25%, transparent 25%) -26px 0,
        linear-gradient(225deg, #efe6d0 25%, transparent 25%) -26px 0,
        linear-gradient(315deg, #efe6d0 25%, transparent 25%),
        linear-gradient(45deg, #efe6d0 25%, transparent 25%);
      background-color: #0c0909;
      background-size: 52px 52px;
    }
  `,
})
export class RedRoomPage {}
