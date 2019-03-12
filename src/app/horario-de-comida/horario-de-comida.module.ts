import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorarioDeComidaRoutingModule } from './horario-de-comida-routing.module';
import { HorarioDeComidaComponent } from './horario-de-comida/horario-de-comida.component';
import { MaterialModule } from '../material/material.module';
import { HorarioDeComidaDetailsComponent } from './horario-de-comida-details/horario-de-comida-details.component';
import { HorarioDeComidaCreateComponent } from './horario-de-comida-create/horario-de-comida-create.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HorarioDeComidaRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  declarations: [HorarioDeComidaComponent, HorarioDeComidaDetailsComponent, HorarioDeComidaCreateComponent]
})
export class HorarioDeComidaModule { }
