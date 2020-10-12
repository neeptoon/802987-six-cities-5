import PropTypes from 'prop-types';

export const mainPropTypes = {
  mockOffers: PropTypes.array.isRequired,
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

export const cardListPropTypes = {
  mockOffers: PropTypes.array.isRequired
};

export const cityPropTypes = {
  city: PropTypes.string.isRequired
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
