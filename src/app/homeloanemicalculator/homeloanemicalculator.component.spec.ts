import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloanemicalculatorComponent } from './homeloanemicalculator.component';

describe('HomeloanemicalculatorComponent', () => {
  let component: HomeloanemicalculatorComponent;
  let fixture: ComponentFixture<HomeloanemicalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeloanemicalculatorComponent]
    });
    fixture = TestBed.createComponent(HomeloanemicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
