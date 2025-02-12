import { Component } from '@angular/core';
import { CountdownModule } from 'ngx-countdown';

@Component({
  selector: 'app-offers',
  imports: [CountdownModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  countdownConfig = {
    leftTime: 86400,  // 24 heures en secondes
    format: 'HH:mm:ss'
  };
}
