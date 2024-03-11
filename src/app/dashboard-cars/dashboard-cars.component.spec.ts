import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCarsComponent } from './dashboard-cars.component';

describe('DashboardCarsComponent', () => {
  let component: DashboardCarsComponent;
  let fixture: ComponentFixture<DashboardCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCarsComponent]
    });
    fixture = TestBed.createComponent(DashboardCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
