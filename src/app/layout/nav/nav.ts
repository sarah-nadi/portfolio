import { Component, HostListener, afterNextRender, inject, signal } from '@angular/core';
import { ActiveSection } from '../../core/services/active-section';

interface NavLink { id: string; label: string }

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  private readonly section = inject(ActiveSection);

  readonly active = this.section.current;
  readonly scrolled = signal(false);
  readonly open = signal(false);

  readonly issued = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date());

  readonly links: NavLink[] = [
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'career', label: 'Career' },
    { id: 'stack', label: 'Stack' },
  ];

  constructor() {
    afterNextRender(() => {
      this.section.observe(['hero', 'work', 'services', 'about', 'career', 'stack', 'contact']);
      this.onScroll();
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 24);
  }

  toggle(): void { this.open.update((v) => !v); }
  close(): void { this.open.set(false); }
}