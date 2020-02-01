import { Component } from '@angular/core';
import { OffersService } from './services/offers.service';
import { Store } from '@ngrx/store';
import * as fromStore from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  offers: any;
  sortBy: string;
  validFields: string[];
  disableButton: boolean;


  constructor(private store: Store<fromStore.OffersState>, private offersService: OffersService){
    this.validFields = ["downloadSpeed", "uploadSpeed", "price", "name", ];
    this.disableButton = true;
  }

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

  setSortBy(sortValue: string){
    this.sortBy = sortValue.trim();
    this.disableButton = this.validFields.includes(this.sortBy) ? false : true;
  }

  makeSort(){
      this.offers = this.offersService.sortBy(this.offers, this.sortBy);
  }
}
