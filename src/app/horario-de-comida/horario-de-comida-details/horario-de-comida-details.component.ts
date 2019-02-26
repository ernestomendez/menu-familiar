import { Component, OnInit } from '@angular/core';
import { IHorarioDeComida } from '../../shared/model/horario-de-comida.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HorarioDeComidaService } from '../../services/horario-de-comida.service';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Observable } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-horario-de-comida-details',
  templateUrl: './horario-de-comida-details.component.html',
  styleUrls: ['./horario-de-comida-details.component.css']
})
export class HorarioDeComidaDetailsComponent implements OnInit {
  public horarioDeComida: IHorarioDeComida;

  constructor(private horarioDeComidaService: HorarioDeComidaService, private router: Router,
        private activatedRouter: ActivatedRoute, private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getHorarioDeComida();
  }

  private getHorarioDeComida(): Observable<IHorarioDeComida> {
    const id: string = this.activatedRouter.snapshot.params['id'];
    console.log('id: ', id);
    const apiUrl = `api/v1/horariodecomida/${id}`;

    this.horarioDeComidaService.getHorario(apiUrl, id)
      .subscribe(
        (res: HttpResponse<IHorarioDeComida>) => {
          this.horarioDeComida = res.body as IHorarioDeComida;
        },
        (res: HttpErrorResponse) => {
          this.errorHandler.handleError(res.error);
        }
      );

    return;
  }

}
