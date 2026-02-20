import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskControlsComponent } from './task-controls-component';

describe('TaskControlsComponent', () => {
  let component: TaskControlsComponent;
  let fixture: ComponentFixture<TaskControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskControlsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
