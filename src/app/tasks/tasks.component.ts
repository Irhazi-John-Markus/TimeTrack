import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required:true}) userId! :string;
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
    return this.tasks.filter((task) => task.userId ===this.userId );
  }
  onCompleteTask(id:string) {
    this.tasks = this.tasks.filter((task) => task.id !==id);
  }
  onStartAddTask() {
    this.isAddingTask = false;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    })
    this.isAddingTask = false;
  }
}
