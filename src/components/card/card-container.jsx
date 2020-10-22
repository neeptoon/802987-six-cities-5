import React from 'react';
import CardFavorites from './card-favorites.jsx';
import CardCity from './card-city.jsx';
import CardNear from './card-near.jsx';
import PropTypes from 'prop-types';

const getCardProxyByPath = (offer, path, props) => {
  const {handleCardOut, handleCardOver, match} = props;

  switch (path) {
    case `/favorites`:
      return <CardFavorites key={offer.id.toString()} offer={offer} />;
    case `/offer/${match.params.id}`:
      return <CardNear key={offer.id.toString()} offer={offer} handleCardOut={handleCardOut} handleCardOver={handleCardOver}/>;
  }

  return <CardCity key={offer.id.toString()} offer={offer} handleCardOut={handleCardOut} handleCardOver={handleCardOver}/>;
};

const CardContainer = ({mockOffers, path, ...props}) => {
  return (
    mockOffers.map((offer) => {
      return getCardProxyByPath(offer, path, props);
    })
  );
};

getCardProxyByPath.propTypes = {
  handleCardOut: PropTypes.function,
  handleCardOver: PropTypes.function,
  match: PropTypes.object
};

export default CardContainer;

