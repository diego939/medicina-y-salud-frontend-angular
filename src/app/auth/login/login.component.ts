import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { MenuService } from '../../core/services/menu.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, FormsModule ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
enviando: boolean = false;

login(form: any) {

  if (form.invalid) {
    Swal.fire({
      icon: 'warning',
      title: 'Datos incompletos',
      text: 'Ingresá email y contraseña',
      confirmButtonColor: '#00cba9'
    });
    return;
  }

  this.enviando = true;

  setTimeout(() => {

    this.enviando = false;

    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: 'Inicio de sesión exitoso',
      confirmButtonColor: '#00cba9'
    });

  }, 1200);
}
}