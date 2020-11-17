import {ActionType} from '../../action.js';
import {extend} from '../../../utils.js';

let initialState = {
  offersList: [],
};


export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_OFFER:
      return extend(state, {offersList: action.offersList});
  }

  return state;
};
