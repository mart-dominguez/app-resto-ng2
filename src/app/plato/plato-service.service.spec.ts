import { TestBed, inject } from '@angular/core/testing';

import { PlatoServiceService } from './plato-service.service';

describe('PlatoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatoServiceService]
    });
  });

  it('should be created', inject([PlatoServiceService], (service: PlatoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
