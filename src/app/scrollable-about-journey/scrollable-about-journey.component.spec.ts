import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableAboutJourneyComponent } from './scrollable-about-journey.component';

describe('ScrollableAboutJourneyComponent', () => {
  let component: ScrollableAboutJourneyComponent;
  let fixture: ComponentFixture<ScrollableAboutJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollableAboutJourneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollableAboutJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
