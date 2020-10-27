export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  RECIEVE_OFFER: `RECIEVE_OFFER`
};

export const ActionCreator = {
  changeCity(city) {
    return ({
      type: ActionType.CHANGE_CITY,
      city
    });
  },

  recieveOffer(offerList) {
    return ({
      type: ActionType.RECIEVE_OFFER,
      offerList
    });
  }
};
