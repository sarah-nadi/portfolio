import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ActiveSection {
  private readonly platformId = inject(PLATFORM_ID);
  readonly current = signal<string>('hero');

  /** بتتنادى مرة من الـ Nav بعد ما الـ DOM يجهز */
  observe(ids: string[]): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) this.current.set(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
}