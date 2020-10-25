import React from 'react';
import CardListNear from './card-list-near';
import CardListMain from './card-list-main';
import {cardListPropTypes} from '../../propTypes/propTypes.jsx';


const CardListContainer = (props) => {
  const {mockOffers, location, match} = props;

  switch (location.pathname) {
    case `/`:
      return <CardListMain mockOffers={mockOffers} location={location} match={match}/>;
  }
  return <CardListNear mockOffers={mockOffers} location={location} match={match}/>;
};

CardListContainer.propTypes = cardListPropTypes;

export default CardListContainer;
