import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-work-summary',
  templateUrl: './work-summary.component.html',
  styleUrls: ['./work-summary.component.css'],
  imports: [CommonModule, FormsModule, MatIconModule],
})
export class WorkSummaryComponent implements OnInit {
  firstEntry: string | null = null;
  exitTime: string | null = null;
  totalHours: string = '00:00:00';
  remainingTime: string = '00:00:00';
  currentDate: string = '';

  ngOnInit(): void {
    this.currentDate = new Date().toLocaleDateString();
    this.calculateTimes();
  }

  calculateTimes(): void {
    this.firstEntry = '08:00:00';
    this.exitTime = '16:00:00';

    const entryTime = new Date(`1970-01-01T${this.firstEntry}`);
    const exitTime = new Date(`1970-01-01T${this.exitTime}`);
    const totalMilliseconds = exitTime.getTime() - entryTime.getTime();
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    this.totalHours = `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    const workdayMilliseconds = 8 * 60 * 60 * 1000;
    const remainingMilliseconds = workdayMilliseconds - totalMilliseconds;
    const remainingSeconds = Math.max(0, Math.floor(remainingMilliseconds / 1000));
    const remainingHours = Math.floor(remainingSeconds / 3600);
    const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
    const remainingSecs = remainingSeconds % 60;
    this.remainingTime = `${remainingHours.toString().padStart(2, '0')}:${remainingMinutes
      .toString()
      .padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  }
}
