import { Component } from '@angular/core';
import { BannerNosotrosComponent } from '../../../../shared/components/banner-nosotros/banner-nosotros.component';
import { CardsNosotrosComponent } from '../../../../shared/components/cards-nosotros/cards-nosotros.component';
import { HistoriaNosotrosComponent } from '../../../../shared/components/historia-nosotros/historia-nosotros.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [BannerNosotrosComponent, CardsNosotrosComponent, HistoriaNosotrosComponent],
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {

}
