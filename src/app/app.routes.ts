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

  // ✅ default
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  // ✅ fallback (MUY recomendado)
  { path: '**', redirectTo: 'inicio' }
];
