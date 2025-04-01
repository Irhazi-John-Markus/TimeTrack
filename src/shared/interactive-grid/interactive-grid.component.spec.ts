import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveGridComponent } from './interactive-grid.component';

describe('InteractiveGridComponent', () => {
  let component: InteractiveGridComponent;
  let fixture: ComponentFixture<InteractiveGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InteractiveGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
