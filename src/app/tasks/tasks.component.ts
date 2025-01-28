import { Component,Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { Title } from '@angular/platform-browser';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './task/tasks.service';

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

  constructor(private tasksService: TasksService) {
    
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
  onCompleteTask(id:string) {
  
  }
  onStartAddTask() {
    this.isAddingTask = false;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
