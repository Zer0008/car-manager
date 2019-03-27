import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnoncesInterventionListComponent } from './annonces-intervention-list.component';

describe('AnnoncesInterventionListComponent', () => {
  let component: AnnoncesInterventionListComponent;
  let fixture: ComponentFixture<AnnoncesInterventionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnoncesInterventionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnoncesInterventionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
