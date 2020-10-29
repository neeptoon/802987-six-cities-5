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

    this.setState((state, {offers}) => {
      return {
        currentCard: offers.find((offer) => offer.id.toString() === currentID)
      };
    });
  }

  handleCardOut() {
    this.setState({currentCard: 0});
  }

  render() {
    const {offers, location, match, className} = this.props;


    return (

      <div className={`places__list ${className}`}>
        {offers.map((offer, id) => <CardContainer key={id.toString()} offer={offer} handleCardOut={this.handleCardOut} handleCardOver={this.handleCardOver} path={location.pathname} match={match} />
        )}
      </div>
    );
  }
}

CardList.propTypes = cardListPropTypes;
