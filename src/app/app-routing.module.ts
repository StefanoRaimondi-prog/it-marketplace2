import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'professional',
    loadChildren: () =>
      import('./features/professional/professional.module').then(m => m.ProfessionalModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'servizi', // Nuova rotta per la sezione Servizi
    loadChildren: () =>
      import('./features/client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'professionisti', // Nuova rotta per la sezione Professionisti
    loadChildren: () =>
      import('./features/professional/professional.module').then(m => m.ProfessionalModule)
  },
  {
    path: 'docenti', // Nuova rotta per la sezione Docenti
    loadChildren: () =>
      import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
