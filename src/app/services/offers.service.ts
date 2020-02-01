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
}
