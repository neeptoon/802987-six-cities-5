import React from 'react';
import mapConfig from '../map/config.js';
import Map from '../map/map.jsx';
import {fullOffersScreenPropTypes} from '../../propTypes/propTypes.jsx';


const FullOffersScreen = ({offersBySelectedCities, cityName, ...props}) => {
  const {defaultCityCoordinats, ...config} = mapConfig;
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offersBySelectedCities.length} places to stay in {cityName}</b>
        {props.placesSortForm}
        {props.cardListContainer}
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map defaultCity={defaultCityCoordinats} config={config} offers={offersBySelectedCities} currentCityName={cityName} />
        </section>
      </div>
    </div>
  );
};

export default FullOffersScreen;

FullOffersScreen.propTypes = fullOffersScreenPropTypes;
