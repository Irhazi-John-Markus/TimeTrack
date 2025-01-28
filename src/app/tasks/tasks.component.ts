import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true}) userid! :string;
  @Input({ required:true}) name!: string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Learn the basics',
      dueDate: '2025-08-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master Angular',
      summary: 'Learn the basics',
      dueDate: '2025-10-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master Angular',
      summary: 'Learn the basics',
      dueDate: '2025-15-31'
    },
  ]
  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId ===this.userid );
  }
  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter((task) => task.id !==id);
  }
  onStartAddTask() {
    this.isAddingTask = true;
  }
}
