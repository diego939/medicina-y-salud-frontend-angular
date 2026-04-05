import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
email = "contacto@saludplus.com";
redes = [
  {link:"#",icono:"fa-brands fa-facebook-f"},
  {link:"#",icono:"fa-brands fa-x-twitter"},
  {link:"#",icono:"fa-brands fa-youtube"},
  {link:"#",icono:"fa-brands fa-linkedin-in"}
 ];
}
