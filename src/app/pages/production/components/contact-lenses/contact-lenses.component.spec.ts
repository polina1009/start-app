import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLensesComponent } from './contact-lenses.component';

describe('ContactLensesComponent', () => {
  let component: ContactLensesComponent;
  let fixture: ComponentFixture<ContactLensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactLensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
