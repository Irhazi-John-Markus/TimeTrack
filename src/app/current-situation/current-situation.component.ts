import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchFilterComponent } from "../search-filter/search-filter.component";


@Component({
  selector: 'app-current-situation',
  templateUrl: './current-situation.component.html',
  styleUrls: ['./current-situation.component.css'],
  imports: [CommonModule, SearchFilterComponent]
})
export class CurrentSituationComponent {
  results: any[] = [
    { name: 'Item 1', date: '2023-01-01', status: 'active' },
    { name: 'Item 2', date: '2023-01-02', status: 'inactive' },
    // Add more items as needed
  ];

  filteredResults: any[] = [...this.results];

  applyFilter(filter: { search: string, date: Date, status: string }) {
    this.filteredResults = this.results.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(filter.search.toLowerCase());
      const matchesDate = new Date(item.date).toDateString() === filter.date.toDateString();
      const matchesStatus = filter.status === 'all' || item.status === filter.status;
      return matchesSearch && matchesDate && matchesStatus;
    });
  }
}
