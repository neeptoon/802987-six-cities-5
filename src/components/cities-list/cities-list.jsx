import React from 'react';
import {cities} from '../../mocks/offers.js';

export const CitiesList = () => {

  return (
    cities.map((city, index) =>
      <li key={index.toString()} className="locations__item">
        <a className="locations__item-link tabs__item" href="#">
          <span>{city}</span>
        </a>
      </li>
    )
  );
};


