import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriecalculatorComponent } from './caloriecalculator.component';

describe('CaloriecalculatorComponent', () => {
  let component: CaloriecalculatorComponent;
  let fixture: ComponentFixture<CaloriecalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaloriecalculatorComponent]
    });
    fixture = TestBed.createComponent(CaloriecalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
