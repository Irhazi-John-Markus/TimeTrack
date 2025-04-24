import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CurrentSituationComponent } from "../current-situation/current-situation.component";
import { VacationSummaryComponent } from "../vacation-summary/vacation-summary.component";
import { LeaveTicketsComponent } from "../leave-tickets/leave-tickets.component";

@Component({
  selector: 'app-summary',
  imports: [
    MatTabsModule,
      CurrentSituationComponent,
      VacationSummaryComponent,
      LeaveTicketsComponent,
      CommonModule,
      MatIconModule,
      RouterModule
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  showAdvancedTab: boolean = true;
  tabs = [
    { label: 'Current Situation', component: 'current-situation', disabled: false },
    { label: 'Vacation Summary', component: 'vacation-summary', disabled: false },
    { label: 'Leave Tickets', component: 'leave-tickets', disabled: false }
  ];
}
