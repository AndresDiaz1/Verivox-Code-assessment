import { Component } from '@angular/core';
import { OffersService } from './services/offers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  offers: any;

  constructor(private offersService: OffersService){}

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.getOffers();
  }

  getOffers() {
    this.offersService.getOffers().subscribe(offers => {
      this.offers = offers;
      console.log('offers', this.offers);
    }, err => {
      console.log('Can not get employees', err);
    });
  }
}
