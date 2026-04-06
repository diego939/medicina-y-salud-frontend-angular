import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {

      initFlowbite();

      AOS.init({
        duration: 800,
        once: false
      });

      // ✅ Scroll arriba + refrescar AOS en cada navegación
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {

          // scroll suave
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          // refrescar animaciones
          setTimeout(() => {
            AOS.refresh();
          }, 100);
        }
      });
    }
  }

  title = 'Sistema Escolar';
}