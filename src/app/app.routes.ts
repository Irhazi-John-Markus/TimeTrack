import { Routes } from '@angular/router';
import { DashboardComponent } from '../shared/dashboard/dashboard.component';
import { LeaveTicketsComponent } from '../shared/leave-tickets/leave-tickets.component';
import { VacationSummaryComponent } from '../shared/vacation-summary/vacation-summary.component';
import { SummaryComponent } from '../shared/summary/summary.component';
import { InteractiveGridComponent } from '../shared/interactive-grid/interactive-grid.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leave-tickets', component: LeaveTicketsComponent },
  { path: 'vacation', component: VacationSummaryComponent },
  { path: 'Summary', component: SummaryComponent },
  { path: 'Search-filter', component: InteractiveGridComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];