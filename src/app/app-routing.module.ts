import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedidasComponent } from './medidas/medidas.component';
import { MeasurementUnitsComponent } from './measurement-units/measurement-units.component';

const routes: Routes = [
  {path: 'testRoute', component: MedidasComponent },
  {path: 'units', component: MeasurementUnitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
