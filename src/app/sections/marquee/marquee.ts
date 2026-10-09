import { Component } from '@angular/core';
import { Reveal } from '../../core/directives/reveal';
import { STACK_ROWS, StackWord } from '../../core/data/portfolio.data';

interface RowVm {
  group: StackWord[];
  duration: number;
  reverse: boolean;
}

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [Reveal],
  templateUrl: './marquee.html',
  styleUrl: './marquee.css',
})
export class Marquee {
  readonly copies = [0, 1];

  readonly rows: RowVm[] = STACK_ROWS.map((r) => ({
    group: Array.from({ length: r.repeat }, () => r.words).flat(),
    duration: r.duration,
    reverse: !!r.reverse,
  }));

  readonly names = STACK_ROWS.flatMap((r) => r.words.map((w) => w.text));
}