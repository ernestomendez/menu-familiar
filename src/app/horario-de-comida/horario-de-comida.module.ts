import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioDeComidaRoutingModule } from './horario-de-comida-routing.module';
import { HorarioDeComidaComponent } from './horario-de-comida/horario-de-comida.component';
import { MaterialModule } from '../material/material.module';
import { HorarioDeComidaDetailsComponent } from './horario-de-comida-details/horario-de-comida-details.component';

@NgModule({
  imports: [
    CommonModule,
    HorarioDeComidaRoutingModule,
    MaterialModule
  ],
  declarations: [HorarioDeComidaComponent, HorarioDeComidaDetailsComponent]
})
export class HorarioDeComidaModule { }
