import { Component, OnInit } from '@angular/core';
import { BannerComponent } from "./banner/banner.component";

import { WhyChooseUsComponent } from "./why-choose-us/why-choose-us.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, WhyChooseUsComponent, AboutUsComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{


}
