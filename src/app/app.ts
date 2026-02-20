import { Component, computed, signal } from '@angular/core';
import { TaskService } from './task-service';
import { TaskFormComponent } from './task-form-component/task-form-component';
import { TaskControlsComponent } from './task-controls-component/task-controls-component';
import { TaskCardComponent } from './task-card-component/task-card-component';
import { TaskInterface } from './interface/task-interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskControlsComponent, TaskCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  filter = signal<'all' | 'completed' | 'pending'>('all');

  constructor(public taskService: TaskService) {}

  filteredTasks = computed(() => {
    const tasks = this.taskService.tasks();
    if (this.filter() === 'completed') return tasks.filter(t => t.completed);
    if (this.filter() === 'pending') return tasks.filter(t => !t.completed);
    return tasks;
  });

  onFilterChanged(f: 'all' | 'completed' | 'pending'): void {
    this.filter.set(f);
  }

  onTaskAdded(task: TaskInterface): void {
    this.taskService.addTask(task);
  }
}