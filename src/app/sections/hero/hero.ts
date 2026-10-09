import { Component } from '@angular/core';
import { Reveal } from '../../core/directives/reveal';
import { CV_URL } from '../../core/data/portfolio.data';

interface MetaCell { label: string; value: string }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  readonly cv = CV_URL;
  readonly meta: MetaCell[] = [
    { label: 'Frontend', value: 'Angular standalone & signals' },
    { label: 'Backend', value: 'ASP.NET Core Web APIs' },
    { label: 'Architecture', value: 'Clean Architecture' },
    { label: 'Pattern', value: 'CQRS command / query split' },
    { label: 'Data', value: 'EF Core + SQL Server' },
    { label: 'Auth', value: 'JWT & claims-based policies' },
    { label: 'Realtime', value: 'SignalR WebSockets' },
    { label: 'Payments', value: 'Paymob integration' },
    { label: 'Version control', value: 'Git workflows' },
  ];
}