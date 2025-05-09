import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CurrentSituationComponent } from "../current-situation/current-situation.component";
import { SearchFilterComponent } from "../search-filter/search-filter.component";
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-summary',
  imports: [
    MatTabsModule,
    CurrentSituationComponent,
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule
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
filter: { search: string; startDate: Date | null; endDate: Date | null; status: string } = {
  search: '',
  startDate: null,
  endDate: null,
  status: ''
};
statusOptions: any;
 
  results: any[] = [
    { date: '2025-01-01', entry: '08:00', exit: '16:00', duration: '08:00', workedHours: '08:00', overtime: '00:00' },
    { date: '2025-01-02', entry: '09:00', exit: '17:00', duration: '08:00', workedHours: '08:00', overtime: '00:00' },
    { date: '2025-01-03', entry: '08:30', exit: '15:30', duration: '07:00', workedHours: '07:00', overtime: '00:00' },
    { date: '2025-01-04', entry: '10:00', exit: null, duration: null, workedHours: null, overtime: null },
  ];

  filteredResults: any[] = [...this.results];
  totalWorkedHours: string = '00:00';
  showAllData: boolean = true;

  ngOnInit(): void {
    this.calculateTotalWorkedHours();
  }

  calculateTotalWorkedHours(): void {
    const totalMinutes = this.results.reduce((sum, result) => {
      if (result.workedHours) {
        const [hours, minutes] = result.workedHours.split(':').map(Number);
        return sum + hours * 60 + minutes;
      }
      return sum;
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    this.totalWorkedHours = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  applyFilter(filter: { search: string; startDate: Date | null; endDate: Date | null; status: string }): void {
    this.filteredResults = this.results.filter(item => {
      const matchesSearch = filter.search
        ? Object.values(item).some(value =>
            value?.toString().toLowerCase().includes(filter.search.toLowerCase())
          )
        : true;

      const matchesDateRange = filter.startDate && filter.endDate
        ? this.isWithinDateRange(item.entry, item.exit, filter.startDate, filter.endDate)
        : true;

      const matchesStatus = filter.status && filter.status !== 'all'
        ? item.status === filter.status
        : true;

      return matchesSearch && matchesDateRange && matchesStatus;
    });
  }

  private isWithinDateRange(entry: string | null, exit: string | null, startDate: Date, endDate: Date): boolean {
    const entryDate = entry ? new Date(`1970-01-01T${entry}:00`) : null;
    const exitDate = exit ? new Date(`1970-01-01T${exit}:00`) : null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (entryDate && exitDate) {
      return entryDate >= start && exitDate <= end;
    } else if (entryDate) {
      return entryDate >= start && entryDate <= end;
    } else if (exitDate) {
      return exitDate >= start && exitDate <= end;
    }
    return false;
  }

  edit(result: any) {
    const newEntry = prompt('Enter new entry time (HH:mm):', result.entry);
    if (newEntry) {
      result.entry = newEntry;
    }

    const newExit = prompt('Enter new exit time (HH:mm):', result.exit);
    if (newExit) {
      result.exit = newExit;
    }

    if (result.entry && result.exit) {
      const entryTime = new Date(`1970-01-01T${result.entry}:00`);
      const exitTime = new Date(`1970-01-01T${result.exit}:00`);
      const durationMs = exitTime.getTime() - entryTime.getTime();
      const durationHours = durationMs / (1000 * 60 * 60);

      result.duration = durationHours.toFixed(2);
      result.workedHours = result.duration; 
      result.overtime = (durationHours > 8 ? (durationHours - 8).toFixed(2) : '00:00');
    }

    console.log('Updated result:', result);
    this.calculateTotalWorkedHours(); 
  }

  createNewFilter(): void {
    const newEntry = prompt('Enter new entry time (HH:mm):', '08:00');
    const newExit = prompt('Enter new exit time (HH:mm):', '16:00');
    const newDate = prompt('Enter the date (YYYY-MM-DD):', new Date().toISOString().split('T')[0]);

    if (newEntry && newExit && newDate) {
      const entryTime = new Date(`1970-01-01T${newEntry}:00`);
      const exitTime = new Date(`1970-01-01T${newExit}:00`);
      const durationMs = exitTime.getTime() - entryTime.getTime();
      const durationHours = durationMs / (1000 * 60 * 60);

      const newFilter = {
        date: newDate,
        entry: newEntry,
        exit: newExit,
        duration: durationHours.toFixed(2),
        workedHours: durationHours.toFixed(2),
        overtime: durationHours > 8 ? (durationHours - 8).toFixed(2) : '00:00',
      };

      this.results.push(newFilter);
      this.filteredResults = [...this.results];
      this.calculateTotalWorkedHours();
    }
  }

  toggleDataVisibility(): void {
    this.showAllData = !this.showAllData;
  }

  deleteEntry(index: number): void {
    if (confirm('Are you sure you want to delete this entry?')) {
      this.results.splice(index, 1); 
      this.filteredResults = [...this.results]; 
      this.calculateTotalWorkedHours(); 
    }
  }
  
}
