import {
  Directive, ElementRef, Input, OnDestroy, OnInit, PLATFORM_ID, inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[reveal]',
  standalone: true,
})
export class Reveal implements OnInit, OnDestroy {
  /** delay بالـ ms: <div reveal [revealDelay]="120"> */
  @Input() revealDelay = 0;

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible');
          this.observer?.disconnect(); // one time only
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}