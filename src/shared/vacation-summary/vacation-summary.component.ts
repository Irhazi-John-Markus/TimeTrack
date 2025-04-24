import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface VacationRequest {
  id: number;
  startDate: Date;
  endDate: Date;
  reason: string;
  status: 'approved' | 'rejected' | 'pending';
}

@Component({
  selector: 'app-vacation-summary',
  templateUrl: './vacation-summary.component.html',
  styleUrls: ['./vacation-summary.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatTableModule,
    CommonModule,
    ReactiveFormsModule
  ]
})

export class VacationSummaryComponent implements OnInit {
  totalDays: number = 30;
  usedDays: number = 10;
  remainingDays: number = this.totalDays - this.usedDays;

  startDate: Date | null = null;
  endDate: Date | null = null;

  vacationForm: FormGroup;
  vacationRequests: VacationRequest[] = [
    { id: 1, startDate: new Date('2023-01-01'), endDate: new Date('2023-01-05'), reason: 'Vacation', status: 'approved' },
    { id: 2, startDate: new Date('2023-02-10'), endDate: new Date('2023-02-15'), reason: 'Family Event', status: 'pending' }
  ];

  displayedColumns: string[] = ['startDate', 'endDate', 'reason', 'status', 'actions'];
summaryItems: any;
dateFields: any;
formFields: any;
tableColumns: any;

  constructor(private fb: FormBuilder) {
    this.vacationForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      reason: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  get progress(): number {
    return (this.usedDays / this.totalDays) * 100;
  }

  applyDateFilter() {
    if (this.startDate && this.endDate) {
      this.vacationRequests = this.vacationRequests.filter(request => 
      request.startDate! >= this.startDate! && request.endDate! <= this.endDate!
      );
    }
    console.log('Filtering from', this.startDate, 'to', this.endDate);
  }

  submitRequest() {
    if (this.vacationForm.valid) {
      const newRequest: VacationRequest = {
        id: this.vacationRequests.length + 1,
        startDate: this.vacationForm.value.startDate,
        endDate: this.vacationForm.value.endDate,
        reason: this.vacationForm.value.reason,
        status: 'pending'
      };
      this.vacationRequests.push(newRequest);
      this.vacationForm.reset();
    }
  }

  deleteRequest(id: number) {
    this.vacationRequests = this.vacationRequests.filter(request => request.id !== id);
  }
}
