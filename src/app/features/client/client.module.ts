import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { HomeComponent } from './pages/home/home.component';  // Importa HomeComponent

@NgModule({
  declarations: [
    ServiceCardComponent,  // Solo ServiceCardComponent è dichiarato qui
    HomeComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule  // Qui viene usato il routing per HomeComponent
  ]
})
export class ClientModule { }