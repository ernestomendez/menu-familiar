import { Component, OnInit } from '@angular/core';
import { IHorarioDeComida } from '../../shared/model/horario-de-comida.model';
import { HorarioDeComidaService } from '../../services/horario-de-comida.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-horario-de-comida-create',
  templateUrl: './horario-de-comida-create.component.html',
  styleUrls: ['./horario-de-comida-create.component.css']
})
export class HorarioDeComidaCreateComponent implements OnInit {
  public horarioForm: FormGroup;

  constructor(private location: Location, private horarioDeComidaService: HorarioDeComidaService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.horarioForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      active: new FormControl(false)
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.horarioForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public createHorario = (horarioFormValue) => {
    if (this.horarioForm.valid) {
      console.log('form valid');
      this.executeCreateHorario(horarioFormValue);
    }
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  private executeCreateHorario = (horarioFormValue) => {
    const horario: IHorarioDeComida = {
      name: horarioFormValue.name,
      active: horarioFormValue.active
    };

    const apiUrl = `api/v1/horariodecomida`;
    console.log('apiUrl: ', apiUrl);
    this.horarioDeComidaService.create(apiUrl, horario)
      .subscribe(res => {
        console.log('response: ', res);
        this.openSnackBar('Horario de comida added.', '');
        this.location.back();
      },
      (error => {
        console.log('error');
        this.location.back();
      }));
  }

}
