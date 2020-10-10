import React from 'react';
import LocationCity from '../location-city/location-city';
import LocationPlace from '../location-place/location-place';
import {cardPropTypes} from '../../propTypes/propTypes';

const LocationItem = ({currentOffer}) => {
  return (
    <li className="favorites__locations-items">
      <LocationCity city={currentOffer.city} />
      <LocationPlace currentOffer={currentOffer}/>
    </li>
  );
};

LocationItem.propTypes = cardPropTypes;

export default LocationItem;

