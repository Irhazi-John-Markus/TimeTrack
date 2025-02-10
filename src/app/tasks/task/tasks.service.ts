import {Injectable} from '@angular/core';

import { type NewTaskData } from "../new-task/new-task.model";

@Injectable({providedIn:'root'})
 export class TasksService {
    private tasks = [
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
      ];
  userId!: string;

      constructer (){
        const tasks = localStorage.getItem('tasks');

        if (tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

      getUserTasks(userId:string){
        return this.tasks.filter(task => task.userId === userId)
      }

      addTask(taskData: NewTaskData, userId:string){
        this.tasks.unshift({
            id:new Date().getTime().toString(),
            userId: this.userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date,
        });
        this.saveTasks();
    }

    removeTask(id:string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
    }
    
    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}