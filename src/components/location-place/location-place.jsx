import React from 'react';
import {cardPropTypes} from '../../propTypes/propTypes';
import FavoritesCard from '../favorites-card/favorites-card.jsx';

const LocationPlace = ({currentOffer}) => {
  return (
    <div className="favorites__places">
      <FavoritesCard currentOffer={currentOffer}/>
    </div>
  );
};

LocationPlace.propTypes = cardPropTypes;

export default LocationPlace;
