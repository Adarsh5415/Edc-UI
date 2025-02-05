import { Component } from '@angular/core';
import { ScholrshipCountdownComponent } from '../scholrship-countdown/scholrship-countdown.component';

@Component({
  selector: 'app-home-scholarship',
  standalone: true,
  imports: [ScholrshipCountdownComponent],
  templateUrl: './home-scholarship.component.html',
  styleUrl: './home-scholarship.component.css'
})
export class HomeScholarshipComponent {

}
