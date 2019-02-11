import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { IHorarioDeComida } from '../shared/model/horario-de-comida.model';
import { Observable } from 'rxjs';


type EntityResponseType = HttpResponse<IHorarioDeComida>;
type EntityArrayResponseType = HttpResponse<IHorarioDeComida[]>;

@Injectable({
  providedIn: 'root'
})
export class HorarioDeComidaService {

  constructor(private http: HttpClient) { }

  public getHorarios(route: string): Observable<EntityArrayResponseType> {
    const url = this.createCompleteRoute(route, environment.urlAddress);
    console.log(url);
    return this.http
      .get<IHorarioDeComida[]>(url, { observe: 'response' });
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }

  private generateHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }

}
