import React from 'react';
import {cardPropTypes} from '../../propTypes/propTypes.jsx';

export const Premium = ({isPremium}) => {

  return (
  <>
      {isPremium &&
        <div className='place-card__mark' >
          <span>Premium</span>
        </div>}
  </>
  );
};

Premium.propTypes = cardPropTypes;
