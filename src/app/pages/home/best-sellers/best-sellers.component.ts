import { Component } from '@angular/core';
import { ProductCarouselComponent } from "./product-carousel/product-carousel.component";

@Component({
  selector: 'app-best-sellers',
  imports: [ProductCarouselComponent],
  templateUrl: './best-sellers.component.html',
  styleUrl: './best-sellers.component.scss'
})
export class BestSellersComponent {

}
