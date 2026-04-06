import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-otros-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otros-servicios.component.html',
  styleUrl: './otros-servicios.component.css'
})
export class OtrosServiciosComponent {
  servicios: string[] = [
  'Radiología Digital',
  'Ecografía General',
  'Kinesiología',
  'Tomografía',
  'Resonancia Magnética',
  'Ecografía Doppler',
  'Traumatología',
  'Cardiología',
  'Análisis Clínicos',
  'Rehabilitación Deportiva',
  'Fisioterapia',
  'Diagnóstico por Imágenes'
];
}
