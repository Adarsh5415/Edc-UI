import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ImageSliderComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
