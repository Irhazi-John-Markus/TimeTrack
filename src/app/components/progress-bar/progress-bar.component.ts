import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  private _progress: number = 0;

  @Input()
  set progress(value: number) {
    this._progress = Math.min(100, Math.max(0, Math.round(value))); 
  }

  get progress(): number {
    return this._progress;
  }
}
