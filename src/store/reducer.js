import {ActionType} from './action.js';
import {extend} from '../utils.js';

let initialState = {
  cityName: ``,
  offersList: []
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


