import { TestBed } from '@angular/core/testing';

import { HorarioDeComidaService } from './horario-de-comida.service';

describe('HorarioDeComidaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HorarioDeComidaService = TestBed.get(HorarioDeComidaService);
    expect(service).toBeTruthy();
  });
});
