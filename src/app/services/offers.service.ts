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
    return offers.map(offer => 
       ({
        downloadSpeed: offer.contractTerm.downloadSpeed.amount,
        downloadUnit: offer.contractTerm.downloadSpeed.unit,
        uploadSpeed: offer.contractTerm.uploadSpeed.amount,
        uploadUnit: offer.contractTerm.uploadSpeed.unit,
        price: offer.cost.effectiveCost.amount,
        name: offer.product.content.text,
        benefit1: offer.product.hasPhoneFlatrate,
        benefit2: offer.product.isTHomeAccess,
        benefit3: offer.product.isForStudents,
        benefit4: offer.product.positionZeroStatus,
        benefit5: offer.product.isSpecialOffer ,
        benefit6: offer.product.isForBusinessCustomers,
        URLDesktop: offer.signup.desktop,
        URLResponsive: offer.signup.responsive,
      })
    );
  }

  sortBy(data, selector){
    return data.sort((a,b) => {return a[selector].localeCompare(b[selector])});
  }
}
