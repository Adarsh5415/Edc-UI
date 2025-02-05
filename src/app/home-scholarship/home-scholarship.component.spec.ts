import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeScholarshipComponent } from './home-scholarship.component';

describe('HomeScholarshipComponent', () => {
  let component: HomeScholarshipComponent;
  let fixture: ComponentFixture<HomeScholarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeScholarshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
