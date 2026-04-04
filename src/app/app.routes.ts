import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { menuGuard } from './core/guards/menu.guard';

export const routes: Routes = [

  // ✅ LOGIN afuera
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component')
        .then(m => m.LoginComponent)
  },
  {
    path: 'inicio',
    loadComponent: () =>
      import('./features/inicio/pages/inicio/inicio.component')
        .then(m => m.InicioComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./features/nosotros/pages/nosotros/nosotros.component')
        .then(m => m.NosotrosComponent)
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./features/servicios/pages/servicios/servicios.component')
        .then(m => m.ServiciosComponent)
  },
  {
    path: 'planes',
    loadComponent: () =>
      import('./features/planes/pages/planes/planes.component')
        .then(m => m.PlanesComponent)
  },

  // ✅ default
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // ✅ fallback (MUY recomendado)
  { path: '**', redirectTo: 'inicio' }
];
