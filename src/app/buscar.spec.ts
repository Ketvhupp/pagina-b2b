import { TestBed } from '@angular/core/testing';

import { Buscar } from './service/buscar';

describe('Buscar', () => {
  let service: Buscar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Buscar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
