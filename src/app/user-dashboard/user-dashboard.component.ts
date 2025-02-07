import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import {ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScholarshipComponent } from '../home-scholarship/home-scholarship.component';
// import { CarouselComponent } from '../carousel/carousel.component';
import { OnInit } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { ToastComponent } from '../toast/toast.component';



@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule,HomeScholarshipComponent,ToastComponent, ImageSliderComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;
  cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6'];
  isHovered = false;

  scrollLeft() {
    const container = this.carousel.nativeElement;
    container.scrollBy({
      left: -200, // Adjust based on card width
      behavior: 'smooth',
    });
  }

  scrollRight() {
    const container = this.carousel.nativeElement;
    container.scrollBy({
      left: 200, // Adjust based on card width
      behavior: 'smooth',
    });
  }

  pauseScrolling() {
    this.isHovered = true;
  }

  resumeScrolling() {
    this.isHovered = false;
  }

  
}


  


