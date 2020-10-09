import React, {PureComponent} from 'react';
import {Card} from '../card/card.jsx';
import {cardListPropTypes} from '../../propTypes/propTypes.jsx';

export class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentCardId: 0
    };
    this.handleCardOver = this.handleCardOver.bind(this);
  }

  handleCardOver(evt) {
    this.setState({currentCardId: evt.currentTarget.id});
  }

  render() {
    const {mockOffers} = this.props;
    const offersList = mockOffers.map((offer, index) =>
      <Card key={index} id={index} offer={offer} handleCardOver={this.handleCardOver}/>
    );

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersList}
      </div>
    );
  }
}

CardList.propTypes = cardListPropTypes;
