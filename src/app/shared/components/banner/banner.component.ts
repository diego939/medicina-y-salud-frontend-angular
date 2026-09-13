import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements AfterViewInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite();
    }
  }

  onImageLoad(event: Event): void {
    const image = event.target as HTMLImageElement;

    const loader = image.parentElement?.querySelector(
      '.image-loader'
    ) as HTMLElement | null;

    image.classList.remove('opacity-0');
    image.classList.add('opacity-100');

    if (loader) {
      loader.classList.add('opacity-0');

      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }

  onImageError(event: Event): void {
    const image = event.target as HTMLImageElement;

    const loader = image.parentElement?.querySelector(
      '.image-loader'
    ) as HTMLElement | null;

    loader?.remove();

    image.classList.remove('opacity-0');
  }
}