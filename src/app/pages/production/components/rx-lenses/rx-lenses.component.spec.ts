import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxLensesComponent } from './rx-lenses.component';

describe('RxLensesComponent', () => {
  let component: RxLensesComponent;
  let fixture: ComponentFixture<RxLensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxLensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
