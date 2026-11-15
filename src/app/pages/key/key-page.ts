import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { KEY_CAVEATS, KEY_IDEA, KEY_METHOD, KEY_SYMBOLS } from '../../data/key';
import { THEORISTS } from '../../data/theories';

@Component({
  selector: 'app-key-page',
  imports: [RouterLink],
  templateUrl: './key-page.html',
  styleUrl: './key-page.css',
})
export class KeyPage {
  protected readonly idea = KEY_IDEA;
  protected readonly method = KEY_METHOD;
  protected readonly symbols = KEY_SYMBOLS;
  protected readonly caveats = KEY_CAVEATS;
  protected readonly theorists = THEORISTS;
}
