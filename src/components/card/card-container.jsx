import React from 'react';
import CardFavorites from './card-favorites.jsx';
import CardCity from './card-city.jsx';
import PropTypes from 'prop-types';

const getCardProxyByPath = (offer, path, props) => {
  const {handleCardOut, handleCardOver} = props;

  switch (path.pathname) {
    case `/favorites`:
      return <CardFavorites key={offer.id.toString()} offer={offer}/>;
  }

  return <CardCity key={offer.id.toString()} offer={offer} handleCardOut={handleCardOut} handleCardOver={handleCardOver}/>;
};

const CardContainer = ({mockOffers, path = `null`, ...props}) => {
  return (
    mockOffers.map((offer) => {
      return getCardProxyByPath(offer, path, props);
    })
  );
};

getCardProxyByPath.propTypes = {
  handleCardOut: PropTypes.function,
  handleCardOver: PropTypes.function
};

export default CardContainer;

