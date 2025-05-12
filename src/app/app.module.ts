import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LeftSidebarComponent } from '../layout/left-sidebar/left-sidebar.component';
import { HourglassComponent } from './components/hourglass/hourglass.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { MainComponent } from './main/main.component';
import { TimerComponent } from './components/timer/timer.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { LoginComponent } from './auth/login/login.component'; 
import { RegisterComponent } from './auth/register/register.component';
import { routes } from './app.routes';



@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
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