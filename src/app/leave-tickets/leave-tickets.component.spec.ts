import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTicketsComponent } from './leave-tickets.component';

describe('LeaveTicketsComponent', () => {
  let component: LeaveTicketsComponent;
  let fixture: ComponentFixture<LeaveTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
