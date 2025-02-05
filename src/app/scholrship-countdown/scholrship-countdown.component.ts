import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';


// declare function setInterval(): void;

@Component({
  selector: 'app-scholrship-countdown',
  standalone: true,
  imports: [],
  templateUrl: './scholrship-countdown.component.html',
  styleUrl: './scholrship-countdown.component.css'
})
export class ScholrshipCountdownComponent implements AfterViewInit, OnInit{

  @Input() refresh: boolean = false;

  ngOnInit() {
    // Reload the entire page
    // window.location.reload();
  }

  endDate: string = '02/28/2025';

  ngAfterViewInit() {
    // DOM elements
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    const dd = document.getElementById('dd');
    const hh = document.getElementById('hh');
    const mm = document.getElementById('mm');
    const ss = document.getElementById('ss');

    let day_dot = document.querySelector('.day_dot') as HTMLElement;
let hr_dot = document.querySelector('.hr_dot') as HTMLElement;
let min_dot = document.querySelector('.min_dot') as HTMLElement;
let sec_dot = document.querySelector('.sec_dot') as HTMLElement;

    // Countdown logic
    setInterval(() => {
      const now = new Date().getTime(); // Current time
      const countDown = new Date(this.endDate).getTime(); // Target date
      const distance = countDown - now; // Time remaining

      if (distance < 0) {
        // Countdown ended
        days.innerHTML = "0<br><span>Days</span>";
        hours.innerHTML = "0<br><span>Hours</span>";
        minutes.innerHTML = "0<br><span>Minutes</span>";
        seconds.innerHTML = "0<br><span>Seconds</span>";
        return;
      }

      // Time calculations
      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      // Update HTML content
      days.innerHTML = `${d}<br><span style="color: #d3d3d3; font-size: 0.9rem; text-transform: uppercase;">Days</span>`;
      hours.innerHTML = `${h}<br><span style="color: #d3d3d3; font-size: 0.9rem; text-transform: uppercase;">Hours</span>`;
      minutes.innerHTML = `${m}<br><span style="color: #d3d3d3; font-size: 0.9rem; text-transform: uppercase;">Minutes</span>`;
      seconds.innerHTML = `${s}<br><span style="color: #d3d3d3; font-size: 0.9rem; text-transform: uppercase;">Seconds</span>`;



      // Update circular stroke-dashoffset values
      dd.style.strokeDashoffset = `${440 - (440 * d) / 365}`;
      hh.style.strokeDashoffset = `${440 - (440 * h) / 24}`;
      mm.style.strokeDashoffset = `${440 - (440 * m) / 60}`;
      ss.style.strokeDashoffset = `${440 - (440 * s) / 60}`;

      // Update rotation for dots
      day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
      hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
      min_dot.style.transform = `rotateZ(${m * 6}deg)`;
      sec_dot.style.transform = `rotateZ(${s * 6}deg)`;






    }, 1000);
  }
  
}
