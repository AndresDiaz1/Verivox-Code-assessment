import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  getOffers(): Observable<any[]> {
    return this.http.get<any[]>('../../assets/data.json');
  }

  reduceData(offers: any) {
    return offers.map(offer => {
      return {
        downloadSpeed: offer.contractTerm.downloadSpeed.amount,
        downloadUnit: offer.contractTerm.downloadSpeed.unit,
        uploadSpeed: offer.contractTerm.uploadSpeed.amount,
        uploadUnit: offer.contractTerm.uploadSpeed.unit,
        price: offer.cost.effectiveCost.amount,
        name: offer.product.content.text,
        benefits: offer.product,
        URLDesktop: offer.signup.desktop,
        URLResponsive: offer.signup.responsive,
      }
    });
  }
}
