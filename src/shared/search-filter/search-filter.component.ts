import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class SearchFilterComponent {
  @Output() filterChange = new EventEmitter<{ search: string, date: Date, status: string }>();

  search: string = '';
  date: Date | null = null;
  status: string = 'all';

  applyFilter(search: string) {
    this.search = search;
    this.emitFilterChange();
  }

  applyDateFilter(event: any) {
    this.date = event.value;
    this.emitFilterChange();
  }

  applyStatusFilter(event: any) {
    this.status = event.value;
    this.emitFilterChange();
  }

  emitFilterChange() {
    this.filterChange.emit({ search: this.search, date: this.date ?? new Date(), status: this.status });
  }
}
