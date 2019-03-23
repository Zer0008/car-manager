import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRequestInterventionsComponent } from './car-request-interventions.component';

describe('CarRequestInterventionsComponent', () => {
  let component: CarRequestInterventionsComponent;
  let fixture: ComponentFixture<CarRequestInterventionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRequestInterventionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRequestInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
