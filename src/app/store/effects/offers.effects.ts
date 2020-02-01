import { Injectable} from '@angular/core';
import { Effect, ofType, Actions, } from '@ngrx/effects';
import * as offersActions from '../actions/offers.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import {OffersService} from '../../services/offers.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class OffersEffects {
  constructor(private actions$: Actions, private offersService: OffersService) {}
  @Effect()
  loadOffers$ = this.actions$.pipe(
    ofType(offersActions.LOAD_OFFERS),
    switchMap(() => {
        return this.offersService.getOffers().pipe(
          map(offers => new offersActions.LoadOffersSucccess(offers)),
          catchError(error => of(new offersActions.LoadOffersFail(error)))
        );
      })
    )
}