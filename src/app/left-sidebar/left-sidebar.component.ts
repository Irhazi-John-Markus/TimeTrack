import { CommonModule } from '@angular/common';
import { Component, input, output, TrackByFunction } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-tachometer-alt',
      label: 'Dashboard',
    },
    {
      routeLink: 'leave-tickets',
      icon: 'fal fa-ticket-alt',
      label: 'Leave Tickets',
    },
    {
      routeLink: 'vacation',
      icon: 'fal fa-calendar-alt',
      label: 'Calendar',
    },
    {
      routeLink: 'Summary',
      icon: 'fal fa-chart-bar',
      label: 'Summary',
    },
  ];
  trackByFn!: TrackByFunction<{ routeLink: string; icon: string; label: string; }>;

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}