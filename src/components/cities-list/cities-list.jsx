import React from 'react';
import {cities} from '../../mocks/offers.js';
import {citiesListPropTypes} from '../../propTypes/propTypes.jsx';
import City from '../city/city.jsx';

const CitiesList = ({resetState}) => {
  return (
    cities.map((city, index) =>
      <City key={`${city}-${index.toString()}`} city={city} index={index} resetState={resetState}/>
    )
  );
};


CitiesList.propTypes = citiesListPropTypes;

export default CitiesList;
