import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosDeComidaComponent } from './horarios-de-comida.component';

describe('HorariosDeComidaComponent', () => {
  let component: HorariosDeComidaComponent;
  let fixture: ComponentFixture<HorariosDeComidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariosDeComidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosDeComidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
