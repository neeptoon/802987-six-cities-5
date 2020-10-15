import React from 'react';
import {cardPropTypes} from '../../propTypes/propTypes';
import CardContainer from '../card/card-container.jsx';

const LocationPlace = ({offers, location}) => {
  return (
    <div className="favorites__places">
      <CardContainer mockOffers={offers} path={location}/>
    </div>
  );
};

LocationPlace.propTypes = cardPropTypes;

export default LocationPlace;
