import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { IHorarioDeComida } from '../../shared/model/horario-de-comida.model';
import { HorarioDeComidaService } from '../horario-de-comida/horario-de-comida.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-horarios-de-comida',
  templateUrl: './horario-de-comida.component.html',
  styleUrls: ['./horario-de-comida.component.css']
})
export class HorarioDeComidaComponent implements OnInit {

  public displayedColumns = ['id', 'name', 'active', 'update', 'delete'];

  public dataSource = new MatTableDataSource<IHorarioDeComida>();

  constructor(private horarioDeComidaService: HorarioDeComidaService) { }

  ngOnInit() {
    console.log('En el init');
    this.getAllHorarios();
  }

  public getAllHorarios(): Observable<IHorarioDeComida[]> {
    console.log('aquí toy');
    this.horarioDeComidaService.getHorarios('api/v1/horariodecomida')
      .subscribe(
        (res: HttpResponse<IHorarioDeComida[]>) => this.dataSource.data = res.body as IHorarioDeComida[],
        (res: HttpErrorResponse) => console.log(res.message)
       );
    return;
  }

}
