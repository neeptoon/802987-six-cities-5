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
        activeCardId: offers.find((offer) => offer.id.toString() === currentID).id
      };
    });
  }

  componentDidUpdate() {
    const {setActiveCardId} = this.props;
    setActiveCardId(this.state.activeCardId);
  }

  handleCardOut() {
    this.setState({activeCardId: null});
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
  activeCardId: state.activeCardId,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveCardId(activeCardId) {
    dispatch(ActionCreator.setActiveCardId(activeCardId));
  }
});

CardList.propTypes = cardListPropTypes;

export {CardList};
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
