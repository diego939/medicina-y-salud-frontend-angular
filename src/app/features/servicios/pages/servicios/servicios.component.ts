import { Component } from '@angular/core';
import { BannerServiciosComponent } from '../../../../shared/components/banner-servicios/banner-servicios.component';
import { CardServiciosComponent } from '../../../../shared/components/card-servicios/card-servicios.component';
import { OtrosServiciosComponent } from '../../../../shared/components/otros-servicios/otros-servicios.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [BannerServiciosComponent,CardServiciosComponent, OtrosServiciosComponent],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {

}
