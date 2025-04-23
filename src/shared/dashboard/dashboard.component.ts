import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../app/components/timer/timer.service';

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
    const totalSeconds = Math.floor(this.elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }
}
