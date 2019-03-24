import { TestBed } from '@angular/core/testing';

import { AnnoncesInterventionsService } from './annonces-interventions.service';

describe('AnnoncesInterventionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnoncesInterventionsService = TestBed.get(AnnoncesInterventionsService);
    expect(service).toBeTruthy();
  });
});
