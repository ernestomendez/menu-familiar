import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorarioDeComidaComponent } from './horario-de-comida/horario-de-comida.component';

const routes: Routes = [
  { path: 'horario-de-comida', component: HorarioDeComidaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorarioDeComidaRoutingModule { }
