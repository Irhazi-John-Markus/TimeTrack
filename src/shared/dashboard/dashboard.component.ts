import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../app/timer/timer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  elapsedTime: number = 0;

  constructor(private timerService: TimerService) {}

  ngOnInit() {
    this.timerService.elapsedTime$.subscribe((time: number) => {
      this.elapsedTime = time;
    });
  }

  getFormattedTime(): string {
    return (this.elapsedTime / 1000).toFixed(0) + ' seconds';
  }
}
