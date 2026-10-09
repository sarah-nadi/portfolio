import { Component, signal } from '@angular/core';
import { Reveal } from '../../core/directives/reveal';
import { PROJECTS, Project } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  readonly projects: readonly Project[] = PROJECTS;
  readonly total = this.projects.length;
  readonly active = signal(0);

  private startX = 0;
  private startY = 0;
  private swiped = false;

  pad(n: number): string {
    return String(n).padStart(2, '0');
  }

  /** 0 = الكارت النشط، 1..n = ترتيبه في الـ stack وراه */
   rel(i: number): number {
    const half = Math.floor(this.total / 2);
    return ((i - this.active() + this.total + half) % this.total) - half;
  }

  abs(n: number): number {
    return Math.abs(n);
  }

  goTo(i: number): void {
    this.active.set(i);
  }

  next(): void {
    this.active.update((a) => (a + 1) % this.total);
  }

  prev(): void {
    this.active.update((a) => (a - 1 + this.total) % this.total);
  }

  onPointerDown(e: PointerEvent): void {
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.swiped = false;
  }

  onPointerUp(e: PointerEvent): void {
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      this.swiped = true;
      dx < 0 ? this.next() : this.prev();
    }
  }

  onSlotClick(i: number): void {
    if (this.swiped) {
      this.swiped = false;
      return;
    }
        if (this.rel(i) !== 0) this.active.set(i);
  }

  onKey(e: KeyboardEvent): void {
    if (e.key === 'ArrowRight') { e.preventDefault(); this.next(); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); this.prev(); }
  }
}