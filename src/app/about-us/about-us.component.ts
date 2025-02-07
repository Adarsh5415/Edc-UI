import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ToastComponent } from '../toast/toast.component';
import { ScrollableAboutJourneyComponent } from '../scrollable-about-journey/scrollable-about-journey.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ImageSliderComponent, ToastComponent, ScrollableAboutJourneyComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
