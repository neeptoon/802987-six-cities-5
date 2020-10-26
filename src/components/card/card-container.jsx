import React from 'react';
import CardFavorites from './card-favorites.jsx';
import CardCity from './card-city.jsx';
import CardNear from './card-near.jsx';
import PropTypes from 'prop-types';


const CardContainer = ({offer, path, handleCardOut, handleCardOver, match}) => {
  switch (path) {
    case `/favorites`:
      return <CardFavorites offer={offer} />;
    case `/offer/${match.params.id}`:
      return <CardNear offer={offer} handleCardOut={handleCardOut} handleCardOver={handleCardOver} />;
  }

  return <CardCity offer={offer} handleCardOut={handleCardOut} handleCardOver={handleCardOver} />;
};

CardContainer.propTypes = {
  handleCardOut: PropTypes.func,
  handleCardOver: PropTypes.func,
  match: PropTypes.object,
  offer: PropTypes.object,
  path: PropTypes.string
};

export default CardContainer;

