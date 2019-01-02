import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HorarioDeComidaComponent } from './entities/horario-de-comida/horario-de-comida.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'hora', component: HorarioDeComidaComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
