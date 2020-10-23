import React from 'react';
import {placesListPropTypes} from '../../propTypes/propTypes';
import PlacesList from './places-list';

const PlacesListNear = ({children, className}) => {
  return (
    <PlacesList className={className}>{children}</PlacesList>
  );
};

PlacesListNear.propTypes = placesListPropTypes;

export default PlacesListNear;
