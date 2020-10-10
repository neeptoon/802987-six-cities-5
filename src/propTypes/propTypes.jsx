import PropTypes from 'prop-types';

export const mainPropTypes = {
  amountPlaces: PropTypes.number.isRequired,
  mockOffers: PropTypes.array.isRequired,
};

export const appPropTypes = {
  amountPlaces: PropTypes.number.isRequired,
  mockOffers: PropTypes.array.isRequired,
};

export const cardPropTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string,
    city: PropTypes.string,
    name: PropTypes.string,
    mark: PropTypes.bool,
    rating: PropTypes.objectOf(PropTypes.string),
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
    comments: PropTypes.shape({
      user: PropTypes.string,
      userAvatar: PropTypes.string,
      description: PropTypes.string
    })
  }),
};

export const cardListPropTypes = {
  mockOffers: PropTypes.array.isRequired
};

export const cityPropTypes = {
  city: PropTypes.string.isRequired
};
