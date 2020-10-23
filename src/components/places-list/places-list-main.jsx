import React from 'react';
import {placesListPropTypes} from '../../propTypes/propTypes';
import PlacesList from './places-list';


const PlacesListMain = ({children, className}) => {
  return (
    <PlacesList className={className}>{children}</PlacesList>
  );
};

PlacesListMain.propTypes = placesListPropTypes;

export default PlacesListMain;
