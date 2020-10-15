import React from 'react';
import {advantagePropTypes} from '../../propTypes/propTypes';

const Advantage = ({advantages}) => {
  return (
    advantages.map((advantage, index) => {
      return (
        <li key={index.toString()} className="property__inside-item">
          {advantage}
        </li>
      );
    })
  );
};

Advantage.propTypes = advantagePropTypes;

export default Advantage;
