import React from 'react';
import {Card} from './card.jsx';
import {cardCityPropTypes} from '../../propTypes/propTypes.jsx';

const CardNear = ({offer, handleCardOut, handleCardOver}) => {
  return (
    <Card offer={offer} articleClassName='near-places__card' imageClassName='near-places__image-wrapper' imageStyle={{width: `260px`, height: `200px`}} handleCardOut={handleCardOut} handleCardOver={handleCardOver}/>
  );
};

CardNear.propTypes = cardCityPropTypes;

export default CardNear;
