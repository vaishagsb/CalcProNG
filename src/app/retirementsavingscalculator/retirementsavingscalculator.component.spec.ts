import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementsavingscalculatorComponent } from './retirementsavingscalculator.component';

describe('RetirementsavingscalculatorComponent', () => {
  let component: RetirementsavingscalculatorComponent;
  let fixture: ComponentFixture<RetirementsavingscalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RetirementsavingscalculatorComponent]
    });
    fixture = TestBed.createComponent(RetirementsavingscalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
