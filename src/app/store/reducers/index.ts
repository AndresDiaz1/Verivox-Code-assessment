import {ActionReducerMap, createSelector} from '@ngrx/store';
import * as fromOffers from './offers.reducers';

export interface OffersState {
  offers: fromOffers.OffersState;
}

export const reducers: ActionReducerMap<OffersState> = {
  offers: fromOffers.reducer,
};

export const  getOffersState = (state: OffersState) => state.offers;
export const getAllOffers = createSelector(getOffersState, (state: fromOffers.OffersState) => state.data);
