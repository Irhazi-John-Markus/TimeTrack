import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  duration: number = 60; // 60 seconds
  isRunning: boolean = false;
  @Output() timerStarted = new EventEmitter<void>();
  @Output() timerStopped = new EventEmitter<void>();
  @Output() progressChange = new EventEmitter<number>();

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    const savedTime = localStorage.getItem('elapsedTime');
    if (savedTime) {
      this.elapsedTime = parseInt(savedTime, 10);
      this.progress = (this.elapsedTime / (this.duration * 1000)) * 100;
    }
  }

  startTimer() {
    if (!this.startTime) {
      this.startTime = Date.now() - this.elapsedTime;
      this.isRunning = true;
      this.timerInterval = setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime!;
        this.progress = (this.elapsedTime / (this.duration * 1000)) * 100; // Progress for 60 seconds
        this.progressChange.emit(this.progress);
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
  }

  getFormattedTime(): string {
    return (this.elapsedTime / 1000).toFixed(0) + ' seconds';
  }
}
