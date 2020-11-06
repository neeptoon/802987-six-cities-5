import React, {PureComponent} from 'react';
import CardContainer from '../card/card-container.jsx';
import {cardListPropTypes} from '../../propTypes/propTypes.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';

class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this.handleCardOver = this.handleCardOver.bind(this);
    this.handleCardOut = this.handleCardOut.bind(this);
  }

  handleCardOver(evt) {

    const currentID = evt.currentTarget.id;

    this.setState((state, {offers}) => {
      return {
        activeCard: offers.find((offer) => offer.id.toString() === currentID).id
      };
    });
  }

  componentDidUpdate() {
    const {setActiveCard} = this.props;
    setActiveCard(this.state.activeCard);
  }

  handleCardOut() {
    this.setState({activeCard: null});
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


const mapStateToProps = (state) => ({
  activeCard: state.activeCard,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCard(activeCard) {
    dispatch(ActionCreator.setActiveCard(activeCard));
  }
});

CardList.propTypes = cardListPropTypes;

export {CardList};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
