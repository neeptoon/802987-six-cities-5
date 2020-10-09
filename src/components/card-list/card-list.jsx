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
    this.handleCardOut = this.handleCardOut.bind(this);
  }

  handleCardOver(evt) {
    const currentID = evt.currentTarget.id;

    this.setState((state, props) => {
      return {
        currentCardId: props.mockOffers.find((offer) => {
          return offer.id === currentID;
        })
      };
    });
  }

  handleCardOut() {
    this.setState({currentCardId: 0});
  }

  render() {
    const {mockOffers} = this.props;
    const offersList = mockOffers.map((offer, index) =>
      <Card key={index} id={index} offer={offer} handleCardOver={this.handleCardOver} handleCardOut={this.handleCardOut}/>
    );

    return (
      <div className="cities__places-list places__list tabs__content">
        {offersList}
      </div>
    );
  }
}

CardList.propTypes = cardListPropTypes;
