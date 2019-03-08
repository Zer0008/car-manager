import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSetViewComponent } from './technical-set-view.component';

describe('TechnicalSetViewComponent', () => {
  let component: TechnicalSetViewComponent;
  let fixture: ComponentFixture<TechnicalSetViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalSetViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSetViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
