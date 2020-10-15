import React from 'react';
import {imagePropTypes} from '../../propTypes/propTypes';

const Image = ({src}) => {
  return (
    src.map((path, index) => {
      return (
        <div key={index.toString()} className="property__image-wrapper">
          <img className="property__image" src={path} alt="Photo studio" />
        </div>
      );
    })
  );
};

Image.propTypes = imagePropTypes;

export default Image;


