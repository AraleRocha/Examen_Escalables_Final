import { Injectable, signal } from '@angular/core';
import { TaskInterface } from './interface/task-interface';
//Se me olvido ponerlo en una carpeta al momento de crear y lo puse directo en app, por eso no tiene carpeta en la ruta de importacion
@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks = signal<TaskInterface[]>([//Tareas de ejemplo
    { title: 'Aprender Angular', priority: 'High', completed: false },
    { title: 'Hacer de comer', priority: 'Medium', completed: true },
    { title: 'Leer un libro', priority: 'Low', completed: false },
  ]);

  addTask(task: TaskInterface): void {
    this.tasks.update(current => [...current, task]);
  }
}