import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammerModule } from '@angular/platform-browser';
import { HostListener } from '@angular/core';



export interface Slide{
  imgSrc: string;
  imgAlt: String;
}

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, HammerModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit {

  selectedIndex = 0;

  ngOnInit() {
    // if (typeof window !== 'undefined') {
    //   import('hammerjs').then(() => {
    //     console.log('Hammer.js is loaded');
    //   });
    // }
    // this.showNext(2);
  }

  // Touch control

  private touchStartX = 0;
  private touchEndX = 0;


  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log("Clicked!");
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe(this.selectedIndex);
  }

  private handleSwipe(i: number) {
    const diff = this.touchStartX - this.touchEndX;
    if (diff > 50) {
      console.log("Swiped Left!");
      this.showNext(i);
    } else if (diff < -50) {
      console.log("Swiped Right!");
      this.showPrev(i);
    }
  }
  
 
  // Mouse Control and touch


  // private startX = 0;
  // private endX = 0;
  // private isMouseDown = false;

  // // ✅ Click Event
  // @HostListener('click', ['$event'])
  // onClick(event: MouseEvent) {
  //   console.log("Clicked!");
  // }

  // // ✅ Touch Start
  // @HostListener('touchstart', ['$event'])
  // onTouchStart(event: TouchEvent) {
  //   this.startX = event.changedTouches[0].screenX;
  // }

  // // ✅ Touch End
  // @HostListener('touchend', ['$event'])
  // onTouchEnd(event: TouchEvent) {
  //   this.endX = event.changedTouches[0].screenX;
  //   this.handleSwipe(this.selectedIndex);
  // }

  // // ✅ Mouse Down (Start Swipe)
  // @HostListener('mousedown', ['$event'])
  // onMouseDown(event: MouseEvent) {
  //   this.isMouseDown = true;
  //   this.startX = event.clientX;
  // }

  // // ✅ Mouse Move (Track Movement)
  // @HostListener('mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   if (this.isMouseDown) {
  //     this.endX = event.clientX;
  //   }
  // }

  // // ✅ Mouse Up (End Swipe)
  // @HostListener('mouseup', ['$event'])
  // onMouseUp(event: MouseEvent) {
  //   this.isMouseDown = false;
  //   this.handleSwipe(this.selectedIndex);
  // }

  // // ✅ Swipe Detection Logic
  // private handleSwipe(i: number) {
  //   const diff = this.startX - this.endX;
  //   if (diff > 50) {
  //         console.log("Swiped Left!");
  //         this.showNext(i);
  //       } else if (diff < -50) {
  //         console.log("Swiped Right!");
  //         this.showPrev(i);
  //       }
  // }

  

  

  showPrev(i: number){
    if(this.selectedIndex>0){
      this.selectedIndex=i-1;
    }
  }

  showNext(i: number){
    if(this.selectedIndex<this.images?.length-1){
      this.selectedIndex=i+1;
    }
  }

  images= [
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image1'

    },
    {

      imgSrc:'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
      imgAlt:'image2'

    },
    {

      imgSrc:'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
      imgAlt:'image3'

    },
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image4'

    },
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image5'

    },
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image6'

    },
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image7'

    },
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image8'

    },
    {

      imgSrc:'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
      imgAlt:'image9'

    },
    {

      imgSrc:'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
      imgAlt:'image10'

    },
  ]


}
