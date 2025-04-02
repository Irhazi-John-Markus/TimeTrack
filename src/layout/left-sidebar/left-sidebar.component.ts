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
      routeLink: 'login', 
      icon: 'account_circle',
      label: 'Login ',
    },
    {
      routeLink: 'dashboard',
      icon: 'dashboard',
      label: 'Dashboard',
    },
    {
      routeLink: 'leave-tickets',
      icon: 'event_note',
      label: 'Leave Tickets',
    },
    {
      routeLink: 'vacation',
      icon: 'beach_access',
      label: 'Calendar',
    },
    {
      routeLink: 'Summary',
      icon: 'cloud',
      label: 'Summary',
    },
    {
      routeLink: 'Search-filter',
      icon: 'search',
      label: 'Search-Filter',
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