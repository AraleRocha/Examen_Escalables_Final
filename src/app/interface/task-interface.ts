export interface TaskInterface { //Le cambie el nombre por que cree el archivo con ese nombre
  title: string;
  priority: 'Low' | 'Medium' | 'High';
  completed: boolean;
}