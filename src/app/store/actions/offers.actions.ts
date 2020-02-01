import { Action } from '@ngrx/store';

export const LOAD_OFFERS = '[Offers] Load Offers';
export const LOAD_OFFERS_FAIL = '[Offers] Load Offers Fail';
export const LOAD_OFFERS_SUCCESS = '[Offers] Load Offers Success';

export class LoadOffers implements  Action {
  readonly type = LOAD_OFFERS;
}

export class LoadOffersFail implements  Action {
  readonly type = LOAD_OFFERS_FAIL;
  constructor(public payload: any) {}
}

export class LoadOffersSucccess implements  Action {
  readonly type = LOAD_OFFERS_SUCCESS;
  constructor(public payload: any) {}
}

export type OffersActions = LoadOffers | LoadOffersFail | LoadOffersSucccess;
