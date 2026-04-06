import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
email = "contacto@medicinaysalud.com";
redes = [
  {link:"#",icono:"fa-brands fa-facebook-f"},
  {link:"#",icono:"fa-brands fa-x-twitter"},
  {link:"#",icono:"fa-brands fa-youtube"},
  {link:"#",icono:"fa-brands fa-linkedin-in"}
 ];
}
