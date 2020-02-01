import * as fromOffers from '../actions/offers.actions';

export interface OffersState {
  data: any[];
}

export const initialState: OffersState = {
  data: [],
};

export function reducer(state = initialState, action: fromOffers.OffersActions): OffersState {

  switch (action.type) {
    case fromOffers.LOAD_OFFERS: {
      return {
        ...state,
      };
    }

    case fromOffers.LOAD_OFFERS_SUCCESS: {
      const data = action.payload;
      return {
        ...state,
        data
      };
    }

    case fromOffers.LOAD_OFFERS_FAIL: {
      return {
        ...state,
      };
    }
  }

  return state;
}

export const getEmployees = (state: OffersState) => state.data;

