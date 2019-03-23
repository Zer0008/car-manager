import { TestBed } from '@angular/core/testing';

import { VenteVehiculeService } from './vente-vehicule.service';

describe('VenteVehiculeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VenteVehiculeService = TestBed.get(VenteVehiculeService);
    expect(service).toBeTruthy();
  });
});
