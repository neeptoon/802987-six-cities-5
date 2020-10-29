import React from 'react';
import {cardListPropTypes} from '../../propTypes/propTypes';
import {CardList} from './card-list';

const CardListNear = ({offers, location, match}) => {
  return (
    <CardList className='near-places__list' offers={offers} location={location} match={match}/>
  );
};

CardListNear.propTypes = cardListPropTypes;

export default CardListNear;
