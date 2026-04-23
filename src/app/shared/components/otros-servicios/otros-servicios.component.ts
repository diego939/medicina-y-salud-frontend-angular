import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Servicio {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-otros-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './otros-servicios.component.html',
  styleUrl: './otros-servicios.component.css'
})
export class OtrosServiciosComponent {
  servicios: Servicio[] = [
    {
      nombre: 'Radiología Digital',
      descripcion: 'Estudios radiológicos de alta precisión para evaluar huesos, tórax y otras estructuras con resultados rápidos.'
    },
    {
      nombre: 'Ecografía General',
      descripcion: 'Evaluación por ultrasonido para órganos y tejidos blandos, ideal para diagnósticos seguros y no invasivos.'
    },
    {
      nombre: 'Kinesiología',
      descripcion: 'Tratamientos personalizados para recuperar movilidad, aliviar dolor y mejorar tu funcionalidad diaria.'
    },
    {
      nombre: 'Tomografía',
      descripcion: 'Imágenes por cortes de alta definición para detectar lesiones internas y apoyar diagnósticos complejos.'
    },
    {
      nombre: 'Resonancia Magnética',
      descripcion: 'Estudios detallados de tejidos y estructuras internas sin radiación ionizante, con excelente definición.'
    },
    {
      nombre: 'Ecografía Doppler',
      descripcion: 'Análisis del flujo sanguíneo arterial y venoso para detectar alteraciones circulatorias de forma oportuna.'
    },
    {
      nombre: 'Traumatología',
      descripcion: 'Atención especializada en lesiones óseas, musculares y articulares con enfoque en recuperación integral.'
    },
    {
      nombre: 'Cardiología',
      descripcion: 'Control y seguimiento de la salud cardiovascular con evaluación clínica y orientación preventiva.'
    },
    {
      nombre: 'Análisis Clínicos',
      descripcion: 'Pruebas de laboratorio confiables para apoyar diagnósticos y monitorear tu estado de salud general.'
    },
    {
      nombre: 'Rehabilitación Deportiva',
      descripcion: 'Programas de recuperación para deportistas enfocados en volver a la actividad con seguridad y rendimiento.'
    },
    {
      nombre: 'Fisioterapia',
      descripcion: 'Terapias físicas orientadas a reducir el dolor, recuperar función y prevenir recaídas.'
    },
    {
      nombre: 'Diagnóstico por Imágenes',
      descripcion: 'Servicios integrales de imagenología para detectar y evaluar patologías con respaldo profesional.'
    }
  ];

  accordionAbierto = 0;

  toggleAccordion(indice: number): void {
    this.accordionAbierto = this.accordionAbierto === indice ? -1 : indice;
  }
}
