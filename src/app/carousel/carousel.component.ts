// import { Component, AfterViewInit, Inject, PLATFORM_ID, NgZone, OnDestroy } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';

// @Component({
//   selector: 'app-carousel',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './carousel.component.html',
//   styleUrls: ['./carousel.component.css']
// })
// export class CarouselComponent implements AfterViewInit, OnDestroy {
//   currentIndex = 0;
//   slidesPerView = 3; 
//   slides = [
//     { text: 'Slide 1', color: 'lightcoral' },
//     { text: 'Slide 2', color: 'lightblue' },
//     { text: 'Slide 3', color: 'lightgreen' },
//     { text: 'Slide 4', color: 'lightpink' },
//     { text: 'Slide 5', color: 'lightyellow' },
//     { text: 'Slide 6', color: 'lightgray' },
//     { text: 'Slide 7', color: 'lightcyan' },
//     { text: 'Slide 8', color: 'lightseagreen' },
//     { text: 'Slide 9', color: 'lightsalmon' }
//   ];
//   private intervalId: any;
//   totalSlides: number;

//   constructor(@Inject(PLATFORM_ID) private platformId: object, private zone: NgZone) {
//     this.totalSlides = this.slides.length;
//   }

//   ngAfterViewInit() {
//     if (isPlatformBrowser(this.platformId)) {
//       this.zone.runOutsideAngular(() => {
//         this.intervalId = setInterval(() => {
//           this.nextSlide();
//         }, 3000);
//       });
//     }
//   }

//   nextSlide() {
//     if (this.currentIndex + this.slidesPerView >= this.totalSlides) {
//       setTimeout(() => {
//         this.currentIndex = 0; 
//       }, 500); 
//     } else {
//       this.currentIndex += this.slidesPerView; 
//     }
//   }
  
  

//   prevSlide() {
//     if (this.currentIndex === 0) {
//       this.currentIndex = this.totalSlides - this.slidesPerView; // Move to last set of slides
//     } else {
//       this.currentIndex -= this.slidesPerView;
//     }
//   }

//   ngOnDestroy() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//     }
//   }
// }
import { SwiperModule } from 'swiper/angular';  // Correct import path
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';  // Core Swiper imports

