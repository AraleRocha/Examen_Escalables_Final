import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { TaskInterface } from '../interface/task-interface';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-form-component.html',
  styleUrl: './task-form-component.css',
})
export class TaskFormComponent {
  @Output() taskAdded = new EventEmitter<TaskInterface>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      priority: ['Medium' as TaskInterface['priority']],
      completed: [false],
    });
  }

  get titleInvalid(): boolean {
    const ctrl = this.form.get('title')!;
    return ctrl.invalid && ctrl.touched;
  }

  submit(): void {
    if (this.form.invalid) return;
    this.taskAdded.emit(this.form.value as TaskInterface);
    this.form.reset({ title: '', priority: 'Medium', completed: false });
  }
}