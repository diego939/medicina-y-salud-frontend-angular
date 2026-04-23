import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-section-planes-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './section-planes-home.component.html',
  styleUrls: ['./section-planes-home.component.css'],
})
export class SectionPlanesHomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('parallaxLayer', { read: ElementRef })
  parallaxLayer?: ElementRef<HTMLElement>;

  private rafScheduled = false;

  private readonly onScrollOrResize = (): void => {
    if (this.rafScheduled) {
      return;
    }
    this.rafScheduled = true;
    requestAnimationFrame(() => {
      this.applyParallax();
      this.rafScheduled = false;
    });
  };

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly ngZone: NgZone,
    @Inject(PLATFORM_ID) private readonly platformId: object,
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      this.applyParallax();
      window.addEventListener('scroll', this.onScrollOrResize, { passive: true });
      window.addEventListener('resize', this.onScrollOrResize, { passive: true });
    });
  }

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.removeEventListener('scroll', this.onScrollOrResize);
    window.removeEventListener('resize', this.onScrollOrResize);
  }

  private applyParallax(): void {
    const layer = this.parallaxLayer?.nativeElement;
    const section = this.host.nativeElement.querySelector('section');
    if (!layer || !section) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < 0 || rect.top > vh) {
      return;
    }

    const strength = 0.28;
    const y = rect.top * strength;
    layer.style.transform = `translate3d(0, ${y}px, 0) scale(1.05)`;
  }
}
