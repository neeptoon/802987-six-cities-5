import React from 'react';
import {hostPropTypes} from '../../propTypes/propTypes';


const Host = ({hostInfo}) => {


  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
          <img className="property__avatar user__avatar" src={hostInfo.avatar} width="74" height="74" alt="Host avatar" />
        </div>
        <span className="property__user-name">
          {hostInfo.name}
        </span>
      </div>
      <div className="property__description">
        {hostInfo.description.split(`.`).map((sentence, index) => {
          return (
            <p key={index + new Date()} className="property__text">
              {sentence}.
            </p>
          );
        })}
      </div>
    </div>
  );
};

Host.propTypes = hostPropTypes;

export default Host;
