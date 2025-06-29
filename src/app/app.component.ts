import { Component, HostListener, OnInit, signal } from '@angular/core';
import { LeftSidebarComponent } from '../layout/left-sidebar/left-sidebar.component';
import { MainComponent } from './main/main.component';
import { ProgressBarComponent } from "./components/progress-bar/progress-bar.component";
import { TimerComponent } from "./components/timer/timer.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from "../layout/footer/footer.component";
import { HourglassComponent } from "./components/hourglass/hourglass.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    MainComponent,
    ProgressBarComponent,
    TimerComponent,
    MatIconModule,
    MatButtonModule,
    FooterComponent,
    HourglassComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);
  title = 'TimeTrack';
  isDarkTheme = localStorage.getItem('theme') === 'dark';
timer: any;

  constructor() {
    this.applyTheme();
  }
   
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    this.applyTheme();
  }
  
  applyTheme() {
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}


