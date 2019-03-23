import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteVehiculeComponent } from './vente-vehicule.component';

describe('VenteVehiculeComponent', () => {
  let component: VenteVehiculeComponent;
  let fixture: ComponentFixture<VenteVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
