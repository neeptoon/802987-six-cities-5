import {ActionType} from './action.js';
import {extend} from '../utils.js';
import {mockOffers} from '../mocks/offers.js';

let initialState = {
  cityName: `Amsterdam`,
  offersList: mockOffers,
  activeCard: null,
};


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {cityName: action.cityName});

    case ActionType.GET_OFFER:
      return extend(state, {offersList: action.offersList});

    case ActionType.GET_ACTIVE_CARD:
      return extend(state, {activeCard: action.activeCard});
  }

  return state;
};


