import React from 'react';
import {cardListPropTypes} from '../../propTypes/propTypes';
import {CardList} from './card-list';

const CardListNear = ({mockOffers, location, match}) => {
  return (
    <CardList className='near-places__list' mockOffers={mockOffers} location={location} match={match}/>
  );
};

CardListNear.propTypes = cardListPropTypes;

export default CardListNear;
