import { Component } from '@angular/core';
import { Reveal } from '../../core/directives/reveal';
import { CAPABILITIES, PIPELINE } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [Reveal],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  readonly pipeline = PIPELINE;
  readonly capabilities = CAPABILITIES;

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }
}