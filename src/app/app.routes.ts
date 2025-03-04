import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveTicketsComponent } from './leave-tickets/leave-tickets.component';
import { VacationSummaryComponent } from './vacation-summary/vacation-summary.component';
import { SummaryComponent } from './summary/summary.component';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leave-tickets', component: LeaveTicketsComponent },
  { path: 'vacation', component: VacationSummaryComponent },
  { path: 'Summary', component: SummaryComponent },
];