import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from '../layout/left-sidebar/left-sidebar.component';
import { MainComponent } from './main/main.component';
import { HourglassComponent} from './hourglass/hourglass.component';
import { TimerComponent } from './timer/timer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    LeftSidebarComponent,
    MainComponent,
    HourglassComponent,
    TimerComponent,
    ProgressBarComponent

  ],
  providers: [],
  bootstrap: [ ]
})
export class AppModule { }