import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { IHorarioDeComida } from '../../shared/model/horario-de-comida.model';
import { HorarioDeComidaService } from '../../services/horario-de-comida.service';
import { Observable } from 'rxjs';
import { ErrorHandlerService } from '../../shared/error-handler.service';

@Component({
  selector: 'app-horario-de-comida',
  templateUrl: './horario-de-comida.component.html',
  styleUrls: ['./horario-de-comida.component.css']
})
export class HorarioDeComidaComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['id', 'name', 'active', 'update', 'delete'];

  public dataSource = new MatTableDataSource<IHorarioDeComida>();

  @ViewChild(MatSort) sort: MatSort;

  constructor(private horarioDeComidaService: HorarioDeComidaService, private errorService: ErrorHandlerService) { }

  ngOnInit() {
    this.getAllHorarios();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public getAllHorarios(): Observable<IHorarioDeComida[]> {
    console.log('aquí toy');
    this.horarioDeComidaService.getHorarios('api/v1/horariodecomida')
      .subscribe(
        (res: HttpResponse<IHorarioDeComida[]>) => {
          this.dataSource.data = res.body as IHorarioDeComida[];
        },
        (res: HttpErrorResponse)  => {
          this.errorService.handleError(res.error);
        }
      );
    return;
  }
}
