import React from 'react';
import {cardListPropTypes} from '../../propTypes/propTypes';
import {CardList} from './card-list';

const CardListMain = ({mockOffers, location, match}) => {
  return (
    <CardList sectionClassName='cities__places' mockOffers={mockOffers} location={location} match={match}/>
  );
};

CardListMain.propTypes = cardListPropTypes;

export default CardListMain;
