import {ActionType} from '../../action.js';
import {extend} from '../../../utils.js';

let initialState = {
  cityName: `Amsterdam`,
  activeCardId: null,
};


export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {cityName: action.cityName});

    case ActionType.SET_ACTIVE_CARD:
      return extend(state, {activeCardId: action.activeCardId});

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {authorizationStatus: action.authorizationStatus});
  }

  return state;
};
