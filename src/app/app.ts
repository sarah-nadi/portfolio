import { Component } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Footer } from './layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Services } from './sections/services/services';
import { About } from './sections/about/about';
import { Career } from './sections/career/career';
import { Marquee } from './sections/marquee/marquee';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, Hero, Projects, Services, About, Career, Marquee, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}