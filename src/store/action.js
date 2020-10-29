export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER: `GET_OFFER`
};

export const ActionCreator = {
  changeCity(city) {
    return ({
      type: ActionType.CHANGE_CITY,
      cityName: city
    });
  },

  getOffer(offerList) {
    return ({
      type: ActionType.GET_OFFER,
      offerList
    });
  }
};
