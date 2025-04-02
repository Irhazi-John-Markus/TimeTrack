import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from '../layout/left-sidebar/left-sidebar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from './main/main.component';
import { HourglassComponent} from './hourglass/hourglass.component';
import { TimerComponent } from './timer/timer.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { LoginComponent } from './auth/login/login.component'; 
import { RegisterComponent } from './auth/register/register.component';
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
    FooterComponent,
    MainComponent,
    HourglassComponent,
    TimerComponent,
    ProgressBarComponent,
    LoginComponent,
    RegisterComponent


  ],
  providers: [],
  bootstrap: [ ]
})
export class AppModule { }