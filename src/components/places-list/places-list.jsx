import React from 'react';
import {placesListPropTypes} from '../../propTypes/propTypes';

const PlacesList = ({children, className}) => {
  return (
    <div className={`places__list ${className}`}>
      {children}
    </div>
  );
};

PlacesList.propTypes = placesListPropTypes;

export default PlacesList;
