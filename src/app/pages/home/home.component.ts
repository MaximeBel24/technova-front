import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { BannerComponent } from "./banner/banner.component";
import { CategoriesComponent } from "./categories/categories.component";
import { BestSellersComponent } from "./best-sellers/best-sellers.component";
import { OffersComponent } from "./offers/offers.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";
import { WhyChooseUsComponent } from "./why-choose-us/why-choose-us.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, CategoriesComponent, BestSellersComponent, OffersComponent, TestimonialsComponent, WhyChooseUsComponent, NewsletterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{


}
