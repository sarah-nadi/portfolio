import { Component } from '@angular/core';
import { Reveal } from '../../core/directives/reveal';
import { PLEDGE, SPECS } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [Reveal],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly specs = SPECS;
  readonly pledge = PLEDGE;
}