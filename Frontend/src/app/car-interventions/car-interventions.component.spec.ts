import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInterventionsComponent } from './car-interventions.component';

describe('CarInterventionsComponent', () => {
  let component: CarInterventionsComponent;
  let fixture: ComponentFixture<CarInterventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarInterventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
