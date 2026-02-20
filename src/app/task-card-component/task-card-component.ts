import { Component, Input } from '@angular/core';
import { TaskInterface } from '../interface/task-interface';

@Component({
  selector: 'app-task-card',
  standalone: true,
  templateUrl: './task-card-component.html',
  styleUrl: './task-card-component.css',
})
export class TaskCardComponent {
  @Input() task!: TaskInterface;
}