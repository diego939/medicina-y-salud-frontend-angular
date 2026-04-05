import { Component } from '@angular/core';
import { BannerComponent } from '../../../../shared/components/banner/banner.component';
import { SectionCardsHomeComponent } from '../../../../shared/components/section-cards-home/section-cards-home.component';
import { SectionAtentionComponent } from '../../../../shared/components/section-atention/section-atention.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent, SectionCardsHomeComponent, SectionAtentionComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}
