import React, {PureComponent} from 'react';
import CardContainer from '../card/card-container.jsx';

import {cardListPropTypes} from '../../propTypes/propTypes.jsx';
import PlacesSortForm from '../places-sort-form/places-sort-form.jsx';

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
    const {mockOffers, location} = this.props;


    return (
      <section className="cities__places places">
        {(location.pathname === `/`) ?
          <>
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{mockOffers.length} places to stay in Amsterdam</b>
          </> :
          <h2 className="near-places__title">Other places in the neighbourhood</h2>}

        {(location.pathname === `/`) && <PlacesSortForm />}

        <div className="cities__places-list places__list tabs__content">
          <CardContainer mockOffers={mockOffers} handleCardOut={this.handleCardOut} handleCardOver={this.handleCardOver} path={location.pathname}/>
        </div>
      </section>


    );
  }
}

CardList.propTypes = cardListPropTypes;
