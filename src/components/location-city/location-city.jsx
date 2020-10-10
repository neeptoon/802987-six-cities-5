import React from 'react';
import {cityPropTypes} from '../../propTypes/propTypes';


const LocationCity = ({city}) => {
  return (
    <div className="favorites__locations locations">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
  );
};

LocationCity.propTypes = cityPropTypes;

export default LocationCity;

