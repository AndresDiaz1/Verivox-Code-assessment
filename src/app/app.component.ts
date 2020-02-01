import { Component } from '@angular/core';
import { OffersService } from './services/offers.service';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  offers: any;

  constructor(private store: Store<fromStore.OffersState>, private offersService: OffersService){}

  ngOnInit() {
    this.loadOffers();
  }

  loadOffers() {
    this.store.dispatch(new fromStore.LoadOffers);
    this.getOffers();
  }

  getOffers() {
    this.store.select(fromStore.getAllOffers).subscribe(info => {
      this.offers = info;
      if (info['offers'] && info['offers'].length) {
        this.offers = this.offersService.reduceData(info['offers']);
        console.log('Die offers', this.offers);
      }
    });
  }
}
