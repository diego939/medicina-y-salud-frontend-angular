import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  ViewChild
} from '@angular/core';
import Swiper from 'swiper';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

export interface PlanCard {
  title: string;
  tagline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-cards-planes',
  standalone: true,
  imports: [],
  templateUrl: './cards-planes.component.html',
  styleUrl: './cards-planes.component.css'
})
export class CardsPlanesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('planesSwiper') planesSwiperRef!: ElementRef<HTMLElement>;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

readonly planes: PlanCard[] = [
  {
    title: 'Plan Cerca',
    tagline: 'Salud simple, rápida y siempre a tu alcance',
    description:
      'Una opción ágil y digital que te permite resolver todo desde tu celular, con acceso a prestadores cercanos y herramientas inteligentes.',
    imageSrc: 'assets/planes/plancerca.png',
    imageAlt: 'Plan Cerca'
  },
  {
    title: 'Plan Integral',
    tagline: 'Cobertura completa que se adapta a tu día a día',
    description:
      'Amplia red nacional con sistema flexible de copagos para equilibrar costos sin perder calidad de atención.',
    imageSrc: 'assets/planes/planintegral.png',
    imageAlt: 'Plan Integral'
  },
  {
    title: 'Plan Superior',
    tagline: 'Más confort, más beneficios, más tranquilidad',
    description:
      'Internación individual, descuentos en farmacias y servicios exclusivos como emergencias y consultas a domicilio.',
    imageSrc: 'assets/planes/plansuperior.png',
    imageAlt: 'Plan Superior'
  },
  {
    title: 'Plan Selecta',
    tagline: 'La máxima experiencia en salud, sin concesiones',
    description:
      'Accedé a centros de primer nivel, internación en suite y atención personalizada con el más alto estándar.',
    imageSrc: 'assets/planes/planselecta.png',
    imageAlt: 'Plan Selecta'
  },
  {
    title: 'Plan Gold',
    tagline: 'Equilibrio perfecto entre cobertura premium y valor',
    description:
      'Disfrutá de una cobertura superior con acceso preferencial a especialistas, internación de alta calidad y beneficios exclusivos que optimizan tu experiencia en salud.',
    imageSrc: 'assets/planes/plangold.png',
    imageAlt: 'Plan Gold'
  }
];

  private swiper?: Swiper;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const el = this.planesSwiperRef?.nativeElement;
    if (!el) {
      return;
    }

    const shell = el.parentElement;
    const paginationEl = el.querySelector<HTMLElement>('.planes-swiper-pagination');
    const prevBtn = shell?.querySelector<HTMLElement>('.planes-swiper-button-prev');
    const nextBtn = shell?.querySelector<HTMLElement>('.planes-swiper-button-next');
    if (!paginationEl || !prevBtn || !nextBtn) {
      return;
    }

    /**
     * Con 4 slides y `slidesPerView: 3` + Coverflow, `loop` no cumple el mínimo que exige Swiper
     * y se desactiva. `rewind` une último ↔ primero con transición sin duplicar bullets ni DOM.
     */
    this.swiper = new Swiper(el, {
      modules: [EffectCoverflow, Pagination, Navigation],
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      rewind: true,
      /** Tercera card (índice 2) centrada al cargar */
      initialSlide: 2,
      speed: 550,
      slidesPerView: 'auto',
      spaceBetween: 12,
      watchSlidesProgress: true,
      /* Móvil (<640): Coverflow más suave para que se vea parte de prev/next (peek) */
      coverflowEffect: {
        rotate: 8,
        stretch: 0,
        depth: 72,
        scale: 0.94,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: paginationEl,
        clickable: true,
        dynamicBullets: false
      },
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn
      },
      breakpoints: {
        640: {
          spaceBetween: 20,
          coverflowEffect: { rotate: 14, depth: 128, scale: 0.89 }
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 22,
          coverflowEffect: { rotate: 14, depth: 130, scale: 0.88 }
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.swiper?.destroy(true, true);
    this.swiper = undefined;
  }
}
