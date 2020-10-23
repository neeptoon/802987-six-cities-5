import React from 'react';
import PlacesListNear from './places-list-near.jsx';
import PlacesListMain from './places-list-main.jsx';
import {placesListContainerPropTypes} from '../../propTypes/propTypes.jsx';


const getPlacesListByPath = (location, children) => {
  switch (location.pathname) {
    case `/`:
      return <PlacesListMain location={location} className='cities__places-list tabs-content'>{children}</PlacesListMain>;
  }
  return <PlacesListNear location={location} className='near-places__list'>{children}</PlacesListNear>;
};

const PlacesListContainer = ({location, children}) => {
  return (
    getPlacesListByPath(location, children)
  );
};

PlacesListContainer.propTypes = placesListContainerPropTypes;

export default PlacesListContainer;
