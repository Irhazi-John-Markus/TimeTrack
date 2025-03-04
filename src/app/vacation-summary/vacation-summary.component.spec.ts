import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationSummaryComponent } from './vacation-summary.component';

describe('VacationSummaryComponent', () => {
  let component: VacationSummaryComponent;
  let fixture: ComponentFixture<VacationSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
