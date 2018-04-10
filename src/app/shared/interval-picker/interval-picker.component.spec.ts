import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalPickerComponent } from './interval-picker.component';

describe('IntervalPickerComponent', () => {
  let component: IntervalPickerComponent;
  let fixture: ComponentFixture<IntervalPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
