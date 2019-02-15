import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioDeComidaComponent } from './horario-de-comida/horario-de-comida.component';
import { HorarioDeComidaDetailsComponent } from './horario-de-comida-details/horario-de-comida-details.component';

const routes: Routes = [
  { path: 'horario-de-comida', component: HorarioDeComidaComponent},
  { path: 'details/:id', component: HorarioDeComidaDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioDeComidaRoutingModule { }
