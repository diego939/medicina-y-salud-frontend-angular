import { Component } from '@angular/core';
import { BannerPlanesComponent } from '../../../../shared/components/banner-planes/banner-planes.component';
import { CardsPlanesComponent } from '../../../../shared/components/cards-planes/cards-planes.component';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [BannerPlanesComponent, CardsPlanesComponent],
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent {

}
