import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceVenteCreationComponent } from './annonce-vente-creation.component';

describe('AnnonceVenteCreationComponent', () => {
  let component: AnnonceVenteCreationComponent;
  let fixture: ComponentFixture<AnnonceVenteCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceVenteCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceVenteCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
