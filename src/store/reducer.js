import {ActionType} from './action.js';
import {extend} from '../utils.js';
import {mockOffers} from '../mocks/offers.js';

let initialState = {
  cityName: `Amsterdam`,
  offersList: mockOffers.filter((offer) => offer.city === `Amsterdam`)
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {cityName: action.cityName});

    case ActionType.RECIEVE_OFFER:
      return extend(state, {offersList: action.offersList});
  }

  return state;
};


