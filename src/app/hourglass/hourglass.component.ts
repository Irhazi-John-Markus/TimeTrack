import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hourglass',
  templateUrl: './hourglass.component.html',
  styleUrls: ['./hourglass.component.css']
})
export class HourglassComponent implements OnChanges {
  @Input() duration: number = 60; 
  @Input() isRunning: boolean = false; 
  animationDuration: string = '60s'; 

  ngOnChanges(changes: SimpleChanges) {
    if (changes['duration']) {
      this.animationDuration = `${this.duration}s`;
    }
  }
}