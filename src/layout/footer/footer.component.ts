import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @Input() isLeftSidebarCollapsed: boolean = false;
  @Input() screenWidth: number = 0;
  currentYear: number = new Date().getFullYear();

}
