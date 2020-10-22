import React from 'react';
import {placesListPropTypes} from '../../propTypes/propTypes';

const PlacesList = (props) => {
  return (
    <div className='places__list'>
      {props.children}
    </div>
  );
};

PlacesList.propTypes = placesListPropTypes;

export default PlacesList;
