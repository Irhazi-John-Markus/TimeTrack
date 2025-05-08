import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CurrentSituationComponent } from "../current-situation/current-situation.component";


@Component({
  selector: 'app-summary',
  imports: [
    MatTabsModule,
      CurrentSituationComponent,
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

  ];
  filteredTabs = [...this.tabs]; 

  filterTabs(searchTerm: string): void {
    this.filteredTabs = this.tabs.filter(tab =>
      tab.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
