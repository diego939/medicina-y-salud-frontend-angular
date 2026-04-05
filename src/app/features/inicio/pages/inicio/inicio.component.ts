import { Component } from '@angular/core';
import { BannerComponent } from '../../../../shared/components/banner/banner.component';
import { SectionCardsHomeComponent } from '../../../../shared/components/section-cards-home/section-cards-home.component';
import { SectionAtentionComponent } from '../../../../shared/components/section-atention/section-atention.component';
import { SectionPlanesHomeComponent } from '../../../../shared/components/section-planes-home/section-planes-home.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [BannerComponent, SectionCardsHomeComponent, SectionAtentionComponent, SectionPlanesHomeComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}
