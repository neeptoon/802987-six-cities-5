import React, {PureComponent} from 'react';
import {Card} from '../card/card.jsx';
import {cardListPropTypes} from '../../propTypes/propTypes.jsx';

export class CardList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {mockOffers} = this.props;
    const offersList = mockOffers.map((offer, index) =>
      <Card key={index} offer={offer} />
    );

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersList}
      </div>
    );
  }
}

CardList.propTypes = cardListPropTypes;
