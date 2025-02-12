import { Component } from '@angular/core';
import { TestimonialSliderComponent } from "./testimonial-slider/testimonial-slider.component";

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialSliderComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {

}
