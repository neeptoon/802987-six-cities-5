import React from 'react';
import LocationCity from '../location-city/location-city';
import LocationPlace from '../location-place/location-place';
import {cardPropTypes} from '../../propTypes/propTypes';

const LocationItem = ({mockOffers, location, match}) => {
  const favoriteOffers = mockOffers.filter((offer) => offer.favorite === true);
  return (
    favoriteOffers.map((offer, index) => {
      return (
        <li key={index.toString()} className="favorites__locations-items">
          <LocationCity city={offer.city} />
          <LocationPlace offers={favoriteOffers} location={location} match={match}/>
        </li>
      );
    })


  );
};

LocationItem.propTypes = cardPropTypes;

export default LocationItem;

