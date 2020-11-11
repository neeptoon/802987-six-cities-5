export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER: `GET_OFFER`,
  SET_ACTIVE_CARD: `GET_ACTIVE_CARD`,
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
  },

  setActiveCardId(activeCardId) {
    return ({
      type: ActionType.SET_ACTIVE_CARD,
      activeCardId,
    });
  }
};
