import React from 'react';
import {cardPropTypes} from '../../propTypes/propTypes';
import CardListContainer from '../card-list/card-list-container.jsx';

const LocationPlace = ({offers, location, match}) => {
  return (
    <div className="favorites__places">
      <CardListContainer mockOffers={offers} location={location} match={match}/>
    </div>
  );
};

LocationPlace.propTypes = cardPropTypes;

export default LocationPlace;
