import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TimerService } from './timer.service'
import { HourglassComponent } from '../hourglass/hourglass.component';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  imports: [HourglassComponent]
})
export class TimerComponent implements OnInit {
  startTime: number | null = null;
  elapsedTime: number = 0;
  timerInterval: any;
  progress: number = 0;
  duration: number = 60; 
  isRunning: boolean = false;
  @Output() timerStarted = new EventEmitter<void>();
  @Output() timerStopped = new EventEmitter<void>();
  @Output() progressChange = new EventEmitter<number>();

  constructor(private snackBar: MatSnackBar, private timerService: TimerService) {}

  ngOnInit() {
    const savedTime = localStorage.getItem('elapsedTime');
    if (savedTime) {
      this.elapsedTime = parseInt(savedTime, 10);
      this.progress = (this.elapsedTime / (this.duration * 1000)) * 100;
      this.timerService.setElapsedTime(this.elapsedTime);
    }
  }

  startTimer() {
    if (!this.startTime) {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;
      console.log('Timer started at:', this.startTime);
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime!;
        this.progress = (this.elapsedTime / (this.duration * 1000)) * 100;
        this.progressChange.emit(this.progress);
        this.timerService.setElapsedTime(this.elapsedTime);
        console.log('Elapsed time:', this.elapsedTime);
      }, 1000);
      this.timerStarted.emit();
    }
  }

  stopTimer() {
    if (this.startTime) {
      clearInterval(this.timerInterval);
      this.startTime = null;
      this.isRunning = false;
      this.timerStopped.emit();
      localStorage.setItem('elapsedTime', this.elapsedTime.toString());
      this.snackBar.open('Time recorded successfully!', 'Close', {
        duration: 3000,
      });
      this.timerService.setElapsedTime(this.elapsedTime);
    }
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.startTime = null;
    this.elapsedTime = 0;
    this.progress = 0;
    this.isRunning = false;
    localStorage.removeItem('elapsedTime');
    this.progressChange.emit(this.progress);
    this.timerStopped.emit();
    this.timerService.setElapsedTime(this.elapsedTime);
  }

  getFormattedTime(): string {
    const totalSeconds = Math.floor(this.elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }
}

