import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceInterventionCreationComponent } from './annonce-intervention-creation.component';

describe('AnnonceInterventionCreationComponent', () => {
  let component: AnnonceInterventionCreationComponent;
  let fixture: ComponentFixture<AnnonceInterventionCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnonceInterventionCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceInterventionCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
