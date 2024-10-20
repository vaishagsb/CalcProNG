import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixeddepositcalculatorComponent } from './fixeddepositcalculator.component';

describe('FixeddepositcalculatorComponent', () => {
  let component: FixeddepositcalculatorComponent;
  let fixture: ComponentFixture<FixeddepositcalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixeddepositcalculatorComponent]
    });
    fixture = TestBed.createComponent(FixeddepositcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
