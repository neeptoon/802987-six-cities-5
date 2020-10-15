import React from 'react';
import {cardCityPropTypes} from '../../propTypes/propTypes.jsx';
import {Card} from './card.jsx';

const CardCity = ({offer, handleCardOut, handleCardOver}) => {
  return (
    <Card offer={offer} articleClassName='cities__place-card' imageClassName='cities__image-wrapper' imageStyle={{width: `260px`, height: `200px`}} handleCardOut={handleCardOut} handleCardOver={handleCardOver}/>
  );
};

CardCity.propTypes = cardCityPropTypes;

export default CardCity;
