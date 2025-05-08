import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';

interface LeaveTicket {
  id: number;
  startDate: Date;
  endDate: Date;
  reason: string;
  type: string;
  startTime: string;
  endTime: string;
  status: 'approved' | 'pending';
}

@Component({
  selector: 'app-leave-tickets',
  templateUrl: './leave-tickets.component.html',
  styleUrls: ['./leave-tickets.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
  ]
})

export class LeaveTicketsComponent {
  leaveForm: FormGroup;
  leaveTickets: LeaveTicket[] = [
    { id: 1, startDate: new Date('2025-03-01'), endDate: new Date('2025-03-01'), reason: 'Medical', type: 'Medical', startTime: '09:00', endTime: '11:00', status: 'approved' },
    { id: 2, startDate: new Date('2025-04-10'), endDate: new Date('2025-04-10'), reason: 'Personal', type: 'Personal', startTime: '14:00', endTime: '16:00', status: 'pending' }
  ];
  displayedColumns: string[] = ['startDate', 'endDate', 'reason', 'type', 'startTime', 'endTime', 'status', 'actions'];
  isFormVisible: boolean = false; 

  constructor(private fb: FormBuilder) {
    this.leaveForm = this.fb.group({
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      reason: [' ', Validators.required],
      type: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible; 
  }

  submitRequest() {
    if (this.leaveForm.valid) {
      const newTicket: LeaveTicket = {
        id: this.leaveTickets.length + 1,
        startDate: this.leaveForm.value.startDate,
        endDate: this.leaveForm.value.endDate,
        reason: this.leaveForm.value.reason,
        type: this.leaveForm.value.type,
        startTime: this.leaveForm.value.startTime,
        endTime: this.leaveForm.value.endTime,
        status: 'pending'
      };
      this.leaveTickets.push(newTicket);
      this.leaveForm.reset();
      this.isFormVisible = false; 
    }
  }

  deleteTicket(id: number) {
    this.leaveTickets = this.leaveTickets.filter(ticket => ticket.id !== id);
  }
}
