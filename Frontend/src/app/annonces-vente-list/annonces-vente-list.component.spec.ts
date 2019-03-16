import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesVenteListComponent } from './annonces-vente-list.component';

describe('AnnoncesVenteListComponent', () => {
  let component: AnnoncesVenteListComponent;
  let fixture: ComponentFixture<AnnoncesVenteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesVenteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesVenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
