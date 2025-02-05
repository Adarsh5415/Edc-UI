import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholrshipCountdownComponent } from './scholrship-countdown.component';

describe('ScholrshipCountdownComponent', () => {
  let component: ScholrshipCountdownComponent;
  let fixture: ComponentFixture<ScholrshipCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScholrshipCountdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScholrshipCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
