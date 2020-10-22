import React from 'react';
import CardListNear from './card-list-near';
import CardListMain from './card-list-main';

const getCardListProxyByPath = (mockOffers, location, match) => {

  switch (location.pathname) {
    case `/`:
      return <CardListMain mockOffers={mockOffers} location={location} match={match}/>;
  }
  return <CardListNear mockOffers={mockOffers} location={location} match={match}/>;

};

const CardListContainer = (props) => {
  const {mockOffers, location, match} = props;

  return (
    getCardListProxyByPath(mockOffers, location, match)
  );
};

export default CardListContainer;
