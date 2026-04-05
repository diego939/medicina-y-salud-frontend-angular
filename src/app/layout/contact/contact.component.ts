import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: any;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: [''],
      email: [''],
      telefono: [''],
      mensaje: ['']
    });
  }

 enviando: boolean = false; // 👈 ESTADO

  enviarFormulario(form: any) {

    if (form.invalid) {
      Swal.fire({
        icon: 'warning',
        title: 'Faltan datos',
        text: 'Por favor completá todos los campos',
        confirmButtonColor: '#00cba9'
      });
      return;
    }

    this.enviando = true; // 👈 EMPIEZA ENVÍO

    // Simulación de request
    setTimeout(() => {

      this.enviando = false; // 👈 TERMINA ENVÍO

      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Nos vamos a contactar con vos a la brevedad',
        confirmButtonColor: '#00cba9',
        background: '#f8fefe',
        color: '#1f2937',
        customClass: {
          popup: 'rounded-2xl',
          confirmButton: 'rounded-full px-6 py-2'
        }
      });

      form.reset();

    }, 1500);
  }

}
