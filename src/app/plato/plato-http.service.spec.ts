import { TestBed, inject } from '@angular/core/testing';

import { PlatoHttpService } from './plato-http.service';

describe('PlatoHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatoHttpService]
    });
  });

  it('should be created', inject([PlatoHttpService], (service: PlatoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
