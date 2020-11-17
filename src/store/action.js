export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFER: `GET_OFFER`,
  SET_ACTIVE_CARD: `GET_ACTIVE_CARD`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

export const ActionCreator = {
  changeCity(city) {
    return ({
      type: ActionType.CHANGE_CITY,
      cityName: city,
    });
  },

  getOffer(offersList) {
    return ({
      type: ActionType.GET_OFFER,
      offersList,
    });
  },

  setActiveCardId(activeCardId) {
    return ({
      type: ActionType.SET_ACTIVE_CARD,
      activeCardId,
    });
  },

  setAuthorization(status) {
    return ({
      type: ActionType.REQUIRED_AUTHORIZATION,
      authorizationStatus: status,
    });
  }
};
