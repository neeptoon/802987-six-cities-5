import React, {Component} from 'react';
import CardContainer from '../card/card-container.jsx';
import {cardListPropTypes} from '../../propTypes/propTypes.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action.js';
import withActiveCardId from '../../hocs/with-active-card-id.jsx';
import {bindActionCreators} from 'redux';

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {activeCardId, state} = this.props;
    activeCardId(state.activeCardId);
  }

  render() {
    const {offers, location, match, className, handleCardOut, handleCardOver} = this.props;
    return (
      <div className={`places__list ${className}`}>
        {offers.map((offer, id) => <CardContainer key={id.toString()} offer={offer} handleCardOut={handleCardOut} handleCardOver={handleCardOver} path={location.pathname} match={match} />
        )}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  activeCardId: state.activeCardId,
});

const mapDispatchToProps = (dispatch) => {
  return ({
    activeCardId: bindActionCreators(ActionCreator.setActiveCardId, dispatch)
  });
};

CardList.propTypes = cardListPropTypes;

export {CardList};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveCardId(CardList));
