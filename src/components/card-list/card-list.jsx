import React, {PureComponent} from 'react';
import CardContainer from '../card/card-container.jsx';

import {cardListPropTypes} from '../../propTypes/propTypes.jsx';
import PlacesListContainer from '../places-list/places-list-container.jsx';

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
    const {mockOffers, location, match} = this.props;


    return (
      <PlacesListContainer location={location}>
        <CardContainer mockOffers={mockOffers} handleCardOut={this.handleCardOut} handleCardOver={this.handleCardOver} path={location.pathname} match={match}/>
      </PlacesListContainer>
    );
  }
}

CardList.propTypes = cardListPropTypes;
