import { Component, inject } from '@angular/core';
import { EasterEggs } from './easter-eggs';

@Component({
  selector: 'app-owl',
  template: `
    <button
      type="button"
      class="owl"
      (click)="eggs.owl()"
      aria-label="The owls are not what they seem"
    >
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path class="owl-body" d="M13 9l10 11q9-4 18 0l10-11-1 22q1 22-18 25-19-3-18-25z" />
        <g class="owl-eyes">
          <circle cx="24" cy="31" r="7.5" class="owl-ring" />
          <circle cx="40" cy="31" r="7.5" class="owl-ring" />
          <circle cx="24" cy="31" r="3.2" class="owl-pupil" />
          <circle cx="40" cy="31" r="3.2" class="owl-pupil" />
        </g>
        <path d="M29.5 39l2.5 5 2.5-5z" class="owl-beak" />
      </svg>
      <span class="owl-tip" aria-hidden="true">The owls are not what they seem.</span>
    </button>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
    .owl {
      position: relative;
      display: inline-flex;
      padding: 0.2rem;
      border: 0;
      border-radius: 50%;
      background: none;
      color: var(--owl-body);
      cursor: pointer;
    }
    svg {
      width: 42px;
      height: 42px;
    }
    .owl-body {
      fill: currentColor;
    }
    .owl-ring {
      fill: var(--owl-eye);
    }
    .owl-pupil {
      fill: #0b0909;
    }
    .owl-beak {
      fill: var(--gold);
    }
    .owl-eyes {
      transform-box: fill-box;
      transform-origin: center;
      animation: blink 7s infinite;
    }
    .owl-tip {
      position: absolute;
      top: calc(100% + 0.4rem);
      left: 0;
      z-index: 20;
      width: max-content;
      max-width: 15rem;
      padding: 0.5rem 0.7rem;
      border: 1px solid var(--border-strong);
      border-radius: 6px;
      background: var(--surface);
      color: var(--text);
      font: italic 0.9rem/1.3 var(--font-serif);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-4px);
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;
    }
    .owl:hover .owl-tip,
    .owl:focus-visible .owl-tip {
      opacity: 1;
      transform: none;
    }
    @keyframes blink {
      0%,
      92%,
      100% {
        transform: scaleY(1);
      }
      95% {
        transform: scaleY(0.08);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .owl-eyes {
        animation: none;
      }
      .owl-tip {
        transition: none;
      }
    }
  `,
})
export class Owl {
  protected readonly eggs = inject(EasterEggs);
}
