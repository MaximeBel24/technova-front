import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {

  slides = document.querySelector('.slide');
  dots = document.querySelectorAll('.absolute.bottom-4 button');
  currentSlide = 0;
  slideInterval: any;

  updateSlides() {
    // this.slides.array.forEach(element => {
      
    // });
  }

  previousSlide() {
    throw new Error('Method not implemented.');
  }

  nextSlide() {
    throw new Error('Method not implemented.');
  }

  goToSlide(arg0: number) {
    throw new Error('Method not implemented.');
  }
}
