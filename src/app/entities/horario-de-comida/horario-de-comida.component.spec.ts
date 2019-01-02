import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioDeComidaComponent } from './horario-de-comida.component';

describe('HorariosDeComidaComponent', () => {
  let component: HorarioDeComidaComponent;
  let fixture: ComponentFixture<HorarioDeComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioDeComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioDeComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
