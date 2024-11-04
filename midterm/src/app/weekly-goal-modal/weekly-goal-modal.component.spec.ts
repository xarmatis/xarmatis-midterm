import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyGoalModalComponent } from './weekly-goal-modal.component';

describe('WeeklyGoalModalComponent', () => {
  let component: WeeklyGoalModalComponent;
  let fixture: ComponentFixture<WeeklyGoalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeeklyGoalModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyGoalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
