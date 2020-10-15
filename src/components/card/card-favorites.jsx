import React from 'react';
import PropTypes from 'prop-types';
import {Card} from './card.jsx';

const CardFavorites = ({offer}) => {
  return (
    <Card offer={offer} articleClassName='favorites__card' imageClassName='favorites__image-wrapper' imageStyle={{width: `150px`, height: `110px`}} />
  );
};

CardFavorites.propTypes = {
  offer: PropTypes.object
};

export default CardFavorites;
