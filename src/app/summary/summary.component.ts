import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
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
      RouterModule
    ],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

}
