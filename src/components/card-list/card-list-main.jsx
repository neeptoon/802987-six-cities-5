import React from 'react';
import {cardListPropTypes} from '../../propTypes/propTypes';
import {CardList} from './card-list';

const CardListMain = ({offers, location, match}) => {
  return (
    <CardList className='cities__places-list tabs-content' offers={offers} location={location} match={match}/>
  );
};

CardListMain.propTypes = cardListPropTypes;

export default CardListMain;
