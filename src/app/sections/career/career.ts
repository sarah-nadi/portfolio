import { Component } from '@angular/core';
import { Reveal } from '../../core/directives/reveal';
import { CAREER } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [Reveal],
  templateUrl: './career.html',
  styleUrl: './career.css',
})
export class Career {
  readonly stages = CAREER;
  readonly timeline = CAREER.map((s) => s.timeline).join(' — ');
}