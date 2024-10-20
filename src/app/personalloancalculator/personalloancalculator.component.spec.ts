import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalloancalculatorComponent } from './personalloancalculator.component';

describe('PersonalloancalculatorComponent', () => {
  let component: PersonalloancalculatorComponent;
  let fixture: ComponentFixture<PersonalloancalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalloancalculatorComponent]
    });
    fixture = TestBed.createComponent(PersonalloancalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
