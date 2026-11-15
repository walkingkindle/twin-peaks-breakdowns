import { Component, inject } from '@angular/core';
import { EasterEggs } from './easter-eggs';

@Component({
  selector: 'app-toast-stack',
  template: `
    <div class="stack" aria-live="polite">
      @for (toast of eggs.toasts(); track toast.id) {
        <div class="toast" [attr.data-kind]="toast.kind" role="status">
          @switch (toast.kind) {
            @case ('coffee') {
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <path class="steam" d="M12 4c-2 2 2 3 0 6M17 3c-2 2 2 3 0 6M22 4c-2 2 2 3 0 6" />
                <path class="solid" d="M5 13h18v6a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7z" />
                <path d="M23 15h2a3 3 0 0 1 0 6h-2" />
              </svg>
            }
            @case ('diane') {
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <rect x="3" y="7" width="26" height="18" rx="2" />
                <circle class="solid" cx="11" cy="15" r="3" />
                <circle class="solid" cx="21" cy="15" r="3" />
                <path d="M8 25l2-4h12l2 4" />
              </svg>
            }
            @case ('log') {
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <rect class="solid" x="3" y="11" width="22" height="10" rx="5" />
                <ellipse cx="25" cy="16" rx="3.5" ry="5" />
                <circle class="solid" cx="25" cy="16" r="1.4" />
              </svg>
            }
            @case ('owl') {
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <circle cx="11" cy="16" r="6" />
                <circle cx="21" cy="16" r="6" />
                <circle class="solid" cx="11" cy="16" r="2" />
                <circle class="solid" cx="21" cy="16" r="2" />
              </svg>
            }
            @default {
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <path
                  class="solid"
                  d="M16 3c2 6 9 9 9 17a9 9 0 0 1-18 0c0-5 3-7 4-11 2 3 3 4 5 4-1-4-1-7 0-10z"
                />
              </svg>
            }
          }
          <div class="text">
            <p class="title">{{ toast.title }}</p>
            @if (toast.text) {
              <p class="body">{{ toast.text }}</p>
            }
          </div>
          <button type="button" class="close" (click)="eggs.dismiss(toast.id)" aria-label="Dismiss">
            ×
          </button>
        </div>
      }
    </div>
  `,
  styles: `
    .stack {
      position: fixed;
      right: 1rem;
      bottom: 1rem;
      left: 1rem;
      z-index: 50;
      display: grid;
      justify-items: end;
      gap: 0.6rem;
      pointer-events: none;
    }
    .toast {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      width: min(26rem, 100%);
      padding: 0.85rem 0.9rem;
      border: 1px solid var(--border-strong);
      border-left: 4px solid var(--toast-accent, var(--accent));
      border-radius: 8px;
      background: var(--surface);
      color: var(--text);
      box-shadow: 0 18px 40px -20px rgb(0 0 0 / 0.8);
      pointer-events: auto;
      animation: arrive 0.35s ease-out;
    }
    .toast[data-kind='coffee'] {
      --toast-accent: var(--coffee-accent);
    }
    .toast[data-kind='diane'],
    .toast[data-kind='owl'] {
      --toast-accent: var(--mint-text);
    }
    .toast[data-kind='log'] {
      --toast-accent: var(--fir-accent);
    }
    .icon {
      flex: none;
      width: 32px;
      height: 32px;
      fill: none;
      stroke: var(--toast-accent, var(--accent));
      stroke-width: 2;
      stroke-linecap: round;
    }
    .icon .solid {
      fill: var(--toast-accent, var(--accent));
      stroke: none;
    }
    .steam {
      animation: steam 2.4s ease-in-out infinite;
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .title {
      margin: 0;
      font: 700 1rem/1.35 var(--font-serif);
    }
    .body {
      margin: 0.3rem 0 0;
      font-size: 0.92rem;
      line-height: 1.5;
      color: var(--muted);
    }
    .close {
      flex: none;
      padding: 0 0.3rem;
      border: 0;
      background: none;
      color: var(--muted);
      font-size: 1.4rem;
      line-height: 1;
      cursor: pointer;
    }
    .close:hover {
      color: var(--text);
    }
    @keyframes arrive {
      from {
        opacity: 0;
        transform: translateY(12px);
      }
    }
    @keyframes steam {
      50% {
        opacity: 0.35;
        transform: translateY(-1.5px);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .toast,
      .steam {
        animation: none;
      }
    }
  `,
})
export class ToastStack {
  protected readonly eggs = inject(EasterEggs);
}
