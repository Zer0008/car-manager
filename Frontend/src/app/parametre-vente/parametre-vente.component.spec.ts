import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreVenteComponent } from './parametre-vente.component';

describe('ParametreVenteComponent', () => {
  let component: ParametreVenteComponent;
  let fixture: ComponentFixture<ParametreVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
