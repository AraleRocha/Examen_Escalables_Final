import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-controls',
  standalone: true,
  templateUrl: './task-controls-component.html',
  styleUrl: './task-controls-component.css',
})
export class TaskControlsComponent {
  @Output() filterChanged = new EventEmitter<'completed' | 'pending'>();

  showCompleted(): void { this.filterChanged.emit('completed'); }
  showPending(): void { this.filterChanged.emit('pending'); }
}