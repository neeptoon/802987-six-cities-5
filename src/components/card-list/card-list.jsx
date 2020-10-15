import React, {PureComponent} from 'react';
import {Card} from '../card/card.jsx';

import {cardListPropTypes} from '../../propTypes/propTypes.jsx';

export class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: 0
    };
    this.handleCardOver = this.handleCardOver.bind(this);
    this.handleCardOut = this.handleCardOut.bind(this);
  }

  handleCardOver(evt) {
    const currentID = evt.currentTarget.id;

    this.setState((state, {mockOffers}) => {
      return {
        currentCard: mockOffers.find((offer) => offer.id.toString() === currentID)
      };
    });
  }

  handleCardOut() {
    this.setState({currentCard: 0});
  }

  render() {
    const {mockOffers} = this.props;
    const offersList = mockOffers.map((offer, index) =>
      <Card key={index} offer={offer} handleCardOver={this.handleCardOver} handleCardOut={this.handleCardOut}/>
    );

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersList}
      </div>
    );
  }
}

CardList.propTypes = cardListPropTypes;
