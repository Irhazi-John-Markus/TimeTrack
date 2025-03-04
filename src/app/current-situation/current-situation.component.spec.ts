import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSituationComponent } from './current-situation.component';

describe('CurrentSituationComponent', () => {
  let component: CurrentSituationComponent;
  let fixture: ComponentFixture<CurrentSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentSituationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
