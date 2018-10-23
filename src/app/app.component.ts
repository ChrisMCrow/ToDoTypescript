import { Component } from '@angular/core';
import { Task } from './models/to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  tasks: Task[] = [
    new Task('Finish homework', 'high'),
    new Task('Begin brainstorming', 'medium'),
    new Task('Add README', 'low')
  ]
}
