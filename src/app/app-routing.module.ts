import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HorarioDeComidaComponent } from './entities/horario-de-comida/horario-de-comida.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './error-pages/server-error/server-error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'hora', component: HorarioDeComidaComponent },
  {path: '404', component: NotFoundComponent },
  {path: '500', component: ServerErrorComponent },
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/404', pathMatch: 'full' }
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
