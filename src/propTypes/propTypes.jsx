import PropTypes from 'prop-types';

export const mainPropTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  offersList: PropTypes.array,
  cityName: PropTypes.string,
  changeCity: PropTypes.func,
};

export const appPropTypes = {
  mockOffers: PropTypes.array.isRequired,
};

export const cardPropTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string,
    city: PropTypes.string,
    name: PropTypes.string,
    mark: PropTypes.bool,
    rating: PropTypes.number,
    ratingStyle: PropTypes.shape({
      width: PropTypes.string
    }),
    price: PropTypes.shape({
      value: PropTypes.string,
      period: PropTypes.string
    }),
    img: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    features: PropTypes.shape({
      type: PropTypes.string,
      bedrooms: PropTypes.string,
      adult: PropTypes.string,
    }),
    advantages: PropTypes.arrayOf(PropTypes.string),
    host: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    }),
    comments: PropTypes.arrayOf(PropTypes.shape({
      user: PropTypes.string,
      userAvatar: PropTypes.string,
      description: PropTypes.string
    })),
  }),
};

export const hostPropTypes = cardPropTypes.host;

export const cityPropTypes = {
  city: PropTypes.string.isRequired,
  index: PropTypes.number,
  cityName: PropTypes.string,
  changeCity: PropTypes.func,
  resetState: PropTypes.func,
};

export const imagePropTypes = {
  src: PropTypes.array.isRequired
};

export const advantagePropTypes = {
  advantages: PropTypes.array.isRequired
};

export const reviewPropTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string,
    userAvatar: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.object
  }))
};

export const roomPropTypes = {
  match: PropTypes.object,
  offersList: PropTypes.array.isRequired
};


export const cardCityPropTypes = {
  offer: PropTypes.object,
  handleCardOut: PropTypes.func,
  handleCardOver: PropTypes.func
};


export const cardListPropTypes = {
  match: PropTypes.object,
  offers: PropTypes.array,
  location: PropTypes.object,
};

export const placesListPropTypes = {
  children: PropTypes.element
};

export const citiesListPropTypes = {
  changeCities: PropTypes.func,
};

export const placesSortOptionPropTypes = {
  state: PropTypes.object,
};

export const placesSortFormPropTypes = {
  reverseState: PropTypes.func,
  sortListState: PropTypes.object
};

export const emptyOffersScreenPropTypes = {
  cityName: PropTypes.string,
};


export const fullOffersScreenPropTypes = {
  offersBySelectedCities: PropTypes.array,
  cityName: PropTypes.string,
};
