import { TestBed } from '@angular/core/testing';

import { Instalacoes.ServiceService } from './instalacoes.service.service';

describe('Instalacoes.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Instalacoes.ServiceService = TestBed.get(Instalacoes.ServiceService);
    expect(service).toBeTruthy();
  });
});
