import React, {PureComponent} from 'react';
import CardContainer from '../card/card-container.jsx';

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

    return (
      <div className="cities__places-list places__list tabs__content">
        {/* {mockOffers.map((offer, index) =>
          <Card key={index} offer={offer} handleCardOver={this.handleCardOver} handleCardOut={this.handleCardOut} />
        )}; */}

        <CardContainer mockOffers={mockOffers} handleCardOut={this.handleCardOut} handleCardOver={this.handleCardOver}/>
      </div>
    );
  }
}

CardList.propTypes = cardListPropTypes;
