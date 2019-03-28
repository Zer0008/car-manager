import { TestBed } from '@angular/core/testing';

import { RequestInterventionService } from './request-intervention.service';

describe('RequestInterventionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestInterventionService = TestBed.get(RequestInterventionService);
    expect(service).toBeTruthy();
  });
});
