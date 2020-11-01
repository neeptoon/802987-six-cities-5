import React from 'react';
import {placesSortOptionPropTypes} from '../../propTypes/propTypes';


const PlacesSortOption = ({sortListState}) => {

  const options = [`Popular`, `Price: low to high`, `Price: low to high`, `Top rated first`];
  const closedClassName = `places__options places__options--custom`;
  const opendClassName = `places__options places__options--custom places__options--opened`;

  return (
    <ul className={sortListState.isSortListOpen ? opendClassName : closedClassName}>
      {options.map((option, index) => <li key={`${option}-${index.toString()}`} className="places__option" tabIndex="0">{option}</li>)}
    </ul>
  );
};

PlacesSortOption.propTypes = placesSortOptionPropTypes;

export default PlacesSortOption;
